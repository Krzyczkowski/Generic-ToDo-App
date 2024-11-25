using Microsoft.EntityFrameworkCore;
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

        if (!string.IsNullOrEmpty(request.TaskType))
        {
            query = query.Where(x => EF.Property<string>(x, "TaskType") == request.TaskType);
        }

        if (request.Filter != null)
        {
            query = query.Where(request.Filter);
        }

        if (request.OrderBy != null)
        {
            query = request.OrderBy(query);
        }

        if (request.Skip.HasValue)
        {
            query = query.Skip(request.Skip.Value);
        }

        if (request.Take.HasValue)
        {
            query = query.Take(request.Take.Value);
        }

        return query.ToList();
    }

    public async Task<T?> GetById(Guid entityId)
    {
        return await _context.FindAsync<T>(entityId);
    }

    public async Task<T> Update(T entity)
    {
        var updatedEntity = _context.Update(entity).Entity;
        await _context.SaveChangesAsync();
        return updatedEntity;
    }
}