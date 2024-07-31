const Verifyloginpagetest = require("../../Pages/LoginPage.js")

describe('Login Page Test Cases', () => {

    it('Login Page', async() => {
     Verifyloginpagetest.enterusername()
     Verifyloginpagetest.enterpassword()
     Verifyloginpagetest.clickloginbtn()
     
    })
})

