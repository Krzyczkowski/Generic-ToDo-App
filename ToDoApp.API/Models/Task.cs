public class Task():BaseEntity{
    public string Name{ get; set; } = string.Empty;
    public string Description {get;set;} = string.Empty;
    public string Status {get;set;} = string.Empty;
    public DateTime StatusUpdatedDate { get; set; } = DateTime.Now;
    public int Priority{get;set;}

    
}