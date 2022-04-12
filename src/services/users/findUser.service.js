import users from "../../database";

/* Utilizando services, é possivel utilizar classes tbm, seguindo o SRP, 
deve apenas ter o método execute() */

const findUsersService = ({ id }) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
};

export default findUsersService;
