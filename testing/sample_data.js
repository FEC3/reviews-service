const samplePosts = [
  {
    _id:1,
    five_star:3,
    four_star:2,
    three_star:0,
    two_star: 0,
    one_star:1,
    avg_overall_total: 3,
    avg_value_rating: 2,
    avg_quality_rating:4,
    avg_apperance_rating: 4,
    avg_expected_rating: 3,
    reviews:[{
      overall_rating: 3,
      author: 'genvma',
      title: 'Calling Ikea...did I get a bad one?',
      createdAt:'2017-11-14T05:57:26.037Z',
      body: `I bought this six months ago and already, it looks terrible. Admittedly, when it came out of the box it had TONS of dents and indentations in the upholstery. Recently saw a friend's version of the same couch, and it looked MUCH nicer. Don't know...maybe I got a bad one?`,
      recommend: 0,
      value_rating:3,
      quality_rating:2,
      appearance_rating:1,
      expected_rating:4,
      helpful_count: '3',
      not_helpful_count: '0'
    },
    {
      overall_rating: 4,
      author: 'Anonymous',
      title: 'Love it',
      createdAt:'2017-11-14T05:57:26.037Z',
      body: `I spend so long looking for the perfect sofa: fabric that was dark & tightly weaved enough to be toddler/cat friendly, big enough for all of us to watch tv together but not take up the whole room, classic design elements that fit with modern decor, soft but still has those clean lines. This is perfect. I got dark gray w/ light wood legs, a few throw pillows of differing sizes and textures, and a big faux fur sheepskin to drape over the back so my cats can lounge without getting their fur everywhere.`,
      recommend: 1,
      value_rating:4,
      quality_rating:4,
      appearance_rating:4,
      expected_rating:3,
      helpful_count: 18,
      not_helpful_count: 1
    },{
      overall_rating: 4,
      author: 'rizwan87',
      title: 'Love it',
      createdAt:'2017-11-14T05:57:26.037Z',
      body: `Beautiful sofa, excellent quality love this purchase`,
      recommend: 1,
      value_rating:5,
      quality_rating:4,
      appearance_rating:5,
      expected_rating:4,
      helpful_count: 4,
      not_helpful_count: 0
    },{
      overall_rating: 2,
      author: 'rNoorhilmi',
      title: 'Comfortable & nice looking but not for a daily use',
      createdAt:'2018-11-14T05:57:26.037Z',
      body: `We bought this sofa before 3 months and everything is great about it but the material is so cheap after 3 months use only me and my husband (no kids) and it looks so old. I feel so disappointed I wish I can upload a photo of how it looks now :(`,
      recommend: 1,
      value_rating:3,
      quality_rating:2,
      appearance_rating:4,
      expected_rating:4,
      helpful_count: 4,
      not_helpful_count: 0
    }
    ]
  },

]

export default samplePosts;