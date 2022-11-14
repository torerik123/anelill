<template>
	<v-app-bar color="white" elevate-on-scroll fixed app>
			<v-toolbar-title class="pl-11 text-button font-weight-medium">
				<v-btn
					text
					@click="$vuetify.goTo(0)"
				>
					Ane Lill Nerbøvik
				</v-btn>
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-title class="px-2" >
				<v-btn
					text
					@click="scrollTo('about')"
				>
					About
				</v-btn>
			</v-toolbar-title>      
			<v-toolbar-title class="px-2">
				<v-btn
					text
					@click="scrollTo('gallery')"
				>
					Gallery
				</v-btn>
			</v-toolbar-title>      
			<v-toolbar-title class="px-2">
				<v-btn
					text
					@click="scrollTo('contact')"
				>
					Contact
				</v-btn>
			</v-toolbar-title>      
		</v-app-bar>
</template>

<script>
	export default {
		name: "TheHeader",

		methods: {
			scrollTo(section) {
				this.$vuetify.goTo("#" + section)
			},
		}
	}
</script>