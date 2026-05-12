// Navigation smooth scrolling
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSearch() {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

// Nav links smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Close modal
function closeGame() {
    document.getElementById('gameModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

console.log('FarrisHub App Loaded Successfully!');