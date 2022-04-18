import users from "../../database";

const userProfileService = (user) => {
  const { name, email, isAdm, createdOn, updatedOn, id } = user;

  const newUser = { name, email, isAdm, createdOn, updatedOn, id };

  return newUser;
};

export default userProfileService;
