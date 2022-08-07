import { Language } from "./language.class";
import type { Sentence } from "./sentence.class";
import { Word, WordType, type Concept } from "./word.class";

export class English extends Language{
    constructor(dictionary:Concept[]){
        super(dictionary);
        this.id = "en";
    }

    public getVariant(word:Word, functionInSentence:WordType | undefined = undefined, sentence:Sentence | undefined = undefined):string{
        switch(functionInSentence){
            case WordType.Subject:
            break;
            case WordType.Verb:
                let subject = sentence?.getConcept(WordType.Subject);
                if(subject){
                    return word.get("thirdPerson");
                }
            break;
            case WordType.Object:
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