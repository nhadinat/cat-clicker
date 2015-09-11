// The application should display two cats. Each cat includes
// - the cat's name
// - a picture of the cat
// - text showing the number of clicks

//before you make the factory, find the pattern

var buttons = {
  id: 'buttons',
  countId: 'buttonsCounter',
  name: 'Buttons',
  src: 'https://c2.staticflickr.com/2/1126/625069434_db86b67df8_z.jpg'
};

buttons.catBox = function () {
  var catId = this.id;
  var catCountId = this.countId;
  var catName = this.name;
  var catSrc = this.src;

  var catContainer =
    '<div id="' + catId + '">' +
    '<h1>' + catName + '</h1>' +
    '<img class="catpic"' +
    'src="' + catSrc + '">' +
    '<p id="' + catCountId + '"></p></div>';

  $('#container').append(catContainer);

  return console.log('Meow!');
};

buttons.catBox();



/*
var  buttonsName = 'Buttons';
var  buttonsCount = 0;
var  buttonsCounter = $('buttonsCounter');

  //obj.method doesn't work with jquery methods

$('container').prepend(buttons.name);

$('#buttons').click(function(e) {
  count++;
  counter.text(count);
});


var buttons;
  buttons.id = 'buttons';
  buttons.name = 'Buttons';
  buttons.img = '<img id="' + buttons.id + '" class="catpic" src="https://c2.staticflickr.com/2/1126/625069434_db86b67df8_z.jpg">';
  buttons.count = 0;
  buttons.counter = '<p id="buttonscounter"></p>';
  buttons.clicker = ;
*/

/*
$('#buttons').click(function(e) {
  count++;
  $counter.text(count);
});
*/

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