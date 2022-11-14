<template>
	<v-sheet id="about" height="auto">
		<v-row dense no-gutters>
			<v-col cols="12" class="text-center">
				<h2 class="py-10">{{ text }}</h2>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	name: "SectionHeader",

	props: {
		text: {
			type: String,
			default: "",
		}
	}
}
</script>