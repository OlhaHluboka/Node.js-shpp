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
    
    // Creats parts of http response
    let statusCode, statusMessage, headers, body;

    // There are three conditions for making the http response. 
    if ($method === 'POST' && $uri === '/api/checkLoginAndPassword'
        && $headers["Content-Type"] === 'application/x-www-form-urlencoded') {

        if (checkingPassword($body)) { // If the pair login:password exists

            statusCode = '200'
            statusMessage = 'OK'
            body = '<h1 style="color:green">FOUND</h1>'

        } else {

            statusCode = '500'
            statusMessage = 'Internal Server Error'
            body = 'The pair of login:password is not found.'
        }

    } else if ($method === 'POST' && $uri !== '/api/checkLoginAndPassword') {

        statusCode = "404"
        statusMessage = "Not Found"
        body = "not found"

    } else if ($method === 'POST' && $headers["Content-Type"] !== 'application/x-www-form-urlencoded' 
                || $method !== 'POST') {

        statusCode = "400"
        statusMessage = "Bad Request"
        body = "bad request"
    }

    /**
     * Checks if the pair login:password exists.
     * @param {string} $uri - string with http request which contains a body of http request
     * @returns - true if it exists or false
     */
    function checkingPassword($body) {
        
        // Variables for extracting login and password srom the http requests`s body
        let array, login, password

        // Forms the array of strings from body
        array = $body.replace('&', '=').split('=')

        login = array[1]
        password = array[3]

        // Lambda-function for the control of right pair existing 
        let ifExists = (name, parol) => {
            
            // Reads a database with existed pairs of login:password
            let fs = require("fs")
            let databaseOfPasswords = fs.readFileSync('passwords.txt',
                { encoding: 'utf8', flag: 'r' })

            let nameParol = name + ':' + parol

            // Checks in database string if it includes seeked pair
            return databaseOfPasswords.includes(nameParol)

        }

        return ifExists(login, password)
    }

    // Creates headers of http response.
    headers = `Date: ${new Date().toUTCString()}
Server: Apache/2.2.14 (Win32)
Content-Length: ${body.length}
Connection: Closed
Content-Type: text/html; charset=utf-8`

    // Outputs http response to tester and then on a console.    
    outputHttpResponse(statusCode, statusMessage, headers, body)
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

//node tester.js 4 forms.js
