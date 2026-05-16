import './style.css';
import { 
  createIcons, 
  Calendar, 
  MapPin, 
  Train, 
  Plane, 
  Utensils, 
  Home, 
  Camera, 
  Info, 
  Users,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Compass,
  Printer
} from 'lucide';

// --- DATA ---
const itineraryData = {
  title: "Norwegian Journey · May–June 2026",
  duration: "11 Days",
  groupSize: 6,
  dates: "24 May – 3 Jun 2026",
  days: [
    {
      day: 1,
      date: "24 May",
      location: "Oslo",
      summary: "Arrival and Reunion. Exploring the architectural gems and historical sites of the harbor.",
      activities: [
        {
          time: "09:30",
          title: "Breakfast: Åpent Bakeri",
          description: "Traditional brunost waffle + coffee to kick off the journey.",
          longDescription: "Located near the Opera, this bakery is famous for its sourdough and traditional Norwegian waffles with brown cheese.",
          type: 'dining'
        },
        {
          time: "11:00",
          title: "Oslo Opera House & Deichman Library",
          description: "Walk on the white marble roof for panoramic views of the city and fjord.",
          longDescription: "The Opera House is an architectural masterpiece designed by Snøhetta. After the roof walk, visit the nearby Deichman Bjørvika library, another modern marvel.",
          images: [
            "https://images.unsplash.com/photo-1580227974557-0599596395b2?q=80&w=1000&auto=format&fit=crop"
          ],
          type: 'activity'
        },
        {
          time: "13:30",
          title: "Lunch: Vippa Food Market",
          description: "Fjord-side food hall featuring international cuisine and a local vibe.",
          longDescription: "Vippa is located at the tip of the peninsula and offers diverse stalls from Vietnamese to Ethiopian. It's a favorite for both locals and tourists.",
          type: 'dining'
        },
        {
          time: "15:30",
          title: "Akershus Fortress",
          description: "Medieval castle and harbour panorama photography.",
          longDescription: "A powerful symbol of Oslo's history, offering some of the best views of the Aker Brygge area and the fjord.",
          type: 'activity'
        },
        {
          time: "18:30",
          title: "Dinner: Lofoten Fiskerestaurant",
          description: "High-end seafood celebrating the first night in Norway.",
          type: 'dining',
          bookingUrl: "https://lofoten-fiskerestaurant.no",
          bookingLabel: "Reservations"
        }
      ]
    },
    {
      day: 2,
      date: "25 May",
      location: "Oslo",
      summary: "Culture and Art. Munch Museum, Bygdøy exploration and authentic Asian dining.",
      activities: [
        {
          time: "10:00",
          title: "Munch Museum",
          description: "Home to 'The Scream' and a massive collection of Edvard Munch's masterpieces.",
          longDescription: "Take the lift to the top floor for spectacular city views before descending through the gallery floors.",
          type: 'activity',
          bookingUrl: "https://www.munchmuseet.no/en/",
          bookingLabel: "Tickets"
        },
        {
          time: "12:30",
          title: "Supermarket Picnic",
          description: "Gather supplies at Kiwi near Bygdøy for a budget-friendly outdoor lunch.",
          type: 'leisure'
        },
        {
          time: "14:00",
          title: "Fram Museum",
          description: "Step aboard the strongest wooden ship ever built, used for polar exploration.",
          longDescription: "Everything is indoor and there are plenty of rest areas throughout this world-class museum.",
          type: 'activity'
        },
        {
          time: "18:30",
          title: "Dinner: Asian Flavors",
          description: "Punjab Tandoori or Rice Bowl Thai Café for authentic flavors in Grønland/Grünerløkka.",
          longDescription: "Oslo has an incredible Asian food scene. Punjab Tandoori in Grønland offers large, authentic portions at great value.",
          type: 'dining'
        }
      ]
    },
    {
      day: 3,
      date: "26 May",
      location: "Oslo",
      summary: "Sculptures and Split Paths. Vigeland Park and choosing between shopping or heights.",
      activities: [
        {
          time: "10:00",
          title: "Vigeland Sculpture Park",
          description: "The world's largest sculpture park made by a single artist, Gustav Vigeland.",
          longDescription: "Feature flat paved paths and over 200 sculptures in bronze, granite, and iron.",
          type: 'activity'
        },
        {
          time: "13:00",
          title: "Lunch: Freddy Fuego Burrito Bar",
          description: "Fast, fresh, and filling burritos in the heart of the city.",
          type: 'dining'
        },
        {
          time: "15:00",
          title: "Split Activity Selection",
          description: "Choose your pace for the afternoon.",
          type: 'activity',
          splitGroup: {
            groupA: "挑戰組: Holmenkollen Ski Jump Tower. T-bane Line 1 for incredible heights and history.",
            groupB: "悠遊組: Karl Johans Gate shopping or a visit to the National Gallery."
          }
        },
        {
          time: "18:30",
          title: "Dinner: Gangnam Korean Restaurant",
          description: "Authentic Korean BBQ and hotpots for a group reunion.",
          type: 'dining',
          bookingLabel: "Book Ahead"
        }
      ]
    },
    {
      day: 4,
      date: "27 May",
      location: "Flåm",
      summary: "The legendary Bergensbanen and Flåmsbana journey across the mountains to the fjords.",
      activities: [
        {
          time: "08:25",
          title: "Depart Oslo S (Bergen Line)",
          description: "Scenic 4.5 hour journey. Sit on the LEFT for best views of the Hardangervidda plateau.",
          longDescription: "Book Komfort class for unlimited free coffee and tea. Bring a supermarket picnic to save on board.",
          type: 'transport'
        },
        {
          time: "13:10",
          title: "The Descent to Flåm",
          description: "Choosing your mode of arrival from Myrdal.",
          type: 'activity',
          splitGroup: {
            groupA: "挑戰組: Flåm Zipline. A 1.5km exhilarating descent from Myrdal station.",
            groupB: "悠遊組: Flåmsbana Railway. Seat on the LEFT for the Kjosfossen waterfall stop."
          }
        },
        {
          time: "16:00",
          title: "Stegastein Viewpoint",
          description: "Architectural glass platform 650m above the Aurlandsfjord.",
          longDescription: "Take the electric shuttle from Flåm. It offers the most iconic 'fjord shot' of the entire trip.",
          type: 'activity'
        },
        {
          time: "19:00",
          title: "Dinner: Ægir Microbrewery",
          description: "Viking longhouse style dinner. Try the famous fish soup or a tasting plank.",
          type: 'dining'
        }
      ]
    },
    {
      day: 5,
      date: "28 May",
      location: "Flåm to Bergen",
      summary: "Morning fjord adventures and a scenic ferry ride to the rain capital, Bergen.",
      activities: [
        {
          time: "09:30",
          title: "Flåm Morning Explorations",
          description: "Active vs Scenic morning activities.",
          type: 'activity',
          splitGroup: {
            groupA: "挑戰組: Rallarvegen e-bike or Aurlandsfjord kayaking adventure.",
            groupB: "悠遊組: Flamstova fish soup and photography at the historic Flåm Church."
          }
        },
        {
          time: "15:30",
          title: "Sognefjord Ferry to Bergen",
          description: "5-hour high-speed ferry cruise through the 'King of Fjords'.",
          longDescription: "Claim a seat in the panoramic lounge. Look out for porpoises and sea eagles as you approach Bergen.",
          type: 'transport'
        }
      ]
    },
    {
      day: 6,
      date: "29 May",
      location: "Bergen",
      summary: "Bryggen UNESCO Wharf, fish markets and Nordic masters at KODE.",
      activities: [
        {
          time: "08:00",
          title: "Bryggen Wharf Photography",
          description: "Best morning light with zero tourists at this UNESCO heritage site.",
          type: 'activity'
        },
        {
          time: "10:30",
          title: "Fisketorget Fish Market",
          description: "Taste fresh shrimp and salmon at the indoor stalls (better value than outdoor).",
          type: 'dining'
        },
        {
          time: "14:30",
          title: "KODE Art Museums",
          description: "Four buildings featuring Munch, Picasso, and Nordic masters.",
          type: 'activity'
        },
        {
          time: "18:30",
          title: "Dinner: Pingvinen",
          description: "Traditional Norwegian pub food like lapskaus (lamb stew) and kjøttkaker.",
          type: 'dining'
        }
      ]
    },
    {
      day: 7,
      date: "30 May",
      location: "Bergen",
      summary: "Mount Fløyen panoramas and final Bergen shopping before the Arctic leap.",
      activities: [
        {
          time: "10:00",
          title: "Fløibanen Funicular",
          description: "Ride to the top of Mt Fløyen to feed the mountain goats and enjoy the view.",
          type: 'activity'
        },
        {
          time: "10:30",
          title: "Summit Split",
          description: "Adventure at 320m above sea level.",
          type: 'activity',
          splitGroup: {
            groupA: "挑戰組: Brushytten highland trail hike (~2 hours) through pine forests.",
            groupB: "悠遊組: Summit platform photography and relaxing at the summit café."
          }
        },
        {
          time: "13:30",
          title: "Lunch: Zen Asian Restaurant",
          description: "Quality pan-Asian cuisine in the city center.",
          type: 'dining'
        }
      ]
    },
    {
      day: 8,
      date: "31 May",
      location: "Tromsø",
      summary: "Flight North into the Midnight Sun and the first Arctic stroll.",
      activities: [
        {
          time: "20:15",
          title: "Flight: Bergen to Tromsø",
          description: "1 hour 10 min flight into the Arctic Circle.",
          type: 'transport'
        },
        {
          time: "23:00",
          title: "Tromsø Bridge Midnight Walk",
          description: "Experience your first taste of constant daylight on the iconic bridge.",
          type: 'activity'
        },
        {
          time: "23:30",
          title: "Late Snack: Raketten Kiosk",
          description: "Try a reindeer pølse (hot dog) at this historic yellow kiosk.",
          type: 'dining'
        }
      ]
    },
    {
      day: 9,
      date: "1 Jun",
      location: "Tromsø",
      summary: "Arctic Cathedral and a reunion at the summit overlooking the Lyngen Alps.",
      activities: [
        {
          time: "10:30",
          title: "Arctic Cathedral",
          description: "Modern masterpiece made of glass and concrete.",
          type: 'activity'
        },
        {
          time: "12:00",
          title: "Lunch: Suvi Restaurant",
          description: "Vietnamese-Japanese fusion which is a favorite among Tromsø locals.",
          type: 'dining'
        },
        {
          time: "13:30",
          title: "Mount Storsteinen Ascent",
          description: "Reaching the summit at 421m.",
          type: 'activity',
          splitGroup: {
            groupA: "挑戰組: Sherpa Steps (Sherpatrappa). A steep 1,400 step hike to the top.",
            groupB: "悠遊組: Fjellheisen Cable Car. A smooth 5-minute ride to the summit platform."
          }
        },
        {
          time: "18:30",
          title: "Dinner: Fiskekompaniet",
          description: "A spluge night for Arctic king crab and the finest Tromsø seafood.",
          type: 'dining',
          bookingUrl: "https://fiskekompani.no/en/",
          bookingLabel: "Reservations"
        }
      ]
    },
    {
      day: 10,
      date: "2 Jun",
      location: "Tromsø",
      summary: "Seals, Reindeer culture, and a silent electric cruise under the Midnight Sun.",
      activities: [
        {
          time: "10:30",
          title: "Polaria",
          description: "Seal feeding and Arctic cinematic experiences.",
          type: 'activity'
        },
        {
          time: "13:30",
          title: "Sámi Reindeer Cultural Camp",
          description: "Meet the reindeer, join in joik singing, and learn Sámi culture inside a lavvu.",
          type: 'activity'
        },
        {
          time: "20:00",
          title: "Brim Explorer Cruise",
          description: "Silent electric catamaran cruise under the Midnight Sun.",
          longDescription: "Silent engines minimize impact on marine life. Features floor-to-ceiling windows and outdoor decks.",
          type: 'activity',
          bookingUrl: "https://brimexplorer.com",
          bookingLabel: "Book Cruise"
        }
      ]
    },
    {
      day: 11,
      date: "3 Jun",
      location: "Tromsø",
      summary: "Final Arctic moments, Polar exploration history, and departure for Helsinki.",
      activities: [
        {
          time: "10:00",
          title: "Polar Museum",
          description: "History of Arctic hunting and legendary polar explorers.",
          type: 'activity'
        },
        {
          time: "13:00",
          title: "Farewell Arctic Lunch",
          description: "One last Norwegian fish soup by the Tromsø waterfront.",
          type: 'dining'
        },
        {
          time: "18:50",
          title: "Flight to Helsinki",
          description: "Departure and onward journey. Don't forget Kvæfjordkake at the airport!",
          type: 'transport'
        }
      ]
    }
  ],
  tips: [
    {
      title: "The Midnight Sun",
      content: "Sunlight is constant in June. Bring a sleep mask and remember to apply sunscreen even for midnight walks."
    },
    {
      title: "Cashless Norway",
      content: "Norway is 100% cashless. Bring a card with no foreign transaction fees (Wise/Revolut) and skip the currency exchange."
    },
    {
      title: "Budget Hacks",
      content: "Shop at Kiwi for supermarket picnics. Order 'ta med' (takeaway) to save on restaurant prices."
    },
    {
      title: "Senior Discounts",
      content: "Honnør discounts (67+) are available for almost all transport, museums, and activities. Always ask!"
    }
  ]
};

// --- STATE ---
let selectedDayIndex = 0;
let showOverview = true;
let isSidebarOpen = false;
const expandedActivities = new Set();
const detailedActivities = new Set();

// --- HELPERS ---
const groupDaysByLocation = () => {
  return itineraryData.days.reduce((acc, day, idx) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.location === day.location) {
      lastGroup.days.push({ ...day, originalIndex: idx });
    } else {
      acc.push({
        location: day.location,
        days: [{ ...day, originalIndex: idx }]
      });
    }
    return acc;
  }, []);
};

const getIcon = (type) => {
  switch (type) {
    case 'transport': return 'train';
    case 'dining': return 'utensils';
    case 'lodging': return 'home';
    case 'activity': return 'camera';
    case 'leisure': return 'compass';
    default: return 'info';
  }
};

const getIconColor = (type) => {
  switch (type) {
    case 'transport': return 'text-blue-500';
    case 'dining': return 'text-orange-500';
    case 'lodging': return 'text-emerald-500';
    case 'activity': return 'text-purple-500';
    case 'leisure': return 'text-sky-500';
    default: return 'text-gray-500';
  }
};

// --- RENDER FUNCTIONS ---
const renderFullItineraryForPrint = () => {
  const groupedDays = groupDaysByLocation();
  
  return `
    <div class="print-content space-y-12 p-8 bg-white text-black font-sans">
      <div class="border-b-2 border-black pb-8 mb-12">
        <h1 class="text-5xl font-serif mb-4">${itineraryData.title}</h1>
        <div class="flex gap-8 text-sm uppercase tracking-widest font-bold">
          <span>${itineraryData.dates}</span>
          <span>${itineraryData.groupSize} Members</span>
        </div>
      </div>

      <div class="space-y-6">
        <h2 class="text-xl uppercase tracking-widest font-bold border-b border-gray-300 pb-2">Essential Tips</h2>
        <div class="grid grid-cols-2 gap-8">
          ${itineraryData.tips.map(tip => `
            <div>
              <h3 class="text-sm font-bold uppercase mb-1">${tip.title}</h3>
              <p class="text-xs text-gray-600 leading-relaxed font-serif italic">${tip.content}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="space-y-16 pt-12">
        ${itineraryData.days.map((day, dIdx) => `
          <div class="${dIdx > 0 ? 'page-break-before' : ''}">
            <div class="flex items-baseline justify-between border-b-2 border-gray-200 pb-4 mb-8">
              <h2 class="text-4xl font-serif">Day ${day.day}: ${day.location}</h2>
              <span class="text-sm font-bold text-gray-400 font-mono">${day.date}</span>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
              <p class="text-lg font-serif italic">"${day.summary}"</p>
            </div>

            <div class="space-y-8">
              ${day.activities.map((activity, aIdx) => `
                <div class="grid grid-cols-[80px_1fr] gap-6 pb-6 border-b border-gray-100 last:border-0">
                  <span class="font-mono font-bold text-xs pt-1">${activity.time}</span>
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-[8px] uppercase tracking-widest font-bold text-gray-400 border px-1.5 py-0.5 rounded">${activity.type}</span>
                      <h3 class="text-xl font-serif font-bold text-black">${activity.title}</h3>
                    </div>
                    <p class="text-sm text-gray-600 font-serif italic mb-4">${activity.description}</p>
                    
                    ${activity.splitGroup ? `
                      <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                           <span class="text-[7px] font-bold uppercase block mb-1">Scenic (悠遊組)</span>
                           <p class="text-[11px] font-serif italic">${activity.splitGroup.groupB}</p>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-lg border border-gray-200">
                           <span class="text-[7px] font-bold uppercase block mb-1">Active (挑戰組)</span>
                           <p class="text-[11px] font-serif italic">${activity.splitGroup.groupA}</p>
                        </div>
                      </div>
                    ` : ''}

                    ${activity.longDescription ? `
                      <div class="mt-4 p-4 border-l-2 border-gray-200">
                        <p class="text-[11px] leading-relaxed text-gray-700">${activity.longDescription}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="pt-8 border-t border-black text-center text-[10px] uppercase tracking-widest text-gray-400">
        Generated for the Norwegian Journey · 2026
      </div>
    </div>
  `;
};

const renderActivityCard = (activity, index, isLast) => {
  const isExpanded = expandedActivities.has(`${selectedDayIndex}-${index}`);
  const showDetails = detailedActivities.has(`${selectedDayIndex}-${index}`);
  const icon = getIcon(activity.type);
  const iconColor = getIconColor(activity.type);

  return `
    <div class="group" id="activity-${index}">
      <div class="grid md:grid-cols-[100px_1fr] gap-8">
        <div class="pt-2">
          <span class="text-[11px] font-mono font-bold text-zinc-300 group-hover:text-[#d97706] transition-colors">
            ${activity.time}
          </span>
        </div>
        
        <div class="pb-16 ${!isLast ? 'border-b border-[#e5e2db]' : ''} last:pb-0">
          <div class="flex items-center gap-3 mb-4">
             <div class="flex-shrink-0 w-10 h-10 bg-white border border-[#e5e2db] rounded-xl flex items-center justify-center shadow-sm">
               <i data-lucide="${icon}" class="w-5 h-5 ${iconColor}"></i>
             </div>
             <span class="text-[10px] uppercase tracking-widest font-bold text-zinc-400 italic">${activity.type}</span>
          </div>
          
          <div class="flex items-start justify-between gap-4 mb-4">
            <h3 class="text-3xl font-serif text-[#1d1c1a] leading-tight">${activity.title}</h3>
            <div class="flex flex-col sm:flex-row gap-2">
              ${activity.splitGroup ? `
                <button 
                  onclick="toggleExpand(${index})"
                  class="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all
                    ${isExpanded ? 'bg-[#1d1c1a] text-white border-[#1d1c1a]' : 'bg-transparent text-zinc-400 border-[#e5e2db] hover:border-[#1d1c1a] hover:text-[#1d1c1a]'}
                  "
                >
                  <span>${isExpanded ? 'Hide Options' : 'View Paths'}</span>
                  <i data-lucide="chevron-down" class="w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}"></i>
                </button>
              ` : ''}
              ${(activity.longDescription || (activity.images && activity.images.length > 0) || activity.bookingUrl) ? `
                <button 
                  onclick="toggleDetails(${index})"
                  class="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all
                    ${showDetails ? 'bg-[#d97706] text-white border-[#d97706]' : 'bg-transparent text-zinc-400 border-[#e5e2db] hover:border-[#d97706] hover:text-[#d97706]'}
                  "
                >
                  <span>${showDetails ? 'Collapse' : 'Learn More'}</span>
                </button>
              ` : ''}
            </div>
          </div>

          <p class="text-zinc-600 text-base leading-relaxed font-serif italic max-w-2xl">
            ${activity.description}
          </p>
          
          <div class="expand-section overflow-hidden transition-all duration-300" style="max-height: ${isExpanded ? '1000px' : '0'}; opacity: ${isExpanded ? '1' : '0'}">
            ${activity.splitGroup ? `
              <div class="mt-10 space-y-6">
                <div class="flex items-center gap-4">
                  <div class="h-px flex-1 bg-[#e5e2db]"></div>
                  <div class="flex items-center gap-2 px-4 py-1.5 bg-[#f3f2ee] rounded-full border border-[#e5e2db]">
                     <i data-lucide="users" class="w-3 h-3 text-[#d97706]"></i>
                     <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Concurrent Pathways</span>
                  </div>
                  <div class="h-px flex-1 bg-[#e5e2db]"></div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div class="relative group/path bg-white border border-[#e5e2db] p-7 rounded-2xl shadow-sm hover:border-[#d97706]/40 transition-all duration-300">
                    <div class="flex items-center justify-between mb-6">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-[#d97706]/10 flex items-center justify-center">
                          <span class="text-[10px] font-bold text-[#d97706]">🌿</span>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-[#1d1c1a]">Scenic Pathway</span>
                      </div>
                      <div class="text-[9px] font-mono text-zinc-400">悠遊組</div>
                    </div>
                    <p class="text-[13px] text-zinc-700 leading-relaxed font-serif italic pr-4">
                      ${activity.splitGroup.groupB}
                    </p>
                    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d97706]/5 to-transparent rounded-tr-2xl pointer-events-none"></div>
                  </div>

                  <div class="relative group/path bg-[#f3f2ee]/40 border border-[#e5e2db] p-7 rounded-2xl shadow-sm hover:border-[#1d1c1a]/20 transition-all duration-300">
                    <div class="flex items-center justify-between mb-6">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-zinc-200 flex items-center justify-center">
                          <span class="text-[10px] font-bold text-zinc-500">⚡</span>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-[#1d1c1a]">Active Pathway</span>
                      </div>
                      <div class="text-[9px] font-mono text-zinc-400">挑戰組</div>
                    </div>
                    <p class="text-[13px] text-zinc-700 leading-relaxed font-serif italic pr-4">
                      ${activity.splitGroup.groupA}
                    </p>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>

          <div class="details-section overflow-hidden transition-all duration-300" style="max-height: ${showDetails ? '2000px' : '0'}; opacity: ${showDetails ? '1' : '0'}">
            <div class="mt-8 pt-8 border-t border-dashed border-[#e5e2db] space-y-8">
              ${activity.longDescription ? `
                <div class="space-y-4">
                  <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <i data-lucide="info" class="w-3 h-3"></i>
                    <span>Background & Details</span>
                  </div>
                  <p class="text-sm text-zinc-600 leading-relaxed font-serif">
                    ${activity.longDescription}
                  </p>
                </div>
              ` : ''}

              ${(activity.images && activity.images.length > 0) ? `
                <div class="grid grid-cols-2 gap-4">
                  ${activity.images.map((img, i) => `
                    <div class="aspect-[4/3] rounded-xl overflow-hidden border border-[#e5e2db] shadow-inner">
                      <img 
                        src="${img}" 
                        alt="${activity.title} view ${i + 1}" 
                        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${activity.bookingUrl ? `
                <div class="pt-4">
                  <a 
                    href="${activity.bookingUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-6 py-3 bg-[#f3f2ee] rounded-xl border border-[#e5e2db] text-[11px] font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#1d1c1a] hover:text-white hover:border-[#1d1c1a] transition-all group"
                  >
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                    <span>${activity.bookingLabel || 'Book / Reservations'}</span>
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const renderOverview = () => {
  return `
    <div class="animate-fade-in-up">
      <div class="mb-24">
        <div class="flex items-center gap-4 mb-8">
          <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97706]">
            Official Itinerary
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-serif text-[#1d1c1a] tracking-tight leading-[1.1] mb-12">
          ${itineraryData.title}
        </h1>
        <div class="flex flex-wrap gap-12 text-zinc-600 mt-12">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Window</span>
            <div class="flex items-center gap-3 text-[#1d1c1a]">
              <i data-lucide="calendar" class="w-4 h-4 text-[#d97706]"></i>
              <span class="text-xl font-serif italic">${itineraryData.dates}</span>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Size</span>
            <div class="flex items-center gap-3 text-[#1d1c1a]">
              <i data-lucide="users" class="w-4 h-4 text-[#d97706]"></i>
              <span class="text-xl font-serif italic">${itineraryData.groupSize} Members</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-24">
        <div class="flex items-center gap-4 mb-8">
           <h2 class="text-xs uppercase tracking-widest font-bold text-zinc-400">Essential Tips</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-12">
          ${itineraryData.tips.map(tip => `
            <div>
              <h3 class="text-xs font-bold text-[#1d1c1a] uppercase tracking-wider mb-2">${tip.title}</h3>
              <p class="text-sm text-zinc-500 leading-relaxed font-serif italic">${tip.content}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="mb-24">
        <h2 class="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-12">Route Overview</h2>
        <div class="relative pl-12 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#e5e2db]">
          ${itineraryData.days.filter((day, index, self) => 
            index === 0 || day.location !== self[index - 1].location
          ).map(day => `
            <div class="relative group">
              <div class="absolute -left-[45px] top-1 w-6 h-6 bg-[#fbfaf8] border border-[#e5e2db] rounded-full flex items-center justify-center z-10 group-hover:border-[#d97706] transition-colors">
                <div class="w-1.5 h-1.5 bg-[#d97706]/40 rounded-full group-hover:bg-[#d97706] transition-colors"></div>
              </div>
              <h3 class="text-2xl font-serif text-[#1d1c1a]">${day.location}</h3>
              <p class="text-[11px] font-medium text-zinc-400 uppercase tracking-widest mt-1">From Day ${day.day}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
        <div class="flex flex-col sm:flex-row gap-4 mt-12">
          <button 
            onclick="enterItinerary()"
            class="group px-12 py-5 bg-[#1d1c1a] text-white rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#d97706] transition-all flex items-center gap-4 shadow-xl shadow-[#1d1c1a]/10"
          >
            Enter Itinerary <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
          </button>
          
          <button 
            onclick="saveAsPdf()"
            class="group px-12 py-5 bg-white border border-[#e5e2db] text-[#1d1c1a] rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#1d1c1a] transition-all flex items-center gap-4"
          >
            <i data-lucide="printer" class="w-4 h-4"></i> Save as PDF
          </button>
        </div>
    </div>
  `;
};

const renderDayView = () => {
  const currentDay = itineraryData.days[selectedDayIndex];
  return `
    <div class="animate-fade-in">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
         <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="text-[11px] font-bold text-[#d97706] uppercase tracking-[0.4em]">
              Day ${currentDay.day}
            </span>
            <div class="h-px w-8 bg-[#e5e2db]"></div>
            <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.2em]">${currentDay.date}</span>
          </div>
          <h2 class="text-6xl font-serif text-[#1d1c1a] tracking-tight leading-none">${currentDay.location}</h2>
         </div>
         <div class="flex gap-3">
           <button 
             ${selectedDayIndex === 0 ? 'disabled' : ''}
             onclick="prevDay()"
             class="p-4 bg-white border border-[#e5e2db] rounded-full text-zinc-400 disabled:opacity-20 hover:text-[#1d1c1a] hover:border-[#1d1c1a] transition-all"
           >
             <i data-lucide="chevron-left" class="w-5 h-5"></i>
           </button>
           <button 
             ${selectedDayIndex === itineraryData.days.length - 1 ? 'disabled' : ''}
             onclick="nextDay()"
             class="p-4 bg-white border border-[#e5e2db] rounded-full text-zinc-400 disabled:opacity-20 hover:text-[#1d1c1a] hover:border-[#1d1c1a] transition-all"
           >
             <i data-lucide="chevron-right" class="w-5 h-5"></i>
           </button>
         </div>
      </div>

      <div class="bg-[#f3f2ee] border border-[#e5e2db] p-8 md:p-12 rounded-3xl mb-24 relative">
        <div class="absolute -top-4 -left-4 p-3 bg-[#d97706] text-white rounded-full">
          <i data-lucide="compass" class="w-5 h-5"></i>
        </div>
        <p class="text-2xl font-serif italic text-[#1d1c1a] leading-relaxed">
          "${currentDay.summary}"
        </p>
      </div>

      <div class="space-y-20">
        ${currentDay.activities.map((activity, i) => renderActivityCard(activity, i, i === currentDay.activities.length - 1)).join('')}
      </div>

      <div class="mt-32 pt-12 border-t border-[#e5e2db] flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex flex-col gap-2">
          <span class="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Current Progress</span>
          <div class="flex items-center gap-2">
            ${itineraryData.days.map((_, i) => `
              <div class="h-1 rounded-full transition-all duration-500 ${i === selectedDayIndex ? 'w-8 bg-[#d97706]' : 'w-2 bg-zinc-200'}"></div>
            `).join('')}
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button 
            onclick="saveAsPdf()"
            class="flex items-center gap-3 px-6 py-3 rounded-full border border-[#e5e2db] text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#1d1c1a] hover:border-[#1d1c1a] transition-all"
          >
            <i data-lucide="printer" class="w-4 h-4"></i>
          </button>

          ${selectedDayIndex > 0 ? `
            <button onclick="prevDay()" class="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#e5e2db] text-xs font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#e8e6e1] transition-all">
              <i data-lucide="chevron-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
              Previous Day
            </button>
          ` : `
            <button onclick="goToOverview()" class="flex items-center gap-3 px-6 py-3 rounded-full border border-[#e5e2db] text-xs font-bold uppercase tracking-widest text-[#1d1c1a] hover:bg-[#e8e6e1] transition-all">
              Full Overview
            </button>
          `}

          ${selectedDayIndex < itineraryData.days.length - 1 ? `
            <button onclick="nextDay()" class="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#1d1c1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#d97706] transition-all shadow-lg shadow-[#1d1c1a]/10">
              Next Day
              <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </button>
          ` : `
            <button onclick="goToOverview()" class="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#1d1c1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#d97706] transition-all shadow-lg shadow-[#1d1c1a]/10">
              Journey End
              <i data-lucide="compass" class="w-4 h-4"></i>
            </button>
          `}
        </div>
      </div>
    </div>
  `;
};

const renderSidebar = () => {
  const groupedDays = groupDaysByLocation();
  const currentDay = itineraryData.days[selectedDayIndex];

  return `
    <div class="p-10">
      <div class="flex items-center gap-3 mb-2">
        <i data-lucide="compass" class="w-5 h-5 text-[#d97706]"></i>
        <h1 class="text-xl font-serif font-semibold tracking-tight text-[#1d1c1a]">Norway Journey</h1>
      </div>
      <p class="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em] ml-8">May – June 2026</p>
    </div>

    <nav class="mt-4 px-6 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)] scrollbar-hide pb-20">
      <button
        onclick="goToOverview()"
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${showOverview ? 'bg-[#e8e6e1] text-[#1d1c1a]' : 'text-zinc-500 hover:bg-[#e8e6e1]/50 hover:text-[#1d1c1a]'}"
      >
        <i data-lucide="compass" class="w-4 h-4"></i>
        <span>Overview</span>
      </button>
      
      <div class="pt-8 pb-4 px-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
        Timeline
      </div>

      <div class="space-y-6">
        ${groupedDays.map((group, groupIdx) => {
          const isCurrentGroup = !showOverview && group.days.some(d => d.originalIndex === selectedDayIndex);
          return `
            <div class="space-y-2">
              <div class="px-4 flex items-center gap-2 transition-colors ${isCurrentGroup ? 'text-[#d97706]' : 'text-zinc-400'}">
                <i data-lucide="map-pin" class="w-3 h-3"></i>
                <span class="text-[10px] font-bold uppercase tracking-wider">${group.location}</span>
              </div>
              <div class="space-y-1 pl-2 border-l border-zinc-200 ml-5">
                ${group.days.map(day => `
                  <button
                    onclick="goToDay(${day.originalIndex})"
                    class="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group
                      ${!showOverview && selectedDayIndex === day.originalIndex ? 'bg-white text-[#1d1c1a] shadow-sm border border-[#e5e2db]' : 'text-zinc-500 hover:text-[#1d1c1a]'}"
                  >
                    <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-mono rounded transition-colors
                      ${!showOverview && selectedDayIndex === day.originalIndex ? 'bg-[#1d1c1a] text-white' : 'bg-transparent border border-zinc-300 text-zinc-400 group-hover:border-zinc-400'}">
                      ${day.day}
                    </div>
                    <div class="text-left overflow-hidden">
                      <span class="text-[12px] font-medium block leading-tight truncate">${day.date}</span>
                    </div>
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </nav>

    <div class="absolute bottom-0 left-0 right-0 p-8 bg-[#f3f2ee] border-t border-[#e5e2db]">
      <div class="flex items-center gap-3 text-zinc-400 text-xs font-medium">
        <i data-lucide="users" class="w-4 h-4"></i>
        <span>${itineraryData.groupSize} Members</span>
      </div>
    </div>
  `;
};

const updateUI = () => {
  const app = document.getElementById('app');
  const currentDay = itineraryData.days[selectedDayIndex];

  app.innerHTML = `
    <div id="interactive-app" class="min-h-screen bg-[#fbfaf8] text-[#1d1c1a] font-sans flex overflow-hidden">
      <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 w-72 bg-[#f3f2ee] border-r border-[#e5e2db] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}">
        ${renderSidebar()}
      </aside>

      <main id="main-content" class="flex-1 relative h-screen overflow-y-auto w-full bg-[#fbfaf8]">
        <header class="md:hidden sticky top-0 z-40 bg-[#fbfaf8]/80 backdrop-blur-md border-b border-[#e5e2db] px-6 py-4 flex items-center justify-between transition-all">
          <button onclick="toggleSidebar()" class="p-2 -ml-2 text-zinc-600">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
          <span class="text-sm font-serif font-semibold text-[#1d1c1a]">Norway Journey</span>
          <div class="w-6"></div>
        </header>

        <div class="max-w-3xl mx-auto px-8 py-12 md:px-12 md:py-16">
          <div class="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <button onclick="goToOverview()" class="hover:text-[#1d1c1a] transition-colors">Norway</button>
            <i data-lucide="chevron-right" class="w-3 h-3"></i>
            ${showOverview ? `
              <span class="text-[#d97706]">Overview</span>
            ` : `
              <span class="text-zinc-600">${currentDay.location}</span>
              <i data-lucide="chevron-right" class="w-3 h-3"></i>
              <span class="text-[#d97706]">Day ${currentDay.day}</span>
            `}
          </div>
          
          <div id="content-area">
            ${showOverview ? renderOverview() : renderDayView()}
          </div>
        </div>
      </main>
    </div>
    <div id="print-view" class="hidden">
      ${renderFullItineraryForPrint()}
    </div>
  `;

  createIcons({
    icons: {
      Calendar, 
      MapPin, 
      Train, 
      Plane, 
      Utensils, 
      Home, 
      Camera, 
      Info, 
      Users,
      ChevronRight,
      ChevronLeft,
      ChevronDown,
      ExternalLink,
      Menu,
      X,
      Compass,
      Printer
    }
  });
};

// --- ACTIONS ---
window.toggleSidebar = () => {
  isSidebarOpen = !isSidebarOpen;
  updateUI();
};

window.goToOverview = () => {
  showOverview = true;
  isSidebarOpen = false;
  document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  updateUI();
};

window.goToDay = (index) => {
  selectedDayIndex = index;
  showOverview = false;
  isSidebarOpen = false;
  document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  updateUI();
};

window.nextDay = () => {
  if (selectedDayIndex < itineraryData.days.length - 1) {
    selectedDayIndex++;
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    updateUI();
  } else {
    goToOverview();
  }
};

window.prevDay = () => {
  if (selectedDayIndex > 0) {
    selectedDayIndex--;
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    updateUI();
  } else {
    goToOverview();
  }
};

window.enterItinerary = () => {
  selectedDayIndex = 0;
  showOverview = false;
  document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  updateUI();
};

window.toggleExpand = (index) => {
  const key = `${selectedDayIndex}-${index}`;
  if (expandedActivities.has(key)) {
    expandedActivities.delete(key);
  } else {
    expandedActivities.add(key);
  }
  updateUI();
};

window.toggleDetails = (index) => {
  const key = `${selectedDayIndex}-${index}`;
  if (detailedActivities.has(key)) {
    detailedActivities.delete(key);
  } else {
    detailedActivities.add(key);
  }
  updateUI();
};

window.saveAsPdf = () => {
  window.print();
};

// --- INITIALIZATION ---
updateUI();
