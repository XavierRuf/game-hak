const headerNav = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/store',
    text: 'Store',
  },
  {
    href: '/library',
    text: 'My Library',
  },
]

const previewButton = {
  route: '/library',
  text: 'Start Shopping',
}

export const getData = () => {
  const createSilentSamples = (from, to) => {
    const silenceSamplesArray = []
    let silenceNames = [
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
      'Hot Primary',
      'Tempoo Royalty',
      'Blackbones Samp',
      "Indra's Arrow",
      'Airy cocktail',
      'Come Around With Crash',
      'The Golden Song',
      'True Color Of Sky',
    ]

    for (let i = from; i < to; i++) {
      silenceSamplesArray.push({
        src: '/static/samples/silent.mp3',
        title: silenceNames[i],
      })
    }

    return silenceSamplesArray
  }

  let data = [
    {
      title: 'Brass Stones',
      href: '/collection/brass-stones',
      src: '/static/img/collections/square_brass_stones.png',
      unlocked: 0,
      count: 52,
      audioData: [],
    },
    {
      title: 'R&B Jellyfish',
      href: '/collection/rb-jellyfish',
      src: '/static/img/collections/square_rb_jellyfish.png',
      unlocked: 4,
      count: 43,
      audioData: [
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/17.mp3',
          title: 'Frozen Spirit - 150 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Carefree - 115 bpm',
        },
        {
          src: '/static/samples/19.mp3',
          title: 'Girls`Touch - 143 bpm ',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Carefree - 115 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Carefree - 115 bpm',
        },
        {
          src: '/static/samples/5.mp3',
          title: 'Carefree - 115 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/33.mp3',
          title: 'Sleepy Break - 158 bpm',
        },
      ],
    },
    {
      title: 'Hip-Hop Turtle',
      href: '/collection/hiphop-turtle',
      src: '/static/img/collections/square_hiphop_turtle.png',
      unlocked: 7,
      count: 98,
      audioData: [
        {
          src: '/static/samples/4.mp3',
          title: 'Break Hunter - 82 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/8.mp3',
          title: 'Cooling Drugs - 95 bpm',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/15.mp3',
          title: 'Festivity Cocktail - 130 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/16.mp3',
          title: 'Fresh Trip - 94 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },
        {
          src: '/static/samples/18.mp3',
          title: 'Fun At Rhythm - 84 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/20.mp3',
          title: 'Goofy Behavior - 138 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/28.mp3',
          title: 'Nice Coffeee - 85 bpm',
        },
      ],
    },
    {
      title: 'Hip-Hop Treasure',
      href: '/collection/hiphop-treasure',
      src: '/static/img/collections/square_hiphop_treasure.png',
      unlocked: 5,
      count: 99,
      audioData: [
        {
          src: '/static/samples/2.mp3',
          title: 'Blowout Masters - 160 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/11.mp3',
          title: 'Discover Juice - 165 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/26.mp3',
          title: 'Lunar Midnight - 163 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/27.mp3',
          title: 'Mad Hatter`s Check - 150 bpm ',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/29.mp3',
          title: 'Only Talk - 149 bpm',
        },
      ],
    },
    {
      title: 'House Dragon',
      href: '/collection/house-dragon',
      src: '/static/img/collections/square_house_dragon.png',
      unlocked: 0,
      count: 123,
      audioData: [],
    },
    {
      title: 'Trap Cannon',
      href: '/collection/trap-cannon',
      src: '/static/img/collections/square_trap_cannon.png',
      unlocked: 5,
      count: 98,
      audioData: [
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/9.mp3',
          title: 'Darling - 130 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/10.mp3',
          title: 'Delightful Trip - 156 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/21.mp3',
          title: 'Goofy Spirit - 135 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/22.mp3',
          title: 'Infinite Man - 140 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },
        {
          src: '/static/samples/25.mp3',
          title: 'Live Lights - 135 bpm',
        },
      ],
    },
    {
      title: 'R&B Octopus',
      href: '/collection/rb-octopus',
      src: '/static/img/collections/square_rb_octopus.png',
      unlocked: 6,
      count: 52,
      audioData: [
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/7.mp3',
          title: 'Clear Change - 148 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/12.mp3',
          title: 'DJ Things - 150 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/13.mp3',
          title: 'Endless Ground - 154 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/24.mp3',
          title: 'Latino Villagers - 140 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/30.mp3',
          title: 'Passionate Sky - 135 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/31.mp3',
          title: 'Past Picture - 145 bpm',
        },
      ],
    },
    {
      title: 'Trap Cramp',
      href: '/collection/trap-cramp',
      src: '/static/img/collections/square_trap_cramp.png',
      unlocked: 4,
      count: 43,
      audioData: [
        {
          src: '/static/samples/1.mp3',
          title: 'Another Ocean - 156 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/14.mp3',
          title: 'Feel The Hunter - 155 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },

        {
          src: '/static/samples/23.mp3',
          title: 'Inspired Cash - 140 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/32.mp3',
          title: 'Running Place - 155 bpm',
        },
      ],
    },
    {
      title: 'Reverse Creatures',
      href: '/collection/reverse-creatures',
      src: '/static/img/collections/square_reverse_creatures.png',
      unlocked: 3,
      count: 98,
      audioData: [
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/0.mp3',
          title: 'Alone In Midnight - 160 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/3.mp3',
          title: 'Bouncy End - 137 bpm',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },
        {
          src: '/static/samples/silent.mp3',
          title: 'Hot Primary',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'True Color Of Sky',
        },

        {
          src: '/static/samples/silent.mp3',
          title: 'Come Around With Crash',
        },

        {
          src: '/static/samples/6.mp3',
          title: 'Careless Details - 150 bpm',
        },
      ],
    },
  ]

  data = data.map((pack) => {
    let from = pack.audioData.length - 1
    let to = pack.count - 1
    pack.audioData.push(...createSilentSamples(from, to))
    return pack
  })

  return data
}

export const constants = {
  headerNav,
  previewButton,
  getData,
}
