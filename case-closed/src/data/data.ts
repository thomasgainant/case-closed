import { Concept, Word, WordType } from "./word.class";

const dictionary:Concept[] = [
    new Concept({
        "en": new Word({ "default": "dog" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "pies",
            "nominative": "pies",
            "genitive": "psa",
            "dative": "psu",
            "accusative": "psa",
            "instrumental": "psem",
            "locative": "psie",
            "vocative": "psie"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "cat" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "kot",
            "nominative": "kot",
            "genitive": "kota",
            "dative": "kotu",
            "accusative": "kota",
            "instrumental": "kotem",
            "locative": "kocie",
            "vocative": "kocie"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "food" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "jedzenie",
            "nominative": "jedzenie",
            "genitive": "jedzenia",
            "dative": "jedzeniu",
            "accusative": "jedzenie",
            "instrumental": "jedzeniem",
            "locative": "jedzeniu",
            "vocative": "jedzenie"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "boy" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "chłopiec",
            "nominative": "chłopiec",
            "genitive": "chłopca",
            "dative": "chłopcu",
            "accusative": "chłopca",
            "instrumental": "chłopcem",
            "locative": "chłopcu",
            "vocative": "chłopcze"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "flower" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "kwiat",
            "nominative": "kwiat",
            "genitive": "kwiatu",
            "dative": "kwiatu",
            "accusative": "kwiat",
            "instrumental": "kwiatem",
            "locative": "kwiecie",
            "vocative": "kwiecie"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "table" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "stół",
            "nominative": "stół",
            "genitive": "stołu",
            "dative": "stołowi",
            "accusative": "stół",
            "instrumental": "stołem",
            "locative": "stole",
            "vocative": "stole"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    new Concept({
        "en": new Word({ "default": "chair" }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
        "pl": new Word({
            "default": "krzesło",
            "nominative": "krzesło",
            "genitive": "krzesła",
            "dative": "krzesłu",
            "accusative": "krzesło",
            "instrumental": "krzesłem",
            "locative": "krześle",
            "vocative": "krzesło"
        }, [WordType.Subject, WordType.Object, WordType.PersonInfo]),
    }),
    /*
    
    VERBS

    */
    new Concept({
        "en": new Word({
            "default": "like",
            "firstPerson": "like",
            "secondPerson": "like",
            "thirdPerson": "likes",
            "firstPersonPlural": "like",
            "secondPersonPlural": "like",
            "thirdPersonPlural": "like"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "lubić",
            "firstPerson": "lubię",
            "secondPerson": "lubisz",
            "thirdPerson": "lubi",
            "firstPersonPlural": "lubimy",
            "secondPersonPlural": "lubicie",
            "thirdPersonPlural": "lubią"
        }, [WordType.Verb]),
    }),
    new Concept({
        "en": new Word({
            "default": "eat",
            "firstPerson": "eat",
            "secondPerson": "eat",
            "thirdPerson": "eats",
            "firstPersonPlural": "eat",
            "secondPersonPlural": "eat",
            "thirdPersonPlural": "eat"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "jeść",
            "firstPerson": "jem",
            "secondPerson": "jesz",
            "thirdPerson": "je",
            "firstPersonPlural": "jemy",
            "secondPersonPlural": "jecie",
            "thirdPersonPlural": "jedzą"
        }, [WordType.Verb]),
    }),
    new Concept({
        "en": new Word({
            "default": "drink",
            "firstPerson": "drink",
            "secondPerson": "drink",
            "thirdPerson": "drinks",
            "firstPersonPlural": "drink",
            "secondPersonPlural": "drink",
            "thirdPersonPlural": "drink"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "pić",
            "firstPerson": "piję",
            "secondPerson": "pijesz",
            "thirdPerson": "pije",
            "firstPersonPlural": "pijemy",
            "secondPersonPlural": "pijecie",
            "thirdPersonPlural": "piją"
        }, [WordType.Verb]),
    }),
    new Concept({
        "en": new Word({
            "default": "give",
            "firstPerson": "give",
            "secondPerson": "give",
            "thirdPerson": "gives",
            "firstPersonPlural": "give",
            "secondPersonPlural": "give",
            "thirdPersonPlural": "give"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "dawać",
            "firstPerson": "daję",
            "secondPerson": "dajesz",
            "thirdPerson": "daje",
            "firstPersonPlural": "dajemy",
            "secondPersonPlural": "dajecie",
            "thirdPersonPlural": "dają"
        }, [WordType.Verb]),
    }),
    new Concept({
        "en": new Word({
            "default": "take",
            "firstPerson": "take",
            "secondPerson": "take",
            "thirdPerson": "takes",
            "firstPersonPlural": "take",
            "secondPersonPlural": "take",
            "thirdPersonPlural": "take"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "brać",
            "firstPerson": "biorę",
            "secondPerson": "bierzesz",
            "thirdPerson": "bierze",
            "firstPersonPlural": "bierzemy",
            "secondPersonPlural": "bierzecie",
            "thirdPersonPlural": "biorą"
        }, [WordType.Verb]),
    }),
    new Concept({
        "en": new Word({
            "default": "chase",
            "firstPerson": "chase",
            "secondPerson": "chase",
            "thirdPerson": "chases",
            "firstPersonPlural": "chase",
            "secondPersonPlural": "chase",
            "thirdPersonPlural": "chase"
        }, [WordType.Verb]),
        "pl": new Word({
            "default": "ścigać",
            "firstPerson": "ścigam",
            "secondPerson": "ścigasz",
            "thirdPerson": "ściga",
            "firstPersonPlural": "ścigamy",
            "secondPersonPlural": "ścigacie",
            "thirdPersonPlural": "ścigają"
        }, [WordType.Verb]),
    }),
];

export {dictionary};