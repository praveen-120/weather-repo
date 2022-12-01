var request = require('request');
const apiKey = 'f983ea890e16aa190216b0cc407c41dc';
const CITIES = [
    'Kolkata',
    'Bangalore',
    'Lucknow',
    'Allahabad',
    'Delhi'
];
const city = CITIES[Math.floor(Math.random() * CITIES.length)];
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
//let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
request(url,function(err,response,body){
    console.log('Fetching the weather!');
 if(err){
   console.log('There was an error getting the weather');
 }
 else {
   let weather = JSON.parse(body);
   let message = `It's ${weather.main.temp} degrees and humidity is ${weather.main.humidity} in ${city}`;
   console.log(message);
 }
  greet();

});

function greet(){
   console.log('Weather fetched!!!');
}
