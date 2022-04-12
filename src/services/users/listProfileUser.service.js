import users from "../../database";

const userProfileService = (user) => {
  const { name, email, isAdm, createdOn, updatedOn, uuid } = user;

  const newUser = { name, email, isAdm, createdOn, updatedOn, uuid };

  return newUser;
};

export default userProfileService;
