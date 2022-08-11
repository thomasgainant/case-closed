<script lang="ts">import { defineComponent } from "vue";

export default defineComponent({
    props: [],
    mounted(){
        
    },
    data() {
        return {
            infoDisplayed: false
        }
    },
    methods: {
        openFirstLanguage(event:MouseEvent){
            event.preventDefault();
        },
        openSecondLanguage(event:MouseEvent){
            event.preventDefault();
        },
        openInfo(event:MouseEvent){
            event.preventDefault();
            this.infoDisplayed = !this.infoDisplayed;
        },
        openEmail(event:MouseEvent){
            event.stopPropagation();
        }
    }
})
</script>

<template>
  <div id="info">
    <!-- <a href="" title="Polish" @click="openFirstLanguage">PL</a>
    <a href="" title="English" @click="openSecondLanguage">EN</a> -->
    <a href="" title="Info" @click="openInfo">[i]</a>
  </div>
  <div v-if="infoDisplayed" id="infoPopup" @click="openInfo">
    <p>Hi there!</p>
    <p>I am a french developer currently learning polish and I started this hobby project about learning languages with a case system (like polish). This is a simple interactive "fill in the gaps" exercice with generated sentences.</p>
    <p>For the moment, it is really minimalistic, the sentences do not make any sense, you only have a simple subject-verb-object structure, the vocabulary is minimal and we can only have polish/english. But I have planned to improve all of this, of course.</p>
    <p>The current version of the app is <span class="bold">0.1.0</span>. Feel free to <a href="mailto:thomas@caseclosed.academy" @click="openEmail">shoot me an email</a> if you found any bug!</p>
    <p>Have fun learning!</p>
  </div>
</template>

<style>
#info{
    height: 2rem;
    width: 100%;
    box-sizing: border-box;

    position: absolute;
    top: 0;
    left: 0;
    
    padding: 0.25rem;

    font-family:'Courier New', Courier, monospace;
    color: #eeeeee;
}
    #info *{
        display: inline-block;

        height: 100%;

        margin-right: 0.25rem;
    }

#infoPopup{
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 100;

    height: 50%;
    width: 100%;
    box-sizing: border-box;

    padding-left: 1rem;
    padding-right: 1rem;

    font-family:'Courier New', Courier, monospace;
    color: #eeeeee;
    text-align: center;
    background: #D0677E;
}
</style>