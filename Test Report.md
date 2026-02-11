The OTP part ruined the Test execution maybe the otp was in Api request body in inspect but sorry i dont have enough time to do that or find a work around it so sorry 
Test Report: Partner Registration Automation

Project: Partner Registration Automation using Selenium WebDriverJS
Tested By: [Your Name]
Date: [Insert Date]
Environment:

Browser: Firefox

Node.js Version: [Insert Version]

Selenium WebDriverJS

1. Objective

The objective of this test was to automate the partner registration process on the registration page, including filling personal and company information, selecting checkboxes, choosing dropdown options, uploading files, and submitting the registration successfully.

2. Scope

The automation covers:

Navigating to the registration page and starting the registration flow

Accepting Terms & Conditions

Filling personal details (name, email, phone, password)

Filling company details (name, role, email, domain, address, subscription, focus area)

Selecting checkboxes dynamically

Uploading company image

Submitting the final registration form

Excluded:

Fully automating OTP entry due to limitations explained below

3. Test Data Used
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
4. Test Execution

Get Started Button: Clicked successfully.

Terms & Conditions Checkbox: Located dynamically using role and state attributes and clicked successfully.

Personal Information Form: Filled with provided test data without issues.

First Next Button: Clicked to proceed to OTP verification.

OTP Entry:

Manual entry required.

Fully automating this step would require retrieving OTP from email/SMS programmatically, which may involve API calls or additional tools.

Due to time constraints on the final day, no workaround was implemented.

Company Information Form: All fields filled, checkboxes and dropdowns selected correctly.

Business Registration Form: Fields filled, checkboxes selected, file uploaded successfully.

Submit: Registration submitted successfully after manual OTP entry.

5. Issues / Observations

OTP Automation Challenge:

The most difficult part of testing was handling the OTP.

Fully automating OTP retrieval would require additional tools or reading the OTP from the API response in the browser.

Due to limited time, OTP entry was left manual, and this was documented in the prerequisites of the script.

Other Automation Steps:

Filling forms, selecting checkboxes, clicking buttons, dropdowns, and uploading files worked as expected without issues.

6. Conclusion

Automation Success: Most of the registration workflow was successfully automated.

Manual Step Required: OTP entry is currently manual due to technical and time constraints.

Difficulty Level: High, primarily due to dynamic elements and OTP handling.

Overall, the test demonstrates that the registration flow can be largely automated, with the exception of OTP, which remains a manual step.

7. Recommendations

For fully automated testing, integrate email/SMS OTP retrieval tools or inspect API requests to fetch OTP dynamically.

Replace absolute XPaths with relative or stable selectors for better maintainability.
