/* GITHUB: EchTR 
Steam ID: EchTR
Discord ID: EchTR#1848
*/
function sifirla(){
	kazanma = 0;
	anahtar = 1;
	for (var i = 0; i < 9; i++){
		document.getElementById("kDiv" + (i+1)).innerHTML = "";
		tahta[i] = "";
	}	
}
function kDiv(s){
	var sDiv = document.getElementById('kDiv' + s);
	console.log(s);
	if (anahtar == 1){
		if (tahta[s-1] == ""){
			tahta[s-1] = "x";
			sDiv.innerHTML = "x";
			if (tahta[0] == "x" && tahta[1] == "x" && tahta[2] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[3] == "x" && tahta[4] == "x" && tahta[5] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[6] == "x" && tahta[7] == "x" && tahta[8] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "x" && tahta[3] == "x" && tahta[6] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[1] == "x" && tahta[4] == "x" && tahta[7] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "x" && tahta[5] == "x" && tahta[8] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "x" && tahta[4] == "x" && tahta[8] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "x" && tahta[4] == "x" && tahta[6] == "x"){
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if(anahtar == 3){}else {anahtar = 2;} 
		} else {
			anahtar = 1;
		}	
	} else if (anahtar == 2){
		if (tahta[s-1] == ""){
			tahta[s-1] = "o";
			sDiv.innerHTML = "o";
			if (tahta[0] == "o" && tahta[1] == "o" && tahta[2] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[3] == "o" && tahta[4] == "o" && tahta[5] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[6] == "o" && tahta[7] == "o" && tahta[8] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "o" && tahta[3] == "o" && tahta[6] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[1] == "o" && tahta[4] == "o" && tahta[7] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "o" && tahta[5] == "o" && tahta[8] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "o" && tahta[4] == "o" && tahta[8] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "o" && tahta[4] == "o" && tahta[6] == "o"){
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			} 
			if(anahtar == 3){}else{anahtar = 1;}
		} else {
			anahtar = 2;
		}
	} else if (anahtar == 3) {

	}
	if (anahtar < 3){
		if ((tahta[0] == "x" || tahta[0] == "o") && (tahta[1] == "x" || tahta[1] == "o") && (tahta[2] == "x" || tahta[2] == "o") && (tahta[3] == "x" || tahta[3] == "o") && (tahta[4] == "x" || tahta[4] == "o") && (tahta[5] == "x" || tahta[5] == "o") && (tahta[6] == "x" || tahta[6] == "o") && (tahta[7] == "x" || tahta[7] == "o") && (tahta[8] == "x" || tahta[8] == "o")){
			if (kazanma == 0){
				window.alert("berabere");
				anahtar = 3;
			}
		}
	} else {

	}
	console.clear();
	console.log("Tahta:");
	console.log("[" + tahta[0]+" - "+tahta[1]+" - "+tahta[2] + "]");
	console.log("[" + tahta[3]+" - "+tahta[4]+" - "+tahta[5] + "]");
	console.log("[" + tahta[6]+" - "+tahta[7]+" - "+tahta[8] + "]");
}
