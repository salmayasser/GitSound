module.exports = require('./env/' + process.env.NODE_ENV + '.js');
/* to load the correct db (and other variables that we'll define later) 
variable based on your environment (be it a development or production) configuration file.
*/
/*
 process.env?
 is a global variable that allows you to access predefined environment variables
  and the most common one is NODE_ENV. 
  To set it in a Windows environment execute the following command in your command prompt:

set NODE_ENV=development
*/