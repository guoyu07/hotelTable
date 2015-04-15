'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tableApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should display the correct data into table rows', function () {
  });
  
  
  it('should be sortable according to the inputs of the refinement section', function () {
  });
});
