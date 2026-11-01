(function () {
  const S = window.SCHEDULE, T = window.TRACKS;
  const tabs = document.getElementById('dayTabs');
  const filters = document.getElementById('filters');
  const tl = document.getElementById('timeline');
  let day = 0, track = 'all';

  // default to today's day if the event is running
  const now = new Date();
  [24, 25, 26].forEach((d, i) => {
    if (now.getFullYear() === 2026 && now.getMonth() === 10 && now.getDate() === d) day = i;
  });

  function esc(s) { return String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  function render() {
    tabs.innerHTML = S.map((d, i) =>
      `<button class="tab ${i === day ? 'active' : ''}" role="tab" data-i="${i}">${esc(d.day)} · ${esc(d.date)}</button>`).join('');
    const keys = ['all', ...Object.keys(T)];
    filters.innerHTML = keys.map(k =>
      `<button class="chip ${k === track ? 'active' : ''}" data-k="${k}">${k === 'all' ? 'All sessions' : esc(T[k])}</button>`).join('');
    const d = S[day];
    const items = d.slots.filter(s => track === 'all' || s.track === track || s.type === 'break');
    tl.innerHTML = `<p style="color:var(--muted);margin-top:0"><strong style="color:var(--ink)">${esc(d.title)}</strong></p>` +
      items.map(s => `
      <div class="slot ${s.type === 'break' ? 'break' : ''}">
        <div class="time">${esc(s.time)}</div>
        <div>
          <h4>${esc(s.title)}</h4>
          ${s.desc ? `<p>${esc(s.desc)}</p>` : ''}
          ${s.type !== 'break' ? `<span class="tag ${s.track}">${esc(T[s.track])}</span>` : ''}
        </div>
      </div>`).join('');
  }

  tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) { day = +b.dataset.i; render(); } });
  filters.addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) { track = b.dataset.k; render(); } });
  render();
})();

// Countdown to 24 Nov 2026, 09:00 IST
(function () {
  const el = document.getElementById('countdown');
  const start = new Date('2026-11-24T09:00:00+05:30');
  const end = new Date('2026-11-26T18:00:00+05:30');
  function tick() {
    const n = new Date();
    if (n > end) { el.innerHTML = '<div style="min-width:0;padding:10px 18px">Thank you for joining us!</div>'; return; }
    if (n >= start) { el.innerHTML = '<div style="min-width:0;padding:10px 18px"><b style="font-size:1.1rem">The symposium is live 🎉</b></div>'; return; }
    let s = Math.floor((start - n) / 1000);
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const m = Math.floor(s / 60); s %= 60;
    el.innerHTML = [[d, 'Days'], [h, 'Hours'], [m, 'Min'], [s, 'Sec']]
      .map(x => `<div><b>${String(x[0]).padStart(2, '0')}</b><small>${x[1]}</small></div>`).join('');
  }
  tick(); setInterval(tick, 1000);
})();

// Mobile menu
(function () {
  const btn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav nav');
  btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });
})();
