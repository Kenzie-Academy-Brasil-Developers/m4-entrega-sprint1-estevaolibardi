import jwt from "jsonwebtoken";
import users from "../database";

const checkTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ status: "error", message: "Missing Authorization Headers" });
  }

  jwt.verify(token, "secret", (error, decoded) => {
    if (error) {
      return response
        .status(401)
        .json({ status: "error", message: "Invalid Token" });
    }

    const { sub, isAdm, email } = decoded;

    const user = users.find((user) => user.email === email);
    request.user = user;

    next();
  });
};

export default checkTokenMiddleware;
