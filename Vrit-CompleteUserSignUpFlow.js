const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
    let driver = new Builder().forBrowser(Browser.FIREFOX).build();

    await driver.manage().window().maximize();
    await driver.get("https://authorized-partner.vercel.app/");

    let GetStartedButton = await driver.findElement(
        By.xpath("/html/body/div[3]/header/div[1]/div/a[2]/button")
    );
    await driver.sleep(3000);
    await GetStartedButton.click();
    await driver.sleep(5000);
        let TermsCheckbox = await driver.findElement(
        By.xpath("//button[@role='checkbox' and @aria-checked='false']")
    );
    await TermsCheckbox.click();
    await driver.findElement(
        By.xpath("/html/body/div[3]/div[4]/div[3]/a/button")
    ).click();
    await driver.sleep(3000);
    let FirstNameInput = await driver.findElement(By.xpath("//*[@id=\"«r0»-form-item\"]"));
    await FirstNameInput.sendKeys("Vrit");
    let LastNameInput = await driver.findElement(By.xpath("//*[@id=\"«r1»-form-item\"]"));
    await LastNameInput.sendKeys("Nepal");
    let EmailInput = await driver.findElement(By.xpath("//*[@id=\"«r2»-form-item\"]"));
    await EmailInput.sendKeys("intern@vritttttt.com.np")
    let PhoneInput = await driver.findElement(By.xpath("//*[@id=\"«r4»-form-item\"]"));
    await PhoneInput.sendKeys("9847291105");
    let PasswordInput = await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[3]/div[1]/div[1]/input"));
    await PasswordInput.sendKeys("Intern@123");
    let ConfirmPasswordInput = await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[3]/div[2]/div[1]/input"));
    await ConfirmPasswordInput.sendKeys("Intern@123");
    await driver.sleep(3000);
    let FirstNextButton = await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[4]/button"));
    await FirstNextButton.click();
    await driver.sleep(3000);
    await driver.sleep(20000);
    let CompanyNameInput = await driver.findElement(By.xpath("//*[@id=\"«rg3»-form-item\"]"));
    await CompanyNameInput.sendKeys("Vrit Intern StartUp");
    let CompanyRoleInput = await driver.findElement(By.xpath("//*[@id=\"«rg4»-form-item\"]"));
    await CompanyRoleInput.sendKeys("Intern");
    let CompanyEmailInput = await driver.findElement(By.xpath("//*[@id=\"«rg5»-form-item\"]"));
    await CompanyEmailInput.sendKeys("intern@vritech.com.np");
    let CompanyDomainInput = await driver.findElement(By.xpath("//*[@id=\"«rg6»-form-item\"]"));
    await CompanyDomainInput.sendKeys("vrit.com.np");
    let CompanyAddressInput = await driver.findElement(By.xpath("//*[@id=\"«rg7»-form-item\"]"));
    await CompanyAddressInput.sendKeys("Kathmandu, Nepal");
    await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[3]/div[2]/button/div/span")).click();
    await driver.findElement(By.xpath("//li[text()='Australia']")).click();
    await driver.sleep(5000);
    let dropdown = await driver.findElement(By.xpath('//*[@id="«r85»-form-item"]'));
    await dropdown.click();
    let option = await driver.findElement(By.xpath('//*[@id="«r85»-form-item"]/option[text()="1 year"]'));
    await option.click();
    let studentAnuallyInput = await driver.findElement(By.xpath('//*[@id="«r87»-form-item"]'));
    await studentAnuallyInput.sendKeys("1000");
    let focusAreaInput = await driver.findElement(By.xpath('//*[@id="«r88»-form-item"]'));
    await focusAreaInput.sendKeys("Software Development");
    let successPercent = await driver.findElement(By.xpath('//*[@id="«r89»-form-item"]'));
    await successPercent.sendKeys("90");
    let whatevercheckbox = await driver.findElement(By.xpath('//button[@role="checkbox" and (@aria-checked="false" or @data-state="unchecked")]'));
    await whatevercheckbox.click();
    let secondNextButton = await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[4]/button[2]"));
    await secondNextButton.click();
    await driver.sleep(5000);
    let BusinessRegistrationNumber = await driver.findElement(By.xpath('//*[@id="«ra1»-form-item"]'));
    await BusinessRegistrationNumber.sendKeys("607258574");
    await driver.findElement(By.xpath('//*[@id="«ra2»-form-item"]')).click();
    await driver.findElement(By.xpath("//li[text()='Australia']")).click();
    let whateversecondcheckbox = await driver.findElement(By.xpath('//button[@role="checkbox" and (@aria-checked="false" or @data-state="unchecked")]'));
    await whatevercheckbox.click();
    await whateversecondcheckbox.click();
    let UploadImage = await driver.findElement(By.xpath('/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[3]/div[2]/div/div/div[1]/span'));
    await UploadImage.sendKeys("C:/Users/A CE R/Pictures/Saved Pictures/vrit.png");
    let submitButton = await driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div/div/div[2]/form/div[4]/button[2]"));
    await submitButton.click();
    await driver.sleep(15000);
    await driver.quit();
})();
