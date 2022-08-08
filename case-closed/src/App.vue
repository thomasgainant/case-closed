<script setup lang="ts">
  import SentenceBlock from '../src/components/SentenceBlock.vue';
</script>

<template>
  <SentenceBlock></SentenceBlock>
</template>

<style>
  html, body, #app{
    height: 100%;
    width: 100%;
    margin: 0;
    background: #D0677E;
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
