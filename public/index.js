const postUser = async (e) => {
  e.preventDefault()
  const userName = document.querySelector('#userName').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  await axios.post('/users', {
      userName,
      email,
      password
    })
    .then((value) => {
      return window.location.href = '/';
    }, (reason) => {
      console.log(reason);
    })

}

const deleteUser = async (id) => {
  await axios.delete(`/users/${id}`)
    .then((value) => {
      console.log('ok');
    }, (reason) => {
      console.log(reason);
    })
  return window.location.href = '/';
}

const crearUser = async () => {
  window.location.href = '/user-create';
}