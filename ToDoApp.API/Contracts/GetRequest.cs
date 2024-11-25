using System.Linq.Expressions;

public class GetRequest<T> where T : BaseEntity
{
    public Expression<Func<T, bool>>? Filter { get; set; } = null;
    public Func<IQueryable<T>, IOrderedQueryable<T>>? OrderBy { get; set; } = null;
    public int? Skip { get; set; } = null;
    public int? Take { get; set; } = null;
    public string? TaskType { get; set; } = null; 
}