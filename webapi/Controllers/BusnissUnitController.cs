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

    [HttpGet(Name = "GetBusnissUnit")]
    public IEnumerable<BusnissUnit> Get()
    {
      return  _busnissUnitService.GetAll();
    }
    
    [HttpGet(Name = "GetOneBusnissUnit")]
    public BusnissUnit GetOne(int Id)
    {
        return _busnissUnitService.GetOne(Id);
    }
    
    
    
    [HttpPost(Name =" PostBusnissUnit")]
    public BusnissUnit Post(BusnissUnit unit)
    {
        return _busnissUnitService.InsertOne(unit);
    }

    [HttpPost(Name = "PostManyBusnissUnit")]
    public IEnumerable<BusnissUnit> PostMany(IEnumerable<BusnissUnit> units)
    {
        return _busnissUnitService.InsertMany(units);
    }



    [HttpPut(Name = "PutBusnissUnit")]
    public BusnissUnit Put(BusnissUnit unit)
    {
        return _busnissUnitService.UpdateOne(unit);
    }

    [HttpPut(Name = "PutManyBusnissUnit")]
    public IEnumerable<BusnissUnit> PutMany(IEnumerable<BusnissUnit> units)
    {
        return _busnissUnitService.UpdateMany(units);
    }


    [HttpDelete(Name = "DeleteBusnissUnit")]
    public bool Delete(int Id)
    {
        return _busnissUnitService.Delete(Id);
    }
    [HttpDelete(Name = "DeleteManyBusnissUnit")]
    public bool DeleteMany(IEnumerable<int> Ids)
    {
        return _busnissUnitService.DeleteMany(Ids);
    }

}
