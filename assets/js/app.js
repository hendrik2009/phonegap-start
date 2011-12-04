// 
//  --- our app behavior logic ---
//
run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("No internet connection - we won't be able to show you any maps");
        } else {
            alert("We can reach Google - get ready for some awesome maps!");
        }
    })();
    
    // a little inline controller
    when('#info', function(){
    	
    });
    when('#music', function(){
    	
    });
    when('#video', function(){
    	
    });
    when('#foto', function(){
    	
    });
    when('#event', function(){
    	
    });
 	button('.back', function(){
 		display('#welcome');
 	});
});

