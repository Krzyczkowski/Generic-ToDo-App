using System.ComponentModel.DataAnnotations;
public class Task():BaseEntity{
    // [Required]
    // [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 30 characters.")]
    public string Name{ get; set; } = string.Empty;
        // [Required]
    // [StringLength(100, MinimumLength = 5, ErrorMessage = "Description must be between 5 and 100 characters.")]
    public string Description {get;set;} = string.Empty;
    // [RegularExpression("^(active|abandoned|completed)$", ErrorMessage = "Status must be 'active', 'abandoned' or 'completed'.")]
    public string Status {get;set;} = string.Empty;
    public DateTime StatusUpdatedDate { get; set; } = DateTime.Now;
    public int Priority{get;set;}

    
}