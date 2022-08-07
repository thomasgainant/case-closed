import { Language } from "./language.class";
import type { WordDefinition } from "./word.class";

export class English extends Language{
    constructor(dictionary:WordDefinition[]){
        super(dictionary);
        this.id = "en";
    }
}