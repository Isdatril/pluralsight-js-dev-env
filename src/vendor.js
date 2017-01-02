/*
This file contains references to the vendor libraries
we're using in this project. this is used by webpack in
the production build only. A seperate bundle for vendor code is
useful since it's unlikely to change as often as the application's code.
So all the libraries we reference here will be written to vendor.js
so they can be chached until one of them change. So basically, this avoids customers having to download
a  huge JS file anytime a line of code changes. The only have to download vendor.js when
a vendor library changes wich should be less requent.
Any files that aren't referenced here will be bundled in to main.js for the produciton build.
*/
/*eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
