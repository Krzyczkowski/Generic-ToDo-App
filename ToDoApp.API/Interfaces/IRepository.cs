public interface IRepository<T> where T : BaseEntity
{
    Task<T> Add(T entity);
    Task<T> Update(T entity);
    void Delete(Guid entityId);
    Task<IEnumerable<T>> GetAll(GetRequest<T>? request);
    Task<T?> GetById(Guid entityId);
}