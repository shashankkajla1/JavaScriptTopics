# TS

# - This is your devDependency its showing TS but its not your project dependency, the project 
    dependency is different.

# - When you import your typescript application or TS project the node_module project is not   present, coz. the size of this is very big when checked from properties, if you want to commit in your repo your repo size increases.
So, do not commit node module instead of this just commit package.json, so if tomorrow somebody take it then he take package.json and install the libraries using node i.e. npm install
# 1.) It install dev dependencies
# 2.) It install dependencies for your project.

# - package-lock.json alos, 

