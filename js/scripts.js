$(document).ready(function() {

var question1 =$("input#question1").val();
 if (question1 === 0) {
   $("question1").show();
 }else{
   $("question2").show();

 event.preventDefault();
 }
});
