<template>
	<v-footer color="white" absolute app>
		<v-row dense no-gutters>
			<v-col align-self=center>
				<span>&copy; {{ new Date().getFullYear() }}</span> | Ane Lill Nerbøvik
			</v-col>
			<v-spacer></v-spacer>
			<v-col cols="auto">
				<v-btn icon large link href="https://www.instagram.com/byanelill" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
			</v-col>
		</v-row>
	</v-footer>
</template>
<script>
export default {
	name: "TheFooter",
}
</script>