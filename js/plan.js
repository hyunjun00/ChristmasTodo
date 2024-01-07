const planForm=document.querySelector("#plan-form");
const planInput=planForm.querySelector("input");
const planList=document.querySelector("#plan-list");
//const bgdark=document.querySelector("#bgdark");

const PLAN_KEY="planname";

let plans=[];

function savePlan() {
    localStorage.setItem(PLAN_KEY,JSON.stringify(plans));
}

function handlePlanSubmit(e) {
    e.preventDefault();
    const newplan=planInput.value;
    planInput.value="";
    const newPlanObj={
        text: newplan,
        id: Date.now(),
    };
    bgdark.style.opacity=0;
    plans.push(newPlanObj);
    paintPlan(newPlanObj);
    savePlan();
}

function paintPlan(newplan) {
    const li=document.createElement("li");
    li.id=newplan.id;
    const span=document.createElement("span");
    span.innerText=newplan.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deletePlan);
    li.appendChild(span);
    li.appendChild(button);
    planList.appendChild(li);
}

function deletePlan(e) {
    const li=e.target.parentElement;
    li.remove();
    plans=plans.filter(plan=>plan.id!==parseInt(li.id));
    savePlan();
}

planForm.addEventListener("submit",handlePlanSubmit);
planForm.addEventListener("click",bgOpacity);

const savedPlan=localStorage.getItem(PLAN_KEY);

if(savedPlan) {
    const parsePlan=JSON.parse(savedPlan);
    plans=parsePlan;
    parsePlan.forEach(paintPlan);
}