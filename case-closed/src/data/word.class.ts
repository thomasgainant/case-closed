import type { Language } from "./language.class";

export enum WordType{
    Subject,
    Verb,
    Object,
    PersonInfo,
    PlaceInfo,
    TimeInfo
}

export enum Gender{
    Masculine,
    Feminine,
    Neutral
}

export class WordDefinition{
    public translations:{
        [key:string]:Word;
    } = {};
    constructor(translation:{
        [key:string]:Word;
    }){
        this.translations = translation;
    }
}

export class Word{
    public value:string = "";
    public possibleTypes:WordType[] = [];
    constructor(value:string, possibleTypes:WordType[]){
        this.value = value;
        this.possibleTypes = possibleTypes;
    }
    public toString(){
        return ""+this.value;
    }
}

export interface Genderable{
    gender?:Gender;
}

export interface Declinable{
    
}

export interface Verb{

}