using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();  
builder.Services.AddScoped<IRepository<Task>, SQLRepository<Task>>();
// services.AddScoped<IRepository<Tax>, SQLRepository<Tax>>();
// services.AddScoped<IRepository<Tax>, SQLRepository<Tax>>();
builder.Services.AddDbContext<MasterContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
var app = builder.Build();
app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseHttpsRedirection();  
app.MapControllers(); 
app.Run();  


 