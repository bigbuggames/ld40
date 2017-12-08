const levels = [
  {
    required: ['intro'],
    exactWords: 'Salutations chef',
    solution: [
      'salutationpen ramsay',
      'i give up'
    ],
    prep: 'salutation',
    notes: {
      grammar: [
        'words ending with (s) now instead end with (pen)'  
      ],
      dictionary: [
        'chef => ramsay'
      ]
    }
  },
  {
    required: ['intro'],
    exactWords: 'Martian pineapples ala Pikotaro',
    solution: [
      'portian pineapplepen ala pikotaro',
      'i give up'
    ],
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
    solution: [
      'pep godpen hopopode soup of',
      'i give up'
    ],
    prep: 'prep-soup',
    notes: {
      grammar: [
        'everything before (the) is placed at the end of the sentence'
      ],
      dictionary: [
        'the => pep'
      ]
    }
  },
  {
    required: ['intro'],
    exactWords: 'The mother of all marmalade mountains',
    solution: [
      'pep pother of lla porpolade pountainpen',
      'pep popepr of lla porpolade pountainpen',
      'pepr of lla porpolade pountainpen pep po',
      'i give up'
    ],
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
    solution: [
      'pep petrifax please give po',
      'i give up'
    ],
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
