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
	for (var i = 1; i < 10; i++){
		document.getElementById("kDiv" + i).style.backgroundColor = "#2980b9";
		document.getElementById("kDiv" + i).style.borderColor = "#2980b9";
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
				for (i = 1; i < 4; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[3] == "x" && tahta[4] == "x" && tahta[5] == "x"){
				for (i = 4; i < 7; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[6] == "x" && tahta[7] == "x" && tahta[8] == "x"){
				for (i = 7; i < 10; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "x" && tahta[3] == "x" && tahta[6] == "x"){
				document.getElementById("kDiv1").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv1").style.borderColor = "#27ae60";
				document.getElementById("kDiv4").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv4").style.borderColor = "#27ae60";
				document.getElementById("kDiv7").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv7").style.borderColor = "#27ae60";
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[1] == "x" && tahta[4] == "x" && tahta[7] == "x"){
				document.getElementById("kDiv2").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv2").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv8").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv8").style.borderColor = "#27ae60";
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "x" && tahta[5] == "x" && tahta[8] == "x"){
				document.getElementById("kDiv3").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv3").style.borderColor = "#27ae60";
				document.getElementById("kDiv6").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv6").style.borderColor = "#27ae60";
				document.getElementById("kDiv9").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv9").style.borderColor = "#27ae60";
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "x" && tahta[4] == "x" && tahta[8] == "x"){
				document.getElementById("kDiv1").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv1").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv9").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv9").style.borderColor = "#27ae60";
				window.alert("X kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "x" && tahta[4] == "x" && tahta[6] == "x"){
				document.getElementById("kDiv3").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv3").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv7").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv7").style.borderColor = "#27ae60";
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
				for (i = 1; i < 4; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[3] == "o" && tahta[4] == "o" && tahta[5] == "o"){
				for (i = 4; i < 7; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[6] == "o" && tahta[7] == "o" && tahta[8] == "o"){
				for (i = 7; i < 10; i++){
					document.getElementById("kDiv" + i).style.backgroundColor = "#27ae60";
					document.getElementById("kDiv" + i).style.borderColor = "#27ae60";
				}
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "o" && tahta[3] == "o" && tahta[6] == "o"){
				document.getElementById("kDiv1").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv1").style.borderColor = "#27ae60";
				document.getElementById("kDiv4").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv4").style.borderColor = "#27ae60";
				document.getElementById("kDiv7").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv7").style.borderColor = "#27ae60";
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[1] == "o" && tahta[4] == "o" && tahta[7] == "o"){
				document.getElementById("kDiv2").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv2").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv8").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv8").style.borderColor = "#27ae60";
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "o" && tahta[5] == "o" && tahta[8] == "o"){
				document.getElementById("kDiv3").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv3").style.borderColor = "#27ae60";
				document.getElementById("kDiv6").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv6").style.borderColor = "#27ae60";
				document.getElementById("kDiv9").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv9").style.borderColor = "#27ae60";
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[0] == "o" && tahta[4] == "o" && tahta[8] == "o"){
				document.getElementById("kDiv1").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv1").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv9").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv9").style.borderColor = "#27ae60";
				window.alert("O kazandı!");
				kazanma = 1;
				anahtar = 3;
			}
			if (tahta[2] == "o" && tahta[4] == "o" && tahta[6] == "o"){
				document.getElementById("kDiv3").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv3").style.borderColor = "#27ae60";
				document.getElementById("kDiv5").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv5").style.borderColor = "#27ae60";
				document.getElementById("kDiv7").style.backgroundColor = "#27ae60";
				document.getElementById("kDiv7").style.borderColor = "#27ae60";
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
