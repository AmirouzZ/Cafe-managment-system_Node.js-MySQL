import DbService from "../Config/DbService.js";
const db = DbService.getDbServiceInsatnce();

export const updateUserStatus = async (req, res) => {
  let result = await db.updateUserStatus(req.params.id, req.body);
  if (result.affectedRows) {
    return res.status(200).json({ message: "User Status Updated" });
  }
  res.status(400).json({ message: "User Status Not Updated" });
};
