<template>
	<div>
		<v-lazy
        	v-model="HeroSection"
			:options="{
			threshold: .5
			}"
			min-height="200"
			transition="fade-transition"
		>
					<!-- Hero image -->
					<HeroSection></HeroSection>
		</v-lazy>


		<!-- About  -->
		<SectionHeader text="Ane Lill is a norwegian artist based in Trondheim"></SectionHeader>

		<!-- Gallery  -->
		<ImageGallery></ImageGallery>

		<!-- Contact -->
		<ContactForm class="mb-10"></ContactForm>
	</div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import HeroSection from "../components/HeroSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
import ImageSingle from "../components/ImageSingle.vue";
import ImageGallery from "../components/ImageGallery.vue";

export default {
	name: "Index",
	components: { ContactForm, HeroSection, SectionHeader, ImageSingle, ImageGallery },

	data() {
		return {
			images: this.$store.getters.images,
		}	
	},
}
</script>