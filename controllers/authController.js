import DbService from "../Config/DbService.js";
import bcrypt from "bcryptjs";
import { genrateToken } from "../middlewares/genrateToken.js";
const db = DbService.getDbServiceInsatnce();

export const register = async (req, res) => {
  const { email, name, password, mobile, role } = req.body;
  let user = await db.checkUserExist(email);

  if (user) {
    return res.status(200).json({ message: "Email Already Registered" });
  }

  let salt = bcrypt.genSaltSync(10);
  let hashedPassword = bcrypt.hashSync(password, salt);

  user = await db.createUser(
    email,
    name,
    hashedPassword,
    mobile,
    "false",
    role
  );
  res.status(200).json({
    message: "Account Registered Successfully",
    userId: user.insertId,
  });
};

export const login = async (req, res) => {
  let { email } = req.body;
  let user = await db.checkUserExist(email);
  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  console.log("ExistUser:", user);
  let isPasswordMatched = bcrypt.compareSync(req.body.password, user.password);
  if (!isPasswordMatched) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  if (user.status == "false") {
    return res.status(400).json({ message: "Wait for admin approval" });
  }

  const token = genrateToken(user);

  res.cookie("accessToken", token, {
    httpOnly: true,
  });

  let { password, ...userInfo } = user;

  res.status(200).json({ message: "Logged In Sucessfully", user: userInfo });
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({
      message: "user logged out",
    });
};
