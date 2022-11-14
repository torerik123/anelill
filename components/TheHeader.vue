<template>
	<div>
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
			<v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>

		<v-navigation-drawer
			app
			v-model="drawer"
			temporary
		>
			<v-list >
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="text-button font-weight-medium text-center">
							<v-hover v-slot="{ hover }">
								<span
									:style="hover ? 'cursor: pointer;' : ''" 
									@click="$vuetify.goTo(0)"
								>
									Ane Lill Nerbøvik
								</span>
							</v-hover>	
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item
					@click="scrollTo('about')"
				>
					<v-list-item-content class="v-btn"
					>
						About
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					@click="scrollTo('gallery')"
				>
				<v-list-item-content class="v-btn">
					Gallery
				</v-list-item-content>
				</v-list-item>
				<v-list-item
					@click="scrollTo('contact')"
				>
				<v-list-item-content class="v-btn">
					Contact
				</v-list-item-content>
				</v-list-item>
			</v-list>
			</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		name: "TheHeader",

		data() {
			return {
				drawer: false,
			}
		},

		methods: {
			scrollTo(section) {
				if (this.drawer) {
					this.drawer = false
				}
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