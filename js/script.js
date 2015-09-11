// The application should display two cats. Each cat includes
// - the cat's name
// - a picture of the cat
// - text showing the number of clicks

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
    '<div><h1>' + catName + '</h1>' +
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