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

## Setup

Follow these steps to set up and run the DestinosAR application:

1. Clone the DestinosAR repository: `git clone https://github.com/yourusername/destinosar.git`
2. Navigate to the project directory: `cd destinosar`
3. Install the dependencies: `npm install`
4. Start the application: `ng serve`
5. Open your web browser and go to `http://localhost:4200`

You should now be able to see the DestinosAR application in your local browser!

## Contribution

If you would like to contribute to DestinosAR, follow these steps:

1. Fork the DestinosAR repository.
2. Create a new branch for your feature or bug fix: `git checkout -b branch-name`.
3. Make your modifications and fixes.
4. Ensure your code follows the style conventions and passes the tests.
5. Commit your changes: `git commit -m "Description of the changes"`.
6. Push your changes to the remote repository: `git push origin branch-name`.
7. Open a pull request in the original repository.

We appreciate all contributions that help improve DestinosAR and make it even better.

## License

DestinosAR is distributed under the MIT license. For more information, see the [LICENSE](LICENSE) file in this repository.

## Contact

If you have any questions, suggestions, or inquiries related to DestinosAR, feel free to contact our development team at [contact@destinosar.com](mailto:contact@destinosar.com).

We hope you enjoy exploring the wonderful tourist destinations in Argentina with DestinosAR!
