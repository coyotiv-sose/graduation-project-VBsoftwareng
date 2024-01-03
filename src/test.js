console.log('Hellow World')
const list = []

function addInfoToList(user, email) {
  // add user and email to the list
  list.push({ user, email })
}
addInfoToList('Veronica', 'email@gmail.com')
console.log(list)

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`
    } else {
      return 'Missing a first name or a last name.'
    }
  },
}
