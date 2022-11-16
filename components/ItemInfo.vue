<template>
	<v-sheet>
		<v-img
			max-height="70vh" contain
			:src="item.src"
		>

		</v-img>
		<v-card-title>{{ item.title }}</v-card-title>
	</v-sheet>
</template>

<script>
export default {
	name: "ItemInfo",

	props: {
		item: {
			type: Object,
			default: () => ({}),
		}
	},
}
</script>