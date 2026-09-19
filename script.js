const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('formMsg').textContent='Thank you! Your message has been received for this demonstration website.';
  this.reset();
});
