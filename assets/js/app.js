// 
//  --- our app behavior logic ---
//

run(function () {
	
	//alert('app.js run');
    // immediately invoked on first run
    var init = (function () {

		function ask(){			
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp			= new XMLHttpRequest();
			}
			else{// code for IE6, IE5
				xmlhttp			= new ActiveXObject("Microsoft.XMLHTTP");
			}
			
			//loading XML
			xmlhttp.open("GET","http://featherlike.restorm.com/widgets/minipage.xml",false);
			xmlhttp.send();
			xmlDoc				= xmlhttp.responseXML;
			
			var x				= xmlDoc.getElementsByTagName("tab");
			var message;
			message				= "<p>:::Here we go:::</p>"
			
			for (i=0;i<x.length;i++){
				
			 	for (var u = 0; u < x[i].attributes.length; u++) {
			 		
					var attr = info.attributes[u];
					if (attr.specified) {
						message += "<p>" + attr.name + " = "  + attr.value + "</p>";
            		}
            	
            	}
			}
			x$("#info").html('inner',"msg:"+message);
		
		};// end ask
		ask();
		
	})();//end init

    // controller  
    when('#info', function(){
    	//alert('info init');
    });
    when('#music', function(){
    	//alert('music init');
    });
    when('#video', function(){
    	//alert('video init');
    });
    when('#foto', function(){
    	//alert('foto init');
    });
    when('#event', function(){
    	//alert('event init');
    });

   	//alert('setup');
   	x$(".back_button").on('touchstart', function () {
            display("#welcome");
    });
});
