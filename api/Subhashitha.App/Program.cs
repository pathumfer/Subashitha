using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowCloudflare", policy =>
    {
        policy.WithOrigins("https://subhashitha.example.com")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddRazorPages();
builder.Services.AddControllers();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("AllowCloudflare");

// Origin lock middleware
app.Use(async (context, next) =>
{
    if (!app.Environment.IsDevelopment())
    {
        var originSecret = context.Request.Headers["X-Origin-Secret"].ToString();
        var expectedSecret = Environment.GetEnvironmentVariable("ORIGIN_SECRET");

        if (string.IsNullOrEmpty(originSecret) || originSecret != expectedSecret)
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("Forbidden");
            return;
        }
    }

    await next();
});

// Security headers middleware
app.Use(async (context, next) =>
{
    context.Response.Headers["X-Content-Type-Options"] = "nosniff";
    context.Response.Headers["X-Frame-Options"] = "DENY";
    context.Response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
    context.Response.Headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'";

    await next();
});

// Health check endpoint
app.MapGet("/api/v1/health", () =>
{
    return Results.Ok(new
    {
        status = "ok",
        database = System.IO.File.Exists("App_Data/current.txt")
            ? System.IO.File.ReadAllText("App_Data/current.txt").Trim()
            : (string?)null
    });
});

// Placeholder search endpoint
app.MapGet("/api/v1/search", (string q) =>
{
    return Results.Ok(new
    {
        query = q,
        results = new object[] { }
    });
});

app.MapRazorPages();
app.MapControllers();

await app.RunAsync();
