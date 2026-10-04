const cover=document.getElementById("cover"), invitation=document.getElementById("invitation");
document.getElementById("openInvitation").onclick=()=>{cover.style.display="none";invitation.style.display="block";window.scrollTo({top:0,behavior:"smooth"});};

document.getElementById("closeInvitation").onclick=()=>{
  invitation.style.display="none";
  cover.style.display="grid";
  window.scrollTo({top:0,behavior:"smooth"});
};

const target=new Date("2026-10-30T19:00:00+05:00").getTime();
function countdown(){
  let d=Math.max(0,target-Date.now());
  const v=[Math.floor(d/864e5),Math.floor(d%864e5/36e5),Math.floor(d%36e5/6e4),Math.floor(d%6e4/1e3)];
  ["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String(v[i]).padStart(2,"0"));
}
countdown();setInterval(countdown,1000);

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));

async function copyValue(value,el){
  try{await navigator.clipboard.writeText(value)}
  catch{const t=document.createElement("textarea");t.value=value;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove();}
  el.style.display="block";setTimeout(()=>el.style.display="none",1700);
}
document.querySelectorAll(".contact-card").forEach(btn=>btn.onclick=()=>copyValue(btn.dataset.copy,document.getElementById("contactStatus")));
document.getElementById("copyVenue").onclick=()=>copyValue("Gull Farm House, Memon Goth, Karachi",document.getElementById("venueStatus"));
document.getElementById("calendarBtn").onclick=()=>window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Zaryab%20%26%20Kanan%20%E2%80%94%20Wedding&dates=20261030T190000/20261030T210000&details=Gathering%207%3A00%20PM%20%7C%20Nikah%207%3A30%20PM%20%7C%20Dinner%208%3A00%20PM&location=Gull%20Farm%20House%2C%20Memon%20Goth%2C%20Karachi","_blank");
