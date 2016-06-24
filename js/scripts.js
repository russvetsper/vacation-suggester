$(document).ready(function() {
$("#serving").submit(function(event){
var location1 = $("input:radio[name=location1]:checked").val();
 if (location1 === "yes") {
 $("#locationOne").toggle();
 }else{
  $("#location2").show();


 }





 event.preventDefault();

});
});
