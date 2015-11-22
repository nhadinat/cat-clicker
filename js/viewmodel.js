
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
