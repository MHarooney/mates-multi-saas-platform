<template>
  <div>
    <h1>HR Employees</h1>
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '@/components/HR/EmployeeList.vue';

export default {
  components: {
    EmployeeList,
  },
};
</script>
