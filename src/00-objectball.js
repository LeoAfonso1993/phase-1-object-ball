function gameObject(){
    return {
        home: { 
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
        }},
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
        }
}}}

// console.log(gameObject())

const game = gameObject()
const players = [game.home.players,game.away.players]

function allPlayers() {
    const all = players.map(function(team) {
        const newArr = []
        for (const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}

function findPlayer(playerName){
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    })
}

function numPointsScored(playersName) {
    // const game = gameObject()
    // for (const team in game){
    //     for(const player in game[team].players) {
    //         return game[team].players[playersName].points
    //     }
    // }
    return findPlayer(playersName).points
}

function shoeSize(playersName){
    return findPlayer(playersName).shoe
}

//const allTeams = [game.home,game.away]
const homeTeam = game.home
const awayTeam = game.away


function teamColors(teamName){
    if(teamName === homeTeam.teamName){
        return homeTeam.colors
    } else {
        return awayTeam.colors
    }
}

function teamNames(){
    const allTeams = [homeTeam.teamName, awayTeam.teamName]
    return allTeams
}

const homeTeamPlayers = [game.home.players]
const awayTeamPlayers = [game.away.players]

function homePlayers() {
    const all = homeTeamPlayers.map(function(team) {
        const newArr = []
        for (const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}

function awayPlayers() {
    const all = awayTeamPlayers.map(function(team) {
        const newArr1 = []
        for (const player in team){
            newArr1.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr1
    })
    return all.flat()
}

const newArray = [...homePlayers()]
const awayNewArray = [...awayPlayers()]

function homeNumbers() {
    numArr = []
    numArr.push(newArray[0].number)
    numArr.push(newArray[1].number)
    numArr.push(newArray[2].number)
    numArr.push(newArray[3].number)
    numArr.push(newArray[4].number)
    return numArr
}

function awayNumbers() {
    numArr = []
    numArr.push(awayNewArray[0].number)
    numArr.push(awayNewArray[1].number)
    numArr.push(awayNewArray[2].number)
    numArr.push(awayNewArray[3].number)
    numArr.push(awayNewArray[4].number)
    return numArr
}


function playerNumbers(teamName) {
    if (teamName === "Brooklyn Nets"){
        return homeNumbers()
    }else {
        return awayNumbers
    }
}

function playerStats(playersName){
    return findPlayer(playersName) 
}
    
function mostPointsScored() {
    pointsArr = []
    for(let i = 0; i < newArray.length; i++){
        pointsArr.push(newArray[i].points)
    }
    for(let i = 0; i < awayNewArray.length; i++){
        pointsArr.push(awayNewArray[i].points)

    }return Math.max(...pointsArr)
}

function winningTeam() {
    pointsArrHome = []
    pointsArrAway = []
    for(let i = 0; i < newArray.length; i++){
        pointsArrHome.push(newArray[i].points)
    }
    for(let i = 0; i < awayNewArray.length; i++){
        pointsArrAway.push(awayNewArray[i].points)

    }
    const somaHome = pointsArrHome.reduce((partialSum, a) => partialSum + a, 0)
    const somaAway = pointsArrAway.reduce((partialSum, a) => partialSum + a, 0)

    if(somaHome > somaAway) {
        return `Home team wins with ${somaHome} vs ${somaAway}`
    }else {
        return `Away team wins with ${somaAway}`
    }
}

function playerWithLongestName() {
    namesArray = []
    for (let i = 0; i < allPlayers().length; i++) {
        namesArray.push(allPlayers()[i].nameOfPlayer)
    }
    const longestName = arr => arr.reduce((base, element) => element.length > base.length? element : base)
    return longestName(namesArray)
}


function bigShoeRebounds() {
    shoeArray = []
    for (let i = 0; i < allPlayers().length; i++) {
        shoeArray.push(allPlayers()[i].shoe)
    } const biggestShoe = Math.max(...shoeArray)
    for (let i = 0; i < allPlayers().length; i++) {
        if (allPlayers()[i].shoe === biggestShoe){
            return allPlayers()[i].rebounds
        }
}}


function doesLongNameStealATon() {
    namesArray = []
    for (let i = 0; i < allPlayers().length; i++) {
        namesArray.push(allPlayers()[i].nameOfPlayer)
    }
    const longestName = arr => arr.reduce((base, element) => element.length > base.length? element : base)
    longName =  longestName(namesArray)
    stealArray = []
    for (let i = 0; i < allPlayers().length; i++) {
        stealArray.push(allPlayers()[i].shoe)
    } const maxSteal = Math.max(...stealArray)
    if (longName === maxSteal){
        return true
    } else {
        return false
    }


}

console.log(numPointsScored("Brook Lopez"))
console.log(shoeSize('Reggie Evans'))
console.log(teamColors("Brooklyn Nets"))
console.log(teamNames())
console.log(playerNumbers("Brooklyn Nets"))
console.log(playerStats("Alan Anderson"))
console.log(allPlayers().length)
console.log(mostPointsScored())
console.log(winningTeam())
console.log(playerWithLongestName())
console.log(bigShoeRebounds())
console.log(doesLongNameStealATon())
