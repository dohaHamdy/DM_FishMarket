using System.Reflection.Metadata;

namespace webapi.Model
{
    public class BusnissUnit
    {

        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? OwnerName { get; set; }
        public string? OwnerPhone { get; set; }
        public string? OwnerEmail { get; set; }
        public byte[]? OwnerSignature { get; set; } = null;
        public decimal?   OwnerProfitPercentage { get; set; }
        
    }
    static public class BusnissUnitHelper
    {
        static public string TableName  => "BusnissUnit";
        static public string IdColoumnName => "Id";
        static public List<string> AllColumnsNamelst => typeof(BusnissUnit).GetProperties().Select(a => a.Name).ToList();

        static public string ColumnsName => String.Join(',', AllColumnsNamelst);

        static public string ColumnsNameWithOutId=>String.Join(",", AllColumnsNamelst.Where(a=>a!= IdColoumnName));

        static public string ColumnsNameForOutput => String.Join(',', AllColumnsNamelst.Select(a=> "Inserted."+a)  );
        static public string ValuesForInsert(this BusnissUnit unit)
        {
            IEnumerable<string?>  valuesAsString= unit.GetType().GetProperties().Where(a=> a.Name != IdColoumnName).Select((a) =>
            {
                if (a.GetValue(unit) == null)
                    return "null";
                switch (a.PropertyType.Name)
                {
                    case nameof(Int32):
                    case nameof(Decimal):
                    case nameof(Double):
                        return a.GetValue(unit).ToString();
                    case nameof(String):
                    //  case nameof(Byte[]):
                    default:
                        return "'"+a.GetValue(unit).ToString()+"'";

                }
            });

            return String.Join(',', valuesAsString);
        }
        static public string ValuesForUpdate(this BusnissUnit unit)
        {
            IEnumerable<string?> valuesAsString = unit.GetType().GetProperties().Where(a => a.GetValue(unit) != null && a.Name!=IdColoumnName).Select((a) =>
            {
                switch (a.PropertyType.Name)
                {
                    case nameof(Int32):
                    case nameof(Decimal):
                    case nameof(Double):
                        return a.Name+"="+ a.GetValue(unit).ToString();
                    case nameof(String):
                    //  case nameof(Byte[]):
                    default:
                        return a.Name + "=" +  "'" + a.GetValue(unit).ToString() + "'";

                }
            });

            return String.Join(',', valuesAsString);

        }


      //call(proc 1,2,3)
    }
}
