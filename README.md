User-Web-Application
This documentation provides an overview of a simple web application that allows users to input data, validate it, store it in a database, retrieve it, and display it in a tabular format.

Table of Contents:
1. Introduction
2. Requirements
3. Setup
4. Usage
5. Folder Structure
6. Database Schema
7. Git Repository

1. Introduction:
The User Data Web Application is built using JavaScript and Nodejs. It provides a user-friendly interface for users to input their information, including name, email, age, and date of birth. The application performs client-side validation to ensure data integrity and stores the validated data in a MySQL database. Users can also retrieve and view the stored data in a tabular format.

2. Requirements:
To run the User Data Web Application, you need the following software installed:
NodeJs(Version v18.18.1)
JavaScript  
MySQL

3. Setup:
Clone the Repository: Clone the repository from your Git hosting platform:
git clone <repository_url>
cd <repository_name>

Run the Application: Start the node application:
node index.js

Access the Application: Open your web browser and navigate to http://localhost:3000 to access the application.

4. Usage:
To use the User Data Web Application:
Fill in the user data form with the required information:
Name
Email
Age
Date of Birth
Click on the "Submit" button.
If the input data is valid, it will be stored in the database.
The stored data can be viewed on the "User Data" page in a tabular format.

5. Folder Structure:

The folder structure of the User Data Web Application is as follows:
-> index.js: Main node application file.
-> public/index.html: HTML file for the user data form.
-> public/styles.css: CSS file for styling.
-> database.js: MySql database file to store user data.

README.md: Documentation.

6. Database Schema:

The MySQL database schema for storing user data is as follows:
 CREATE TABLE users(
     ID INT AUTO_INCREMENT PRIMARY KEY,
     Name VARCHAR(255),
     Email VARCHAR(255),
     Age INT,
     DateOfBirth DATE
);
