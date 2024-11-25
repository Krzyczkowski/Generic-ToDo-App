using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();  
builder.Services.AddScoped<IRepository<Task>, SQLRepository<Task>>();
builder.Services.AddScoped<IRepository<DeadlineTask>, SQLRepository<DeadlineTask>>();
builder.Services.AddDbContext<MasterContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Adres frontendowy
              .AllowAnyHeader() // Zezwalaj na dowolne nagłówki
              .AllowAnyMethod(); // Zezwalaj na dowolne metody (GET, POST itp.)
    });
});


var app = builder.Build();
app.UseCors("AllowSpecificOrigin");
app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseHttpsRedirection();  
app.MapControllers(); 
app.Run();  


 