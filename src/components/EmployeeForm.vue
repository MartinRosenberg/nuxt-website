<template>
	<div id="employee-form">
		<form @submit.prevent="handleSubmit">
			<label for="employee-name">Employee name</label>
			<input
				id="employee-name"
				ref="employee-name"
				v-model="employee.name"
				type="text"
				:class="{ 'has-error': submitting && invalidName }"
				@focus="clearStatus"
				@keypress="clearStatus"
			>
			<label for="employee-email">Employee Email</label>
			<input
				id="employee-email"
				v-model="employee.email"
				type="text"
				:class="{ 'has-error': submitting && invalidEmail }"
				@focus="clearStatus"
			>
			<p v-if="error && submitting" class="error-message">
				❗Please fill out all required fields
			</p>
			<p v-if="success" class="success-message">
				✅ Employee successfully added
			</p>
			<button>Add Employee</button>
		</form>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	type Employee = {
		id?: number
		name: string
		email: string
	}

	type Data = {
		submitting: boolean
		error: boolean
		success: boolean
		employee: Employee
	}

	export default Vue.extend({
		name: 'EmployeeForm',
		data (): Data {
			return {
				submitting: false,
				error: false,
				success: false,
				employee: {
					name: '',
					email: '',
				},
			}
		},
		computed: {
			invalidName (): boolean {
				return this.employee.name === ''
			},
			invalidEmail (): boolean {
				return this.employee.email === ''
			},
		},
		methods: {
			handleSubmit () {
				this.submitting = true
				this.clearStatus()

				if (this.invalidName || this.invalidEmail) {
					this.error = true
					return
				}

				this.$emit('add:employee', this.employee)
				;(this.$refs['employee-name'] as HTMLElement).focus()
				this.employee = {
					name: '',
					email: '',
				}
				this.error = false
				this.success = true
				this.submitting = false
			},
			clearStatus () {
				this.success = false
				this.error = false
			},
		},
	})
</script>

<style scoped>
	form {
		margin-bottom: 2rem;
	}

	[class*='-message'] {
		font-weight: 500;
	}

	.error-message {
		color: #d33c40;
	}

	.success-message {
		color: #32a95d;
	}
</style>
