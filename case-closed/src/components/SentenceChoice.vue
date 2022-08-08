<script lang="ts">
export default {
    props: ['choice'],
    mounted(){
        
    },
    data() {
        return {
            
        }
    },
    methods: {
      choose(event:MouseEvent){
        event.preventDefault();
        event.stopPropagation();
        this.$emit('choose', this.choice);
      }
    }
}
</script>

<template>
  <span class="choice" @click="choose">{{ choice }}</span>
</template>