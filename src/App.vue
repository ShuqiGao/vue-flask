<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{datetime}}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datetime: "eeeeeee"
    };
  },
  methods: {
    initData() {
      this.$ajax.get("http://127.0.0.1:5000/time", {}).then(res => {
        this.datetime = res.data.time;
      });
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>