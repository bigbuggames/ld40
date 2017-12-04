const levels = [
  {
    required: ['intro'],
    exactWords: 'Salutations chef',
    solution: 'salutationpen ramsay',
    prep: 'idle-happy',
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
    solution: 'portian pinapplepen ala pikotaro',
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
    solution: 'pep godpen hopopode of',
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
    solution: 'pother of lla porpolade pountainpen pep',
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
