// 
//  --- our app behavior logic ---
//

run(function () {
	
	//alert('app.js run');
    // immediately invoked on first run
    var init = (function () {
        // init here
        //alert('app.js run init');
        function ask(){
			/*x$('#welcome').xhr('inner', 'test.html');*/
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.open("GET","http://featherlike.restorm.com/widgets/minipage.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			//document.write("<table border='1'>");
			var x=xmlDoc.getElementsByTagName("genre");
			for (i=0;i<x.length;i++)
			  {
			 // document.write("<tr><td>");
			  //document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
			 // document.write("</td><td>");
			 	x$('#info').html('before', '<p>some warmup html</p>');

			  }
		};
    })();

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

