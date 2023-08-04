function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

/**
 * Accepts a string with HTTP request, parses it and returns an object with such properties as
 * "method", "uri", "headers" and "body". It works if a string does not contain headers and/or
 * properties.
 * @param {string} - string with HTTP request;
 * @returns  - object with four properties.
 */
function parseTcpStringAsHttpRequest(string) { 
    
    let receivedMethod = string.match(/[A-Z]+/)[0]
    let receivedUri = string.match(/\/[a-z]+\/[\w\.]+/)[0]

    let regexpForHeaders = /[\w-]+:.+/g
    let receiveHeaders = (regexpForHeaders.test(string)) ? (string.match(/[\w-]+:.+/g).reduce(
        (newObject, currentString) => {
            let bufferArray = currentString.split(':')
            newObject[bufferArray[0].trim()] = bufferArray[1].trim()

            return newObject
        }, {}) ) : null

    let regexpForBody = /^\w+=[^\s=]+=[^\s=]+$/im
    let receiveBody = regexpForBody.test(string) ? string.match(/^\w+=[^\s=]+=[^\s=]+$/im)[0] : null

  return { 
    method: receivedMethod, 
    uri: receivedUri, 
    headers: receiveHeaders || "No headers", 
    body: receiveBody || "No body", 
  }; 
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));
