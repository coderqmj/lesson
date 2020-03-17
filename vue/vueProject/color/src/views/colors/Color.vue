<template>
  <div class="color">
    <audio src="../../assets/sound/成功.wav" id="audio"></audio>
    <div class="line1">
      <div class="box orange" @click="copy(0)">
        <div class="copy">COPY</div>
      </div>
      <div class="box black" @click="copy(1)">
        <div class="copy">COPY</div>
      </div>
      <div class="box black" @click="copy(2)">
        <div class="copy">COPY</div>
      </div>
      <div class="box black" @click="copy(3)">
        <div class="copy">COPY</div>
      </div>
      <div class="box black" @click="copy(4)">
        <div class="copy">COPY</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Color",
  data() {
    return {
      currentColor: ["#55efc3", "#000"],
      currentIndex: null
    };
  },
  created() {},
  methods: {
    copy(index) {
      //点击音效
      var audio = document.querySelector("#audio");
      audio.play();

      //复制操作
      let content = document.createElement("input");
      content.value = this.currentColor[index];
      document.body.appendChild(content);
      content.select(); // 选择对象
      document.execCommand("Copy");
      document.body.removeChild(content);

      //弹窗
      // this.$Message.info("chengg");
      this.open2();
    },
    open2() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1000,
        center: true
      });
    }
  }
};
</script>

<style scoped>
.line1 {
  display: flex;
  height: 25vh;
  width: 100vw;
}
/* 所有盒子通用样式 */
.box {
  transition: transform 0.5s ease;

  /* 文字水平垂直居中 */
  text-align: center;
  line-height: 24vh;

  /* 小盒子大小 */
  height: 24vh;
  width: 25vw;

  /* 盒子的圆角 */
  border-radius: 8px;

  /* 行内块级元素 好让各个盒子在同一行 */
  display: inline-block;
  flex: 1;

  /* margin: 10px; */
}

/* 各自小盒子相关 */
.black {
  background: black;
}
.orange {
  background: #55efc4;
}
.box:hover {
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
