export const state = () => ({
  images: [
    {
      id: 1,
      title: 'Tåke',
      src: require('~/static/img/taakemaleri-min.jpg'),
      size: '100 x 100',
      sold: true,
      description: "Info text 1",
    },
    {
      id: 2,
      title: 'Kråke',
      src: require('~/static/img/kraake-min.jpg'),
      size: '100 x 100',
      sold: true,
      description: "Info text 2",
    },
    {
      id: 3,
      title: 'Blåmeis',
      src: require('~/static/img/blameis-min.jpg'),
      size: '100 x 100',
      sold: false,
      description: "Info text 3",
    },
    {
      id: 4,
      title: 'Skisse',
      src: require('~/static/img/skisse-min.jpg'),
      size: '100 x 100',
      sold: false,
      description: "Info text 4",
    },
  ],
  heroImg: require('~/static/img/taakeskog-min.jpg'),
  headerImg: require('~/static/img/signatur-min.png'),
})

export const getters = {
  images(state) {
    return state.images
  },
  heroImg(state) {
    return state.heroImg
  },
  headerImg(state) {
    return state.headerImg
  },
}

// export const mutations = {
//   // ..
// }

// export const actions = {
//   // ..
// }
