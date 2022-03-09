const postUser = async (e) => {
  e.preventDefault()
  const userName = document.querySelector('#userName').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  await axios.post('http://localhost:4000/users', {
      userName,
      email,
      password
    })
    .then((value) => {
      return window.location.href = 'http://localhost:4000/';
    }, (reason) => {
      console.log(reason);
    })

}

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:4000/users/${id}`)
    .then((value) => {
      console.log('ok');
    }, (reason) => {
      console.log(reason);
    })
  return window.location.href = 'http://localhost:4000/';
}

const crearUser = async () => {
  window.location.href = 'http://localhost:4000/user-create';
}