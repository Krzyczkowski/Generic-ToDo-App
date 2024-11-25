

using Microsoft.EntityFrameworkCore;

public class MasterContext : DbContext
{
  public DbSet<Task> Task { get; set; } = null!;
  public DbSet<DeadlineTask> DeadlineTask { get; set; } = null!;

  public MasterContext(DbContextOptions<MasterContext> options)
     : base(options)
  {
  }
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Task>()
        .HasDiscriminator<string>("TaskType")
        .HasValue<Task>("Task")               
        .HasValue<DeadlineTask>("DeadlineTask")
        .HasValue<RecurringTask>("RecurringTask");  
}

}