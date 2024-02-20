// JS doesn't throw many errors. use strict mode to get more useful errors.
'use strict';

// reference to button element
const switcher = document.querySelector('.btn');

// Add an event handler
// toggle method modifies the <body> element's class attribute.
// this method automatically adds or removes the light and dark theme classes.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // label for the button needs to be updated to show the correct theme
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    // create hidden message that can be seen in Developer tools
    console.log('current class name: ' + className);
});