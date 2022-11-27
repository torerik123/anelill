export const state = () => ({
	logo: "",
	images: [],
  	headerImages: {
		home: "",
		about: '',
		gallery: "",
		contact: '',
	},
	introText: "",
	aboutText: "",
})

export const getters = {
	images(state) {
		return state.images
  	},
  	heroImg(state) {
		return state.heroImg
  	},
  	headerImages(state) {
		return state.headerImages
  	},
	logo(state) {
		return state.logo
	},
  	introText(state) {
		return state.introText
  	},
  	aboutText(state) {
		return state.aboutText
  	},
}

export const mutations = {
	setGalleryImages(state, images) {
		state.images = images
  	},
	setHeaderImages(state, headerImages) {
		state.headerImages = headerImages
  	},
	setIntroText(state, payload) {
		state.introText = payload
  	},
	setAboutText(state, payload) {
		state.aboutText = payload
  	},
	setLogo(state, payload) {
		state.logo = payload
  	},
}

export const actions = {
	nuxtServerInit(vuexContext) {
		return vuexContext.dispatch('setGalleryImages')
  	},

	async setGalleryImages(context) {
		const getContent = `
			query MyQuery {
				allImages {
					id
					size
					sold
					title
					description
					order
					image {
						id
						responsiveImage(imgixParams: {auto: format}) {
							src
						}
					}	
				}
				home {
					logo {
						responsiveImage(imgixParams: {auto: enhance}) {
							src
						}
					}
					tagline
					bannerImage {
					  responsiveImage(imgixParams: {auto: format}) {
							src
						}
					}
				}
				about {
					headerImage {
					  responsiveImage(imgixParams: {auto: format}) {
						src
					  }
					}
					text
				}
				gallery {
					headerImage {
					  responsiveImage(imgixParams: {auto: format}) {
						src
					  }
					}
				}
				contact {
					headerImage {
						responsiveImage(imgixParams: {auto: format}) {
							src
					  	}
					}
				}
			}
		`
		const response = await this.$datocms.query({ query: getContent })
		let images = []

		// Header images
		const headerImages = {
			home: response.home.bannerImage.responsiveImage.src,
			about: response.about.headerImage.responsiveImage.src,
			gallery: response.gallery.headerImage.responsiveImage.src,
			contact: response.contact.headerImage.responsiveImage.src
		}

		const logo = response.home.logo.responsiveImage.src
		const tagline = response.home.tagline
		const aboutText = response.about.text

		// Gallery images
		Object.values(response.allImages).forEach((item) => {
			const image = {
				id: item.id,
				order: item.order,
				title: item.title,
				src: item.image.responsiveImage.src,
				size: item.size,
				sold: item.sold,
				description: item.description,
			}
			images.push(image)
		})

		images.sort((a, b) => {
			return a.order - b.order
		})

		context.commit('setLogo', logo)
		context.commit('setIntroText', tagline)
		context.commit('setAboutText', aboutText)
		context.commit('setHeaderImages', headerImages)
		context.commit('setGalleryImages', images)
  },
}
