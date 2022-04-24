import userModel from "../models/user.model";

export const registry = (req, res) => {
  console.log(req.body);
  return res.send('login-register');
}

export const createAdmin = (req, res) => {
  userModel.create({
    username: 'admin',
    local: {
      email: 'admin@gmail.com',
      password: '123456',
      isActive: true,
    }
  });
  return res.send('create-admin');
}

export const logoutRegistry = (req, res) => {
  return res.send('logout');
}
