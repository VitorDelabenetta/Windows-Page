setTimeout(function(){
    location.reload();
}, 60000); // Recarrega a página a cada minuto

// Pega a hora atual
var now = new Date();
var hour = (now.getHours() < 10 ? '0' : '') + now.getHours();
var minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

// Seleciona os elementos para exibir os valores
document.getElementById("hour").innerHTML = hour;
document.getElementById("minutes").innerHTML = minutes;