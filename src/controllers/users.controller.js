import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import findUserService from "../services/users/findUser.service";
import listUsersService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import userProfileService from "../services/users/listProfileUser.service";

export default class UsersController {
  /* Criar */
  async store(request, response) {
    const { name, email, password, isAdm } = request.body;

    const user = await createUserService({
      name,
      email,
      password,
      isAdm,
    });

    return response.status(201).json(user);
  }

  /* Listar */
  index(request, response) {
    const users = listUsersService();

    return response.json(users);
  }

  /* Buscar apenas um recurso */
  show(request, response) {
    const { uuid } = request.params;

    try {
      const user = findUserService({ uuid });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  profiler(request, response) {
    const user = request.user;

    const serialize = userProfileService(user);

    return response.json(serialize);
  }

  /* Atualizar */
  update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    try {
      const user = updateUserService(id, email, name);

      return response.json(user);
    } catch (err) {
      return response.status(400).json({
        status: "err",
        message: err.message,
      });
    }
  }

  /* Deletar */
  delete(request, response) {
    const { id } = request.params;

    try {
      deleteUserService(id);
      return response
        .status(200)
        .json({ message: "User deleted with success" });
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }
}
