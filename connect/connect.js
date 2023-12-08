const { Builder, By, Key, until } = require('selenium-webdriver');

async function example(username, password) {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://login.scl.ifsp.edu.br');

    let usernameInput = await driver.findElement(By.id('sg_username_input'));
    await usernameInput.sendKeys(username);

    let passwordInput = await driver.findElement(By.id('sg_password_input'));
    await passwordInput.sendKeys(password);

    let loginButton = await driver.findElement(By.id('sg_login_button'));
    await loginButton.click();

  } finally {
    await driver.quit();
  }
}

example('user', 'password');
