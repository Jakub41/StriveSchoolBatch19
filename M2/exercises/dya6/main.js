$(document).ready(function() {
    //  Remove selected table rows
    $(".delete-row").click(function() {
        $(this).closest('tr').remove();
        return false;
    });
});
