namespace webapi.Migration;

using Dapper;
using FluentMigrator.Runner;
using System.Data.SqlClient;
using System.Linq;

public static class MigrationExtension
{
    public static void EnsureDatabase(string connectionString, string name)
    {
        var parameters = new DynamicParameters();
        parameters.Add("name", name);
        using var connection = new SqlConnection(connectionString);
        var records = connection.Query("SELECT * FROM sys.databases WHERE name = @name",
             parameters);
        if (!records.Any())
        {
            connection.Execute($"CREATE DATABASE {name}");
        }
    }

    public static IApplicationBuilder Migrate(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        var runner = scope.ServiceProvider.GetService<IMigrationRunner>();
        if (runner!=null)
        {
            runner.ListMigrations();
            runner.MigrateUp();
        }
        return app;
    }
}