<script type="text/javascript" src="/public/js/paper-full.js"></script>
	<script type="text/paperscript" canvas="myCanvas">

		var path;


		var strokeCol = 'black', strokeWid = 2;


		var textItem = new PointText({
			content: 'Click and Drag to Draw a Line. Use Arrow Keys to Scroll',
			point: new Point(500, 400),
			fillColor: 'black',
			fontSize: 20,
		});



		function onMouseDown(event) {
			// Create a new path and set its stroke color to x:
			path = new Path({
				segments: [event.point],
				strokeColor: strokeCol,
				strokeWidth: strokeWid,
			});
		}


		// While the user drags the mouse, points are added to the path
		// at the position of the mouse:
		function onMouseDrag(event) {
			path.add(event.point);
		}


		// When the mouse is released, we simplify the path:
		function onMouseUp(event) {
			var segmentCount = path.segments.length;
			path.simplify(10);
		}


		function onKeyDown(event) {
			if(event.key == 'up'){
				paper.view.scrollBy(new paper.Point(0,-100));
				return true;


			}			
			if(event.key == 'down'){
				paper.view.scrollBy(new paper.Point(0,100));
				        return true;

			}	
			if(event.key == 'right'){
				paper.view.scrollBy(new paper.Point(100,0));
				return true;


			}			
			if(event.key == 'left'){
				paper.view.scrollBy(new paper.Point(-100,0));
				        return true;

			}
		}

	

	function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

	}

	function goto (xVar, yVar){
		document.getElementById("frm1").submit();
		
	}

	</script>