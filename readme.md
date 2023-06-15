# Skeleton-set up steps

1. Initialize project and structure
2. Set up dev environmnet
3. Istall and set up express
    * add static middleware
    * add body parser
    * add routes
4. Add static resources
5. Add view folder with ready htmls
6. Add express-handlebars view engine
    * install
    * add to express
    * config extension
    * config views folder
    * add main layout
    * add partials (optional)
    * fix static paths
    * render home page
7. Add controllers folder with home controller
8. Add database
    * install mongoose
    * connect database
9. Authentication 
    * add user controller
    * add controller to routes
    * fix header navigation to login, register and logout
    * render login page
    * render register page
10. Add user model
    * add unique index for username
    * validate repeat password
11. Modify login and register form
12. Add login and register post actions
13. Add user manager
    * require in user controller
    * add register method
    * validate if user already exists
14. Hash password
    * insatll bcrypt
    * hash password
15. Login 
    * Find user by username
    * Validate password with hash
16. Generate jwt token
    * install jsonwebtoken
    * promisify jsonwebtoken
    * create secret
    * generate token in manager.login
17. Return token in cookie
    * install cookie parser
    * config cookie parser
    * set cookie with token
18. Logout
19. Authentication middleware
    * create base middleware
    * use middleware
    * implement auth middleware
    * attach decoded token to request
    * handle invalid token
20. Authorization middleware
21. Dynamic navigation
    * add conditional in main layout
    * add to res locals
22. Error handling
    * add 404 page
    * add global error handler
23. Show error notifications
    * add error container to main layout
    * show error container conditionally 
    * pass error to render