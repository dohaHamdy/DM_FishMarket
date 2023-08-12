namespace webapi.Model
{
    public class BusnissUnit
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string? OwnerName { get; set; }
        public string? OwnerPhone { get; set; }
        public string OwnerEmail { get; set; }
        public byte[]? OwnerSignature { get; set; } = null;
        public decimal OwnerProfitPercentage { get; set; }
        
    }
    static public class BusnissUnitHelper
    {
        static public string TableName => "BusnissUnit";
        static public List<string> AllColumnsNamelst => new List<string>() {
            "Id","Name" ,"OwnerName" ,"OwnerPhone" , "OwnerEmail","OwnerSignature" ,"OwnerProfitPercentage" };
        static public string ColumnsName => String.Join(',', AllColumnsNamelst);

        static public string ColumnsNameWithOutId=>String.Join(",", AllColumnsNamelst.Where(a=>a!="Id"));

        static public string ValuesForInsert(this BusnissUnit unit)
        {
            return String.Join(',', '"'+unit.Name, unit.OwnerName,unit.OwnerPhone,unit.OwnerEmail,unit.OwnerSignature,unit.OwnerProfitPercentage);
        }
        static public string ValuesForUpdate(this BusnissUnit unit)
        {
            return string.Join(",","Name="+ unit.Name,"OwnerName="+ unit.OwnerName,"OwnerPhone="+ unit.OwnerPhone,"OwnerEmail="+ unit.OwnerEmail, "OwnerSignature= "+ unit.OwnerSignature, "OwnerProfitPercentage= "+ unit.OwnerProfitPercentage);
        }
    }
}
