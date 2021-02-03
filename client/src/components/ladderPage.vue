<template lang="pug">
.ladder-wrapper
  h1 Добро пожаловать в Ладдер
  b-container.fluid
    b-form(@submit.prevent="userDataHandler")
      b-row
        b-col
          b-form-group(label="Аккаунт", label-for="nickname")
            b-form-input#nickname(
              ref="getnickname",
              v-model="userLogin",
              placeholder="Введите ваш аккаунт",
              required
            )
      b-row 
        b-col
          b-form-group(label="Пароль", label-for="password")
            b-form-input#password(
              ref="getuserpassword",
              v-model="userPassword",
              placeholder="Введите ваш пароль",
              type="password",
              required
            )
      b-row
        b-col
          b-button.register(variant="primary", type="submit") Зарегистрироваться
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ladderPage",
  data: () => ({
    username: "",
    password: "",
  }),

  computed: {
    userLogin: {
      get() {
        return this.username;
      },
      set(name) {
        name = name.replace(/\d/g, "");
        this.$refs.getnickname.value = name;
        this.username = name;
      },
    },
    userPassword: {
      get() {
        return this.password;
      },
      set(password) {
        this.$refs.getuserpassword.value = password;
        this.password = password;
      },
    },
  },

  methods: {
    ...mapActions({
      sendUserData: "auth/sendUserData",
    }),
    userDataHandler() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      this.sendUserData(userData);

      (this.username = ""), (this.password = "");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
