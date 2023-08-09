using FluentMigrator.Runner;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using webapi.Migration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
      .AddLogging(c => c.AddFluentMigratorConsole())
      .AddFluentMigratorCore()
      .ConfigureRunner(c => c
          .AddSqlServer2012()
          .WithGlobalConnectionString("Data Source=.;Initial Catalog=MasterFishMarket;Integrated Security=True")
          .ScanIn(Assembly.GetExecutingAssembly()).For.All()
          );



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

MigrationExtension.EnsureDatabase(
        app.Configuration.GetConnectionString("SQLServerConnection")??"",
        app.Configuration.GetValue<string>("ExtraLocalSetting:MasterDataBase") ?? "");

app.Migrate();
app.Run();
