// Search Data - Curated Educational Resources
const searchDatabase = {
    math: [
        { title: 'Khan Academy - Mathematics', description: 'Free math lessons from basic to advanced algebra, geometry, and calculus.', url: '#' },
        { title: 'Math is Fun', description: 'Interactive math lessons, games, and puzzles to help you learn.', url: '#' },
        { title: 'Wolfram Alpha Math', description: 'Computational knowledge engine for solving math problems.', url: '#' },
        { title: 'Brilliant.org', description: 'Learn math through interactive problem-solving.', url: '#' },
        { title: 'Math Playground', description: 'Math games and practice for all skill levels.', url: '#' }
    ],
    science: [
        { title: 'Khan Academy - Science', description: 'Comprehensive science courses covering physics, chemistry, and biology.', url: '#' },
        { title: 'Crash Course - Science', description: 'Engaging science videos explaining complex concepts.', url: '#' },
        { title: 'NASA Education', description: 'Official NASA resources for learning about space and science.', url: '#' },
        { title: 'National Geographic Kids', description: 'Science articles and facts written for students.', url: '#' },
        { title: 'PBS Learning Media', description: 'Educational science videos and interactive lessons.', url: '#' }
    ],
    history: [
        { title: 'Khan Academy - History', description: 'History lessons covering world, American, and ancient history.', url: '#' },
        { title: 'Crash Course - History', description: 'Engaging historical overviews and analysis.', url: '#' },
        { title: 'History.com', description: 'Articles, timelines, and videos about historical events.', url: '#' },
        { title: 'World History Encyclopedia', description: 'Detailed articles about people, events, and civilizations.', url: '#' },
        { title: 'The History Channel', description: 'Historical documentaries and educational content.', url: '#' }
    ],
    geography: [
        { title: 'National Geographic', description: 'Maps, articles, and facts about world geography.', url: '#' },
        { title: 'Google Earth', description: 'Explore the world with satellite imagery and street view.', url: '#' },
        { title: 'World Atlas', description: 'Interactive maps and geographic information.', url: '#' },
        { title: 'Geography King', description: 'Geography games and quizzes to learn about countries and capitals.', url: '#' },
        { title: 'Khan Academy - Geography', description: 'Geography lessons and world culture courses.', url: '#' }
    ],
    coding: [
        { title: 'Codecademy', description: 'Interactive coding courses in Python, JavaScript, HTML, and more.', url: '#' },
        { title: 'Khan Academy - Computer Science', description: 'Free computer science and programming courses.', url: '#' },
        { title: 'Code.org', description: 'Computer science education for beginners to advanced programmers.', url: '#' },
        { title: 'Repl.it', description: 'Online platform to write and run code in multiple languages.', url: '#' },
        { title: 'Free Code Camp', description: 'Full stack web development and programming courses.', url: '#' }
    ],
    english: [
        { title: 'Grammarly', description: 'Writing assistance tool to improve grammar and style.', url: '#' },
        { title: 'Khan Academy - English', description: 'Grammar, reading, and writing courses.', url: '#' },
        { title: 'Purdue OWL', description: 'Online writing laboratory with grammar and citation guides.', url: '#' },
        { title: 'SparkNotes', description: 'Study guides for literature and writing help.', url: '#' },
        { title: 'Vocabulary.com', description: 'Learn vocabulary with games and interactive lessons.', url: '#' }
    ]
};

// Perform Search
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchInput) {
        alert('Please enter a search term!');
        return;
    }
    
    displaySearchResults(searchInput);
}

// Search by Category
function searchByCategory(category) {
    const categoryData = searchDatabase[category] || [];
    displayCategoryResults(categoryData, category);
}

// Display Search Results
function displaySearchResults(query) {
    let results = [];
    
    // Search through all categories
    for (const category in searchDatabase) {
        const categoryResults = searchDatabase[category].filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        results = results.concat(categoryResults);
    }
    
    displayResults(results, query);
}

// Display Category Results
function displayCategoryResults(results, category) {
    displayResults(results, `Category: ${category.toUpperCase()}`);
}

// Display Results Helper
function displayResults(results, query) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <p>No results found for "${query}"</p>
                <p style="font-size: 0.9rem;">Try searching for different terms or browse our categories.</p>
            </div>
        `;
        return;
    }
    
    let html = `<h3 style="margin-bottom: 1rem; color: #333;">Search Results (${results.length} found)</h3>`;
    
    results.forEach(result => {
        html += `
            <div class="search-result-item">
                <h4>${result.title}</h4>
                <p>${result.description}</p>
                <a href="${result.url}" target="_blank">Learn More →</a>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

// Handle Search Key Press
function handleSearchKey(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

console.log('Search Module Loaded Successfully!');