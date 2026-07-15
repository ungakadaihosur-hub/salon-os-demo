/* ========================================================================
   VELVET — Salon Business Manager (clickable prototype)
   All data below is dummy/in-memory. Nothing persists after reload.
   ======================================================================== */

/* ---------------------------- DUMMY DATA ---------------------------- */

const state = {
  role: "Owner",
  lang: "en",
  customers: [
    { id: 1, name: "Priya Ramesh", phone: "98765 43210", visits: 12, lastVisit: "3 days ago", totalSpent: 14200, note: "Prefers herbal color" },
    { id: 2, name: "Anitha Kumar", phone: "90031 22456", visits: 7, lastVisit: "1 week ago", totalSpent: 8100, note: "Allergic to ammonia" },
    { id: 3, name: "Divya S", phone: "89901 76543", visits: 3, lastVisit: "Today", totalSpent: 2450, note: "" },
    { id: 4, name: "Karthik R", phone: "97865 11223", visits: 21, lastVisit: "2 days ago", totalSpent: 26800, note: "Regular — beard grooming" },
    { id: 5, name: "Meena Prakash", phone: "80123 45678", visits: 5, lastVisit: "5 days ago", totalSpent: 6300, note: "" },
    { id: 6, name: "Suresh Babu", phone: "99887 65432", visits: 15, lastVisit: "Today", totalSpent: 19500, note: "Prefers Staff: Vignesh" },
  ],
  staff: [
    { id: 1, name: "Lakshmi", role: "Senior Stylist", today: 5, earnToday: 2100, rating: 4.8, weekServices: 28, monthServices: 112, commission: 25 },
    { id: 2, name: "Vignesh", role: "Barber", today: 6, earnToday: 1650, rating: 4.6, weekServices: 31, monthServices: 128, commission: 20 },
    { id: 3, name: "Kavya", role: "Beautician", today: 3, earnToday: 1450, rating: 4.9, weekServices: 19, monthServices: 80, commission: 25 },
  ],
  services: [
    { id: 1, name: "Haircut", price: 250, category: "Hair" },
    { id: 2, name: "Hair color", price: 1200, category: "Hair" },
    { id: 3, name: "Beard grooming", price: 150, category: "Hair" },
    { id: 4, name: "Facial — classic", price: 800, category: "Skin" },
    { id: 5, name: "Facial — gold", price: 1500, category: "Skin" },
    { id: 6, name: "Head massage", price: 300, category: "Skin" },
    { id: 7, name: "Manicure", price: 400, category: "Skin" },
    { id: 8, name: "Hair spa", price: 900, category: "Hair" },
  ],
  inventory: [
    { id: 1, name: "L'Oreal Shampoo 1L", category: "Hair", stock: 4, unit: "bottles", low: 5, cost: 480 },
    { id: 2, name: "Ammonia-free Hair Color", category: "Hair", stock: 12, unit: "tubes", low: 6, cost: 220 },
    { id: 3, name: "Facial Cream — Gold", category: "Skin", stock: 2, unit: "jars", low: 4, cost: 650 },
    { id: 4, name: "Facial Cream — Classic", category: "Skin", stock: 9, unit: "jars", low: 4, cost: 350 },
    { id: 5, name: "Disposable Towels", category: "Consumables", stock: 18, unit: "packs", low: 10, cost: 120 },
    { id: 6, name: "Hair Gel", category: "Hair", stock: 7, unit: "bottles", low: 5, cost: 160 },
    { id: 7, name: "Cotton Rolls", category: "Consumables", stock: 3, unit: "packs", low: 5, cost: 60 },
    { id: 8, name: "Nail Polish Set", category: "Skin", stock: 15, unit: "sets", low: 6, cost: 90 },
  ],
  suppliers: [
    { id: 1, name: "Chennai Beauty Distributors", phone: "044-28934521", pending: 4500, lastPurchase: "5 days ago" },
    { id: 2, name: "Salon Essentials Co.", phone: "98450 11223", pending: 0, lastPurchase: "2 weeks ago" },
    { id: 3, name: "GlowPro Wholesale", phone: "93445 67890", pending: 1800, lastPurchase: "Today" },
  ],
  purchases: [
    { id: 1, supplier: "GlowPro Wholesale", date: "Today", items: "Facial cream x10, Nail polish x15", amount: 2500 },
    { id: 2, supplier: "Chennai Beauty Distributors", date: "5 days ago", items: "Shampoo x20, Hair color x30", amount: 12800 },
    { id: 3, supplier: "Salon Essentials Co.", date: "2 weeks ago", items: "Towels x40, Cotton rolls x25", amount: 4200 },
  ],
  expenses: [
    { id: 1, category: "Tea & snacks", amount: 180, date: "Today, 11:20 AM", note: "" },
    { id: 2, category: "Electricity", amount: 1020, date: "Today, 9:05 AM", note: "Monthly bill part-payment" },
    { id: 3, category: "Maintenance", amount: 650, date: "Yesterday", note: "AC service" },
    { id: 4, category: "Rent", amount: 15000, date: "3 days ago", note: "" },
    { id: 5, category: "Staff advance", amount: 2000, date: "4 days ago", note: "Vignesh" },
  ],
  notifications: [
    { id: 1, type: "stock", title: "Facial Cream — Gold running low", detail: "Only 2 jars left · reorder from GlowPro Wholesale", time: "10 min ago" },
    { id: 2, type: "payment", title: "Payment pending — Divya S", detail: "₹850 pending since today's visit", time: "1 hr ago" },
    { id: 3, type: "stock", title: "Cotton Rolls running low", detail: "Only 3 packs left", time: "2 hr ago" },
    { id: 4, type: "supplier", title: "Supplier payment due", detail: "₹1,800 pending to GlowPro Wholesale", time: "Today" },
    { id: 5, type: "info", title: "Daily summary ready", detail: "Yesterday: ₹9,200 income · 16 services", time: "Yesterday, 9:00 PM" },
  ],
  activity: [
    { icon: "🧾", title: "Bill — Suresh Babu", meta: "Vignesh · Haircut, Beard grooming", amount: 400, status: "paid", time: "12:40 PM" },
    { icon: "🧾", title: "Bill — Divya S", meta: "Kavya · Facial classic", amount: 850, status: "pending", time: "11:55 AM" },
    { icon: "📦", title: "Stock added", meta: "Facial Cream x10 from GlowPro", amount: -2500, status: "purchase", time: "11:10 AM" },
    { icon: "🧾", title: "Bill — Karthik R", meta: "Lakshmi · Hair color, Hair spa", amount: 2100, status: "paid", time: "10:30 AM" },
    { icon: "💸", title: "Expense — Electricity", meta: "Monthly bill part-payment", amount: -1020, status: "expense", time: "9:05 AM" },
  ],
  bills: [],
};

let currentServiceSelection = { customerId: null, staffId: null, serviceIds: [] };
let currentBillDraft = null;
let navHistory = ["dashboard"];

/* ---------------------------- HELPERS ---------------------------- */

function money(n){
  const sign = n < 0 ? "-" : "";
  return sign + "₹" + Math.abs(n).toLocaleString("en-IN");
}

function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function screenIdFor(name){ return "screen-" + name; }

function showScreen(name, opts = {}){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(screenIdFor(name));
  if (el) el.classList.add("active");

  if (name !== "splash" && name !== "login"){
    document.getElementById("app").classList.add("active");
  }

  if (!opts.skipHistory) navHistory.push(name);

  // bottom nav highlight
  const rootMap = { dashboard:"dashboard", customers:"customers", customerDetail:"customers",
    addCustomer:"customers", billing:"billing", serviceEntry:"billing", billSuccess:"billing",
    inventory:"inventory", addStock:"inventory" };
  const root = rootMap[name] || null;
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", root && btn.dataset.navroot === root);
  });

  window.scrollTo(0,0);
  const scroller = el ? el.querySelector(".scroll-area") : null;
  if (scroller) scroller.scrollTop = 0;

  renderScreen(name);
}

function goBack(){
  navHistory.pop();
  const prev = navHistory[navHistory.length - 1] || "dashboard";
  showScreen(prev, { skipHistory:true });
}

function openSheet(id){ document.getElementById(id).classList.add("open"); }
function closeSheet(id){ document.getElementById(id).classList.remove("open"); }

/* ---------------------------- RENDERERS ---------------------------- */

function renderScreen(name){
  if (name === "dashboard") renderDashboard();
  if (name === "customers") renderCustomers();
  if (name === "addCustomer") { /* static form, nothing to render */ }
  if (name === "serviceEntry") renderServiceEntry();
  if (name === "billing") renderBilling();
  if (name === "staff") renderStaffList();
  if (name === "staffPerformance") renderStaffPerformance();
  if (name === "inventory") renderInventory("All");
  if (name === "addStock") renderAddStockForm();
  if (name === "suppliers") renderSuppliers();
  if (name === "purchases") renderPurchases();
  if (name === "expenses") renderExpenses();
  if (name === "reports") renderReports();
  if (name === "notifications") renderNotifications();
}

function renderDashboard(){
  document.getElementById("dashRole").textContent =
    (state.role === "Owner" ? "Muthu — Owner" : "Anitha — Manager");
  const hour = new Date().getHours();
  document.getElementById("dashGreeting").textContent =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  // alerts: low stock + pending payments
  const lowStock = state.inventory.filter(i => i.stock <= i.low);
  const alertsEl = document.getElementById("dashAlerts");
  alertsEl.innerHTML = "";
  lowStock.slice(0,2).forEach(i => {
    alertsEl.innerHTML += `
      <div class="alert-item danger">
        <span class="alert-icon">📦</span>
        <div><strong>${i.name} running low</strong><p>${i.stock} ${i.unit} left · reorder soon</p></div>
      </div>`;
  });
  alertsEl.innerHTML += `
    <div class="alert-item">
      <span class="alert-icon">⏳</span>
      <div><strong>2 payments pending</strong><p>₹1,850 total — send reminders from Notifications</p></div>
    </div>`;

  // staff row
  const staffEl = document.getElementById("dashStaffRow");
  staffEl.innerHTML = state.staff.map(s => `
    <div class="staff-pill">
      <div class="staff-avatar">${s.name[0]}</div>
      <strong>${s.name}</strong>
      <span>${s.today} services</span>
      <span class="staff-earn">${money(s.earnToday)}</span>
    </div>`).join("");

  // activity
  const actEl = document.getElementById("dashActivity");
  actEl.innerHTML = state.activity.map(a => `
    <div class="activity-item">
      <div class="activity-icon">${a.icon}</div>
      <div class="activity-body"><strong>${a.title}</strong><span>${a.meta} · ${a.time}</span></div>
      <div class="activity-amount ${a.status === 'pending' ? 'pending' : ''}">${money(a.amount)}</div>
    </div>`).join("");
}

function renderCustomers(query){
  const listEl = document.getElementById("customerList");
  const q = (query || document.getElementById("customerSearch").value || "").toLowerCase();
  const filtered = state.customers.filter(c =>
    c.name.toLowerCase().includes(q) || c.phone.replace(/\s/g,"").includes(q.replace(/\s/g,"")));
  listEl.innerHTML = filtered.map(c => `
    <button class="list-card" data-open-customer="${c.id}" style="width:100%;border:none;text-align:left;">
      <div class="avatar">${c.name[0]}</div>
      <div class="list-card-body"><strong>${c.name}</strong><span>${c.phone} · ${c.visits} visits</span></div>
      <div class="list-card-meta"><strong>${money(c.totalSpent)}</strong><span>${c.lastVisit}</span></div>
    </button>`).join("") || `<p style="color:var(--muted);text-align:center;padding:30px 0;">No customers found</p>`;

  listEl.querySelectorAll("[data-open-customer]").forEach(btn => {
    btn.addEventListener("click", () => openCustomerDetail(parseInt(btn.dataset.openCustomer)));
  });
}

function openCustomerDetail(id){
  const c = state.customers.find(x => x.id === id);
  if (!c) return;
  const body = document.getElementById("customerDetailBody");
  body.innerHTML = `
    <div class="profile-card">
      <div class="profile-avatar">${c.name[0]}</div>
      <h2>${c.name}</h2>
      <p>${c.phone}</p>
    </div>
    <div class="stat-strip">
      <div><span>Visits</span><strong>${c.visits}</strong></div>
      <div><span>Total spent</span><strong>${money(c.totalSpent)}</strong></div>
      <div><span>Last visit</span><strong style="font-size:12px;">${c.lastVisit}</strong></div>
    </div>
    ${c.note ? `<div class="alert-item" style="margin-bottom:20px;"><span class="alert-icon">📝</span><div><strong>Note</strong><p>${c.note}</p></div></div>` : ""}
    <div class="section-head"><h3>Quick actions</h3></div>
    <button class="btn btn-primary btn-block" id="custStartService">Start new service</button>
    <button class="btn btn-ghost btn-block" id="custSendReminder">Send WhatsApp reminder</button>
  `;
  document.getElementById("custStartService").addEventListener("click", () => {
    currentServiceSelection = { customerId: c.id, staffId: null, serviceIds: [] };
    showScreen("serviceEntry");
  });
  document.getElementById("custSendReminder").addEventListener("click", () => toast("WhatsApp reminder sent to " + c.name));
  showScreen("customerDetail");
}

function renderServiceEntry(){
  const custSel = document.getElementById("svcCustomer");
  custSel.innerHTML = `<option value="">Walk-in customer</option>` +
    state.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  if (currentServiceSelection.customerId) custSel.value = currentServiceSelection.customerId;

  const staffSel = document.getElementById("svcStaff");
  staffSel.innerHTML = state.staff.map(s => `<option value="${s.id}">${s.name} — ${s.role}</option>`).join("");
  if (currentServiceSelection.staffId) staffSel.value = currentServiceSelection.staffId;

  renderServiceChips();
}

function renderServiceChips(){
  const chipList = document.getElementById("svcChipList");
  chipList.innerHTML = state.services.map(s => {
    const selected = currentServiceSelection.serviceIds.includes(s.id);
    return `
      <button class="chip ${selected ? "selected" : ""}" data-service-id="${s.id}" style="width:100%;">
        <div class="chip-info"><strong>${s.name}</strong><span>${s.category}</span></div>
        <span class="chip-price">${money(s.price)}</span>
      </button>`;
  }).join("");

  chipList.querySelectorAll("[data-service-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.serviceId);
      const idx = currentServiceSelection.serviceIds.indexOf(id);
      if (idx >= 0) currentServiceSelection.serviceIds.splice(idx,1);
      else currentServiceSelection.serviceIds.push(id);
      renderServiceChips();
      updateServiceTotal();
    });
  });
  updateServiceTotal();
}

function updateServiceTotal(){
  const total = currentServiceSelection.serviceIds
    .map(id => state.services.find(s => s.id === id).price)
    .reduce((a,b) => a+b, 0);
  document.getElementById("svcTotal").textContent = money(total);
}

function renderBilling(){
  const custId = parseInt(document.getElementById("svcCustomer")?.value) || currentServiceSelection.customerId;
  const staffId = parseInt(document.getElementById("svcStaff")?.value) || currentServiceSelection.staffId;
  const cust = state.customers.find(c => c.id === custId);
  const staff = state.staff.find(s => s.id === staffId);

  document.getElementById("billCustomer").textContent = cust ? cust.name : "Walk-in";
  document.getElementById("billStaff").textContent = staff ? staff.name : "—";

  const lines = document.getElementById("billLines");
  const selectedServices = currentServiceSelection.serviceIds.length
    ? state.services.filter(s => currentServiceSelection.serviceIds.includes(s.id))
    : [state.services[0]]; // fallback demo line
  lines.innerHTML = selectedServices.map(s => `
    <div class="bill-row"><span>${s.name}</span><strong>${money(s.price)}</strong></div>`).join("");

  const total = selectedServices.reduce((a,s) => a + s.price, 0);
  document.getElementById("billTotal").textContent = money(total);

  currentBillDraft = { customer: cust, staff: staff, services: selectedServices, total };
}

function renderStaffList(){
  const el = document.getElementById("staffList");
  el.innerHTML = state.staff.map(s => `
    <div class="list-card">
      <div class="avatar">${s.name[0]}</div>
      <div class="list-card-body"><strong>${s.name}</strong><span>${s.role} · ★ ${s.rating}</span></div>
      <div class="list-card-meta"><strong>${money(s.earnToday)}</strong><span>${s.today} today</span></div>
    </div>`).join("");
}

function renderStaffPerformance(){
  const el = document.getElementById("staffPerfList");
  const maxServices = Math.max(...state.staff.map(s => s.weekServices));
  el.innerHTML = state.staff.map(s => `
    <div class="list-card" style="flex-direction:column;align-items:stretch;gap:10px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="avatar">${s.name[0]}</div>
        <div class="list-card-body"><strong>${s.name}</strong><span>${s.role} · ★ ${s.rating} · ${s.commission}% commission</span></div>
        <div class="list-card-meta"><strong>${s.weekServices}</strong><span>this week</span></div>
      </div>
      <div style="height:8px;background:var(--surface-2);border-radius:6px;overflow:hidden;">
        <div style="height:100%;width:${(s.weekServices/maxServices*100).toFixed(0)}%;background:linear-gradient(90deg,var(--gold),var(--primary));"></div>
      </div>
    </div>`).join("");
}

function renderInventory(cat){
  const el = document.getElementById("inventoryList");
  const items = cat === "All" ? state.inventory : state.inventory.filter(i => i.category === cat);
  el.innerHTML = items.map(i => {
    const low = i.stock <= i.low;
    return `
      <div class="list-card">
        <div class="avatar" style="background:${low ? "var(--danger-tint)" : "var(--primary-tint)"};color:${low ? "var(--danger)" : "var(--primary)"};">${i.name[0]}</div>
        <div class="list-card-body"><strong>${i.name}</strong><span>${i.category} · ${money(i.cost)}/unit</span></div>
        <div class="list-card-meta">
          <strong>${i.stock} ${i.unit}</strong>
          <span class="badge ${low ? "badge-danger" : "badge-success"}">${low ? "Low stock" : "In stock"}</span>
        </div>
      </div>`;
  }).join("");
}

function renderAddStockForm(){
  const prodSel = document.getElementById("stockProduct");
  prodSel.innerHTML = state.inventory.map(i => `<option value="${i.id}">${i.name}</option>`).join("");
  const supSel = document.getElementById("stockSupplier");
  supSel.innerHTML = state.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
}

function renderSuppliers(){
  const el = document.getElementById("supplierList");
  el.innerHTML = state.suppliers.map(s => `
    <div class="list-card">
      <div class="avatar">${s.name[0]}</div>
      <div class="list-card-body"><strong>${s.name}</strong><span>${s.phone} · last order ${s.lastPurchase}</span></div>
      <div class="list-card-meta">
        <strong style="color:${s.pending > 0 ? "var(--danger)" : "var(--success)"}">${s.pending > 0 ? money(s.pending) : "Settled"}</strong>
        <span>${s.pending > 0 ? "pending" : ""}</span>
      </div>
    </div>`).join("");
}

function renderPurchases(){
  const el = document.getElementById("purchaseList");
  el.innerHTML = state.purchases.map(p => `
    <div class="list-card">
      <div class="avatar">📦</div>
      <div class="list-card-body"><strong>${p.supplier}</strong><span>${p.items}</span></div>
      <div class="list-card-meta"><strong>${money(p.amount)}</strong><span>${p.date}</span></div>
    </div>`).join("");
}

function renderExpenses(){
  const el = document.getElementById("expenseList");
  el.innerHTML = state.expenses.map(e => `
    <div class="list-card">
      <div class="avatar">💸</div>
      <div class="list-card-body"><strong>${e.category}</strong><span>${e.note || e.date}</span></div>
      <div class="list-card-meta"><strong>${money(e.amount)}</strong><span>${e.note ? e.date : ""}</span></div>
    </div>`).join("");
}

function renderReports(){
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const values = [6200, 7400, 5800, 8900, 9600, 12100, 8200];
  const max = Math.max(...values);
  const chart = document.getElementById("reportChart");
  chart.innerHTML = days.map((d,i) => `
    <div class="bar-col">
      <div class="bar-fill" style="height:${(values[i]/max*100).toFixed(0)}%;"></div>
      <span>${d}</span>
    </div>`).join("");

  const top = [...state.services].sort((a,b) => b.price - a.price).slice(0,4);
  document.getElementById("topServicesList").innerHTML = top.map((s,i) => `
    <div class="list-card">
      <div class="avatar">${i+1}</div>
      <div class="list-card-body"><strong>${s.name}</strong><span>${s.category}</span></div>
      <div class="list-card-meta"><strong>${money(s.price)}</strong><span>per service</span></div>
    </div>`).join("");
}

function renderNotifications(){
  const iconMap = { stock:"📦", payment:"⏳", supplier:"🚚", info:"📊" };
  const el = document.getElementById("notificationList");
  el.innerHTML = state.notifications.map(n => `
    <div class="list-card">
      <div class="avatar">${iconMap[n.type] || "🔔"}</div>
      <div class="list-card-body"><strong>${n.title}</strong><span>${n.detail}</span></div>
      <div class="list-card-meta"><span>${n.time}</span></div>
    </div>`).join("");
}

/* ---------------------------- EVENT WIRING ---------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  // splash -> login
  setTimeout(() => showScreen("login", { skipHistory:true }), 1600);
  document.getElementById("screen-splash").addEventListener("click", () => showScreen("login", { skipHistory:true }));

  // generic [data-nav] handling
  document.body.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn){
      const target = navBtn.dataset.nav;
      if (target === "login"){
        navHistory = ["dashboard"];
        showScreen("login", { skipHistory:true });
      } else if (target === "dashboard"){
        navHistory = ["dashboard"];
        showScreen("dashboard", { skipHistory:true });
      } else {
        showScreen(target);
      }
      closeSheet("moreSheetOverlay");
      return;
    }
    const backBtn = e.target.closest("[data-back]");
    if (backBtn){ goBack(); return; }

    const closeSheetBtn = e.target.closest("[data-close-sheet]");
    if (closeSheetBtn){ closeSheet(closeSheetBtn.dataset.closeSheet); return; }
  });

  // role toggle (login)
  document.getElementById("roleToggle").addEventListener("click", (e) => {
    const btn = e.target.closest(".role-btn");
    if (!btn) return;
    document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.role = btn.dataset.role;
  });

  // more nav sheet
  document.getElementById("moreNavBtn").addEventListener("click", () => openSheet("moreSheetOverlay"));
  document.getElementById("moreSheetOverlay").addEventListener("click", (e) => {
    if (e.target.id === "moreSheetOverlay") closeSheet("moreSheetOverlay");
  });

  // customer search
  document.getElementById("customerSearch").addEventListener("input", (e) => renderCustomers(e.target.value));

  // save customer
  document.getElementById("saveCustomerBtn").addEventListener("click", () => {
    const name = document.getElementById("newCustName").value.trim() || "New Customer";
    const phone = document.getElementById("newCustPhone").value.trim() || "—";
    const note = document.getElementById("newCustNote").value.trim();
    const newCust = { id: Date.now(), name, phone, visits: 0, lastVisit: "New", totalSpent: 0, note };
    state.customers.unshift(newCust);
    document.getElementById("newCustName").value = "";
    document.getElementById("newCustPhone").value = "";
    document.getElementById("newCustNote").value = "";
    toast(name + " added to customers");
    goBack();
  });

  // service entry: watch selects
  document.getElementById("svcCustomer").addEventListener("change", (e) => {
    currentServiceSelection.customerId = parseInt(e.target.value) || null;
  });
  document.getElementById("svcStaff").addEventListener("change", (e) => {
    currentServiceSelection.staffId = parseInt(e.target.value) || null;
  });
  document.getElementById("svcContinueBtn").addEventListener("click", () => {
    if (!currentServiceSelection.serviceIds.length){
      toast("Select at least one service");
      return;
    }
    showScreen("billing");
  });

  // payment methods
  let selectedMethod = "Cash";
  document.getElementById("paymentMethods").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    document.querySelectorAll("#paymentMethods .pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    selectedMethod = btn.dataset.method;
  });

  // confirm bill
  document.getElementById("confirmBillBtn").addEventListener("click", () => {
    if (!currentBillDraft) return;
    const { customer, total } = currentBillDraft;
    const custName = customer ? customer.name : "Walk-in customer";
    const isPending = selectedMethod === "Pending";

    state.activity.unshift({
      icon: "🧾",
      title: "Bill — " + custName,
      meta: (currentBillDraft.staff ? currentBillDraft.staff.name + " · " : "") + currentBillDraft.services.map(s=>s.name).join(", "),
      amount: total,
      status: isPending ? "pending" : "paid",
      time: "Just now"
    });

    if (customer){
      customer.visits += 1;
      customer.totalSpent += total;
      customer.lastVisit = "Today";
    }

    document.getElementById("billSuccessText").textContent =
      `${money(total)} ${isPending ? "marked pending for" : "collected from"} ${custName}${isPending ? "" : " via " + selectedMethod}`;

    currentServiceSelection = { customerId: null, staffId: null, serviceIds: [] };
    showScreen("billSuccess");
  });

  // inventory filter
  document.getElementById("invFilter").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    document.querySelectorAll("#invFilter .pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    renderInventory(btn.dataset.cat);
  });

  // save stock
  document.getElementById("saveStockBtn").addEventListener("click", () => {
    const prodId = parseInt(document.getElementById("stockProduct").value);
    const qty = parseInt(document.getElementById("stockQty").value) || 0;
    const supId = parseInt(document.getElementById("stockSupplier").value);
    const amount = parseInt(document.getElementById("stockAmount").value) || 0;
    const product = state.inventory.find(i => i.id === prodId);
    const supplier = state.suppliers.find(s => s.id === supId);
    if (product) product.stock += qty;
    state.purchases.unshift({ id: Date.now(), supplier: supplier ? supplier.name : "Supplier", date: "Today", items: `${product ? product.name : "Item"} x${qty}`, amount });
    state.activity.unshift({ icon:"📦", title:"Stock added", meta: `${product ? product.name : "Item"} x${qty}`, amount: -amount, status:"purchase", time:"Just now" });
    toast("Stock updated");
    goBack();
  });

  // expenses sheet
  document.getElementById("addExpenseBtn").addEventListener("click", () => openSheet("expenseSheetOverlay"));
  document.getElementById("expenseSheetOverlay").addEventListener("click", (e) => {
    if (e.target.id === "expenseSheetOverlay") closeSheet("expenseSheetOverlay");
  });
  document.getElementById("saveExpenseBtn").addEventListener("click", () => {
    const category = document.getElementById("expCategory").value;
    const amount = parseInt(document.getElementById("expAmount").value) || 0;
    const note = document.getElementById("expNote").value.trim();
    state.expenses.unshift({ id: Date.now(), category, amount, date: "Just now", note });
    state.activity.unshift({ icon:"💸", title:"Expense — " + category, meta: note || "Today", amount: -amount, status:"expense", time:"Just now" });
    closeSheet("expenseSheetOverlay");
    toast("Expense recorded");
    renderExpenses();
  });

  // settings language toggle (demo — switches a few labels)
  document.getElementById("langToggle").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    document.querySelectorAll("#langToggle .pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    state.lang = btn.dataset.lang;
    const isTa = state.lang === "ta";
    document.getElementById("dashGreeting").textContent = isTa ? "வணக்கம்" : "Good morning";
    toast(isTa ? "மொழி தமிழுக்கு மாற்றப்பட்டது" : "Language set to English");
  });

  showScreen("splash", { skipHistory:true });
});
