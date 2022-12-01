var request=require('request');
let apiKey='f983ea890e16aa190216b0cc407c41dc';
const url=`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
request(url,function(err,response,body){
    console.log('Fetching the geographical locations!');
 if(err){
   console.log('Network not available');
 }
 else {
   let weather = JSON.parse(body);
   let message=`The longitude is ${weather[0].lon} and latitude is ${weather[0].lat}`
   console.log(message);
 }
  greet();

});

function greet(){
   console.log('Locations fetched!!!');
}