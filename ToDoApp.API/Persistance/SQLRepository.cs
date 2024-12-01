using System.Collections.Immutable;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
public class SQLRepository<T> : IRepository<T> where T : BaseEntity
{
    private readonly MasterContext _context;

    public SQLRepository(MasterContext context)
    {
        _context = context;
    }

    public async Task<T> Add(T entity)
    {
        var addedEntity = (await _context.AddAsync(entity)).Entity;
        _context.SaveChanges();
        return addedEntity;
    }

    public void Delete(Guid entityId)
    {
        var entity = _context.Find<T>(entityId);
        if (entity != null) _context.Remove(entity);
        _context.SaveChanges();
    }

    public async Task<IEnumerable<T>> GetAll(GetRequest<T> request)
    {
        IQueryable<T> query = _context.Set<T>();

        //filtr dla tasktype
        if (!string.IsNullOrEmpty(request.TaskType))
            query = query.Where(x => EF.Property<string>(x, "TaskType") == request.TaskType);
        //sortowanie wyników
        //https://asontu.github.io/2020/04/02/a-better-way-to-do-dynamic-orderby-in-c-sharp.html
        // if (request.OrderByField != null)
        // {
        //     var parameter = Expression.Parameter(typeof(T), "x");
        //     var property = Expression.Property(parameter, request.OrderByField);
        //     var lambda = Expression.Lambda<Func<T, object>>(property, parameter);

            //     if (request.OrderDescending)
            //         query = query.OrderByDescending(lambda);
            //     else
            //         query = query.OrderBy(lambda);
            // } 

            //paginacja
        if (request.Skip.HasValue)
                query = query.Skip(request.Skip.Value);
            if (request.Take.HasValue)
                query = query.Take(request.Take.Value);

            return await query.ToListAsync();
        }

    public async Task<T?> GetById(Guid entityId)
    {
        return await _context.FindAsync<T>(entityId);
    }

    public async Task<T> Update(T entity)
    {
        var existingEntity = await _context.FindAsync<T>(entity.Id);
        if (existingEntity == null)
            throw new KeyNotFoundException($"Entity with id {entity.Id} not found.");
        var objectProperties = entity.GetType().GetProperties();
        foreach (var property in objectProperties)
        {
            var value = property.GetValue(entity);
            //sprawdzenie czy wartosci nie są puste
            if (value != null && !(value is string str && string.IsNullOrWhiteSpace(str)))
            {
                property.SetValue(existingEntity, value);
            }
        }
        var updatedDateProperty = typeof(T).GetProperty("StatusUpdatedDate");
        if(updatedDateProperty!=null)
            updatedDateProperty.SetValue(existingEntity,DateTime.Now);

        await _context.SaveChangesAsync();
        return existingEntity;
    }
}