function start() {
	var cl = new Clock();
	var cl2 = new Clock2();
	cl.run();
	cl2.run();
	setInterval(function(){cl.run();}, 25);
	setInterval(function(){cl2.run();}, 25);
}