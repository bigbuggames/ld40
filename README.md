LUDUM DARE 40
=============

May the force be with us!

To allow CORS for gh-pages:

[
    {
      "origin": ["https://bigbuggames.github.io/ld40"],
      "responseHeader": ["Content-Type"],
      "method": ["GET"],
      "maxAgeSeconds": 3600
    }
]

$ gsutil cors set firebase-cors.json gs://ld40-703cd.appspot.com/

state: {

  engine: {
    isLoading: true,
    audioEnabled: true
    assets: {
      loading: true,
      byId: {
        'intro': 'asfefs'
      },
      byType: {
        'video/mp4': ['intro']
      },
      allIds: ['intro']
    }
  },

  game: {
    currentLevel: 'p2',
    angryLevel: 0,
    solutions: {
      tutorial: 'hello penispum',
      p1: '',
      p2: '',
      p3: ''
    }
  }

}
