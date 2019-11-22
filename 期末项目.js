// JavaScript Documentvar pict = new Array();
	var pict = new Array();
	pict[0] = "iphone.png";
	pict[1] = "小米.png";
	pict[2] = "oppo.png";
	pict[3] = "华为.png";
	
	var index = 0;
	var t;
	
	function showPict(){
		document.getElementById("pic").src = "img/" + pict[index];
		if(index < pict.length - 1)
			index++;
		else
			index = 0;
			
		t = window.setTimeout("showPict()",3000);
	}
	
	function showNext(){
		window.clearTimeout(t);
		showPict();
	}
	
	function showPrev(){
		window.clearTimeout(t);
		
		if(index > 0)
			index--;
			document.getElementById("pic").src = "img/" + pict[index];
		
		t = window.setTimeout("showPict()",3000);
	}