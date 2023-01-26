# ☀️AIRCAST 📆

## Table of contents 🚀

* [Introduction](#introduction)
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Project Criteria](#project-criteria)
* [Final Results](#final-result)
* [Future Changes](#future-changes)
* [Feedback](#feedback)
* [Deployed links](#deployed-links)
* [Credits](#credits)

## Introduction

Welcome to our web application, the Flight and Weather Planner! Our goal is to simplify the process of travel planning by providing all the necessary information in one convenient location. With our application, you'll be able to search for the best deals on flights and view real-time weather updates for your destination all in one place. Say goodbye to the hassle of searching multiple websites, and hello to a more efficient and enjoyable travel planning experience. 💻🛫🌦️

![working site](image-1.png)

We have integrated the Skyscanner API to search for the best deals on flights and the Open Weather API to provide real-time weather updates for the user's destination. This means that you no longer have to waste time searching multiple websites, and can plan your trip with ease. To make it even easier, our application only displays the top 3 flight options, making it simple for you to compare and choose the best flight for you. With our user-friendly interface, you can quickly and easily find the information you need to plan your next trip.🛫🌦️🗺️

## Requirements

To use our application, you will need the following:

* A valid API key for Skyscanner 🔑 (developer)
* A valid API key for Open Weather 🔑 (developer)
* A web browser that supports HTML, CSS, and JavaScript 🌐
* Internet connection.📶

## Getting Started

To start using our application (developer), you will need to have a valid API key for both Skyscanner and Open Weather. Once you have obtained your API keys, you can enter them into the appropriate fields in the application settings. 🔑🛫

## Recomendations

* We recommend using the latest version of your web browser for the best user experience. 🌐
* Make sure to keep your API keys private and use them according to the terms of service of each API. 🔒 (developer)
* We recommend checking the flight prices and weather updates before making your final decision. 🛫🌦️
* Enjoy your trip planning experience! 🛫🌴🏖️

## Project Criteria

### Front-End (Tailwind)

By using Tailwind CSS in our web application, we were able to create a user-friendly and responsive design that enhances the user experience and makes it easy for users to navigate the webpage. The framework allowed us to quickly and easily implement consistent styling across our HTML elements, which greatly reduced the time and effort required to create a visually appealing design.

Overall, the use of Tailwind CSS in our project was extremely beneficial, it not only helped us to create a beautiful and functional design but also helped to make the development process smoother and more efficient.

* Tailwind code example

![Tailwind](image.png)

### Flight search form

This form allows users to easily search and compare flights by inputting the necessary information. Once the origin and destination cities are selected, a list of airports in the destination city will be presented for further selection. Users will then be prompted to enter their desired flight date and number of passengers.

![Search form](image-5.png)

#### Variables of the form

These variables are used in JavaScript to collect information from customer inputs in a form. Each variable is utilized to gather all available information.

![Alt text](image-2.png)

#### Temperature

In this section, we utilized the OpenWeather API to provide a real-time display of the current weather conditions for a specific city. This feature allows users to quickly and easily determine if the temperature is suitable for their flight, or if they should consider postponing their trip. By integrating this functionality into our program, we are able to provide a more comprehensive and user-friendly experience for our users.

#### Calling the API (OpenWeather)

We will need to make requests with the fetch() function. We need to specify the endpoint, provide necessary parameters, and include the API key, The API will respond with flight information that we can parse and display to the user.

![open weather](image-16.png)

### Flight results

Upon submitting the form, users will be presented with the top three best flight options, carefully curated and selected based on their preferences and requirements. The results will include all the necessary information such as flight schedule, ticket prices, and duration, so that users can easily compare and choose the best option for them.
Additionally, to ensure that users have all the information they need to plan their trip, we also provide the current weather forecast of the destination city. This way, users can plan accordingly and pack the appropriate clothing for their trip. Not only that, but also plan their itinerary, and make the most of their travel experience.

![flight result](image-19.png)

#### Calling SkyScanner API

We will need to make requests with the fetch() function. We need to specify the endpoint, provide necessary parameters, and include the API key, The API will respond with flight information that we can parse and display to the user.

![skyscanner](image-14.png)
![skyscanner2](image-15.png)

## Final Result

This section is the culmination of all the hard work put into the HTML, CSS, and JavaScript. It presents the user with the final results for the selected city, including the best flight options and the current temperature.
![final result](image-17-1.png)


## Future Changes

* Adding more features such as booking 📆, accommodation and car rental 🚗 options.
* Integrating more APIs to provide more information and services to users.
* Implementing machine learning algorithms to personalize the user's experience.
* Optimizing the user interface and design for better user experience 💯.
* Building a mobile application for better accessibility.
* Implementing security measures to protect user data.
* Creating a user feedback system to gather users' suggestions and improve the app.
* Improving scalability to handle an increasing number of users.
* Add more flights options.

Please note that the direction of future development will depend on the goals and resources of the development team.

## Feedback

We value your opinion and are constantly striving to improve our weather forecast webpage. If you have any feedback or suggestions on how we can enhance the user experience, please do not hesitate to share them with us. Your opinion is valuable to us and will help us to continue to provide the best service possible. If you have any questions or concerns, please feel free to contact us at contact@aircast.com and we will be more than happy to assist you.

## Deployed links

* [Github Pages](https://drums180.github.io/Project-1/)

* [Github Repository](https://github.com/Drums180/Project-1)

## Credits

[OpenWeather API](https://openweathermap.org/)

[RapidAPI](https://rapidapi.com/hub)

[Google Fonts](https://fonts.google.com/)
