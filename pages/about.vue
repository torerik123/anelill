<template>
	<div>
		<PageHeader :headerImg="headerImg"></PageHeader>
		<SectionHeader text="Ane Lill Nerbøvik"></SectionHeader>

		<v-row dense no-gutters>
			<v-spacer></v-spacer>
			<v-col :cols="$vuetify.breakpoint.mdAndUp ? 7 : 'auto'">
				<v-card elevation="0" class="">
					<v-card-text v-html="text">
					</v-card-text>
				</v-card>
			</v-col>
			<v-spacer></v-spacer>
		</v-row>
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