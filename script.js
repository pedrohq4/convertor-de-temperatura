const kel = " K"
const cel = " °C"
const fah = " °F" 


function CelFah() {
  let cel = document.getElementById("cel").value;

  let result = (parseFloat(cel) * 9 / 5) + 32;

  if(cel==""){
    alert("preencha o campo") 
  }
    
else{
  resultadoCel.innerText = result.toFixed(1) + fah;
}
}

function CelKel() {
  let cel = document.getElementById("cel").value;

  let result = parseFloat(cel) + 273.15;

  if(cel==""){
    alert("preencha o campo")
  }
  else{
  resultadoCel.innerText = result.toFixed(2) + kel;
}
}  

function FahCel() {
  let fah = document.getElementById("fah").value;

  let result = (parseFloat(fah) - 32) * 5 / 9;

  if(fah=="") {
    alert("preencha o campo")
  }
else{
  resultadoFah.innerText = result.toFixed(1) + cel;
}
}

function FahKel() {
  let fah = document.getElementById("fah").value;

  let result = (parseFloat(fah) - 32) * 5 / 9 + 273.15;

if(fah=="") {
    alert("preencha o campo")
  }
else{
  resultadoFah.innerText = result.toFixed(3) + kel;
}
}

function KelCel() {
  let kel = document.getElementById("kel").value;

  let result = parseFloat(kel) - 273.15;

if(kel=="") {
    alert("preencha o campo")
  }
else{
  resultadoKel.innerText = result.toFixed(2) + cel;
}  
}

function KelFah() {

  let kel = document.getElementById("kel").value;

  let result = parseFloat(kel) - 273.15 * 9/5 + 32 ;

if(kel=="") {
    alert("preencha o campo")
  }
else{
   resultadoKel.innerText = result.toFixed(2) + fah;
}
}
