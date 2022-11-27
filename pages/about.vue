<template>
	<div>
		<div v-if="$vuetify.breakpoint.smAndDown">
			<PageHeader :headerImg="headerImg"></PageHeader>
			<SectionHeader text="About"></SectionHeader>
	
			<v-row dense no-gutters>
				<v-spacer></v-spacer>
				<v-col :cols="$vuetify.breakpoint.mdAndUp ? 7 : 'auto'">
					<v-card elevation="0" class="px-5">
						<div v-html="text">
						</div>
					</v-card>
				</v-col>
				<v-spacer></v-spacer>
			</v-row>
		</div>

		<div v-else>
			<v-row dense no-gutters>
				<v-col>
					<SectionHeader text="About"></SectionHeader>
				</v-col>
			</v-row>
			<v-row dense no-gutters>
				<v-col cols="5">	
					<v-sheet
						class="overflow-hidden pt-10"
					>
						<v-img 
							:src="headerImg"
						>
						</v-img>
					</v-sheet>
				</v-col>
				<v-col cols="" class="pa-5">
					<v-card elevation="0" class="mx-auto mt-5 pl-7">
						<div v-html="text"></div>
					</v-card>
				</v-col>	
			</v-row>
		</div>
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