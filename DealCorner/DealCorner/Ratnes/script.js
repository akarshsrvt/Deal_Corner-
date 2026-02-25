// ========== FOOTER YEAR ==========
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ========== PRODUCT "DATABASE" (50+ ITEMS) ==========
const products = [
  // ---------------- SMARTPHONES ----------------
  { name: "iPhone 15", category: "Smartphones", price: 79999, bestStore: "Flipkart", rating: 4.8, saving: 2500 },
  { name: "Samsung Galaxy S23", category: "Smartphones", price: 69999, bestStore: "Amazon", rating: 4.7, saving: 3200 },
  { name: "Redmi Note 13", category: "Smartphones", price: 18999, bestStore: "Amazon", rating: 4.4, saving: 1500 },
  { name: "Realme Narzo 60 Pro", category: "Smartphones", price: 24999, bestStore: "Amazon", rating: 4.4, saving: 2200 },
  { name: "Vivo V27", category: "Smartphones", price: 29999, bestStore: "Flipkart", rating: 4.5, saving: 2800 },
  { name: "Oppo Reno 10", category: "Smartphones", price: 32999, bestStore: "Croma", rating: 4.6, saving: 3500 },

  // ---------------- LAPTOPS ----------------
  { name: "HP Gaming Laptop", category: "Laptops", price: 62999, bestStore: "Croma", rating: 4.5, saving: 4000 },
  { name: "Lenovo Student Laptop", category: "Laptops", price: 42999, bestStore: "Reliance Digital", rating: 4.3, saving: 2500 },
  { name: "MacBook Air M1", category: "Laptops", price: 78999, bestStore: "Amazon", rating: 4.9, saving: 7000 },
  { name: "Dell Inspiron 3511", category: "Laptops", price: 51999, bestStore: "Amazon", rating: 4.4, saving: 3300 },
  { name: "ASUS TUF Gaming F15", category: "Laptops", price: 73999, bestStore: "Flipkart", rating: 4.6, saving: 5200 },
  { name: "Acer Aspire 7 Ryzen 5", category: "Laptops", price: 46999, bestStore: "Flipkart", rating: 4.4, saving: 3500 },

  // ---------------- ELECTRONICS ----------------
  { name: "Wireless Bluetooth Headphones", category: "Electronics", price: 3999, bestStore: "Amazon", rating: 4.4, saving: 800 },
  { name: 'Smart LED TV 43"', category: "Electronics", price: 27999, bestStore: "Reliance Digital", rating: 4.6, saving: 3000 },
  { name: "Samsung 55-inch 4K TV", category: "Electronics", price: 42999, bestStore: "Flipkart", rating: 4.7, saving: 6000 },
  { name: "Boat Airdopes 161", category: "Electronics", price: 899, bestStore: "Amazon", rating: 4.2, saving: 300 },
  { name: "Sony Soundbar 120W", category: "Electronics", price: 7999, bestStore: "Croma", rating: 4.5, saving: 1200 },
  { name: "OnePlus Buds Z2", category: "Electronics", price: 4499, bestStore: "Amazon", rating: 4.6, saving: 600 },

  // ---------------- CLOTHING ----------------
  { name: "Casual Hoodie for Men", category: "Clothing", price: 1499, bestStore: "Myntra", rating: 4.2, saving: 400 },
  { name: "Women Printed Kurti", category: "Clothing", price: 899, bestStore: "AJIO", rating: 4.1, saving: 250 },
  { name: "Men Oversized T-shirt", category: "Clothing", price: 599, bestStore: "Myntra", rating: 4.4, saving: 150 },
  { name: "Women Floral Top", category: "Clothing", price: 699, bestStore: "AJIO", rating: 4.3, saving: 180 },
  { name: "Unisex Winter Jacket", category: "Clothing", price: 1999, bestStore: "Flipkart", rating: 4.5, saving: 500 },
  { name: "Track Pants for Men", category: "Clothing", price: 799, bestStore: "Amazon", rating: 4.2, saving: 200 },

  // ---------------- SHOES ----------------
  { name: "White Running Sneakers", category: "Shoes", price: 2499, bestStore: "AJIO", rating: 4.3, saving: 600 },
  { name: "Formal Leather Shoes", category: "Shoes", price: 2999, bestStore: "Flipkart", rating: 4.0, saving: 700 },
  { name: "Nike Revolution 6", category: "Shoes", price: 3299, bestStore: "Nike", rating: 4.6, saving: 500 },
  { name: "Adidas Court Shoes", category: "Shoes", price: 2899, bestStore: "Amazon", rating: 4.4, saving: 450 },
  { name: "Campus Sports Shoes", category: "Shoes", price: 1499, bestStore: "Flipkart", rating: 4.1, saving: 350 },

  // ---------------- GROCERY ----------------
  { name: "Monthly Grocery Combo Pack", category: "Grocery", price: 1899, bestStore: "BigBasket", rating: 4.4, saving: 350 },
  { name: "Rice + Atta + Oil Pack", category: "Grocery", price: 2299, bestStore: "JioMart", rating: 4.5, saving: 500 },
  { name: "Tata Tea + Sugar Combo", category: "Grocery", price: 499, bestStore: "BigBasket", rating: 4.2, saving: 100 },
  { name: "Toor Dal (5kg)", category: "Grocery", price: 699, bestStore: "JioMart", rating: 4.4, saving: 120 },
  { name: "Aashirvaad Atta 10kg", category: "Grocery", price: 489, bestStore: "Amazon", rating: 4.3, saving: 70 },

  // ---------------- ACCESSORIES ----------------
  { name: "Power Bank 10000mAh", category: "Accessories", price: 1299, bestStore: "Amazon", rating: 4.3, saving: 300 },
  { name: "USB-C Fast Charger", category: "Accessories", price: 799, bestStore: "Flipkart", rating: 4.2, saving: 200 },
  { name: "Laptop Cooling Pad", category: "Accessories", price: 999, bestStore: "Amazon", rating: 4.3, saving: 250 },
  { name: "Keyboard + Mouse Combo", category: "Accessories", price: 799, bestStore: "Flipkart", rating: 4.1, saving: 150 },
  { name: "22W Fast Charger", category: "Accessories", price: 599, bestStore: "Amazon", rating: 4.4, saving: 100 },

  // ---------------- HOME DECOR ----------------
  { name: "LED Strip Light 5m", category: "Home", price: 499, bestStore: "Amazon", rating: 4.1, saving: 100 },
  { name: "Artificial Plant Medium", category: "Home", price: 799, bestStore: "Meesho", rating: 4.0, saving: 150 },
  { name: "Wooden Photo Frame Set", category: "Home", price: 999, bestStore: "Amazon", rating: 4.3, saving: 200 },
  { name: "Star Projector Lamp", category: "Home", price: 1199, bestStore: "Flipkart", rating: 4.5, saving: 300 },
  { name: "Premium Wall Clock", category: "Home", price: 699, bestStore: "Amazon", rating: 4.2, saving: 120 }
];


// ========== DOM ELEMENTS ==========
const productGrid = document.getElementById("productGrid");
const resultsInfo = document.getElementById("resultsInfo");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryCards = document.querySelectorAll(".category-card");
const priceCards = document.querySelectorAll(".price-card");

let activeCategory = "ALL";
let query = "";

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  if (!productGrid || !resultsInfo) return;

  productGrid.innerHTML = "";

  const filtered = products.filter((p) => {
    const byCategory = activeCategory === "ALL" || p.category === activeCategory;
    const byQuery =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase());
    return byCategory && byQuery;
  });

  if (filtered.length === 0) {
    resultsInfo.textContent = "No deals found for this filter.";
  } else {
    resultsInfo.textContent = `Showing ${filtered.length} deal(s)${
      activeCategory === "ALL" ? "" : " in " + activeCategory
    }`;
  }

  filtered.forEach((p, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-tag">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-meta">
        <span class="product-price">₹${p.price.toLocaleString()}</span>
        <span>⭐ ${p.rating}</span>
      </div>
      <div class="product-savings">You save ₹${p.saving.toLocaleString()}</div>
      <div class="product-footer">
        <button class="compare-btn">Compare</button>
        <span class="store-pill">${p.bestStore}</span>
      </div>
    `;
    productGrid.appendChild(card);

    // little animation delay
    setTimeout(() => card.classList.add("show"), 60 * index);
  });
}

// Initial render (only if container exists)
if (productGrid) {
  renderProducts();
}

// ========== SEARCH ==========
if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    query = searchInput.value;
    renderProducts();
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      query = searchInput.value;
      renderProducts();
    }
  });
}

// ========== CATEGORY FILTER ==========
if (categoryCards.length) {
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      activeCategory = card.getAttribute("data-category") || "ALL";

      // scroll to products
      const productsSection = document.getElementById("products");
      if (productsSection) {
        window.scrollTo({
          top: productsSection.offsetTop - 70,
          behavior: "smooth",
        });
      }

      renderProducts();
    });
  });
}

// ========== PRICE CARDS (scroll only for now) ==========
if (priceCards.length) {
  priceCards.forEach((card) => {
    card.addEventListener("click", () => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        window.scrollTo({
          top: productsSection.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
}

// ========== AI ASSISTANT ==========
const aiToggle = document.getElementById("ai-toggle");
const aiWidget = document.getElementById("ai-widget");
const aiClose = document.getElementById("ai-close");
const aiInput = document.getElementById("ai-input");
const aiMessages = document.getElementById("ai-messages");

// Open / Close
if (aiToggle && aiWidget) {
  aiToggle.addEventListener("click", () => {
    aiWidget.style.display =
      aiWidget.style.display === "flex" ? "none" : "flex";
  });
}

if (aiClose && aiWidget) {
  aiClose.addEventListener("click", () => {
    aiWidget.style.display = "none";
  });
}

// Helper to add messages
function addAiMessage(text, from = "bot") {
  if (!aiMessages) return;
  const div = document.createElement("div");
  div.classList.add("ai-msg");
  div.classList.add(from === "bot" ? "ai-msg-bot" : "ai-msg-user");
  div.textContent = (from === "bot" ? "" : "You: ") + text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

// Simple AI reply
function getBotReply(userText) {
  const t = userText.toLowerCase();
  if (t.includes("phone") || t.includes("smartphone")) {
    return "For phones, open the Smartphones category and then filter by your budget, like under ₹20,000.";
  }
  if (t.includes("laptop")) {
    return "For laptops, compare RAM, SSD and processor. Student laptops are cheaper, gaming laptops are more powerful.";
  }
  if (t.includes("grocery") || t.includes("ration")) {
    return "For grocery, combo packs usually give better value. Always compare per-kg price, not only discount %.";
  }
  if (t.includes("shoe") || t.includes("sneaker")) {
    return "For shoes, check size chart and return policy. Many brands drop prices during flash sales.";
  }
  if (t.includes("help") || t.includes("how")) {
    return "Use search bar at top, tap categories, or tap price range cards. I'll guide you about deals and smart buying.";
  }
  return "Right now I’m a frontend assistant only, but I can still guide you on categories, budgets and smart shopping tips. 😊";
}

// Input handler
if (aiInput) {
  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = aiInput.value.trim();
      if (!text) return;
      addAiMessage(text, "user");
      const reply = getBotReply(text);
      setTimeout(() => addAiMessage(reply, "bot"), 400);
      aiInput.value = "";
    }
  });
}
