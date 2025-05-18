Eventify
This project was generated using Angular CLI version 19.2.12.
Summary
Eventify is an Angular application for event management that allows users to view events, check attendance, and provide ratings for events they've attended. The application features Angular Material design components, ISO 27001:2022 certification, and multi-language support (English and Spanish).
Features
Project features include:

Event listing with attendance statistics and average ratings
Rating system for attended events
Material Design-based components
Integration with JSON Server Fake API
In-app navigation using Angular Router
Internationalization (i18n) with English and Spanish language support
Environment configuration
ISO 27001:2022 certified security compliance
Domain-Driven Design approach

Documentation
The project follows a component-based architecture with clear separation of concerns:

Registration module: Manages events and attendees
Engagement module: Handles event ratings
Public module: Contains shared UI components like toolbar and language switcher
Shared module: Provides base functionality for services and forms

Frameworks and Libraries
This project uses the following dependencies:

Angular Material (https://material.angular.io/)
ngx-translate (https://github.com/ngx-translate/core)
ngx-translate/http-loader (https://github.com/ngx-translate/http-loader)
JSON Server (https://github.com/typicode/json-server)

Fake API Setup
Run the following commands to start the fake API server:
bashcd server
sh start.sh
The API endpoints will be accessible at http://localhost:3000/api/v1.
The current API resource endpoints are:

http://localhost:3000/api/v1/events - Event information
http://localhost:3000/api/v1/attendees - Attendee information
http://localhost:3000/api/v1/ratings - Event ratings

Development server
To start a local development server, run:
bashng serve
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.
Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
bashng generate component component-name
For a complete list of available schematics (such as components, directives, or pipes), run:
bashng generate --help
Building
To build the project run:
bashng build
This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed.
Running unit tests
To execute unit tests with the Karma test runner, use the following command:
bashng test
Running end-to-end tests
For end-to-end (e2e) testing, run:
bashng e2e
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the Angular CLI Overview and Command Reference page.
