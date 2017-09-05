<template>
<div style="border: 1px solid #ddd;display:inline-block;">
  <div class="emoji">
    <ul class="emoji-controller">
      <li
        v-for="(pannel,index) in pannels"
        @click="changeActive(index)"
        :class="{'active': index === activeIndex}">{{ pannel }}</li>
    </ul>
    <ul class="emoji-container">
      <li
        v-for="(emojiGroup, index) in emojis"
        style="padding: 0"
        :key="index"
        v-if="index === activeIndex">
        <a
          href="javascript:;"
          v-for="(emoji, index) in emojiGroup"
          :key="index" @click="selectItem(emoji)">
           <span
              class="emoji-item"
              :title="emoji"
              :class="'sprite-' + getPureName(emoji)"></span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import data from './emoji-data.js'
import { emoji } from './emoji.js'

export default {
  name: 'emoji',
  data () {
    return {
      emojiData: data,
      pannels: ['表情', '自然', '物品', '地点', '符号'],
      activeIndex: 0
    }
  },
  methods: {
    changeActive (index) {
      this.activeIndex = index
    },
    getPureName (name) {
      return name.replace(/:/g, '')
    },
    selectItem (emoji) {
      this.$emit('select', this.emoji(emoji))
    },
    emoji
  },
  computed: {
    emojis () {
      return this.pannels.map(item => {
        return Object.keys(this.emojiData[item])
      })
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/bootstrap.css');
@import url('../assets/css/iconfont.css');
@import url('./emoji-sprite.css');
.emoji {
  width: 380px;
  height: 180px;
  background: #fff;
  z-index: 10;
  box-shadow: 1px 5px 5px #ccc;
  display: flex;
}
.emoji .emoji-controller {
  list-style: none;
  height: 36px;
  font-size: 14px !important;
  margin-bottom: 0;
  -webkit-padding-start: 0px;
}
.emoji .emoji-controller li {
  width: 76px;
  font-size: 12px;
  line-height: 36px;
  cursor: pointer;
  margin: 0 0 !important;
  text-align: center;
  position: relative;
  border-right: 1px solid #ddd;
  color: #888;
}
.emoji .emoji-controller li.active {
  background: #31b2ff;
  color: #fcfcfc;
  border-right: 0px;
}
.emoji .emoji-container {
  height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  margin-left: 0px;
  -webkit-padding-start: 10px;
}
.emoji .emoji-container li {
  font-size: 0;
  padding: 5px;
}
.emoji .emoji-container li a {
  float: left;
  overflow: hidden;
  height: 35px;
  transition: all ease-out .2s;
  border-radius: 4px;
}
.emoji .emoji-container li a:hover {
  background-color: #d8d8d8;
  border-color: #d8d8d8;
}
.emoji .emoji-container li span {
  width: 25px;
  height: 25px;
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
}
</style>
