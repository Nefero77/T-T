# T-T
Yes 
# T-T
# Partner Registration Automation
```
This project contains a Selenium WebDriverJS script that automates the partner registration process.  
The script fills forms, selects checkboxes, chooses dropdown options, uploads files, and allows the user to read and enter the OTP manually during registration.

---

## Prerequisites

- Node.js installed
- Firefox browser installed
- Selenium WebDriver for JavaScript

Install dependencies:

```bash
npm init -y
npm install selenium-webdriver
Script Overview

Opens the partner registration page.

Clicks Get Started.

Accepts the Terms & Conditions checkbox.

Fills personal information:

First Name: Vrit

Last Name: Nepal

Email: intern@vritttttt.com.np

Phone: 9847291105

Password: Intern@123

Clicks Next.

User reads the OTP sent to email/phone and enters it manually.

Fills company information:

Company Name: Vrit Intern StartUp

Company Role: Intern

Company Email: intern@vritech.com.np

Company Domain: vrit.com.np

Company Address: Kathmandu, Nepal

Country: Australia

Subscription Duration: 1 year

Students Annually: 1000

Focus Area: Software Development

Success Percent: 90

Accept relevant checkboxes

Clicks Next.

Fills business registration information:

Registration Number: 607258574

Country: Australia

Accept required checkboxes

Uploads company image: C:/Users/A CE R/Pictures/Saved Pictures/vrit.png

Clicks Submit.

Browser closes automatically after submission.

Test Data Used
Field	Test Data
First Name	Vrit
Last Name	Nepal
Email	intern@vritttttt.com.np

Phone	9847291105
Password	Intern@123
Company Name	Vrit Intern StartUp
Company Role	Intern
Company Email	intern@vritech.com.np

Company Domain	vrit.com.np
Company Address	Kathmandu, Nepal
Country	Australia
Subscription Duration	1 year
Students Annually	1000
Focus Area	Software Development
Success Percent	90
Business Registration Number	607258574
Upload Image	C:/Users/A CE R/Pictures/Saved Pictures/vrit.png
How to Run

Save the script as partnerRegistration.js.

Open a terminal in the project directory.

Run the script:

node partnerRegistration.js


Firefox browser will open and perform the automated registration.

When prompted for OTP, read it and enter it manually on the registration page.

After submission, the browser closes automatically.

