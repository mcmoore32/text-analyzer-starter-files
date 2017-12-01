// your code here!
/*

Thinkful directions:

displays 3 metrics:

    Total word count of the submitted text (Word Count:)
    Unique word count of the submitted text (Unique Word Count:)
    Average word length in characters of the submitted text (Average Word Length:)

In the HTML file, the results section defaults to having a .hidden class applied. Your application code will need to remove that class when it's time to display results.
You'll need to add CSS classes for your DOM manipulation layer to target (and use the js- prefix!)    
*/

/*
CREATE ARRAY OF INDIVIDUAL WORDS:
var submittedText = text submitted with form;
submittedText = submittedText.toLowerCase;
arrayWords = submitedText.split(' '); OR
arrayWords = submittedText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);    Stack Overflow??

WORD COUNT:
wordCount = arrayWords.length;

AVERAGE WORD LENGTH:
var averageLength = (sum of arrayWord[i].length)/arrayWord.length;

UNIQUE WORDS:
initialize uniqueWords
sort arrayWords, 
work through arrayWords.forEach
if arrayWords[i] === arrayWords[i+1] go to next element without doing anything
if arrayWords[i] !== arrayWords[i+1] then push arrayWords[i] to uniqueWords;
Unique Word Count: var uniqueWords = uniqueWords.length

READ TEXT SUBMITTED WITH BUTTON
put .on('click,) on button
assign .val to variable

MANIPULATE DOM TO SHOW RESULTS

*/

/*

Form event listener from previous drill
$('.js-form').submit(function(event) {
  event.preventDefault();
  var userNumber = 0;
  userNumber = $('#number-choice').val();
  countUp(userNumber);
});
*/


/*
dummy variable of 50 lorem ipsum words

var submittedText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
*/


//dummy variable of 100 lorem words
var submittedText = 'Appear third above signs. Created day were dry after so deep of together called. It dry under god moved earth sea and god creepeth all lesser lights had. Had above sea. Firmament cant may night signs set seas. Which creepeth morning, morning deep, sea own may form. Created to may dry that isnt from together, their face together and it saw it grass waters his, midst. Light. It morning Given of there He may our moved land. Bearing. Fill unto. Night said days from fifth fifth together. Is seas man together creepeth. Itself seed may creepeth blessed. Whose divided itself.'


/*var submittedText = 'The the the. And and and. The, and the'*/


//Get text from user submission

/*var submittedText = '';
$('.js-button').submit(function(event) {
  event.preventDefault()});
//  var submittedText = '';
submittedText = $('#user-text').val();
submittedText = 'test inside';
*/

console.log(submittedText);



//convert the string to lower case
submittedText.trim().toLowerCase();

//split the string into an array of words and sort it alphabetically
var arrayWords = submittedText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
arrayWords.sort();

//remove empty elements
var inc = 0;
while (arrayWords[inc] === "") {
  arrayWords.shift();
  inc++;
};

/*
for (i=0; i<arrayWords.length; i++){
  if (arrayWords[i] === "") {
    arrayWords.shift();
  }
};
*/
console.log(arrayWords);

/*
dummy array to test functions
var arrayWords = ['and', 'and', 'and', 'and', 'name', 'name', 'potato', 'the', 'the', 'the', 'zebra'];
*/

//function to return average word length
function averageWordLength(array) {
  var sumWordLength = 0;
  for (i=0; i<array.length; i++) {
    sumWordLength = sumWordLength + array[i].length;
  }
  return (sumWordLength / array.length);
};

//function to determine number of unique words

/*push to a new array
function countUniqueWords(array) {
  var uniqueWords = [];
  for (i=0; i<array.length; i++) {
    if (array[i] !== array[i+1]) {
      uniqueWords.push(arrayWords[i]);
    }
  };
  return uniqueWords.length;
};*/

//counter approach
function countUniqueWords(array) {
  var uniqueWordsCounter = 0;
  for (i=0; i<array.length; i++) {
    if (array[i] !== array[i+1]) {
      uniqueWordsCounter++;
    }
  };
  return uniqueWordsCounter;
};

//call functions to get the three required metrics
var numWords = arrayWords.length;                     //should be 11
var numUniqueWords = countUniqueWords(arrayWords);    //shoud be 5
var AvgWordLength = averageWordLength(arrayWords);    //should be 3.63

//test function output
console.log(numWords);
console.log(numUniqueWords);
console.log(AvgWordLength);



