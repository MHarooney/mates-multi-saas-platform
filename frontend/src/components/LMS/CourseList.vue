<template>
  <div>
    <h2>Courses</h2>
    <ul>
      <li v-for="course in courses" :key="course.id">{{ course.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
    };
  },
  async created() {
    const response = await this.$http.get('/api/lms/courses');
    this.courses = response.data;
  },
};
</script>
