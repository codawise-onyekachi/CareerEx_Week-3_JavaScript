//alert("Welcome to CareerEx Platform")
console.log("Welcome to JavaScript Class") // welcome message

//variables
let firstName = "Hope"  //String variable to store fist name

let lastName = "Onyekachi"  //String variable to store last nName

let age = 41   //Number variable to store age

const Nationality = "Nigeria" //String variable to store nationality

const message1 = `My name is ${firstName} ${lastName}, I am ${age} years old, and I am from ${Nationality}` // using concatination to combining the variables into a message
console.log(message1) //Display the content of message1 


//Favourite Quote
const favouriteQuote = "If you think you can't, then you can't"  //String variable to store favourite Qoute

console.log(favouriteQuote.toUpperCase())   //use toUpperCase() method to change the entire text to upper case
console.log(favouriteQuote.toLowerCase())   //use toLowerCase() method to change the entire text to lower case


//Rearrange a word in reverse order
const myWord = "JavaScript";   //String variable to store the word "JavaScript"
const reversedWord = myWord.split("").reverse().join("");  //using split()method to divide the given word into an array of individual characters/elements; reverse() method to reverse  the order of the elements within the array, and join() method to join all the elements of the array back to a single word.
console.log(reversedWord); //Display the content of reversedWord


//Price of three items
const priceApple = 300  //Number variable to store the price of apple
const priceOrange = 200  //Number variable to store the price of orange
const pricePear = 500    //Number variable to store the price of pear

const sum = priceApple + priceOrange + pricePear   //Calculating the sum of the prices of all three items, and storing it in a variable called "sum"
console.log(`The sum of all the items is ${sum}`)  //Display the content of sum with a message


//Average of 5 test scores
const mathsScore = 78        //Number variable to store the maths score
const englishScore = 86      //Number variable to store the english score
const biologyScore = 79      //Number variable to store the biology score
const agricScore = 80       //Number variable to store the agric score
const physicsScore = 91     //Number variable to store the physics score

const averageScore = ((mathsScore + englishScore + biologyScore + agricScore + physicsScore) / 5)   // calculating the average of the 5 test scores and storing it in a variable called "averageScore"
console.log(`Your average test score is ${averageScore}`)   //Display the content of averageScore with a message


//Array of Favourite Food
const arrayOfMyFavouriteFood = ["Fried Plantain", "Egusi and Pounded Yam", "Fried Rice and Chicken", "Beans and Plantain", "Spaghetti and egg"]   //Array variable to store list of favourite food

console.log(arrayOfMyFavouriteFood)  //Display the content of arrayOfFavouriteFood

console.log(`The first item on the list is ${arrayOfMyFavouriteFood[0]}`)  //using array index 0 to display the first item in the list
console.log(`The last item on the list is ${arrayOfMyFavouriteFood[4]}`)   //using array index 4 to display the last item in the list


//add items to the Array
arrayOfMyFavouriteFood.unshift("Egg Sauce and Yam")   // usinh unshift() method to add item to the beginning of the array list
arrayOfMyFavouriteFood.push("Rice and Beans")         //using push() method to add item to the end of the array list

console.log(arrayOfMyFavouriteFood)        //display the new list of the array


//Create 3 arrays

const jssOne = ["Ammara Joshua", "Nathan Ojo", "Divine Paul", "Precious John", "Jennel Bature", "Purity Onyekachi", "Jen Anniel", "Testimoney Abah", "Dominion Eze", "liberty James"]    //Array variable to store list of names of jss One students

console.log(jssOne)   //Display the content of jssOne

const jssTwo = ["Ekene Chukwu", "Moses Ade", "Mike Eke", "Moses achu", "Mercy Israel", "Treasure Osondu", "Timothy Amadi", "Jesica babatunde", "Emmanuel Tesoo", "Edet Iyan"]             //Array variable to store list of names of jss Two students

console.log(jssTwo)   //Display the content of jssTwo

const jssThree = ["Uche Ohi", "Ibrahim musa", "Oyidamola Adefesobi", "Glory Emmanuel", "Praise wonders", "Raphel Chukwubikem", "King Okeke", "Gambo Ibrahim", "Chimerugo Okechukwu", "Dorcas Uzoma"]      //Array variable to store list of names of jss Three students

console.log(jssThree)       //Display the content of jssThree




























// const isFinished = false

// const isRead = true

// //undefined variable



// // let successful

// // successful = true  


// // strings methods and properties
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.includes("H"))
// console.log(firstName.includes("z"))
// console.log(firstName.length)

// console.log(firstName.trim())

// //Numbers
// const a = 4

// const b = 3

// const c = 2

// const answre = a + b + c

// const answre2 = a + b + c ** a

// const circleArea = Math.PI*3**2

// console.log(answre)

// console.log(answre2)

// console.log(circleArea)

// //concatination

// const message = `Welcome ${firstName} ${lastName}, good to know that you are ${age} years old`
// console.log(message)

// const message2 = "I am " + firstName +" " + lastName + " I am " + age +" years old"
// console.log(message2)

// //Arrays

// const jssOne = ["Samson", "David", "Daniel"]

// const numbersArray = [2, 4, 5, 3.6,56, 798]

// const mixedArray = ["July", 45, "Paul", 4.7, true, "yyy"]

// //Array Methods and Properties
// console.log(jssOne.includes("mary"))
// console.log(jssOne.length)
// console.log(jssOne.concat(mixedArray))

// jssOne.push("Justice")
// jssOne.unshift("Gambo")
// //jssOne.shift()
// console.log(jssOne)

// jssOne.pop()
// console.log(jssOne)
// console.log(jssOne[0])

// const emptyArray = [ ]
// emptyArray.push("apple")
// emptyArray.push("orange", "pear", "bananna")

// console.log(emptyArray)
