<template>
  <div class="btn1">
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};
</script>
<style scope>
.btn1{
    width: 100%;
    height: 500px;
    background-color: blck;
}

    
</style>