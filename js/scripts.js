$(document).ready(function() {
$("#serving").submit(function(event){
var location1 = $("input:radio[name=location1]:checked").val();
var location2 = $("input:radio[name=location2]:checked").val();
var location3 = $("input:radio[name=location3]:checked").val();
var location4 = $("input:radio[name=location4]:checked").val();
 if (location1 === "yes" || location2==="no" ||location3==="yes") {
 $("#locationOne").toggle();
 }else if(location2==="no" || location3==="yes"){
  $("#location2").show();
  $("#location3").show();

 }





 event.preventDefault();

});
});
