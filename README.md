# Compound explorer

The application is deployed in an on-commit fashion to netlify at
[https://eager-kalam-4451f0.netlify.app](https://eager-kalam-4451f0.netlify.app/)

However, if you wish to demo this yourself on a local machine the instructions are below.

## Installation

This is an npm project. Please ensure that npm and node is installed on the target machine. Version of node used during development was `12.14.1` and npm `6.13.4`.

Once cloned, change directory into the root of the repo and issue an `npm install` command.

## Running

The basic `npm start` command can be used to start up the React application on port 3000. It will automatically open a browser window.

## Implementation

Issued with this challenge I decided to create an explorer type application consisting of 3 main areas.

- Interactive scatter chart that plots compounds together
- Interactive table showing detail of each compound
- Detail panel showing complete details (including full image) of compound with assay results

The main idea is that the user can see how the compounds relate to each other and see any outyling or interesting results. They can then choose to select a compound from the chart. Doing so will highlight the item on the chart and also scroll to its row in table below. In additional it will also open the detail panel at the side to show details on that compound in full along with the assay results. It is also possible to select a compound in this way via clicking a row in the table.

### Approach

I decided to leverage the Material UI library along with react to build this. Material UI is an implementation of google's Material design language. It has excellent standard components and helps designers and developers speak the same 'language'. Material UI uses a concept called JSS for styling where the stlyes are incorporated into the components themselves and not external CSS. This may look strange at first an potentially inflexible, however, it helps to create very cohesive components.

I made use of the functional component concept in react along with 'hooks' to control appliction state.

I also used a scatter chart from Nivo [https://nivo.rocks/](https://nivo.rocks/). The chart itself did not have the notion of hover and selection of plotted items but I have implemented that in the wrapper I created.

I did not write tests to quite the same level as I would on a production application, however, I have includes examples of my unit testing approach in the files `AssayResults.test.js`(view rendering test) and `series-helper.test.js`(standard javascript functions).

## Further work

If I was to extend this tool further I would explore

- Integrating with a smiles parser / 2d / 3d viewer. \* I found a couple of libraries like "Jmol" http://jmol.sourceforge.net/ and MolViewer https://boborett.github.io/MolViewer/ which could be an interesting way of making use of the smiles strings in the given data
- Adding internationalisation support. The labels in the application are hard-coded for now. A next step would be to externalise those for supporting different languages
- Sorting / pagination of the compound list
- Serving the compounds up from an API, perhaps from a serveless application with 2 endpoints
  _ an endpoint to bring back the main compound list with only essential information. This would exclude the assay results for performance reasons. i.e it's wasteful to to bring data back for compounds that are never clicked on
  _ a second endpoint to access the assay results for a compound
- Potentially the ability to add, remove, edit compounds and their associated details
- A light algorithm to potentially highlight outlying results more effectively to the user
- Some light e2e tests written in cypress or selenium
- If the application state became more complex I would consider using a state management tool such as Redux.

## Issues

There are two warnings raised in the browser by the chart component on initial render. There is nothing I can do about that on end at this time.
