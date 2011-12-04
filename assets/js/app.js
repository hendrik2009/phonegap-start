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
    	alert('info init');
    });
    when('#music', function(){
    	alert('music init');
    });
    when('#video', function(){
    	alert('video init');
    });
    when('#foto', function(){
    	alert('foto init');
    });
    when('#event', function(){
    	alert('event init');
    });
    when('#back', function(){
    	alert('back init');
    	display('#welcome');
    });
    
   	alert('setup');
   	x$(".back_button").on('touchstart', function () {
            display("#welcome");
    });
    
});

