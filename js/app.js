/* eslint-disable no-unused-vars */
'use strict';

var userFirstName = prompt('Welcome to my about me page. My name is Ehsan. What is your name?');

var myColor = prompt('Wohoo'+'\xa0'+userFirstName+'\xa0'+'I believe every names are beautiful. Like diffrent colors. \nGuess what is my favorite color?');

var myColorLower = myColor.toLowerCase();

if(myColorLower == 'green' ){

  alert('Yay! You are right! Green is correct!');
}
else{

  alert('Wrong! I love Green but Thank you for your guess! Lol');
}

var userAge = prompt('I actually love all colors thought. But'+ '\xa0' + myColorLower+' is so lovely too. \nGreat, now let me ask, How old are you?');

var myAge = prompt('Awesome. You must have enough experince in your '+'\xa0'+ userAge + '\xa0' +'\nNow, guess how old I am? Lol');

if(myAge == 36 ){

  alert('You are right!');
}
else{

  alert('Wrong! I am 36 years old!');
}
var userFood = prompt('My favorite food is Pizza!. What is yours? ');

alert('Food is fun. Thanks for sharing it with me. I do actually like'+'\xa0'+userFood+'\xa0'+'as well.');

var mySodaFirst = prompt('Now, Guess what is my favorite soda brand ( Coke / Pepsi )?');

var mySodaLower = mySodaFirst.toLowerCase();

if(mySodaLower == 'pepsi' ){

  alert('You are right! Pepsi is my favorite!');
}
else{

  alert('Wrong! Pepsi is my favorite!');
}

var myOrigin = prompt('Guess what country am I from?');

var myOriginLower = myOrigin.toLowerCase();

if(myOriginLower == 'iran!' ){

  alert('You are right! I am from Iran!');
}
else{

  alert('Wrong! I am from Iran!');
}

var myBootcamp = prompt('Last question. Promise! Guess, What bootcamp am I going to?');

var myBootcampLower = myBootcamp.toLowerCase();

if(myBootcampLower == 'code fellows' ){

  alert('You are right! I am going to Code Fellows! Like you!');
}
else{

  alert('Wrong! I am going to Code Fellows!');
}






// if(userName.toUpperCase() === 'YES'){
//   alert('I like Game Of Thrones, Too');
// } else {
//   alert('What do you mean?!');
// }
