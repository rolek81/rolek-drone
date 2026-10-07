(() => {
 'use strict'; const c=window.ROLEK; if(!c) return;
 const safeUrl=s=>{try {const u=new URL(s);return u.protocol==='https:'?u.href:'#';}catch{return '#';}};
 document.querySelectorAll('.youtube').forEach(a=>a.href=safeUrl(c.youtube));
 document.querySelectorAll('[data-phone]').forEach(a=>{a.href='tel:'+c.phone.replace(/[^+\d]/g,'');if(!a.textContent.trim())a.textContent=c.phoneLabel;});
 document.querySelectorAll('[data-mail]').forEach(a=>{a.href='mailto:'+c.email;if(!a.textContent.trim())a.textContent=c.email;});
 document.querySelectorAll('.whatsapp').forEach(a=>a.href='https://wa.me/'+c.phone.replace(/\D/g,''));
 document.getElementById('year').textContent=new Date().getFullYear();
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text)n.textContent=text;return n;};
 c.services.forEach((s,i)=>{const card=el('article','service');card.append(el('span','service-number',String(i+1).padStart(2,'0')),el('h3','',s.title),el('p','',s.text),el('span','scope',s.scope),el('p','price','od '+s.price+' zł'));const a=el('a','text-link','Zapytaj o realizację ↗');a.href='https://wa.me/'+c.phone.replace(/\D/g,'')+'?text='+encodeURIComponent('Dzień dobry, interesuje mnie: '+s.title+'. Lokalizacja: ');a.target='_blank';a.rel='noopener noreferrer';card.append(a);document.getElementById('services').append(card);});
 c.videos.filter(v=>/^[\w-]{11}$/.test(v.id)).forEach(v=>{const a=el('a','video');a.href='https://www.youtube.com/watch?v='+v.id;a.target='_blank';a.rel='noopener noreferrer';const img=el('img');img.src=v.image || 'https://i.ytimg.com/vi/'+v.id+'/hqdefault.jpg';img.alt=v.title;img.loading='lazy';a.append(img,el('h3','',v.title),el('span','','Oglądaj na YouTube ↗'));document.getElementById('videos').append(a);});
 if(c.heroImage && !c.heroImage.includes('..'))document.querySelector('.brand-banner img').src=c.heroImage;
 if(c.showreel){const video=el('video','showreel');video.src=c.showreel;video.controls=true;video.preload='none';video.playsInline=true;video.setAttribute('aria-label','Showreel ROLEK.DRONE');document.getElementById('videos').prepend(video);}
 const menu=document.querySelector('.menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
 const dialog=document.getElementById('privacy');document.getElementById('privacy-button').addEventListener('click',()=>dialog.showModal());dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
