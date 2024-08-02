# README #

SWAG App Automation

### Basic tools installed

1.Appium globally installed
2.Java


### Updating the capabilities

Before you run the application on a device/simulator you have to update the capability in wdio.conf.js

Step 1: Update the Device Name and version of the Android Device

platformName: 'Android',
        'appium:deviceName': 'RZCW40LET9X',
        'appium:platformVersion': '13.0',


Step 2: Specify the test which you need to run in wdio.conf.js

### To run the application on a device use the command

Open terminal and enter "npx wdio"

Note : I have also implemented the Page object model in Verifyloginpage.js Test class and LoginPage.js Page class.
