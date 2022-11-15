<template>
	<v-sheet id="contact" height="auto">
		<v-row>
			<v-col cols="12" class="text-center">
				<h2 class="py-10">Contact</h2>
			</v-col>
		</v-row>

		<p class="text-center" v-if="messageSent">Message sent!</p>

		<v-row dense no-gutters class="">
			<v-col cols="12">
				<v-form 
					ref="form"
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
						@click="validate"
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
		}
	},

	methods: {
		validate() {
			let valid = this.$refs.form.validate()

			if (valid) {
				console.log("--TODO")
				console.log("--Send form")
				console.log(this.name)
				console.log(this.email)
				console.log(this.message)
				
				this.name = ""
				this.email = ""
				this.message = ""
				
				this.messageSent = true
				// action="https://formspree.io/f/xpzoydbv"
				  // 		method="POST"
			}
		}
	}
}
</script>