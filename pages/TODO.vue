<template>
	<v-list>
		<v-list-item>Lazy load images --> get sizes, srcet</v-list-item>
		<v-list-item>Notify DATOCMS after successful build</v-list-item>
		<!-- # Successful build notification example
		curl -n -X POST https://webhooks.datocms.com/yqztWHMNJ1/deploy-results \
		-H 'Content-Type: application/json' \
		-d '{ "status": "success" }'

		# Failed build notification example
		curl -n -X POST https://webhooks.datocms.com/yqztWHMNJ1/deploy-results \
		-H 'Content-Type: application/json' \
		-d '{ "status": "error" }' -->
		
		<v-list-item>Redirect /admin to datocms</v-list-item>
		<v-list-item>Use optimized images -> webp from datoCMS => datoCMS img component</v-list-item>
		<v-list-item>Use SSR ==> host on vercel</v-list-item>
		<v-list-item>Animations</v-list-item>
		<v-list-item>Loading spinners -> lazy loading osv</v-list-item>
		<v-list-item>Check everything response</v-list-item>
		<v-list-item> 
				--> improve lighthouse score
		</v-list-item>
	</v-list>
</template>