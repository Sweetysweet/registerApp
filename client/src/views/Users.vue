<template>
  <div class="about">
    <h1>Список зарегистрированных пользователей</h1>
    <b-table :items="USERS"></b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getAllUsers()
    })
  },

  computed: {
    ...mapGetters({
      USERS: "user/GET_USERS",
    }),
  },

  methods: {
    ...mapActions({
      getAllUsers: 'user/get_all_users'
    }),
  }
};
</script>
