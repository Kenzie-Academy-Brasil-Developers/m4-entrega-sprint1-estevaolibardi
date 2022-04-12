import authService from "../services/logins/auth.service";

export default class LoginController {
  async store(request, response) {
    const { email, password } = request.body;

    try {
      const login = await authService({ email, password });

      return response.json(login);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }
}
