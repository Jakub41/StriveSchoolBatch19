/**
 *
 * ! API Fetch Data Interface
 *
 * * Methods to use the CRUD rules in a simplify way
 * * the default API actions are stored here
 * * and exposed to the APP globally
 * @interface fetch
 * @param  {String} username
 * @param  {String} password
 * @param  {String} url
 * @param  {Array} params
 * @param  {String} method
 * @param  {Object} Obj
 *
 */

// Base API URL
const api = "https://strive-school-testing-apis.herokuapp.com/api";
// Authentication params
const username = "user25";
const password = "gX7HF4hYaYyJAzpt";
// Authentication token result of Authentication params
const token = btoa(username + ":" + password);
/**
 * ! Request
 * * Default request method which makes the API operations on request
 * @async
 */
window.request = async (url, params, method = "GET") => {
    // Options we want to include in the request
    // As the method like GET, ect
    // Headers proprieties as Auth
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + token
        }
    };
    // A check on params if any
    if (params) {
        // If it is a get we add query string to url in the form of <domain>/?example=''
        if (method === "GET") {
            url += "?" + objectToQueryString(params);
        } else {
            // Else not GET we just stringify the params
            // body should match Content-Type in headers option
            options.body = JSON.stringify(params);
        }
    }
    // Response of the fetch with params
    const response = await fetch(api + url, options);
    // Error check
    if (response.status !== 200) {

        return generateErrorResponse(
            "The server responded with an unexpected status.",
            response.status
        );
    }
    // Result JSON OBJ
    const result = await response.json();
    // Return the result
    return result;
};
/**
 * @function objectToQueryString
 * @param  {Object} obj
 *
 * * We use this to create extra part of the URL for the GET method
 * * for example a search query like <domain>/?query="..."
 */
objectToQueryString = obj => {
    // converts an object into a query string
    // ex: {key : 'abc123'} -> &player=abc123
    return Object.keys(obj)
        .map(key => key + "=" + obj[key])
        .join("&");
};
// Generates the error message if status is not
// * 200 OK
generateErrorResponse = (message,response) => {
    status = response;
    // We return status + message
    return {
        status: status,
        message
    };
};
/**
* ! Fetch method to CRUD
* * We use this to allow from external to interact with the interface
* * those are public methods under an OBJ {}
* * called external as Fetch.get() from the method where are need it
 */
const Fetch = {
    get: (url, params) => request(url, params),
    create: (url, params) => request(url, params, "POST"),
    update: (url, params) => request(url, params, "PUT"),
    remove: (url, params) => request(url, params, "DELETE")
};
