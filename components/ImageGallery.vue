<template>
	<div>
		<v-sheet id="gallery" height="auto" class="">
			<v-row dense no-gutters class="justify-space-between">
				<v-col
					v-for="image in images"
					:key="image.src"
					:cols="$vuetify.breakpoint.mdAndUp ? '4' : '6'" 
					class=""
				>
					<ImageSingle 
						:image="image"
						@open="handleOpen"
						@viewImg="handleOpen" 
					></ImageSingle>
				</v-col>
			</v-row>
		</v-sheet>
	</div>
</template>

<script>
import ImageSingle from '~/components/ImageSingle.vue';
import ImageCarousel from '~/components/ImageCarousel.vue';

export default {
	name: "ImageGallery",
	components: {ImageSingle, ImageCarousel },

	data() {
		return {
			images: this.$store.getters.images,
			dialog: false,
			index: 0,
		}
	},

	methods: {
		handleOpen(index) {
			this.$router.push("/gallery/" + index)
		},
	},
}
</script>