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
					@viewImg="handlePreview" 
				></ImageSingle>
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
import ImageSingle from "../components/ImageSingle.vue";

export default {
	name: "Index",
	components: { ContactForm, HeroSection, SectionHeader, ImageSingle },

	data() {
		return {
			dialog: false,
			dialogImg: "",
			images: this.$store.getters.images,
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
}
</script>