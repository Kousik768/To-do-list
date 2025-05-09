function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText.trim() === "") return;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";

  // Left side: checkbox + task text
  const leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.alignItems = "center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  checkbox.onchange = () => {
    span.classList.toggle("completed", checkbox.checked);
  };

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  // Right side: buttons
  const rightDiv = document.createElement("div");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "10px";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.onclick = () => li.remove();

  rightDiv.appendChild(editBtn);
  rightDiv.appendChild(deleteBtn);

  // Final layout
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
