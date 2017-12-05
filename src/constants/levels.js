const levels = [
  {
    required: ['intro'],
    exactWords: 'Salutations chef',
    // solution: 'aaa',
    solution: 'salutationpen ramsay',
    prep: 'salutation',
    notes: {
      grammar: [
        'words ending with (s) now end with (pen)'  
      ],
      dictionary: [
        'chef => ramsay'
      ]
    }
  },
  {
    required: ['intro'],
    exactWords: 'Martian pinapples ala Pikotaro',
    // solution: 'aaa',
    solution: 'portian pineapplepen ala pikotaro',
    prep: 'prep-veggies',
    notes: {
      grammar: [
        '(ma, me, mo) now are (po)'
      ],
      dictionary: []
    }
  },
  {
    required: ['intro'],
    exactWords: 'Homemade soup of the Gods',
    // solution: 'aaa',
    solution: 'pep godpen hopopode soup of',
    prep: 'prep-soup',
    notes: {
      grammar: [
        'everything before (the) it\'s placed at the end of the sentence'
      ],
      dictionary: [
        'the => pep'
      ]
    }
  },
  {
    required: ['intro'],
    exactWords: 'The mother of all marmalade mountains',
    // solution: 'aaa',
    solution: 'pep pother of lla porpolade pountainpen',
    prep: 'prep-dessert',
    notes: {
      grammar: [
        'words starting with (a) get turned around'
      ],
      dictionary: []
    }
  },
  {
    required: ['intro'],
    exactWords: 'Give me the bill please',
    // solution: 'aaa',
    solution: 'pep petrifax please give po',
    prep: 'petrifax',
    notes: {
      grammar: [],
      dictionary: [
        'bill => petrifax' 
      ]
    }
  }
]

export default levels
