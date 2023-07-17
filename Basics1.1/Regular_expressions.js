/**
 * There is an object - collection of methods for validations fields with regular expressions.  
 * Object has such propertues as validateEmail, validatePhone, validatePassword.
 */
let Validator = {}

    /**
     * 
     * Checks it out if an inputted string is a validate e-mail address. 
     * Conditions for checking:
     * - main format of e-mail address: firstpart@secondpart.end
     * - firstpart can contain letters, digits, dot, hyphen, plus; the size of firstpart is from 2 to 20 symbols
     * - firstpart must not begin from dot, hyphen or plus
     * - secondpart can contain letters, digits or special symbols .!$%&’*+/=?^_- Size 1 -15 symbols
     * - end is a required two level domain that complects from 1 - 5 letters 
     * 
     * @param {string} email - input string with e-mail address;
     * 
     * @returns - true if inputted string is right;
     */

    Validator.validateEmail = (email) => {

        let regexEmail = /^[0-9a-z][0-9a-z.+-]{1,19}@[\w.!$%&'*+/=?^-]{1,15}\.[a-z]{1,5}$/i;    

        
        return regexEmail.test(email); 
    }
    
    /**
     * 
     * Checks it out if an inputted string is a validate phone number. 
     * Conditions for checking:
     * - main format of phone number: +38 (099) 567 8901 
     * - code of the country is unnecessary
     * - brackets around the operator code (099) is unnecessarry too
     * - hyphen and space allows in any place
     * - maximum length of inputted string is 25 symbols (can check apart from regular expression) 
     * 
     * @param {string} phone - input string with a phone number;
     * 
     * @returns - true if inputted string is right;
     */

    Validator.validatePhone = (phone) => {

        if (phone.length > 25) {

            console.log ("Enter phone number less then 25 symbol length!!!");

            return false;
        }


        let regexPhone = /^(\+38)?[\s-]*\(?([\s-]*\d[\s-]*){3}\)?([\s-]*\d[\s-]*){7}$/;

        return regexPhone.test(phone);

    }

    
    /**
     * 
     * Checks it out if an inputted string is a validate password. 
     * Conditions for checking:
     * - contains 8 or more symbols 
     * - can contain letters, digits or "_"
     * - must contains at least one capital letter, one little letter and one digit;
     * 
     * @param {string} password - input string with a password;
     * 
     * @returns - true if inputted string is right;
     */
    Validator.validatePassword = (password) => {

        let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\_\d]{8,}$/;

        return regexPassword.test(password);

    }

/**
* 
* The function for test casses if it wrote rigthly.
* 
* @param {Object} Variant - a property of Validator
* @param {string} testCase - an inputted string;  
*/
function testValidation(Variant, testCase) {

    
        if (Variant(testCase)) {

            console.log(testCase + " -  test passed!")
        } else {

            console.log(testCase + " -  TEST NOT PASSED!!!")
        }
     

}

/**           Testing  of Validator                                                                                 */

console.log("Testing E-MAIL ADDRESSES" + '\n');

// An array with inputted strings of e-mail addresses: three are valid and five are not valid.

let emailCases = ["fi@secondpart.end", "first-part@.se=cond%p.art.end", "first.part@se=cond%part.r",
                  "f@secondart.end,", "first-part@.se=cond@part.end", "-firstpart@.se=cond%.enddeded", 
                  "firs_tpart@.se.en", "firstpart@.se.enddeded"];

for (let i = 0; i < emailCases.length; i++) {

    testValidation (Validator.validateEmail, emailCases[i]);
}       

console.log('\n'+ "Testing PHONE CASES" + '\n');

// An array with inputted strings of phone numbers: four are valid and four are not valid.

let validPhoneCases = ["+38 (099) 567 8901", "+38 099 5 6 7 8 9  01", "(09-9) 567-890-1", "--  (099) 567 890-1",
                       "+38 (099) 567 8901 0", "+38 099 a0000000", "+38 (0989) 567 8901", "+48 (0989) 567 8901"];

for (let i = 0; i < validPhoneCases.length; i++) {

     testValidation (Validator.validatePhone, validPhoneCases[i]);
} 

console.log('\n'+ "Testing PASSWORD CASES" + '\n');

// An array with inputted strings of passwords: two are valid and two are not valid.

let passwordCases = ["C00l_Pass", "SupperPas1", "Cool_pass", "C00l"];

for (let i = 0; i < passwordCases.length; i++) {

    testValidation (Validator.validatePassword, passwordCases[i]);
} 
