// 
//  --- our app behavior logic ---
//

run(function () {
	alert('app.js run');
    // immediately invoked on first run
    var init = (function () {
        // init here
        console.log('app.js run init');
     
    })();

    // a little inline controller
    when('#info', function(){
    	
    	console.log('info init');
    });
    when('#music', function(){
    	console.log('music init');
    });
    when('#video', function(){
    	console.log('video init');
    });
    when('#foto', function(){
    	console.log('foto init');
    });
    when('#event', function(){
    	console.log('event init');
    });
    when('#back', function(){
    	console.log('event init');
    	display('welcome');
    });
});

