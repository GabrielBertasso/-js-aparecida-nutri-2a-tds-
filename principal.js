var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;
var tdaltura = paciente.querySelector(".info-altura");

var altura = tdaltura.textContent;
var tdImc = paciente.querySelector(".info-imc")

var imc = peso / altura * altura;
tdImc.textContent = imc;


