document.getElementById("ingressar").hidden = false;

function validarForm() {
    
    var nom = document.getElementById("nom").value;
    var cog = document.getElementById("cog").value;
    var ema = document.getElementById("ema").value;
    var adre = document.getElementById("adre").value;
    var cp = document.getElementById("cp").value;
    var comentari = document.getElementById("comentari").value;
    var validacio = true;
    var contador = 0;
    document.getElementById("errornom").innerHTML = "";
    document.getElementById("nom").style.borderColor="grey";
    document.getElementById("errorcognoms").innerHTML = "";
    document.getElementById("cog").style.borderColor="grey";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("ema").style.borderColor="grey";
    document.getElementById("codipostal").innerHTML = "";
    document.getElementById("cp").style.borderColor="grey";
    if (nom == ""){
        validacio = false;
        document.getElementById("errornom").innerHTML = "<p style='color:red'>El camp del nom està buit.</p>";
        document.getElementById("nom").style.borderColor="red";
    }
    if (cog == ""){
        validacio = false;
        document.getElementById("errorcognoms").innerHTML = "<p style='color:red'>El camp dels cognoms està buit..</p>";
        document.getElementById("cog").style.borderColor="red";
    }
    var longitut = cog.length;
    for (var i=0; i<longitut; i++){
        if (cog.charCodeAt(i) === 32) contador += 1;

    }
    if (cog != "" && (contador < 1 || contador > 2)){
        validacio = false;
        document.getElementById("errorcognoms").innerHTML = "<p style='color:red'>En aquest camp s'ha de posar dos cognoms.</p>";
        document.getElementById("cog").style.borderColor="red";
    }
    if (ema == ""){
        validacio = false;
        document.getElementById("erroremail").innerHTML = "<p style='color:red'>El camp de l'email està buit.</p>";
        document.getElementById("ema").style.borderColor="red";
    }
    if (cp == ""){
        validacio = false;
        document.getElementById("codipostal").innerHTML = "<p style='color:red'>El camp del codi postal està buit.</p>";
        document.getElementById("cp").style.borderColor="red";
    }
    if (cp != "" && cp>9999){
        validacio = false;
        document.getElementById("codipostal").innerHTML = "<p style='color:red'>El nombre del codi postal està fora de rang.</p>";
        document.getElementById("cp").style.borderColor="red";
    }
    if (validacio == true){
        document.getElementById("buto").hidden = false;
        document.getElementById("ingressar").hidden = true;
        document.getElementById("enviar").innerHTML = "<p style='color:green'>Felicitats, la validació és correcte, ara pulsar el botó <b>ENVIAR</b>...</p>";
        
    }
}
function enviar() {
    document.getElementById("ingressar").hidden = false;
    document.getElementById("buto").hidden = true;
    document.getElementById("nom").value = "";
    document.getElementById("cog").value = "";
    document.getElementById("ema").value = "";
    document.getElementById("adre").value = "";
    document.getElementById("cp").value = "";
    document.getElementById("comentari").value = "";
    document.getElementById("enviar").innerHTML = "";
}


