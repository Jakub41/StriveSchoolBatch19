// Spinner
const showSpinner = () => {
    const spinner = H.$1("#spinner");
    spinner.classList.add("show");
    const loadingDiv = H.createNode("div");
    loadingDiv.classList.add("overlay");
    const body = H.$1("body");
    body.append(loadingDiv);
    setTimeout(() => {
        spinner.classList.remove("show");
        loadingDiv.remove();
    }, 5000);
};
