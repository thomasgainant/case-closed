<script lang="ts">
import { English } from '@/data/english.language';
import { Polish } from '@/data/polish.language';
import { Sentence } from '@/data/sentence.class';
import { Word, Concept, WordType } from '@/data/word.class';

export default {
    beforeMount(){
    this.dictionnary = [
        new Concept({
        'en': new Word({"default":"dog"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word({"default":"pies"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        }),
        new Concept({
        'en': new Word({"default":"cat"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word({"default":"kot"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        }),
        new Concept({
        'en': new Word({
            "default":"eat",
            "firstPerson": "eat",
            "secondPerson": "eat",
            "thirdPerson": "eats",
            "firstPersonPlural": "eat",
            "secondPersonPlural": "eat",
            "thirdPersonPlural": "eat"
            }, [WordType.Verb]),
        'pl': new Word({
            "default":"jeść",
            "firstPerson": "jem",
            "secondPerson": "jesz",
            "thirdPerson": "je",
            "firstPersonPlural": "jemy",
            "secondPersonPlural": "jecie",
            "thirdPersonPlural": "jedzą"
        }, [WordType.Verb]),
        }),
        new Concept({
        'en': new Word({
            "default":"chase",
            "firstPerson": "chase",
            "secondPerson": "chase",
            "thirdPerson": "chases",
            "firstPersonPlural": "chase",
            "secondPersonPlural": "chase",
            "thirdPersonPlural": "chase"
            }, [WordType.Verb]),
        'pl': new Word({
            "default":"ścigać",
            "firstPerson": "ścigam",
            "secondPerson": "ścigasz",
            "thirdPerson": "ściga",
            "firstPersonPlural": "ścigamy",
            "secondPersonPlural": "ścigacie",
            "thirdPersonPlural": "ścigają"
        }, [WordType.Verb]),
        }),
    ];

    this.polish = new Polish(this.dictionnary);
    this.english = new English(this.dictionnary);
    },
    methods: {
        generateSentence(){
            this.sentence = new Sentence(this.dictionnary, this.polish, [WordType.Subject, WordType.Verb, WordType.Object]);
            this.sentence.buildRandom(this.polish);
            this.translation = this.sentence.clone(this.english);
        }
    },
    mounted(){
        //console.log(this.sentence);
        this.generateSentence();
    },
    data() {
        return {
            sentence: undefined,
            translation: undefined
        }
    }
}
</script>

<template>
    <div id="content" @click="generateSentence()">
        <div class="sentence" v-if="sentence">
            {{ sentence.toString() }}
            <div class="translation">{{ translation.toString() }}</div>
        </div>
    </div>
</template>

<style>
    @font-face {
        font-family: "Amita";
        src: url('../assets/amita-regular.ttf');
    }

    .sentence{
        font-family: "Amita", Arial, Helvetica, sans-serif;
        color: #eeeeee;
        font-size: 4rem;
        text-align: center;
    }

    .translation{
        font-family: 'Courier New', Courier, monospace;
        font-size: 2rem;
    }
</style>