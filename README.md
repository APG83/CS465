# CS 465 Full Stack Development Reflection

## Architecture

In this project, I worked with multiple types of frontend development. The customer-facing side used Express HTML with Handlebars templates. This approach rendered pages from the server and displayed trip data to users in a more traditional web application style. JavaScript was also used throughout the project to connect different parts of the application and help manage data flow between the frontend, backend, and database.

The administrative side used Angular as a single-page application. This was different from the Express HTML side because Angular handled more of the page behavior inside the browser. Instead of loading a new page for every action, the SPA could update parts of the page dynamically. This made the admin side feel more modern and interactive. The Angular structure also separated the application into components, services, routing, and models, which made the project easier to organize as it grew.

The backend used MongoDB, which is a NoSQL database. MongoDB worked well for this project because the trip data could be stored in a flexible document format. Since the application used JSON-like data, MongoDB made it easier to store and retrieve trip information without needing a strict table structure like a relational database. This was useful for the Travlr Getaways project because each trip had several related details, such as the trip code, name, length, resort, price, image, and description.

## Functionality

JSON is different from JavaScript because JSON is a data format, while JavaScript is a programming language. JSON uses a structured format with key-value pairs, which makes it easy to send data between different parts of an application. In this project, JSON helped connect the frontend and backend because the API returned trip data in JSON format. The frontend could then use that data to display trips to customers or allow admins to manage trip information.

One example of refactoring in this project was moving from static HTML pages to templates and then to API-driven data. At first, trip information could be written directly into the page, but that is not efficient because every update would require changing the page manually. By using Handlebars templates and later connecting to the API, the application became more dynamic. The same page structure could be reused while the data came from the database.

Another example was the Angular admin side. Instead of repeating the same code in multiple places, Angular allowed the project to use reusable UI components. This made the application easier to maintain because changes could be made in one component instead of being repeated across several pages. Reusable components also help keep the layout consistent and reduce the chances of errors when adding new features.

## Testing

In a full stack application, methods and endpoints are important because they define how the frontend communicates with the backend. Methods such as GET, POST, PUT, and DELETE tell the server what action is being requested. For example, a GET request retrieves data, while a PUT request updates existing data. Endpoints are the specific API routes that handle those requests, such as a route for getting all trips or finding one trip by its trip code.

Testing the API endpoints was important because the frontend depended on the backend returning the correct data. If an endpoint did not work, the customer page or admin page would not display the information correctly. Testing helped confirm that the API could retrieve trip data, update records, and respond correctly when something was missing or incorrect.

Adding security made testing more difficult because protected admin features required authentication. The login process had to verify users before allowing access to admin functions. This means testing was not only about checking whether the endpoint worked, but also whether the application correctly blocked unauthorized users. Security added an extra layer, but it made the application more realistic because admin features should not be available to everyone.

## Reflection

This course helped me better understand how the different parts of a full stack application work together. Before this project, I had worked with individual pieces like frontend pages, backend routes, and databases, but this course showed how they connect into one working application. I learned how Express, MongoDB, APIs, and Angular can all work together to support both a customer-facing site and an admin-facing site.

The project also helped me build skills that can make me a stronger candidate in the software development field. I gained more experience with the MEAN stack, routing, API testing, database integration, and authentication. I also got more practice troubleshooting errors, reading project structure, and understanding how data moves through an application. These are useful skills because real-world applications usually require developers to understand both the frontend and backend instead of only one side.

Overall, this project gave me a better understanding of full stack development from start to finish. I was able to build a working application, connect it to a database, create API endpoints, add an Angular admin side, and include security for login authentication. This experience will help me explain my work better in the future and gives me a project I can use as part of my portfolio.
