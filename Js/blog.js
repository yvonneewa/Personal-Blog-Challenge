//display blog posts
// blog title
// blog content
// posted by
// take info from form and put it into local storage
// create 4  elements- one for each blog post
//add element - text.content
//apenend the element
// hardcode result to blog.html - (use css)put class with the elements in html to style it - go to javascript and add that class for every object
//hard code first -then come back to the array-create - the elememts just like you had it hardcoded-- take the hard code out- run the javascript- and your good
//when i take out the hard code am i taking out the hard html div elemets- yes because thats what your going to create when you create an element - keep a copy of  your hard code becuase your gonna want to reference it - basically hard code so you know its gonna look good, you know what kind of classes and elements you need- than try and figure out how to recreate it in javascript so you dont need any html
//all your html should be everything thats already on there plus light and dark mode



let switch = document.querySelector('#switch');
let blogList = document.querySelector('#blogList');
let title = document.querySelector('#title');
let submit= document.querySelector('#dsubmit'); 

document.getElementById("darkMode").onclick = function(){
    darkMode.addEventListener('click', function() { 
        console.log('Button was clicked'); 
      }); 
  };


  document.getElementById("LightMode").onclick = function(){
    lightMode.addEventListener('click', function() { 
        console.log('Button was clicked'); 
      }); 
  };



submit.getElementById("submit").onclick = function(){
    submit.addEventListener('click', function() { 
        console.log('Button was clicked'); 
      }); 
  };




const userArray = [title,]
localStorage.setItem('user', JSON.stringify(userArray));

