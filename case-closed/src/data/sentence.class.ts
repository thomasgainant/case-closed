import type { Language } from "./language.class";
import type { Concept, Word, WordType } from "./word.class";

export class Sentence{
    public dictionary:Concept[];
    public lang:Language;

    public wantedStructure:WordType[] = [];
    public structure:WordType[] = [];
    public concepts:Concept[] = [];
    public words:Word[] = [];

    constructor(dictionary:Concept[], lang:Language, structure:WordType[]){
        this.dictionary = dictionary;
        this.lang = lang;
        this.wantedStructure = structure;
    }

    public buildRandom(){
        this.concepts = [];

        this.structure = this.lang.getBuildOrder(this.wantedStructure);
        for(let next of this.structure){
            this.concepts.push(this.lang.findRandomDefinition(next));
        }
        
        this.words = [];
        for(let index in this.concepts){
            let definition = this.concepts[index];
            this.words.push(this.lang.getTranslation(definition, this.structure[index], this));
        }
    }

    public clone(lang:Language){
        let clone = new Sentence(this.dictionary, lang, this.wantedStructure);

        clone.concepts = [];

        clone.structure = lang.getBuildOrder(clone.wantedStructure);
        for(let next of clone.structure){
            let posInOriginal = this.structure.indexOf(next);
            clone.concepts.push(this.concepts[posInOriginal]);
        }

        clone.words = [];
        for(let index in clone.concepts){
            let definition = this.concepts[index];
            clone.words.push(lang.getTranslation(definition, this.structure[index], this));
        }

        return clone;
    }

    public getConcept(functionInSentence:WordType){
        for(let index in this.structure){
            let currentFunction = this.structure[index];
            if(currentFunction == functionInSentence){
                return this.concepts[index];
            }
        }
    }

    public toString(){
        let result = "";
        for(let index in this.words){
            let word = this.words[index];
            if(result != ""){
                result += " ";
            }
            result += this.lang.getVariant(word, this.structure[index], this);
        }
        return result;
    }
}