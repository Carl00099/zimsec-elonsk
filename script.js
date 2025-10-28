// Visitor counter
let count = 0;
setInterval(()=>{document.getElementById('count').innerText=count++;},1000);

// Navigation
function showPage(page){
    document.getElementById('home-page').style.display='none';
    document.getElementById('pdf-page').style.display='none';
    document.getElementById('contact-page').style.display='none';
    if(page==='home') document.getElementById('home-page').style.display='block';
    if(page==='pdf') document.getElementById('pdf-page').style.display='block';
    if(page==='contact') document.getElementById('contact-page').style.display='block';
}
showPage('home');

// Filter subjects
function filterSubjects(grade){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.subject-card').forEach(card=>{
        card.style.display = card.dataset.grade.includes(grade)?'block':'none';
    });
}

// PDF API
async function openSubject(subject){
    try {
        // Example: pick first PDF for demo
        const filePath = `${subject}/01.pdf`;
        const resp = await fetch(`/api/get-signed-url?file=${encodeURIComponent(filePath)}`);
        if(!resp.ok) throw new Error('Failed to fetch PDF');
        const { url } = await resp.json();
        window.open(url,'_blank','noopener');
    } catch(e){
        alert('Cannot open file right now.');
    }
}
