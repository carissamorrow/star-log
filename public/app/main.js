import AuthController from "./components/auth/auth-controller.js";
import AuthService from "./components/auth/auth-service.js";
import LogController from "./components/log/log-controller.js";


let _auth = new AuthService()

class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(_auth),
      logController: new LogController(_auth)
    }
  }
}


// @ts-ignore
window.app = new App()