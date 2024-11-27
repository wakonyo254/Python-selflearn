const form = document.getElementById("todo-form");
form.addEventListener("submit", () => addTodo);
async function addTodo(event) {
  event.preventDefault();
  const formData = new FormData(form);
  let data = Object.fromEntries(formData);
  console.log(data);
 // let res = await api(data);
  // console.log(res);
}

async function api(data) {
  const baseUrl = "http://localhost:3000/todos";
  //   const initObject = {}
  let result = await fetch(baseUrl, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return result;
}
