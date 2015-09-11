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

// Cat Class
var Cat = function (stringName, stringUrl){
  this.name = stringName;
  this.countId = stringName + 'Counter';
  this.src = stringUrl;
  this.count = 0;
};

Cat.prototype.catBox = function () {
  // Gather definitions
  var catName = this.name;
  var catCountId = this.countId;
  var catSrc = this.src;

  // Compile HTML
  var catContainer =
    '<div class="catbox"><h1>' + catName + '</h1>' +
    '<img id="' + catName + '" class="catpic"' +
    'src="' + catSrc + '">' +
    '<p id="' + catCountId + '"></p></div>';
  // Append HTML
  $('#container').append(catContainer);
};

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


/*
//////////////////
var cats = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = cat;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            alert(catCopy);
        };
    })(cat));

    document.body.appendChild(elem);
};



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