var buttonOne = document.querySelector("#player-one");
var buttonTwo = document.querySelector("#player-two");
var scoreOne  = document.querySelector("#sc-one");
var scoreTwo  = document.querySelector("#sc-two");
var reset = document.querySelector("#reset");
var limitGame =document.querySelector("#score-limit");
var limitUpTo =document.querySelector("#limit-upto");
var a = scoreOne.innerHTML;
var limit = limitGame.innerHTML;
a = parseInt(a);
limit = parseInt(limit)
var b = scoreTwo.innerHTML;
b = parseInt(b);
buttonOne.addEventListener("click",function(){

	if(a<limit&&b!==limit)
	{
		scoreOne.innerHTML = ++a;
		if (a===limit) {

			scoreOne.classList.add("green")

		}
	}
});
buttonTwo.addEventListener("click",function(){
	// var limit = limitGame.innerHTML;
	// limit = parseInt(limit);
	 
	if(b<limit&&a!==limit)
	{
		scoreTwo.innerHTML = ++b;
		if (b===limit) {

			scoreTwo.classList.add("green")

		}
	}
	// else{
	// }
});

reset.addEventListener("click",function(){

	scoreTwo.innerHTML = 0;
	scoreOne.innerHTML = 0;
	a= 0;
	b= 0;
	scoreOne.classList.remove("green");
	scoreTwo.classList.remove("green");
	limit = 5;
	limitGame.innerHTML = 5;
	limitUpTo.value = 5;
})

limitUpTo.addEventListener("click",function()
{

	var l = limitUpTo.value;
	limit = l++;
	limitGame.innerHTML = limit;
})

