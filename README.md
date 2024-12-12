# Weather App

A React application built with Vite, fetching real-time weather data using the WeatherAPI https://www.weatherapi.com/. This app utilizes the browser's geolocation capabilities to determine the user's location and display the relevant weather information.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/weather-app.git`
2. **Navigate to the project directory:** `cd weather-app`
3. **Install dependencies:** `npm install`
4. **Obtain an API Key:**  Sign up for a free account at [https://www.weatherapi.com/](https://www.weatherapi.com/) and obtain your API key.
5. **Set up the API Key:** Replace `"YOUR_API_KEY"` in the code with your actual API key.  This is typically done in a `.env` file or a dedicated configuration file.
4. **Start the development server:** `npm run dev`

## Features

* Automatic Location Detection: Uses `navigator.geolocation.getCurrentPosition` to automatically detect the user's location and display the weather for that location.
* Current Weather Conditions: Displays current temperature and temperature for next 24 hours.
* Error Handling: Provides user-friendly messages for location errors and API issues.
* Responsive Design: Adapts to various screen sizes for optimal viewing on desktops and mobile devices.
* Clear and Concise UI: Presents weather information in an easily understandable format.


## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10

## State Management

The application's state is managed using the `useState` hook.

## Deployment

The application is deployed on Netlify: https://funchosa-weather-app.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
