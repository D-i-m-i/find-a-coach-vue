<template>
  <base-card>
    <section><h2>Register as a coach now!</h2></section>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches'); // 'replace' does not allow us to go back to where we came from. This is good here as we do not want to go back to the form (better user experience)
    },
  },
};
</script>
