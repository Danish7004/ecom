# MERN Stack 
> this website built with the MERN Stack with React Context API for state management, and pure CSS for style

## Demo: https://fashion-destiny.herokuapp.com

## installed dependencies for backend
npm install   
    bcrypt ==> to incrypt and decrypt the password
    cloudinary ==> to upload images of the product
    concurrently ==> to run backend and Client server together ------ npm run dev
    cookie-parser ==> to pass refresh-token to Cookie at the local storage of the user
    cors ==> to ignore the cors error
    dotenv ==> to hide some data like PORT NO , ACCESS_TOKEN_SECRET_KEY
    express ==> to create the server
    express-fileupload ==> to upload data to the data-base
    jsonwebtoken ==> to check the authorization of the user
    mongoose ==> to connect the database from the server
    nodemon ==> for automatic restart if any changes in the file


## Connected to the database through mongoose in server.js file ...database Url link saved to .env

## created models and its corresponding controllers and their routing 
## authorization check in middlewares

                

### installed dependencies for Client
    npx create-react-app Client ==> for frontend i have use react js
    axios ==> to call the backend routes from UI 
    react-paypal-express-checkout ==> for checkout of the product
    react-router-dom ==> for routing

### global-Context file in src

### All API and components in the src folder
### Authorization in src/components/mainpages/auth



    
