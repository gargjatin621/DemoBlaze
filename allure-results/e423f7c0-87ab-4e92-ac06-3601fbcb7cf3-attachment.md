# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Test_class\DemoAddtocart.spec.js >> Add Product To Cart
- Location: tests\POM\Test_class\DemoAddtocart.spec.js:6:5

# Error details

```
Error: expect(page).toBeVisible() failed

Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome jatingarg740@gmail.com" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Samsung galaxy s6 360 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Samsung galaxy s6" [ref=e37]
            - cell "360" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e41]:
      - heading "Total" [level=2] [ref=e42]
      - heading "360" [level=3] [ref=e45]
      - button "Place Order" [ref=e46]
  - generic [ref=e48]:
    - generic [ref=e51]:
      - heading "About Us" [level=4] [ref=e52]
      - paragraph [ref=e53]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e56]:
      - heading "Get in Touch" [level=4] [ref=e57]
      - paragraph [ref=e58]: "Address: 2390 El Camino Real"
      - paragraph [ref=e59]: "Phone: +440 123456"
      - paragraph [ref=e60]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e64]:
      - img [ref=e65]
      - text: PRODUCT STORE
  - contentinfo [ref=e66]:
    - paragraph [ref=e67]: Copyright © Product Store
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | export default class Addtocart{
  3  |     constructor(page){
  4  |         this.page = page;
  5  | 
  6  |         this.product = "//a[text()='Samsung galaxy s6']";
  7  |         this.addtocartbutton = '//*[@onclick="addToCart(1)"]';
  8  |         this.cart = '#cartur';
  9  |         this.cartproduct = "//td[text()='Samsung galaxy s6']";
  10 | 
  11 |     }
  12 | 
  13 |     async selectProduct(){
  14 |         await this.page.click(this.product);
  15 |     }
  16 |     
  17 |     async clickAddToCart() {
  18 | 
  19 |         this.page.on('dialog', async dialog => {
  20 |             console.log(dialog.message('Product added.'));
  21 |             await dialog.accept();
  22 |         });
  23 |         await this.page.click(this.addtocartbutton);
  24 |     }
  25 | 
  26 |     async opencart(){
  27 |         await this.page.click(this.cart);
  28 |     }
  29 | 
  30 |     async verifyProductAddedToCart() {
> 31 |     await expect(this.page.locator(this.cartProduct)).toBeVisible();
     |                                                       ^ Error: expect(page).toBeVisible() failed
  32 |     }
  33 | }
```