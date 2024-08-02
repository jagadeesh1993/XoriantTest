class Loginpage{

    get usernamefield() {
        return $('//android.widget.EditText[@text="Username"]')
    }
  llll
    get passwordfield(){
        return $('//android.widget.EditText[@text="Password"]')
    }

    get loginbtn (){
        return $('//android.widget.TextView[@text="LOGIN"]')
    }
  
    async login(username, password){
    await this.Usernamefield.click();
    await this.Usernamefield.setValue(username);
    await this.passwordfield.click();
    await this.passwordfield.setValue(password);
    await this.loginbtn.click();
    }
   
  }
  
  module.exports = new Loginpage()