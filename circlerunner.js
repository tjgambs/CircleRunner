	var htmlCanvas;
	var context;

	var WIDTH = 600;
	var HEIGHT = 600;

	var centerCircleRadius = 40;
	var outerCircleRadius = 300;

	var pillarLength = 400;
	var pillarWidth = 25;
	var openingWidth = 500;

	var rot=0;
	var rotSpeed=.0030;

	var playerRadius = 10;
	var playerX = WIDTH/2;
	var playerY = playerRadius+10;
	var playerDirection = '';
	var playerSpeed = 3;
	var score = 0;
	var numTimesRun = 0;

	var horizontalDistance = Math.random()*WIDTH/2;
	var horizontalDistanceCount = 0;
	var tempHorizontalDistance;

	var verticalDistance = Math.random()*HEIGHT/2;
	var verticalDistanceCount = 0;
	var tempVerticalDistance;

	var diagonalQ1Distance = Math.random()*HEIGHT/2;
	var diagonalQ1DistanceCount = 0;
	var tempDiagonalQ1Distance;

	var diagonalQ2Distance = Math.random()*HEIGHT/2;
	var diagonalQ2DistanceCount = 0;
	var tempDiagonalQ2Distance;

	var diagonalQ3Distance = Math.random()*HEIGHT/2;
	var diagonalQ3DistanceCount = 0;
	var tempDiagonalQ3Distance;

	var diagonalQ4Distance = Math.random()*HEIGHT/2;
	var diagonalQ4DistanceCount = 0;
	var tempDiagonalQ4Distance;

	var pillarLocations = [];

	function init()
	{
		htmlCanvas = document.getElementById('c');
		context = htmlCanvas.getContext('2d');
		createCanvas();
		makePlayer(playerX,playerY);
		createCircle(outerCircleRadius,false);
		createCircle(centerCircleRadius,true);
		movePillar();
	}

	function createCanvas()
	{
		htmlCanvas.width = WIDTH;
		htmlCanvas.height = HEIGHT;
	}

	function createCircle(radius,fnf)
	{
		context.beginPath();
		context.arc(WIDTH/2,HEIGHT/2,radius-2.5,0,2*Math.PI);
		context.lineWidth=5;
		context.stroke();
		if(fnf === true)
		{
			context.fill();
		}
		if(fnf === false)
		{
			context.fillStyle = '#D6D6D6';
			context.fill();
		}
	}


	function movePillar() //I am so proud of this algorithm
	{
		numTimesRun++;
		if(numTimesRun === 100)
		{
			score++;
			if(score%10 === 0) 
			{
				if(playerSpeed<4) playerSpeed+=.2
				if(rotSpeed<.1) rotSpeed+=.001;
			}
			numTimesRun = 0;
			keepScore();
		}
		
		moveHorizontalPillar();
		moveVerticalPillar();
		moveDiagonalQ1Pillar();
		moveDiagonalQ2Pillar();
		moveDiagonalQ3Pillar();
		moveDiagonalQ4Pillar();

		rot+=rotSpeed;
		clearCanvas();

		createPillars(pillarLength,pillarWidth,horizontalDistance,'horizontal',rot);
		createPillars(pillarWidth,pillarLength,verticalDistance,'vertical',rot);
		createPillars(pillarWidth,pillarLength,diagonalQ1Distance,'diagonalQ1',rot);
		createPillars(pillarWidth,pillarLength,diagonalQ2Distance,'diagonalQ2',rot);
		createPillars(pillarWidth,pillarLength,diagonalQ3Distance,'diagonalQ3',rot);
		createPillars(pillarWidth,pillarLength,diagonalQ4Distance,'diagonalQ4',rot);

		var timer = setTimeout("movePillar()",10);
	}

	function moveHorizontalPillar()
	{
		switch(horizontalDistanceCount)
		{
			case 0:
				if(horizontalDistance>=400) horizontalDistanceCount++;
				else horizontalDistance++;
				break;
			case 1:
				if(horizontalDistance<=-400) horizontalDistanceCount++;
				else horizontalDistance--;
				break;
			case 2:
				tempHorizontalDistance = Math.random()*HEIGHT/2;
				horizontalDistanceCount++;
				break;
			case 3:
				if(parseInt(horizontalDistance)==parseInt(tempHorizontalDistance))
				{
					horizontalDistance = tempHorizontalDistance;
					tempHorizontalDistance = 0;
					horizontalDistanceCount = 0;
					break;
				}
				if(horizontalDistance>=tempHorizontalDistance) horizontalDistance--;
				if(horizontalDistance<tempHorizontalDistance) horizontalDistance++;
				break;
		}
	}

	function moveVerticalPillar()
	{
		switch(verticalDistanceCount)
		{
			case 0:
				if(verticalDistance>=400) verticalDistanceCount++;
				else verticalDistance++;
				break;
			case 1:
				if(verticalDistance<=-400) verticalDistanceCount++;
				else verticalDistance--;
				break;
			case 2:
				tempVerticalDistance = Math.random()*HEIGHT/2;
				verticalDistanceCount++;
				break;
			case 3:
				if(parseInt(verticalDistance)==parseInt(tempVerticalDistance))
				{
					verticalDistance = tempVerticalDistance;
					tempVerticalDistance = 0;
					verticalDistanceCount = 0;
					break;
				}
				if(verticalDistance>=tempVerticalDistance) verticalDistance--;
				if(verticalDistance<tempVerticalDistance) verticalDistance++;
				break;
		}
	}

	function moveDiagonalQ1Pillar()
	{
		switch(diagonalQ1DistanceCount)
		{
			case 0:
				if(diagonalQ1Distance>=400) diagonalQ1DistanceCount++;
				else diagonalQ1Distance++;
				break;
			case 1:
				if(diagonalQ1Distance<=-400) diagonalQ1DistanceCount++;
				else diagonalQ1Distance--;
				break;
			case 2:
				tempDiagonalQ1Distance = Math.random()*HEIGHT/2;
				diagonalQ1DistanceCount++;
				break;
			case 3:
				if(parseInt(diagonalQ1Distance)==parseInt(tempDiagonalQ1Distance))
				{
					diagonalQ1Distance = tempDiagonalQ1Distance;
					tempDiagonalQ1Distance = 0;
					diagonalQ1DistanceCount = 0;
					break;
				}
				if(diagonalQ1Distance>=tempDiagonalQ1Distance) diagonalQ1Distance--;
				if(diagonalQ1Distance<tempDiagonalQ1Distance) diagonalQ1Distance++;
				break;
		}
	}

	function moveDiagonalQ2Pillar()
	{
		switch(diagonalQ2DistanceCount)
		{
			case 0:
			
				if(diagonalQ2Distance>=400) diagonalQ2DistanceCount++;
				else diagonalQ2Distance++;
				break;
			case 1:
				if(diagonalQ2Distance<=-400) diagonalQ2DistanceCount++;
				else diagonalQ2Distance--;
				break;
			case 2:
				tempDiagonalQ2Distance = Math.random()*HEIGHT/2;
				diagonalQ2DistanceCount++;
				break;
			case 3:

				if(parseInt(diagonalQ2Distance)==parseInt(tempDiagonalQ2Distance))
				{
					diagonalQ2Distance = tempDiagonalQ2Distance;
					tempDiagonalQ2Distance = 0;
					diagonalQ2DistanceCount = 0;
					break;
				}
				if(diagonalQ2Distance>=tempDiagonalQ2Distance) diagonalQ2Distance--;
				if(diagonalQ2Distance<tempDiagonalQ2Distance) diagonalQ2Distance++;
				break;
		}
	}

	function moveDiagonalQ3Pillar()
	{
		switch(diagonalQ3DistanceCount)
		{
			case 0:
				if(diagonalQ3Distance>=400) diagonalQ3DistanceCount++;
				else diagonalQ3Distance++;
				break;
			case 1:
				if(diagonalQ3Distance<=-400) diagonalQ3DistanceCount++;
				else diagonalQ3Distance--;
				break;
			case 2:
				tempDiagonalQ3Distance = Math.random()*HEIGHT/3;
				diagonalQ3DistanceCount++;
				break;
			case 3:
				if(parseInt(diagonalQ3Distance)==parseInt(tempDiagonalQ3Distance))
				{
					diagonalQ3Distance = tempDiagonalQ3Distance;
					tempDiagonalQ3Distance = 0;
					diagonalQ3DistanceCount = 0;
					break;
				}
				if(diagonalQ3Distance>=tempDiagonalQ3Distance) diagonalQ3Distance--;
				if(diagonalQ3Distance<tempDiagonalQ3Distance) diagonalQ3Distance++;
				break;
		}
	}

	function moveDiagonalQ4Pillar()
	{
		switch(diagonalQ4DistanceCount)
		{
			case 0:
				if(diagonalQ4Distance>=400) diagonalQ4DistanceCount++;
				else diagonalQ4Distance++;
				break;
			case 1:
				if(diagonalQ4Distance<=-400) diagonalQ4DistanceCount++;
				else diagonalQ4Distance--;
				break;
			case 2:
				tempDiagonalQ4Distance = Math.random()*HEIGHT/4;
				diagonalQ4DistanceCount++;
				break;
			case 3:
				if(parseInt(diagonalQ4Distance)==parseInt(tempDiagonalQ4Distance))
				{
					diagonalQ4Distance = tempDiagonalQ4Distance;
					tempDiagonalQ4Distance = 0;
					diagonalQ4DistanceCount = 0;
					break;
				}
				if(diagonalQ4Distance>=tempDiagonalQ4Distance) diagonalQ4Distance--;
				if(diagonalQ4Distance<tempDiagonalQ4Distance) diagonalQ4Distance++;
				break;
		}
	}


	function createPillars(l,w,num,orientation,rot)
	{
		context.save();
		context.translate(WIDTH/2,HEIGHT/2);
		context.rotate(rot);
		switch(orientation)
		{
			case 'diagonalQ1':
				context.rotate(rot+Math.PI/4);
				break;

			case 'diagonalQ2':
				context.rotate(rot+Math.PI*3/4);
				break;

			case 'diagonalQ3':
				context.rotate(rot+Math.PI*5/4);
				break;

			case 'diagonalQ4':
				context.rotate(rot+Math.PI*7/4);
				break;
		}

		if(orientation!='horizontal')
		{
			context.rect(-l/2,num-l-openingWidth,l,w);
			context.rect(-l/2,num,l,w);
			context.rect(-l/2,num+l+openingWidth,l,w);

			// if((playerY > num-l-openingWidth+300-playerRadius-5 && playerY < num-l-openingWidth+300+w+playerRadius+5) ||
			// 	(playerY > num+300-playerRadius-5 && playerY < num+300+w+playerRadius+5) ||
			// 	(playerY > num+l+openingWidth+300-playerRadius-5 && playerY < num+l+openingWidth+300+w+playerRadius+5))
			// {
			// 	if(playerX > -l/2+300-playerRadius-5 && playerX < -l/2+300+l+playerRadius+5) switchPlayerDirection();
			// }

		}
		else
		{
			context.rect(num-w-openingWidth,-w/2,l,w);
			context.rect(num,-w/2,l,w);
			context.rect(num+w+openingWidth,-w/2,l,w);
			
			// if((playerX > num-w-openingWidth+300-playerRadius-5 && playerX < num-w-openingWidth+300+l+playerRadius+5) ||
			// 	(playerX > num+300-playerRadius-5 && playerX < num+300+l+playerRadius+5) ||
			// 	(playerX > num+w+openingWidth+300-playerRadius-5 && playerX < num+w+openingWidth+300+l+playerRadius+5))
			// {
			// 	if(playerY > -w/2+300-playerRadius-5 && playerY < -w/2+300+w+playerRadius+5) switchPlayerDirection();
			// }
		}

		context.stroke();
		context.fillStyle = '#000000';
		context.fill();
		context.restore();
		
	}

	function createRectangle(ori,num)
	{
		if(ori!='horizontal')
		{
			context.rect(-l/2,num-l-openingWidth,l,w);
			context.rect(-l/2,num,l,w);
			context.rect(-l/2,num+l+openingWidth,l,w);
		}
		else
		{
			context.rect(num-w-openingWidth,-w/2,l,w);
			context.rect(num,-w/2,l,w);
			context.rect(num+w+openingWidth,-w/2,l,w);
		}
	}

	function switchPlayerDirection()
	{
		switch(playerDirection)
		{
			case 'up':
				playerDirection = 'down';
				break;
			case 'down':
				playerDirection = 'up';
				break;
			case 'left':
				playerDirection = 'right';
				break;
			case 'right':
				playerDirection = 'left';
				break;
			default:
				makePlayer(playerX,playerY);
				break;
		}
	}

	function clearCanvas()
	{
		context.clearRect(0,0,WIDTH,HEIGHT);
		allPillarLocations = [];
		createCircle(outerCircleRadius,false);
		if(!checkLocation())
		{
			switch(playerDirection)
			{
				case 'up':
					makePlayer(playerX,playerY-=playerSpeed);
					break;
				case 'down':
					makePlayer(playerX,playerY+=playerSpeed);
					break;
				case 'left':
					makePlayer(playerX-=playerSpeed,playerY);
					break;
				case 'right':
					makePlayer(playerX+=playerSpeed,playerY);
					break;
				default:
					makePlayer(playerX,playerY);
					break;
			}
		}
		else
		{
			switch(playerDirection)
			{
				case 'up':
					playerDirection = 'down';
					makePlayer(playerX,playerY+=playerSpeed);
					break;
				case 'down':
					playerDirection = 'up';
					makePlayer(playerX,playerY-=playerSpeed);
					break;
				case 'left':
					playerDirection = 'right';
					makePlayer(playerX+=playerSpeed,playerY);
					break;
				case 'right':
					playerDirection = 'left';
					makePlayer(playerX-=playerSpeed,playerY);
					break;
				default:
					makePlayer(playerX,playerY);
					break;
			}
		}
		createCircle(centerCircleRadius,true);
		keepScore();
	}

	function makePlayer()
	{
		context.beginPath();
		context.arc(playerX,playerY,playerRadius,0,2*Math.PI);
		context.lineWidth=5;
		context.stroke();
		context.fillStyle = '#000000';
		context.fill();
	}

	function keepScore()
	{
		document.getElementById('score').innerHTML = 'Score: ' + score;
	}

	function checkLocation()
	{
		return Math.sqrt(Math.pow(300-playerX,2)+Math.pow(300-playerY,2)) >= outerCircleRadius-playerRadius-5 ||
			        Math.sqrt(Math.pow(300-playerX,2)+Math.pow(300-playerY,2)) <= centerCircleRadius+playerRadius;
	}

	document.onkeydown = function(event) 
	{
	    if (!event)
	        event = window.event;
	    var code = event.keyCode;
	    if (event.charCode && code == 0)
	        code = event.charCode;
	    switch(code) 
	    {
	        case 37:
	            playerDirection = 'left';
	            break;
	        case 38:
	            playerDirection = 'up';
	            break;
	        case 39:
	            playerDirection = 'right';
	            break;
	        case 40:
	            playerDirection = 'down';
                break;
	    }
	    event.preventDefault();
	};

	init();