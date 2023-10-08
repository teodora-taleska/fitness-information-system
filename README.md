# Fitness Information System
## Project Overview

The Fitness Information System, is a comprehensive web and mobile application developed to enhance the membership experience at fitness centers. It aims to streamline operations within fitness centers, improve member visibility, and facilitate efficient communication between members and professionals.

### Technologies Used

- **Frontend**:
  - React: A JavaScript library for building the user interface.
  - Sass: A CSS preprocessor for styling.
  
- **Backend**:
  - Node.js: A JavaScript runtime environment for the server-side development.
  - Express.js: A web application framework for Node.js.
  - MySQL: A relational database management system.
  
- **Other Tools**:
  - Git: A version control system for tracking changes in the codebase.
  - GitLab: A platform for hosting and collaborating on Git repositories.

## Functional Requirements

1. **User Registration and Authentication:**
   - User authentication and access control mechanisms ensure data security and privacy.
   - The system allows guest access to the main page, activities, upcoming events, and the e-shop. Only registered members with fitness packages can log in.

2. **Activity and Event Management:**
   - Fitness center administrators can add, modify, and delete various activities, events, and users.
   - Supports up to six different user roles: member, coach, nutritionist, physiotherapist, manager, and administrator.
   - Members can view upcoming events and register for them through the system.
   - The system displays the availability of slots for each event.

3. **Membership Management:**
   - Members can view their membership status, including the number of tickets left.
   - Allows members to extend their membership online with an online payment system.
   - Provides an option for members to view and update their personal information.
   - Users can make appointments for activities at least 4 days in advance and cancel them at least 2 days before the scheduled session.

4. **Communication and Messaging:**
   - Facilitates seamless communication between members, coaches, nutritionists, physiotherapists, and administrators.
   - Members can request contact details of trainers and nutritionists through the system.
   - Supports messaging features for notifications and reminders about upcoming events or schedule changes.

5. **Gym Occupancy Tracking:**
   - Provides real-time information on the number of people present in the gym at any given time.
   - Members can check gym occupancy before planning their workout sessions.

6. **Online Store Integration:**
   - Integrates an embedded online store for the fitness center's sportswear and protein shop.
   - Members can browse and purchase products online using the same secure online payment system used for membership extensions.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/teodora-taleska/fitness-information-center.git
   cd fitness-information-center
   ```
   
2. Install the required dependencies for the project by running:

   ```bash
   cd client
   npm install
   cd ..
   cd api
   npm install
   ```

3. Configure the database connection in the project settings, specifying your MySQL database credentials.
To configure the database connection, you'll need to create a .env file in the project's root directory. Open your favorite text editor and create a file named .env. Inside the .env file, specify your MySQL database credentials as follows, replacing the placeholders with your actual information:

    ```env
    DB_HOST=localhost
    DB_USER=your-username
    DB_PASSWORD=your-password
    DB_NAME=your-database-name
    ```

4. Run the project locally:

   ```bash
   cd client
   npm start
   ```
   
5. Run the server:

    ```bash
    cd api
    npm start
    ```
    
6. Once both frontend and backend servers are running, you can access the application through your web browser.

### Demo Video
You can watch a demo of the current project version [here](https://www.youtube.com/watch?v=FcJlCWMqp9w).

That's it! You've successfully set up and launched the project on your local machine. Enjoy exploring its features and functionalities.
