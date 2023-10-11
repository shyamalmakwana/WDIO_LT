const HAVE_AN_ACCOUNT_BTN = '~Button-I-HAVE-AN-ACCOU'

describe('Test spec', async () => {
  before('Before we begin', async () => {
    // Here we can, for example, create a new user
    // For now we simply verify an element exists
    await expect($(HAVE_AN_ACCOUNT_BTN)).toExist()
    await driver.reset()
  })
  
    // beforeEach('Before each test', async () => {
    //     await browser.reloadSession()
    // // First we reload the session to make sure each test case is recorded separately
    // // Here we also log in to the app
    // }),  
  afterEach('After each test', async () => {
    await browser.reloadSession()
  })


  it('test1', async () => {
    await $(HAVE_AN_ACCOUNT_BTN).click()
  })

  it('test2', async () => {
    await $(HAVE_AN_ACCOUNT_BTN).click()
  })

  it('test3', async () => {
    // await $(HAVE_AN_ACCOUNT_BTN).click()
  })
})
