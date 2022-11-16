<template>
	<v-app dark>
		<TheHeader :customClass="$vuetify.breakpoint.smAndDown ? 'px-5' : 'px-15'"></TheHeader>
		<v-main>
			<v-container fluid :class="$vuetify.breakpoint.smAndDown ? 'px-5 py-0' : 'px-15 py-0'">
				<Nuxt />
			</v-container>
		</v-main>
		<TheFooter :customClass="$vuetify.breakpoint.smAndDown ? 'px-5' : 'px-15'"></TheFooter>
	</v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
	name: 'DefaultLayout',
	components: { TheHeader, TheFooter },

	data() {
		return {
		}
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sono&display=swap');

.v-application .v-application--wrap * {
	font-family: "Sono", sans-serif !important;
}
</style>