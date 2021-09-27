# Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started with the project

You'll need to set a value for `REACT_APP_MOVIE_API_KEY` in an .env file to have this working

it is bootstrapped with [The Movie DB](https://developers.themoviedb.org/3)

## Available Scripts

In the project directory, you can run:

### start

Which will set the project (don't forget to `npm i`) to work locally

Also you can find it working here [heroku](https://rockstar-ch.herokuapp.com)

### thoughts

- Could've added a debounce function to the search bar input to not spam the API with every key
- UI will mostly work on mobile devices, could've polished it along the "more info" slider
- Filtering will work for both discoveries and search results
- For now, only 9 results are being shown, this could be improved
- Contrast on the Jumbo could be better
- Context for this amount of info is fine, with a bit more of info could've been better to include redux or make a reducer
- Data handling with a reducer seems also like a good way to go next so that is available globally
- Man, I think CRA is kind of outdated, no aliases without ejecting 😔
- Most of Tailwind better features won't work cause the inital config was harder than in nextjs
- Man, I love nextjs so much ❤️
- Most of the API's layer and even transformations coul've taken place in the api folder of next
