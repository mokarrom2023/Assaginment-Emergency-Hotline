const services = [
    { id: 1, name: "National Emergency Number", nameEn: "National Emergency", number: "999", image: "assets/emergency.png", category: "All" },

    { id: 2, name: "Police Helpline Number", nameEn: "Police", number: "999", image: "assets/police.png", category: "Police" },

    { id: 3, name: "Fire Service Number", nameEn: "Fire Service", number: "999", image: "assets/fire-service.png", category: "Fire" },

    { id: 4, name: "Ambulance Service", nameEn: "Ambulance", number: "1994-999999", image: "assets/ambulance.png", category: "Health" },

    { id: 5, name: "Women & Child Helpline", nameEn: "Women & Child Helpline", number: "109", image: "assets/emergency.png", category: "Help" },

    { id: 6, name: "Anti-Corruption Helpline", nameEn: "Anti-Corruption", number: "106", image: "assets/emergency.png", category: "Govt." },

    { id: 7, name: "Electricity Helpline", nameEn: "Electricity Outage", number: "16216", image: "assets/emergency.png", category: "Electricity" },

    { id: 8, name: "Brac Helpline", nameEn: "Brac", number: "16445", image: "assets/brac.png", category: "NGO" },

    { id: 9, name: "Bangladesh Railway Helpline ", nameEn: "Bangladesh Railway", number: "163", image: "assets/Bangladesh-Railway.png", category: "Travel" }
];

let coins = 100,
 hearts = 0,
 copies = 0;

 
function renderCards() {
    const container = document.getElementById('card-container');
    if (!container) return;
    container.innerHTML = ""; 

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative text-left hover:shadow-md transition-all";
        card.innerHTML = `
            <i onclick="handleHeart()" class="fa-regular fa-heart absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer text-xl transition-colors"></i>
            <div class="flex items-start mb-3">
                <div class="bg-red-50 p-2 rounded-xl">
                    <img src="${service.image}" class="w-9 h-9 object-contain" alt="icon">
                </div>
            </div>
            <h4 class="font-bold text-gray-800 text-lg leading-tight mb-0.5">${service.name}</h4>
            <p class="text-[10px] text-gray-400 mb-2 font-medium">${service.nameEn}</p>
            <div class="text-2xl font-black mb-1 text-gray-900">${service.number}</div>
            <div class="badge badge-sm bg-gray-100 border-none text-gray-500 mb-6 text-[10px] px-3 py-2 font-bold">${service.category}</div>
            <div class="flex gap-2">
                <button onclick="handleCopy('${service.number}')" class="flex-1 bg-white border border-gray-200 py-2 rounded-lg font-bold text-gray-500 flex items-center justify-center gap-2 text-xs hover:bg-gray-50">
                    <i class="fa-regular fa-copy"></i> Copy
                </button>
                <button onclick="handleCall('${service.name}', '${service.number}')" class="flex-1 bg-[#05a64b] hover:bg-[#048a3e] text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 text-xs shadow-sm transition-all">
                    <i class="fa-solid fa-phone"></i> Call
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}