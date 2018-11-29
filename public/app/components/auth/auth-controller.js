let _authService = {}

function drawUserLogin() {
  console.log('Not Logged In')
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.login(event)">
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
    <button type="submit" onsubmit="app.controllers.authController.login(event)">Login</button>
  </form>
  <p onclick="app.controllers.authController.showRegister()">Click to Register</p>
  `
}

function drawLogout() {
  console.log('Logged In')
  document.getElementById('auth').innerHTML = `
  <button onclick="app.controllers.authController.logout()">Logout</button>
  `
}

function _drawRegister() {
  document.getElementById('auth').innerHTML = `
   <form onsubmit="app.controllers.authController.register(event)">
    <input type="email" name="email" placeholder="email" required>
    <input type="password" name="password" placeholder="password" required>
    <button type="submit">Register</button>
  </form>
  <p onclick="app.controllers.authController.showLogin()">Existing User?</p>
  `
}

export default class AuthController {
  constructor(auth) {

    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
  }

  drawShipId() {

  }

  login(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }

  register(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.register(creds, drawLogout)
  }

  logout() {
    _authService.logout(drawUserLogin)
  }

  showRegister() {
    _drawRegister()
  }

  showLogin() {
    drawUserLogin()
  }

}