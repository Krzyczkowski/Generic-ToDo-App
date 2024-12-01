using System.Linq.Expressions;

public class GetRequest<T> where T : BaseEntity{
    public int? Skip { get; set; } = null;
    public int? Take { get; set; } = null;
    public string? TaskType { get; set; } = null;
    public string? OrderByField { get; set; } = null; 
    public bool OrderDescending { get; set; } = false; 
}