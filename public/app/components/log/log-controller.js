import LogService from "./log-service.js";

let _ls = new LogService()
let _auth = {}

export default class LogController {
  constructor(auth) {
    _auth = auth

  }
  showUser() {
    console.log(_auth.user)
  }
  createLog() {
    if (!_auth.user._id) {
      return alert('Login to Create')
    }
  }
}