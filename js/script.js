// The application should display two cats. Each cat includes
// - the cat's name
// - a picture of the cat
// - text showing the number of clicks

//before you make the factory, find the pattern

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
var buttons = new Cat('Buttons', 'https://c2.staticflickr.com/2/1126/625069434_db86b67df8_z.jpg');
var chewie = new Cat('Chewie', 'https://c1.staticflickr.com/3/2298/2290467335_89067c7b51_z.jpg');

buttons.catBox();
buttons.clicker();
chewie.catBox();
chewie.clicker();

/*
 * The PicCounter Class
 */
 /*

var PicCounter = function(name, src);
  this.count = 0;
  this.id = "$('#" + this + "')";
  this.counter =
PicCounter.prototype.clicker = this.click(function(e) {
  this.count++;
  $counter.text(count);
});

*/