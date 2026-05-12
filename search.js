// Educational Search Results Database
const searchDatabase = {
    math: [
        {
            title: 'Khan Academy - Math Courses',
            description: 'Comprehensive math courses from basic arithmetic to advanced calculus with free videos and exercises.',
            url: 'https://www.khanacademy.org/math'
        },
        {
            title: 'Mathway - Problem Solver',
            description: 'Step-by-step solutions to math problems covering algebra, geometry, trigonometry, and calculus.',
            url: 'https://www.mathway.com/'
        },
        {
            title: 'Wolfram MathWorld',
            description: 'Extensive online mathematics encyclopedia with definitions, theorems, and educational content.',
            url: 'https://mathworld.wolfram.com/'
        },
        {
            title: 'IXL Math - Practice Problems',
            description: 'Interactive math practice with instant feedback for K-12 and beyond.',
            url: 'https://www.ixl.com/math'
        }
    ],
    science: [
        {
            title: 'Khan Academy - Science',
            description: 'Biology, chemistry, physics, and more with videos and practice questions.',
            url: 'https://www.khanacademy.org/science'
        },
        {
            title: 'NASA Education',
            description: 'Official NASA resources about space science, earth science, and exploration.',
            url: 'https://science.nasa.gov/'
        },
        {
            title: 'National Geographic Education',
            description: 'Science and nature content including videos, articles, and interactive resources.',
            url: 'https://education.nationalgeographic.org/'
        },
        {
            title: 'Crash Course Science',
            description: 'Engaging short videos explaining scientific concepts in an easy-to-understand way.',
            url: 'https://www.youtube.com/user/crashcourse'
        }
    ],
    history: [
        {
            title: 'Khan Academy - History & Social Studies',
            description: 'Historical events, civilizations, and social studies topics with educational videos.',
            url: 'https://www.khanacademy.org/humanities/history'
        },
        {
            title: 'Smithsonian Learning Lab',
            description: 'Museum resources and educational content about history, culture, and heritage.',
            url: 'https://learninglab.si.edu/'
        },
        {
            title: 'History.com',
            description: 'Articles, videos, and timelines covering world history, wars, and important events.',
            url: 'https://www.history.com/'
        },
        {
            title: 'BBC Learning - History',
            description: 'Educational history content from BBC with articles, videos, and interactive features.',
            url: 'https://www.bbc.co.uk/bitesize/subjects/zag3cdm'
        }
    ],
    geography: [
        {
            title: 'National Geographic - Geography',
            description: 'Maps, articles, and resources about world geography, cultures, and landscapes.',
            url: 'https://www.nationalgeographic.org/education/'
        },
        {
            title: 'Khan Academy - Geography & Cultures',
            description: 'Learn about different countries, regions, and cultural geography.',
            url: 'https://www.khanacademy.org/humanities/geography-humanities-culture'
        },
        {
            title: 'Google Maps Education',
            description: 'Interactive maps for learning geography, capitals, and world locations.',
            url: 'https://www.google.com/maps'
        },
        {
            title: 'World Atlas',
            description: 'Comprehensive atlas with maps, facts, and information about every country.',
            url: 'https://www.worldatlas.com/'
        }
    ],
    coding: [
        {
            title: 'CodeAcademy - Learn to Code',
            description: 'Interactive programming courses in Python, JavaScript, HTML, CSS, and more.',
            url: 'https://www.codecademy.com/'
        },
        {
            title: 'Khan Academy - Computer Science',
            description: 'Introduction to computer science, algorithms, and programming concepts.',
            url: 'https://www.khanacademy.org/computing'
        },
        {
            title: 'freeCodeCamp',
            description: 'Free coding tutorials and certifications for web development and programming.',
            url: 'https://www.freecodecamp.org/'
        },
        {
            title: 'Coding Game',
            description: 'Learn programming through interactive games and coding challenges.',
            url: 'https://www.codingame.com/'
        }
    ],
    english: [
        {
            title: 'Khan Academy - English & Language Arts',
            description: 'Grammar, writing, literature, and language arts education with videos and exercises.',
            url: 'https://www.khanacademy.org/humanities/grammar'
        },
        {
            title: 'Grammarly',
            description: 'Grammar checker and writing assistant to improve your English writing skills.',
            url: 'https://www.grammarly.com/'
        },
        {
            title: 'Project Gutenberg',
            description: 'Free digital library of over 70,000 eBooks including classic literature.',
            url: 'https://www.gutenberg.org/'
        },
        {
            title: 'BBC Learning - English',
            description: 'English language learning resources including grammar and pronunciation guides.',
            url: 'https://www.bbc.co.uk/learningenglish/'
        }
    ]
};

// Perform Search
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) {
        searchResults.innerHTML = '<p style="color: #999;">Please enter a search term.</p>';
        return;
    }

    let results = [];

    // Search through all categories
    Object.keys(searchDatabase).forEach(category => {
        searchDatabase[category].forEach(item => {
            const titleMatch = item.title.toLowerCase().includes(searchInput);
            const descriptionMatch = item.description.toLowerCase().includes(searchInput);
            const categoryMatch = category.includes(searchInput);

            if (titleMatch || descriptionMatch || categoryMatch) {
                results.push({
                    ...item,
                    category: category
                });
            }
        });
    });

    displaySearchResults(results, searchInput);
}

// Search by Category
function searchByCategory(category) {
    const searchResults = document.getElementById('searchResults');
    const results = searchDatabase[category] || [];

    displaySearchResults(results, category);
}

// Display Search Results
function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');

    if (results.length === 0) {
        searchResults.innerHTML = `<p style="color: #ccc; text-align: center;">No results found for "${query}". Try a different search.</p>`;
        return;
    }

    let html = `<p style="color: #ddd; margin-bottom: 1rem;">Found ${results.length} result(s) for "${query}"</p>`;

    results.forEach(result => {
        html += `
            <div class="search-result-item">
                <h4>${result.title}</h4>
                <p>${result.description}</p>
                <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #999;">
                    📌 Category: ${result.category}
                </p>
                <a href="${result.url}" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 600;">Visit Resource →</a>
            </div>
        `;
    });

    searchResults.innerHTML = html;
}

console.log('Search engine loaded with', Object.keys(searchDatabase).length, 'categories');