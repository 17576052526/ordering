<template>
  <div id="app">
    <router-view/>
    <Nav/><!--nav是关键词，所以不能用小写-->
  </div>
</template>

<script>
import Nav from './components/Shared/Nav'
export default {
  name: 'App',
  components:{Nav}
}
</script>

<style>
@import './../static/css/css.css';
/*字体图标*/
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('./../static/fonts/glyphicons-halflings-regular.eot');
  src: url('./../static/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('./../static/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('./../static/fonts/glyphicons-halflings-regular.woff') format('woff'), url('./../static/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('./../static/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.glyphicon-home:before {content: "\e021";}
.glyphicon-edit:before {content: "\e065";}
.glyphicon-tree-deciduous:before {content: "\e200";}
</style>
