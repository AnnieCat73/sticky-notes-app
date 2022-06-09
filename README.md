# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# My readme notes

I first set up Header and Footer components and then the Notelist component. The NoteList will be the parent for the Note component. The Note component will contain the content or the jsx for each note that is created or added.

I made the noteslist responsive with CSS-Grid using the auto-fit property so that you can have as many notes as possible and they will automatically wrap to the next row when no more space left in the current row no matter which screensize you are on.

In App.js we will use the useState hook to hold the array of notes. As we are working with lists we will store our notes in an array.
The initial state of this array will be object containing the title, text and id of the note. To get the id I used nanoid() and this id will be needed when we delete a note. Nanoid() is a tiny, URL-Friendly Unique String Generator for JavaScript.

Now we have our NoteList stored in state and after this we need to pass the notes variable to the NoteList component (after return in <NoteList />) so that it can render each note. We do this via props in a attribute called notes. We can destructure this prop so we can pass this to the Notelist component.

In NoteList component we use map to loop over our list and render a Note component. This will make things more dynamic. For each note that gets rendered we want to pass in the title, text and id as props to the Note component . The note component will receive this via destructering these props.

Then I created a NoteAdd component for creating a new note and added a button for adding a new note. To save or add a new note we need to capture what the user has typed via the useState hook to save the value inside the AddNote component. 

Then we want to add the note when the user clicks +Note button. I added a function called HandleSaveClick to the button so that the state gets updated with the new note. To do this we pass from the parent, App.js, which allows the child, addNote, to update the state. I called this function addNote. We pass in the text the user has typed. Then pass this function to the NoteList further down in App.js as a prop called handleAddNote={addNote}. We receive it in NoteList component destructed as handleAddNote then add it to the <Addnote> component inside the return. Then in AddNote component we will destructure the same prop again so the handleSaveClick or +addNote button has access to it. Then inside handleSaveClick we will pass in the text of the note which is noteText variable we stored in state.

Then update the state with the new note. In app.js we create a new object in the addNote function. Then we need to create a new array so that we can add the new note at the end of this array, newNotes. In there we add all the previous notes with the spread operator with the new note. Then setNotes updates with the new data.

Deleting a note by creating a deleteNote function in App.js which will accept the id of the note to be deleted. Each note in the array has an id. We use filter function to remove the note that has the same id as the id that is passed in. We pass the deleteNote function down the component tree so that it can be called from the Note component. We created a new prop in the NoteList called handleDeleteNote. This will be destructured and passed to NoteList component then again passed to Note component where the delete button runs this handleDeleteNote function with the id passed in.

Searching for a note by typing in the search bar so that the notes start to filter based on what we type. We add a new component, Search. We capture the value the user has typed with useState variable searchText and pass its searchText function as a prop in the Search component further down in App.js. We call it handleSearchNote which is set to setSearchText. We pass this to Search.js and pass the function to the input via onChange where we get the value the user has typed.  

Then we filter the notes to only show the notes that contain that text. In App.js we go to the NoteList component and filter the notes. So what it will do is to take the current list of notes and filter through those notes and return and only return the ones that include the searchtext.



