import DbService from "../Config/DbService.js";
const db = DbService.getDbServiceInsatnce();

export const createCategory = async (req, res) => {
  let result = await db.createCategory(req.body.name);
  console.log("result:", result);
  if (result.insertId) {
    return res.status(200).json({ message: "Category Created" });
  }
  res.status(200).json({ message: "Category Not Created" });
};
