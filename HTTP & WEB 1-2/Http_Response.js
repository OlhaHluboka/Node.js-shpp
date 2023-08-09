/**
 * This function reads an input string from tester.js. This string contains a http request. 
 * 
 * @returns - string wiht http request 
 */
function readHttpLikeInput() {
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for (; ;) {
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) { break; /* windows */ }
        if (buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

// Obtains a string with http request
let contents = readHttpLikeInput();

/**
 * Outputs a string with http response on console for obtaining by tester program.
 * @param {string} statusCode - code of status of completed actions to http request  
 * @param {string} statusMessage - message about completed actions to http request
 * @param {string} headers - a part of whole string with headers of http response 
 * @param {string} body - a part of whole string with body of http response 
 */
function outputHttpResponse(statusCode, statusMessage, headers, body) {

    console.log(`HTTP/1.1 ${statusCode} ${statusMessage}
${headers}

${body}`)
}

/**
 * Analyses a properties of the object which was created from http request and makes a
 * http response for output it in the tester. In the tester program it will be analyse
 * and output on the screen.
 * @param {string} $method - the method received from http request
 * @param {string} $uri - uri from http request, it defines a list of actions on server 
 * @param {string} $headers - headers from http request transmutes in headers of http response
 * @param {string} $body - body from http request transmutes in body of http response
 */
function processHttpRequest($method, $uri, $headers, $body) {
    let statusCode, statusMessage;

    // There are three conditions for making the http response. 
    if ($method === 'GET' && /\/sum\?nums\=[\d\*,]*/.test($uri)) {

        statusCode = "200"
        statusMessage = "OK"
        $body = calculates($uri) + ''

    } else if ($method === 'GET' && !$uri.startsWith("/sum")) {

        statusCode = "404"
        statusMessage = "Not Found"
        $body = "not found"

    } else if (($method === 'GET' && /\/sum(?!\?nums=)/.test($uri)) || $method !== 'GET') {

        statusCode = "400"
        statusMessage = "Bad Request"
        $body = "bad request"
    }

    /**
     * Calculates a sum of numbers
     * @param {string} $uri - string with http request which contains a list of number
     * @returns - a sum of obtained numbers
     */
    function calculates($uri) {

        let arrayOfNumbers = $uri.match(/[0-9]+/g)

        return arrayOfNumbers.map((element) => +element).reduce((sum, current) => sum + current)
    }

    // Transmuting headers from http request to http response.
    $headers = `Date: ${new Date().toUTCString()}
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: ${$body.length}`;

    // Outputs http response to tester and then on a console.    
    outputHttpResponse(statusCode, statusMessage, $headers, $body)
}

/**
 * Obtains a string with http request, parses it for creating an object which has
 * some properties containing standart parts of http request.
 * 
 * @param {string} $string - string with http request 
 * @returns - an object with standart parts of http request 
 */
function parseTcpStringAsHttpRequest($string) {

    // Creates variables for prorerties of returned object
    let receivedMethod = $string.match(/[A-Z]+/)[0]
    let receivedUri = $string.match(/[\/?]*[a-z]+[\/?]*[\w\.=\d\*,]+/)[0]

    // Creates a regular expression for headers which is an object too 
    let regexpForHeaders = /[\w-]+:.+/g

    // Creates an object with names of headers - there are keys of object,
    // and with properties of headers - there are values of object. 
    let receiveHeaders = (regexpForHeaders.test($string)) ? ($string.match(/[\w-]+:.+/g).reduce(
        (newObject, currentString) => {
            let bufferArray = currentString.split(':')
            newObject[bufferArray[0].trim()] = bufferArray[1].trim()

            return newObject
        }, {})) : null

    // Creates a regular expression for body
    let regexpForBody = /^\w+=[^\s=]+=[^\s=]+$/im
    
    // Creates a variable for body of http request
    let receiveBody = regexpForBody.test($string) ? $string.match(/^\w+=[^\s=]+=[^\s=]+$/im)[0] : null

    // Returns an object of http request
    return {
        method: receivedMethod,
        uri: receivedUri,
        headers: receiveHeaders || "No headers",
        body: receiveBody || "No body",
    };
}

// Obtains an object with http request
http = parseTcpStringAsHttpRequest(contents);

// Creates a string with http response
processHttpRequest(http.method, http.uri, http.headers, http.body);

//node tester.js 3 response.js
