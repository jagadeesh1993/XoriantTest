describe('Verifying LoginScreen Tests', () => {
    it('Find element by Xpath', async () => {

        await driver.pause(10000);
      const Usernamefield = await driver.$('//android.widget.EditText[@text="Username"]');
      Usernamefield.click();
      await Usernamefield.setValue('standard_user');
  
      const passwordfield = await driver.$('//android.widget.EditText[@text="Password"]');
      passwordfield.click();
      await passwordfield.setValue('secret_sauce');
  
      await driver.pause(3000);
      const loginbtn = await driver.$('//android.widget.TextView[@text="LOGIN"]');
      loginbtn.click();

      //const errormsg = await driver.$('//android.view.ViewGroup[@content-desc="test-Error message"]');
      //console.log(errormsg)
  
      
  
      await driver.pause(5000);
     
      const verify_DashBoardPage = await $('//android.widget.TextView[@text="PRODUCTS"]');
      await expect(verify_DashBoardPage).toHaveText('PRODUCTS');
      console.log('DashboardPage is found')
  
      
    });
  });