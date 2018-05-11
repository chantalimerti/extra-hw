var textOne = "sweet dog";
var textTwo= "very talented";

$(document).ready(function(){

	$("h2"). text(textOne);
	switchText(); 


function switchText() {
	if ($("h2").text()==textOne){
		$("h2").text(textTwo);
	} else {
		$("h2").text(textOne);
	} 
	setTimeout(switchText, 3000);
}