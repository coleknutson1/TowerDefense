
function init()
{		
 	var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    window.myCount = 0;
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);    

	var text = new createjs.Text();
	text.text = window.myCount;
	stage.addChild(text);
	circle.addEventListener("click", 
		function(event) 
		{ 
			window.myCount+=1; 
			text.text=window.myCount;
			stage.update();
		});
	stage.update();
}


// window.addListeners = function(circle)
// {
	
// }