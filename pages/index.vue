<template>
	<div>
		<!-- Hero image -->
		<HeroSection :image="heroImg"></HeroSection>

		<!-- About  -->
		<SectionHeader :text="introText"></SectionHeader>
		
		<!-- Gallery  -->
		<ImageGallery></ImageGallery>

		<!-- Contact -->
		<ContactForm v-animate-onscroll="'animated slideInUp'"  class="mb-10"></ContactForm>
	</div>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";
import HeroSection from "~/components/HeroSection.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import ImageSingle from "~/components/ImageSingle.vue";
import ImageGallery from "~/components/ImageGallery.vue";

export default {
	name: "Index",
	components: { ContactForm, HeroSection, SectionHeader, ImageSingle, ImageGallery },

	data() {
		return {
			images: this.$store.getters.images,
			introText: this.$store.getters.introText,
			heroImg: this.$store.getters.headerImages.home,
		}	
	},
}
</script>

<style>
	
</style>