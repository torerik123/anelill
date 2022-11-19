<template>
	<div>
		<PageHeader :headerImg="headerImg"></PageHeader>
		<SectionHeader text="Gallery"></SectionHeader>
		<ImageGallery></ImageGallery>	
	</div>
</template>

<script>
import SectionHeader from "~/components/SectionHeader.vue"
import PageHeader from "~/components/PageHeader.vue"
import ImageGallery from "~/components/ImageGallery.vue"

export default {
	name: "Gallery",
	components: { SectionHeader, PageHeader, ImageGallery},

	data() {
		return {
			headerImg: this.$store.getters.images[1].src,
		}	
	},
}
</script>