var x = Math.floor(Math.random()*10);
	var y = Math.floor(Math.random()*10);
	var z = Math.floor(Math.random()*10);
	var code = x+""+y+""+z
	
	function myfun(a,b,c){
		a = Number(code1.value);
		b = Number(code2.value);
		c = Number(code3.value);
		guys = a+""+b+""+c; 
		
		if (guys === code){
			main2.innerHTML += guys + " is right code " +"<br>"; 
		}
		else{
		
		
		if(a < x){
			a = "H";
		}
		else if(a > x){
			a = "L";
		}
		else {
			a = x;
		};
		
				if(b < y){
				b = "H";
				}
				else if(b > y){
					b = "L";
				}
				else {
					b = y;
				};
			
		if(c < z){
			c = "H";
		}
		else if(c > z){
			c = "L";
		}
		else {
			c = z;
		};
		
		guys = a+""+b+""+c; 
		main2.innerHTML += guys +"<br>"; 
		};
	};