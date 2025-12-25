const screens = document.querySelectorAll(".screen");

function show(id){
  screens.forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
}

document.getElementById("btnGetSupport").onclick = () => show("screen-selector");
document.getElementById("btnContinueGently").onclick = () => show("screen-selector");

document.querySelectorAll("[data-route]").forEach(btn=>{
  btn.onclick = ()=>{
    const key = btn.dataset.route;
    const data = {
      sensory:["Sensory reset",["Drop shoulders","Slow exhale"]],
      movement:["Micro movement",["Shake hands","Press feet"]],
      grounding:["Grounding",["Name 3 sensations","Look around"]],
      release:["Release",["Exhale and imagine weight dropping"]]
    };
    const [title,steps] = data[key];
    document.getElementById("practiceTitle").textContent = title;
    document.getElementById("practiceLead").textContent = "30–90 seconds.";
    const list = document.getElementById("practiceSteps");
    list.innerHTML = steps.map(s=>`<div class="step">${s}</div>`).join("");
    show("screen-practice");
  };
});

document.querySelectorAll("[data-nav]").forEach(b=>{
  b.onclick = ()=> show("screen-"+b.dataset.nav);
});
