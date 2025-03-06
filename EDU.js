gsap.utils.toArray(".timeline-item").forEach((item, index) => {
   gsap.to(item, {
       scrollTrigger: {
           trigger: item,
           start: "top 80%",
           end: "bottom 60%",
           toggleActions: "play none none reverse",
       },
       opacity: 1,
       y: 0,
       duration: 1,
       ease: "power2.out",
   });
});
