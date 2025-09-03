import jwt from "jsonwebtoken";

export const genrateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET_KEY);
};
