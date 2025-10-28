// Pages
function showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.style.display='none');
  document.getElementById(page+'-page')?document.getElementById(page+'-page').style.display='block':null;
}

// Open Subject
function openSubject(subject){
  showPage(''); // hide all pages
  document.getElementById(subject+'-page').style.display='block';
}

// Back to subjects
function goBackToSubjects(){showPage('pdf');}

// Visitor counter
let count=localStorage.getItem('visitorCount')||0;count++;localStorage.setItem('visitorCount',count);
document.getElementById('count').textContent=count;

// PDF functions placeholders
function previewPdf(url){window.open(url,'_blank');}
function downloadPdf(url){let a=document.createElement('a');a.href=url;a.download=url.split('/').pop();a.click();}
function shareOnWhatsApp(url){window.open('https://wa.me/?text='+encodeURIComponent('Check this out: '+url),'_blank');}

// Moving stars
const canvas=document.getElementById('stars');const ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let stars=[];for(let i=0;i<200;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.2})}
function animateStars(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();s.x+=0.2;if(s.x>canvas.width)s.x=0;});requestAnimationFrame(animateStars);}
animateStars();window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
