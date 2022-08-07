# Hotel Service React App

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d008cf694cee4719852052642b6cd2b0)](https://www.codacy.com/gh/michalmuchakr/hotel-service-app/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=michalmuchakr/hotel-service-app&amp;utm_campaign=Badge_Grade)

Application deployed: https://hotel-service-app.netlify.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run app

In the project directory, you can run:
### `npm isntall`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run app in Docker | dev mode

`docker build -t hotel-service-app:dev .`
`docker run -p 3000:3000 hotel-service-app:dev`

## Run app in Docker | prod mode

`docker build -f Dockerfile.prod -t hotel-service-app:prod .`
`docker run -p 8000:8000 hotel-service-app:prod`

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Other scripts available

`npm test`

`npm run build`

`npm run eject`

## Containerization

## Documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
