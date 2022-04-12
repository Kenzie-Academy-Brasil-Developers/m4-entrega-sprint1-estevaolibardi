import users from "../../database";

const deleteUserService = ({ id }) => {
  let user = users.findIndex((repository) => repository.id === id);

  if (user >= 0) {
    users.splice(user, 1);
  } else {
    throw new Error("Repository not found");
  }
};

export default deleteUserService;
