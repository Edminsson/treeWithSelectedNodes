angular.module('plunker')
.directive('highlight', function (treeHelper, $timeout) {
  return {
    link: (scope, element, attrs) => {
      scope.$watch(attrs.highlight, (newValue, oldValue)=> {
        console.log('Highligt - aktuellBildId: ',newValue, oldValue);
        if(newValue && newValue != oldValue) {

          for (var i = 0; i < treeHelper.selectedNodes.length; i++) {
            var selectedNode = treeHelper.selectedNodes[i];
            if (selectedNode !== null) {
              selectedNode.isSelected = false;
            }
          }

          var nod = treeHelper.findNodeById(scope.trad, newValue);
          if (nod !== null) {
            treeHelper.selectedNodes.push(nod);
            nod.isSelected = true;
            $timeout(()=>{
              //Vi gör detta i en timeout för att angular ska hinna rendera noderna
              treeHelper.scrollNodeToView(nod, 'treeContainer');
              console.log('found the node whith id ', newValue);
            });
          } else {
            console.log('could not find node with id ', newValue);
          }

        }
      })
    }
  };
});
