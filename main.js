// Visitor counter
let count=localStorage.getItem('visitorCount')||0;
count++;
localStorage.setItem('visitorCount',count);
document.getElementById('count').textContent=count;
setInterval(()=>{
  let base=parseInt(localStorage.getItem('visitorCount'));
  let rand=Math.floor(Math.random()*21)-10;
  document.getElementById('count').textContent=Math.max(0,base+rand);
},2000);

// Navigation
function showPage(page){
  document.getElementById('home-page').style.display=page==='home'?'block':'none';
  document.getElementById('pdf-page').style.display=page==='pdf'?'block':'none';
  document.getElementById('contact-page').style.display=page==='contact'?'block':'none';
  document.querySelectorAll('.subject-page').forEach(p=>p.style.display='none');
}

// Open subject page
function openSubject(subject){
  showPage('');
  document.getElementById(subject+'-page').style.display='block';
}

// Back to subjects
function goBack(){showPage('pdf');}

// Filter subjects
function filterSubjects(grade){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.subject-card').forEach(s=>{
    let grades=s.getAttribute('data-grade').split(' ');
    s.style.display=(grade==='all'||grades.includes(grade))?'block':'none';
  });
}

// PDF functions
function previewPdf(file){window.open(file,'_blank');}
function downloadPdf(file){let a=document.createElement('a');a.href=file;a.download=file.split('/').pop();a.click();}
function shareOnWhatsApp(file){let msg=`Check this resource: ${file}`;window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`,'_blank');}

// Stars background
let canvas=document.createElement('canvas');
canvas.id='stars';document.body.appendChild(canvas);
let ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let stars=[];for(let i=0;i<200;i++)stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5});
function animateStars(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();s.x+=0.2;if(s.x>canvas.width)s.x=0;});requestAnimationFrame(animateStars);}
animateStars();window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

// Start home page
showPage('home');
