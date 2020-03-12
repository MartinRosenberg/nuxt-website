<template>
	<div id="app" class="small-container">
		<h1>Employees</h1>

		<EmployeeForm @add:employee="addEmployee" />
		<EmployeeTable :employees="employees" @delete:employee="deleteEmployee" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	import EmployeeForm from '@/components/EmployeeForm.vue'
	import EmployeeTable from '@/components/EmployeeTable.vue'

	type Employee = {
		id?: number
		name: string
		email: string
	}

	type Data = {
		employees: Employee[]
	}

	export default Vue.extend({
		name: 'App',
		components: {
			EmployeeForm,
			EmployeeTable,
		},
		data (): Data {
			return {
				employees: [
					{
						id: 0,
						name: 'Richard Hendricks',
						email: 'richard@piedpiper.com',
					},
					{
						id: 1,
						name: 'Bertram Gilfoyle',
						email: 'gilfoyle@piedpiper.com',
					},
					{
						id: 2,
						name: 'Dinesh Chugtai',
						email: 'dinesh@piedpiper.com',
					},
				],
			}
		},
		methods: {
			addEmployee (employee: Employee): void {
				const newEmployee = { ...employee, id: this.employees.length }
				this.employees = [...this.employees, newEmployee]
			},
			deleteEmployee (id: number): void {
				this.employees = this.employees.filter((employee) => employee.id !== id)
			},
		},
	})
</script>

<style>
	button {
		background: #009435;
		border: 1px solid #009435;
	}

	.small-container {
		max-width: 680px;
	}
</style>
