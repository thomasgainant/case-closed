<script lang="ts">
import { English } from '@/data/english.language';
import type { Language } from '@/data/language.class';
import { Polish } from '@/data/polish.language';
import { Sentence } from '@/data/sentence.class';
import { Word, Concept, WordType } from '@/data/word.class';
import { defineComponent } from 'vue';
import SentenceChoices from './SentenceChoices.vue';

export default defineComponent({
    beforeMount() {
        this.dictionary = [
            new Concept({
                "en": new Word({ "default": "dog" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
                "pl": new Word({
                    "default": "pies",
                    "nominative": "pies",
                    "genitive": "psa",
                    "dative": "psu",
                    "accusative": "psa",
                    "instrumental": "psem",
                    "locative": "psie",
                    "vocative": "psie"
                }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
            }),
            new Concept({
                "en": new Word({ "default": "cat" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
                "pl": new Word({
                    "default": "kot",
                    "nominative": "kot",
                    "genitive": "kota",
                    "dative": "kotu",
                    "accusative": "kota",
                    "instrumental": "kotem",
                    "locative": "kocie",
                    "vocative": "kocie"
                }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
            }),
            new Concept({
                "en": new Word({ "default": "food" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
                "pl": new Word({
                    "default": "jedzenie",
                    "nominative": "jedzenie",
                    "genitive": "jedzenia",
                    "dative": "jedzeniu",
                    "accusative": "jedzenie",
                    "instrumental": "jedzeniem",
                    "locative": "jedzeniu",
                    "vocative": "jedzenie"
                }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
            }),
            new Concept({
                "en": new Word({ "default": "boy" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
                "pl": new Word({
                    "default": "chłopiec",
                    "nominative": "chłopiec",
                    "genitive": "chłopca",
                    "dative": "chłopcu",
                    "accusative": "chłopca",
                    "instrumental": "chłopcem",
                    "locative": "chłopcu",
                    "vocative": "chłopcze"
                }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
            }),
            new Concept({
                "en": new Word({ "default": "flower" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
                "pl": new Word({
                    "default": "kwiat",
                    "nominative": "kwiat",
                    "genitive": "kwiatu",
                    "dative": "kwiatu",
                    "accusative": "kwiat",
                    "instrumental": "kwiatem",
                    "locative": "kwiecie",
                    "vocative": "kwiecie"
                }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
            }),
            new Concept({
                "en": new Word({
                    "default": "like",
                    "firstPerson": "like",
                    "secondPerson": "like",
                    "thirdPerson": "likes",
                    "firstPersonPlural": "like",
                    "secondPersonPlural": "like",
                    "thirdPersonPlural": "like"
                }, [WordType.Verb]),
                "pl": new Word({
                    "default": "lubić",
                    "firstPerson": "lubię",
                    "secondPerson": "lubisz",
                    "thirdPerson": "lubi",
                    "firstPersonPlural": "lubimy",
                    "secondPersonPlural": "lubicie",
                    "thirdPersonPlural": "lubią"
                }, [WordType.Verb]),
            }),
            new Concept({
                "en": new Word({
                    "default": "eat",
                    "firstPerson": "eat",
                    "secondPerson": "eat",
                    "thirdPerson": "eats",
                    "firstPersonPlural": "eat",
                    "secondPersonPlural": "eat",
                    "thirdPersonPlural": "eat"
                }, [WordType.Verb]),
                "pl": new Word({
                    "default": "jeść",
                    "firstPerson": "jem",
                    "secondPerson": "jesz",
                    "thirdPerson": "je",
                    "firstPersonPlural": "jemy",
                    "secondPersonPlural": "jecie",
                    "thirdPersonPlural": "jedzą"
                }, [WordType.Verb]),
            }),
            new Concept({
                "en": new Word({
                    "default": "drink",
                    "firstPerson": "drink",
                    "secondPerson": "drink",
                    "thirdPerson": "drinks",
                    "firstPersonPlural": "drink",
                    "secondPersonPlural": "drink",
                    "thirdPersonPlural": "drink"
                }, [WordType.Verb]),
                "pl": new Word({
                    "default": "pić",
                    "firstPerson": "piję",
                    "secondPerson": "pijesz",
                    "thirdPerson": "pije",
                    "firstPersonPlural": "pijemy",
                    "secondPersonPlural": "pijecie",
                    "thirdPersonPlural": "piją"
                }, [WordType.Verb]),
            }),
            new Concept({
                "en": new Word({
                    "default": "chase",
                    "firstPerson": "chase",
                    "secondPerson": "chase",
                    "thirdPerson": "chases",
                    "firstPersonPlural": "chase",
                    "secondPersonPlural": "chase",
                    "thirdPersonPlural": "chase"
                }, [WordType.Verb]),
                "pl": new Word({
                    "default": "ścigać",
                    "firstPerson": "ścigam",
                    "secondPerson": "ścigasz",
                    "thirdPerson": "ściga",
                    "firstPersonPlural": "ścigamy",
                    "secondPersonPlural": "ścigacie",
                    "thirdPersonPlural": "ścigają"
                }, [WordType.Verb]),
            }),
        ];
        this.polish = new Polish(this.dictionary);
        this.english = new English(this.dictionary);
    },
    methods: {
        generateSentence() {
            clearInterval(this.interval);
            this.interval = undefined;
            this.selected = "";
            this.highlight = false;

            this.sentence = new Sentence(this.dictionary, this.polish as Language, [WordType.Subject, WordType.Verb, WordType.Object]);
            this.sentence.buildRandom();
            this.translation = this.sentence.clone(this.english as Language);
            this.displayedSentence = [];
            let pos = this.sentence.structure.indexOf(WordType.Object);
            for (let index = 0; index < this.sentence.structure.length; index++) {
                if (index == pos) {
                    let mixedValue:string[] = [];
                    let keys = Object.keys(this.sentence.words[index].values);
                    let picked:string[] = [];

                    while(picked.length < keys.length){
                        let current = keys[Math.floor(Math.random()*keys.length)];
                        if(picked.indexOf(current) == -1){
                            picked.push(current);
                            let valueToAdd = this.sentence.words[index].values[current];
                            if(mixedValue.indexOf(valueToAdd) == -1){
                                mixedValue.push(valueToAdd);
                            }
                        }
                    }

                    this.displayedSentence.push(mixedValue);
                }
                else {
                    this.displayedSentence.push(this.sentence.lang.getVariant(this.sentence.words[index], this.sentence.structure[index], this.sentence as Sentence));
                }
            }
        },
        choose(choice:string){
            this.selected = "";
            for(let part of this.displayedSentence){
                if (typeof part === 'string' || part instanceof String){
                    this.selected += part + " ";
                }
                else{
                    this.selected += choice + " ";
                }
            }

            this.interval = setInterval(() => {
                this.highlight = !this.highlight;
            }, 300);
            setTimeout(() => {
                if(this.interval != undefined){
                    this.highlight = true;
                    this.selected = (this.sentence as Sentence).toString();
                    clearInterval(this.interval);
                    this.interval = undefined;
                }
            }, 2000);
        }
    },
    mounted() {
        this.generateSentence();
    },
    data() {
        return {
            dictionary: [] as Concept[],
            polish: undefined as Language | undefined,
            english: undefined as Language | undefined,
            sentence: undefined as Sentence | undefined,
            displayedSentence: [] as (string | string[])[],
            translation: undefined as Sentence | undefined,
            selected: "",
            highlight: false,
            interval: undefined as number | undefined
        };
    },
    components: { SentenceChoices }
})
</script>

<template>
    <div id="content" @click="generateSentence()">
        <div class="sentence" v-if="sentence && selected == ''">
            <span v-for="sentencePart in displayedSentence" class="sentencePart">
                <span v-if="!Array.isArray(sentencePart)">{{ sentencePart }}</span>
                <SentenceChoices v-if="Array.isArray(sentencePart)" :choices="sentencePart" @choose="choose"></SentenceChoices>
            </span>
            <div class="translation">{{ (translation as any).toString() }}</div>
        </div>
        <div :class="{'sentence': true, 'selected': true, 'highlight': highlight}" v-if="sentence && selected != ''">
            {{ selected }}
            <div class="translation">{{ (translation as any).toString() }}</div>
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
        line-height: 4rem;
        text-align: center;
    }
    .sentence.selected{
        color: rgba(255, 255, 255, 0.5);
    }
    .sentence.selected.highlight{
        color: rgba(255, 255, 255, 1.0);
    }
        .sentence .sentencePart{
            display: inline;
            height: 4rem;
            overflow: hidden;

            margin-right: 1rem;
        }

    .translation{
        font-family: 'Courier New', Courier, monospace;
        font-size: 2rem;
    }
</style>