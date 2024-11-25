using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class DeadlineTaskController : CrudBaseController<DeadlineTask>
{
    public DeadlineTaskController(IRepository<DeadlineTask> repository) : base(repository)
    {
    }
}