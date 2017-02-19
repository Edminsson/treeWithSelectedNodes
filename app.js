var app = angular.module('plunker', ['ui.tree', 'ngRoute']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.controller('BasicExampleCtrl', ['$scope', 'dataFactory', 'treeHelper', function ($scope, dataFactory, treeHelper) {
  $scope.name = 'World';
  $scope.nodId = 11;
  $scope.indexet = 2;
  $scope.antalGrenar = 400;
  $scope.skapaNyaId = false;
  $scope.bilder = dataFactory.getBilder();
  $scope.aktuellBild = $scope.bilder[0];
  $scope.currentNode = {};
  $scope.findNodeById = (bild) => {
    //console.log('look for ', $scope.indexet)
    console.log('bild',bild);
    $scope.currentNode = treeHelper.findNodeById($scope.trad, bild.id);
  }
  $scope.visaIndexet = () => {
    alert($scope.indexet);
  }
  $scope.visaNodInfo = function() {
    var nodId = '#menu-item-' + $scope.nodId;
    var nodEl = $(nodId)[0];
    //console.log(nodId, $nodId, $nodId.getBoundingClientRect);
    var wHeight = window.innerHeight;
    var rect = nodEl.getBoundingClientRect();
    var beraknadHojd = wHeight - rect.top;
    var scrollTop = nodEl.scrollTop;
    var meddelande = "window height: " + wHeight;
    meddelande += " <br/> rect.top: " + rect.top;
    meddelande += " <br/> rect.right: " + rect.right;
    meddelande += " <br/> rect.bottom: " + rect.bottom;
    meddelande += " <br/> rect.left: " + rect.left;
    meddelande += " <br/> beraknas hojd: " + beraknadHojd;
    meddelande += " <br/> scrollTop: " + scrollTop;
    $('#message').html(meddelande);
  }
  
  $scope.visaNod = function() {
    var nodId = '#menu-item-' + $scope.nodId;
    var nodEl = $(nodId)[0];
    var wHeight = window.innerHeight;
    var rect = nodEl.getBoundingClientRect();
    var beraknadHojd = wHeight - rect.top;
    var meddelande = "window height: " + wHeight;

    var delta = (rect.bottom-wHeight);
    console.log('wHeight: ',wHeight);
    console.log('rect: ',rect);
    console.log('delta: ',delta);
    console.log('window scrolltop: ',$(window).scrollTop());

    if(delta > 0) {
      $(window).scrollTop(delta)      
    }
  }
  
  $scope.getGeneratedTree = function(antal, skapaNyaId) {
    console.log('parametrar', antal, skapaNyaId);
    $scope.trad = dataFactory.generateTree(antal, skapaNyaId);
    $scope.bilder = dataFactory.getBilder();
    $scope.aktuellBild = $scope.bilder[$scope.bilder.length -1];
  }
  $scope.taBort = function(index) {
    $scope.trad[0].nodes.splice(index, 1);
  }
  $scope.collapseAll = function () {
    $scope.$broadcast('angular-ui-tree:collapse-all');
  };

  $scope.expandAll = function () {
    $scope.$broadcast('angular-ui-tree:expand-all');
  };

  $scope.data = dataFactory.data
  $scope.trad = dataFactory.trad; 

}]);

