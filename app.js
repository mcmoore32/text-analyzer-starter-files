// your code here!
/*
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
*/


//dummy variable of 50 lorem ipsum words
var submittedText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'


//var submittedText = 'The the the. And and and. The, and the'

//convert the string to lower case
submittedText = submittedText.trim().toLowerCase();

//split the string into an array of word and sort it alphabetically
var arrayWords = submittedText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
arrayWords.sort();

//remove undefined elements
for (i=0; i<arrayWords.length; i++){
  if (arrayWords[i] === "") {
    arrayWords.shift();
  }
};

console.log(arrayWords);



//array to test functions
//var arrayWords = ['and', 'and', 'and', 'and', 'name', 'name', 'potato', 'the', 'the', 'the', 'zebra'];

//function to return average word length
function averageWordLength(array) {
  var sumWordLength = 0;
  for (i=0; i<array.length; i++) {
    sumWordLength = sumWordLength + array[i].length;
  }
  return (sumWordLength / array.length);
};

//function to determine number of unique words
function countUniqueWords(array) {
  var uniqueWords = [];
  for (i=0; i<array.length; i++) {
    if (array[i] !== array[i+1]) {
      uniqueWords.push(arrayWords[i]);
    }
  };
  return uniqueWords.length;
};

//call functions to get the three required metrics
var numWords = arrayWords.length;                     //should be 11
var numUniqueWords = countUniqueWords(arrayWords);    //shoud be 5
var AvgWordLength = averageWordLength(arrayWords);    //should be 3.63

//test function output
console.log(numWords);
console.log(numUniqueWords);
console.log(AvgWordLength);



