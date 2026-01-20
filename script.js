function showWelcome() {
    updateContent(
        "Hi, I'm Diego Miguel! 👋",
        "I'm an IT student and aspiring web developer passionate about creating modern, user-friendly digital experiences. Welcome to my portfolio where I showcase my journey in tech and the projects I've built along the way."
    );
}

function showAbout() {
    updateContent(
        "About Me",
        "I'm Diego Miguel C. Manlapaz, a dedicated IT student with a passion for web development and technology. I specialize in creating responsive, visually appealing websites using HTML, CSS, JavaScript, and Bootstrap.<br><br>My journey in tech has led me to develop various projects including e-commerce platforms, educational games, and business websites. I believe in the power of technology to solve real-world problems and create meaningful user experiences.<br><br><strong>Skills & Technologies:</strong><br>• Front-end Development (HTML, CSS, JavaScript)<br>• Bootstrap Framework<br>• UI/UX Design<br>• Responsive Web Design<br>• E-commerce Solutions"
    );
}

function showContact() {
    updateContent(
        "Get In Touch",
        "<strong>Email:</strong> manlapazdiego@gmail.com<br><strong>Phone:</strong> 09297617253<br><br>Feel free to reach out for collaborations or just to connect!"
    );
}

function updateContent(title, content) {
    const titleEl = document.getElementById("title");
    const contentEl = document.getElementById("content");
    
    // Fade out
    titleEl.style.opacity = '0';
    contentEl.style.opacity = '0';
    
    setTimeout(() => {
        titleEl.innerText = title;
        contentEl.innerHTML = content;
        
        // Fade in
        titleEl.style.transition = 'opacity 0.4s ease';
        contentEl.style.transition = 'opacity 0.4s ease';
        titleEl.style.opacity = '1';
        contentEl.style.opacity = '1';
    }, 200);
}

function showProject(projectName) {
    const modalTitle = document.getElementById('projectModalTitle');
    const modalDescription = document.getElementById('projectModalDescription');
    const carouselInner = document.getElementById('projectCarouselInner');
    
    const projects = {
        'jaycollectibles': {
            title: 'JayCollectibles',
            description: 'JayCollectibles is a modern e-commerce platform created to improve the collectible shopping experience. It addresses the common issues of outdated website designs by offering a visually appealing, user-friendly interface with organized product details. The platform aims to redefine how consumers explore and purchase collectibles online while setting a new standard in the digital collectibles market.',
            images: ['JC1.png', 'JC2.png', 'JC3.png']
        },
        'barangayquest': {
            title: 'Barangay Quest: Trapo Hunter',
            description: 'Barangay Quest: The Trapo Hunter is a 2D action-adventure video game designed to provide entertainment, education, and social awareness in a single interactive experience. It is narrated in the middle of the barangay, and the main character, Vico, a persistent young hero who struggles for justice and better relations in his community, comes from a low-income family but refuses to let that stop him from fighting for what is right.',
            images: ['BT1.png', 'BT2.png', 'BT3.png']
        },
        'aromageeks': {
            title: 'AromaGeeks',
            description: 'AromaGeeks is a modern e-commerce platform created to improve the fragrance shopping experience. It addresses the common issues of outdated website designs by offering a visually appealing, user-friendly interface with organized product details. The platform aims to redefine how consumers explore and purchase fragrances online while setting a new standard in the digital beauty and self-care market.',
            images: ['AG1.png', 'AG2.png', 'AG3.png']
        }
    };
    
    const project = projects[projectName];
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        // Clear previous carousel images
        carouselInner.innerHTML = '';
        
        // Add images to carousel
        if (project.images && project.images.length > 0) {
            project.images.forEach((img, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
                carouselItem.innerHTML = `<img src="${img}" class="d-block w-100 carousel-project-img" alt="${project.title} Screenshot ${index + 1}">`;
                carouselInner.appendChild(carouselItem);
            });
        }
        
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    }
}

// Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'bi bi-sun-fill';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'bi bi-moon-fill';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'bi bi-sun-fill';
    }
});
