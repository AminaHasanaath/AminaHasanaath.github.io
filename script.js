// ✅ Step 1: Modal Open & Close Functions
function openModal(projectIndex) {
    const modal = document.getElementById("modal");
    const project = projects[projectIndex]; // Get project details from array

    // Insert project details into the modal
    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-description").innerText = project.description;
    document.getElementById("modal-link").href = project.githubLink;

    // Show modal
    modal.classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// ✅ Step 2: Project Data Array (Dynamic Loading)
const projects = [
    {
        title: "Project 1",
        description: "Short description of project 1 goes here.",
        image: "https://via.placeholder.com/400",
        techStack: ["React", "Node.js", "Tailwind CSS"],
        githubLink: "#"
    },
    {
        title: "Project 2",
        description: "Short description of project 2 goes here.",
        image: "https://via.placeholder.com/400",
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "#"
    }
    // Add more projects as needed
];

// ✅ Step 3: Load Projects into the HTML Dynamically
function loadProjects() {
    const projectContainer = document.getElementById("project-grid");
    projectContainer.innerHTML = ""; // Clear existing content

    projects.forEach((project, index) => {
        const techStackHTML = project.techStack.map(tech => 
            `<span class="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">${tech}</span>`
        ).join(" ");

        const projectCard = `
            <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                <img src="${project.image}" alt="Project Image" class="w-full h-48 object-cover" />
                <div class="p-5">
                    <h2 class="text-2xl font-semibold">${project.title}</h2>
                    <p class="text-gray-400 text-sm mt-2">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-3">${techStackHTML}</div>
                    <button onclick="openModal(${index})"
                        class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                        View More
                    </button>
                </div>
            </div>
        `;

        projectContainer.innerHTML += projectCard;
    });
}

// ✅ Step 4: Ensure Everything Loads After the Page is Ready
document.addEventListener("DOMContentLoaded", loadProjects);
