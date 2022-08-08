<script lang="ts">
import { English } from '@/data/english.language';
import { Polish } from '@/data/polish.language';
import { Sentence } from '@/data/sentence.class';
import { Word, Concept, WordType } from '@/data/word.class';
import SentenceChoices from './SentenceChoices.vue';

export default {
    beforeMount() {
        this.dictionnary = [
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
        this.polish = new Polish(this.dictionnary);
        this.english = new English(this.dictionnary);
    },
    methods: {
        generateSentence() {
            clearInterval(this.interval);
            this.interval = null;
            this.selected = "";
            this.highlight = false;

            this.sentence = new Sentence(this.dictionnary, this.polish, [WordType.Subject, WordType.Verb, WordType.Object]);
            this.sentence.buildRandom(this.polish);
            this.translation = this.sentence.clone(this.english);
            this.displayedSentence = [];
            let pos = this.sentence.structure.indexOf(WordType.Object);
            for (let index = 0; index < this.sentence.structure.length; index++) {
                if (index == pos) {
                    this.displayedSentence.push(this.sentence.words[index].values);
                }
                else {
                    this.displayedSentence.push(this.sentence.lang.getVariant(this.sentence.words[index], this.sentence.structure[index], this.sentence));
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
                if(this.interval != null){
                    this.highlight = true;
                    this.selected = this.sentence.toString();
                    clearInterval(this.interval);
                    this.interval = null;
                }
            }, 2000);
        }
    },
    mounted() {
        this.generateSentence();
    },
    data() {
        return {
            sentence: undefined,
            displayedSentence: [],
            translation: undefined,
            selected: "",
            highlight: false,
            interval: null
        };
    },
    components: { SentenceChoices }
}
</script>

<template>
    <div id="content" @click="generateSentence()">
        <div class="sentence" v-if="sentence && selected == ''">
            <span v-for="sentencePart in displayedSentence" class="sentencePart">
                <span v-if="!sentencePart.default">{{ sentencePart }}</span>
                <SentenceChoices v-if="sentencePart.default" :choices="sentencePart" @choose="choose"></SentenceChoices>
            </span>
            <div class="translation">{{ translation.toString() }}</div>
        </div>
        <div :class="{'sentence': true, 'selected': true, 'highlight': highlight}" v-if="sentence && selected != ''">
            {{ selected }}
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