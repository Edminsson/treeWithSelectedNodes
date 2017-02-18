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
	  {id:15, namn:'uno'},{id:702, namn:'dos'},
	  {id:2, namn:'mono'},{id:202, namn:'apa'},
	  {id:5, namn:'karta'},
	  {id:201, namn:'Lund'},{id:10, namn:'Kallinge'},{id:2, namn:'What'},
	  {id:701, namn:'nada'},{id:12, namn:'filt'},
	  {id:15, namn:'orm'},{id:1502, namn:'lejon'},
	  {id:1401, namn:'fisk'},{id:1, namn:'tiger'},
	  {id:8, namn:'fågel'},{id:701, namn:'häst'},
	  {id:7, namn:'katt'},{id:801, namn:'hund'},
	  ];

  return {
    data: data,
    trad: trad,
    bilder: bilder
  };

});
