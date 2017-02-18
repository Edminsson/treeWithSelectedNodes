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

    function scrollNodeToView (node, containerId) {
        var containerTop;
        var containerBottom;
        var $container;
        if(containerId) {
            $container = $('#'+containerId);
            var containerRect = $container[0].getBoundingClientRect();
            containerBottom = containerRect.bottom;
            containerTop = containerRect.top;
        }
        else {
            containerBottom = window.innerHeight;
            containerTop = 0;
            $container = $(window);
        }
        var nodId = '#node_id_' + node.id;
        var nodEl = $(nodId)[0];
        var rect = nodEl.getBoundingClientRect();

        var meddelande = "window height: " + containerBottom;

        var deltaBottom = rect.bottom - containerBottom;
        var deltaTop = rect.top - containerTop;
        //var delta = Math.max(deltaBottom, deltaTop);

        if(deltaBottom > 0) {
            var currentScrollTop = $container.scrollTop();
            deltaBottom += currentScrollTop;
            $container.scrollTop(deltaBottom)      
        }
        if(deltaTop < 0) {
            var currentScrollTop = $container.scrollTop();
            deltaTop += currentScrollTop;
            $container.scrollTop(deltaTop)      
        }
    }



    return {
        findNodeById: findNodeById,
        selectedNodes: selectedNodes,
        scrollNodeToView: scrollNodeToView
    };
});
