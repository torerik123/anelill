export const state = () => ({
  images: [
    {
      id: 1,
      title: 'Tåke',
      src: require('~/static/taakemaleri.jpg'),
      size: '100 x 100',
      sold: true,
      description: "Info text 1",
    },
    {
      id: 2,
      title: 'Kråke',
      src: require('~/static/kraake.jpg'),
      size: '100 x 100',
      sold: true,
      description: "Info text 2",
    },
    {
      id: 3,
      title: 'Blåmeis',
      src: require('~/static/blameis.jpg'),
      size: '100 x 100',
      sold: false,
      description: "Info text 3",
    },
    {
      id: 4,
      title: 'Skisse',
      src: require('~/static/skisse.jpg'),
      size: '100 x 100',
      sold: false,
      description: "Info text 4",
    },
  ],
  heroImg: require('~/static/taakeskog.jpg'),
  headerImg: require('~/static/signatur.png'),
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
