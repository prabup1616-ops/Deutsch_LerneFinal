const questions = [

/* ======================
SEPARABLE VERBS
====================== */

{
id:1,
category:"Separable Verbs",
level:"A1",
question:"Ich stehe jeden Morgen um 6 Uhr auf. What does <b>aufstehen</b> mean?",
options:[
"to sleep",
"to get up",
"to sit",
"to forget"
],
answer:1,
tip:"aufstehen = to get up"
},

{
id:2,
category:"Separable Verbs",
level:"A1",
question:"Wir kaufen heute im Supermarkt ein. What does <b>einkaufen</b> mean?",
options:[
"to cook",
"to sell",
"to shop",
"to travel"
],
answer:2,
tip:"ein + kaufen = to shop"
},

{
id:3,
category:"Separable Verbs",
level:"A2",
question:"Er ruft seine Mutter an. What does <b>anrufen</b> mean?",
options:[
"to call",
"to write",
"to clean",
"to answer"
],
answer:0,
tip:"anrufen = to call someone"
},

{
id:4,
category:"Separable Verbs",
level:"A2",
question:"Bringst du bitte deinen Bruder mit? What does <b>mitbringen</b> mean?",
options:[
"to throw away",
"to bring along",
"to open",
"to explain"
],
answer:1,
tip:"mitbringen = bring with you"
},

{
id:5,
category:"Separable Verbs",
level:"B1",
question:"Der Zug kommt um 9 Uhr an. What does <b>ankommen</b> mean?",
options:[
"to arrive",
"to leave",
"to stop",
"to buy"
],
answer:0,
tip:"ankommen = arrive"
},

/* ======================
INSEPARABLE VERBS
====================== */

{
id:6,
category:"Inseparable Verbs",
level:"A1",
question:"Ich verstehe die Frage nicht. What does <b>verstehen</b> mean?",
options:[
"to forget",
"to understand",
"to answer",
"to remember"
],
answer:1,
tip:"verstehen NEVER separates"
},

{
id:7,
category:"Inseparable Verbs",
level:"A2",
question:"Er besucht seine Großeltern. What does <b>besuchen</b> mean?",
options:[
"to call",
"to invite",
"to visit",
"to help"
],
answer:2,
tip:"be- verbs are usually inseparable"
},

{
id:8,
category:"Inseparable Verbs",
level:"B1",
question:"Die Firma entwickelt neue Produkte. What does <b>entwickeln</b> mean?",
options:[
"to lose",
"to develop",
"to improve",
"to transport"
],
answer:1,
tip:"entwickeln = develop"
},

/* ======================
GENDERS
====================== */

{
id:9,
category:"Gender",
level:"A1",
question:"What is the correct article for <b>Tisch</b>?",
options:[
"der",
"die",
"das",
"den"
],
answer:0,
tip:"der Tisch"
},

{
id:10,
category:"Gender",
level:"A1",
question:"What is the correct article for <b>Lampe</b>?",
options:[
"der",
"die",
"das",
"dem"
],
answer:1,
tip:"Most -e nouns are feminine"
},

{
id:11,
category:"Gender",
level:"A2",
question:"What is the correct article for <b>Auto</b>?",
options:[
"der",
"die",
"das",
"den"
],
answer:2,
tip:"das Auto"
},

/* ======================
PLURALS
====================== */

{
id:12,
category:"Plural",
level:"A1",
question:"What is the plural of <b>das Buch</b>?",
options:[
"die Bucher",
"die Bücher",
"der Bücher",
"das Bücher"
],
answer:1,
tip:"das Buch → die Bücher"
},

{
id:13,
category:"Plural",
level:"A2",
question:"What is the plural of <b>die Frau</b>?",
options:[
"die Frauen",
"der Frauen",
"das Frauen",
"die Frauen"
],
answer:0,
tip:"die Frau → die Frauen"
},

/* ======================
AKKUSATIV / DATIV
====================== */

{
id:14,
category:"Cases",
level:"A1",
question:"Ich sehe ___ Mann.",
options:[
"der",
"dem",
"den",
"die"
],
answer:2,
tip:"Masculine Akkusativ: der → den"
},

{
id:15,
category:"Cases",
level:"A2",
question:"Ich gebe ___ Kind einen Ball.",
options:[
"das",
"dem",
"den",
"die"
],
answer:1,
tip:"Dativ masculine/neuter → dem"
},

{
id:16,
category:"Cases",
level:"B1",
question:"Er fährt mit ___ Auto.",
options:[
"das",
"dem",
"den",
"die"
],
answer:1,
tip:"mit always takes Dativ"
},

/* ======================
MODAL VERBS
====================== */

{
id:17,
category:"Modal Verbs",
level:"A1",
question:"Ich muss morgen früh ___.",
options:[
"aufstehen",
"aufstehe",
"stehe auf",
"aufgestanden"
],
answer:0,
tip:"Modal + infinitive at end"
},

{
id:18,
category:"Modal Verbs",
level:"A2",
question:"Wir dürfen heute länger ___.",
options:[
"bleiben",
"bleibt",
"geblieben",
"bleib"
],
answer:0,
tip:"dürfen + infinitive"
},

/* ======================
PREPOSITIONS
====================== */

{
id:19,
category:"Prepositions",
level:"A2",
question:"Which preposition ALWAYS takes Akkusativ?",
options:[
"mit",
"von",
"für",
"nach"
],
answer:2,
tip:"für always uses Akkusativ"
},

{
id:20,
category:"Prepositions",
level:"B1",
question:"Which preposition ALWAYS takes Dativ?",
options:[
"durch",
"für",
"mit",
"gegen"
],
answer:2,
tip:"mit always uses Dativ"
},

/* ======================
SENTENCE STRUCTURE
====================== */

{
id:21,
category:"Sentence Structure",
level:"B1",
question:"..., weil er gestern nicht ___.",
options:[
"kommt",
"kommen",
"gekommen ist",
"ist gekommen"
],
answer:2,
tip:"Subordinate clause → verb at end"
},

{
id:22,
category:"Sentence Structure",
level:"B1",
question:"Ich weiß nicht, ob er morgen ___.",
options:[
"kommt",
"kommen",
"ist gekommen",
"kam"
],
answer:0,
tip:"ob-clause → conjugated verb at end"
},

/* ======================
PERFEKT
====================== */

{
id:23,
category:"Perfekt",
level:"A2",
question:"Ich habe meinen Freund ___.",
options:[
"anrufen",
"angerufen",
"rufe an",
"anrief"
],
answer:1,
tip:"Perfekt: haben + Partizip II"
},

{
id:24,
category:"Perfekt",
level:"B1",
question:"Er ist nach Berlin ___.",
options:[
"fahren",
"gefahren",
"fährt",
"fuhr"
],
answer:1,
tip:"Movement verbs often use sein"
},

/* ======================
REFLEXIVE VERBS
====================== */

{
id:25,
category:"Reflexive Verbs",
level:"B1",
question:"Ich interessiere ___ für Musik.",
options:[
"mich",
"mir",
"dich",
"sich"
],
answer:0,
tip:"sich interessieren für + Akk"
}

];
