// Visuals
//
// The application should display
// - a list of at least 5 cats, listed by name
// - an area to display the selected cat
//
// In the cat display area, the following should be displayed
// - the cat's name
// - a picture of the cat
// - text showing the number of clicks
// - The specifics of the layout do not matter, so style it however
// you'd like.
//
// Interaction
//
// When a cat name is clicked in the list, the cat display area
// should update to show the data for the selected cat.
// The number of clicks in the cat area should be unique to each
// cat, and should increment when the cat's picture is clicked.

//////////////////
// first display all cats with their individual clicker counts
// then hide all, display when header name clicked.

// Cat Class
var Cat = function (stringName, stringUrl){
  this.name = stringName;
  this.countId = stringName + 'Counter';
  this.src = stringUrl;
  this.count = 0;
};

var cats = [1,2,3,4,5];
  // Create Cats
  cats[0] = new Cat('Buttons', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
  cats[1] = new Cat('Chewie', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');
  cats[2] = new Cat('Pumpkin', 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg');
  cats[3] = new Cat('Metoo', 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg');
  cats[4] = new Cat('Tootsie', 'http://vignette3.wikia.nocookie.net/warriorsfanfic/images/f/f1/BrownCat1.jpg/revision/latest?cb=20140613110216');

// Declare for loop vars
//

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the number
    // Build without jQuery first
    var elem = document.createElement('div');
      elem.id = cat.name;
    var header = document.createElement('h1');
      header.textContent = cat.name;
    var img = document.createElement('img');
      img.src = cat.src;
    var counter = document.createElement('p');
      counter.textContent = 'points: ';

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            console.log(catCopy);
            catCopy.count++;
            console.log(catCopy.count);
        };
    })(cat));

    document.getElementById('container').appendChild(elem);
    document.getElementById(elem.id).appendChild(header);
    document.getElementById(elem.id).appendChild(counter);
    document.getElementById(elem.id).appendChild(img);
}

/*
      // Compile HTML
      var catContainer =
        '<div class="catbox"><h1>' + cat.name + '</h1>' +
        '<img id="' + cat.name + '" class="catpic"' +
        'src="' + cat.src + '">' +
        '<p id="' + cat.countId + '"></p></div>';
      // Append HTML
      $('#container').append(catContainer);

// Clicker Function
Cat.prototype.clicker = function () {
  var hitId = '#' + this.name;
  var hitCountId = '#' + this.countId;

  // Listen for clicks and increase count
  $(hitId).click(function (e) {
    console.log(e.target.id);
    buttons.count++;
    $(hitCountId).text(buttons.count);
  });
};

// Create Cats
var buttons = new Cat('Buttons', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
var chewie = new Cat('Chewie', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');

buttons.catBox();
buttons.clicker();
chewie.catBox();
chewie.clicker();




/////// e.target.id name solution, didn't work because name.count
// doesnt' mean buttons.count...

  // Listen for clicks and increase count
  $(hitId).click(function (e) {
    console.log(e.target.id);
    var name = e.target.id.slice(0,1).toLowerCase() +
      e.target.id.slice(1);
      console.log(name);
    name.count++;
    $(hitCountId).text(name.count);
  });
*/