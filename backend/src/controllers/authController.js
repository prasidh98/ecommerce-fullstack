import { registerUser, loginUser } from "../services/authService.js"

export const register = async (req, res) => {

  const user = await registerUser(req.body)

  res.json(user)

}

export const login = async (req, res) => {

  const { email, password } = req.body

  const result = await loginUser(email, password)

  res.json(result)

}