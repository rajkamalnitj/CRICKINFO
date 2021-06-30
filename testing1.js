const request = require('request')

const search = (name, callback) => {
    const url = 'https://cricapi.com/api/playerFinder?apikey=KjBsdXTKJkYguG2jtyUHrU70y9v2&name='+name;

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);

        } 
        else if(res.body.data.length==0)
        {
            callback(' wrong name!', undefined);
        }
        else {
           // console.log( res.body.data[0].pid);
            callback(undefined, res.body.data[0].pid);
        }
    })
}

module.exports = search; 