angular.module('plunker')
.factory('treeHelper', function () {
    var selectedNodes = [];
    function findNodeById(noder, id) {
    console.log('searching for node', noder, id);
    var resultNode = null;
    for (var i = 0; i < noder.length; i++) {
        var nod = noder[i];
        if (nod.id == id) { resultNode = nod }
        else if(nod.nodes.length > 0) {
        resultNode = findNodeById(nod.nodes, id);
        }
        if (resultNode !== null) { break;}
    }
    return resultNode;
    }
    return {
        findNodeById: findNodeById,
        selectedNodes: selectedNodes
    };
});
