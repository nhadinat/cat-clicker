var Cat = function () {
  var self = this;
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Buttons');
  this.imgSrc = ko.observable('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
  this.nicknames = ko.observableArray(['Butt-butt', 'Tons', "Lil'B"]);

  this.title = ko.computed(function(){
    var title;
    var clicks = self.clickCount();
    if (clicks < 10) {
      title = "Lil'";
    } else if (clicks < 50) {
      title = 'Sir';
    } else if (clicks < 100) {
      title = 'Lord';
    } else if (clicks < 150) {
      title = 'Prince';
    } else if (clicks < 200) {
      title = 'King';
    } else if (clicks < 250) {
      title = 'Emperor';
    } else if (clicks < 300) {
      title = 'Ultra';
    } else if (clicks < 350) {
      title = 'MegaMecha';
    } else if (clicks < 400) {
      title = 'GigaTron';
    } else {
      title = 'Mr. Worldwide';
    }
    return title;
  });

  this.titleName = ko.computed(function(){
    return self.title() + " " + self.name();
  })
}

var ViewModel = function () {

  this.currentCat = ko.observable( new Cat() );

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new ViewModel());