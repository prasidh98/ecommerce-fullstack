import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js";

import { createUser, findUserByEmail } from "../repositories/userRepository.js"

export const registerUser = async (data) => {

  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("Email already registered");
  }
  const hash = await bcrypt.hash(data.password, 10)

  return createUser({
    ...data,
    password: hash
  })

}

export const loginUser = async (email, password) => {

  const user = await findUserByEmail(email)

  if (!user) throw new Error("User not found")

  const match = await bcrypt.compare(password, user.password)

  if (!match) throw new Error("Invalid password")

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

  return { user, token }

}