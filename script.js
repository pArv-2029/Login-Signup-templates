//A list of all the template folder names.
const templateFolders = [
  "Ankit_nonsense3",
  "AasthaRai",
  "Aerospace-Prog",
  "Abhinav Shukla",
  "Amit Raj Sharm",
  "JwelSrivastava_Form",
  "Aniruddha Dwivedi",
  "Archisman Nath Choudhury",
  "Aurora-Glass-Auth",
  "Avinash",
  "Ayush",
  "Baveja Template",
  "Bootsnipp",
  "Chanakya",
  "Chinmay",
  "Chitraxi Porwal",
  "CodePenTemplate-1",
  "Coding Nepal",
  "colorlib Template",
  "Cursor Following",
  "Dhruva Bhat",
  "Divyansh-Raj-Template",
  "EdwinAdamsV",
  "Foolish Developer",
  "HimanshuDubey",
  "Igneel-98",
  "Ipsit",
  "Ivan Grozdic",
  "Jayanta Ghosh",
  "Modern Animated Template",
  "Pranilash",
  "Parth",
  "Prachi",
  "RajdeepSingh",
  "Ruthwik",
  "SaurabhMishra(edtech+ecommerce)",
  "Tech Zero",
  "Template 1",
  "Template 2",
  "chatfly",
  "Elango-Kannan-00",
  "Gihan Harindra",
  "Glassmorphism-adiprem73",
  "Jaswanth-Kumar",
  "Joyston",
  "Kartik Tripathi",
  "Khushi",
  "khushi-batra",
  "Kruti Amrutiya",
  "Minaal",
  "Sahil-Kumar",
  "samim29",
  "shivaram",
  "Abhinav Shukla",
  "Amit Raj Sharm",
  "Anuradha",
  "Avinash",
  "Ayush",
  "Baveja Template",
  "Bootsnipp",
  "Chanakya",
  "CodePenTemplate-1",
  "Coding Nepal",
  "colorlib Template",
  "Dev-Portal-Shikha",
  "Dhruva Bhat",
  "Foolish Developer",
  "Ivan Grozdic",
  "Himanshu",
  "Janavi-Pandole",
  "karthik-srivathsa-05",
  "Modern Animated Template",
  "Modern-Glassmorphic-Login",
  "Neon-Cyberpunk-Login",
  "Nitin",
  "SaurabhMishra(edtech+ecommerce)",
  "Shivaram",
  "SohamPadalkar",
  "Split-Screen-Dark-Shikha",
  "SrushtiThombre",
  "Tech Zero",
  "Template 1",
  "Template 2",
  "VedantTapkir",
  "OnkarJondhale",
  "SrushtiThombre",
  "Rohan",
  "Kanishka",
  "Ishika Singh Rajput",
  "Harsh-Login-Form",
];

// Template details with descriptions and features
const templateDetails = {
  "JwelSrivastava_Form": {
    title: "JwelSrivastava Form",
    description: "Modern Glassmorphism Login Form",
    features: ["Glassmorphism Design", "Real-time Validation", "Password Toggle", "Social Login", "Responsive Design"],
    author: "Jwel Srivastava",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    category: "Modern",
    difficulty: "Intermediate"
  }
};

// A list of only the templates that were working.
const workingTemplates = [
  "Ankit_nonsense3",
  "Aerospace-Prog",
  "Aurora-Glass-Auth",
  "JwelSrivastava_Form",
  "QuantumNeon-Auth",
  "SaurabhMishra(edtech+ecommerce)",
  "CodePenTemplate-1",
  "Bootsnipp",
  "Anuradha",
  "Ayush",
  "Parth",
  "Prachi",
  "Joyston",
  "Shivaram",
  "Avinash",
  "Abhinav Shukla",
  "Amit Raj Sharm",
  "Baveja Template",
  "Chanakya",
  "Chinmay",
  "Chitraxi Porwal",
  "Jayanta Ghosh",
  "Coding Nepal",
  "colorlib Template",
  "Dhruva Bhat",
  "Divyansh-Raj-Template",
  "Foolish Developer",
  "Igneel-98",
  "Ivan Grozdic",
  "Modern-Glassmorphic-Login",
  "Modern Animated Template",
  "Nitin",
  "Pranilash",
  "Tech Zero",
  "Template 1",
  "Template 2",
  "chatfly",
  "Himanshu",
  "HimanshuDubey",
  "SohamPadalkar",
  "Elango-Kannan-00",
  "Gihan Harindra",
  "Ishika Singh Rajput",
  "Glassmorphism-adiprem73",
  "Jaswanth-Kumar",
  "Kartik Tripathi",
  "Khushi",
  "khushi-batra",
  "Kruti Amrutiya",
  "Minaal",
  "Ruthwik",
  "Sahil-Kumar",
  "samim29",
  "SaurabhMishra(edtech+ecommerce)",
  "Janavi-Pandole",
  "CodePenTemplate-1",
  "Bootsnipp",
  "Ayush",
  "Avinash",
  "Dev-Portal-Shikha",
  "Split-Screen-Dark-Shikha",
  "SrushtiThombre",
  "OnkarJondhale",
  "Kanishka",
  "AasthaRai",
  "AniruddhaDwivedi",
  "Cursor Following",
];

//container element from the HTML
const cardContainer = document.getElementById("card-container");

// Log template details
console.log('🎨 JwelSrivastava_Form Template Details:', templateDetails["JwelSrivastava_Form"]);

// Loop through each folder name and creating a card for it
templateFolders.forEach((folderName) => {
  console.log('Creating card for:', folderName);
  // Create the HTML elements for the card
  const card = document.createElement("a");
  card.classList.add("template-card");

  // Add special styling for JwelSrivastava_Form
  if (folderName === "JwelSrivastava_Form") {
    card.style.cssText += `
      border: 2px solid #6366f1;
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
      position: relative;
    `;

    // Add "NEW" badge
    const newBadge = document.createElement("div");
    newBadge.textContent = "NEW";
    newBadge.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: #10b981;
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: bold;
      z-index: 10;
    `;
    card.appendChild(newBadge);
  }

  // Special fix for 'Tech Zero' link
  if (folderName === "Tech Zero") {
    card.href = `./${folderName}/login.html`;
  } else {
    card.href = `./${folderName}/`;
  }

  const screenshot = document.createElement("img");

  // Checking if the template is in our "working" list
  if (workingTemplates.includes(folderName)) {
    // If it works, use your real screenshot
    screenshot.src = `./screenshots/${folderName}.png`;
  } else {
    // If it's broken, using a professional placeholder
    screenshot.src = `https://placehold.co/400x300/2d3436/dfe6e9/png?text=Preview+Not+Available`;
  }

  const title = document.createElement("h3");
  title.textContent = folderName;

  // Add template details if available
  const details = templateDetails[folderName];
  if (details) {
    // Add description
    const description = document.createElement("p");
    description.textContent = details.description;
    description.style.cssText = `
      font-size: 12px;
      color: #888;
      margin: 4px 0;
      text-align: center;
    `;

    // Add features badge
    const featuresDiv = document.createElement("div");
    featuresDiv.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      justify-content: center;
      margin-top: 8px;
    `;

    details.features.slice(0, 2).forEach(feature => {
      const badge = document.createElement("span");
      badge.textContent = feature;
      badge.style.cssText = `
        background: #6366f1;
        color: white;
        padding: 2px 6px;
        border-radius: 10px;
        font-size: 10px;
        font-weight: 500;
      `;
      featuresDiv.appendChild(badge);
    });

    // Adding the screenshot, title, description and features to the card
    card.appendChild(screenshot);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(featuresDiv);
  } else {
    // Adding the screenshot and title to the card (default)
    card.appendChild(screenshot);
    card.appendChild(title);
  }

  // Adding the completed card to the container
  cardContainer.appendChild(card);
});

// how to contribute info code
const controInfo = document.querySelector(".contro-info");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

// Safety guards in case elements are missing
if (popup) {
  // Ensure popup is hidden on load (use the boolean hidden attribute)
  popup.hidden = true;

  if (controInfo) {
    controInfo.addEventListener("click", () => {
      popup.hidden = false;
      // move focus into the dialog for accessibility
      const firstHeading = popup.querySelector("#popup-title");
      if (firstHeading) firstHeading.focus({ preventScroll: true });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.hidden = true;
      if (controInfo) controInfo.focus({ preventScroll: true });
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.hidden = true;
      if (controInfo) controInfo.focus({ preventScroll: true });
    }
  });
}

// Scroll to top function
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to check scroll position and toggle button visibility
const scrollFunction = () => {
  // If the user has scrolled down more than 100px from the top
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // Show the button
    scrollToTopBtn.style.display = "block";
  } else {
    // Otherwise, hide the button
    scrollToTopBtn.style.display = "none";
  }
};

// Function to scroll smoothly to the top of the page
const topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This enables smooth scrolling
  });
};

// Add an event listener that calls scrollFunction() whenever the user scrolls
window.onscroll = () => {
  scrollFunction();
};

// Add an event listener that calls topFunction() when the button is clicked
scrollToTopBtn.addEventListener("click", topFunction);

// --- NEW: THEME SWITCHER LOGIC ---
const themeToggle = document.querySelector("#theme-checkbox");
const currentTheme = localStorage.getItem("theme");

// On page load, apply the saved theme
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === "light-mode") {
    themeToggle.checked = true;
  }
}

// Add event listener for the toggle switch
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", ""); // When unchecked, it's the default dark mode
  }
});


// --- Search Functionality ---
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-search");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".template-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const isMatch = title.includes(query);
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) visibleCount++;
    });

    // Create or show "No results" message
    let noResultMsg = document.getElementById("no-results");
    if (!noResultMsg) {
      noResultMsg = document.createElement("p");
      noResultMsg.id = "no-results";
      noResultMsg.textContent = "No templates found";
      noResultMsg.style.textAlign = "center";
      noResultMsg.style.marginTop = "40px";
      noResultMsg.style.fontSize = "1.2rem";
      noResultMsg.style.color = "var(--text-secondary)";
      cardContainer.parentNode.insertBefore(
        noResultMsg,
        cardContainer.nextSibling
      );
    }

    noResultMsg.style.display = visibleCount === 0 ? "block" : "none";
  });

  //clear search button
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      searchInput.value = "";
      const cards = document.querySelectorAll(".template-card");
      cards.forEach((card) => (card.style.display = "block"));
      const noResultMsg = document.getElementById("no-results");
      if (noResultMsg) noResultMsg.style.display = "none";
      searchInput.focus();
    });
  }
}
