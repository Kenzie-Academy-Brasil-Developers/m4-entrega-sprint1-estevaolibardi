import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import users from "../../database";

const authService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Email ou senha invalidos");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha inválidos");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    "secret",
    {
      expiresIn: "24h",
      subject: user.uuid,
    }
  );

  return { token };
};

export default authService;