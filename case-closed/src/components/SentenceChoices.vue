<script lang="ts">
import { defineComponent } from 'vue';
import SentenceChoice from './SentenceChoice.vue';

export default defineComponent({
    props: ["choices"],
    mounted() {
        
    },
    data() {
        return {
            droppedDown: false
        };
    },
    methods: {
        display(event: MouseEvent) {
            event.preventDefault();
            event.stopPropagation();

            this.droppedDown = !this.droppedDown;
        },
        choose(choice:string){
            this.$emit('choose', choice);
        }
    },
    components: { SentenceChoice }
})
</script>

<template>
    <span class="choices" :style="{ overflow: (droppedDown ? 'visible' : 'hidden') }">
        <SentenceChoice v-if="!droppedDown" choice="?" @click="display"></SentenceChoice>
        <SentenceChoice v-if="droppedDown" v-for="(choice, key, index) of choices" :choice="choice" @choose="choose"></SentenceChoice>
    </span>
</template>

<style>
    .choices{
        display: inline-block;
        position: relative;
        height: 4rem;
        min-width: 8rem;
        overflow: hidden;
        vertical-align: top;

        cursor: pointer;
        border-bottom: double;
    }

        .choices .choice{
            display: block;
            background: #D0677E;
            color: rgba(255, 255, 255, 0.75);
        }
        .choices .choice:hover{
            color: #fff;
        }
</style>