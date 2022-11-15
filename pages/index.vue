<template>
	<div>
		<HeroSection></HeroSection>

		<!-- About  -->
		<SectionHeader text="Ane Lill is a norwegian artist based in Trondheim"></SectionHeader>
	

	<!-- Images  -->
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
				></ImageSingle>
			</v-col>
		</v-row>
	</v-sheet>

	<ContactForm class="mb-10"></ContactForm>
	
	<v-dialog
		v-model="dialog"
		width="800"
	>
		<v-card class="pa-10 elevation-0">
			<v-img max-height=800 contain :src="dialogImg"></v-img>
		</v-card>
	</v-dialog>
	</div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import HeroSection from "../components/HeroSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
import ImageSingle from "../components/ImageSingle.vue";

export default {
	name: "Index",
	components: { ContactForm, HeroSection, SectionHeader, ImageSingle },

	data() {
		return {
			dialog: false,
			dialogImg: "",
			images: [
				{
					title: "Tåke",
					src: require('~/assets/taakemaleri.jpg'),
					size: "100 x 100",
					sold: true,
				},
				{
					title: "Kråke",
					src: require('~/assets/kraake.jpg'),
					size: "100 x 100",
					sold: true,
				},
				{
					title: "Blåmeis",
					src: require('~/assets/blameis.jpg'),
					size: "100 x 100",
					sold: false,
				},
				{
					title: "Skisse",
					src: require('~/assets/skisse.jpg'),
					size: "100 x 100",
					sold: false, 
				}
			],
		}	
	},

	methods: {
		handleOpen(image) {
			this.dialog = true,
			this.dialogImg = image.src
		},
	}
}
</script>