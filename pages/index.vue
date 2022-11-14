<template>
	<div>
		<HeroSection></HeroSection>

		<!-- About  -->
		<SectionHeader text="Ane Lill is a norwegian artist based in Trondheim"></SectionHeader>
	

	<!-- Images  -->
	<v-sheet id="gallery" height="auto" class="">
		<v-row dense no-gutters class="justify-space-between">
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
			</v-col>
		</v-row>
	</v-sheet>

	<ContactForm></ContactForm>	

	</div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import HeroSection from "../components/HeroSection.vue";
import SectionHeader from "../components/SectionHeader.vue";

export default {
	name: "Index",
	components: {ContactForm, HeroSection, SectionHeader}
}
</script>