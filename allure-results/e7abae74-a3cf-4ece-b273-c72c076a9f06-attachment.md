# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Test_class\DemoAddtocart.spec.js >> Add Product To Cart
- Location: tests\POM\Test_class\DemoAddtocart.spec.js:6:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#nameofuser')
Expected substring: "Welcome"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    5 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value ""
    - waiting for" https://demoblaze.com/" navigation to finish...
    - navigated to "https://demoblaze.com/"
    - locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
    - unexpected value ""

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | export default class Login {
  3  |     constructor(page) {
  4  |         this.page = page;
  5  | 
  6  |         this.LoginLink = '#login2';
  7  |         this.email = '#loginusername';
  8  |         this.password = '#loginpassword';
  9  |         this.loginbtn = '//*[@onclick="logIn()"]';
  10 |         this.welcomeuser = '#nameofuser';
  11 |     }
  12 | 
  13 |     async navigation(){
  14 |         await this.page.goto("https://demoblaze.com/");
  15 |     }
  16 | 
  17 |     async LoginUser(email,password) {
  18 |         await this.page.click(this.LoginLink)
  19 |         await this.page.fill(this.email,email);
  20 |         await this.page.fill(this.password,password);
  21 |         await this.page.click(this.loginbtn);
  22 |     }
  23 | 
  24 |     async verifySuccessfulLogin() {
> 25 |         await expect(this.page.locator(this.welcomeuser)).toContainText('Welcome');
     |                                                           ^ Error: expect(locator).toContainText(expected) failed
  26 |     }
  27 | }
```