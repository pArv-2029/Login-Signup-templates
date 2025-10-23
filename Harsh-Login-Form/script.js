window.addEventListener("load", () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
    tl.to(".glass-card", { y: 0, opacity: 1, duration: 1 });
    tl.from("h2", { opacity: 0, y: -30, duration: 0.6 }, "-=0.5");
    tl.from(".input-group", { opacity: 0, x: -50, stagger: 0.2, duration: 0.6 }, "-=0.3");
    tl.from("button", { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.4");
  });
  
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const glow = Math.min(scrollY / 15, 25);
    document.querySelector(".glass-card").style.boxShadow = `0 0 ${glow}px rgba(155, 0, 255, 0.5)`;
  });
  
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    gsap.to(".glass-card", {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
    alert("Welcome Back, Harsh ⚡");
  });
  