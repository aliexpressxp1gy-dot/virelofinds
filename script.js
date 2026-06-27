// === VIRELO FINDS JAVASCRIPT ===

// Sample trending products for 2026
const trendingProducts = [
    {
        title: "Wireless Mini Printer",
        desc: "Now $29.99 (was $45.00) — 33% OFF! • Portable thermal printing • No ink needed • Perfect for students & planners • 5,000+ sold",
        price: 29.99,
        original: 45.00,
        discount: 33,
        image: "https://via.placeholder.com/300x200?text=Mini+Printer",
        link: "#"
    },
    {
        title: "4K AI Security Camera",
        desc: "Now $59.99 (was $89.00) — 32% OFF! • Auto-tracking • Night vision • Local SD storage • 3,000+ sold",
        price: 59.99,
        original: 89.00,
        discount: 32,
        image: "https://via.placeholder.com/300x200?text=AI+Camera",
        link: "#"
    },
    {
        title: "Multi-Device GaN Charger",
        desc: "Now $39.99 (was $65.00) — 38% OFF! • 6-in-1 charging • 100W PD • Cooler operation • 8,000+ sold",
        price: 39.99,
        original: 65.00,
        discount: 38,
        image: "https://via.placeholder.com/300x200?text=GaN+Charger",
        link: "#"
    },
    {
        title: "Ultrasonic Glasses Cleaner",
        desc: "Now $34.99 (was $50.00) — 30% OFF! • Professional-grade cleaning • 3-5 year lifespan • 2,000+ sold",
        price: 34.99,
        original: 50.00,
        discount: 30,
        image: "https://via.placeholder.com/300x200?text=Ultrasonic+Cleaner",
        link: "#"
    },
    {
        title: "MagSafe Wireless Charger",
        desc: "Now $19.99 (was $35.00) — 42% OFF! • Snap-on charging • 15W fast charge • LED indicator • 10,000+ sold",
        price: 19.99,
        original: 35.00,
        discount: 42,
        image: "https://via.placeholder.com/300x200?text=MagSafe+Charger",
        link: "#"
    },
    {
        title: "LED Ambient Light Strip",
        desc: "Now $12.99 (was $25.00) — 48% OFF! • RGB customizable • App control • Music sync • 15,000+ sold",
        price: 12.99,
        original: 25.00,
        discount: 48,
        image: "https://via.placeholder.com/300x200?text=LED+Strip",
        link: "#"
    }
];

// Categories
const categories = [
    { name: "3D Printing", count: 191, icon: "🖨️" },
    { name: "Hair & Wigs", count: 206, icon: "💇" },
    { name: "Gaming & Consoles", count: 105, icon: "🎮" },
    { name: "Solar & Power", count: 81, icon: "☀️" },
    { name: "Tools & DIY", count: 77, icon: "🔧" },
    { name: "Home & Office", count: 73, icon: "🏠" },
    { name: "Keyboards & Mice", count: 65, icon: "⌨️" },
    { name: "USB Hubs", count: 58, icon: "🔌" },
    { name: "Car Accessories", count: 61, icon: "🚗" },
    { name: "Wearables", count: 53, icon: "⌚" },
    { name: "Audio & Video", count: 48, icon: "🎧" },
    { name: "Health & Fitness", count: 42, icon: "💪" }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderTrending();
    renderProducts();
});

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.name}')">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <span>${cat.count} products</span>
        </div>
    `).join('');
}

function renderTrending() {
    const grid = document.getElementById('trendingGrid');
    if (!grid) return;
    grid.innerHTML = trendingProducts.map(p => createProductCard(p)).join('');
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    fetch('products.json')
        .then(r => r.json())
        .then(data => {
            const topDeals = data.sort((a,b) => b.discount_percent - a.discount_percent).slice(0, 12);
            grid.innerHTML = topDeals.map(p => createProductCard({
                title: p.title,
                desc: p.description,
                price: p.discount_price,
                original: p.origin_price,
                discount: p.discount_percent,
                image: p.image_url || 'https://via.placeholder.com/300x200?text=Product',
                link: p.promotion_url
            })).join('');
        })
        .catch(() => {
            grid.innerHTML = trendingProducts.map(p => createProductCard(p)).join('');
        });
}

function createProductCard(p) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-price">
                    <span class="current-price">$${p.price.toFixed(2)}</span>
                    <span class="original-price">$${p.original.toFixed(2)}</span>
                    <span class="discount-badge">-${p.discount}%</span>
                </div>
                <a href="${p.link}" class="buy-btn" target="_blank" rel="nofollow">Buy Now →</a>
            </div>
        </div>
    `;
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    console.log('Filter by:', category);
}

function filterByCategory(category) {
    console.log('Category:', category);
    document.getElementById('deals').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search:', query);
}

function loadMore() {
    console.log('Load more products');
}
