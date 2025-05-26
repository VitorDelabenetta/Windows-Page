// Formatação do Horário:

function time_stamp() {
  const display_time = document.getElementById("display_time");
  var current_time = new Date();

  // Função do Javascript para pegar o tempo
  var hours = current_time.getHours();
  var minutes = current_time.getMinutes();

  const time_meridiem = hours >= 12 ? " PM" : " AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Meia-noite o 0 se torna 12

  // Se minutos forem menor que 10, adiciona um 0. Se não, apenas mostrar
  const format_minutes = minutes < 10 ? "0" + minutes : minutes;

  // Formatação para mostrar o horário
  const formatted_time = hours + ":" + format_minutes + time_meridiem;
  display_time.textContent = formatted_time;
}

// Chamar a função para rodar o Time Stamp a cada segundo
setInterval(time_stamp, 1000);
time_stamp();


// Deixar os elementos em estilo Draggable:

dragElement(document.getElementById("window_1"));
dragElement(document.getElementById("window_2"));
dragElement(document.getElementById("window_3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Código do draggable disponibilizado por W3Schools: https://www.w3schools.com/HOWTO/howto_js_draggable.asp
