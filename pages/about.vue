<template>
	<div>
		<PageHeader :headerImg="headerImg"></PageHeader>
		<SectionHeader text="Ane Lill Nerbøvik"></SectionHeader>

		<v-card elevation="0">
			<v-card-text class="text-center">
				{{ text }}
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import SectionHeader from "~/components/SectionHeader.vue"
import PageHeader from "~/components/PageHeader.vue"
export default {
	name: "About",
	components: { SectionHeader, PageHeader },

	data() {
		return {
			headerImg: this.$store.getters.headerImages.about,
			text: this.$store.getters.aboutText,
		}	
	},
}
</script>