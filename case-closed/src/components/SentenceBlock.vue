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
        'pl': new Word({
            "default":"pies",
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
        'en': new Word({"default":"cat"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word({
            "default":"kot",
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
        'en': new Word({"default":"food"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word({
            "default":"jedzenie",
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
        'en': new Word({"default":"boy"}, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        'pl': new Word({
            "default":"chłopiec",
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
        'en': new Word({
            "default":"like",
            "firstPerson": "like",
            "secondPerson": "like",
            "thirdPerson": "likes",
            "firstPersonPlural": "like",
            "secondPersonPlural": "like",
            "thirdPersonPlural": "like"
            }, [WordType.Verb]),
        'pl': new Word({
            "default":"lubić",
            "firstPerson": "lubię",
            "secondPerson": "lubisz",
            "thirdPerson": "lubi",
            "firstPersonPlural": "lubimy",
            "secondPersonPlural": "lubicie",
            "thirdPersonPlural": "lubią"
        }, [WordType.Verb]),
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