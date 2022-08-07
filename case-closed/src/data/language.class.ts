import type { Sentence } from "./sentence.class";
import { Word, WordType, type Concept } from "./word.class";

export class Language{
    private dictionary:Concept[];
    public id:string = "";

    constructor(dictionary:Concept[]){
        this.dictionary = dictionary;
    }

    public getBuildOrder(structure:WordType[]):WordType[]{
        let order:WordType[] = [];

        if(structure[0] == WordType.Subject && structure[1] == WordType.Verb && structure[2] == WordType.Object){
            return [WordType.Subject, WordType.Verb, WordType.Object];
        }

        return order;
    }

    public findRandomDefinition(type:WordType):Concept{
        let possibles = this.dictionary.filter((definition)=>{
            return this.getTranslation(definition).possibleTypes.indexOf(type) > -1;
        });
        return possibles[Math.floor(Math.random()*possibles.length)];
    }

    public getTranslation(definition:Concept, functionInSentence:WordType | undefined = undefined, sentence:Sentence | undefined = undefined){
        return definition.translations[this.id];
    }

    public getVariant(word:Word, functionInSentence:WordType | undefined = undefined, sentence:Sentence | undefined = undefined):string{
        return word.get();
    }
}