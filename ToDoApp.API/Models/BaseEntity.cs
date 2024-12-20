public abstract class BaseEntity
{
    public Guid Id { get;set; } = Guid.NewGuid();
    public DateTime CreatedDate { get; set; } = DateTime.Now;

    public Guid UserId { get;set;} = Guid.NewGuid();
       
}