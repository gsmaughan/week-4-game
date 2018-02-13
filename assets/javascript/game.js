window.onload = function loaded(){

var targetScore;
var diamond;

var ruby;

var topaz;

var sapphire;

var totalScore = 0;

var wins = 0;
var losses = 0;

reset(); //call the reset function to come up with new random values






function reset(){
	targetScore = Math.floor(Math.random() * 120) + 19; // returns a number between 19 and 120
	diamond = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
	ruby = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
	topaz = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
	sapphire = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12

	$("#score").text(targetScore); //write target score in target score box. IT WORKS
	
}



$("#diamond").on("click", function(){
	totalScore += diamond;
	$("#total").text(totalScore);
	// console.log("Total Score: " + totalScore);
	// console.log("Target Score: " + targetScore)
		if(totalScore == targetScore){
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("Good job!  Press Next Game button.");

		}
		else if(totalScore > targetScore){
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("You lost this round.  Press Next Game button.");
			
		}
	});

$("#ruby").on("click", function(){
	totalScore += ruby;
	$("#total").text(totalScore);
	
		if(totalScore == targetScore){
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("Good job!  Press Next Game button.");
		}
		else if(totalScore > targetScore){
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("You lost this round.  Press Next Game button.");
			
		}
	});
$("#topaz").on("click", function(){
	totalScore += topaz;
	$("#total").text(totalScore);
	
		if(totalScore == targetScore){
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("Good job!  Press Next Game button.");
		}
		else if(totalScore > targetScore){
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("You lost this round.  Press Next Game button.");
			
		}
	});
$("#sapphire").on("click", function(){
	totalScore += sapphire;
	$("#total").text(totalScore);
	
		if(totalScore == targetScore){
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("Good job!  Press Next Game button.");
		}
		else if(totalScore > targetScore){
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("You lost this round.  Press Next Game button.");
			
		}
	});
$("#nextGame").on("click", function(){
	totalScore = 0;
	$("#total").text(totalScore);
	reset();

});




}//close .onload function