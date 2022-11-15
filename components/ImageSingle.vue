<template>
	<v-card
		height="100%"
		class="px-10 pt-10"
		elevation="0"
	>
		<v-img
			class="mx-auto"
			:src="image"
			max-width="300"
			height="auto"
			contain
		>
	</v-img>
	<v-row dense no-gutters>
		<v-col cols="auto" align-self=center>
			<v-card-title class="pl-0 pt-2 pb-0 pr-2" v-if="title">{{ title }}</v-card-title>
		</v-col>
		<v-col v-if="sold" align-self=center>
			<v-icon class="pt-2 pb-0" color="red" small>mdi-checkbox-blank-circle</v-icon>
		</v-col>
	</v-row>
	<v-card-subtitle class="pl-0 pt-0 pb-4" v-if="size">{{ size }}</v-card-subtitle>
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

	props: {
		image: {
			type: String,
			default: "",
		},
		title: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "",
		},
		sold: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		viewImg() {
			console.log("TODO")
		},	
	}
}
</script>