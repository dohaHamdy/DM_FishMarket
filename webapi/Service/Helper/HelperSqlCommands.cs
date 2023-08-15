namespace webapi.Service.Helper
{
    static public  class HelperSqlCommands
    {
        public const string getColumnsFromTable = "select {0} from {1} ";
        public const string getAllFromTable = "select * from {0} ";

        public const string getColumnsFromTableWhereId = "select {0} from {1} where Id={2}";
        public const string getAllFromTableWhereId = "select * from {0} where Id={1}";


        public const string insertObjectsToTable = "insert into {0} ({1}) OUTPUT {2} values {3}";

        public const string updateObjectInTableWhereId = "update {0} set {1} OUTPUT {2} where Id= {3}";

        public const string DeleteFromTableWhereId = "delete from {0} where Id={1}";
        public const string DeleteFromTableWhereIds = "delete from {0} where Id in ({1})";


   
           


    }

}
