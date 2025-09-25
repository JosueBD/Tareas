function agregarTarea() {
  let tarea = document.getElementById("tarea").value;
  if (tarea === "") return;

  let li = document.createElement("li");
  li.innerText = tarea;
  document.getElementById("lista").appendChild(li);

  document.getElementById("tarea").value = "";
}
