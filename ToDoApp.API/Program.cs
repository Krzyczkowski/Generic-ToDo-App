using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IRepository<Task>, SQLRepository<Task>>();
builder.Services.AddScoped<IRepository<DeadlineTask>, SQLRepository<DeadlineTask>>();
builder.Services.AddScoped<IRepository<RecurringTask>, SQLRepository<RecurringTask>>();
builder.Services.AddDbContext<MasterContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:3000") 
              .AllowAnyHeader() 
              .AllowAnyMethod(); 
    });
});

var app = builder.Build();


app.UseSwagger();  
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"); 
    c.RoutePrefix = string.Empty; 
});

app.UseCors("AllowSpecificOrigin");
app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseHttpsRedirection();
app.MapControllers();
app.Run();
