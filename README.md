# hotelTable
Hotel Table

A single page appplication to display the information contained in hotels.json 

Behaviours:
* Filters (Name, Stars, TrpRating, UserRating, MinCost)
* Sorting (Distance, Stars, MinCost, TrpRating, UserRating)
* NOTE: TrpRating was missing from the data.

Considerations:
* Performance
* Efficient use of space
* Usability
* Cross-browser
* Responsiveness

Technologies Used:
* Node.JS 
* NPM
* Bower
* Yeoman
* AngularJS
* Bootstrap (CSS only)
* Grunt

Installation:
* Install Node.JS (https://nodejs.org/) and NPM
* From cmd line install bower and grunt: 
* npm install -g bower grunt
* Navigate to folder and install app:
* npm install
* bower install
* You can then use grunt to launch app:
* grunt serve

Approach:
Yeoman used to scaffold application using AngularJS and Bootstrap.  Design is a web page containing a scalable table with a toolbar containing the behaviours. Focus has been on the responsive nature of the design for multiple devices. JSON is loaded from file.

Enhancements:
Due to time constraints I have completed an initial prototype, with scaffolding for unit tests. With more time to spend I would add the following features with a particular emphasis on performance and testing:
* Pagination of results
* Lazy-loading of images
* Complete unit tests
* Fine tuning of UI layout at smallest resolutions
* Add icons for star rating
* Add better UI controls eg. range filter
* Add animations to DOM operations
* Refactor custom filter to remove from controller
* Connect hotel service to real JSON endpoint (REST service)
