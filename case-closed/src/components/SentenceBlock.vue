<script lang="ts">
import { English } from '@/data/english.language';
import { Polish } from '@/data/polish.language';
import { Sentence } from '@/data/sentence.class';
import { Word, WordDefinition, WordType } from '@/data/word.class';

export default {
    beforeMount(){
        let dictionnary:WordDefinition[] = [
        new WordDefinition({
        'en': new Word("dog", [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word("pies", [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        }),
        new WordDefinition({
        'en': new Word("cat", [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word("kot", [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        }),
        new WordDefinition({
        'en': new Word("eat", [WordType.Verb]),
        'pl': new Word("jeść", [WordType.Verb]),
        }),
    ];

    let polish = new Polish(dictionnary);
    let english = new English(dictionnary);

    this.sentence = new Sentence(dictionnary, [WordType.Subject, WordType.Verb, WordType.Object]);
    this.sentence.buildRandom(polish);
    this.translation = this.sentence.clone(english);
    },
    mounted(){
        //console.log(this.sentence);
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
  <div class="sentence" v-if="sentence">
    {{ sentence.toString() }}
    <div class="translation">{{ translation.toString() }}</div>
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
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
    }
</style>