using System.Net;
using System.Text.Json;
public class ErrorHandlingMiddleware{
    private readonly RequestDelegate _next;
    public ErrorHandlingMiddleware(RequestDelegate next){
        _next = next;
    }

    public async System.Threading.Tasks.Task Invoke(HttpContext context){
        try{
            await _next(context);
        }
        catch(Exception e){
            await HandleExceptionAsync(context,e);
        }
    }

    private static System.Threading.Tasks.Task HandleExceptionAsync(HttpContext context, Exception e)
    {
        var statusCode = HttpStatusCode.InternalServerError;
        var result = JsonSerializer.Serialize(new { error = e.Message });
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)statusCode;

        // Poprawne zwrócenie Task
        return context.Response.WriteAsync(result);
    }
}
