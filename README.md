# Voting Application

## Description

This project is a voting application built using React and Firebase. It allows users to log in, vote for their preferred party. Admin users can also monitor voting statistics. The app demonstrates core concepts in React, Firebase authentication, and Firestore for data persistence.

### Features
- **Login Page**:  
  - Secure login using Firebase Authentication.  
  - Displays an error message for invalid credentials.  
  - Directs users to the voting or admin page based on their role.

- **Voting Page**:  
  - Displays the logged-in user’s name.  
  - Allows users to vote for one of four parties: Cats, Dogs, Cows, or Fishs.  
  - Restricts users to one vote, with the option to change their vote.  

- **Admin Page**:  
  - Displays a table of all users with their voting status.  
  - Highlights users who have voted.  
  - Provides overall voting statistics, including percentages of users who voted.  
  - Includes a logout button for admins.

### Stuff I Found Hard to Implement
- **Firebase Integration**: Setting up Firebase Authentication and Firestore to ensure seamless user data management was challenging.  
- **Real-Time Updates**: Ensuring that voting data persisted and updated in real time for all users required careful Firestore configuration.  
- **State Management**: Managing state across different components for dynamic interactions and navigation was complex.  
- **Vote Change Logic**: Implementing the functionality to update votes dynamically while maintaining data integrity was tricky.  

### Known Bugs
- Occasionally, vote updates may experience slight delays due to network latency.  
- Logout sometimes requires a page refresh to clear all user session data completely.


## Tools and Technologies
- **React**: Front-end framework for building UI components.  
- **Firebase**: Used for authentication and real-time database.  
- **CSS/Bootstrap**: Styling and responsive design.  


## Feedback and Review
This assignment provided a deep understanding of React and Firebase integration. I learned how to design reusable components and manage dynamic state effectively. While implementing real-time data and role-based navigation was challenging, it was also highly rewarding.  
