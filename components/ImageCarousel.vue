<template>
	<v-row dense no-gutters>
		<v-col cols="9">
			<v-carousel height="60vh" v-model="model" hide-delimiters>
			<v-carousel-item
				v-for="image in images"
				:key="image.src"
				:src="image.src"
				contain
				
			>
			</v-carousel-item>
		</v-carousel>
		</v-col>
		<v-col cols="3">
			<v-card elevation="0" class="pl-10">
				<v-card-title>{{ images[model].title }}</v-card-title>
				<v-card-subtitle>{{ images[model].size }}</v-card-subtitle>
				<v-card-text>{{ images[model].description }}</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "ImageCarousel",

	data() {
		return {
			model: this.index,
			images: this.$store.getters.images,
		}
	},

	props: {
		index: {
			type: Number,
			default: 0,
		},
	}
}
</script>