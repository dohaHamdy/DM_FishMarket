
namespace webapi.Migration.migrationFiles;

using FluentMigrator;
using FluentMigrator.SqlServer;
using Microsoft.AspNetCore.Http.HttpResults;

[Migration(230908053600)]
public class Migration_230908053600 : Migration
{
    public override void Down()
    {
        Delete.Table("Employee");
    }

    public override void Up()
    {
        Create.Table("Employee")
            .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
            .WithColumn("FirstName").AsString().NotNullable()
            .WithColumn("LastName").AsString().NotNullable()
            .WithColumn("Age").AsInt32().Nullable();
    }
}
