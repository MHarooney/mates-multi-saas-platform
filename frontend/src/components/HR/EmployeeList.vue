<template>
  <div>
    <h2>Employees</h2>
    <ul>
      <li v-for="employee in employees" :key="employee.id">{{ employee.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],
    };
  },
  async created() {
    const response = await this.$http.get('/api/hr/employees');
    this.employees = response.data;
  },
};
</script>
