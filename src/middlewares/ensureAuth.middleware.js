import jwt from "jsonwebtoken";
import users from "../database";

const ensureAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ status: "error", message: "Missing Authorization Header" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "secret", (error, decoded) => {
    if (error) {
      return response
        .status(401)
        .json({ status: "error", message: "Invalid Token" });
    }

    // console.log(decoded);

    const { email } = decoded;
    const user = users.find((user) => user.email === email);

    request.user = user;

    next();
  });
};

export default ensureAuthMiddleware;
