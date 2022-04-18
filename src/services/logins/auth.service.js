import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import users from "../../database";

const authService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      email,
    },
    "secret",
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return { token };
};

export default authService;
