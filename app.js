/*

Thinkful directions:

displays 3 metrics:

    Total word count of the submitted text (Word Count:)
    Unique word count of the submitted text (Unique Word Count:)
    Average word length in characters of the submitted text (Average Word Length:)

In the HTML file, the results section defaults to having a .hidden class applied. Your application code will need to remove that class when it's time to display results.
You'll need to add CSS classes for your DOM manipulation layer to target (and use the js- prefix!)    
*/

/*  My algorithm
------------------------------------------------------------
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
-------------------------------------------------------------

-------------------------------------------
Form event listener from previous drill
$('.js-form').submit(function(event) {
  event.preventDefault();
  var userNumber = 0;
  userNumber = $('#number-choice').val();
  countUp(userNumber);
});
-------------------------------------------
*/

/*
//dummy variable of 100 lorem words
var submittedText = 'Appear third above signs. Created day were dry after so deep of together called. It dry under god moved earth sea and god creepeth all lesser lights had. Had above sea. Firmament cant may night signs set seas. Which creepeth morning, morning deep, sea own may form. Created to may dry that isnt from together, their face together and it saw it grass waters his, midst. Light. It morning Given of there He may our moved land. Bearing. Fill unto. Night said days from fifth fifth together. Is seas man together creepeth. Itself seed may creepeth blessed. Whose divided itself.'
*/

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
function countUniqueWords(array) {
  var uniqueWordsCounter = 0;
  for (i=0; i<array.length; i++) {
    if (array[i] !== array[i+1]) {
      uniqueWordsCounter++;
    }
  };
  return uniqueWordsCounter;
};


//captures form on submission - note .submit must be on form element
$('.js-form').submit(function(event) {
  //prevents form from being submitted
  event.preventDefault();
  //defines string variable and sets it to the value of the submitted text
  var subText = $('#user-text').val();
  //Trims outside spaces and converts entire string to lower case
  subText = subText.trim().toLowerCase();
  //Defines new array of words split from submitted string and sorts it
  var arrayWords = subText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
  arrayWords.sort();
  //While loop that removes empty variables from array introduced by punctuation
  var inc = 0;
  while (arrayWords[inc] === "") {
    arrayWords.shift();
    inc++;
  };
  //call functions to get the three required metrics
  var numWords = arrayWords.length;
  var numUniqueWords = countUniqueWords(arrayWords);
  var avgWordLength = averageWordLength(arrayWords).toFixed(2);
  //Removes .hidden class to reveal results section
  $('.text-report').removeClass('hidden');
  //Empties the dd elements of previous runs
  $('dd').empty();
  //Outputs the resutls - span necessary?
  $('<span>'+numWords+'</span>').appendTo('#js-count');
  $('<span>'+numUniqueWords+'</span>').appendTo('#js-unique');
  $('<span>'+avgWordLength+'</span>').appendTo('#js-averge');
});




