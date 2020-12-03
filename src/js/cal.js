/*inicialització de variables*/
var flag1=false;
var contanador="";
var resultat=0;
var operacio="+";
var primer_Nombre="";
var segon_Nombre="";
/*funció entrar un nombre a la pantalla*/
function entrar_nombre(n){
    if (operacio==='='){
        primer_Nombre="";
        contanador="";
        operacio="";
    }
    primer_Nombre+=n;
    contanador+=n;
    document.getElementById("pantalla").innerHTML=contanador;
}
/* funció per restaura els valors */
function restaura(){
    contanador="";
    primer_Nombre="";
    document.getElementById("pantalla").innerHTML="";
}
/* funció d'introduïr l'operació */
function signe_operacio(ope){
    segon_Nombre=primer_Nombre;    
    operacio=ope;
    primer_Nombre="";
    contanador="";
    document.getElementById("pantalla").innerHTML="";
}
/* funció de fer la operació indicada i imprimir-la a la pantalla */
function imprimir_operacio(igu){
    var nombre1,nombre2,decimals,PI,trigonometria;
    nombre1=new Number(primer_Nombre);
    nombre2=new Number(segon_Nombre);
    PI=Math.PI;
    trigonometria=nombre1*PI*22;
    if (operacio==='+'){
        resultat=nombre1+nombre2;}
    if (operacio==="-"){
        resultat=nombre2-nombre1;}
    if (operacio==="x"){
        resultat=nombre2*nombre1;} 
    if (operacio==="/"){
        resultat=nombre2/nombre1;}
    if (operacio==="%"){
        resultat=nombre2*nombre1/100;}    
    if (operacio==="pot"){
        resultat=Math.pow(nombre2,nombre1);}
    if (operacio==="arr"){
        resultat=Math.atan2(nombre2,nombre1);
    }
    if (igu==="sqr"){
        resultat=Math.sqrt(nombre1);
    }   
    if (igu==="qua"){
        resultat=nombre1*nombre1;
    }
    primer_Nombre=resultat;
    operacio="=";
    decimals=resultat*1000;
        if (decimals%1!==0){
        resultat=resultat.toFixed(4);}
    document.getElementById("pantalla").innerHTML=resultat;      
}