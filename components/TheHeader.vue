<template>
	<v-app-bar 
		app
		color="white" 
		elevate-on-scroll 
		fixed
		class="px-15"
	>
			<v-toolbar-title 
				class="text-button font-weight-medium"
			>
				<v-hover v-slot="{ hover }">
					<span
						:style="hover ? 'cursor: pointer;' : ''" 
						@click="$vuetify.goTo(0)"
					>
						Ane Lill Nerbøvik
					</span>
				</v-hover>	
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-title class="px-2" v-if="$vuetify.breakpoint.smAndUp">
				<v-btn
					text
					@click="scrollTo('about')"
				>
					About
				</v-btn>
			</v-toolbar-title>      
			<v-toolbar-title class="px-2" v-if="$vuetify.breakpoint.smAndUp">
				<v-btn
					text
					@click="scrollTo('gallery')"
				>
					Gallery
				</v-btn>
			</v-toolbar-title>      
			<v-toolbar-title class="px-2" v-if="$vuetify.breakpoint.smAndUp">
				<v-btn
					text
					@click="scrollTo('contact')"
				>
					Contact
				</v-btn>
			</v-toolbar-title>
			
			
			<v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click="menu = !menu"></v-app-bar-nav-icon>
		</v-app-bar>
</template>

<script>
	export default {
		name: "TheHeader",

		data() {
			return {
				menu: false,
			}
		},

		methods: {
			scrollTo(section) {
				this.$vuetify.goTo("#" + section)
			},
		}
	}
</script>

<style scoped>
	/deep/ .v-toolbar__content {
		padding: 0px !important;
	}
</style>