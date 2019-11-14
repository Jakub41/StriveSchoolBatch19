const api = "https://strive-school-testing-apis.herokuapp.com/api";

const username = "user25";
const password = "gX7HF4hYaYyJAzpt";

const token = btoa(username + ":" + password);

window.request = async (url, params, method = "GET") => {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + token
        }
    };

    if (params) {
        if (method === "GET") {
            url += "?" + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params);
        }
    }

    const response = await fetch(api + url, options);

    if (response.status !== 200) {
        return generateErrorResponse(
            "The server responded with an unexpected status."
        );
    }

    const result = await response.json();

    return result;
};

objectToQueryString = obj => {
    return Object.keys(obj)
        .map(key => key + "=" + obj[key])
        .join("&");
};

generateErrorResponse = message => {
    return {
        status: "error",
        message
    };
};

const Fetch = {
    get: (url, params) => request(url, params),
    create: (url, params) => request(url, params, "POST"),
    update: (url, params) => request(url, params, "PUT"),
    remove: (url, params) => request(url, params, "DELETE")
};
