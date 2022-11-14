<template>
	<v-sheet id="contact" height="auto">
		<v-row>
			<v-col cols="12" class="text-center">
				<h2 class="py-10">Contact</h2>
			</v-col>
		</v-row>

		<v-row dense no-gutters class="px-15">
			<v-col cols="12">
				<v-form class="mx-auto mb-2" style="width: 60%;">
					<v-text-field solo label="Name" hide-details class="mb-4"></v-text-field>
					<v-text-field solo label="Email" hide-details class="mb-4"></v-text-field>
					<v-textarea solo label="Message" hide-details class="mb-4"></v-textarea>
					<v-btn type="submit" color="primary">Submit</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	name: "ContactForm",
}
</script>