import Players from "./getDataPlayersModule.js";
import Helper from "./helper.js";

function displayPlayerTables(table, players) {
    let out = "";
    out += `<thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Height ft In</th>
                    <th>Weight pd</th>
                    <th>Role</th>
                    <th>Team</th>
                </tr>
            </thead>`;
    out += `<tbody>`;
    players.map(player => {
        out += `<tr>
                    <td>${player.first_name}</td>
                    <td>${player.last_name}</td>
                    <td>${player.height_feet}ft ${player.height_inches}in</td>
                    <td>${player.weight_pounds}</td>
                    <td>${player.position}</td>
                    <td>${player.team.name}</td>

               </tr>`;
    });
    out += `</tbody>`;
    table.insertAdjacentHTML("afterbegin", out);
}

async function init() {
    let players = await Players.getAllPlayers();
    let table = Helper.$("table");
    table.className = "table";
    //let data = Object.keys(players[0]);
    displayPlayerTables(table, players);
}

init();
