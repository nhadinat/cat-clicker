var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Buttons');
  this.imgSrc = ko.observable('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426')
  this.nicknames = ko.observableArray(['Butt-butt', 'Tons', "Lil'B"])

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1)
  }
}

ko.applyBindings(new ViewModel());