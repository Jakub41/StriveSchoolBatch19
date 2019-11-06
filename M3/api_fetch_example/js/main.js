import Players from "./getDataPlayersModule.js";
import Helper from "./helper.js";

function displayPlayerTables(table, players) {
    let out = "";
    out += `<thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>`;
    out += `<tbody>`;
    players.map(player => {
        out += `<tr>
                    <td>${player.first_name}</td>
                    <td>${player.last_name}</td>
               </tr>`;
    });
    out += `</tbody>`;
    table.insertAdjacentHTML("afterbegin", out);
}

async function init() {
    let players = await Players.getAllPlayers();
    let table = document.querySelector("table");
    let data = Object.keys(players[0]);
    displayPlayerTables(table, players);
}

init();
