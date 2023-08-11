
const Cookies = require("js-cookie");
const app_ar = require('./ar.json');
const app_en = require('./en.json');

module.exports = {
    setCookie: function (name, value, days) {
        Cookies.set(name, value, {
          httpOnly: false,
          sameSite: "none",
          secure: true,
        });
      },
    
      getCookie: function (name) {
        let cookieValue = Cookies.get(name);
        return cookieValue;
      },


  translateWord: function (word) {
    debugger;
    var translation;
    var cookieValue ='ar';// this.getCookie('languageCookie');
    if(cookieValue == 'ar'){
        translation = app_ar;
    }
    else if(cookieValue == 'en'){
        translation = app_en;
    }
    else{
        translation = app_en;
    }
    return translation[word];
  },
};