$(document).ready(function() {

var location1 = $("input:radio[name=location1]:checked").val();
 if (location1 === "yes") {
 $("location1").show();
 }else{
  $("location2").show();  


 }





 event.preventDefault();

 }
});
