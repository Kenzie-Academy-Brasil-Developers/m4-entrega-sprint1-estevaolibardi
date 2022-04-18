import users from "../../database";

const updateUserService = (id, email, name) => {
  const updatedUser = {
    email,
    name,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((e) => e.id === id);

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
    id: users[userIndex].id,
  };
};

export default updateUserService;
