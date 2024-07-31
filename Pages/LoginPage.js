class Loginpage{

    get Usernamefield() {
        return $('//android.widget.EditText[@text="Username"]')
    }
  
    get passwordfield(){
        return $('//android.widget.EditText[@text="Password"]')
    }

    get loginbtn (){
        return $('//android.widget.TextView[@text="LOGIN"]')
    }
  
    async enterusername(){
    await this.Usernamefield.setValue('standard_user');
    }
    async enterpassword(){
    await this.passwordfield.setValue('sauce_user');
    }

  
    async clickloginbtn(){
    await this.loginbtn.click();
     }
  }
  
  module.exports = new Loginpage()