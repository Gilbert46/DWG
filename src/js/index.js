var imatge = "img1.png";
var control = 1;
var zoom = 100;
var ample = 40;
var augme = 55;
function surt() {
    contanidor = "<img src='' alt=''>";
    document.getElementById("visor").innerHTML=contanidor;
    document.getElementById("visor").hidden=true;
}
function img1() {
    control = 1;
    visual();
}
function img2() {
    control = 2;
    visual();
}
function img3() {
    control = 3;
    visual();
}
function img4() {
    control = 4;
    visual();
}
function img5() {
    control = 5;
    visual();
}
function img6() {
    control = 6;
    visual();
}
function img7() {
    control = 7;
    visual();
}
function img8() {
    control = 8;
    visual();
}
function img9() {
    control = 9;
    visual();
}
function img10() {
    control = 10;
    visual();
}
function img11() {
    control = 11;
    visual();
}
function img12() {
    control = 12;
    visual();
}
function img13() {
    control = 13;
    visual();
}
function img14() {
    control = 14;
    visual();
}
function img15() {
    control = 15;
    visual();
}
function img16() {
    control = 16;
    visual();
}
function img17(){
    control = 17;
    visual();
}
function img18() {
    control = 18;
    visual();
}
function img19() {
    control = 19;
    visual();
}
function img20() {
    control = 20;
    visual();
}
function img21(){
    control = 21;
    visual();
}
function enrerre() {
    if (control > 1) control -= 1;
    visual();
}
function endavant() {
    if (control < 21) control += 1;
    visual();
}
function augment() {
    if (zoom < 150) zoom += 10;
    if (ample < 100) ample += 10;
    if (augme < 110) augme += 10;
    visual();
}
function dismin() {
    if (zoom > 80) zoom -= 10;
    if (ample > 30) ample -= 10;
    if (augme > 40) augme -= 10;
    visual();
}
function visual() {
    document.getElementById("visor").hidden=false;
    contanidor = '<div id=botons><a id="con1" onclick="dismin()"><img src="src/img/lup1.png" height="60" alt=""/></a><a id="con2" onclick="augment()"><img src="src/img/lup2.png" height="60" alt=""/></a><a id="con1" onclick="enrerre()"><img src="src/img/enrer.png" height="60" alt=""/></a><a id="con2" onclick="endavant()"><img src="src/img/endav.png" height="60" alt=""/></a><a id="sor" onclick="surt()"><img src="src/img/Sortir.png" height="60" alt=""/></a></div>';
    if (control==9 || control==11) contanidor += "<img src='src/img/"+control+".png' width='"+augme+"%' alt=''>";
    else if (control==20) contanidor += "<img src='src/img/"+control+".gif' width='75%' alt=''>";
    else if ((control>5 && control<13) || control==19) contanidor += "<img src='src/img/"+control+".png' width='"+ample+"%' alt=''>";
    else contanidor += "<img src='src/img/"+control+".png' width='"+zoom+"%' alt=''>";
    if (control==1) contanidor += "<p style='font-size:20px;'><b>Cotxe de carreres</b>, creat el 28 de setembre 2008, tipo d'arxiu (dwg) té un pes de 40 Kb.</p>";
    if (control==2) contanidor += "<p style='font-size:20px;'><b>Vaixell mediaval</b>, creat l'11 de setembre 2008, tipo d'arxiu (dwg) té un pes de 72 Kb.</p>";
    if (control==3) contanidor += "<p style='font-size:20px;'><b>Harley Davidson</b>, creat el 4 d'agost 2009, tipo d'arxiu (dwg) té un pes de 48 Kb.</p>";
    if (control==4) contanidor += "<p style='font-size:20px;'><b>Avió de passatges</b>, creat el 17 de maig 2009, tipo d'arxiu (dwg) té un pes de 36 Kb.</p>";
    if (control==5) contanidor += "<p style='font-size:20px;'><b>Cotxe familiar</b>, creat el 21 de setembre 2008, tipo d'arxiu (dwg) té un pes de 36 Kb.</p>";
    if (control==6) contanidor += "<p style='font-size:20px;'><b>bicicleta de muntanya</b>, creat el 22 de setembre 2008, tipo d'arxiu (dwg) té un pes de 44 Kb.</p>";
    if (control==7) contanidor += "<p style='font-size:20px;'><b>Sagrada família</b>, temple de Catalunya creat el 31 de maig 2009, tipo d'arxiu (dwg) té un pes de 124 Kb.</p>";
    if (control==8) contanidor += "<p style='font-size:20px;'><b>Copa d'europa Wembley 92</b>, creat el 31 maig 2009, tipo d'arxiu (dwg) té un pes de 44 Kb.</p>";
    if (control==9) contanidor += "<p style='font-size:20px;'><b>Grua contruïda amb mecanno</b>, creat el 31 d'agost 2009, tipo d'arxiu (dwg) té un pes de 76 Kb.</p>";
    
    document.getElementById("visor").innerHTML=contanidor;
}