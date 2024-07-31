class Createcredentialpage{

    get enterpinbox() {
        return $('//android.widget.TextView[@text="Enter your PIN Code"]')
    }
  
    get scanQRcodebutton(){
        return $('//android.widget.TextView[@resource-id="RoundedButton.text"]')
    }
  
    async clickenterbutton(){
      await driver.hideKeyboard();
      await driver.pressKeyCode(10);
      await driver.pressKeyCode(10);
      await driver.pressKeyCode(10);
      await driver.pressKeyCode(10);
      await driver.pressKeyCode(10);
      await driver.pressKeyCode(10);
      await driver.pause(5000);
  
      await this.enterpinbox.click();
      }
  
    async clickscanbtn(){
    await this.scanQRcodebutton.click();
     }
  }
  
  module.exports = new Createcredentialpage()