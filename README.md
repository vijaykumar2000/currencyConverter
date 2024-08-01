A responsive and intuitive web application for converting currencies using real-time exchange rates.
This project leverages the ExchangeRate-API to provide accurate and up-to-date currency conversion rates.

Features
Real-Time Conversion: Get the latest exchange rates and perform conversions between various currencies.
Swap Functionality: Easily swap between the 'From' and 'To' currencies with a single click.
Responsive Design: A user-friendly interface that works seamlessly across different devices.
Dynamic Currency Selection: Choose from a wide range of currencies for conversion.
Error Handling: Robust error handling for API requests to ensure a smooth user experience.
Tech Stack
Frontend: React, Tailwind CSS
Backend: ExchangeRate-API
Tooling: Vite

Installation
Clone the repository:
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter

Install dependencies:
npm install

Run the application:
npm run dev


API Key
This project uses the ExchangeRate-API. Replace the placeholder API key with your own in the useCurrencyInfo.js file:
const API_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/";
