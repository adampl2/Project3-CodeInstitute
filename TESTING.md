# NoteWave - Testing

![multi screen img]()

[View deployed site here]()

- - -

## CONTENTS

* [`Automated Testing`](#automated-testing)
  * [`W3C Validator`](#w3c-validator)
  * [`JavaScript Validator`](#javascript-validator)
  * [`Lighthouse`](#lighthouse)
* [`Manual Testing`](#manual-testing)
  * [`User Stories`](#user-stories)
  * [`Full Testing`](#full-testing)

Testing progressed at every stage of this project. This ensured that most issues were fixed before the website was finished. Chrome DevTools were utilised when building the website to help with troubleshooting as the website transformed.

## Automated Testing

### W3C Validator

The [W3C validator](https://validator.w3.org/) was used to validate the HTML and CSS pages.

* HTML Validation

  * ![base.html](docs/)

  * ![edit_note.html](docs/)

  * ![home.html](docs/)

  * ![login.html](docs/)

  * ![sign_up.html](docs/)

  * ![404.html](docs/)

* CSS Validation

![CSS](docs/)

- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate all JavaScript code on this page.

* script.js Validation

  * [`script.js`]() - No errors,

- - -

### Lighthouse

### Desktop

![Desktop](docs/)

### Mobile

![Mobile](docs/)

- - -

## Manual Testing

### User Stories

`Client Goals`

| Goals | How are they achieved? |
| :--- | :--- |
| First-time user: As a first time user, I want to easily create a new account on the note app, so I can start creating, viewing, editing, and deleting notes. I also want to be able to quickly and intuitively navigate through the note app, so I can easily find the features I need to use and efficiently manage my notes. | I have created... | I want the site to be responsive to my device. | I have developed the site with responsiveness in mind. |
| Frequent user: As a frequent user, I want to be able to easily access my notes from my previous sessions so that I can quickly pick up where I left off and continue my work. I also want to be able to edit, delete, and create new notes when I wish to do so. | I have created... |

- - -

### Full Testing

I have fully tested the website using Google Chrome and Mozilla Firefox on desktop (HP Pavilion Convertible 14 inch) and mobile (Samsung Note9).

It was ensured that through the testing process content was responsive using the Google Developer Tools.

Further testing was performed by friends & family. No issues reported.

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Logo | Link should refresh the page | Logo clicked | Home page reloads | Pass |
| *Buy Crypto!* button | Redirects user to external Binance page | Clicked on button | Binance page opens in a separate window | Pass |
| *Coinmarketcap* button | Redirects user to external Coinmarketcap page | Clicked on button | Coinmarketcap page opens in a separate window | Pass |
| *News* button | Redirects user to external Coindesk page | Clicked on button | Coindesk page opens in a separate window | Pass |
| *Learn about crypto* button | Redirects user to Learn about crypto section on the page | Clicked on button | User redirected to Learn about crypto section | Pass

`Home page - Convert Your Bitcoin`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Enter amount in BTC input | User should see converter amount in EUR | Any amount entered from 0 to 21,000,000 | BTC/EUR conversion | Pass |
| Enter amount in BTC input | User should see "Please enter only numeric values" message | Entered anything other than a Number | "Please enter only numeric values" message appears below in red | Pass |
| Enter amount in BTC input | User should see "The max limit is 21000000" message | Enter a number greater than 21,000,000BTC | "The max limit is 21000000" appears below in red| Pass |

`Home page - Learn About Crypto`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Crypto Tabs | A tab consisting of a description of each crypto & *Read less* button should appear below | Tab clicked | New content appears | Pass |
| *Read more* button | User should see expanded paragraph | Button clicked | Text expands | Pass |
| *Read less* button | Expanded paragraph should collapse back to its original shortened form | Button clicked | Expanded text disappears | Pass |

`Home page - Footer`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| *Data Dash* button | Data Dash Youtube channel should open in a new window | Button clicked | Page opens in a separate window | Pass |
| *Phil Konieczny (PL)* button | Phil's Youtube channel should open in a new window | Button clicked | Page opens in a separate window | Pass |
| *Binance* button | Binance exchange should open in a new window | Button clicked | Page opens in a separate window | Pass |
| *Coindesk* button | Coindesk exchange should open in a new window | Button clicked | Page opens in a separate window | Pass |
| Facebook link | Facebook should open in a new window | Link clicked | Page opens in a separate window | Pass |
| Twitter link | Twitter should open in a new window | Link clicked | Page opens in a separate window | Pass |
| Instagram link | Instagram should open in a new window | Link clicked | Page opens in a separate window | Pass