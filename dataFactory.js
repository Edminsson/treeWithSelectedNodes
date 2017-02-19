angular.module('plunker')
.factory('dataFactory', function () {

  var data = [{
    'id': 1,
    'title': 'node1',
    'nodes': [
      {
        'id': 11,
        'title': 'node1.1',
        'nodes': [
          {
            'id': 111,
            'title': 'node1.1.1',
            'nodes': []
          }
        ]
      },
      {
        'id': 12,
        'title': 'node1.2',
        'nodes': []
      }
    ]
  }, {
    'id': 2,
    'title': 'node2',
    'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
    'nodes': [
      {
        'id': 21,
        'title': 'node2.1',
        'nodes': []
      },
      {
        'id': 22,
        'title': 'node2.2',
        'nodes': []
      }
    ]
  }, {
    'id': 3,
    'title': 'node3',
    'nodes': [
      {
        'id': 31,
        'title': 'node3.1',
        'nodes': []
      }
    ]
  }];
  
  var trad = [{ 
		title: "Skåne",
		id:1,
		nodes: [
			{
				title: "lund",
				id:2,
				nodes: [
					{ title: 1500, id:201, nodes: []	},
					{ title: 1600, id:202, nodes: []	}
				]
			},
			{
				title: "dalby",
				id: 5,
				nodes: []
			},
			{
				title: "malmö",
				id: 6,
				nodes: [
					{ title: 1500, id:601, nodes: []	}
				]
			},
			{
				title: "genarp",
				id: 7,
				nodes: [
					{ title: 1600, id:701, nodes: []	},
					{ title: 1700, id:702, nodes: []	}
				]
			},
			{
				title: "lund",
				id:8,
				nodes: [
					{ title: 1500, id: 801, nodes: []	},
					{ title: 1600, id: 802, nodes: []	}
				]
			},
			{
				title: "dalby",
				id:9,
				nodes: []
			},
			{
				title: "malmö",
				id:10,
				nodes: [
					{ title: 1500, id:1001, nodes: []	}
				]
			},
			{
				title: "genarp",
				id: 11,
				nodes: [
					{ title: 1600, id:1101, nodes: []	},
					{ title: 1700, id:1102, nodes: []	}
				]
			},
			{
				title: "lund",
				id:12,
				nodes: [
					{ title: 1500, id:1201, nodes: []	},
					{ title: 1600, id:1202, nodes: []	}
				]
			},
			{
				title: "dalby",
				id:13,
				nodes: []
			},
			{
				title: "malmö",
				id:14,
				nodes: [
					{ title: 1500, id:1401, nodes: []	}
				]
			},
			{
				title: "genarp",
				id:15,
				nodes: [
					{ title: 1600, id:1501, nodes: []	},
					{ title: 1700, id:1502, nodes: []	}
				]
			},
		]
	}];
	
	var bilder = [
	  {id:1, namn:'uno'},
	  {id:2, namn:'dos'},{id:201, namn:'doscientos uno'},{id:202, namn:'doscientos dos'},
	  {id:5, namn:'cinco'},
	  {id:6, namn:'seis'},{id:601, namn:'seiscientos uno'},
	  {id:7, namn:'siete'},{id:701, namn:'setecientos uno'},{id:702, namn:'setecientos dos'},
	  {id:8, namn:'ocho'},{id:801, namn:'ochocientos uno'},{id:802, namn:'ochocientos dos'},
	  {id:9, namn:'nueve'},
	  {id:10, namn:'diez'},{id:1001, namn:'mil uno'},
	  {id:11, namn:'once'},{id:1101, namn:'mil ciento uno'},{id:1102, namn:'mil ciento dos'},
	  {id:12, namn:'doce'},{id:1201, namn:'mil doscientos uno'},{id:1202, namn:'mil dosciento dos'},
	  {id:13, namn:'trece'},
	  {id:14, namn:'catorce'},
	  {id:15, namn:'quince'},{id:1501, namn:'mil quinientos uno'},{id:1502, namn:'mil quinientos dos'},
	  ];
    
    function getBilder() {
        return bilder;
    }

    var automaticId = 0;
    function getNode(level) {
        automaticId ++;
        level++;
        var node = {
            title: 'Node_' + automaticId,
            id: automaticId,
            nodes: []
        }
        bilder.push({id: automaticId, namn: 'varde_' + automaticId});
        while (level < 4 && Math.floor(Math.random() * 10) > 5) {
            node.nodes.push(getNode(level));
        }
        return node;
    }

    function generateTree(numberOfTopNodes, generateNewIds) {
        bilder = [];
        automaticId = (generateNewIds) ? Math.floor(Math.random() * 100) : 0;
        generatedTree = [];
        for (var i = 0; i < numberOfTopNodes; i++) {
            generatedTree.push(getNode(0));
        }
        return generatedTree;
    }

  return {
    data: data,
    trad: trad,
    getBilder: getBilder,
    generateTree: generateTree
  };

});

