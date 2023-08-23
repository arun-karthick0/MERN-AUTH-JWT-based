import User from "../models/usermodel.js";
import { hashPassword, comparePassword } from "../helpers/Helper.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    // check password length
    if (password.length < 6) {
      return res.json({ error: "password should contain more than 6 words" });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email already taken please use another email",
      });
    }

    const hash = await hashPassword(password);

    // user create
    const newUser = await User.create({
      email,
      password: hash,
      firstname,
      lastname,
    });
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

// login user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check user
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      res.json({ error: "no user found" });
    }

    // compare password
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
        },
        process.env.JWT_SECRET_TOKEN,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          return res.cookie("token", token).json(user);
        }
      );
    }

    if (!match) {
      return res.json({ error: "password mismatch" });
    }
  } catch (error) {
    console.log(error);
  }
};

// get profile

export const profile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};
