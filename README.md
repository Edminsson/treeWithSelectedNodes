# treeWithSelectedNodes
There are a couple of interesting stuff in this angular ui tree example.
- scroll to view
- highlight function
- track by in ng-repeat for faster update
- automatic generation of nodes for performance test with many nodes.

When the number of nodes increases the time for rendering the tree also increases. 
It takes several seconds to display a tree with more than thousand nodes.

The time it takes to rerender the tree when some nodes are changed decreases a lot when
using track-by in ng-repeat.
