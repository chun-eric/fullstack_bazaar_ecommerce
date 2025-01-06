# Bazaar Ecommerce Website

A Frontend Ecommerce Website.

Day 1

- Project Setup, with Tailwind CSS and React
- Prepare Image Assets and Dimensions
- Prepare Folder Structure
- Prepare Router and Routes with React Router Dom
- Wrapped BrowserRouter in the main.jsx
- Making the Navbar and responsive hover menu for the profile
- Make Navbar, Navbar routes with NavLink and Link
- Make Sidebar menu visiblility on and off.
- Navbar is mobile responsive.
- Hero Banner complete with responsive
- Created a Context shop provider to share values across all components
- Created a Latest Collections Component to render the latest 10 products
- Created a Title Component to Dynamically Render the Title for Each products to display
- Created a Product Item Component to map over for the Latest Collection
- Created Best Seller Component to map over for the Best Seller Collection

Day 2

- Created Subscribe Component
- Created Policy Component
- Created Footer Component

Day 3

- Created Collections Page
- Created Product Filters Feature ( useCallBack)
- Created Product Sort Feature ( useCallBack )
- Created Search Bar in Collections (useContext, useLocation).
- When clicking on Search icon it directs us immediately to Collections page and search bar shows up. (useLocation in react router dom)

Day 4

- Created Search Feature. Display products based on search query. Updated the collections page with the search and showSearch from useContext. Added if conditions in the appliedFilter function and added search and showSearch as dependencies.

Day 5 (Today)

- Created Individual Product Page based on its url. Issues big image not aligning height with small image
- Bugs - related products not keeping it to 5 products
  -- Stretch goals

  1. add breadcrumbs to product categories,
  2. add tabs on the description and Reviews,
  3. dynamically add and read reviews

- Created Add to cart Feature. Adds size and item addToCart function.
- Added React toastify if add to cart button is pressed without any size selected.
- Add the quantity dynamically to the cart icon getCartCount. Had trouble with the counter bug.

  Current solution seems overly complicated. Maybe try and look into zustand after completing first project completion run.
  Also we should have a quantity section

Day 6 (Today)

- Created Cart Page
- Show each product item in cart page
- Delete each product item with updateCartQuantity function in the shopContext provider
- Able to modify quantity amount for each product and dynamically update it in the cart icon using onChange with a handleQuantityChange function
- CartTotal Component that updates the subtotal and total based on the product quantity including adding delivery fee
- Created a getCartAmount function (got rid of async function as it was causing errors)
- Also made sure that when there is no items in the cart the shipping fee should be 0.
- \*\*\* Stretch Goals - save Cart to local storage \*\*\*
- add useNavigate to the shopContext when clicking on the Proceed to check --> /place-order

---

Day 7

- Created Place Order Page. Had trouble with setting the active payments border. The issue was there was no color in tailwind css, so i just added a custom color.
- Added a useNavigate value in the shopContext so all components can have access to it
- Fix Created place order responsiveness

- Created My Order Page. Its still not linked to the login user so we cant track the actual orders put in the cart. Its just dummy data for the UI
- Also need to fix responsiveness

- Created Login Page. Add the navigation link in our drop down menu on the profile icon. Linked it to login page. At Login page made a simple sign up and login form that changes based on state. Change to login form when clicking Login Here or change to sign up form when clicking Sign Up. This also includes changing button to the different state. Added a form submit handler function on the form.

Day 8

- Created About Us Page

Day 9

- Reviewing our Ecommerce store. Its structure and functions

Here are my thoughts so far.
Our App has Navbar and Footer set. It has a searchbar component to show on collections page and Routes to all our different pages.

There are 8 pages in our App (so far)

1. Home
2. Collection
3. About
4. Cart
5. Orders
6. PlaceOrders
7. Product
8. Login

The entire App is wrapped in a ShopContextProvider and then the BrowserRouter. This will allow us to send and receive values across all our components.

The ShopContextProvider needs a prop sinces its children being the App itself can receive all the shared values.

The ShopContextProvider has key functions

1. addToCart
2. getCartCount
3. updateCartQuantity
4. getCartAmount

It also provides access to the:

1. products catalogue (the entire products array)
2. delivery fee (standardized)
3. show search bar
4. search text (setSearch)
5. useNavigate (to navigate to certain pages via react router dom)

Components

1. Cart
2. Collection
3. Contact
4. Home
5. Login
6. Orders
7. PlaceOrder
8. Product

Refactoring the main functions in the shopContext.js

1. getCartCount()
2. updateCartQuantity()
3. getCartAmount()
4. addToCart()

Main reason for refactoring is because there were to many nested if statements.

Day 9

- refactoring

  1. Latest Collections design and code
  2. Change the Bazaar Logo
  3. Update Hero Image
  4. Update copy for the bestsellers and latest collection
  5. Issues with responsivness on the productData container for the images. It wasnt shrinking together.
     \*\*\* the above issue is very buggy- This was very hard for some reason. Ended up adding a custom break point at 900px. The main issue was the big picture image. As you scale up in screen size the as it is object cover it doesnt contain the image in the cneter. So we had to use a custom breakpoint to stop it from growing. Probably there is a better solution like shrink or something but its taking way too much time. I will come back to this.

  6. Adding breadcurmbs - complete
  7. Started working on benefit toggle

Day 10

- Completed Benefit Toggle
- Complete Tab Component
- Complete Review. \*\*\* Bug issue, render stars in the review section and product review section. Separated Star and Render Stars into separate components. Okay it was simply a return error.

Day 11

- Finish Reviews system
  1. calculate reviews average
  2. add the stars fill for reviews in the reviews section and the product listing section. I was making a mistake when rendering the stars. I already had access to each individual review so all i needed to do was just access it. I was trying to get access to the productData array instead which is incorrect.
  3. Add box shadow to the main large image
  4. Change main image of new colletions. \*\*
  5. Add box shadow and highlight -- done

Day 12.

1. Responsive container to go full screen
2. In the cart, when clicking on image should be able to go the productDetails page
3. Issue with the hero image being cropped below 1600px screen size
4. fixed select size border orange not showing up

Day 13.

1.  In checkout page link to product Details page - Done
2.  cart page - basic layout

Day 14.

1. Fixed Footer design and responsiveness - Done
2. checkout page icons for payment

Day 15

1. Added local storage feature for cart items

Day 16

1. Start on Backend.

- Created a new monorepo for frontend and backend
- Created server.js file
- npm init in the backend folder
- install following dependencies: ```npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
- create folder structure: config, controllers, middleware, models, routes
- What does each folder mean?

  1. config - configuration files (database configs, envs)
  2. controllers - contains route handlers, business logic
  3. middleware - custom middleware functions (auth, validation, error handling)
  4. models - database models/schemas (mongoose)
  5. routes - API route definitions
  6. server.js - makin backend application entry point

  In package.json --

- Add server script "server": "nodemon server.js". (for continuously watching changes)
- Add "type": "module". This will allow us to use the import keyword.

Day 17

1. Create basic express server with a simple "/" endpoint working
2. Test endpoint with thunder client
3. Sign in to MongoDB. Create new project. Create new cluster.
4. create a MONGODB_URI in env file. Use the connection string from mongodb and choose drivers.
5. Update Network Access from MongoDB to allow access to certain people.
6. In config folder create new file called mongodb.js to connect to our database using mongoose. A function called connectDB was made.
7. Update the server.js with connectDB in app config.
8. Add cloudinary.js in the config folder. Get API key from cloudinary. In cloudinary -> dashboard -> api keys. Created a new one.
9. Go back to env file. Create new cloudinary api key, secret key and name.
10. Create a new file called cloudinary.js in config folder. Create a function connectCloudinary to access cloudinary using config()
11. Add connectCloudinary to server.js under app config.
12. All our config files are working. We have access to mongodb and cloudaring and server running successfully.

13. Next we can store our data in our database. Create productModel.js in our models folder.
14. create a productSchema called product

Day 17

1. create userModel with userSchema
2. Create a userController in controllers folder to create routing and business logic for different routes like login, registuer use and admin login
3. Create a new userRoute.js file in the routes folder. In this file import the functions we created in the userController file. At the endpoints and run each function using express.Router() under a variable called userRouter
4. In server.js update the api endpoints. `app.use("/api/user", userRouter);` it works
5. I had trouble here and my server crashed because I didnt attach the .js at the end of the userController when importing into the userRoute.
6. RegisterUser function made. Validate email, name, password checker. Added a jwt token to be sent back to user.
7. Tested the route /api/user/register POST method on thunder client. Go to body section and add the template for a new user in json format. `{
   "name": "John Doe",
   "email": "johndoe@example.com",
   "password": "Test1234!"
   }```

8. Status 201 success. It returns: ```{
   "success": true,
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2I4ZWZlNzEwMWU3NmY3NWM2M2QwOCIsImlhdCI6MTczNjE1MDc4MiwiZXhwIjoxNzM2MjM3MTgyfQ.iew88-ohUwvT5pcGRVal1Qx8gCAmvI135-GrjjpXKuE",

   }```

9. Checked MongoDB browse collections.
10. Issue the hashed password isnt showing in MongoDB collection.

- Testing
- Accessiblity issues testing
- Update all Copy
- Update last minute design changes and pricing
- Update any images
