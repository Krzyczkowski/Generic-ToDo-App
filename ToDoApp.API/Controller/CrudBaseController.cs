using Microsoft.AspNetCore.Mvc;

public class CrudBaseController<T> : ControllerBase, IApiController<T>
    where T : BaseEntity
{
    private readonly IRepository<T> _repository;

    public CrudBaseController(IRepository<T> repository)
    {
        _repository = repository;
    }

    [HttpPost("GetAll")]
    public async Task<IEnumerable<T>>? GetAll([FromBody] GetRequest<T>? request = null)
    {
        return await _repository.GetAll(request);
    }

    [HttpGet("{id}")]
    public async Task<T>? Get(Guid id)
    {
        return await _repository.GetById(id);
    }

    [HttpPost]
    public async Task<T> Post(T entity)
    {
        return await _repository.Add(entity);
    }

    [HttpPut]
    public async Task<T>? Put(T entity)
    {
        return await _repository.Update(entity);
    }

    [HttpDelete("{id}")]
    public void Delete(Guid id)
    {
        _repository.Delete(id);
    }


}