import { postData, getResource } from '../services/services.js';

const dbUrl = 'http://localhost:3000/leaderboard';

function leaderboardAddScores({ score, name }) {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours(),
        day = time.getDate(),
        month = ((time.getMonth() + 1) < 10) ? `0${time.getMonth()}` : time.getMonth(),
        year = time.getFullYear(),
        date = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`,
        json = JSON.stringify({ score, date, name });

    postData(dbUrl, json);
}

async function leaderboardGetScores() {
    let scores = await getResource(dbUrl),
        leaderboard = document.querySelector('.leaderboard ol');

    leaderboard.textContent = '';

    if (scores.length == 0) {
        leaderboard.innerHTML = `<li><strong>Лидерборд пуст...</strong></li>`;
    } else {
        scores.forEach(item => {
            leaderboard.innerHTML += `
                <li>
                    <strong>Name:</strong> ${item.name} 
                    <strong>Scores:</strong> ${item.score} 
                    <strong>Date:</strong> ${item.date}
                </li>
                <hr>
            `;
        });
    }
}

export { leaderboardAddScores, leaderboardGetScores };