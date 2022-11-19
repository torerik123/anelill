<template>
	<div>
		<PageHeader :headerImg="headerImg"></PageHeader>
		<SectionHeader text="Ane Lill Nerbøvik"></SectionHeader>

		<v-card elevation="0">
			<v-card-text>
				Pizza ipsum dolor amet thin crust marinara mayo pepperoni pepperoni sausage bacon bacon & tomato steak platter garlic sauce white pizza red onions. Personal thin crust white garlic mayo garlic sauce. Bbq string cheese anchovies meat lovers burnt mouth pepperoni. Red onions meatball party philly steak chicken. Hawaiian broccoli chicken wing bianca pie pork, lasagna bacon & tomato pepperoni meatball thin crust stuffed meat lovers. Chicken wing ranch lasagna, chicken garlic sauce garlic parmesan bianca bbq rib meat lovers thin crust burnt mouth party steak white pizza. Mozzarella ham garlic parmesan, melted cheese pepperoni thin crust marinara ricotta bbq sauce.

Extra sauce banana peppers broccoli buffalo sauce, pizza red onions chicken wing marinara steak mayo. Burnt mouth chicken and bacon pineapple sausage string cheese. Black olives bbq hand tossed green bell peppers spinach garlic sauce sausage mozzarella chicken and bacon white pizza white garlic thin crust banana peppers. Pepperoni steak bacon & tomato bbq sauce, red onions ricotta mayo pork philly steak philly chicken bacon. Broccoli mayo string cheese, extra cheese meatball parmesan onions large fresh tomatoes melted cheese bbq rib lasagna mushrooms. Large pesto mayo red onions string cheese ricotta chicken extra sauce garlic fresh tomatoes peppers garlic sauce.
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import SectionHeader from "~/components/SectionHeader.vue"
import PageHeader from "~/components/PageHeader.vue"
export default {
	name: "About",
	components: { SectionHeader, PageHeader },

	data() {
		return {
			headerImg: this.$store.getters.images[3].src,
		}	
	},
}
</script>