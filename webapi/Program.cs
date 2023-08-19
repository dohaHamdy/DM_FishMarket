using FluentMigrator.Runner;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using webapi.Migration;
using webapi.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<BusnissUnitService, BusnissUnitService>();



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
    .AddAuthorization()
    .AddCors(options =>
    {
        options.AddPolicy(name: MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.WithOrigins("https://localhost:3000/"); // add the allowed origins  
                          });
    })
      .AddLogging(c => c.AddFluentMigratorConsole())
      .AddFluentMigratorCore()
      .ConfigureRunner(c => c
          .AddSqlServer2012()
          .WithGlobalConnectionString("Data Source=.;Initial Catalog=MasterFishMarket;Integrated Security=True")
          .ScanIn(Assembly.GetExecutingAssembly()).For.All()
          )
      .AddControllers();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(MyAllowSpecificOrigins);
MigrationExtension.EnsureDatabase(
        app.Configuration.GetConnectionString("SQLServerConnection")??"",
        app.Configuration.GetValue<string>("ExtraLocalSetting:MasterDataBase") ?? "");

app.Migrate();
app.Run();
