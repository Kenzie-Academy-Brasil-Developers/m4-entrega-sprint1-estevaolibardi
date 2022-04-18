import users from "../database";

const checkAdmMiddleware = (request, response, next) => {
  const userAdm = request.user.isAdm;
  const userId = request.user.id;
  const userIdReq = request.params.id;

  // console.log(request.params);
  // console.log(request.user);

  const user = users.find((user) => user.isAdm === userAdm);

  if (userId !== userIdReq && !user.isAdm) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  next();

  if (!user.isAdm) {
    return response
      .status(401)
      .json({ status: "error", message: "Unauthorizeddd" });
  }

  next();
};

export default checkAdmMiddleware;
