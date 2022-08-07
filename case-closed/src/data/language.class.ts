import { WordType, type WordDefinition } from "./word.class";

export class Language{
    private dictionary:WordDefinition[];
    public id:string = "";

    constructor(dictionary:WordDefinition[]){
        this.dictionary = dictionary;
    }

    public getBuildOrder(structure:WordType[]):WordType[]{
        let order:WordType[] = [];

        if(structure[0] == WordType.Subject && structure[1] == WordType.Verb && structure[2] == WordType.Object){
            return [WordType.Subject, WordType.Verb, WordType.Object];
        }

        return order;
    }

    public findRandomDefinition(type:WordType):WordDefinition{
        let possibles = this.dictionary.filter((definition)=>{
            return this.getTranslation(definition).possibleTypes.indexOf(type) > -1;
        });
        return possibles[Math.floor(Math.random()*possibles.length)];
    }

    public getTranslation(definition:WordDefinition){
        return definition.translations[this.id];
    }
}