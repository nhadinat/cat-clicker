
/* ======= Model ======= */
// TODO: add local storage capability.

var model = {
  currentCat: null,

  cats: [
    {
      name : 'Buttons',
      imgSrc : 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      clickCount : 0,
    },
    {
      name : 'Chewie',
      imgSrc : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
      clickCount : 0,
    },
    {
      name : 'Pumpkin',
      imgSrc : 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg',
      clickCount : 0,
    },
    {
      name : 'Metoo',
      imgSrc : 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg',
      clickCount : 0,
    },
    {
      name : 'Tootsie',
      imgSrc : 'http://4hdwallpapers.com/wp-content/uploads/2013/04/Funny-Little-Brown-Cat-1024x768.jpg',
      clickCount : 0,
    }
  ]
};


/* ======= Octopus ======= */

var octopus = {

  init: function() {
    // set our current cat to the first one in the list
    model.currentCat = model.cats[0];

    // tell our views to initialize
    catListView.init();
    catView.init();
    adminView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  // set the currently-selected cat to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  // increments the counter for the currently-selected cat
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  },

  // Admin form edits the currently-selected cat
  editCat: function(name, imgSrc, clickCount) {
    model.currentCat.name = name;
    model.currentCat.imgSrc = imgSrc;
    model.currentCat.clickCount = clickCount;
    catListView.init();
    catView.render();
  },
};


/* ======= View ======= */

var catView = {

  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    // update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }

};

var catListView = {

  init: function() {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById('cat-list');

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    var cat, elem, i;
    // get the cats we'll be rendering from the octopus
    var cats = octopus.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';

    // loop over the cats
    for (i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      cat = cats[i];

      // make a new cat list item and set its text
      elem = document.createElement('li');
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      // finally, add the element to the list
      this.catListElem.appendChild(elem);
    }
  }

};

var adminView = {

  init: function() {
    // store pointers to our DOM elements for easy access later
    this.cat = document.getElementById('admin-cat');
    this.catImg = document.getElementById('admin-cat-img');
    this.catCount = document.getElementById('admin-cat-count');
    this.adminForm = document.getElementById('admin-form');

    adminView.hide();
  },
  hide: function() {
    // Hide form
    this.adminForm.style.visibility = "hidden";
  },

  render: function() {
    // Unhide form
    this.adminForm.style.visibility = "visible";
    // update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    this.cat.value = currentCat.name;
    this.catImg.value = currentCat.imgSrc;
    this.catCount.value = currentCat.clickCount;
  },

  save: function() {
    // Capture new values
    var name = this.cat.value;
    var imgSrc = this.catImg.value;
    var clickCount = this.catCount.value;

    //Apply new values to current cat
    octopus.editCat(name, imgSrc, clickCount);

    // Hide form
    adminView.hide();
  }

};

octopus.init();