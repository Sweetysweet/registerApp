<template>
  <div id="app" :class="mode">
    <div id="nav">
      <Toggle :mode="mode" @toggle="toggle" />
      <router-link to="/">Ladder</router-link> |
      <router-link to="/users">Users</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Toggle from "@/components/Toggle";

export default {
  name: "app",
  components: { Toggle },

  data: () => ({
    mode: "light",
  }),

  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  transition: background-color 0.3s ease-in-out;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.dark {
  background-color: #192734;
  color: #f3f3f3;
}
</style>
