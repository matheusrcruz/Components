$(document).ready(function(){
    $("#entrada").on("keyup", function() {
     var value = $(this).val().toLowerCase();
    $("#infotb tr").filter(function() {
   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
 });
});
});