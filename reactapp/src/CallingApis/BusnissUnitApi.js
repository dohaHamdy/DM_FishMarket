
const ModelName="BusnissUnit"
const baseURL="https://localhost:7150/"
const  BusnissUnitApi = {
    
 GetAll  : async function(){

 var response = await fetch(baseURL+ModelName+'/GetAll')

 var Rowsdata = await response.json();
 return Rowsdata;



},

GetOne : async function(id){

    var response = await fetch(baseURL+ModelName+'/GetOne?id='+id)
   
    var Rowsdata = await response.json();
    return Rowsdata;
   
   },
InsertOne : async function( params)
{
    
 var response = await fetch(baseURL+ModelName+'/InsertOne',{
    method:"POST",
   headers:{   
    "Content-Type": "application/json"
    },
    body:JSON.stringify(params)
 })

 var Rowsdata = await response.json();
 return Rowsdata;



},
UpdateOne :async function( params)
{
    
 var response = await fetch(baseURL+ModelName+'/UpdateOne',{
    method:"PUT",
   headers:{   
    "Content-Type": "application/json"
    },
    body:JSON.stringify(params)
 })

 var Rowsdata = await response.json();
 return Rowsdata;



},
DeleteOne : async function(id){

    var response = await fetch(baseURL+ModelName+'/DeleteOne?id='+id,
    {
      method:"DELETE",
    })
   
    var Rowsdata = await response.json();
    return Rowsdata;
   
   },
}


export default BusnissUnitApi;