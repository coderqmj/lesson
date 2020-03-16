<template>
  <div class="color">
    <audio src="../../assets/sound/成功.wav" id="audio"></audio>
    <div class="orange" @mouseenter="a" @mouseleave="b" @click="copy">
      <!-- <p v-show="isShowText">{{currentColor[0]}}</p> -->
      <span v-show="false" id="target">你好</span>
      <div class="copy" v-show="isShowText">COPY</div>
    </div>
    <button @click="copy">copy</button>
  </div>
</template>

<script>
import Clipboard from "clipboard";

export default {
  name: "Color",
  data() {
    return {
      isShowText: false,
      currentColor: ["#55efc4"]
    };
  },
  created() {},
  methods: {
    a() {
      this.isShowText = true;
    },
    b() {
      this.isShowText = false;
    },
    copy() {
      var audio = document.querySelector("#audio");
      audio.play();
      var copycode = document.querySelector(".target")
      copycode.select() // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      // console.log(text);
    }
  }
};
</script>

<style scoped>
.orange {
  background: #55efc4;
  height: 300px;
  width: 300px;
  margin: 50px auto;

  border-radius: 8px;

  /* 文字水平垂直居中 */
  text-align: center;
  line-height: 300px;

  transition: transform 0.5s ease;
}
.orange:hover {
  transform: scale(0.88);
}
.copy {
  height: 50px;
  width: 120px;

  display: inline-block;

  border: #fff 2px solid;
  text-align: center;
  line-height: 50px;

  border-radius: 10px;

  /* 字体设置 */
  color: #fff;
  font-weight: 1000;
  font-size: 20px;

  /* margin: 0 auto; */
}
</style>>
