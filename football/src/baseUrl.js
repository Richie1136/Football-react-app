// API Routes used in this app

// API endpoint to get player information, including age, position, number, team they play for,
// college that they attended, height, weight, nfl experience and a photo of the player

// `${baseUrl}/Player/${term}?key=${APIKEY}`

// API endpoint to get the current NFL standings, standings are broken up by each division, which
// includes the team name which is clickable and will send you to the teasm roster, the wins, ties and losses,
// the win percentage, the amount of touchdowns, points for and against and the differental, division record
// and win percentage, the conference record and win percentage and non conference record

// `${baseUrl}/Standings/2022?key=${APIKEY}`

// API endpoint to retrieve all of the NFL teams, which includes the city and team name,
// the conference and division, team logo, head coach, Offensive and Defensive Coordinator and Special Teams Coach,
// information of the stadium in which they play at which includes, name, city, capacity, state, playing surface, and stadium type.
// Able to filter the teams by the conference or by the division.

// `${baseUrl}/Teams?key=${APIKEY}`

// `${baseUrl}/Players/${term}?key=${APIKEY}`

// API endpoint to retrieve the team active roster, which includes the players name, 
// photo of player, number of player, height and weight and position. Able to filter
// by position or by PositionCategory (offense, defense or special teams).

// Base Url that every endpoint starts with


export const baseUrl = "https://api.sportsdata.io/v3/nfl/scores/json"
