# MERN AMAZONA

![amazona](/frontend/public/images/amazona.jpg)

# React E-Commerce site

Welcome to my React e-commerce website exactly like amazon.

## Demo Website

- 👉 Heroku : [https://amazona--mern-app.herokuapp.com/](https://amazona--mern-app.herokuapp.com/)

## I Used

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Context API: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku
- Watch React & Node Tutorial

## Run Locally

### 1. Clone repo

```
$ https://github.com/ajeetsing/Build-Ecommerce-Website-Like-Amazon.git
$ cd Build-Ecommerce-Website-Like-Amazon

```

### 3. Run Backend

```
$ in root directory
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 4. Run both

```
# open new terminal
$ in root directory
$ npm run dev
it will start both backend and frontend

```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

## Support

- Contact Instructor: [Ajeet](mailto:ajeetsinghthakur930@gmail.com)

# Section

1. List Products

   1. create products array
   2. add product images
   3. render products
   4. style products

2. Add page routing

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

3. Create Node.JS Server

   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

4. Fetch Products From Backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

5. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from usReducer

6. Add bootstrap UI Framework

   1. npm install react-bootstrap bootstrap
   2. update App.js

7. Create Product and Rating Component

   1. create Rating component
   2. Create Product component
   3. Use Rating component in Product component

8. Create Product Details Screen

   1. fetch product from backend
   2. create 3 columns for image, info and action

9. Create Loading and Message Component

   1. create loading component
   2. use spinner component
   3. craete message component
   4. create utils.js to define getError fuction

10. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
11. Complete Add To Cart

    1. check exist item in the cart
    2. check count in stock in backend

12. Create Cart Screen

    1. create 2 columns
    2. display items list
    3. create action column

13. Complete Cart Screen

    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout

14. Create Signin Screen

    1. create sign in form
    2. add email and password
    3. add signin button

15. Connect To MongoDB Database

    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database

15(1). Seed Sample Products

1.  create Product model
2.  create seed route
3.  use route in server.js
4.  seed sample product

15(2). Seed Sample Users

1. create user model
2. seed sample users

16(1). Create Signin Backend API

1.  create signin api
2.  npm install jsonwebtoken
3.  define generateToken

16(2). Complete Signin Screen

1. handle submit action
2. save token in store and local storage
3. show user name in header

17 . Create Shipping Screen

1.  create form inputs
2.  handle save shipping address
3.  add checkout wizard bar

17(1). Create Sign Up Screen

1.  create input forms
2.  handle submit
3.  create backend api

17(2). Implement Select Payment Method Screen

1.  create input forms
2.  handle submit

17(3). Create Place Order Screen

1.  show cart items, payment and address
2.  calculate order summary

17(4). Implement Place Order Action

1.  handle place order action
2.  create order create api

17(4). Create Order Screen

    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns

18. Pay Order By PayPal

    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend

19. Display Order History

    1. create order screen
    2. create order history api
    3. use api in the frontend

20. Create Profile Screen

    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info

21. Publish To Heroku

    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables
    7. Commit and push

22. Add Sidebar and Search Box

    1. add sidebar
    2. add search box

23. Create Search Screen

    1. show filters
    2. create api for searching products
    3. display results

24. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header

24(1). Create Dashboard Screen

1.  create dashboard ui
2.  implement backend api
3.  connect ui to backend

24(2). manage product with product list screen in tableand pagination

1.  create products list ui
2.  implement backend api
3.  fetch data

24(3). Create Product

1.  create products button
2.  implement backend api
3.  handle on click

24(4). Create Edit Product screen

1.  create edit button
2.  create edit product ui
3.  dispaly product info in the input boxes

24(5). Implement Update Product

1.  create edit product backend api
2.  handle update click

24(6). Upload Product Image

1. create cloudinary account
2. use the api key in env file
3. handle upload file
4. implement backend api to upload

24(7). Delete Product

1. show delete button
2. implement backend api
3. handle on click

24(8). List Orders

1. create order list screen
2. implement backen api
3. fetch and display orders

24(9). Deliver Order

1. add deliver button
2. handle click action
3. implement backen api for deliver

24(10). Delete Order

1. add delete button
2. handle click action
3. implement backen api for delete

24(11). List Users

1. create user list screen
2. implement backen api
3. fetch and display users

24(12). Edit User

1. create edit button
2. create edit product ui
3. dispaly product info in the input boxes
4. implement backend api
5. handle edit click

24(13). Delete User

1.  add delete button
2.  handle click action
3.  implement backen api for delete

#25. Choose Address On Google Map

1.  create google map credentials
2.  update .env file with Google Api Key
3.  create api to send google api to frontend
4.  create map screen
5.  fetch google api
6.  getUserLocation
7.  install @react-google-maps/api
8.  use it in shipping screen
9.  apply map to the checkout screen

25(1). Email order receipt by mailgun

1. create mailgun account
2. add and verify your domain to mailgun
3. install mailgun-js
4. set api key in env file
5. change pay order in orderRouter
6. send email order receipt

25(2). Review Orders

1. create submit review form
2. handle submit
3. implement backend api for review

25(3). Upload multiple Images

1. add images to product model
2. get images in edit screen
3. show images in product screen
