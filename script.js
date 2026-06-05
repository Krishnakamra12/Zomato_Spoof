const categories = [
  {emoji:'🍕',label:'Pizza'},{emoji:'🍔',label:'Burgers'},
  {emoji:'🍣',label:'Sushi'},{emoji:'🍜',label:'Noodles'},
  {emoji:'🍛',label:'Biryani'},{emoji:'🥗',label:'Salads'},
  {emoji:'🍦',label:'Desserts'},{emoji:'☕',label:'Café'},
  {emoji:'🌮',label:'Mexican'},{emoji:'🍗',label:'Chicken'},
  {emoji:'🥞',label:'Breakfast'},{emoji:'🥤',label:'Shakes'},
];

const restaurants = [
  {id:1,name:"Spice Route",emoji:"🍛",cuisine:"North Indian · Mughlai",rating:"4.5",time:"28 min",price:"₹400 for two",category:"Biryani",badge:"BESTSELLER",menu:[
    {section:"Starters",items:[
      {emoji:"🥘",name:"Dal Makhani",desc:"Slow-cooked black lentils with cream",price:320},
      {emoji:"🍗",name:"Chicken Tikka",desc:"Tender marinated chicken, tandoor-fired",price:380},
      {emoji:"🧅",name:"Onion Bhaji",desc:"Crispy onion fritters with mint chutney",price:180},
    ]},
    {section:"Main Course",items:[
      {emoji:"🍛",name:"Butter Chicken",desc:"Creamy tomato gravy with soft chicken",price:420},
      {emoji:"🌾",name:"Paneer Lababdar",desc:"Cottage cheese in rich onion-tomato gravy",price:360},
      {emoji:"🍚",name:"Chicken Biryani",desc:"Aromatic basmati with spiced chicken",price:450},
    ]},
    {section:"Breads",items:[
      {emoji:"🫓",name:"Butter Naan",desc:"Soft leavened bread, butter-kissed",price:60},
      {emoji:"🫓",name:"Garlic Roti",desc:"Whole wheat with garlic and herbs",price:50},
    ]}
  ]},
  {id:2,name:"Burger Barn",emoji:"🍔",cuisine:"American · Fast Food",rating:"4.2",time:"22 min",price:"₹250 for two",category:"Burgers",badge:"20% OFF",menu:[
    {section:"Burgers",items:[
      {emoji:"🍔",name:"Classic Smash",desc:"Double smashed patty, American cheese",price:249},
      {emoji:"🍔",name:"BBQ Bacon Stack",desc:"Crispy bacon, BBQ sauce, jalapeños",price:299},
      {emoji:"🌿",name:"Veg Crunch",desc:"Crispy veggie patty with ranch",price:199},
    ]},
    {section:"Sides",items:[
      {emoji:"🍟",name:"Loaded Fries",desc:"Topped with cheese sauce & jalapeños",price:149},
      {emoji:"🧅",name:"Onion Rings",desc:"Beer-battered with smoky dip",price:129},
    ]},
    {section:"Shakes",items:[
      {emoji:"🥤",name:"Oreo Shake",desc:"Thick & creamy Oreo milkshake",price:179},
      {emoji:"🍓",name:"Strawberry Blast",desc:"Fresh strawberry milkshake",price:159},
    ]}
  ]},
  {id:3,name:"Sushi Sora",emoji:"🍣",cuisine:"Japanese · Pan-Asian",rating:"4.7",time:"35 min",price:"₹800 for two",category:"Sushi",badge:"TOP RATED",menu:[
    {section:"Nigiri",items:[
      {emoji:"🍣",name:"Salmon Nigiri",desc:"Fresh Atlantic salmon over pressed rice",price:320},
      {emoji:"🍣",name:"Tuna Nigiri",desc:"Bluefin tuna, perfectly sliced",price:360},
    ]},
    {section:"Rolls",items:[
      {emoji:"🌀",name:"Dragon Roll",desc:"Shrimp tempura, avocado, eel sauce",price:580},
      {emoji:"🌀",name:"Spicy Tuna Roll",desc:"Tuna, cucumber, sriracha mayo",price:520},
      {emoji:"🌀",name:"Veggie Crunch Roll",desc:"Avocado, cucumber, carrots, sesame",price:420},
    ]},
    {section:"Bowls",items:[
      {emoji:"🥣",name:"Chirashi Bowl",desc:"Assorted sashimi over seasoned rice",price:680},
    ]}
  ]},
  {id:4,name:"Pizza Piazza",emoji:"🍕",cuisine:"Italian · Pizza",rating:"4.3",time:"25 min",price:"₹350 for two",category:"Pizza",badge:"FREE DELIVERY",menu:[
    {section:"Classic Pizzas",items:[
      {emoji:"🍕",name:"Margherita",desc:"San Marzano tomato, fresh mozzarella, basil",price:299},
      {emoji:"🍕",name:"Pepperoni Feast",desc:"Double pepperoni, mozzarella, oregano",price:399},
      {emoji:"🍕",name:"BBQ Chicken",desc:"Smoky BBQ base, grilled chicken, peppers",price:449},
    ]},
    {section:"Specialty",items:[
      {emoji:"🍕",name:"Truffle Mushroom",desc:"White truffle oil, wild mushrooms, arugula",price:549},
      {emoji:"🍕",name:"The Veggie Garden",desc:"Roasted veggies, pesto, goat cheese",price:399},
    ]},
    {section:"Sides & Desserts",items:[
      {emoji:"🥗",name:"Caesar Salad",desc:"Romaine, parmesan, croutons, house dressing",price:199},
      {emoji:"🍮",name:"Tiramisu",desc:"Classic Italian dessert, mascarpone, espresso",price:249},
    ]}
  ]},
  {id:5,name:"The Noodle House",emoji:"🍜",cuisine:"Chinese · Thai · Pan-Asian",rating:"4.1",time:"30 min",price:"₹300 for two",category:"Noodles",badge:"NEW",menu:[
    {section:"Noodles",items:[
      {emoji:"🍜",name:"Pad Thai",desc:"Rice noodles, tofu/shrimp, peanuts, lime",price:320},
      {emoji:"🍜",name:"Ramen Tonkotsu",desc:"Rich pork broth, soft-boiled egg, chashu",price:380},
      {emoji:"🍜",name:"Hakka Noodles",desc:"Stir-fried with veggies & soy",price:220},
    ]},
    {section:"Soups & Starters",items:[
      {emoji:"🥟",name:"Dim Sum Basket (8pcs)",desc:"Steamed and fried varieties",price:280},
      {emoji:"🍲",name:"Tom Yum Soup",desc:"Spicy Thai soup with mushrooms & lemongrass",price:240},
    ]}
  ]},
  {id:6,name:"Sweet Bliss",emoji:"🍦",cuisine:"Desserts · Bakery",rating:"4.6",time:"20 min",price:"₹200 for two",category:"Desserts",badge:"TRENDING",menu:[
    {section:"Ice Cream",items:[
      {emoji:"🍨",name:"Belgian Choc Sundae",desc:"Dark chocolate ice cream, brownie, fudge",price:249},
      {emoji:"🍦",name:"Mango Sorbet",desc:"Fresh Alphonso mango, refreshingly tart",price:149},
    ]},
    {section:"Cakes & Pastries",items:[
      {emoji:"🎂",name:"Red Velvet Slice",desc:"Moist red velvet with cream cheese frosting",price:199},
      {emoji:"🥐",name:"Croissant au Beurre",desc:"Buttery, flaky French croissant",price:120},
      {emoji:"🍮",name:"Crème Brûlée",desc:"Classic French custard with caramelised top",price:189},
    ]}
  ]},
];

let cart = {};      // { itemKey: {name,price,emoji,qty} }
let activeOrder = null;
let currentRestaurant = null;

function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const b = document.getElementById('bnav-' + page);
  if (b) b.classList.add('active');
  window.scrollTo(0,0);

  if (page === 'cart') renderCart();
  if (page === 'tracking') renderTracking();
  if (page === 'restaurants') renderAllRestaurants();
}

function initHome() {
  // Categories
  const cg = document.getElementById('cats-grid');
  categories.forEach(c => {
    cg.innerHTML += `<div class="cat-card" onclick="filterRestaurants('${c.label}')">
      <span class="emoji">${c.emoji}</span>
      <span class="label">${c.label}</span>
    </div>`;
  });

  const pg = document.getElementById('popular-grid');
  restaurants.slice(0,3).forEach(r => pg.innerHTML += restCardHTML(r));

  const ng = document.getElementById('new-grid');
  restaurants.slice(3).forEach(r => ng.innerHTML += restCardHTML(r));
}

function restCardHTML(r) {
  return `<div class="rest-card" onclick="openRestaurant(${r.id})">
    <div class="rest-img-placeholder" style="background:${restBg(r.id)};">
      ${r.emoji}
      <span class="rest-badge">${r.badge}</span>
    </div>
    <div class="rest-body">
      <div class="rest-name">${r.name}</div>
      <div class="rest-meta">
        <span class="rest-rating">★ ${r.rating}</span>
        <span class="rest-cuisine">${r.cuisine}</span>
      </div>
      <div class="rest-info">
        <span class="rest-time">⏱ ${r.time}</span>
        <span class="rest-price">${r.price}</span>
      </div>
    </div>
  </div>`;
}

function restBg(id) {
  const bgs = [
    'linear-gradient(135deg,#fde8ea,#fde9d8)',
    'linear-gradient(135deg,#e8f5fd,#d8e9fd)',
    'linear-gradient(135deg,#f0fde8,#d8fded)',
    'linear-gradient(135deg,#fde8ea,#fdf0e8)',
    'linear-gradient(135deg,#fdf5e8,#fde8d8)',
    'linear-gradient(135deg,#f5e8fd,#ead8fd)',
  ];
  return bgs[(id-1) % bgs.length];
}

const filterTags = ['All','Pizza','Burgers','Sushi','Noodles','Biryani','Desserts'];
let activeFilter = 'All';

function renderAllRestaurants() {
  const chips = document.getElementById('filter-chips');
  chips.innerHTML = filterTags.map(t =>
    `<div onclick="setFilter('${t}')" style="
      padding:7px 18px;border-radius:20px;cursor:pointer;font-size:0.82rem;font-weight:600;
      background:${activeFilter===t?'var(--red)':'var(--surface)'};
      color:${activeFilter===t?'#fff':'var(--muted)'};
      border:1.5px solid ${activeFilter===t?'var(--red)':'var(--border)'};
      transition:all 0.18s;
    ">${t}</div>`
  ).join('');

  const list = activeFilter === 'All' ? restaurants : restaurants.filter(r => r.category === activeFilter);
  document.getElementById('all-rest-grid').innerHTML = list.map(r => restCardHTML(r)).join('');
}

function setFilter(f) { activeFilter = f; renderAllRestaurants(); }
function filterRestaurants(cat) { activeFilter = cat; goPage('restaurants'); }

function openRestaurant(id) {
  currentRestaurant = restaurants.find(r => r.id === id);
  const r = currentRestaurant;

  document.getElementById('detail-hero-emoji').textContent = r.emoji;
  document.getElementById('detail-hero-bg').style.background = restBg(r.id);
  document.getElementById('detail-name').textContent = r.name;
  document.getElementById('detail-meta').innerHTML = `
    <span style="background:rgba(255,255,255,0.2);border-radius:8px;padding:3px 9px;">★ ${r.rating}</span>
    <span>${r.cuisine}</span>
    <span>⏱ ${r.time}</span>
    <span>${r.price}</span>
  `;

  let menuHTML = '';
  r.menu.forEach(section => {
    menuHTML += `<div class="menu-section">
      <div class="menu-section-title">${section.section}</div>
      <div class="menu-items">
        ${section.items.map(item => {
          const key = r.id + '-' + item.name;
          const inCart = cart[key] && cart[key].qty > 0;
          return `<div class="menu-item">
            <div class="menu-item-left">
              <span class="menu-item-emoji">${item.emoji}</span>
              <div>
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:14px;">
              <span class="menu-item-price">₹${item.price}</span>
              <button class="add-btn ${inCart?'added':''}" onclick="addItem('${key}','${item.name}',${item.price},'${item.emoji}',this)">${inCart?'Added ✓':'Add'}</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });
  document.getElementById('menu-container').innerHTML = menuHTML;

  const photoEmojis = ['🍽️','🌟','👨‍🍳','🥘','🍴','🏮'];
  document.getElementById('photos-grid').innerHTML = photoEmojis.map((e,i) =>
    `<div style="height:120px;border-radius:10px;background:${restBg(i+1)};display:flex;align-items:center;justify-content:center;font-size:2.5rem;">${e}</div>`
  ).join('');

  const reviews = [
    {name:'Priya S.',rating:5,text:'Absolutely loved the food! Prompt delivery, everything arrived hot. The butter chicken was phenomenal.',time:'2 days ago'},
    {name:'Karan M.',rating:4,text:'Great taste but packaging could be better. Would definitely reorder!',time:'5 days ago'},
    {name:'Aditi R.',rating:5,text:'Best restaurant on this app. Never disappointed. Highly recommend!',time:'1 week ago'},
  ];
  document.getElementById('reviews-container').innerHTML = reviews.map(rv =>
    `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <strong style="font-size:0.88rem;">${rv.name}</strong>
        <span style="font-size:0.75rem;color:var(--muted)">${rv.time}</span>
      </div>
      <div style="color:#f59e0b;font-size:0.85rem;margin-bottom:6px;">${'★'.repeat(rv.rating)}${'☆'.repeat(5-rv.rating)}</div>
      <p style="font-size:0.85rem;color:var(--muted);">${rv.text}</p>
    </div>`
  ).join('');

  document.getElementById('info-container').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;">
        <div style="font-weight:700;margin-bottom:8px;">📍 Address</div>
        <div style="color:var(--muted);font-size:0.88rem;">123 Food Street, Bandra West, Mumbai – 400050</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;">
        <div style="font-weight:700;margin-bottom:8px;">🕐 Timings</div>
        <div style="color:var(--muted);font-size:0.88rem;">Open daily: 11:00 AM – 11:30 PM</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;">
        <div style="font-weight:700;margin-bottom:8px;">📞 Contact</div>
        <div style="color:var(--muted);font-size:0.88rem;">+91 98765 43210</div>
      </div>
    </div>
  `;

  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector('.detail-tab').classList.add('active');
  document.getElementById('tab-menu').classList.add('active');

  goPage('detail');
}

function switchTab(tab) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

function addItem(key, name, price, emoji, btn) {
  if (cart[key]) {
    cart[key].qty++;
  } else {
    cart[key] = {name, price, emoji, qty:1};
  }
  btn.textContent = 'Added ✓';
  btn.classList.add('added');
  updateCartBadge();
  showToast(`${emoji} ${name} added to cart`);
}

function updateCartBadge() {
  const total = Object.values(cart).reduce((s,i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  const navCount = document.getElementById('nav-cart-count');
  if (total > 0) {
    badge.style.display = 'flex';
    badge.textContent = total;
    navCount.textContent = `(${total})`;
  } else {
    badge.style.display = 'none';
    navCount.textContent = '';
  }
}

function renderCart() {
  const keys = Object.keys(cart).filter(k => cart[k].qty > 0);
  const el = document.getElementById('cart-content');
  if (keys.length === 0) {
    el.innerHTML = `<div class="cart-empty">
      <div class="big-emoji">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Looks like you haven't added anything yet.</p>
      <button class="nav-cta" onclick="goPage('restaurants')">Browse Restaurants</button>
    </div>`;
    return;
  }

  const subtotal = keys.reduce((s,k) => s + cart[k].price * cart[k].qty, 0);
  const delivery = 40;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + taxes;

  el.innerHTML = `
    <div class="cart-items">
      ${keys.map(k => `
        <div class="cart-item">
          <span class="cart-item-emoji">${cart[k].emoji}</span>
          <span class="cart-item-name">${cart[k].name}</span>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty('${k}',-1)">−</button>
            <span class="qty-num">${cart[k].qty}</span>
            <button class="qty-btn" onclick="changeQty('${k}',1)">+</button>
          </div>
          <span class="cart-item-price">₹${cart[k].price * cart[k].qty}</span>
        </div>
      `).join('')}
    </div>
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="summary-row"><span>Delivery Fee</span><span>₹${delivery}</span></div>
      <div class="summary-row"><span>Taxes & Charges</span><span>₹${taxes}</span></div>
      <div class="summary-row total"><span>Total</span><span>₹${total}</span></div>
      <button class="checkout-btn" onclick="placeOrder(${total})">Place Order · ₹${total}</button>
    </div>`;
}

function changeQty(key, delta) {
  cart[key].qty = Math.max(0, cart[key].qty + delta);
  updateCartBadge();
  renderCart();
}

function placeOrder(total) {
  activeOrder = {
    restaurant: currentRestaurant ? currentRestaurant.name : 'Spice Route',
    total,
    time: new Date(),
    step: 1,
  };
  cart = {};
  updateCartBadge();
  document.getElementById('order-modal').classList.add('open');
  startTracking();
}

function closeModalAndTrack() {
  document.getElementById('order-modal').classList.remove('open');
  goPage('tracking');
}

let trackingInterval = null;

function startTracking() {
  if (trackingInterval) clearInterval(trackingInterval);
  let step = 0;
  trackingInterval = setInterval(() => {
    step++;
    if (activeOrder) activeOrder.step = step;
    renderTracking();
    if (step >= 4) { clearInterval(trackingInterval); trackingInterval = null; }
  }, 6000);
}

function renderTracking() {
  const el = document.getElementById('tracking-card');
  const noOrder = document.getElementById('tracking-no-order');
  if (!activeOrder) {
    el.innerHTML = '';
    noOrder.style.display = 'block';
    return;
  }
  noOrder.style.display = 'none';

  const steps = [
    {label:'Order Confirmed',desc:'Your order has been placed and accepted.', icon:'✅'},
    {label:'Preparing Food',desc:'The restaurant is cooking your meal right now.', icon:'👨‍🍳'},
    {label:'Out for Delivery',desc:'Your rider is on the way with your order.', icon:'🛵'},
    {label:'Delivered!',desc:'Your food has arrived. Enjoy your meal! 🎉', icon:'🏠'},
  ];
  const s = activeOrder.step;
  const eta = s >= 4 ? 'Delivered!' : `${Math.max(5, 30 - s*8)}–${Math.max(10, 35 - s*8)} mins`;

  el.innerHTML = `
    <div class="tracking-card">
      <div class="tracking-header">
        <h2>${activeOrder.restaurant}</h2>
        <p>Order #ZM${Math.floor(Math.random()*90000+10000)}</p>
      </div>
      <div class="tracking-body">
        <div class="tracking-steps">
          ${steps.map((step, i) => {
            const done = i < s;
            const active = i === s;
            return `<div class="tracking-step ${done?'done':''} ${active?'active':''}">
              <div class="step-icon">${done?'✓':step.icon}</div>
              <div class="step-info">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="eta-pill">⏱ ETA: ${eta}</div>
      </div>
    </div>`;
}

function doSearch() {
  const q = document.getElementById('hero-input').value.toLowerCase().trim();
  if (!q) { goPage('restaurants'); return; }
  activeFilter = 'All';
  goPage('restaurants');
  setTimeout(() => {
    const results = restaurants.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
    );
    document.getElementById('all-rest-grid').innerHTML =
      results.length ? results.map(r => restCardHTML(r)).join('') :
      `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)">No results for "${q}"</div>`;
  }, 100);
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

document.getElementById('hero-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});

initHome();