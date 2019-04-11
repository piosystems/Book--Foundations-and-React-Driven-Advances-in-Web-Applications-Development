/* ES5 function style and var
var log = function(output){
    document.getElementById("output").innerHTML = output;
};
*/
//ES6 const and Arrow function
const log = (output) => {
    document.getElementById("output").innerHTML = output;
};

/* ES5 use of var
export var appName = "Chapter 10 Code Illustrations";
*/
//Use of const
export const appName = "Chapter 10 Code Illustrations";

/* ES5 function style
export var dummyFunction = function(){
    return "I am a dummy function";
}
*/
//ES6 with const and Arrow function
export const dummyFunction = () => {
    return "I am a dummy function";
}

/* ES5 function style and lexical scope style
export var weatherTag = function(string, temperature){
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    var substring0 = string[0];
    var substring1 = string[1];
    var weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26){
        weatherCondition = "hot day"
    }else{
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}
*/
//ES6 Arrow function and lexical scoping for weatherTag()
export const weatherTag = (string, temperature) =>{
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    let substring0 = string[0];
    let substring1 = string[1];
    let weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26){
        weatherCondition = "hot!"
    }else{
        weatherCondition = "cool!"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}

//Use genericFunction() for multiple illustrations below so as to avoid rewriting index.js imports:

//Destructuring assignment. Array example
/*
export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}`
}
*/

//Destructuring array with spread
/*
export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++']
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
}
*/

//Destructuring object literal example 1
/*
export const genericFunction = () => {
    //declare an object literal
    let personalInformation = {
        firstName : 'Pius',
        lastName : 'Onobhayedo',
        gender : 'Male',
        religion : 'Christianity (Catholic)',
        fathersName : 'John',
        mothersName : 'Patricia'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let {firstName, lastName, ...otherPersonalInfo} = personalInformation;
    
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
}
*/

//Destructuring object literal example 2 (nested objects)
/*
export const genericFunction = () => {
    //declare an object literal with nested objects
    let biodata = {
        personalInformation : {
            firstName : 'Pius',
            lastName : 'Onobhayedo',
            gender : 'Male',
            religion : 'Christianity (Catholic)',
            fathersName : 'John',
            mothersName : 'Patricia'
        },
        education : {
            highestQualificationObtained : 'PhD',
            institution : 'University of Navarra'
        },
        occupation : 'University Lecturer',
        skills : ['Programming', 'Teaching', 'Innovation','Talent management'],
        interestsAndHobbies : ['Tennis', 'Soccer Leagues', 'Tech Innovation News']
    };
    
    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation.
    let {personalInformation : {firstName, lastName}, occupation} = biodata;//makes firstName, lastName and occupation directly available as variables within our function.

    //deconstruct personalInformation and then the rest using the spread operator
    let {personalInformation, ...otherBiodata} = biodata;//makes personalInformation object directly available as a variable. The rest (using Spread operator) are made available as part of an object named otherBiodata

    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: <br/><br/>
    Gender: ${personalInformation.gender}<br/>
    Religion: ${personalInformation.religion}<br/>
    Skills: ${otherBiodata.skills}<br/>
    Interests and Hobbies: ${otherBiodata.interestsAndHobbies}<br/>
    Education: Highest qualification obtained is ${biodata.education.highestQualificationObtained} from ${biodata.education.institution}<br/>`;
}
*/

//Default and Rest parameter example 1
/*
export const genericFunction = (a, b=1) => {
    //This function multiplies any two numbers
    //if only one argument is sent, b will default to 1.
    return (a * b);
}
*/

//Default and Rest parameter example 2 - Pre-ES6 approach
/*
function multiplier(){
    var product = 1;
    if (arguments.length < 2){
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
*/

//Default and Rest parameter example 2 - ES6 approach
/*
export const genericFunction = (...numbers) => {
    var product = 1;
    if (numbers.length < 2){
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    //    product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
        product = product * number;
    }
    return product;
}
*/

//Rest example 3 - combination with specific parameters
export const genericFunction = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.

    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => {
        return {'x': x, 'y' : (m*x) + c};
    })

    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates){
        let xy = `(${coordinate.x},${coordinate.y})` 
        output+=xy;
    }
   //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
   //coordinates.forEach((coordinate)=>{
   //     let xy = `(${coordinate.x},${coordinate.y})`;
   //     output+=xy;
    //})
    return output;
}

//class declaration example 1
/*
export class Person{
    constructor(firstName, lastName, gender, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }
};
*/

//Accessing object properties
//Create a function that will capitalize the first letter of a string.
const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
}

export class Person{
    constructor(firstName, lastName, gender, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height
    }

    getFirstName(){
        return toTitleCase(this.firstName)
    }
};

//static class methods
export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b);
    }
}

//Inheritance
export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
}


export default log;


