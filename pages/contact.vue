<template>
	<div>
		<PageHeader :headerImg="headerImg"></PageHeader>
		<ContactForm></ContactForm>
	</div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue"
import ContactForm from "~/components/ContactForm.vue"

export default {
	name: "contact",
	components: { PageHeader, ContactForm },

	data() {
		return {
			headerImg: this.$store.getters.headerImages.contact,
		}	
	},
}
</script>

