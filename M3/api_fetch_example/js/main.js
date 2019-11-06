import Players from "./getDataPlayersModule.js";
import Helper from "./helper.js";

console.log("main");

let players = Players.getAllPlayers();

function showPlayers(table, players) {
    console.log("show all players");
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of players) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, players) {
    for (let element of players) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(players[0]);
  generateTableHead(table, players);
  generateTable(table, players);
