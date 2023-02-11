# Sea World

# What is this?

Small Sea word where you cnat create island.

This word is represented by a grid that starts with all tiles as sea tiles and then the user can click on the world to add or remove land and create tiny islands.

# How does it work?

The user will need to be able to change the size of this tiny world and have data displayed about this world.

## Structure

This is the directory structure of the application.

```
  ├── __tests__ -> Unit tests
  ├── src -> Codebase
  │   ├── configs
  |   |     |-- index -> configs
  |   |     |-- appPats -> urls
  │   ├── componets
  |   |     |-- common  -> share component in the proyect
  |   |     |-- control ->
  |   |     |-- layout -> Layout component
  |   |     |-- nav  -> Menu and nav component
  |   |     |-- word -> Map and Assets component
  │   ├── pages  -> pages component
  │   ├── store  -> handle word data
  │   ├── services
  │   ├── styles -> custom styles
  │   └── utils
  └── coverage
        ├── lcov-report
```

# Setup

## Clone the repo

`git clone git@github.com:ClipMX/react.cms-clipmx-ecommerce.git`

## Building as production the Site Locally

To build the site, you need to go through a one-time installation
procedure.

### Install The Dependencies

Before to install dependencies, you should have installed node 16

- Node >=16.14.0 (https://nodejs.org/en/)

### Eject the following command:

    npm i

### When finished installing the dependencies, execute the following command:

    npm run build

### To run the site, execute the following command:

    npm run production:start

## Note

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

# For Development

### Eject the following command:

    npm i

### Runs the app in the development mode, execute the following command:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# For Testing

### Runs the app in the development mode, execute the following command:

Launches the test runner in the interactive watch mode.

`npm run test`

## Documentation

This section explains the most important parts of the project.

### Components

This folder has the components of site.

```
  ├── components -> Unit tests
  | |-- common -> share component in the proyect
  | |-- control ->
  | |-- layout -> Layout component
  | |-- nav -> Menu and nav component
  | |-- word -> Map and Assets component
```

### pages

This file contains the pages of the site

### store folder

This file contains redux actions for handling of the map information about the size and position of dir and water.

The most important methods are the following:

- updateSizeWordAction: Update the size of the map.
- switchCellAction: switch the cell of water to dir.

### WordHelpers.ts

This file contains the logic needed for counting islands.

The most important methods are the following:

    - findAdjacentTiles: Return the number of adjacent element of a coordinate
    - getCoords: Return a value if the current coordinate has an adjacent
    - getIslandCount: Return the number of island

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
