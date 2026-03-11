import { registerUser, loginUser } from "../services/authService.js"


export const register = async (req, res) => {
  try {

    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const login = async (req, res) => {

  const { email, password } = req.body
  const result = await loginUser(email, password)
  res.json(result)

}