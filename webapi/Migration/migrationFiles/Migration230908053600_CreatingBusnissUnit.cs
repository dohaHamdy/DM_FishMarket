
namespace webapi.Migration.migrationFiles;

using FluentMigrator;
using FluentMigrator.SqlServer;
using Microsoft.AspNetCore.Http.HttpResults;

[Migration(230908053600)]
public class Migration230908053600_CreatingBusnissUnit : Migration
{
    public override void Down()
    {
       
    }

    public override void Up()
    {

        Create.Table("BusnissUnit")
            .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
            .WithColumn("Name").AsString().NotNullable()
            .WithColumn("OwnerName").AsString().Nullable()
            .WithColumn("OwnerPhone").AsString().Nullable()
            .WithColumn("OwnerEmail").AsString().NotNullable()
            .WithColumn("OwnerSignature").AsBinary().Nullable()
            .WithColumn("OwnerProfitPercentage").AsDecimal(5,2).WithDefaultValue(50).NotNullable();

    }
}
