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
						@viewImg="handlePreview" 
					></ImageSingle>
				</v-col>
			</v-row>
		</v-sheet>
	</div>
</template>

<script>
import ImageSingle from '~/components/ImageSingle.vue';
export default {
	name: "ImageGallery",

	data() {
		return {
			images: this.$store.getters.images,
			dialog: false,
		}
	},

	methods: {
		handlePreview(src) {
			this.dialog = true,
			this.dialogImg = src
		},

		handleOpen(image) {
			console.log("todo")
		},
	},
}
</script>