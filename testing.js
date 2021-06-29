/*
const request = require('request')
const url = 'https://cricapi.com/api/playerStats?apikey=KjBsdXTKJkYguG2jtyUHrU70y9v2&pid=33335';
request({ url, json: true }, (error, res) => {
    if (error) {
       console.log("error occur2");
   
    } 
    else {
   console.log(res.body);
    }
})*/
const request = require('request')

const psearch = (pidvalue, callback) => {
    const url ='https://cricapi.com/api/playerStats?apikey=KjBsdXTKJkYguG2jtyUHrU70y9v2&pid='+pidvalue;

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);

        } 
        else {
            callback(undefined,res.body);
        }
    })
}

module.exports = psearch; 