const loginRegistry = (req, res) => {
  return res.send('login-register');
}

const logoutRegistry = (req, res) => {
  return res.send('logout');
}

export default {
  loginRegistry,
  logoutRegistry
}
