
const ModelName="BusnissUnit"
const baseURL="https://localhost:7150/"
const  BusnissUnitApi = {
    
 GetAll  : async function(){

 var response = await fetch(baseURL+ModelName+'/GetAll')

 var Rowsdata = await response.json();
 console.log("Rowsdata : ",Rowsdata)
 return Rowsdata;



},

InsertOne : async function( params)
{
    
    console.log("params: ",params);
 var response = await fetch(baseURL+ModelName+'/InsertOne',{
    method:"POST",
   headers:{   
    "Content-Type": "application/json"
    },
    body:JSON.stringify(params)
 })

 var Rowsdata = await response.json();
 return Rowsdata;



}
}


export default BusnissUnitApi;