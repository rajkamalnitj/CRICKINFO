
   
    const t20SR = document.querySelector('.t20SR');
    const t20run = document.querySelector('.t20run');
    const t20hundred = document.querySelector('.t20hundred');
    const t20fifty = document.querySelector('.t20fifty');
    const t20highscore = document.querySelector('.t20highscore');



    const odiSR = document.querySelector('.odiSR');
    const odirun = document.querySelector('.odirun');
    const odihundred = document.querySelector('.odihundred');
    const odififty = document.querySelector('.odififty');
    const odihighscore = document.querySelector('.odihighscore');

    const testSR = document.querySelector('.testSR');
       const testrun = document.querySelector('.testrun');
       const testhundred = document.querySelector('.testhundred');
       const testfifty = document.querySelector('.testfifty');
       const highscore = document.querySelector('.highscore');
  
    const playingRole = document.querySelector('.playingRole');
    const fullName = document.querySelector('.fullName');
    
    const weatherForm = document.querySelector('form')
    const name = document.querySelector('.name');
    const born = document.querySelector('.born');
    const currentAge  = document.querySelector('.currentAge');
    const majorTeams  = document.querySelector('.majorTeams')
    const bowlingStyle  = document.querySelector('.bowlingStyle')
    const battingstyle = document.querySelector('#battingstyle')
 
    const pidvalue = document.querySelector('#pidvalue')

const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const img1= document.querySelector('img')
const profile= document.querySelector('.profile')
const odiwicket= document.querySelector('.odiwicket')
const t20wicket= document.querySelector('.t20wicket')
const testwicket= document.querySelector('.testwicket')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;
console.log(location);
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/player?name='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent ="you must provide correct name , unable to fetch current data try again";
            } else {
                messageOne.textContent =data.country;
                messageTwo.textContent =data.pid;
                pidvalue.textContent=data.pid;
    profile.textContent=data.profile;
    if(data.data.bowling.ODIs)
    {
        odiwicket.textContent=data.data.bowling.ODIs.Wkts;
    console.log("odi"+data.data.bowling.ODIs.Wkts);
    }
    if(data.data.bowling.T20Is)
    { t20wicket.textContent=data.data.bowling.T20Is.Wkts;
    console.log("t20"+data.data.bowling.T20Is.Wkts);
    }
    if(data.data.bowling.tests)
    {
        testwicket.textContent=data.data.bowling.tests.Wkts;
    console.log("test"+data.data.bowling.tests.Wkts);
    }
    console.log("runs");








    if(data.data.batting.tests)
    { testSR.textContent=data.data.batting.tests.SR;
        highscore.textContent=data.data.batting.tests.HS;
        testrun.textContent=data.data.batting.tests.Runs;
        testfifty.textContent=data.data.batting.tests["50"];
        testhundred.textContent=data.data.batting.tests["100"];
      console.log("test"+data.data.batting.tests.Runs);
    }
      if(data.data.batting.ODIs)
      {odififty.textContent=data.data.batting.ODIs["50"];
      odihighscore.textContent=data.data.batting.ODIs.HS;
      odiSR.textContent=data.data.batting.ODIs.SR;
          odirun.textContent=data.data.batting.ODIs.Runs;
          odihundred.textContent=data.data.batting.ODIs["100"];
    console.log("odi"+data.data.batting.ODIs.Runs);
      }



    if(data.data.batting.T20Is)
    { t20run.textContent=data.data.batting.T20Is.Runs;
        t20highscore.textContent=data.data.batting.T20Is.HS;
        t20SR.textContent=data.data.batting.T20Is.SR;
        t20fifty.textContent=data.data.batting.T20Is["50"]; 
        t20hundred.textContent=data.data.batting.T20Is["100"];
    console.log("t20"+data.data.batting.T20Is.Runs);

    }

              //console.log("profilehaibe madharchodjd"+data.profile);
              /*let result = data.data.batting.hasOwnProperty(T20Is);
              console.log(result);*/
            //  console.log("bowling    "+data.data.batting.T20Is.Runs);
              battingstyle.textContent=data.battingStyle;
              
              bowlingStyle.textContent=data.bowlingStyle;
              majorTeams.textContent=data.majorTeams;
              currentAge.textContent=data.currentAge;
              born.textContent=data.born;
              if(data.imageURL!=null)
               img1.src=data.imageURL;

playingRole.textContent=data.playingRole;
fullName.textContent=data.fullName;
name.textContent=data.name;
console.log("profile"+ data.profile);
       // console.log(data.data[0].bowling.listA);   
            }
        })
    })
})
    