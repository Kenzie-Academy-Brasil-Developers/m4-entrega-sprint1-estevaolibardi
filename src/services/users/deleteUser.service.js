import { response } from "express";
import users from "../../database";

const deleteUserService = (id) => {
  let user = users.findIndex((e) => e.id === id);

  if (user === -1) {
    return response.status(401).json("User not found");
  }

  users.splice(user, 1);
};

export default deleteUserService;
