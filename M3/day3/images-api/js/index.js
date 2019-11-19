// API base URL
const baseUrl = "http://www.splashbase.co/api/v1/images/";

function fetchImages() {
    const randomUrl = `${baseUrl}latest?images_only=true`;
    fetch(randomUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.images;
            let output = ``;
            output += ``;
            images.forEach(
                image =>
                    (output += `
                        <div class="col-sm-6 col-md-4">
                            <div class="card mb-3">
                                <img src = "${image.url}" alt ="${image.id}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-content-hidden">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                <button class="read-more">Read More</button>
                            </div>
                        </div>
                        `)
            );
            output += ``;
            document.querySelector("#response").innerHTML = output;
        });
}

document.querySelector("#images").addEventListener("click", fetchImages);
