<template>
	<div>
		<HeroSection></HeroSection>

		<!-- About  -->
		<SectionHeader text="Ane Lill is a norwegian artist based in Trondheim"></SectionHeader>
	

	<!-- Images  -->
	<v-sheet id="gallery" height="auto" class="">
		<v-row dense no-gutters class="justify-space-between">
<<<<<<< Updated upstream
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/taakemaleri.jpg"
					max-width="300"
					height="auto"
					contain
				>
				</v-img>
			</v-col>
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/kraake.jpg"
					max-width="300"
					contain
					height="auto"
				>
				</v-img>
			</v-col>
		</v-row>
		<v-row dense no-gutters class="pt-10 justify-space-between">
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/blameis.jpg"
					max-width="300"
					height="auto"
					contain
				>
				</v-img>
			</v-col>
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/skisse.jpg"
					max-width="300"
					contain
					height="auto"
				>
				</v-img>
=======
			<v-col
				v-for="image in images"
				:key="image.src"
				:cols="$vuetify.breakpoint.mdAndUp ? '4' : '6'" 
				class=""
			>
				<ImageSingle 
					:image="image"
					@open="handleOpen"
					@viewImg="handlePreview" 
				></ImageSingle>
>>>>>>> Stashed changes
			</v-col>
		</v-row>
	</v-sheet>

	<ContactForm class="mb-10"></ContactForm>
	
	</div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import HeroSection from "../components/HeroSection.vue";
import SectionHeader from "../components/SectionHeader.vue";

export default {
	name: "Index",
<<<<<<< Updated upstream
	components: {ContactForm, HeroSection, SectionHeader}
=======
	components: { ContactForm, HeroSection, SectionHeader, ImageSingle },

	data() {
		return {
			dialog: false,
			dialogImg: "",
			images: this.$store.getters.images,
			// images: [
			// 	{
			// 		title: "Tåke",
			// 		src: require('~/assets/taakemaleri.jpg'),
			// 		size: "100 x 100",
			// 		sold: true,
			// 	},
			// 	{
			// 		title: "Kråke",
			// 		src: require('~/assets/kraake.jpg'),
			// 		size: "100 x 100",
			// 		sold: true,
			// 	},
			// 	{
			// 		title: "Blåmeis",
			// 		src: require('~/assets/blameis.jpg'),
			// 		size: "100 x 100",
			// 		sold: false,
			// 	},
			// 	{
			// 		title: "Skisse",
			// 		src: require('~/assets/skisse.jpg'),
			// 		size: "100 x 100",
			// 		sold: false, 
			// 	}
			// ],
		}	
	},

	methods: {
		handlePreview(src) {
			this.dialog = true,
			this.dialogImg = src
		},

		handleOpen(image) {
			console.log("todo")
		},
	}
>>>>>>> Stashed changes
}
</script>