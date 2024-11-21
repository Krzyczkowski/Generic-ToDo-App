public interface IApiController<T> where T : BaseEntity
{
    public Task<IEnumerable<T>>? GetAll(GetRequest<T>? request);
    public Task<T>? Get(Guid id);
    public Task<T> Post(T entity);
    public Task<T>? Put(T entity);
    public void Delete(Guid id);
}