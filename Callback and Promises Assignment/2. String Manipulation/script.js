function manipulatestring(inputString, callback) {
    const manipulatedstring = inputString.toUpperCase();

    callback(manipulatedstring);
}

function logString(manipulatedstring) {
    console.log(`The manipulated string is: ${manipulatedstring}`);
}

manipulatestring("hello, world!", logString);