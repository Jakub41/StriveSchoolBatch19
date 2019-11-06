const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com';
const headers = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "3806cb0e53msh673ef22c30586d5p10999ajsn535c96bc4989"
}
document.addEventListener('DOMContentLoaded', function() {
    const url = `${baseUrl}/search?q=all`;
    fetch(url, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.data.map(track => {
            output += '<div class="album-card"> <a href="' + track.link + '" target="_blank"> <div class="img-area">';
            output +=
              ' <img class="album-image" src="' + track.album.cover_medium + '" alt="05" border="0">';
            output += '  </div>';
            output += '<div class="title-area"> <div class="album-title">' + track.title + '</div>';
            output +=
              '  </div>';
            output += " </a>";
            output += "</div>";
        });

        const elements = document.querySelectorAll(".album_slide-area");
        elements.forEach(el => el.innerHTML = output);

        $('#albums-slide, #albums-slide_2,#albums-slide_3,#albums-slide_4,#albums-slide_5,#albums-slide_library,#albums-slide_library_2,#albums-slide_library_3,#albums-slide_library_4,#albums-slide_library_5').slider({
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            arrows: false,
            centerMode: true,
            centerPadding: "60px",
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "40px",
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: "40px",
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: "10px",
                        slidesToScroll: 1

                    }
                }
            ]
        });
    })
    .catch(e => console.log(e))
});
