let submit = document.getElementById('submit')

submit.onclick = function() {
  getTodos()
}

async function getTodos() {
  const resp = await fetch('/todos', { method: 'GET' })
  const todos = await resp.json()
  console.log(todos)
  return todos
}

async function addNewTodoUrlEncoded(task, done, due , notes , description , priority) {
  const resp = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `task=${task}&done=${done}&due=${due}&notes=${notes}&status=${status}&description=${description}&priority=${priority}`
  })
}

async function addNewTodoJson(task, done , due , notes , description , priority) {
  const resp = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task, done, due ,notes,description,priority})
  })
}
