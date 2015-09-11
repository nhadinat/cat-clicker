// The application should display two cats. Each cat includes
// - the cat's name
// - a picture of the cat
// - text showing the number of clicks

//before you make the factory, find the pattern
/*
// Cat Class
var Cat = function (name, url){
  this.name = name;
  this.countId = name + 'Counter';
  this.src = url;
  count = 0;
};
*/

// Create Cat: Buttons
var buttons = {
  name: 'Buttons',
  countId: 'buttonsCounter',
  src: 'https://c2.staticflickr.com/2/1126/625069434_db86b67df8_z.jpg',
  count: 0
};

var chewie = {
  name: 'Chewie',
  countId: 'chewieCounter',
  src: 'https://c1.staticflickr.com/3/2298/2290467335_89067c7b51_z.jpg',
  count: 0
};

buttons.catBox = function () {
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
buttons.clicker = function () {
  var hitId = '#' + this.name;
  var hitCountId = '#' + this.countId;

  // Listen for clicks and increase count
  $(hitId).click(function (e) {
    buttons.count++;
    $(hitCountId).text(buttons.count);
  });
};

buttons.catBox();
buttons.clicker();
//chewie.catBox();
//chewie.clicker();

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