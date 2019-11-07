$(document).ready(function() {
    $(".read-more").click(function() {
        console.log("Click");
        var elem = $(".read-more").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $(".read-more").text("Read Less");
            $(".text-content-hidden").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $(".read-more").text("Read More");
            $(".text-content-hidden").slideUp();
        }
    });
});
