/**
 *
 * Fetch API Module
 *
 * This module is about to have a reusable methods to fetch data from the API
 * These methods will be exported
 * so we will be able to reuse it in other parts of our app
 *
 * @method 'GET' we will use one method as we gonna just to get the data from the API
 *
 * The API:
 * @link https://www.balldontlie.io/#get-all-players
 *
 * It is open source API and allow us only to get some information
 * but not to do all the CRUD functionalities
 *
 */

// Define our base URL to API
const apiUrl = "https://www.balldontlie.io/api/v1/";

// We define our private functionalities to fetch the data
// I n general we perform write/read API calls
// Our method tke 3 params
/**
 * @method 'GET'
 * @param  { STRING } url = API URL
 * @param  { STRING } params = additional parameters to pass to the endpoint as either a query string for GET or data for the body of the request
 *
 * Async function as we need to deal with Promises
 * @link https://mzl.la/34tXLL0
 */
async function request(url, params, method = "GET") {
    // options passed to the fetch request
    // we add options in this way as we need to deal also with await
    const options = {
        method,
        // We use that to include wha content we will send/request
        // In case of a API key we also will define it here
        headers: {
            "Content-Type": "application/json" // we will be sending JSON
        }
    };

    // if params exists and method is GET, add query string to url
    // otherwise, just add params as a "body" property to the options object
    // we handle params here
    if (params) {
        if (method === "GET") {
            url += "?" + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params); // body should match Content-Type in headers option
        }
    }

    // fetch returns a promise, so we add keyword await to wait until the promise settles
    // @link https://mzl.la/2NjAVju
    const response = await fetch(apiUrl + url, options);

    // show an error if the status code is not 200
    // we need to handle possible errors
    if (response.status !== 200) {
        return generateErrorResponse(
            "The server responded with an unexpected status."
        );
    }

    const result = await response.json(); // convert response into JSON

    // returns a single Promise object
    return result;
}

// A generic error handler that just returns an object with status=error and message
function generateErrorResponse(message) {
    return {
        status: "error",
        message
    };
}

// converts an object into a query string
// ex: {key : 'abc123'} -> &player=abc123
function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => key + "=" + obj[key])
        .join("&");
}

// We have to define our public methods as we need to make it accessible from external
function get(url, params) {
    return request(url, params);
}

// we export them like this to make it accessible
export default {
    get
    // Here you will add all the public methods like the CRUD functionalities
};
