using System.Data.SqlClient;
using System.Text.Json;
using System.Text.Json.Serialization;
using webapi.Model;
using webapi.Service.Helper;

namespace webapi.Service
{
    public class BusnissUnitService
    {
        readonly SqlConnection connection;
        public BusnissUnitService(IConfiguration configuration) {
            connection = new SqlConnection(configuration.GetConnectionString("MasterFishMarketConnection"));
        }
        
        public IEnumerable<BusnissUnit> GetAll()
        {
            connection.Open();
            
            string sql =string.Format(HelperSqlCommands.getColumnsFromTable,BusnissUnitHelper.ColumnsName, BusnissUnitHelper.TableName);
                SqlCommand command= new SqlCommand(sql, connection);
            SqlDataReader reader = command.ExecuteReader();
            List<BusnissUnit> BusnissUnitList = new List<BusnissUnit>();
            while (reader.Read())
            {
                BusnissUnitList.Add( new BusnissUnit()
                {

                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    OwnerName= reader.GetString(2),
                    OwnerPhone= reader.GetString(3),
                    OwnerEmail= reader.GetString(4),
                   // OwnerSignature= reader.GetValue(5),
                    OwnerProfitPercentage=reader.GetDecimal(6)
                });

            }
            reader.Close();
            command.Dispose();
            connection.Close();

            return BusnissUnitList;
        }

        public BusnissUnit GetOne(int Id)
        {


            connection.Open();

            string sql = string.Format(HelperSqlCommands.getColumnsFromTableWhereId, BusnissUnitHelper.ColumnsName, BusnissUnitHelper.TableName,Id);
            SqlCommand command = new SqlCommand(sql, connection);
            SqlDataReader reader = command.ExecuteReader();
            BusnissUnit busnissUnit = new BusnissUnit();
            while (reader.Read())
            {
                busnissUnit=new BusnissUnit()
                {

                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    OwnerName = reader.GetString(2),
                    OwnerPhone = reader.GetString(3),
                    OwnerEmail = reader.GetString(4),
                    // OwnerSignature= reader.GetValue(5),
                    OwnerProfitPercentage = reader.GetDecimal(6)
                };

            }
            reader.Close();
            command.Dispose();
            connection.Close();

            return busnissUnit;
        }

        public BusnissUnit InsertOne(BusnissUnit busnissUnit)
        {
            connection.Open();

            string sql = string.Format(HelperSqlCommands.insertObjectsToTable, BusnissUnitHelper.TableName, BusnissUnitHelper.ColumnsNameWithOutId,BusnissUnitHelper.ColumnsNameForOutput,"("+ busnissUnit.ValuesForInsert()+")");
            SqlCommand command = new SqlCommand(sql, connection);
            SqlDataReader reader = command.ExecuteReader();
          //  BusnissUnit busnissUnit = new BusnissUnit();
            while (reader.Read())
            {
                busnissUnit = new BusnissUnit()
                {

                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    OwnerName = reader.GetString(2),
                    OwnerPhone = reader.GetString(3),
                    OwnerEmail = reader.GetString(4),
                    // OwnerSignature= reader.GetValue(5),
                    OwnerProfitPercentage = reader.GetDecimal(6)
                };

            }
            reader.Close();
            command.Dispose();
            connection.Close();

            return busnissUnit;

        }
        public IEnumerable<BusnissUnit> InsertMany(IEnumerable<BusnissUnit> busnissUnits)
        {
            connection.Open();

            string sql = string.Format(HelperSqlCommands.insertObjectsToTable, BusnissUnitHelper.TableName, BusnissUnitHelper.ColumnsNameWithOutId, BusnissUnitHelper.ColumnsNameForOutput,String.Join(',',busnissUnits.Select(a=>"("+a.ValuesForInsert()+")")) );
            SqlCommand command = new SqlCommand(sql, connection);
            SqlDataReader reader = command.ExecuteReader();
            List<BusnissUnit> busnissUnitREsponse = new List<BusnissUnit>();
            while (reader.Read())
            {
                busnissUnitREsponse.Add( new BusnissUnit()
                {

                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    OwnerName = reader.GetString(2),
                    OwnerPhone = reader.GetString(3),
                    OwnerEmail = reader.GetString(4),
                    // OwnerSignature= reader.GetValue(5),
                    OwnerProfitPercentage = reader.GetDecimal(6)
                });

            }
            reader.Close();
            command.Dispose();
            connection.Close();

            return busnissUnitREsponse;
        }
        public BusnissUnit UpdateOne(BusnissUnit busnissUnit) {
            connection.Open();

            string sql = string.Format(HelperSqlCommands.updateObjectInTableWhereId, BusnissUnitHelper.TableName, busnissUnit.ValuesForUpdate(),BusnissUnitHelper.ColumnsNameForOutput, busnissUnit.Id);
            SqlCommand command = new SqlCommand(sql, connection);
            SqlDataReader reader = command.ExecuteReader();
            //  BusnissUnit busnissUnit = new BusnissUnit();
            while (reader.Read())
            {
                busnissUnit = new BusnissUnit()
                {

                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    OwnerName = reader.GetString(2),
                    OwnerPhone = reader.GetString(3),
                    OwnerEmail = reader.GetString(4),
                    // OwnerSignature= reader.GetValue(5),
                    OwnerProfitPercentage = reader.GetDecimal(6)
                };

            }
            reader.Close();
            command.Dispose();
            connection.Close();

            return busnissUnit;

        }

        public IEnumerable<BusnissUnit> UpdateMany(IEnumerable<BusnissUnit> busns) {
            List<BusnissUnit> units = new List<BusnissUnit>();
            foreach (BusnissUnit item in busns)
            {
                units.Add(UpdateOne(item));
            }
            return units;
        }

        public bool DeleteOne(int Id) {
            connection.Open();

            string sql = string.Format(HelperSqlCommands.DeleteFromTableWhereId,BusnissUnitHelper.TableName, Id);
            SqlCommand command = new SqlCommand(sql, connection);
           var rows= command.ExecuteNonQuery();
            //  BusnissUnit busnissUnit = new BusnissUnit();
      
            command.Dispose();
            connection.Close();

            return rows > 0;
        }
        public bool DeleteMany(IEnumerable<int> Ids) {
            connection.Open();

            string sql = string.Format(HelperSqlCommands.DeleteFromTableWhereIds,BusnissUnitHelper.TableName, String.Join(',',Ids));
            SqlCommand command = new SqlCommand(sql, connection);
            var rows = command.ExecuteNonQuery();
            //  BusnissUnit busnissUnit = new BusnissUnit();

            command.Dispose();
            connection.Close();

            return rows > 0;
        }
    }

}
