describe('Verifying LoginScreen Tests', () => {
    it('Find element by Xpath', async () => {

      const usernameField = await driver.$('//android.widget.EditText[@text="Username"]');
      usernameField.click();
      await usernameField.setValue('standard_user');
      console.log('UserName is Entered')
  
      const passwordField = await driver.$('//android.widget.EditText[@text="Password"]');
      passwordField.click();
      await passwordField.setValue('secret_sauce');
      console.log('Password is Entered')

      const loginbtn = await driver.$('//android.widget.TextView[@text="LOGIN"]');
      loginbtn.click();
      console.log('Loginbutton is clicked')
      //const errormsg = await driver.$('//android.view.ViewGroup[@content-desc="test-Error message"]');
      //console.log(errormsg)
  
      const verify_DashBoardPage = await $('//android.widget.TextView[@text="PRODUCTS"]');
      await expect(verify_DashBoardPage).toHaveText('PRODUCTS');
      console.log('DashboardPage is found')
  
      
    });
  });