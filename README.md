# React E-commerce Shop
![homepage screenshot](src/assets/homepage-screenshot.png)


## :mag: Checkout Live Project
To view the live version, check out this link: https://react-ecommerce-shop-live.herokuapp.com/

## :rocket: Installation
You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.  
After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!
#### After you fork and clone:
1. Install dependencies  
   In your terminal after you clone this project down, you can either run `yarn` or `npm install` to buid all the dependencies in the project.
2. Replace the `config` variable with your own firebase snippet or you can use the local data.json to import data.
3. Set the `publishableKey` variable in the `stripe-button.component.jsx` with your own publishable key from the stripe dashboard. This allows you to simulate the payment checkout process.
   
<br />

## What this project uses:
- :fire: React with React hooks
- :fire: Redux, Redux-saga
- :globe_with_meridians: React Router
- :key: Session storage + Persistence, allows user to save uncheckout item in their shopping cart, remember user's login status even after brower closed. 
- :moneybag: Stripe for payment process experience
- :rotating_light: Jest and React Testing Library for unit tests
- :books: Firebase for nosql dabase and auth
- :books: React-doc-gen for auto documentation generation
- :rose: Styles (Sass) and styled-component.
