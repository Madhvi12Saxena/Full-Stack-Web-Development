const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitecture = 'Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chromes V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a clients browser that obtains all the applications resources over the internet.';

// Write the information to a new file
fs.writeFile('nodejs_architecture.txt', nodejsArchitecture, (err) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
  } else {
    console.log('The information about Node.js architecture has been added to nodejs_architecture.txt');
  }
});
