<template>
	<v-sheet id="contact" height="auto">
		<v-row>
			<v-col cols="12" class="text-center">
				<h2 class="py-10">Contact</h2>
			</v-col>
		</v-row>

		<p class="text-center" v-if="messageSent">{{ messageDeliveredText }}</p>

		<v-row dense no-gutters class="">
			<v-col cols="12">
				<v-form 
					ref="form"
					@submit.prevent="submitForm"
					class="mx-auto mb-2" 
					:style="$vuetify.breakpoint.smAndDown ? 'width: 100%;' : 'width: 70%;' "
				>
					<v-text-field 
						label="Name"
						v-model="name" 
						required 
						solo 
						hide-details="auto" 
						class="mb-4"
						:rules="[rules.required]"
					>
					</v-text-field>
					<v-text-field 
						label="Email" 
						v-model="email" 
						required 
						solo 
						hide-details="auto" 
						class="mb-4"
						:rules="[rules.email]"
					></v-text-field>
					<v-textarea 
						label="Message"
						v-model="message"
						required 
						solo 
						hide-details="auto" 
						class="mb-4"
						:rules="[rules.required]"
					>
					</v-textarea>
					<v-btn
						large 
						type="submit"
						color="primary"
					>
						Submit
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	name: "ContactForm",

	data() {
		return {
			rules: {
				required: value => !!value || 'Field can not be empty.',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				},
			},
			valid: true,
			name: "",
			email: "",
			message: "",
			messageSent: false,
			messageDeliveredText: "Message sent!",
		}
	},

	methods: {
		submitForm() {
			let valid = this.$refs.form.validate()

			if (valid) {
				const data = { 
					name: this.name, 
					email: this.email, 
					message: this.message, 
				}
				
				this.$axios.post("https://formspree.io/f/xzbwwdzy", {
					body: data,
					headers: {
         			   'Accept': 'application/json'
        				}
				}).then(response => {
					if (response.status == 200) {
						this.messageSent = true
						this.$refs.form.reset()
					}
				}).catch(error => {
					this.messageDeliveredText = "Something went wrong! Please try again later."
					console.log(error)
				})
			}
		}
	}
}
</script>