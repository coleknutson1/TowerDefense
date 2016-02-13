window.myCount = 0;
window.randomButtonTicksMin = 100;
window.randomButtonTicksMax = 100;
function init()
{		
 	var stage = new createjs.Stage("canvas");
    var circle = new createjs.Shape();
    var circleWidth = 100;
    circle.graphics.beginFill("red").drawCircle(0, 0, circleWidth);
    circle.x = 100;
    circle.y = 100;
    

	var text = new createjs.Text();
	var bitmap = new createjs.Bitmap("Blue-energy.jpg");
	text.text = window.myCount;
	stage.addChild(bitmap);
	stage.addChild(text);
	stage.addChild(circle);    
	stage.update();
	createjs.Ticker.addEventListener("tick", handleTick);
	 function handleTick(event) {
	    window.myCount+=1; 
			text.text=window.myCount;
			stage.update();
	 }
	circle.addEventListener("click", 
		function(event) 
		{ 
			window.myCount+=1; 
			text.text=window.myCount;
			stage.update();
		});
	
}


// window.addListeners = function(circle)
// {
	
// }