<template>
	<div id="employee-table">
		<table>
			<thead>
				<tr>
					<th>Employee name</th>
					<th>Employee email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee in employees" :key="employee.id">
					<td>{{ employee.name }}</td>
					<td>{{ employee.email }}</td>
					<td>
						<button>Edit</button>
						<button @click="$emit('delete:employee', employee.id)">
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: 'EmployeeTable',
		props: {
			employees: {
				type: Array,
				default: () => ([]),
			},
		},
	})
</script>

<style scoped>
	button {
		margin: 0 0.5rem 0 0;
	}
</style>
