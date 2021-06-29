
/*const request = require('request')
//const player=process.argv[2];
var pid1;
const url = 'https://cricapi.com/api/playerFinder?apikey=KjBsdXTKJkYguG2jtyUHrU70y9v2&name=raina';
request({ url, json: true }, (error, res) => {
    if (error) {
       console.log("error occur");
   
    } 
    else {
   console.log(res.body.data[0].pid);
  console.log(res.body.data[0].fullName);
  console.log(res.body.data[0].name);
    }
})
*/
const request = require('request')
const search= require('./testing1')
const psearch =require('./testing')

const name = process.argv[2]

if (!name) {
    console.log('Please provide a name')
} else {
    search(name, (error, res) => {
        if (error) {
            return console.log(error)
        }
console.log("pid value "+res);
        psearch(res, (error, playerinfo) => {
            if (error) {
                return console.log(error)
            }

            else
{ console.log(playerinfo);

    console.log(playerinfo.data);
/*
            console.log('pid value'+playerinfo.pid);
            
            console.log(' country  '+playerinfo.country);
            console.log('palyer profile '+playerinfo.profile);
            console.log('palyerinfo image  '+playerinfo.imageURL);
            console.log('palyerinfo image  '+playerinfo.imageURL);
            
            
*/
}
        })
    })
}