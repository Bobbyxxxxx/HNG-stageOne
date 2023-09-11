// Variables
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const myTrack = document.querySelector('[data-testid="myTrack"]');
const gitHubUrl = document.querySelector('[data-testid="githubURL"]');


// Track
myTrack.textContent = "Frontend";
    
//Slack Name
slackUserName.textContent = "Abraham Adeyeye";

// gitURL
gitHubUrl.innerHTML = `<a href="https://github.com/Bobbyxxxxx/HNG-stageOne" style="text-decoration:none">Bobbyxxxxx/HNG-stageOne</a>`

const display = () => {
    // Current Week Day
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDate = new Date();
    let currentDay = weekDays[currentDate.getUTCDay()];
    
    currentDayOfTheWeek.textContent = currentDay
    
    // Current UTC Time
    let currentTime = currentDate.getTime()
    currentUTCTime.textContent =  `${currentTime}`;
}
// reload interval
setInterval(display, 100);