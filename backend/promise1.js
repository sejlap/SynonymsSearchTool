var axios = require('axios');
var URL = "http://localhost:5000";

axios.get(URL + '/sinonimi')
     .then(function(response){
    console.log(response);
    
}).catch(function(e) { 
    console.log(e);
});


