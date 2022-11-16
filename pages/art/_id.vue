<template>
	<div>
		<ItemInfo :item="item"></ItemInfo>
	</div>
</template>

<script>
import ItemInfo from "~/components/ItemInfo";
export default {
	name: "InfoPage",
	components: { ItemInfo },

	computed: {
		item() {
			const id = this.$route.params.id
			return this.$store.getters.images.find(img => img.id == id)
		},
	},
}
</script>