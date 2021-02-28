## Open FDA API in a React Table
Importing Drug information from the OpenFDA API into a table

Hosted @: https://open-fda-react-table.netlify.app

### Beginnings

I've wanted to share my React Table skills without a backend, so I decided to read the FDA's drug data directly from the API and pass the drug info directly into a table. I realize RT7 has been out for a while, but this was built in RT6 because that's what I'd learned initially. I've used my own API key from OpenFDA in the hosted version, so you'd need your own from here to run locally. Simple go to https://open.fda.gov/apis/authentication/ and click the "Get API key" button. Once you have it, create a .env file in the root of the clone folder with only this line:

REACT_APP_OPEN_FDA_KEY=*yourkeyhere*

replacing *yourkeyhere* with your key from OpenFDA

then install your packages (npm i) and start the local build (npm run start)

### Middles

Because there are strict limitations on free users calling the API (registered users with a key face a *slightly* easier task), I limited the call to 500 total drugs. The page defaults to showing 25 total drugs and their few properties, and pages can be manipulated from the top or bottom of the table. Every column is dual directionally sortable by clicking on the column title. It is also searchable by typing in the search box atop each column. Columns have a default nimimum width but can be altered on the fly. The columns can even be dragged by their header and reordered.

### Endings

This was built in React using Table and a lot more props than I'd like to admit. I'd initially planned on using Axios for the call, but fetching was much simpler on a GET call. Apart from the basic react packages, I used a bit of bootstrap for styling and react-table-hoc-draggable-columns to allow for reordering the columns. There's also styled-components for the overall look of the table.

Ultimately this was a fun project and I'm glad I was able to show off my RT skills!