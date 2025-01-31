# Rica - Import Permit System

![Screenshot 1](./src/assets/Screenshot%202025-01-31%20at%2016.38.24.png)
![Screenshot 2](./src/assets/Screenshot%202025-01-31%20at%2016.38.30.png)
![Screenshot 3](./src/assets/Screenshot%202025-01-31%20at%2016.38.35.png)

## Overview

The **Rica - Import Permit System** allows businesses to submit import permit applications through an intuitive online form. The system collects necessary information about business owners, business details, and product information, and processes the application. Upon submission, the data is stored in a database and a confirmation email is sent to the applicant.

## Features

- **Business Owner Information**: Collects details such as citizenship, ID, surname, and province.
- **Business Details**: Gathers the business name and type.
- **Product Information**: Allows users to specify the product's purpose of importation, category, weight, unit of measurement, quantity, and description.
- **Email Notification**: Sends a confirmation email once the permit is submitted.
- **Responsive Design**: The user interface is designed to be mobile-friendly.

## Tech Stack

- **Frontend**:
  - React
  - React Hook Form
  - Zod for form validation
  - Axios for HTTP requests
  - Tailwind CSS for styling

- **Backend**:
  - Java (Spring Boot)
  - Java Mail API for sending emails
  - MySQL for database storage

## Setup Instructions

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL server running

### Backend Setup (Spring Boot)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/rica-import-permit.git
    ```

2. Navigate to the backend directory:
    ```bash
    cd rica-import-permit/backend
    ```

3. Install dependencies and build the Spring Boot application:
    ```bash
    ./mvnw clean install
    ```

4. Set up your `application.properties` with your database credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/permit_db
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.mail.host=smtp.your-email-provider.com
    spring.mail.port=587
    spring.mail.username=your-email@example.com
    spring.mail.password=your-email-password
    ```

5. Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```bash
    cd rica-import-permit/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Update the `axios` endpoint URL in `Permit.js` to match your backend:
    ```js
    const response = await axios.post('http://localhost:8080/api/permits', data);
    ```

4. Run the React development server:
    ```bash
    npm start
    ```

### CORS Configuration

If your frontend and backend are running on different ports (e.g., React on port 3000 and Spring Boot on port 8080), make sure to allow cross-origin requests by adding the following to your backend configuration:

```java
@CrossOrigin(origins = "http://localhost:3000")
