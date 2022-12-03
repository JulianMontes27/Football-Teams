console.log('working...');

//DOM node manipulation
const inputBox = document.getElementById('inputBox');
const teamContainer= document.querySelector('.app__main-container_team');


let teamName;
let teamLeague;
let teamImg;
let teamWins;

//fetch GET request from RapidApi
// window.addEventListener('load',()=>{
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '2cf09d54eemshf3a0e1a3b7646adp1e5921jsn9a249a851567',
//             'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://sportscore1.p.rapidapi.com/teams/17', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// });

inputBox.addEventListener('keypress',enter)

function enter (e){
    if(e.keyCode==13){
        apiQuery()
    }
};

async function apiQuery(){
    let inputValue= inputBox.value;

    //API request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cf09d54eemshf3a0e1a3b7646adp1e5921jsn9a249a851567',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };
    
    fetch(`https://sportscore1.p.rapidapi.com/teams/${inputValue}`, options)
        .then(response => response.json())
        .then(response => {
            const data= response;
            renderStats(data);
        })
        .catch(err => console.error(err))
        
}

function renderStats (data){ 
    //playerContainer.textContent= `Team Name: ${data.data.name}`;
    teamContainer.innerHTML=''

    teamName = document.createElement('h2');
    teamName.textContent = `Team Name: ${data.data.name}`;

    teamLeague = document.createElement('h3');
    teamLeague.textContent = `Country: ${data.data.country}`;

    teamImg = document.createElement('img');
    teamImg.src=data.data.logo;
    teamImg.className= 'app__main-container_team_img';
    
    teamContainer.append(teamName, teamLeague, teamImg)

};
