// ============================================
// GARRAN VALE - Story Page Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initReadingProgress();
    initTocHighlight();
});

// Ambient shadow particles
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 150 + 80;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            bottom: -${size}px;
            animation-delay: ${Math.random() * 20}s;
            animation-duration: ${Math.random() * 15 + 20}s;
        `;
        
        container.appendChild(particle);
    }
}

// Reading progress bar
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.prepend(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// Table of Contents highlight
function initTocHighlight() {
    const chapters = document.querySelectorAll('.chapter[id]');
    const tocLinks = document.querySelectorAll('.toc a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                tocLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = '#c9a227';
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -60% 0px'
    });
    
    chapters.forEach(chapter => observer.observe(chapter));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Console signature
console.log(`
%c◆ GARRAN VALE ◆
%cWarrior of Shadows • Véradis

"Den som reser sig igen efter slaget får leva en dag till."
`, 
'font-size: 20px; font-weight: bold; color: #c9a227;',
'font-size: 12px; color: #a8a5a0;'
);
