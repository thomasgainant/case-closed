import { English } from "./english.language";
import type { Sentence } from "./sentence.class";
import { Word, WordType, type Concept } from "./word.class";

export class Polish extends English{
    constructor(dictionary:Concept[]){
        super(dictionary);
        this.id = "pl";
    }

    public getVariant(word:Word, functionInSentence:WordType | undefined = undefined, sentence:Sentence | undefined = undefined):string{
        switch(functionInSentence){
            case WordType.Subject:
                return word.get("nominative");
            break;
            case WordType.Verb:
                let subject = sentence?.getConcept(WordType.Subject);
                if(subject){
                    return word.get("thirdPerson");
                }
            break;
            case WordType.Object:
                return word.get("accusative");
            break;
            case WordType.PersonInfo:
            break;
            case WordType.PlaceInfo:
            break;
            case WordType.TimeInfo:
            break;
        }

        return word.get();
    }
}