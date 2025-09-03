import DbService from "../Config/DbService.js";
import bcrypt from "bcryptjs";

const db = DbService.getDbServiceInsatnce();

export const getAllUsers = async (req, res) => {
  let result = await db.getAllUsers();
  res.status(200).json({ users: result });
};

export const getUserProfile = async (req, res) => {
  let result = await db.getUser(req.params.id);
  if (!result) {
    return res.status(400).json({ message: "User Not Found" });
  }
  let { password, ...userInfo } = result;
  res.status(200).json({ user: userInfo });
};

export const updateUserProfile = async (req, res) => {
  let result = await db.updateUser(req.params.id, req.body);
  if (result.affectedRows) {
    return res.status(200).json({ message: "Profile Updated" });
  }
  res.status(400).json({ message: "Not Updated" });
};

export const changePassword = async (req, res) => {
  let user = await db.getUser(req.params.id);
  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }

  let isOldPasswordMatched = bcrypt.compareSync(
    req.body.oldPassword,
    user.password
  );
  if (!isOldPasswordMatched) {
    return res.status(400).json({ message: "Incorrect Old Password" });
  }

  let salt = bcrypt.genSaltSync(10);
  let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);

  let result = await db.changeUserPassword(req.params.id, hashedPassword);
  if (result.affectedRows) {
    return res.status(200).json({ message: "Password Changed" });
  }
  res.status(400).json({ message: "Password Not Changed" });
};
