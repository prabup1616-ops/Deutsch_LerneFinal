const container = document.getElementById("questionsContainer");

let state = {
attempted:0,
correct:0,
streak:0
};

function renderQuestions(data){

container.innerHTML="";

data.forEach(q=>{

const card = document.createElement("div");
card.className="question-card";

card.innerHTML=`

<h3>${q.question}</h3>

<div class="options">

${q.options.map((opt,i)=>`

<div class="option"
onclick="checkAnswer(${q.id},${i},this)">
${opt}
</div>

`).join("")}

</div>

<button onclick="toggleTip(${q.id})">
👁 Show Tip
</button>

<div class="tip" id="tip-${q.id}">
${q.tip}
</div>

`;

container.appendChild(card);

});

}

function checkAnswer(qid,index,element){

const q = questions.find(x=>x.id===qid);

state.attempted++;

if(index===q.answer){

element.classList.add("correct");
state.correct++;
state.streak++;

}else{

element.classList.add("wrong");
state.streak=0;

}

updateStats();
saveProgress();

}

function toggleTip(id){

const tip = document.getElementById(`tip-${id}`);

tip.style.display =
tip.style.display==="block"
? "none"
: "block";

}

function updateStats(){

document.getElementById("attempted").innerText =
state.attempted;

document.getElementById("correct").innerText =
state.correct;

document.getElementById("streak").innerText =
state.streak + "🔥";

}

function shuffleQuestions(){

questions.sort(()=>Math.random()-0.5);

renderQuestions(questions);

}

function saveProgress(){

localStorage.setItem(
"deutsch-progress",
JSON.stringify(state)
);

}

function loadProgress(){

const saved = localStorage.getItem("deutsch-progress");

if(saved){

state = JSON.parse(saved);

updateStats();

}

}

function resetProgress(){

localStorage.removeItem("deutsch-progress");

location.reload();

}

loadProgress();
renderQuestions(questions);
