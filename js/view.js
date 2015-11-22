
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
