export class AuthService{
  isLoggedIn = false;

  login(){
    console.log('Loggedin')
    this.isLoggedIn = true;
  }

  logout(){
    console.log('Loggedout')
    this.isLoggedIn = false;
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

}
