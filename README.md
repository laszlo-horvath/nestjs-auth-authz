# Nest.js JWT Authentication + Authorization Exercise

A hands-on exercise to implement authentication and authorization in a NestJS application using JWT tokens, guards, custom decorators, and middleware.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Key Concepts Covered

### Authentication with JWT
- Understanding JWT tokens
- Implementing JWT strategy
- Setting up authentication flow
- Protecting routes with guards

### Authorization and Guards
- Role-based access control
- Creating custom guards
- Protecting routes based on user roles
- Public vs. protected endpoints

### Custom Decorators
- Creating parameter decorators
- Creating method decorators
- Using decorators with guards

### Middleware and Exception Handling
- Custom logger middleware
- Exception filters
- Error handling patterns
- Custom error responses

## Exercises

### Step 1: Implement JWT Authentication

- Set up JWT strategy in NestJS
- Configure Authentication Module
- Create login endpoint with JWT token response
- Implement user validation

### Step 2: Implement JWT Guard

- Create JWT authentication guard
- Apply guard to protected routes
- Handle authentication errors
- Test protected endpoints

### Step 3: Implement Roles Guard

- Create role-based authorization
- Define user roles (admin, user)
- Protect routes based on roles
- Set up public endpoints

### Step 4: Create Custom Decorators

- Create roles decorator
- Implement current user decorator
- Create public route decorator
- Combine decorators with guards

### Step 5: Implementing Logger Middleware

- Create custom logger middleware
- Log incoming requests
- Track request timing
- Handle request context

### Step 6: Implement HttpExceptionFilter

- Create custom exception filter
- Define error response structure
- Handle different types of errors
- Implement global error handling

### Step 7: Implement Custom Error Handling

- Create custom error type (ValidationError)
- Create custom exception filter to handle these errors
- Define standardized error response structure
- Apply filter globally
