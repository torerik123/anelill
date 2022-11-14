<template>
	<div>
		<!-- Header img -->
		<v-sheet class="px-15 pt-10 overflow-hidden" height="auto">
		<v-img
			width="100%"
			contain
			src="/assets/taakeskog.jpg"
		></v-img>
	</v-sheet>

	<!-- About  -->
	<v-sheet id="about" height="auto">
		<v-row>
			<v-col cols="12" class="px-15 text-center">
				<h2 class="py-10">Ane Lill is a norwegian artist based in Trondheim</h2>
			</v-col>
		</v-row>
	</v-sheet>
	

	<!-- Images  -->
	<v-sheet id="gallery" height="auto" class="">
		<v-row dense no-gutters class="px-15 justify-space-between">
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/taakemaleri.jpg"
					max-width="300"
					height="auto"
					contain
				>
				</v-img>
			</v-col>
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/kraake.jpg"
					max-width="300"
					contain
					height="auto"
				>
				</v-img>
			</v-col>
		</v-row>
		<v-row dense no-gutters class="px-15 pt-10 justify-space-between">
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/blameis.jpg"
					max-width="300"
					height="auto"
					contain
				>
				</v-img>
			</v-col>
			<v-col cols="6" class="">
				<v-img
					class="mx-auto"
					src="/assets/skisse.jpg"
					max-width="300"
					contain
					height="auto"
				>
				</v-img>
			</v-col>
		</v-row>
	</v-sheet>

	<!-- Contact  -->
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

	</div>
</template>