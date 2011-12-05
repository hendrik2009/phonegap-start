// 
//  --- our app behavior logic ---
//

run(function () {
	
	//alert('app.js run');
    // immediately invoked on first run
    var init = (function () {
		
		function parseInfo(data){
			x$("#info").html('inner',"msg: parse Info<br/><div class='back_button'>Go Back</div>");
			
		};
		function parseAlbums(data){
			x$("#music").html('inner',"msg: parse music<br/><div class='back_button'>Go Back</div>");
		};
		function parseVideos(data){
			x$("#video").html('inner',"msg: parse video<br/><div class='back_button'>Go Back</div>");
		};
		function parseEvents(data){
			x$("#event").html('inner',"msg: parse Event<br/><div class='back_button'>Go Back</div>");
		};
		function parsePhoto(data){
			x$("#foto").html('inner',"msg: parse Foto<br/><div class='back_button'>Go Back</div>");
		};
		
		function getXml(){			
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
			 		
					var attr = x[i].attributes[u];
					if (attr.specified) {
						message += "<p>" + attr.name + " = "  + attr.value + "</p>";
						if(attr.name =="type"){
							if(attr.value == "info"){
								parseInfo(x[i]);
							}
							else if(attr.value == "albums"){
								parseAlbums(x[i]);
							}
							else if(attr.value == "videos"){
								parseVideos(x[i]);
							}
							else if(attr.value == "gallaries"){
								parsePhoto(x[i]);
							}
							else if(attr.value == "events"){
								parseEvents(x[i]);
							}
						}
            		}
            	
            	}
			}
			message += "<div class='back_button'>Go Back</div>";
			x$("#info").html('inner',"msg:"+message);
		
		};// end ask
		
		
		// create views by xml
		getXml();
		
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
