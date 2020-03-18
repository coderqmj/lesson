<template>
  <div class="color">
    <audio src="../../assets/sound/成功.wav" id="audio"></audio>
    <div class="line1">
      <div class="box a" @click="copy(0)" @mouseenter="a(0)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===0">COPY</div>
      </div>
      <div class="box b" @click="copy(1)" @mouseenter="a(1)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===1">COPY</div>
      </div>
      <div class="box c" @click="copy(2)" @mouseenter="a(2)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===2">COPY</div>
      </div>
      <div class="box d" @click="copy(3)" @mouseenter="a(3)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===3">COPY</div>
      </div>
      <div class="box e" @click="copy(4)" @mouseenter="a(4)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===4">COPY</div>
      </div>
      <!-- --------------------------五个分界线----------------------------------- -->
      <div class="box f" @click="copy(5)" @mouseenter="a(5)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===5">COPY</div>
      </div>
      <div class="box g" @click="copy(6)" @mouseenter="a(6)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===6">COPY</div>
      </div>
      <div class="box h" @click="copy(7)" @mouseenter="a(7)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===7">COPY</div>
      </div>
      <div class="box i" @click="copy(8)" @mouseenter="a(8)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===8">COPY</div>
      </div>
      <div class="box j" @click="copy(9)" @mouseenter="a(9)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===9">COPY</div>
      </div>
      <!-- --------------------------十个分界线--------------------------------------- -->
      <div class="box k" @click="copy(10)" @mouseenter="a(10)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===10">COPY</div>
      </div>
      <div class="box l" @click="copy(11)" @mouseenter="a(11)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===11">COPY</div>
      </div>
      <div class="box m" @click="copy(12)" @mouseenter="a(12)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===12">COPY</div>
      </div>
      <div class="box n" @click="copy(13)" @mouseenter="a(13)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===13">COPY</div>
      </div>
      <div class="box o" @click="copy(14)" @mouseenter="a(14)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===14">COPY</div>
      </div>
      <!-- --------------------------十五个分界线----------------------------------- -->
      <div class="box p" @click="copy(15)" @mouseenter="a(15)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===15">COPY</div>
      </div>
      <div class="box q" @click="copy(16)" @mouseenter="a(16)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===16">COPY</div>
      </div>
      <div class="box r" @click="copy(17)" @mouseenter="a(17)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===17">COPY</div>
      </div>
      <div class="box s" @click="copy(18)" @mouseenter="a(18)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===18">COPY</div>
      </div>
      <div class="box t" @click="copy(19)" @mouseenter="a(19)" @mouseleave="b()">
        <div class="copy" v-show="currentIndex===19">COPY</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Color",
  data() {
    return {
      currentColor: [
        "#55efc3","#81ecec","#74b9ff","#a29bfe","#dfe6e9",
        "#00b894","#00cec9","#0984e3","#6c5ce7","#b2bec3",
        "#ffeaa7","#fab1a0","#ff7675","#fd79a8","#636e72",
        "#fdcb6e","#e17055","#d63031","#e84393","#2d3436"
        ],
      currentIndex: null
    };
  },
  created() {},
  methods: {
    a(index){
      this.currentIndex = index
    },
    b(){
      this.currentIndex = null
    },
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
  height: 100vh;
  width: 100vw;
  /* height: 800px;
  width: 800px; */

  flex-wrap: wrap;    /* 使其多行进行flex布局 */
  align-content: flex-start; /* 交叉轴上从start开始排列 */
}
/* 所有盒子通用样式 */
.box {
  transition: transform 0.5s ease;

  /* 文字水平垂直居中 */
  text-align: center;
  line-height: 24vh;

  /* 小盒子大小 */
  height: 25%;
  width: 20%;

  /* 盒子的圆角 */
  /* border-radius: 8px; */

  /* 行内块级元素 好让各个盒子在同一行 */
  display: inline-block;
  /* flex: 1; */

  /* margin: 10px; */
}

/* 各自小盒子相关 */
.a {
  background: #55efc4;
}
.b {
  background: #81ecec;
}
.c {
  background: #74b9ff;
}
.d {
  background: #a29bfe;
}
.e {
  background: #dfe6e9;
}
/* -------------------5------------------------ */
.f{
  background: #00b894;
}
.g{
  background: #00cec9;
}
.h{
  background: #0984e3;
}
.i{
  background: #6c5ce7;
}
.j{
  background: #b2bec3;
}
/* -------------------10------------------------ */
.k{
  background: #ffeaa7;
}
.l{
  background: #fab1a0;
}
.m{
  background: #ff7675;
}
.n{
  background: #fd79a8;
}
.o{
  background: #636e72;
}
/* -------------------15------------------------ */
.p{
  background: #fdcb6e;
}
.q{
  background: #e17055;
}
.r{
  background: #d63031;
}
.s{
  background: #e84393;
}
.t{
  background: #2d3436;
}

.box:hover {
  transform: scale(0.95);
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
