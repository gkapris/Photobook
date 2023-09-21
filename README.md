Task Description 

Create a photo library that includes an infinite random photo stream, with the ability 

to save photos to your “Favorites” library 

- Design 
  - Below are wireframes, which give a general view of what the pages should look like 
  - The theme (e.g. colors, fonts) you can choose by yourself 
- Header 
  - Consists of 2 buttons and allows you to switch between your “Favorites” library and a random photo stream. 
  - An active view must be highlighted. 
- Photos screen has an infinite scrollable list of photos 
  - Located at / path. 
  - Clicking a photo adds it to Favorites. 
  - When scrolling, new photos should be loaded. Loader icon should be displayed. 
  - Use https://picsum.photos/200/300 to get random images (or any other resource). 
  - Emulate real-world API, when getting photos. Loading new photos should have a random delay of 200-300ms. 
- Favorites 
  - Located at /favorites path 
  - Contains a list of favorite photos (no need for infinite scrolling here, just list of all photos). 
  - Clicking on a photo opens a single photo page. 
  - Favorites list should persist after a page refresh. 
- Single photo page 
- Located at /photos/:id path. 
- Shows just a single full-screen photo, instead of a grid. 
- Should contain the “Remove from favorites” button. 

List view wireframe 

![](Aspose.Words.47f5d950-716c-4f0c-b2d1-36ddab3575b3.001.jpeg)

Details view wireframe 

![](Aspose.Words.47f5d950-716c-4f0c-b2d1-36ddab3575b3.002.jpeg)

Design pattern 



<table><tr><th colspan="1" valign="bottom">Modules </th><th colspan="1" valign="bottom">Components </th><th colspan="1" valign="bottom">Description </th></tr>
<tr><td colspan="1" rowspan="4" valign="top">App. module </td><td colspan="1" valign="top">App.component </td><td colspan="1" valign="top">Initial component. Includes router-outlet and header.component </td></tr>
<tr><td colspan="1" valign="top">Photos.component </td><td colspan="1" valign="top">Component we use to show the infinite photos feature </td></tr>
<tr><td colspan="1" valign="top">App.service </td><td colspan="1" valign="top">Service that we use to make requests and store data that will be used from the components </td></tr>
<tr><td colspan="1" valign="top">App-routing.module </td><td colspan="1" valign="top">Includes all the routes of the app and uses lazy loading for the pages of favorites and details </td></tr>
<tr><td colspan="1" valign="top">Favorites.module </td><td colspan="1" valign="top">Favorites.component </td><td colspan="1">Component with a photo list of the favorite photos. Includes header </td></tr>
<tr><td colspan="1" valign="top">Detail.module </td><td colspan="1" valign="top">Details.component </td><td colspan="1">Show the specified photo that was selected at favorites. Includes header </td></tr>
<tr><td colspan="1" rowspan="5" valign="top">Shared.module </td><td colspan="1" valign="top">Header.component </td><td colspan="1" valign="top">Header that we use to all of the pages to navigate </td></tr>
<tr><td colspan="1" valign="top">Loader.component </td><td colspan="1" valign="top">Loader component that will be used for the subscriptions </td></tr>
<tr><td colspan="1" valign="top">Constants.ts </td><td colspan="1">File that includes the constants for the URL strings of the requests and other params </td></tr>
<tr><td colspan="1" valign="top">Interfeces/I*****.ts </td><td colspan="1" valign="top">Interfaces folder for the interfaces we will use at the app </td></tr>
<tr><td colspan="1" valign="top">Favorites </td><td colspan="1">Folder that contains the favorite photos that were selected and a Json that categorizes them </td></tr>
</table>

Issue cases 

Initialize application 

1. Create a new angular app with the name Photo-book 
   1. Angular routing included 
   1. Select SCSS for styling 
1. Add Angular Material 
1. Add Jest unit testing 
1. Initialize a private repo in GitHub 

Header 

1. Create a new shared module 
1. Generate the header component inside components folder of the module 
1. Responsive container based on width of page 
1. Create 2 buttons “Photos”, “Favorite” 
1. Responsive width and space of the buttons based on the width of the screen 
1. Absolute height and width of the header 
1. Based on path change the style of the button 

Spinner 

1. Create a loader component that will be used when we make requests to APIs 
1. Should have an Observable input field that will be used to activate and deactivate the loader 

Constants 

1. URL[ https://picsum.photos/500 ](https://picsum.photos/500)

NOTE: No specific contract for the API was given so we can’t get specific images by request. After searching the API uses images from unsplash API need account to use specific API. 

2. Interval for the request frequency that will be added to the stream of the list-view data 

Photos 

1. Create a new photos.component inside the app.module 
1. Based on the width of the screen show multiple photos that are inside an absolute container of 200px width/height 
1. The page has an infinite scroll feature 
1. At the init lifecycle make request to URL with an INTERVAL to populate the list-view 
1. During the request show spinner after the last photo 
1. Clicking at a photo saves it to Favorites folder in order to use them later in Favorites 

Favorites 

1. Create the favorites.module 
1. Create the favorites.component 
1. Create a list-view that includes all the images from the favorites folder 
1. Clicking an image navigates to details folder that shows the image 

Details 

1. Create the details.module 
1. Create the details.component 
1. Create a container with 500px width that will include the photo 
1. Based on id provided by the URL fetch the photo from the folder 
1. Show the specified photo in the container 

Routing 

1. Specify the paths for the components based on task description 
1. Set the modules that will be loaded for the paths of “Favorites” and “Details” to utilize lazy loading 
1. Apply the routing to the header buttons 

NOTE: Unit testing will be applied with at least 40% coverage 
