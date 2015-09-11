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

// Develop cats with their individual clicker counts

// Cat Class
var Cat = function (stringName, stringUrl){
  this.name = stringName;
  this.headerId = stringName + 'Header';
  this.countId = stringName + 'Counter';
  this.count = 0;
  this.imgId = stringName + 'Img';
  this.src = stringUrl;
};

var cats = [1,2,3,4,5];
  // Create Cats
  cats[0] = new Cat('Buttons', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
  cats[1] = new Cat('Chewie', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');
  cats[2] = new Cat('Pumpkin', 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg');
  cats[3] = new Cat('Metoo', 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg');
  cats[4] = new Cat('Tootsie', 'http://animalia-life.com/data_images/havana-brown-cat/havana-brown-cat2.jpg');

// Declare for loop vars
var cat, elem, list, header, img, counter;

// Loop over the numbers in cats array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    cat = cats[i];

    // We're creating a DOM element for the number
    elem = document.createElement('div');
      elem.id = cat.name;
      elem.className = 'catBox';
    list = document.createElement('li');
      list.textContent = cat.name;
    header = document.createElement('h1');
      header.id = cat.headerId;
      header.textContent = cat.name;
    counter = document.createElement('p');
      counter.textContent = cat.count;
      counter.id = cat.countId;
    img = document.createElement('img');
      img.src = cat.src;
      img.id = cat.imgId;
      img.className = 'catPic';

    // When we click header, unhide cat
    list.addEventListener('click', (function(catCopy) {
        return function() {
          console.log(catCopy);
          document.getElementById(catCopy.name).classList.toggle('isHidden');
          document.getElementById(catCopy.headerId).classList.toggle('isHidden');
          document.getElementById(catCopy.countId).classList.toggle('isHidden');
          document.getElementById(catCopy.imgId).classList.toggle('isHidden');
        };
    })(cat));

    // ... and when we click img, add to count for this cat
    img.addEventListener('click', (function(catCopy) {
        return function() {
            catCopy.count++;
            console.log(catCopy.name + ': ' + catCopy.count);
            document.getElementById(catCopy.countId).textContent = catCopy.count;
        };
    })(cat));

    // Append all the cats
    document.getElementById('list').appendChild(list);
    document.getElementById('litterBox').appendChild(elem).classList.add('isHidden');
    document.getElementById(cat.name).appendChild(header).classList.add('isHidden');
    document.getElementById(cat.name).appendChild(counter).classList.add('isHidden');
    document.getElementById(cat.name).appendChild(img).classList.add('isHidden');
}