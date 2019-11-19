// We import public GET
import Fetch from "./fetchApiModule.js";

// GET all players
async function getAllPlayers() {
    const players = await Fetch.get("/players?per_page=50");
    return players.data;
}

console.log("hello", getAllPlayers());

// We export
export default {
    getAllPlayers
}
