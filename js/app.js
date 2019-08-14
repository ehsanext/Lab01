/* eslint-disable no-unused-vars */
'use strict';

var userFirstName = prompt('Welcome to my about me page. My name is Ehsan. What is your name?');

var myColor = prompt('Welcome'+'\xa0'+userFirstName+'\xa0'+'I believe every names are beautiful. Like diffrent colors. \nDo you think my favorite coloe is Green?');


if(myColor.toLocaleLowerCase() === 'yes' || myColor.toUpperCase() ===  'YES' || myColor.toLowerCase() === 'y' || myColor.toUpperCase() === 'Y'){

  alert('Yay! You are right! Green is correct!');
}
else{

  alert('Wrong! I love Green but Thank you for your guess! Lol');
}

var userAge = prompt('I actually love all colors thought. \nGreat, now let me ask, How old are you?');

var userHappy = prompt('Awesome. You must have enough experince in your '+'\xa0'+ userAge + '\xa0' +'\nI beleive we always should be happy and make people happy. Do you think like me?');

if(userHappy.toLocaleLowerCase() === 'yes' || userHappy.toUpperCase() ===  'YES' || userHappy.toLowerCase() === 'y' || userHappy.toUpperCase() === 'Y' ){

  alert('You are right! We always should try to make people happy');
}

else{

  alert(':( Why?');
}

var userFood = prompt('My favorite food is Pizza!. What is yours? ');

alert('Food is fun. Thanks for sharing it with me. I do actually like'+'\xa0'+userFood+'\xa0'+'as well.');

var mySoda = prompt('I love to have Pepsi with my Pizza? Do you like Pepsi?');


if(mySoda.toLocaleLowerCase() === 'yes' || mySoda.toUpperCase() ===  'YES' || mySoda.toLowerCase() === 'y' || mySoda.toUpperCase() === 'Y' ){

  alert('Yay! Pepsi is great!');
}
else{

  alert('You should think more about it! Lol');
}

var myFries = prompt('Wait, I think I can have fries with my Pizza too! Can you eat this much?');

if(myFries.toLocaleLowerCase() === 'yes' || myFries.toUpperCase() ===  'YES' || myFries.toLowerCase() === 'y' || myFries.toUpperCase() === 'Y' ){

  alert('I was kidding! How you eat fries with you pizza???!!!!');
}
else{

  alert('I was kidding! I can not have it with my Pizza too!');
}

var myLife = prompt('Last question. Promise! I think life is short? Do you think like me?');


if(myLife.toLocaleLowerCase() === 'yes' || myLife.toUpperCase() ===  'YES' || myLife.toLowerCase() === 'y' || myLife.toUpperCase() === 'Y'){

  alert('You are right! Life is short! Be happy');
}
else{

  alert('I still think life is short! :D');
}
