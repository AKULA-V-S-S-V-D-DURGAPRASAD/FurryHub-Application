# FurryHub

FurryHub is a Spring Boot-based web application for managing pet bookings and information. It provides RESTful APIs for handling pets and bookings, designed for easy integration and testing with tools like Postman.

## Features

- Manage pet records (CRUD operations)
- Manage booking records (CRUD operations)
- User-based filtering for pets and bookings
- MySQL database integration
- API endpoints for easy testing

## Tech Stack

- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven
- MySQL server

### Setup

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd furryhub
   ```

2. Configure MySQL credentials in `src/main/resources/application.properties`.

3. Build the project:
   ```sh
   mvn clean install
   ```

4. Run the application:
   ```sh
   mvn spring-boot:run
   ```

### API Testing

- Base URL: `http://localhost:8080`
- Use Postman to test endpoints under `/api/pets` and `/api/bookings`.

## License

This project is for educational purposes.