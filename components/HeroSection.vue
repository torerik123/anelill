<template>
	<v-lazy
		v-model="isActive"
		:options="{
		threshold: .5
		}"
		transition="fade-transition"
	>
		<v-sheet class="pt-10 overflow-hidden" height="auto">
			<v-img
				width="100%"
				max-height="60vh"
				:src="heroImg"
			></v-img>
		</v-sheet>
	</v-lazy>
</template>

<script>
export default {
	name: "HeroSection",

	data() {
		return {
			isActive: false,
			heroImg: this.$store.getters.headerImages.home,	
		}
	},
}
</script>