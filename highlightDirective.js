angular.module('plunker')
.directive('highlight', function (treeHelper) {
  return {
    link: (scope, element, attrs) => {
      scope.$watch('aktuellBild.id', (newValue, oldValue)=> {
        console.log('aktuellBildId: ',newValue, oldValue);
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
            treeHelper.scrollNodeToView(nod, 'treeContainer');
            console.log('found the node whith id ', newValue);
          } else {
            console.log('could not find node with id ', newValue);
          }

        }
      })
    }
  };
});
