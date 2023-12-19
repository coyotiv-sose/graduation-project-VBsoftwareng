console.log('Hellow World')
const list = []

function addInfoToList(user, email) {
  // add user and email to the list
  list.push({ user, email })
}
addInfoToList('Veronica', 'email@gmail.com')
console.log(list)
