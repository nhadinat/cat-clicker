// Cat Clicker Premium
//
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


$(function(){

  var model = {
    // Develop cats with their individual clicker counts.
    // Cat SuperClass
    var Cat = function (stringName, stringUrl){
      this.name = stringName;
      this.headerId = stringName + 'Header';
      this.countId = stringName + 'Counter';
      this.count = 0;
      this.imgId = stringName + 'Img';
      this.src = stringUrl;
    };

    var cats = [];
      // Create Cats
      cats[0] = new Cat('Buttons', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
      cats[1] = new Cat('Chewie', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');
      cats[2] = new Cat('Pumpkin', 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg');
      cats[3] = new Cat('Metoo', 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg');
      cats[4] = new Cat('Tootsie', 'http://4hdwallpapers.com/wp-content/uploads/2013/04/Funny-Little-Brown-Cat-1024x768.jpg');
  };


  var octopus = {

  };


  var viewCat = {
    init: function() {
      // Declare for loop vars
      var cat, elem, header, img, counter;
      // Loop over the numbers in cats array
      for (var i = 0; i < cats.length; i++) {

        // This is the number we're on...
        cat = cats[i];

        // We're creating a DOM element for the number
        elem = document.createElement('div');
          elem.id = cat.name;
          elem.className = 'catBox';
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

        // When we click img, add to count for this cat
        img.addEventListener('click', (function(catCopy) {
          return function() {
            catCopy.count++;
            console.log(catCopy.name + ': ' + catCopy.count);
            document.getElementById(catCopy.countId).textContent = catCopy.count;
          };
        })(cat));

      }
      viewCat.render();
    },
    render: function() {
      // Append all the cats
      document.getElementById('litterBox').appendChild(elem).classList.add('isHidden');
      document.getElementById(cat.name).appendChild(header).classList.add('isHidden');
      document.getElementById(cat.name).appendChild(counter).classList.add('isHidden');
      document.getElementById(cat.name).appendChild(img).classList.add('isHidden');
    }
  };


  var viewList = {
    init: function() {
      // Declare for loop vars
      var cat, list;
      // Loop over the numbers in cats array
      for (var i = 0; i < cats.length; i++) {

        // This is the number we're on...
        cat = cats[i];

        // We're creating a List element for the number
        list = document.createElement('li');
          list.textContent = cat.name;

        // When we click header, unhide cat
        list.addEventListener('click', (function(catCopy) {
          return function() {
            document.getElementById(catCopy.name).classList.toggle('isHidden');
            document.getElementById(catCopy.headerId).classList.toggle('isHidden');
            document.getElementById(catCopy.countId).classList.toggle('isHidden');
            document.getElementById(catCopy.imgId).classList.toggle('isHidden');
          };
        })(cat));
      }
      viewList.render();
    },
  render: function() {
      // Append the list of cats
      document.getElementById('list').appendChild(list);
    }
  };

  octopus.init();
});

