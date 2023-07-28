/**
 * Receives a string in CVS format, parses it and returnes a function that receives any text
 * and replaces names of cities inside to special strings in view "name of city (`number` place
 * in TOP-10 best cities of Ukraine, population is `number` people.)"
 * 
 * @param {string} - string in csv-format
 * 
 * @returns {Function} - function that receives any text.
 */

// For only 10 cities it can append additional string in upline pointed format in comments.
const Top10 = 10

function changeSubStrings(stringCSV) {
    const data = stringCSV
        .split('\n') // split text of '\n' to new array of strings
        .map((str) => str.replace('#', '')) // replace in each string redundunt sign '#'
        .filter(str => str.length > 0) // create an array with valid strings in
        .map((element) => {  // We recreate an array to an object 
            let array = element.split(',') // split the string of comma and receive an array
            return {                       // each element of array is used like a property of new object
                X: array[0],
                Y: array[1],
                name: array[2],
                population: array[3]
            }
        })
        // Makes a descending list with population mark 
        .sort((comparedOne, comparedTwo) => +comparedTwo.population - +comparedOne.population)
        .slice(0, Top10) // Cut from all array of objects only ten objects
        // Creates a new object from exising array of objects. Its properties are cities from list of ten objects.
        .reduce(
            (newObj, currentObj, currentIndex) => {
                newObj[currentObj.name] = {
                    population: currentObj.population,
                    rating: currentIndex + 1
                }
                return newObj

            }, {})

    // Arrow function receives text in string format and replaces inside substrings with names of cities
    // that includes in Top-10 list to extentional substrings which contain information about a place of
    // this city in Top-10 list and about it population.  
    return (someInputText) => {

        const arrayOfCities = Object.keys(data) // makes an array of keys of our object
        const stringOfCities = arrayOfCities.join('|') // unites all elements of array in string with a specified separator
        const regExp = new RegExp(`${stringOfCities}`, "gi") // makes a regexp for searching in the inputted text

        // Replacing finded words (cities names) to new strings 
        return someInputText.replace(regExp, (city) => `${city} (${data[city].rating} місто в ТОП-10 самих найкращих міст України, населення ${data[city].population} чоловік.)`)

    }
}

/* TESTING */

const text = `Вінниця  — місто в Україні на берегах Південного Бугу, 
адміністративний центр Вінницької області, 
Вінницького району, значний історичний осередок східного Поділля, центр Вінницької агломерації.
Отже я дуже люблю Алушту. Алушта - відомий курорт України. На жаль, сьогодні місто знаходиться
під окупацієй штучною країною з ядерною шишкою.
Бердянск і Бердичів я постійно плутаю-)`;

const dataCSV = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)`;


let changeTextFunc = changeSubStrings(dataCSV);

console.log(changeTextFunc(text));
