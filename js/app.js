/* eslint-disable no-unused-vars */
'use strict';

var userFirstName = prompt('Welcome to my about me page. My name is Ehsan. What is your name?');
console.log('the user name is, ' + userFirstName);

function colorFun(){
  var myColor = prompt('Welcome' + ' ' + userFirstName + ' ' + 'I believe every names are beautiful. Like diffrent colors. \nDo you think my favorite color is Green?');
  console.log('the user answer to color question is, ' + myColor);
  
  myColor = myColor.toLowerCase();
  
  if (myColor === 'yes' || myColor === 'y') {
  
    alert('Yay! You are right! Green is correct!');
  } else {
    alert('Wrong! I love Green but Thank you for your guess! Lol');
  }
}
colorFun();

function ageFun(){
  var userAge = prompt('I actually love all colors thought. \nGreat, now let me ask, How old are you?');
  
  console.log('the user is, ' + userAge + 'years old');
  
  var userHappy = prompt('Awesome. You must have enough experince in your ' + ' ' + userAge + '.' + '\nI beleive we always should be happy and make people happy. Do you think like me?');
  
  console.log('the user answer to happiness question is, ' + userHappy);
  
  userHappy = userHappy.toLowerCase();
  
  if (userHappy === 'yes' || userHappy === 'y') {
  
    alert('You are right! We always should try to make people happy');
  } else {
    alert(':( Why?');
  }
}
ageFun();

function foodFun(){
  var userFood = prompt('My favorite food is Pizza!. What is yours? ');
  
  console.log('the user favorite foos is, ' + userFood);
  
  alert('Food is fun. Thanks for sharing it with me. I do actually like ' + userFood + ' ' + 'as well.');
}
foodFun();

function sodaFun(){
  var mySoda = prompt('I love to have Pepsi with my Pizza? Do you like Pepsi?');
  
  console.log('the user answer to soda question is, ' + mySoda);
  
  mySoda = mySoda.toLowerCase();
  
  if (mySoda === 'yes' || mySoda === 'y') {
    alert('Yay! Pepsi is great!');
  } else {
    alert('You should think more about it! Lol');
  }
}
sodaFun();

function friesFun(){
  var myFries = prompt('Wait, I think I can have fries with my Pizza too! Can you eat this much?');
  
  console.log('the user answer to fries question is, ' + myFries);
  
  myFries = myFries.toLowerCase();
  
  if (myFries === 'yes' || myFries === 'y') {
  
    alert('I was kidding! How you can eat fries with your pizza???!!!!');
  }
  else {
  
    alert('I was kidding! I can not have it with my Pizza too!');
  }
}

function lifeFun(){
  var myLife = prompt('I think life is short? Do you think like me?');
  
  console.log('the user answer to life question is, ' + myLife);
  
  myLife = myLife.toLowerCase();
  
  
  if (myLife === 'yes' || myLife === 'y') {
  
    alert('You are right! Life is short! Be happy');
  }
  else {
  
    alert('I still think life is short! :D');
  }
}
lifeFun();

function numberFun(){
  var myFavNumber = 125;
  
  for (var i = 0; i < 4; i++) {
    var userFavNumber = prompt(' Guess how many pizza I\'ve ever had in my life?');
    userFavNumber = parseInt(userFavNumber);
    //console.log('the user answer to Fav Number is, ' + userFavNumber);
  
    if (userFavNumber === myFavNumber) {
      alert('Yay! You are right!');
      break;
    } else if (userFavNumber < myFavNumber) {
      alert('Too low!');
    } else if (userFavNumber > myFavNumber) {
      alert('Too High!');
    }
  }
  
  alert('I\'ve had 125 pizza till yesterday! Lol ');
}
numberFun();


function travelFun(){
  var myTravelList = ['dubai', 'toronto', 'vancouver', 'cayman islands', 'montego bay'];
  var userScore = 0;
  //var userScore = parseInt(userScore);
  
  for (var j = 0; j < 6; j++) {
    var userTravelGuess = prompt('What cities do you think I\'ve travelled in my life?');
  
    //normalizing the data
    userTravelGuess = userTravelGuess.toLowerCase();
    var isCorrect = false;
  
    for (var k = 0; k < myTravelList.length; k++) {
      if (userTravelGuess === myTravelList[k]) {
        isCorrect = true;
      }
    }
  
    if (isCorrect) {
      alert('You got it!');
      userScore++;
      break;
    }
    else {
      alert('Lets try it again');
    }
  }
  alert('You score is: ' + userScore + '\xa0' + 'out of 5');
}
travelFun();
