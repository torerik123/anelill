<template>
	<v-card
		height="100%"
		class="px-10 pt-10"
		elevation="0"
	>
		<v-hover  v-slot="{ hover }">
			<v-img
				:style="hover ? 'cursor: pointer;' : ''" 
				@click="viewImg"
				class="mx-auto"
				:src="image.src"
				max-width="300"
				height="auto"
				contain
			>
			</v-img>
		</v-hover>

		<v-row dense no-gutters>
			<v-col cols="auto" align-self=center>
				<v-card-title class="pl-0 pt-2 pb-0 pr-2" v-if="image.title">{{ image.title }}</v-card-title>
			</v-col>
			<v-col v-if="image.sold" align-self=center>
				<v-icon class="pt-2 pb-0" color="red" small>mdi-checkbox-blank-circle</v-icon>
			</v-col>
		</v-row>
		<v-card-subtitle class="pl-0 pt-0 pb-4" v-if="image.size">{{ image.size }}</v-card-subtitle>
		<v-card-actions class="pl-0">
			<v-btn
				tile
				outlined
				@click="viewImg"
			>
				View
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "ImageSingle",
	emits: ["open"],

	props: {
		image: {
			type: Object,
			default: () => ({}),
		},
	},

	methods: {
		viewImg() {
			this.$emit("open", this.image)
		},	
	}
}
</script>