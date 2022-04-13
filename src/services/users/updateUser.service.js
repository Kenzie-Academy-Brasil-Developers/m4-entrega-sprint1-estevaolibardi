import users from "../../database";

const updateUserService = (uuid, email, name) => {
  // let user = users.find((item) => item.uuid === uuid);

  const updatedUser = {
    email,
    name,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((e) => e.uuid === uuid);

  if (userIndex === -1) {
    return "User not found.";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return {
    name,
    email,
    isAdm: users[userIndex].isAdm,
    createdOn: users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn,
    uuid: users[userIndex].uuid,
  };
};

export default updateUserService;
