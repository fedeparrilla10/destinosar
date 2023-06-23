# DestinosAR

DestinosAR is an Angular application that showcases the best places to visit in Argentina. This application allows you to explore a wide range of tourist destinations and discover the beauty and diversity that this beautiful country has to offer.

## Key Features

- **CRUD**: DestinosAR allows you to perform create, read, update, and delete operations on tourist destinations. You can add new destinations, edit existing information, and remove destinations that you no longer wish to display.

- **Guards**: Guards have been implemented to protect the application routes and ensure that only authorized users can access certain sections. This helps maintain data privacy and integrity.

- **Interceptors**: Interceptors are used to intercept HTTP requests and responses in the application. This allows adding additional logic before sending a request or manipulating the received response. In DestinosAR, interceptors have been implemented to add custom headers, handle errors, and display loading indicators.

- **Loading Service**: The application includes a loading service that displays a loading indicator while asynchronous requests are being made. This improves the user experience by providing visual feedback during operations that may take time.

- **SwitchMap**: The `switchMap` operator from RxJS has been used to handle HTTP requests and prevent concurrency issues. This ensures that only the latest request is processed, avoiding unexpected results due to out-of-order requests.

## Prerequisites

Before running the DestinosAR application in your local environment, make sure you have the following components installed:

- Node.js: [https://nodejs.org](https://nodejs.org)
- Angular CLI: Run `npm install -g @angular/cli` to install it globally.

## Contact

If you have any questions, suggestions, or inquiries related to DestinosAR, feel free to contact me at [federicoivanpd@gmail.com](mailto:federicoivanpd@gmail.com).

We hope you enjoy exploring the wonderful tourist destinations in Argentina with DestinosAR!
