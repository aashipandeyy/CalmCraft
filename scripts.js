const breathingTexts = [
    "Breathe in...",
    "Hold...", 
    "Breathe out...",
    "Rest..."
];

let textIndex = 0;
const breathingTextElement = document.getElementById('breathingText');

setInterval(() => {
    breathingTextElement.style.opacity = '0';
    
    setTimeout(() => {
        breathingTextElement.textContent = breathingTexts[textIndex];
        breathingTextElement.style.opacity = '1';
        textIndex = (textIndex + 1) % breathingTexts.length;
    }, 300);
}, 1500);

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.floating-orb');
    const speed = 0.3;

    orbs.forEach((orb, index) => {
        const yPos = -(scrolled * speed * (1 + index * 0.2));
        orb.style.transform = `translateY(${yPos}px)`;
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.benefit-card, .breathing-header, .benefits-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
