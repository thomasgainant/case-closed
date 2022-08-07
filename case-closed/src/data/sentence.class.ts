import type { Language } from "./language.class";
import type { WordDefinition, Word, WordType } from "./word.class";

export class Sentence{
    public dictionary:WordDefinition[];

    public wantedStructure:WordType[] = [];
    public structure:WordType[] = [];
    public definitions:WordDefinition[] = [];
    public words:Word[] = [];

    constructor(dictionary:WordDefinition[], structure:WordType[]){
        this.dictionary = dictionary;
        this.wantedStructure = structure;
    }

    public buildRandom(lang:Language){
        this.definitions = [];

        this.structure = lang.getBuildOrder(this.wantedStructure);
        for(let next of this.structure){
            this.definitions.push(lang.findRandomDefinition(next));
        }
        
        this.words = [];
        for(let definition of this.definitions){
            this.words.push(lang.getTranslation(definition));
        }
    }

    public clone(lang:Language){
        let clone = new Sentence(this.dictionary, this.wantedStructure);

        clone.definitions = [];

        clone.structure = lang.getBuildOrder(clone.wantedStructure);
        for(let next of clone.structure){
            let posInOriginal = this.structure.indexOf(next);
            clone.definitions.push(this.definitions[posInOriginal]);
        }

        clone.words = [];
        for(let definition of clone.definitions){
            clone.words.push(lang.getTranslation(definition));
        }

        return clone;
    }

    public toString(){
        let result = "";
        for(let word of this.words){
            if(result != ""){
                result += " ";
            }
            result += word.toString();
        }
        return result;
    }
}