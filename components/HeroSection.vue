<template>
	<v-lazy
		v-model="isActive"
		:options="{
		threshold: .5
		}"
		min-height="200"
		transition="fade-transition"
	>
		<v-sheet class="pt-10 overflow-hidden" height="auto">
			<v-img
				width="100%"
				max-height="80vh"
				:src="heroImg"
				:lazy-src="heroImg"
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
			heroImg: this.$store.getters.heroImg,	
		}
	},
}
</script>