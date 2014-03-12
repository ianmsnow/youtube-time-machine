
//Declaration of all original time variables
var was = new Date();
var wsec = was.getSeconds();
var wmin = was.getMinutes();
var whr = was.getHours();
var wsec2 = was.getSeconds();
var wmin2 = was.getMinutes();
var whr2 = was.getHours();
var acc = 1/40;
var dsec = acc*1;
var dmin = acc*1/60;
var dhr = acc*1/60/60;
var acc2 = 1/40*2000;
var dsec2 = acc2*1;
var dmin2 = acc2*1/60;
var dhr2 = acc2*1/60/60;


//Operation of "Real Time" Clock
function Clock() {
	var init = function() {
		var canvas = document.getElementById('canvas');
		var xmlDiv = document.getElementById('xml');
		var canvasDiv = document.getElementById('canvas_div');
		var ctx = null;
		if(canvas.getContext) { //FF, Chrome, Opera, Safari
			ctx = canvas.getContext('2d');
			xmlDiv.removeChild(canvasDiv);
		} else if(document.attachEvent) { //IE
			ctx = context;
			ctx.div = canvasDiv;
			document.body.removeChild(canvas);
		}
		return ctx;
	};
	
	var ctx = init();
	var lineHour = new Line(ctx, -10, 0, 60, 8, "black");
	var lineMinute = new Line(ctx, -15, 0, 80, 6, "black");
	var lineSecond = new Line(ctx, -20, 0, 88, 4, "red");
	this.run = function() {
		ctx.save();
		if(ctx.clearRect) {
			ctx.clearRect(0, 0, 200, 200);
		}
		ctx.translate(100, 100);
		ctx.rotate(-Math.PI / 2);
		
		ctx.save();
		ctx.rotate((dhr+whr) * (Math.PI / 6) + (Math.PI / 360) * (dmin+wmin) + (Math.PI / 21600) * (dsec+wsec));
		lineHour.draw();
		ctx.restore();
		ctx.save();
		ctx.rotate((Math.PI / 30) * (wmin+dmin) + (Math.PI / 1800) * (wsec+dsec));
		lineMinute.draw();
		ctx.restore();
		ctx.save();
		ctx.rotate((wsec+dsec) * Math.PI / 30);
		lineSecond.draw();
		ctx.restore();
		ctx.restore();
		
		wsec = wsec+dsec;
		wmin = wmin+dmin;
		whr = whr+dhr;
	}
};


//Operation of "Youtube Speed" Clock
function Clock2() {
	var init = function() {
		var canvas = document.getElementById('canvas2');
		var xmlDiv = document.getElementById('xml');
		var canvasDiv = document.getElementById('canvas_div2');
		var ctx = null;
		if(canvas.getContext) { //FF, Chrome, Opera, Safari
			ctx = canvas.getContext('2d');
			xmlDiv.removeChild(canvasDiv);
		} else if(document.attachEvent) { //IE
			ctx = context;
			ctx.div = canvasDiv;
			document.body.removeChild(canvas);
		}
		return ctx;
	};
	
	var ctx = init();
	var lineHour = new Line(ctx, -10, 0, 60, 8, "black");
	var lineMinute = new Line(ctx, -15, 0, 80, 6, "black");
	var lineSecond = new Line(ctx, -20, 0, 88, 4, "red");
	this.run = function() {
		ctx.save();
		if(ctx.clearRect) {
			ctx.clearRect(0, 0, 200, 200);
		}
		ctx.translate(100, 100);
		ctx.rotate(-Math.PI / 2);
		
		ctx.save();
		ctx.rotate((dhr2+whr2) * (Math.PI / 6) + (Math.PI / 360) * (dmin2+wmin2) + (Math.PI / 21600) * (dsec2+wsec2));
		lineHour.draw();
		ctx.restore();
		ctx.save();
		ctx.rotate((Math.PI / 30) * (wmin2+dmin2) + (Math.PI / 1800) * (wsec2+dsec2));
		lineMinute.draw();
		ctx.restore();
		ctx.save();
		ctx.rotate((wsec2+dsec2) * Math.PI / 30);
		lineSecond.draw();
		ctx.restore();
		ctx.restore();
		
		wsec2 = wsec2+dsec2;
		wmin2 = wmin2+dmin2;
		whr2 = whr2+dhr2;
	}
};

