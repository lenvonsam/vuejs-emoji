<template>
  <div style="display:inline-block;position:relative;">
    <i class="fa" :class="iconName" :style="{'font-size': iconSize, 'color': iconColor}" @click="panelShow=!panelShow"></i>
    <div class="emoji-wrap" v-bind:class="panelCalss" v-if="panelShow">
      <vue-emoji @select="emojiChoosed"></vue-emoji>
    </div>
  </div>
</template>

<script>
  import vueEmoji from './emojiPanel.vue'
  export default {
    props: {
      iconConfig: {
        type: Object,
        default: {
          placement: 'top',
          size: '30px',
          name: 'fa-smile-o',
          color: '#278dff'
        }
      }
    },
    components: {
      vueEmoji
    },
    computed: {
      panelCalss () {
        return this.iconConfig.placement === undefined ? 'emoji-top' : `emoji-${this.iconConfig.placement}`
      },
      iconSize () {
        return this.iconConfig.size === undefined ? '30px' : this.iconConfig.size
      },
      iconName () {
        return this.iconConfig.name === undefined ? 'fa-smile-o' : this.iconConfig.name
      },
      iconColor () {
        return this.iconConfig.color === undefined ? '#278dff' : this.iconConfig.color
      }
    },
    data () {
      return {
        panelShow: false
      }
    },
    beforeMount () {

    },
    methods: {
      emojiChoosed (val) {
        this.$emit('select', val)
        this.panelShow = false
      }
    }
  }
</script>

<style scoped>
  @import url('../assets/css/font-awesome.min.css');
  .fa:hover {
    cursor: pointer;
  }
  .emoji-wrap {
    position: absolute;
    z-index: 20;
    width: 380px;
    height: 180px;
  }

  .emoji-wrap.emoji-top {
    top: -190px;
    left: 0px;
  }

  .emoji-wrap.emoji-left {
    top: 0px;
    left: -390px;
  }

  .emoji-wrap.emoji-right {
    top: -100px;
    right: -390px;
  }

  .emoji-wrap.emoji-bottom {
    top: 30px;
    left: 0px;
  }
</style>
