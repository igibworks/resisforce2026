(function () {
  const S = window.SCHEDULE;
  const tabs = document.getElementById('dayTabs');
  const tl = document.getElementById('timeline');
  let day = 0;

  // default to today's day if the event is running
  const now = new Date();
  [24, 25, 26].forEach((d, i) => {
    if (now.getFullYear() === 2026 && now.getMonth() === 10 && now.getDate() === d) day = i;
  });

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  function renderRow(r) {
    return `<div class="slot ${r.type === 'break' ? 'break' : ''}">
      <div class="time">${esc(r.time)}</div>
      <div><h4>${esc(r.title)}</h4>${r.desc ? `<p>${esc(r.desc)}</p>` : ''}</div>
    </div>`;
  }

  function renderSession(s) {
    const rows = s.rows.map(r => `
      <div class="srow ${r.type || ''}">
        <div class="time">${esc(r.time)}</div>
        <div class="slotname">${esc(r.slot)}</div>
        <div class="who">${r.speaker ? `<b>${esc(r.speaker)}</b>` : ''}${r.affil ? `<span>${esc(r.affil)}</span>` : ''}</div>
      </div>`).join('');
    return `<article class="session">
      <header>
        <span class="slabel">${esc(s.label)}</span><span class="stime">${esc(s.time)}</span>
        ${s.label !== s.title ? `<h3>${esc(s.title)}</h3>` : ''}
        ${s.focus ? `<p class="focus"><b>Focus:</b> <em>${esc(s.focus)}</em></p>` : ''}
        ${s.chair ? `<p class="chair"><b>Chair:</b> ${esc(s.chair)}</p>` : ''}
      </header>
      <div class="srows">${rows}</div>
    </article>`;
  }

  function render() {
    tabs.innerHTML = S.map((d, i) =>
      `<button class="tab ${i === day ? 'active' : ''}" role="tab" aria-selected="${i === day}" data-i="${i}">${esc(d.day)} · ${esc(d.date)}</button>`).join('');
    const d = S[day];
    tl.innerHTML = `<div class="day-head"><strong>${esc(d.day)} — ${esc(d.title)}</strong>${d.subtitle ? `<em>${esc(d.subtitle)}</em>` : ''}</div>` +
      d.items.map(it => it.kind === 'session' ? renderSession(it) : renderRow(it)).join('');
  }

  tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) { day = +b.dataset.i; render(); } });
  render();

  // At-a-glance overview table
  const ov = document.getElementById('overview');
  if (ov && window.OVERVIEW) {
    ov.innerHTML = window.OVERVIEW.map(o => `
      <article class="ov-card">
        <span class="ov-n">Session ${o.n}</span>
        <h3>${esc(o.theme)}</h3>
        <p><b>Faculty:</b> ${esc(o.speakers)}</p>
        <p><b>Chair:</b> ${esc(o.chair)}</p>
      </article>`).join('');
  }
})();

// Countdown to 24 Nov 2026, 09:30 IST
(function () {
  const el = document.getElementById('countdown');
  const start = new Date('2026-11-24T09:30:00+05:30');
  const end = new Date('2026-11-26T13:00:00+05:30');
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
