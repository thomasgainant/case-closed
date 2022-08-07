import { English } from "./english.language";
import type { WordDefinition } from "./word.class";

export class Polish extends English{
    constructor(dictionary:WordDefinition[]){
        super(dictionary);
        this.id = "pl";
    }
}