# TKH-React-Signup-Login
React Homework Assignment for Phase 2


In this assignment you will build a simple login, signup, page layout. If the person is "logged out", then they will see the login/signup page
if they are "logged in", display the test layout with some content

Requirements:
create a new Vite project
3 components
-navbar - 3 links
-sidebar - 2 links
-layout > inside layout - render something of your choice. example: youtube component, hello world, image
3 components are rendered on the page 
login and signup components rendered conditionally 
correct use of a UI framework: Chakra UI or Bootstrap 
use of state to manage whether the user is "logged in"
Getting Started:
create a new Vite project
inside App.js > create functional components for navbar, sidebar and layout
call navbar, sidebar and layout inside of the App function return statement
inside App.js create functional components for login and signup 
inside of App() function create a state to determine if a user is logged in or not (boolean)
if the user is logged in render the layout component, if they are not logged in render the login or signup components

edit after class 12/7:
-build a button with a click event that will change showLogin to true or false 
-if showLogin is true then show the Login component
-if showLogin is false show the signup page - (create Signup component )
