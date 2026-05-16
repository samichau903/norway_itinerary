import { Itinerary } from './types';

export const itineraryData: Itinerary = {
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

