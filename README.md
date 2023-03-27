# Social media schedule

## How to run
```
yarn install
yarn serve

or just access: https://642157c04619fd74e3d6cf69--sprightly-donut-17f3a3.netlify.app/
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### About the project

```
The project was really cool to do, I chose to use vue3 for the first time so it was a learning project. It's far from being good, I ended up testing a lot of different things to be able to take advantage of it.

As I don't have an API, I made it behave as if there was a DB but using localstorage. To be able to use localstorage I needed to reduce the images as much as possible, so I created a function that takes a very heavy image and reduces it to the point that we can store it in base64 in the browser itself, with that being a very interesting application.

I chose not to pay much attention to typing, so I used a lot of `as any` but I know it's not a good thing. I decided not to focus on typing because of time, but soon I would like to improve the project and apply typing correctly.

I had a lot of difficulty with the layout, not to build it, but it is very inconsistent, it does not have a spacing pattern and that made me a little uncomfortable, I really like using the pattern of multiples of 4 (4px, 8px, 16px, 32px , etc.).

I had a little inconsistency in the icons too, because in font-awesome some icons contained in the layout were paid.

For the architecture I used the container concept, where each page has a container and in that container we store business rules, and in it we call the components that have a more visual foundation.

In general, I didn't find it a difficult project, just a lot of work, as I'm having problems with available time, I couldn't pay more attention to details, nor could I apply tests with JEST, which I would love to do. But it was an excellent portfolio job and in the next few days I will make some updates to further improve the project and make it more consistent
```