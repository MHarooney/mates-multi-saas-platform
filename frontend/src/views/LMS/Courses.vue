<template>
  <div>
    <h1>LMS Courses</h1>
    <CourseList />
  </div>
</template>

<script>
import CourseList from '@/components/LMS/CourseList.vue';

export default {
  components: {
    CourseList,
  },
};
</script>
