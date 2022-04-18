import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

/* O service e apenas responsavel pela logica */
const createUserService = async ({ name, email, password, isAdm = false }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  users.push(user);

  return {
    id: user.id,
    name,
    email,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
  };
};

export default createUserService;
