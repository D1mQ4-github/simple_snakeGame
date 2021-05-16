import { postData, getResource } from '../services/services.js';

const dbUrl = 'http://localhost:3000/leaderboard';
let time = new Date();

function leaderboardAddScores({ score, name }) {

    let day = time.getDate(),
        month = ((time.getMonth() + 1) < 10) ? `0${time.getMonth()}` : time.getMonth(),
        year = time.getFullYear(),
        date = `${day}-${month}-${year}`;

    let json = { score, date, name };
    postData(dbUrl, JSON.stringify(json));
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