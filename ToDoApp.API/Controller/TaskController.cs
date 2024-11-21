using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class TaskController : CrudBaseController<Task>
{
    public TaskController(IRepository<Task> repository) : base(repository)
    {
    }
}