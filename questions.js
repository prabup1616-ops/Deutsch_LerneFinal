const questions = [

{
id:1,
level:"A1",
question:"Ich stehe um 7 Uhr auf. What does aufstehen mean?",
options:[
"to sleep",
"to get up",
"to eat",
"to sit"
],
answer:1,
tip:"aufstehen = to get up"
},

{
id:2,
level:"A2",
question:"Ich verstehe dich nicht. What does verstehen mean?",
options:[
"forget",
"understand",
"lose",
"remember"
],
answer:1,
tip:"verstehen = to understand"
},

{
id:3,
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
}

];

// Auto generate more questions
for(let i=4;i<=100;i++){

questions.push({
id:i,
level:"B1",
question:`Practice Question ${i}`,
options:[
"Option A",
"Option B",
"Option C",
"Option D"
],
answer:Math.floor(Math.random()*4),
tip:"Observe the grammar carefully."
});

}
