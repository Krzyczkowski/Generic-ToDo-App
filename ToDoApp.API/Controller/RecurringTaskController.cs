using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class RecurringTaskController : CrudBaseController<RecurringTask>
{
    public RecurringTaskController(IRepository<RecurringTask> repository) : base(repository)
    {
    }
}