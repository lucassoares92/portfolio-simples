/*TRANSIÇÕES DO SCROLLREVEAL*/

window.sr = ScrollReveal({ reset: true });
sr.reveal(".home-info", { duration: 1000 });
sr.reveal("#projects", {
  rotate: { x: 100, y: 100, z: 0 },
  duration: 2000,
});
sr.reveal("#contato", { duration: 1000 });
