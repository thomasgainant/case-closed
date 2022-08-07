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

export class Concept{
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
    public values:{[key:string]:string} = {};
    public possibleTypes:WordType[] = [];
    constructor(values:{[key:string]:string}, possibleTypes:WordType[]){
        this.values = values;
        this.possibleTypes = possibleTypes;
    }
    public get(variant:string = "default"){
        if(variant != "default" && this.values.hasOwnProperty(variant))
            return ""+this.values[variant];

        return ""+this.values["default"];
    }
}

export interface Genderable{
    gender?:Gender;
}

export interface Declinable{
    
}

export interface Verb{

}