(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const body = document.body;
  const root = document.documentElement;
  const nav = $('#siteNav');
  const cursor = $('#cursor');
  const art = $('.hero__art');
  const statusText = $('#statusText');
  const whisper = $('#whisper');
  const whisperText = $('#whisperText');
  const presenceCount = $('#presenceCount');
  const descent = $('#descent');
  const descentKicker = $('#descentKicker');
  const descentFinal = $('#descentFinal');
  const doorButton = $('#doorButton');
  const leaveLink = $('#leaveLink');
  const afterword = $('#afterword');
  const returnTop = $('#returnTop');
  const modal = $('#systemModal');
  const systemTitle = $('#systemTitle');
  const flash = $('#flash');
  const jumpFace = $('#jumpFace');
  const soundToggle = $('#soundToggle');
  const form = $('#viewingForm');
  const formNote = $('#formNote');

  const swaps = $$('[data-swap]');
  const lines = $$('.d-line');
  const phaseClasses = ['phase-2', 'phase-3', 'phase-4', 'phase-5', 'phase-6', 'phase-7'];

  let maxP = 0;
  let ticking = false;
  let lastWhisper = '';
  let modalShown = false;
  let opened = false;
  let soundOn = false;
  let audio = null;

  const titleBreaks = [
    [0, 'Hearth — A calmer home, by design.'],
    [0.16, 'Hearth — Listening'],
    [0.30, 'Hearth — 1 presence detected'],
    [0.44, 'Hearth — 2 presences detected'],
    [0.56, 'Hearth — Please remain still'],
    [0.70, 'Hearth — Do not open the door'],
  ];

  const whispers = [
    [0.10, 'Good evening.'],
    [0.22, 'The living room is ready.'],
    [0.34, 'You’ve been reading for a while.'],
    [0.46, 'You are not on the member list.'],
    [0.58, 'Please remain still.'],
    [0.68, 'Do not open the door.'],
  ];

  function setStatus(text) {
    if (statusText.textContent !== text) statusText.textContent = text;
  }

  function setWhisper(text) {
    if (!text || text === lastWhisper) return;
    lastWhisper = text;
    whisperText.textContent = text;
    whisper.classList.toggle('is-on', true);
  }

  function applySwaps(p) {
    for (const el of swaps) {
      if (el.dataset.swapped === '1') continue;
      const at = parseFloat(el.dataset.at || '0');
      if (p < at) continue;
      el.dataset.original = el.innerHTML;
      // Static copy only; textContent avoids interpreting any authored string as markup.
      el.textContent = el.dataset.corrupt || el.textContent;
      el.dataset.swapped = '1';
      el.classList.add('swapped');
    }
  }

  function updateTitle(p) {
    if (body.classList.contains('afterword-open')) return;
    let next = titleBreaks[0][1];
    for (const [at, title] of titleBreaks) {
      if (p >= at) next = title;
    }
    if (document.title !== next && !opened) document.title = next;
  }

  function updateAmbient(p, dp) {
    if (body.classList.contains('afterword-open')) {
      setStatus('Hearth · Afterword');
      whisper.classList.remove('is-on');
      return;
    }
    let status = 'All systems calm';
    if (p >= .56) status = 'Please remain still';
    else if (p >= .44) status = '2 presences';
    else if (p >= .30) status = '1 presence';
    else if (p >= .16) status = 'Listening';

    if (dp > 0.01) status = 'You are not alone';
    if (dp > .72) status = 'Please remain still';
    if (opened) status = 'Home';
    setStatus('Hearth · ' + status);

    let line = '';
    for (const [at, text] of whispers) {
      if (p >= at) line = text;
    }
    if (dp > .48) line = 'Do not open the door.';
    if (dp > .8) line = 'It is already inside.';
    if (opened) line = 'You’re home.';
    setWhisper(line);

    if (p >= .38) presenceCount.textContent = '02';
    if (p >= .52) presenceCount.textContent = '03';
  }

  function update() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const p = clamp(window.scrollY / max);
    maxP = Math.max(maxP, p);

    root.style.setProperty('--p', p.toFixed(4));
    root.style.setProperty('--dp', '0');
    if (art && !reduce) {
      const shift = Math.min(28, window.scrollY * .028);
      art.style.transform = `translateY(${shift}px)`;
    }

    const phaseStarts = [0.14, 0.24, 0.36, 0.48, 0.58, 0.68];
    phaseClasses.forEach((name, i) => body.classList.toggle(name, maxP >= phaseStarts[i]));
    body.classList.toggle('dark', maxP >= .48);

    applySwaps(maxP);
    updateTitle(maxP);

    // The house
    const total = Math.max(1, descent.offsetHeight - window.innerHeight);
    const rawDp = (window.scrollY - descent.offsetTop) / total;
    const dp = clamp(rawDp);
    root.style.setProperty('--dp', dp.toFixed(4));

    if (dp > 0.001) body.classList.add('at-house');
    body.classList.toggle('near-door', dp > .52);
    body.classList.toggle('at-door', dp > .52 && !opened);
    body.classList.toggle('face-on', dp > .56);
    body.classList.toggle('final-black', dp > .94 || opened);

    if (descentKicker) descentKicker.style.opacity = dp > .10 ? '0' : '1';

    let active = null;
    for (const line of lines) {
      const at = parseFloat(line.dataset.at || '0');
      if (dp >= at) active = line;
      line.classList.toggle('is-on', false);
    }
    if (active && dp < .86 && !opened) active.classList.add('is-on');

    descentFinal.classList.toggle('is-on', dp > .88 || opened);

    if (dp > .70 && dp < .90 && !modalShown && !opened) showModal();
    if (dp >= .90 && modalShown && !opened) closeModal(true);
    if (dp >= .955 && !opened) openSequence();

    updateAmbient(maxP, dp);

    // fade the whisper as we enter the closing scene
    if (dp > .86) whisper.classList.remove('is-on');
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  }

  function showModal() {
    if (modalShown || opened) return;
    modalShown = true;
    modal.hidden = false;
    systemTitle.textContent = 'Unknown presence detected.';
    const first = modal.querySelector('button');
    if (first) window.setTimeout(() => first.focus(), 50);
  }

  function closeModal(openAfter = false) {
    modal.hidden = true;
    if (openAfter) window.setTimeout(openSequence, 420);
  }

  function showAfterword() {
    if (!afterword) return;
    afterword.hidden = false;
    body.classList.add('afterword-open');
    document.title = 'Hearth — Afterword';
    setStatus('Hearth · Afterword');
    whisper.classList.remove('is-on');
    window.setTimeout(() => afterword.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }), 60);
  }

  function playFlash() {
    flash.classList.remove('is-on');
    void flash.offsetWidth;
    flash.classList.add('is-on');
    window.setTimeout(() => flash.classList.remove('is-on'), 700);
  }

  function openSequence() {
    if (opened) return;
    opened = true;
    modal.hidden = true;
    body.classList.remove('at-door');
    playFlash();
    playImpact();
    if (jumpFace) {
      jumpFace.classList.remove('is-on');
      void jumpFace.offsetWidth;
      jumpFace.classList.add('is-on');
      window.setTimeout(() => jumpFace.classList.remove('is-on'), 1200);
    }
    body.classList.add('face-on');

    window.setTimeout(() => {
      const target = descent.offsetTop + (descent.offsetHeight - window.innerHeight) * .965;
      window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' });
      body.classList.add('final-black');
      descentFinal.classList.add('is-on');
      document.title = 'You’re home.';
      setStatus('Hearth · Home');
      whisper.classList.remove('is-on');
    }, 480);
  }

  // Modal actions: both choices lead to the same place.
  $$('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.modal;
      systemTitle.textContent = choice === 'deny' ? 'It already had access.' : 'Access granted.';
      window.setTimeout(() => closeModal(true), 360);
    });
  });

  doorButton.addEventListener('click', () => {
    if (!modalShown) showModal();
    else openSequence();
  });

  if (leaveLink) {
    leaveLink.addEventListener('click', (e) => {
      e.preventDefault();
      showAfterword();
    });
  }

  if (returnTop) {
    returnTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = window.location.pathname + window.location.search;
    });
  }

  // Escape is an actual exit. It does not pretend otherwise.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modal.hidden) {
        modal.hidden = true;
      }
      showAfterword();
    }
  });

  // Form: no network. The site is a story.
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = form.querySelector('button');
      const email = new FormData(form).get('email') || '';
      if (maxP >= .5) {
        formNote.textContent = 'It already knows where you live.';
      } else {
        formNote.textContent = `Thank you${email ? ', ' + String(email).split('@')[0] : ''}. We’ll be in touch before the end of the week.`;
      }
      if (button) {
        button.textContent = 'Request received';
        button.disabled = true;
        window.setTimeout(() => {
          button.textContent = 'Request another viewing ↗';
          button.disabled = false;
        }, 2600);
      }
    });
  }

  // ---------- sound ----------
  function buildAudio() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    const droneGain = ctx.createGain();
    droneGain.gain.value = .035;
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.value = 220;
    droneFilter.Q.value = .7;
    droneGain.connect(droneFilter).connect(master);

    const oscs = [];
    [55, 82.5, 110].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 2 ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = i === 2 ? .012 : .028;
      osc.connect(g).connect(droneGain);
      osc.start();
      oscs.push(osc);
    });

    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * .18;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 420;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = .018;
    noise.connect(noiseFilter).connect(noiseGain).connect(master);
    noise.start();

    return { ctx, master, droneGain, noiseGain, oscs };
  }

  function setSound(on) {
    soundOn = on;
    soundToggle.setAttribute('aria-pressed', String(on));
    soundToggle.textContent = on ? 'Sound on' : 'Sound off';

    if (on) {
      if (!audio) audio = buildAudio();
      if (!audio) return;
      audio.ctx.resume();
      audio.master.gain.cancelScheduledValues(audio.ctx.currentTime);
      audio.master.gain.linearRampToValueAtTime(.55, audio.ctx.currentTime + 1.8);
    } else if (audio) {
      audio.master.gain.cancelScheduledValues(audio.ctx.currentTime);
      audio.master.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + .35);
      window.setTimeout(() => { if (!soundOn) audio.ctx.suspend(); }, 450);
    }
  }

  function heartbeat() {
    if (!soundOn || !audio) return;
    const { ctx, master } = audio;
    const now = ctx.currentTime;
    [0, .19].forEach((offset, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(52, now + offset);
      osc.frequency.exponentialRampToValueAtTime(36, now + offset + .18);
      g.gain.setValueAtTime(.0001, now + offset);
      g.gain.exponentialRampToValueAtTime(i === 0 ? .11 : .07, now + offset + .02);
      g.gain.exponentialRampToValueAtTime(.0001, now + offset + .32);
      osc.connect(g).connect(master);
      osc.start(now + offset);
      osc.stop(now + offset + .4);
    });
  }

  function playImpact() {
    if (!soundOn || !audio) return;
    const { ctx, master } = audio;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(64, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + .7);
    g.gain.setValueAtTime(.0001, now);
    g.gain.exponentialRampToValueAtTime(.28, now + .015);
    g.gain.exponentialRampToValueAtTime(.0001, now + 1.1);
    osc.connect(g).connect(master);
    osc.start(now);
    osc.stop(now + 1.2);

    const buffer = ctx.createBuffer(1, ctx.sampleRate * .6, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    const ng = ctx.createGain();
    ng.gain.value = .22;
    noise.connect(filter).connect(ng).connect(master);
    noise.start(now);
  }

  soundToggle.addEventListener('click', () => setSound(!soundOn));
  window.setInterval(() => {
    if (soundOn && maxP > .48) heartbeat();
  }, 1800);

  // ---------- pointer / cursor ----------
  if (window.matchMedia('(pointer: fine)').matches && cursor) {
    window.addEventListener('pointermove', (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }, { passive: true });
  }

  // ---------- boot ----------
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('load', update);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash === '#afterword') showAfterword();
  update();
})();
