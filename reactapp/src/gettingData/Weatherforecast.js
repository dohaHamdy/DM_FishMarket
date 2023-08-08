async function weatherforecast() {
    return  await fetch('weatherforecast')

  }
  


  async function GETweatherforecast() {
    response =   (async () => {
        return await weatherforecast()
      })()
    
      return await response.json()
  }
  
  (async () => {
    return await GETweatherforecast()
  })()

  export default 