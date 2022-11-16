export const state = () => ({
  images: [
    {
      id: 1,
      title: 'Tåke',
      src: require('~/assets/taakemaleri.jpg'),
      size: '100 x 100',
      sold: true,
    },
    {
      id: 2,
      title: 'Kråke',
      src: require('~/assets/kraake.jpg'),
      size: '100 x 100',
      sold: true,
    },
    {
      id: 3,
      title: 'Blåmeis',
      src: require('~/assets/blameis.jpg'),
      size: '100 x 100',
      sold: false,
    },
    {
      id: 4,
      title: 'Skisse',
      src: require('~/assets/skisse.jpg'),
      size: '100 x 100',
      sold: false,
    },
  ],
})

export const getters = {
  images(state) {
    return state.images
  },
}

// export const mutations = {
//   // ..
// }

// export const actions = {
//   // ..
// }
