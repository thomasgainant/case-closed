<script setup lang="ts">
  import Info from '../src/components/Info.vue';
  import SentenceBlock from '../src/components/SentenceBlock.vue';
</script>

<template>
  <Info></Info>
  <SentenceBlock></SentenceBlock>
</template>

<style>
  html, body, #app{
    height: 100%;
    width: 100%;
    margin: 0;
    background: #D0677E;
  }

  a{
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }

  .bold{
    font-weight: bold;
  }

  #content{
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;

    padding: 0;

    align-items: center;
    justify-content: center;
  }
</style>
