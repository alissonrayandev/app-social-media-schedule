# Social Media Schedule

This is a social media scheduling application built with Vue 3. It allows users to schedule posts for various social media platforms and preview how the posts will look.

## How to run

To run the application, first install the dependencies with:

```
yarn install
```

Then, run the application in development mode with:

```
yarn serve
```


Alternatively, you can access a live demo of the application at: https://642157c04619fd74e3d6cf69--sprightly-donut-17f3a3.netlify.app/

To build the application for production, run:

```
yarn build
```
To lint and fix files, run:
```
yarn lint
```

## About the project

This project was built as a learning exercise with Vue 3. As there is no API available, the application behaves as if it has a database by using local storage. To use local storage, I created a function that reduces image file sizes so they can be stored as base64 in the browser itself. 

In terms of architecture, I used a container concept where each page has a container that stores business rules and calls components for the visual foundation. 

I faced some challenges with the layout, as there is no consistent spacing pattern and some icons contained in the layout were paid. I also used a lot of `as any` in the code due to time constraints, but I plan to improve the project and apply typing correctly in the future.

Overall, this was a challenging and time-consuming project, but an excellent portfolio piece. I plan to make further updates to improve the project and make it more consistent.
