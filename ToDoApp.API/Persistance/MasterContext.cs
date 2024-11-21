

using Microsoft.EntityFrameworkCore;

public class MasterContext : DbContext
{
  public DbSet<Task> Task { get; set; }=null!;

     public MasterContext(DbContextOptions<MasterContext> options)
        : base(options)
    {
    }

}