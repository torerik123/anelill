export const state = () => ({
  images: [
    {
      id: 1,
      title: 'Tåke',
      src: require('~/static/webp/taakemaleri.webp'),
      size: '100 x 100',
      sold: true,
      description: "Info text 1",
    },
    {
      id: 2,
      title: 'Kråke',
      src: require('~/static/webp/kraake.webp'),
      size: '100 x 100',
      sold: true,
      description: "Info text 2",
    },
    {
      id: 3,
      title: 'Blåmeis',
      src: require('~/static/webp/blameis.webp'),
      size: '100 x 100',
      sold: false,
      description: "Info text 3",
    },
    {
      id: 4,
      title: 'Skisse',
      src: require('~/static/webp/skisse.webp'),
      size: '100 x 100',
      sold: false,
      description: "Info text 4",
    },
  ],
  heroImg: require('~/static/webp/taakeskog.webp'),
  headerImg: require('~/static/webp/signatur.webp'),
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
