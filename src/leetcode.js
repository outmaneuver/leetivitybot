const fetch = require('node-fetch');
const config = require('./config');

async function fetchDailyProblem() {
  const query = `
    query questionOfToday {
      activeDailyCodingChallengeQuestion {
        date
        userStatus
        link
        question {
          title
          difficulty
          acRate
          likes
          dislikes
        }
      }
    }
  `;

  const response = await fetch(config.LEETCODE_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.activeDailyCodingChallengeQuestion;
}

module.exports = {
  fetchDailyProblem,
};
