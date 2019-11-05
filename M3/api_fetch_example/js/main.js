import Players from "./getDataPlayersModule.js";
import Helper from "./helper.js";

console.log("main");

function showPlayers() {
    const players = Players.getAllPlayers();
    console.log("players",players);

    const pFirstName = players.data.first_name;
    console.log(pFirstName);
}

showPlayers();
