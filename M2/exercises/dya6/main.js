$(document).ready(function() {
    // Tooltip
    $("body").tooltip({
        selector: "[data-toggle='tooltip']",
        container: "body"
      });

    //  Remove selected table rows
    $(".delete-row").click(function() {
        $(this).closest('tr').remove();
        return false;
    });
});
