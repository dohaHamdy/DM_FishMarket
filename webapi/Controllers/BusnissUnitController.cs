using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]/[Action]")]
public class BusnissUnitController : ControllerBase
{
    
    private readonly ILogger<BusnissUnitController> _logger;
    private readonly BusnissUnitService _busnissUnitService;

    public BusnissUnitController(ILogger<BusnissUnitController> logger,BusnissUnitService busnissUnitService)
    {

        _logger = logger;
        _busnissUnitService = busnissUnitService;
    }

    [HttpGet(Name = "GetAllBusnissUnit")]
    public IEnumerable<BusnissUnit> GetAll()
    {
      return  _busnissUnitService.GetAll();
    }
    
    [HttpGet(Name = "GetOneBusnissUnit")]
    public BusnissUnit GetOne(int Id)
    {
        return _busnissUnitService.GetOne(Id);
    }
    
    
    
    [HttpPost(Name ="InsertOneBusnissUnit")]
    public BusnissUnit InsertOne(BusnissUnit unit)
    {
        return _busnissUnitService.InsertOne(unit);
    }

    [HttpPost(Name = "InsertManyBusnissUnit")]
    public IEnumerable<BusnissUnit> InsertMany(IEnumerable<BusnissUnit> units)
    {
        return _busnissUnitService.InsertMany(units);
    }



    [HttpPut(Name = "UpdateOneBusnissUnit")]
    public BusnissUnit UpdateOne(BusnissUnit unit)
    {
        return _busnissUnitService.UpdateOne(unit);
    }

    [HttpPut(Name = "UpdateManyBusnissUnit")]
    public IEnumerable<BusnissUnit> UpdateMany(IEnumerable<BusnissUnit> units)
    {
        return _busnissUnitService.UpdateMany(units);
    }


    [HttpDelete(Name = "DeleteOneBusnissUnit")]
    public bool DeleteOne(int Id)
    {
        return _busnissUnitService.DeleteOne(Id);
    }
    [HttpDelete(Name = "DeleteManyBusnissUnit")]
    public bool DeleteMany(IEnumerable<int> Ids)
    {
        return _busnissUnitService.DeleteMany(Ids);
    }

}
