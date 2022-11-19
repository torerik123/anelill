<template>
	<div>
		<ImageCarousel :index="parseInt(this.$route.params.id)"></ImageCarousel>
	</div>
</template>

<script>
import ImageCarousel from "~/components/ImageCarousel.vue"

export default {
	name: "InfoPage",
	components: { ImageCarousel },
}
</script>