# SAASy
The updated SAAS webchat app.

To Run the App:

1) Navigate to the "test" folder (not test-app)

2) Run "node server.js"

3) In a web browser, navigate to "localhost:8080"

4) Click the "Rooms" button in the navbar


To Make Changes:

1) Make edits in the desired components of "test-app/src"

2) In "test-app/" run "ng build"

3) This creates a "test-app/dist" folder, then move that folder to "test/" by running the command "cp dist ../test/"

To Test A Post Route:

curl -i -d "param1=value1&param2=value2<...etc>" http://localhost:8080/<post-route>
