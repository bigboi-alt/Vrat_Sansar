// ============================================
// VRAT SANSAR — Complete Script (Fixed)
// ============================================

document.addEventListener('DOMContentLoaded', function() {

// ============================================
// VRAT DATABASE
// ============================================

const VRATS = [
    // ===== WEEKLY =====
    {
        id: "somvar",
        hi: "सोमवार व्रत",
        en: "Monday Fast (Somvar Vrat)",
        emoji: "🌙",
        deity: { hi: "भगवान शिव", en: "Lord Shiva" },
        type: "weekly",
        dayOfWeek: 1,
        descHi: "सोमवार व्रत भगवान शिव को समर्पित है। भक्त पूरे दिन उपवास रखते हैं और शिवलिंग पर दूध, जल, बेलपत्र चढ़ाते हैं।",
        descEn: "Somvar Vrat is dedicated to Lord Shiva. Devotees fast the entire day and offer milk, water, and bel patra to the Shivling.",
        significance: { hi: "यह व्रत विवाह संबंधी इच्छाओं को पूरा करता है और शांति लाता है।", en: "This vrat fulfills marriage-related wishes and brings peace and prosperity." },
        howTo: [
            { hi: "सुबह जल्दी उठकर स्नान करें", en: "Wake up early and take a bath" },
            { hi: "शिव मंदिर जाएं और दूध, जल चढ़ाएं", en: "Visit Shiva temple and offer milk, water" },
            { hi: "फल और दूध आधारित भोजन करें", en: "Eat only fruits and milk-based food" },
            { hi: "ॐ नमः शिवाय का जाप करें", en: "Chant 'Om Namah Shivaya'" },
            { hi: "शाम को पूजा के बाद व्रत खोलें", en: "Break fast after evening prayers" }
        ],
        foods: ["Fruits", "Milk", "Sabudana", "Kuttu Atta"],
        dates2025: [],
        color: "#9B59B6"
    },
    {
        id: "mangalvar",
        hi: "मंगलवार व्रत",
        en: "Tuesday Fast (Mangalvar Vrat)",
        emoji: "🔴",
        deity: { hi: "हनुमान जी", en: "Lord Hanuman" },
        type: "weekly",
        dayOfWeek: 2,
        descHi: "मंगलवार व्रत हनुमान जी को समर्पित है। भक्त लाल वस्त्र पहनते हैं और सिंदूर, चमेली का तेल चढ़ाते हैं।",
        descEn: "Mangalvar Vrat is dedicated to Lord Hanuman. Devotees wear red and offer sindoor and jasmine oil.",
        significance: { hi: "यह व्रत साहस और शक्ति प्रदान करता है।", en: "This fast grants courage and strength." },
        howTo: [
            { hi: "लाल वस्त्र पहनें", en: "Wear red clothes" },
            { hi: "हनुमान मंदिर जाएं", en: "Visit Hanuman temple" },
            { hi: "हनुमान चालीसा पढ़ें", en: "Recite Hanuman Chalisa" },
            { hi: "गुड़ और चने का भोग लगाएं", en: "Offer jaggery and chickpeas" }
        ],
        foods: ["Wheat", "Jaggery", "Red lentils", "Fruits"],
        dates2025: [],
        color: "#E74C3C"
    },
    {
        id: "budhvar",
        hi: "बुधवार व्रत",
        en: "Wednesday Fast (Budhvar Vrat)",
        emoji: "💚",
        deity: { hi: "श्री गणेश / विठ्ठल", en: "Lord Ganesha / Vithal" },
        type: "weekly",
        dayOfWeek: 3,
        descHi: "बुधवार व्रत श्री गणेश और बुध ग्रह को समर्पित है। हरा रंग शुभ माना जाता है।",
        descEn: "Budhvar Vrat is dedicated to Lord Ganesha and Planet Mercury. Green color is auspicious.",
        significance: { hi: "बुद्धि, शिक्षा और व्यापार में सफलता मिलती है।", en: "Improves intelligence and business success." },
        howTo: [
            { hi: "हरे वस्त्र पहनें", en: "Wear green clothes" },
            { hi: "गणेश जी की पूजा करें", en: "Worship Lord Ganesha" },
            { hi: "मोदक और दूर्वा चढ़ाएं", en: "Offer modak and durva grass" }
        ],
        foods: ["Green moong", "Green vegetables", "Fruits"],
        dates2025: [],
        color: "#27AE60"
    },
    {
        id: "guruvar",
        hi: "गुरुवार / बृहस्पतिवार व्रत",
        en: "Thursday Fast (Guruvar Vrat)",
        emoji: "💛",
        deity: { hi: "भगवान विष्णु / बृहस्पतिदेव", en: "Lord Vishnu / Brihaspati" },
        type: "weekly",
        dayOfWeek: 4,
        descHi: "गुरुवार व्रत भगवान विष्णु और गुरु बृहस्पति को समर्पित है। पीला रंग पवित्र है।",
        descEn: "Thursday Fast is dedicated to Lord Vishnu. Yellow is the sacred color.",
        significance: { hi: "धन, समृद्धि और वैवाहिक सुख प्राप्त होता है।", en: "Brings wealth, prosperity, and marital happiness." },
        howTo: [
            { hi: "पीले वस्त्र पहनें", en: "Wear yellow clothes" },
            { hi: "विष्णु मंदिर जाएं", en: "Visit Vishnu temple" },
            { hi: "केले का भोग लगाएं", en: "Offer bananas" },
            { hi: "व्रत कथा सुनें", en: "Listen to Vrat Katha" }
        ],
        foods: ["Chana Dal", "Banana", "Yellow Rice", "Besan"],
        dates2025: [],
        color: "#F1C40F"
    },
    {
        id: "shukravar",
        hi: "शुक्रवार व्रत",
        en: "Friday Fast (Shukravar Vrat)",
        emoji: "🤍",
        deity: { hi: "संतोषी माँ / लक्ष्मी", en: "Santoshi Maa / Lakshmi" },
        type: "weekly",
        dayOfWeek: 5,
        descHi: "शुक्रवार व्रत संतोषी माँ और लक्ष्मी जी को समर्पित है। इस दिन खट्टा नहीं खाना चाहिए।",
        descEn: "Friday Fast is dedicated to Santoshi Maa. Sour foods must be avoided.",
        significance: { hi: "संतोष, धन और पारिवारिक सुख मिलता है।", en: "Brings contentment and family prosperity." },
        howTo: [
            { hi: "सफेद/हल्के वस्त्र पहनें", en: "Wear white/light clothes" },
            { hi: "गुड़-चना का प्रसाद बनाएं", en: "Prepare jaggery-chickpea prasad" },
            { hi: "खट्टा न खाएं", en: "Avoid sour foods" },
            { hi: "16 शुक्रवार व्रत रखें", en: "Keep 16 Friday fasts" }
        ],
        foods: ["Jaggery", "Chana", "Sweet dishes", "Fruits"],
        dates2025: [],
        color: "#ECF0F1"
    },
    {
        id: "shanivar",
        hi: "शनिवार व्रत",
        en: "Saturday Fast (Shanivar Vrat)",
        emoji: "⚫",
        deity: { hi: "शनिदेव / हनुमान जी", en: "Lord Shani / Hanuman" },
        type: "weekly",
        dayOfWeek: 6,
        descHi: "शनिवार व्रत शनिदेव को समर्पित है। काला और गहरा नीला रंग शुभ है।",
        descEn: "Saturday Fast is dedicated to Lord Shani. Black and dark blue are auspicious.",
        significance: { hi: "शनि की साढ़ेसाती और ढैय्या से राहत मिलती है।", en: "Reduces malefic effects of Saturn." },
        howTo: [
            { hi: "काले वस्त्र पहनें", en: "Wear black clothes" },
            { hi: "शनि मंदिर में तेल चढ़ाएं", en: "Offer mustard oil at Shani temple" },
            { hi: "पीपल के नीचे दीया जलाएं", en: "Light lamp under Peepal tree" }
        ],
        foods: ["Black urad dal", "Black sesame", "Fruits"],
        dates2025: [],
        color: "#2C3E50"
    },
    {
        id: "ravivar",
        hi: "रविवार व्रत",
        en: "Sunday Fast (Ravivar Vrat)",
        emoji: "☀️",
        deity: { hi: "सूर्यदेव", en: "Lord Surya" },
        type: "weekly",
        dayOfWeek: 0,
        descHi: "रविवार व्रत सूर्यदेव को समर्पित है। लाल और केसरिया रंग शुभ है।",
        descEn: "Sunday Fast is dedicated to the Sun God. Red and saffron are auspicious.",
        significance: { hi: "स्वास्थ्य, तेज और सरकारी कार्यों में सफलता मिलती है।", en: "Grants health, vitality, and success." },
        howTo: [
            { hi: "सूर्योदय से पहले उठें", en: "Wake before sunrise" },
            { hi: "सूर्य को जल अर्पित करें", en: "Offer water to the Sun" },
            { hi: "आदित्य हृदय स्तोत्र पढ़ें", en: "Recite Aditya Hridaya Stotra" }
        ],
        foods: ["Wheat", "Jaggery", "Fruits"],
        dates2025: [],
        color: "#E67E22"
    },

    // ===== MONTHLY =====
    {
        id: "ekadashi",
        hi: "एकादशी व्रत",
        en: "Ekadashi Fast",
        emoji: "🙏",
        deity: { hi: "भगवान विष्णु", en: "Lord Vishnu" },
        type: "monthly",
        descHi: "एकादशी हर पक्ष की 11वीं तिथि को आती है। यह विष्णु भक्तों के लिए सबसे पवित्र व्रत है।",
        descEn: "Ekadashi falls on the 11th day of each lunar fortnight. Most sacred fast for Vishnu devotees.",
        significance: { hi: "सभी पापों का नाश और मोक्ष प्राप्ति।", en: "Washes away sins and grants moksha." },
        howTo: [
            { hi: "सूर्योदय से द्वादशी तक व्रत", en: "Fast from Ekadashi sunrise to Dwadashi sunrise" },
            { hi: "चावल, अनाज न खाएं", en: "Avoid rice and grains" },
            { hi: "रात्रि जागरण करें", en: "Stay awake at night" },
            { hi: "तुलसी पत्र चढ़ाएं", en: "Offer tulsi leaves" }
        ],
        foods: ["Fruits", "Milk", "Sabudana", "Kuttu", "Singhara"],
        dates2025: [
            { date: "2025-01-10", name: "पौष पुत्रदा एकादशी", nameEn: "Pausha Putrada Ekadashi" },
            { date: "2025-01-25", name: "षट्तिला एकादशी", nameEn: "Shattila Ekadashi" },
            { date: "2025-02-09", name: "जया एकादशी", nameEn: "Jaya Ekadashi" },
            { date: "2025-02-23", name: "विजया एकादशी", nameEn: "Vijaya Ekadashi" },
            { date: "2025-03-11", name: "आमलकी एकादशी", nameEn: "Amalaki Ekadashi" },
            { date: "2025-03-25", name: "पापमोचनी एकादशी", nameEn: "Papmochani Ekadashi" },
            { date: "2025-04-10", name: "कामदा एकादशी", nameEn: "Kamada Ekadashi" },
            { date: "2025-04-24", name: "वरुथिनी एकादशी", nameEn: "Varuthini Ekadashi" },
            { date: "2025-05-09", name: "मोहिनी एकादशी", nameEn: "Mohini Ekadashi" },
            { date: "2025-05-24", name: "अपरा एकादशी", nameEn: "Apara Ekadashi" },
            { date: "2025-06-08", name: "निर्जला एकादशी", nameEn: "Nirjala Ekadashi" },
            { date: "2025-06-22", name: "योगिनी एकादशी", nameEn: "Yogini Ekadashi" },
            { date: "2025-07-07", name: "देवशयनी एकादशी", nameEn: "Devshayani Ekadashi" },
            { date: "2025-07-22", name: "कामिका एकादशी", nameEn: "Kamika Ekadashi" },
            { date: "2025-08-06", name: "श्रावण पुत्रदा एकादशी", nameEn: "Shravana Putrada Ekadashi" },
            { date: "2025-08-20", name: "अजा एकादशी", nameEn: "Aja Ekadashi" },
            { date: "2025-09-05", name: "पार्श्व एकादशी", nameEn: "Parsva Ekadashi" },
            { date: "2025-09-19", name: "इंदिरा एकादशी", nameEn: "Indira Ekadashi" },
            { date: "2025-10-04", name: "पापांकुशा एकादशी", nameEn: "Papankusha Ekadashi" },
            { date: "2025-10-19", name: "रमा एकादशी", nameEn: "Rama Ekadashi" },
            { date: "2025-11-03", name: "देवउठनी एकादशी", nameEn: "Devutthana Ekadashi" },
            { date: "2025-11-17", name: "उत्पन्ना एकादशी", nameEn: "Utpanna Ekadashi" },
            { date: "2025-12-03", name: "मोक्षदा एकादशी", nameEn: "Mokshada Ekadashi" },
            { date: "2025-12-17", name: "सफला एकादशी", nameEn: "Saphala Ekadashi" }
        ],
        color: "#3498DB"
    },
    {
        id: "pradosh",
        hi: "प्रदोष व्रत",
        en: "Pradosh Vrat",
        emoji: "🌗",
        deity: { hi: "शिव-पार्वती", en: "Lord Shiva & Parvati" },
        type: "monthly",
        descHi: "प्रदोष व्रत हर पक्ष की त्रयोदशी को आता है। संध्याकाल में शिव पूजा अत्यंत फलदायी है।",
        descEn: "Pradosh Vrat is observed on the 13th day of each fortnight. Twilight Shiva worship is very auspicious.",
        significance: { hi: "पाप नाश, धन प्राप्ति और सुखी वैवाहिक जीवन।", en: "Removes sins and brings wealth and happy marriage." },
        howTo: [
            { hi: "दिन में फलाहार करें", en: "Eat only fruits during the day" },
            { hi: "प्रदोष काल में शिव पूजा", en: "Worship Shiva during twilight" },
            { hi: "महामृत्युंजय मंत्र जपें", en: "Chant Maha Mrityunjaya Mantra" }
        ],
        foods: ["Fruits", "Milk", "Sabudana"],
        dates2025: [
            { date: "2025-01-12", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-01-27", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-02-11", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-02-25", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-03-13", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-03-27", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-04-12", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-04-26", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-05-12", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-05-26", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-06-10", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-06-24", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-07-10", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-07-24", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-08-08", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-08-22", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-09-07", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-09-21", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-10-06", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-10-21", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-11-05", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-11-19", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-12-05", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" },
            { date: "2025-12-19", name: "प्रदोष व्रत", nameEn: "Pradosh Vrat" }
        ],
        color: "#8E44AD"
    },
    {
        id: "purnima",
        hi: "पूर्णिमा व्रत",
        en: "Purnima (Full Moon) Fast",
        emoji: "🌕",
        deity: { hi: "भगवान विष्णु / चंद्रदेव", en: "Lord Vishnu / Moon God" },
        type: "monthly",
        descHi: "पूर्णिमा व्रत हर महीने पूर्णिमा को रखा जाता है। हर पूर्णिमा का विशेष महत्व है।",
        descEn: "Purnima Vrat is observed on every full moon day. Each has special significance.",
        significance: { hi: "मानसिक शांति और चंद्र दोष निवारण।", en: "Brings mental peace and removes Moon-related issues." },
        howTo: [
            { hi: "सुबह स्नान करें", en: "Take early morning bath" },
            { hi: "सत्यनारायण पूजा करें", en: "Perform Satyanarayan Puja" },
            { hi: "चंद्रमा को अर्घ्य दें", en: "Offer arghya to the moon" }
        ],
        foods: ["Fruits", "Milk", "Kheer"],
        dates2025: [
            { date: "2025-01-13", name: "पौष पूर्णिमा", nameEn: "Paush Purnima" },
            { date: "2025-02-12", name: "माघ पूर्णिमा", nameEn: "Magha Purnima" },
            { date: "2025-03-14", name: "होली पूर्णिमा", nameEn: "Holi Purnima" },
            { date: "2025-04-13", name: "हनुमान जयंती", nameEn: "Hanuman Jayanti" },
            { date: "2025-05-12", name: "बुद्ध पूर्णिमा", nameEn: "Buddha Purnima" },
            { date: "2025-06-11", name: "वट पूर्णिमा", nameEn: "Vat Purnima" },
            { date: "2025-07-10", name: "गुरु पूर्णिमा", nameEn: "Guru Purnima" },
            { date: "2025-08-09", name: "रक्षाबंधन", nameEn: "Raksha Bandhan" },
            { date: "2025-09-07", name: "भाद्र पूर्णिमा", nameEn: "Bhadra Purnima" },
            { date: "2025-10-07", name: "शरद पूर्णिमा", nameEn: "Sharad Purnima" },
            { date: "2025-11-05", name: "कार्तिक पूर्णिमा", nameEn: "Kartik Purnima" },
            { date: "2025-12-04", name: "मार्गशीर्ष पूर्णिमा", nameEn: "Margashirsha Purnima" }
        ],
        color: "#F39C12"
    },
    {
        id: "amavasya",
        hi: "अमावस्या व्रत",
        en: "Amavasya (New Moon) Fast",
        emoji: "🌑",
        deity: { hi: "पितृगण", en: "Ancestors" },
        type: "monthly",
        descHi: "अमावस्या को पितरों का तर्पण और श्राद्ध किया जाता है।",
        descEn: "Amavasya is sacred for performing Tarpan for departed ancestors.",
        significance: { hi: "पितृ दोष निवारण और पूर्वजों का आशीर्वाद।", en: "Removes Pitru Dosha and gains ancestors' blessings." },
        howTo: [
            { hi: "पितरों को तर्पण दें", en: "Perform Tarpan for ancestors" },
            { hi: "दान-पुण्य करें", en: "Donate food and clothes" },
            { hi: "शिव पूजा करें", en: "Worship Lord Shiva" }
        ],
        foods: ["Sattvic food", "Fruits"],
        dates2025: [
            { date: "2025-01-29", name: "पौष अमावस्या", nameEn: "Pausha Amavasya" },
            { date: "2025-02-28", name: "माघ अमावस्या", nameEn: "Magha Amavasya" },
            { date: "2025-03-29", name: "फाल्गुन अमावस्या", nameEn: "Phalguna Amavasya" },
            { date: "2025-04-27", name: "चैत्र अमावस्या", nameEn: "Chaitra Amavasya" },
            { date: "2025-05-27", name: "वैशाख अमावस्या", nameEn: "Vaishakha Amavasya" },
            { date: "2025-06-25", name: "ज्येष्ठ अमावस्या", nameEn: "Jyeshtha Amavasya" },
            { date: "2025-07-25", name: "आषाढ़ अमावस्या", nameEn: "Ashadha Amavasya" },
            { date: "2025-08-23", name: "श्रावण अमावस्या", nameEn: "Shravana Amavasya" },
            { date: "2025-09-22", name: "भाद्रपद अमावस्या", nameEn: "Bhadrapada Amavasya" },
            { date: "2025-10-21", name: "दीपावली अमावस्या", nameEn: "Diwali Amavasya" },
            { date: "2025-11-20", name: "कार्तिक अमावस्या", nameEn: "Kartik Amavasya" },
            { date: "2025-12-20", name: "मार्गशीर्ष अमावस्या", nameEn: "Margashirsha Amavasya" }
        ],
        color: "#34495E"
    },
    {
        id: "chaturthi",
        hi: "संकष्टी चतुर्थी",
        en: "Sankashti Chaturthi",
        emoji: "🐘",
        deity: { hi: "श्री गणेश", en: "Lord Ganesha" },
        type: "monthly",
        descHi: "हर कृष्ण पक्ष की चतुर्थी को संकष्टी चतुर्थी मनाई जाती है।",
        descEn: "Sankashti Chaturthi is observed on the 4th day of Krishna Paksha every month.",
        significance: { hi: "सभी संकटों का नाश होता है।", en: "Removes all obstacles from life." },
        howTo: [
            { hi: "सूर्योदय से चंद्रोदय तक उपवास", en: "Fast from sunrise to moonrise" },
            { hi: "गणेश पूजा करें", en: "Worship Lord Ganesha" },
            { hi: "चंद्रमा देखकर व्रत खोलें", en: "Break fast after seeing the moon" }
        ],
        foods: ["Fruits", "Modak after moonrise"],
        dates2025: [
            { date: "2025-01-18", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-02-17", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-03-18", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-04-17", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-05-16", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-06-15", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-07-14", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-08-13", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-09-11", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-10-11", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-11-09", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" },
            { date: "2025-12-09", name: "संकष्टी चतुर्थी", nameEn: "Sankashti Chaturthi" }
        ],
        color: "#E74C3C"
    },

    // ===== ANNUAL =====
    {
        id: "shivratri",
        hi: "महाशिवरात्रि",
        en: "Maha Shivratri",
        emoji: "🔱",
        deity: { hi: "भगवान शिव", en: "Lord Shiva" },
        type: "annual",
        descHi: "महाशिवरात्रि शिव भक्तों की सबसे पवित्र रात्रि है। इस रात शिव और पार्वती का विवाह हुआ था।",
        descEn: "Maha Shivratri is the most sacred night for Shiva devotees. Shiva and Parvati's wedding is celebrated.",
        significance: { hi: "जागरण करने से मोक्ष प्राप्ति होती है।", en: "Staying awake grants liberation." },
        howTo: [
            { hi: "निर्जला व्रत रखें", en: "Keep waterless fast" },
            { hi: "रात भर जागरण करें", en: "Stay awake all night" },
            { hi: "चार प्रहर में शिव पूजा", en: "Worship in 4 Prahars" },
            { hi: "दूध, बेलपत्र चढ़ाएं", en: "Offer milk and bel patra" }
        ],
        foods: ["Nirjala or Fruits only"],
        dates2025: [{ date: "2025-02-26", name: "महाशिवरात्रि", nameEn: "Maha Shivratri" }],
        color: "#8E44AD"
    },
    {
        id: "karva-chauth",
        hi: "करवा चौथ",
        en: "Karva Chauth",
        emoji: "🌙",
        deity: { hi: "शिव-पार्वती-गणेश-चंद्र", en: "Shiva, Parvati, Ganesha, Moon" },
        type: "annual",
        descHi: "करवा चौथ विवाहित महिलाएं अपने पति की लंबी आयु के लिए रखती हैं।",
        descEn: "Karva Chauth is observed by married women for their husband's long life.",
        significance: { hi: "पति की लंबी आयु और सुखी वैवाहिक जीवन।", en: "Husband's longevity and happy married life." },
        howTo: [
            { hi: "सरगी खाकर व्रत शुरू करें", en: "Eat Sargi before sunrise" },
            { hi: "निर्जला व्रत रखें", en: "Keep waterless fast" },
            { hi: "चंद्रमा देखकर व्रत खोलें", en: "Break fast after moonrise" },
            { hi: "छलनी से चंद्रमा और पति को देखें", en: "See moon and husband through sieve" }
        ],
        foods: ["Sargi before sunrise", "Feast after moonrise"],
        dates2025: [{ date: "2025-10-17", name: "करवा चौथ", nameEn: "Karva Chauth" }],
        color: "#E91E63"
    },
    {
        id: "janmashtami",
        hi: "जन्माष्टमी",
        en: "Krishna Janmashtami",
        emoji: "🦚",
        deity: { hi: "भगवान कृष्ण", en: "Lord Krishna" },
        type: "annual",
        descHi: "जन्माष्टमी भगवान कृष्ण के जन्म का उत्सव है। आधी रात को जन्म हुआ था।",
        descEn: "Janmashtami celebrates Lord Krishna's birth at midnight.",
        significance: { hi: "भक्ति, प्रेम और आनंद की प्राप्ति।", en: "Attain devotion, love, and joy." },
        howTo: [
            { hi: "आधी रात तक व्रत रखें", en: "Fast until midnight" },
            { hi: "मंदिरों को सजाएं", en: "Decorate temples" },
            { hi: "56 भोग तैयार करें", en: "Prepare 56 varieties of food" },
            { hi: "रासलीला देखें", en: "Watch Rasleela" }
        ],
        foods: ["Nirjala till midnight", "Panchamrit", "Makhan Mishri"],
        dates2025: [{ date: "2025-08-16", name: "जन्माष्टमी", nameEn: "Krishna Janmashtami" }],
        color: "#1565C0"
    },
    {
        id: "ganesh-chaturthi",
        hi: "गणेश चतुर्थी",
        en: "Ganesh Chaturthi",
        emoji: "🐘",
        deity: { hi: "श्री गणेश", en: "Lord Ganesha" },
        type: "annual",
        descHi: "गणेश चतुर्थी पर भगवान गणेश का जन्म मनाया जाता है। 10 दिनों तक उत्सव चलता है।",
        descEn: "Ganesh Chaturthi celebrates Lord Ganesha's birth. Festival lasts 10 days.",
        significance: { hi: "विघ्नहर्ता गणेश की कृपा प्राप्ति।", en: "Blessings of the remover of obstacles." },
        howTo: [
            { hi: "गणेश मूर्ति स्थापित करें", en: "Install Ganesh idol" },
            { hi: "मोदक, दूर्वा चढ़ाएं", en: "Offer modak and durva" },
            { hi: "गणेश अथर्वशीर्ष पढ़ें", en: "Recite Ganesh Atharvashirsha" },
            { hi: "विसर्जन करें", en: "Perform Visarjan" }
        ],
        foods: ["Modak", "Fruits", "Vrat food"],
        dates2025: [{ date: "2025-08-27", name: "गणेश चतुर्थी", nameEn: "Ganesh Chaturthi" }],
        color: "#FF5722"
    },
    {
        id: "ram-navami",
        hi: "राम नवमी",
        en: "Ram Navami",
        emoji: "🏹",
        deity: { hi: "भगवान राम", en: "Lord Rama" },
        type: "annual",
        descHi: "राम नवमी भगवान राम के जन्म का उत्सव है। चैत्र नवरात्रि का अंतिम दिन।",
        descEn: "Ram Navami celebrates Lord Rama's birth. Last day of Chaitra Navratri.",
        significance: { hi: "धर्म और कर्तव्य का मार्ग।", en: "Path of righteousness and duty." },
        howTo: [
            { hi: "पूरे दिन व्रत रखें", en: "Fast the entire day" },
            { hi: "राम मंदिर जाएं", en: "Visit Ram temple" },
            { hi: "रामचरितमानस पढ़ें", en: "Read Ramcharitmanas" },
            { hi: "राम भजन करें", en: "Sing Ram bhajans" }
        ],
        foods: ["Fruits", "Milk", "Prasad"],
        dates2025: [{ date: "2025-04-07", name: "राम नवमी", nameEn: "Ram Navami" }],
        color: "#FF7043"
    },
    {
        id: "hanuman-jayanti",
        hi: "हनुमान जयंती",
        en: "Hanuman Jayanti",
        emoji: "🐒",
        deity: { hi: "हनुमान जी", en: "Lord Hanuman" },
        type: "annual",
        descHi: "हनुमान जयंती पर भगवान हनुमान का जन्म मनाया जाता है।",
        descEn: "Hanuman Jayanti celebrates Lord Hanuman's birth.",
        significance: { hi: "शक्ति, साहस और भक्ति की प्राप्ति।", en: "Grants strength, courage, and devotion." },
        howTo: [
            { hi: "सुबह हनुमान मंदिर जाएं", en: "Visit Hanuman temple early" },
            { hi: "हनुमान चालीसा 7 या 11 बार पढ़ें", en: "Recite Hanuman Chalisa 7 or 11 times" },
            { hi: "सिंदूर और तेल चढ़ाएं", en: "Offer sindoor and oil" }
        ],
        foods: ["Fruits", "Bundi Laddoo"],
        dates2025: [{ date: "2025-04-13", name: "हनुमान जयंती", nameEn: "Hanuman Jayanti" }],
        color: "#FF5722"
    },
    {
        id: "makar-sankranti",
        hi: "मकर संक्रान्ति",
        en: "Makar Sankranti",
        emoji: "🪁",
        deity: { hi: "सूर्यदेव", en: "Lord Surya" },
        type: "annual",
        descHi: "मकर संक्रान्ति पर सूर्य मकर राशि में प्रवेश करता है। उत्तरायण का आरंभ।",
        descEn: "Sun transitions into Capricorn. Beginning of Uttarayan.",
        significance: { hi: "दान का सबसे शुभ दिन।", en: "Most auspicious day for charity." },
        howTo: [
            { hi: "पवित्र नदी में स्नान करें", en: "Take holy bath in river" },
            { hi: "सूर्य को जल अर्पित करें", en: "Offer water to the Sun" },
            { hi: "तिल-गुड़ दान करें", en: "Donate til-gur" },
            { hi: "पतंग उड़ाएं", en: "Fly kites" }
        ],
        foods: ["Til-Gur Laddoo", "Khichdi", "Chura-Dahi"],
        dates2025: [{ date: "2025-01-14", name: "मकर संक्रान्ति", nameEn: "Makar Sankranti" }],
        color: "#FFC107"
    },
    {
        id: "chhath",
        hi: "छठ पूजा",
        en: "Chhath Puja",
        emoji: "☀️",
        deity: { hi: "छठी मैया और सूर्यदेव", en: "Chhathi Maiya & Surya Dev" },
        type: "annual",
        descHi: "छठ 4 दिनों का महापर्व है। डूबते और उगते सूर्य को अर्घ्य दिया जाता है।",
        descEn: "Chhath is a 4-day festival. Prayers offered to setting and rising sun.",
        significance: { hi: "सबसे कठिन व्रतों में से एक।", en: "One of the most rigorous fasts." },
        howTo: [
            { hi: "नहाय-खाय करें", en: "Nahay Khay on Day 1" },
            { hi: "खरना का व्रत रखें", en: "Kharna fast on Day 2" },
            { hi: "संध्या अर्घ्य दें", en: "Sandhya Arghya on Day 3" },
            { hi: "ऊषा अर्घ्य से पारण", en: "Usha Arghya and Parana on Day 4" }
        ],
        foods: ["Thekua", "Fruits", "Sugarcane", "Kheer"],
        dates2025: [
            { date: "2025-10-26", name: "छठ - नहाय खाय", nameEn: "Chhath - Nahay Khay" },
            { date: "2025-10-27", name: "छठ - खरना", nameEn: "Chhath - Kharna" },
            { date: "2025-10-28", name: "छठ - संध्या अर्घ्य", nameEn: "Chhath - Sandhya Arghya" },
            { date: "2025-10-29", name: "छठ - ऊषा अर्घ्य", nameEn: "Chhath - Usha Arghya" }
        ],
        color: "#FF9800"
    },
    {
        id: "nag-panchami",
        hi: "नाग पंचमी",
        en: "Nag Panchami",
        emoji: "🐍",
        deity: { hi: "नाग देवता", en: "Serpent Gods" },
        type: "annual",
        descHi: "नाग पंचमी पर नागों की पूजा की जाती है।",
        descEn: "Snakes are worshipped on Nag Panchami.",
        significance: { hi: "सर्प दोष निवारण।", en: "Removes Kaal Sarp Dosha." },
        howTo: [
            { hi: "नाग देवता को दूध चढ़ाएं", en: "Offer milk to snake idols" },
            { hi: "धरती न खोदें", en: "Do not dig the earth" }
        ],
        foods: ["Milk", "Kheer", "Lapsi"],
        dates2025: [{ date: "2025-08-01", name: "नाग पंचमी", nameEn: "Nag Panchami" }],
        color: "#607D8B"
    },
    {
        id: "teej",
        hi: "हरतालिका तीज",
        en: "Hartalika Teej",
        emoji: "💚",
        deity: { hi: "शिव-पार्वती", en: "Shiva & Parvati" },
        type: "annual",
        descHi: "हरतालिका तीज सबसे कठिन व्रतों में से एक है। निर्जला व्रत रखा जाता है।",
        descEn: "Hartalika Teej is one of the most severe fasts - even water is not consumed.",
        significance: { hi: "सुहाग की रक्षा और अच्छे पति की प्राप्ति।", en: "Protection of marital status." },
        howTo: [
            { hi: "निर्जला व्रत रखें", en: "Keep waterless fast" },
            { hi: "मेहंदी लगाएं", en: "Apply mehndi" },
            { hi: "शिव-पार्वती की पूजा करें", en: "Worship Shiva-Parvati" },
            { hi: "रात भर जागरण करें", en: "Stay awake at night" }
        ],
        foods: ["Nirjala - Nothing"],
        dates2025: [
            { date: "2025-08-10", name: "हरियाली तीज", nameEn: "Hariyali Teej" },
            { date: "2025-08-23", name: "हरतालिका तीज", nameEn: "Hartalika Teej" }
        ],
        color: "#4CAF50"
    },
    {
        id: "ahoi-ashtami",
        hi: "अहोई अष्टमी",
        en: "Ahoi Ashtami",
        emoji: "⭐",
        deity: { hi: "अहोई माता", en: "Ahoi Mata" },
        type: "annual",
        descHi: "माताएं अपने बच्चों की लंबी आयु के लिए व्रत रखती हैं।",
        descEn: "Mothers fast for their children's well-being and long life.",
        significance: { hi: "संतान की सुख-समृद्धि।", en: "Children's health and prosperity." },
        howTo: [
            { hi: "निर्जला या जल व्रत", en: "Nirjala or water-only fast" },
            { hi: "अहोई माता की पूजा", en: "Worship Ahoi Mata" },
            { hi: "तारे देखकर व्रत खोलें", en: "Break fast after seeing stars" }
        ],
        foods: ["Nothing or water only"],
        dates2025: [{ date: "2025-10-14", name: "अहोई अष्टमी", nameEn: "Ahoi Ashtami" }],
        color: "#9C27B0"
    },
    {
        id: "vat-savitri",
        hi: "वट सावित्री व्रत",
        en: "Vat Savitri Vrat",
        emoji: "🌳",
        deity: { hi: "सावित्री देवी", en: "Savitri Devi" },
        type: "annual",
        descHi: "विवाहित महिलाएं पति की लंबी आयु के लिए वट वृक्ष की पूजा करती हैं।",
        descEn: "Married women worship the Banyan tree for husband's longevity.",
        significance: { hi: "पति की लंबी आयु।", en: "Husband's long life." },
        howTo: [
            { hi: "वट वृक्ष की पूजा करें", en: "Worship the Banyan tree" },
            { hi: "वृक्ष के चारों ओर धागा बांधें", en: "Tie threads around the tree" },
            { hi: "वट सावित्री कथा सुनें", en: "Listen to Vat Savitri Katha" }
        ],
        foods: ["Fruits", "Milk"],
        dates2025: [
            { date: "2025-06-01", name: "वट सावित्री (अमावस्या)", nameEn: "Vat Savitri (Amavasya)" },
            { date: "2025-06-11", name: "वट सावित्री (पूर्णिमा)", nameEn: "Vat Savitri (Purnima)" }
        ],
        color: "#2E7D32"
    },
    {
        id: "nirjala-ekadashi",
        hi: "निर्जला एकादशी",
        en: "Nirjala Ekadashi",
        emoji: "💪",
        deity: { hi: "भगवान विष्णु", en: "Lord Vishnu" },
        type: "annual",
        descHi: "सबसे कठिन एकादशी। पानी भी नहीं पीना चाहिए। 24 एकादशियों का फल मिलता है।",
        descEn: "The strictest Ekadashi. Not even water is consumed. Gives merit of all 24 Ekadashis.",
        significance: { hi: "सभी एकादशियों का पुण्य।", en: "Merit of all 24 Ekadashis combined." },
        howTo: [
            { hi: "24+ घंटे निर्जला व्रत", en: "24+ hours waterless fast" },
            { hi: "विष्णु सहस्रनाम पढ़ें", en: "Recite Vishnu Sahasranama" },
            { hi: "जल दान करें", en: "Donate water pots" }
        ],
        foods: ["Absolutely nothing - Nirjala"],
        dates2025: [{ date: "2025-06-08", name: "निर्जला एकादशी", nameEn: "Nirjala Ekadashi" }],
        color: "#1A237E"
    },
    {
        id: "raksha-bandhan",
        hi: "रक्षाबंधन",
        en: "Raksha Bandhan",
        emoji: "🧵",
        deity: { hi: "भाई-बहन का प्रेम", en: "Siblings' Bond" },
        type: "annual",
        descHi: "बहनें भाइयों की कलाई पर राखी बांधती हैं।",
        descEn: "Sisters tie Rakhi on brothers' wrists.",
        significance: { hi: "भाई-बहन का पवित्र बंधन।", en: "Sacred bond of siblings." },
        howTo: [
            { hi: "भाई की कलाई पर राखी बांधें", en: "Tie Rakhi on brother's wrist" },
            { hi: "भाई बहन को उपहार दे", en: "Brother gives gift to sister" }
        ],
        foods: ["Sweets", "Festival feast"],
        dates2025: [{ date: "2025-08-09", name: "रक्षाबंधन", nameEn: "Raksha Bandhan" }],
        color: "#E91E63"
    },

    // ===== SPECIAL PERIOD =====
    {
        id: "chaitra-navratri",
        hi: "चैत्र नवरात्रि",
        en: "Chaitra Navratri",
        emoji: "🔥",
        deity: { hi: "नवदुर्गा", en: "Nine forms of Durga" },
        type: "special",
        descHi: "चैत्र नवरात्रि हिंदू नववर्ष की शुरुआत है। 9 दिन मां दुर्गा के नौ रूपों की पूजा।",
        descEn: "Chaitra Navratri marks Hindu New Year. 9 days of worshipping nine forms of Durga.",
        significance: { hi: "नवदुर्गा का आशीर्वाद।", en: "Blessings of Navdurga." },
        howTo: [
            { hi: "9 दिन व्रत रखें", en: "Fast for 9 days" },
            { hi: "हर दिन एक देवी की पूजा", en: "Worship one goddess each day" },
            { hi: "अखंड ज्योति जलाएं", en: "Light Akhand Jyoti" },
            { hi: "कन्या पूजन करें", en: "Perform Kanya Pujan" }
        ],
        foods: ["Kuttu Atta", "Singhara", "Sabudana", "Fruits", "Milk"],
        dates2025: [
            { date: "2025-03-30", name: "नवरात्रि दिन 1 - शैलपुत्री", nameEn: "Navratri Day 1 - Shailputri" },
            { date: "2025-03-31", name: "नवरात्रि दिन 2 - ब्रह्मचारिणी", nameEn: "Navratri Day 2 - Brahmacharini" },
            { date: "2025-04-01", name: "नवरात्रि दिन 3 - चंद्रघंटा", nameEn: "Navratri Day 3 - Chandraghanta" },
            { date: "2025-04-02", name: "नवरात्रि दिन 4 - कूष्मांडा", nameEn: "Navratri Day 4 - Kushmanda" },
            { date: "2025-04-03", name: "नवरात्रि दिन 5 - स्कंदमाता", nameEn: "Navratri Day 5 - Skandamata" },
            { date: "2025-04-04", name: "नवरात्रि दिन 6 - कात्यायनी", nameEn: "Navratri Day 6 - Katyayani" },
            { date: "2025-04-05", name: "नवरात्रि दिन 7 - कालरात्रि", nameEn: "Navratri Day 7 - Kalaratri" },
            { date: "2025-04-06", name: "अष्टमी - महागौरी", nameEn: "Ashtami - Mahagauri" },
            { date: "2025-04-07", name: "नवमी - सिद्धिदात्री (राम नवमी)", nameEn: "Navami - Siddhidatri (Ram Navami)" }
        ],
        color: "#C0392B"
    },
    {
        id: "sharad-navratri",
        hi: "शारदीय नवरात्रि",
        en: "Sharad Navratri",
        emoji: "🔥",
        deity: { hi: "नवदुर्गा", en: "Nine forms of Durga" },
        type: "special",
        descHi: "सबसे प्रसिद्ध नवरात्रि। गरबा, डांडिया और भव्य पूजा।",
        descEn: "The most celebrated Navratri. Garba, Dandiya, and grand celebrations.",
        significance: { hi: "बुराई पर अच्छाई की जीत।", en: "Triumph of good over evil." },
        howTo: [
            { hi: "9 दिन व्रत रखें", en: "Fast for 9 days" },
            { hi: "गरबा-डांडिया में भाग लें", en: "Participate in Garba-Dandiya" },
            { hi: "दशहरा पर रावण दहन", en: "Ravana Dahan on Dussehra" }
        ],
        foods: ["Kuttu", "Singhara", "Sabudana", "Fruits", "Potato"],
        dates2025: [
            { date: "2025-10-02", name: "नवरात्रि दिन 1 - शैलपुत्री", nameEn: "Navratri Day 1 - Shailputri" },
            { date: "2025-10-03", name: "नवरात्रि दिन 2 - ब्रह्मचारिणी", nameEn: "Navratri Day 2 - Brahmacharini" },
            { date: "2025-10-04", name: "नवरात्रि दिन 3 - चंद्रघंटा", nameEn: "Navratri Day 3 - Chandraghanta" },
            { date: "2025-10-05", name: "नवरात्रि दिन 4 - कूष्मांडा", nameEn: "Navratri Day 4 - Kushmanda" },
            { date: "2025-10-06", name: "नवरात्रि दिन 5 - स्कंदमाता", nameEn: "Navratri Day 5 - Skandamata" },
            { date: "2025-10-07", name: "नवरात्रि दिन 6 - कात्यायनी", nameEn: "Navratri Day 6 - Katyayani" },
            { date: "2025-10-08", name: "नवरात्रि दिन 7 - कालरात्रि", nameEn: "Navratri Day 7 - Kalaratri" },
            { date: "2025-10-09", name: "अष्टमी - महागौरी", nameEn: "Ashtami - Mahagauri" },
            { date: "2025-10-10", name: "नवमी - सिद्धिदात्री", nameEn: "Navami - Siddhidatri" },
            { date: "2025-10-11", name: "दशहरा / विजयादशमी", nameEn: "Dussehra / Vijayadashami" }
        ],
        color: "#E74C3C"
    },
    {
        id: "shravan",
        hi: "श्रावण मास",
        en: "Shravan Month",
        emoji: "💧",
        deity: { hi: "भगवान शिव", en: "Lord Shiva" },
        type: "special",
        descHi: "पूरा श्रावण मास शिव भक्तों के लिए अत्यंत पवित्र है। कांवड़ यात्रा होती है।",
        descEn: "The entire Shravan month is sacred for Shiva devotees. Kanwar Yatra is performed.",
        significance: { hi: "श्रावण सोमवार का विशेष महत्व।", en: "Shravan Mondays are especially powerful." },
        howTo: [
            { hi: "सभी सोमवार व्रत रखें", en: "Fast on all Mondays" },
            { hi: "कांवड़ लाकर जलाभिषेक करें", en: "Carry Kanwar and do Jalabhishek" },
            { hi: "पूरे माह मांसाहार वर्जित", en: "Avoid non-veg entire month" }
        ],
        foods: ["Fruits", "Milk", "Sabudana", "Vrat food"],
        dates2025: [
            { date: "2025-07-11", name: "श्रावण मास आरंभ", nameEn: "Shravan Month Begins" },
            { date: "2025-07-14", name: "श्रावण सोमवार 1", nameEn: "Shravan Somvar 1" },
            { date: "2025-07-21", name: "श्रावण सोमवार 2", nameEn: "Shravan Somvar 2" },
            { date: "2025-07-28", name: "श्रावण सोमवार 3", nameEn: "Shravan Somvar 3" },
            { date: "2025-08-04", name: "श्रावण सोमवार 4", nameEn: "Shravan Somvar 4" },
            { date: "2025-08-09", name: "श्रावण मास समाप्त", nameEn: "Shravan Month Ends" }
        ],
        color: "#00BCD4"
    },
    {
        id: "pitru-paksha",
        hi: "पितृ पक्ष / श्राद्ध",
        en: "Pitru Paksha (Shradh)",
        emoji: "🕉️",
        deity: { hi: "पितृ देवता", en: "Ancestors" },
        type: "special",
        descHi: "16 दिनों का पर्व। पूर्वजों का तर्पण और श्राद्ध किया जाता है।",
        descEn: "16-day period dedicated to paying homage to departed ancestors.",
        significance: { hi: "पितरों की आत्मा को शांति।", en: "Peace to ancestors' souls." },
        howTo: [
            { hi: "प्रतिदिन तर्पण करें", en: "Perform Tarpan daily" },
            { hi: "ब्राह्मणों को भोजन कराएं", en: "Feed Brahmins" },
            { hi: "नए कार्य न करें", en: "Avoid new ventures" }
        ],
        foods: ["Sattvic food", "Kheer", "Rice"],
        dates2025: [
            { date: "2025-09-07", name: "पितृ पक्ष आरंभ", nameEn: "Pitru Paksha Begins" },
            { date: "2025-09-22", name: "सर्वपितृ अमावस्या", nameEn: "Sarva Pitru Amavasya" }
        ],
        color: "#455A64"
    }
];

// ============================================
// FACTS DATABASE
// ============================================

const FACTS = {
    why: [
        { emoji: "🙏", titleHi: "आध्यात्मिक शुद्धि", titleEn: "Spiritual Purification", textHi: "उपवास का अर्थ है 'ईश्वर के निकट बैठना'। इससे मन और आत्मा शुद्ध होती है।", textEn: "Fasting means 'sitting near God'. It purifies mind and soul." },
        { emoji: "🕉️", titleHi: "इंद्रिय निग्रह", titleEn: "Sense Control", textHi: "भगवद्गीता कहती है कि सच्ची शक्ति इंद्रियों पर नियंत्रण से आती है।", textEn: "Bhagavad Gita teaches that true strength comes from controlling the senses." },
        { emoji: "🔥", titleHi: "कर्म दहन", titleEn: "Burning of Karma", textHi: "उपवास से नकारात्मक कर्म जलते हैं और आत्मा शुद्ध होती है।", textEn: "Fasting burns negative karma and purifies the subtle body." },
        { emoji: "💫", titleHi: "ग्रह शांति", titleEn: "Planetary Remedies", textHi: "विशेष दिनों पर व्रत से ग्रहों के बुरे प्रभाव कम होते हैं।", textEn: "Fasting on specific days reduces malefic planetary effects." },
        { emoji: "🌺", titleHi: "भक्ति और समर्पण", titleEn: "Devotion & Surrender", textHi: "व्रत ईश्वर के प्रति समर्पण और विश्वास की अभिव्यक्ति है।", textEn: "Fasting is an expression of surrender and faith in God." },
        { emoji: "🎯", titleHi: "मनोकामना पूर्ति", titleEn: "Fulfilling Wishes", textHi: "व्रत, प्रार्थना और श्रद्धा से इच्छाएं पूर्ण होती हैं।", textEn: "Fasting with faith and prayer fulfills wishes." }
    ],
    science: [
        { emoji: "🔬", titleHi: "ऑटोफैजी - कोशिका सफाई", titleEn: "Autophagy - Cell Cleaning", textHi: "2016 में नोबेल पुरस्कार विजेता शोध - व्रत से शरीर खराब कोशिकाओं को साफ करता है।", textEn: "Nobel Prize 2016 - body cleans damaged cells during fasting." },
        { emoji: "🧠", titleHi: "मस्तिष्क स्वास्थ्य", titleEn: "Brain Health", textHi: "व्रत से BDNF 400% तक बढ़ता है, जो स्मृति और सीखने में मदद करता है।", textEn: "Fasting increases BDNF by 400%, improving memory and learning." },
        { emoji: "❤️", titleHi: "हृदय स्वास्थ्य", titleEn: "Heart Health", textHi: "नियमित व्रत से कोलेस्ट्रॉल और रक्तचाप कम होता है।", textEn: "Regular fasting reduces cholesterol and blood pressure." },
        { emoji: "🦠", titleHi: "प्रतिरक्षा प्रणाली", titleEn: "Immune Reset", textHi: "2-3 दिन का व्रत पूरी प्रतिरक्षा प्रणाली को पुनर्जीवित करता है।", textEn: "2-3 days fasting regenerates the entire immune system." },
        { emoji: "⚖️", titleHi: "पाचन विश्राम", titleEn: "Digestive Rest", textHi: "आयुर्वेद कहता है - पाचन तंत्र को आराम देने से अग्नि मजबूत होती है।", textEn: "Ayurveda says giving digestive rest strengthens Agni." },
        { emoji: "🧬", titleHi: "एंटी-एजिंग", titleEn: "Anti-Aging", textHi: "व्रत से सर्ट्यूइन्स (दीर्घायु जीन) सक्रिय होते हैं।", textEn: "Fasting activates sirtuins (longevity genes)." }
    ],
    stories: [
        { emoji: "📜", titleHi: "सावित्री और सत्यवान", titleEn: "Savitri & Satyavan", textHi: "सावित्री ने अपनी भक्ति और बुद्धि से यमराज से अपने पति को वापस लाया।", textEn: "Savitri brought her husband back from Yama through devotion and wisdom." },
        { emoji: "📜", titleHi: "करवा चौथ - वीरवती की कथा", titleEn: "Karva Chauth - Veervati's Story", textHi: "वीरवती ने जल्दी व्रत तोड़ा, पति की मृत्यु हुई। एक साल की भक्ति से उन्हें वापस लाया।", textEn: "Veervati broke fast early, husband died. Year of devotion brought him back." },
        { emoji: "📜", titleHi: "एकादशी - मुरा वध", titleEn: "Ekadashi - Slaying of Mura", textHi: "विष्णु की शक्ति से देवी ने मुरा का वध किया। 11वें दिन प्रकट हुईं इसलिए एकादशी।", textEn: "Goddess emerged from Vishnu's energy and slayed Mura on 11th day." },
        { emoji: "📜", titleHi: "भीम और निर्जला एकादशी", titleEn: "Bhima & Nirjala Ekadashi", textHi: "भीम को सभी एकादशी व्रत कठिन लगते थे। व्यास जी ने एक निर्जला एकादशी का उपाय बताया।", textEn: "Bhima couldn't fast all Ekadashis. Vyasa suggested one Nirjala Ekadashi." },
        { emoji: "📜", titleHi: "संतोषी माँ", titleEn: "Santoshi Maa", textHi: "गरीब सत्यवती ने 16 शुक्रवार व्रत रखे। कठिनाइयों के बावजूद भक्ति से समृद्धि मिली।", textEn: "Poor Satyavati kept 16 Friday fasts. Despite hardships, devotion brought prosperity." },
        { emoji: "📜", titleHi: "सोमवार व्रत कथा", titleEn: "Monday Vrat Katha", textHi: "निःसंतान दंपत्ति ने 16 सोमवार व्रत रखे। शिव कृपा से पुत्र प्राप्त हुआ।", textEn: "Childless couple kept 16 Monday fasts. Blessed with son by Shiva's grace." }
    ],
    tips: [
        { emoji: "💧", titleHi: "पानी पीते रहें", titleEn: "Stay Hydrated", textHi: "निर्जला व्रत न हो तो खूब पानी पिएं। नींबू, पुदीना डालें।", textEn: "Unless Nirjala, drink plenty of water. Add lemon or mint." },
        { emoji: "🍌", titleHi: "सही भोजन चुनें", titleEn: "Smart Food Choices", textHi: "केला, शकरकंद ऊर्जा देते हैं। साबूदाना खिचड़ी प्रोटीन देती है।", textEn: "Banana, sweet potato give energy. Sabudana khichdi provides protein." },
        { emoji: "🧘", titleHi: "मन को व्यस्त रखें", titleEn: "Keep Mind Engaged", textHi: "ध्यान, जप, कथा पढ़ने से भूख कम लगती है।", textEn: "Meditation, chanting, reading reduces hunger pangs." },
        { emoji: "⏰", titleHi: "धीरे-धीरे व्रत खोलें", titleEn: "Break Fast Gently", textHi: "पहले गुनगुना पानी, फिर हल्का भोजन लें।", textEn: "Start with warm water, then light food." },
        { emoji: "🍳", titleHi: "पहले से तैयारी करें", titleEn: "Prepare Ahead", textHi: "साबूदाना, कुट्टू, सिंघाड़ा आटा पहले से रखें।", textEn: "Stock sabudana, kuttu, singhara atta in advance." },
        { emoji: "👨‍⚕️", titleHi: "स्वास्थ्य का ध्यान", titleEn: "Health First", textHi: "गर्भवती, बच्चे, बुजुर्ग पहले डॉक्टर से पूछें। भगवान भाव देखते हैं।", textEn: "Pregnant, children, elderly - consult doctor. God sees your intention." }
    ],
    didyouknow: [
        { emoji: "🧠", titleHi: "एकादशी का अर्थ", titleEn: "Ekadashi Means '11th'", textHi: "एकादशी का मतलब '11वां' है। साल में 24 एकादशी होती हैं।", textEn: "Ekadashi means 'the 11th'. There are 24 Ekadashis in a year." },
        { emoji: "🌍", titleHi: "व्रत सार्वभौमिक है", titleEn: "Fasting is Universal", textHi: "लगभग सभी धर्मों में व्रत की परंपरा है।", textEn: "Almost every religion practices fasting." },
        { emoji: "📊", titleHi: "1000+ व्रत दिवस", titleEn: "1000+ Fasting Days", textHi: "हिंदू कैलेंडर में साल के आधे से ज्यादा दिन व्रत के हो सकते हैं!", textEn: "Hindu calendar has potential fasting days covering more than half the year!" },
        { emoji: "🌿", titleHi: "तुलसी का महत्व", titleEn: "Tulsi - Sacred Herb", textHi: "तुलसी एडाप्टोजन है जो तनाव प्रबंधन में मदद करती है।", textEn: "Tulsi is an adaptogen that helps manage stress." },
        { emoji: "🪔", titleHi: "अखंड ज्योति", titleEn: "Akhand Jyoti", textHi: "नवरात्रि में अखंड ज्योति जलाई जाती है। कुछ परिवारों में दशकों से जल रही है!", textEn: "Continuous lamp during Navratri. Some families have kept it burning for decades!" },
        { emoji: "📅", titleHi: "हिंदू कैलेंडर", titleEn: "Hindu Calendar", textHi: "हिंदू पंचांग सूर्य और चंद्रमा दोनों पर आधारित है।", textEn: "Hindu Panchang is based on both Sun and Moon positions." }
    ]
};

const QUOTES = [
    { hi: "\"तपस्वी और ज्ञानी के लिए उपवास ही सर्वोत्तम तप है।\"", en: "\"The fast is the highest austerity for the ascetic and the wise.\"" },
    { hi: "\"शरीर और मन की शुद्धि के बिना ईश्वर दर्शन संभव नहीं।\"", en: "\"Without purifying body and mind, seeing God is not possible.\"" },
    { hi: "\"जो व्रत निष्ठा से रखता है, उसे ईश्वर कभी निराश नहीं करते।\"", en: "\"God never disappoints those who observe vrats with devotion.\"" },
    { hi: "\"अन्न त्याग से इन्द्रिय निग्रह होता है।\"", en: "\"Renouncing food leads to sense control.\"" },
    { hi: "\"सच्चा उपवास वह है जिसमें मन भी भोजन का त्याग करे।\"", en: "\"True fasting is when even the mind renounces food.\"" },
    { hi: "\"भक्ति में किया गया छोटा सा त्याग भी बड़े पुण्य का फल देता है।\"", en: "\"Even a small sacrifice with devotion yields great merit.\"" },
    { hi: "\"व्रत केवल पेट खाली रखना नहीं, मन को ईश्वर से भरना है।\"", en: "\"Fasting is not just keeping stomach empty, but filling mind with God.\"" },
    { hi: "\"जैसे अग्नि स्वर्ण को शुद्ध करती है, वैसे उपवास आत्मा को।\"", en: "\"As fire purifies gold, so does fasting purify the soul.\"" }
];

const MONTH_SPECIALS = {
    1: { hi: "मकर संक्रान्ति और पौष मास", en: "Makar Sankranti & Paush Month", descHi: "जनवरी में मकर संक्रान्ति (14 जनवरी) - पतंग और तिल-गुड़ का त्योहार।", descEn: "January brings Makar Sankranti (Jan 14) - kites and sesame sweets festival." },
    2: { hi: "महाशिवरात्रि का महीना", en: "Maha Shivratri Month", descHi: "फरवरी में महाशिवरात्रि - शिव भक्तों की सबसे पवित्र रात।", descEn: "February is dominated by Maha Shivratri - the holiest night for Shiva devotees." },
    3: { hi: "होली और चैत्र नवरात्रि", en: "Holi & Chaitra Navratri", descHi: "मार्च में होली का रंगोत्सव और चैत्र नवरात्रि की शुरुआत।", descEn: "March brings colorful Holi and beginning of Chaitra Navratri." },
    4: { hi: "चैत्र नवरात्रि और राम नवमी", en: "Chaitra Navratri & Ram Navami", descHi: "अप्रैल में चैत्र नवरात्रि, राम नवमी और हनुमान जयंती।", descEn: "April is the month of Chaitra Navratri, Ram Navami, and Hanuman Jayanti." },
    5: { hi: "बुद्ध पूर्णिमा का माह", en: "Buddha Purnima Month", descHi: "मई में बुद्ध पूर्णिमा, मोहिनी और अपरा एकादशी।", descEn: "May features Buddha Purnima, Mohini and Apara Ekadashi." },
    6: { hi: "निर्जला एकादशी और वट सावित्री", en: "Nirjala Ekadashi & Vat Savitri", descHi: "जून में सबसे कठिन व्रत - निर्जला एकादशी और वट सावित्री।", descEn: "June features the toughest fast - Nirjala Ekadashi and Vat Savitri." },
    7: { hi: "पवित्र श्रावण मास! 🕉️", en: "Sacred Shravan Month! 🕉️", descHi: "जुलाई में पवित्र श्रावण मास आरंभ।", descEn: "July marks the beginning of holy Shravan month!" },
    8: { hi: "श्रावण, जन्माष्टमी और राखी", en: "Shravan, Janmashtami & Rakhi", descHi: "अगस्त में श्रावण सोमवार, नाग पंचमी, रक्षाबंधन, तीज और जन्माष्टमी!", descEn: "August is packed - Shravan, Nag Panchami, Rakhi, Teej, and Janmashtami!" },
    9: { hi: "गणेश चतुर्थी और पितृ पक्ष", en: "Ganesh Chaturthi & Pitru Paksha", descHi: "सितंबर में गणेश उत्सव और पितृ पक्ष।", descEn: "September brings Ganesh Chaturthi and Pitru Paksha." },
    10: { hi: "नवरात्रि, दशहरा और दीपावली! 🪔", en: "Navratri, Dussehra & Diwali! 🪔", descHi: "अक्टूबर सबसे बड़ा माह! नवरात्रि, दशहरा, करवा चौथ, दीपावली और छठ!", descEn: "October is THE BIGGEST month! Navratri, Dussehra, Karva Chauth, Diwali, Chhath!" },
    11: { hi: "कार्तिक मास", en: "Kartik Month", descHi: "नवंबर में कार्तिक पूर्णिमा और देवउठनी एकादशी।", descEn: "November features Kartik Purnima and Dev Uthani Ekadashi." },
    12: { hi: "मोक्षदा एकादशी", en: "Mokshada Ekadashi", descHi: "दिसंबर में मोक्षदा एकादशी।", descEn: "December brings Mokshada Ekadashi." }
};

// ============================================
// STATE
// ============================================

let state = {
    lang: localStorage.getItem('vratLang') || 'hi',
    tab: 'home',
    calMonth: new Date().getMonth(),
    calYear: new Date().getFullYear(),
    followed: JSON.parse(localStorage.getItem('vratFollowed') || '[]'),
    completed: JSON.parse(localStorage.getItem('vratCompleted') || '{}'),
    factCat: 'why',
    filter: 'all'
};

// ============================================
// HELPERS
// ============================================

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function fmt(d) { 
    const dt = new Date(d); 
    return dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2,'0') + '-' + String(dt.getDate()).padStart(2,'0'); 
}
function save() { 
    localStorage.setItem('vratFollowed', JSON.stringify(state.followed)); 
    localStorage.setItem('vratCompleted', JSON.stringify(state.completed)); 
    localStorage.setItem('vratLang', state.lang); 
}
function t(hi, en) { return state.lang === 'hi' ? hi : en; }

function updateTextContent() {
    $$('[data-hi]').forEach(function(el) {
        el.textContent = state.lang === 'hi' ? el.dataset.hi : el.dataset.en;
    });
    var langIcon = $('#langIcon');
    var langText = $('#langText');
    if (langIcon) langIcon.textContent = state.lang === 'hi' ? '🇮🇳' : '🇬🇧';
    if (langText) langText.textContent = state.lang === 'hi' ? 'हिंदी' : 'English';
}

function showToast(msg) {
    var toast = $('#toast');
    var toastMsg = $('#toastMsg');
    if (toast && toastMsg) {
        toastMsg.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(function() { toast.classList.add('hidden'); }, 5000);
    }
}

// ============================================
// SPLASH SCREEN
// ============================================

var enterBtn = $('#enterBtn');
if (enterBtn) {
    enterBtn.addEventListener('click', function() {
        var splash = $('#splash');
        var app = $('#app');
        if (splash) {
            splash.classList.add('splash-exit');
            setTimeout(function() {
                splash.classList.add('hidden');
                if (app) {
                    app.classList.remove('hidden');
                    initApp();
                }
            }, 700);
        }
    });
}

// ============================================
// INIT APP
// ============================================

function initApp() {
    updateTextContent();
    initNav();
    initLang();
    initToast();
    renderHome();
    renderWiki();
    renderCalendar();
    renderFacts();
    checkNotifications();
}

// ============================================
// NAVIGATION
// ============================================

function initNav() {
    $$('.nav-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tab = btn.dataset.tab;
            switchTab(tab);
            var mobileNav = $('#mobileNav');
            if (mobileNav) mobileNav.classList.add('hidden');
        });
    });
    
    var mobileMenu = $('#mobileMenu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            var mobileNav = $('#mobileNav');
            if (mobileNav) mobileNav.classList.toggle('hidden');
        });
    }
}

function switchTab(tab) {
    state.tab = tab;
    $$('.tab').forEach(function(t) { t.classList.remove('active'); });
    var tabEl = $('#tab-' + tab);
    if (tabEl) tabEl.classList.add('active');
    $$('.nav-btn').forEach(function(b) { 
        b.classList.toggle('active', b.dataset.tab === tab); 
    });
    if (tab === 'home') renderHome();
    if (tab === 'calendar') renderCalendar();
}

// ============================================
// LANGUAGE
// ============================================

function initLang() {
    var langToggle = $('#langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            state.lang = state.lang === 'hi' ? 'en' : 'hi';
            save();
            updateTextContent();
            renderHome();
            renderWiki();
            renderCalendar();
            renderFacts();
        });
    }
}

// ============================================
// TOAST
// ============================================

function initToast() {
    var toastClose = $('#toastClose');
    if (toastClose) {
        toastClose.addEventListener('click', function() {
            var toast = $('#toast');
            if (toast) toast.classList.add('hidden');
        });
    }
}

// ============================================
// HOME
// ============================================

function renderHome() {
    var today = new Date();
    var todayDateEl = $('#todayDate');
    if (todayDateEl) {
        todayDateEl.textContent = today.toLocaleDateString(state.lang === 'hi' ? 'hi-IN' : 'en-IN', { 
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
        });
    }

    var todayStr = fmt(today);
    var todayDay = today.getDay();
    var todayVrats = [];

    VRATS.forEach(function(v) {
        if (v.dayOfWeek !== undefined && v.dayOfWeek === todayDay) {
            todayVrats.push({ vrat: v, spec: null });
        }
        if (v.dates2025) {
            v.dates2025.forEach(function(d) {
                if (d.date === todayStr) {
                    todayVrats.push({ vrat: v, spec: d });
                }
            });
        }
    });

    // Remove duplicates
    var seen = {};
    todayVrats = todayVrats.filter(function(item) {
        var k = item.vrat.id + (item.spec ? item.spec.date : '');
        if (seen[k]) return false;
        seen[k] = true;
        return true;
    });

    var container = $('#todayVrats');
    if (container) {
        if (todayVrats.length === 0) {
            container.innerHTML = '<div class="no-vrat">' + t('🙏 आज कोई विशेष व्रत नहीं है', '🙏 No specific vrat today') + '</div>';
        } else {
            container.innerHTML = todayVrats.map(function(item) {
                var v = item.vrat;
                return '<div class="today-item" onclick="openModal(\'' + v.id + '\')">' +
                    '<div class="ti-emoji">' + v.emoji + '</div>' +
                    '<div class="ti-hindi">' + t(v.hi, v.en) + '</div>' +
                    '<div class="ti-eng">' + (item.spec ? t(item.spec.name, item.spec.nameEn) : '') + '</div>' +
                    '<div class="ti-deity">🙏 ' + t(v.deity.hi, v.deity.en) + '</div>' +
                '</div>';
            }).join('');
        }
    }

    // Weekly vrats
    var weekCards = [];
    for (var i = 1; i <= 7; i++) {
        var d = new Date(today);
        d.setDate(today.getDate() + i);
        var ds = fmt(d);
        var dw = d.getDay();
        VRATS.forEach(function(v) {
            if (v.dayOfWeek !== undefined && v.dayOfWeek === dw) {
                weekCards.push({ date: d, v: v, spec: null });
            }
            if (v.dates2025) {
                v.dates2025.forEach(function(dd) {
                    if (dd.date === ds) {
                        weekCards.push({ date: d, v: v, spec: dd });
                    }
                });
            }
        });
    }

    var seenW = {};
    weekCards = weekCards.filter(function(c) {
        var k = c.v.id + fmt(c.date);
        if (seenW[k]) return false;
        seenW[k] = true;
        return true;
    });

    var weeklyEl = $('#weeklyVrats');
    if (weeklyEl) {
        weeklyEl.innerHTML = weekCards.slice(0, 12).map(function(c) {
            return '<div class="week-card" onclick="openModal(\'' + c.v.id + '\')">' +
                '<div class="wc-date">📅 ' + c.date.toLocaleDateString(state.lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) + '</div>' +
                '<div class="wc-name">' + t(c.v.hi, c.v.en) + '</div>' +
                '<div class="wc-eng">' + (c.spec ? t(c.spec.name, c.spec.nameEn) : '') + '</div>' +
            '</div>';
        }).join('');
    }

    // Month special
    var m = today.getMonth() + 1;
    var ms = MONTH_SPECIALS[m];
    var monthEl = $('#monthSpecial');
    if (monthEl && ms) {
        monthEl.innerHTML = '<h3>🗓️ ' + t(ms.hi, ms.en) + '</h3><p>' + t(ms.descHi, ms.descEn) + '</p>';
    }

    // Stats
    var statFollowed = $('#statFollowed');
    if (statFollowed) statFollowed.textContent = state.followed.length;
    
    var todayM = today.getMonth() + 1;
    var upcoming = 0;
    VRATS.forEach(function(v) {
        if (v.dates2025) {
            v.dates2025.forEach(function(d) {
                if (d.date >= todayStr && new Date(d.date).getMonth() + 1 === todayM) upcoming++;
            });
        }
    });
    var statUpcoming = $('#statUpcoming');
    if (statUpcoming) statUpcoming.textContent = upcoming;
    
    var statTotal = $('#statTotal');
    if (statTotal) statTotal.textContent = VRATS.length;
    
    var statCompleted = $('#statCompleted');
    if (statCompleted) statCompleted.textContent = Object.keys(state.completed).length;
}

// ============================================
// WIKI
// ============================================

function renderWiki() {
    var filtered = state.filter === 'all' ? VRATS : VRATS.filter(function(v) { return v.type === state.filter; });
    var searchEl = $('#wikiSearch');
    var search = (searchEl ? searchEl.value : '').toLowerCase();
    
    var results = filtered.filter(function(v) {
        return v.hi.toLowerCase().indexOf(search) !== -1 || 
               v.en.toLowerCase().indexOf(search) !== -1 || 
               v.deity.hi.toLowerCase().indexOf(search) !== -1 || 
               v.deity.en.toLowerCase().indexOf(search) !== -1 ||
               v.descHi.toLowerCase().indexOf(search) !== -1 ||
               v.descEn.toLowerCase().indexOf(search) !== -1;
    });

    var wikiGrid = $('#wikiGrid');
    if (wikiGrid) {
        if (results.length === 0) {
            wikiGrid.innerHTML = '<div class="no-vrat" style="grid-column:1/-1;">' + t('🔍 कोई व्रत नहीं मिला', '🔍 No vrats found') + '</div>';
        } else {
            wikiGrid.innerHTML = results.map(function(v) {
                var fol = state.followed.indexOf(v.id) !== -1;
                return '<div class="wiki-card">' +
                    '<div class="wc-top">' +
                        '<div class="wc-emoji">' + v.emoji + '</div>' +
                        '<span class="wc-type">' + v.type + '</span>' +
                    '</div>' +
                    '<div class="wc-hindi">' + t(v.hi, v.en) + '</div>' +
                    '<div class="wc-eng">' + t(v.en, v.hi) + '</div>' +
                    '<div class="wc-deity">🙏 ' + t(v.deity.hi, v.deity.en) + '</div>' +
                    '<div class="wc-desc">' + t(v.descHi, v.descEn) + '</div>' +
                    '<div class="wc-actions">' +
                        '<button class="btn-follow ' + (fol ? 'following' : '') + '" onclick="toggleFollow(\'' + v.id + '\', event)">' +
                            (fol ? t('✅ फॉलो किया', '✅ Following') : t('📅 फॉलो करें', '📅 Follow')) +
                        '</button>' +
                        '<button class="btn-detail" onclick="openModal(\'' + v.id + '\')">📖 ' + t('विवरण', 'Details') + '</button>' +
                    '</div>' +
                '</div>';
            }).join('');
        }
    }

    // Search
    if (searchEl) {
        searchEl.oninput = function() {
            var val = searchEl.value;
            var clearBtn = $('#searchClear');
            if (clearBtn) clearBtn.classList.toggle('hidden', val.length === 0);
            renderWiki();
        };
    }
    
    var searchClear = $('#searchClear');
    if (searchClear) {
        searchClear.onclick = function() {
            if (searchEl) searchEl.value = '';
            searchClear.classList.add('hidden');
            renderWiki();
        };
    }

    // Filters
    $$('#filters .chip').forEach(function(c) {
        c.onclick = function() {
            $$('#filters .chip').forEach(function(x) { x.classList.remove('active'); });
            c.classList.add('active');
            state.filter = c.dataset.filter;
            renderWiki();
        };
    });
}

// ============================================
// FOLLOW
// ============================================

window.toggleFollow = function(id, e) {
    if (e) e.stopPropagation();
    var idx = state.followed.indexOf(id);
    if (idx > -1) {
        state.followed.splice(idx, 1);
        showToast(t('❌ व्रत हटा दिया गया', '❌ Removed from calendar'));
    } else {
        state.followed.push(id);
        showToast(t('✅ व्रत कैलेंडर में जोड़ा गया! 🙏', '✅ Added to your calendar! 🙏'));
    }
    save();
    renderWiki();
    renderCalendar();
    renderHome();
    updateModalFollow(id);
};

function updateModalFollow(id) {
    var btn = $('.md-follow-btn');
    if (btn && btn.dataset.id === id) {
        var fol = state.followed.indexOf(id) !== -1;
        btn.classList.toggle('following', fol);
        btn.textContent = fol ? t('✅ फॉलो किया - हटाएं', '✅ Following - Remove') : t('📅 इस व्रत को फॉलो करें', '📅 Follow This Vrat');
    }
}

// ============================================
// MODAL
// ============================================

window.openModal = function(id) {
    var v = null;
    for (var i = 0; i < VRATS.length; i++) {
        if (VRATS[i].id === id) { v = VRATS[i]; break; }
    }
    if (!v) return;
    
    var fol = state.followed.indexOf(id) !== -1;

    var datesHtml = '';
    if (v.dates2025 && v.dates2025.length > 0) {
        datesHtml = '<div class="md-section">' +
            '<h4>📅 ' + t('2025 की तिथियां', 'Dates in 2025') + '</h4>' +
            '<div class="md-dates"><ul>' +
            v.dates2025.map(function(d) {
                var dt = new Date(d.date);
                return '<li><strong>' + dt.toLocaleDateString(state.lang === 'hi' ? 'hi-IN' : 'en-IN', {weekday: 'short', day: 'numeric', month: 'long'}) + '</strong> - ' + t(d.name, d.nameEn) + '</li>';
            }).join('') +
            '</ul></div></div>';
    } else if (v.dayOfWeek !== undefined) {
        var days = { 
            hi: ['रविवार','सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'], 
            en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] 
        };
        datesHtml = '<div class="md-section">' +
            '<h4>📅 ' + t('कब रखें', 'When to Observe') + '</h4>' +
            '<div class="md-dates"><p>' + t('हर', 'Every') + ' <strong>' + days[state.lang][v.dayOfWeek] + '</strong></p></div></div>';
    }

    var howToHtml = '';
    if (v.howTo && v.howTo.length > 0) {
        howToHtml = '<ul>' + v.howTo.map(function(h) { return '<li>' + t(h.hi, h.en) + '</li>'; }).join('') + '</ul>';
    }

    var modalBody = $('#modalBody');
    if (modalBody) {
        modalBody.innerHTML = 
            '<div class="md-header">' +
                '<div class="md-emoji">' + v.emoji + '</div>' +
                '<div class="md-hindi">' + t(v.hi, v.en) + '</div>' +
                '<div class="md-eng">' + t(v.en, v.hi) + '</div>' +
            '</div>' +
            '<div class="md-section"><h4>🙏 ' + t('देवता', 'Deity') + ': ' + t(v.deity.hi, v.deity.en) + '</h4></div>' +
            '<div class="md-section"><h4>📿 ' + t('विवरण', 'About') + '</h4><p>' + t(v.descHi, v.descEn) + '</p></div>' +
            '<div class="md-section"><h4>✨ ' + t('महत्व', 'Significance') + '</h4><p>' + t(v.significance ? v.significance.hi : v.descHi, v.significance ? v.significance.en : v.descEn) + '</p></div>' +
            '<div class="md-section"><h4>📋 ' + t('विधि', 'How to Observe') + '</h4>' + howToHtml + '</div>' +
            '<div class="md-section"><h4>🍽️ ' + t('व्रत आहार', 'What to Eat') + '</h4><p>' + (v.foods ? v.foods.join(', ') : '') + '</p></div>' +
            datesHtml +
            '<button class="md-follow-btn ' + (fol ? 'following' : '') + '" data-id="' + id + '" onclick="toggleFollow(\'' + id + '\', event)">' +
                (fol ? t('✅ फॉलो किया - हटाएं', '✅ Following - Remove') : t('📅 इस व्रत को फॉलो करें', '📅 Follow This Vrat')) +
            '</button>';
    }

    var modal = $('#modal');
    if (modal) modal.classList.remove('hidden');
    
    var modalOverlay = $('#modalOverlay');
    if (modalOverlay) {
        modalOverlay.onclick = function() { 
            if (modal) modal.classList.add('hidden'); 
        };
    }
    
    var modalClose = $('#modalClose');
    if (modalClose) {
        modalClose.onclick = function() { 
            if (modal) modal.classList.add('hidden'); 
        };
    }
};

// ============================================
// CALENDAR
// ============================================

function renderCalendar() {
    var months = state.lang === 'hi' 
        ? ['जनवरी','फरवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितंबर','अक्टूबर','नवंबर','दिसंबर']
        : ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var calTitle = $('#calTitle');
    if (calTitle) calTitle.textContent = months[state.calMonth] + ' ' + state.calYear;

    var firstDay = new Date(state.calYear, state.calMonth, 1).getDay();
    var daysInMonth = new Date(state.calYear, state.calMonth + 1, 0).getDate();
    var today = new Date();

    var html = '';
    for (var i = 0; i < firstDay; i++) {
        html += '<div class="cal-cell empty"></div>';
    }

    for (var day = 1; day <= daysInMonth; day++) {
        var date = new Date(state.calYear, state.calMonth, day);
        var ds = fmt(date);
        var dw = date.getDay();
        var isToday = date.toDateString() === today.toDateString();
        var isDone = state.completed[ds];

        var vratNames = [];
        var hasFollowed = false;
        var hasVrat = false;

        VRATS.forEach(function(v) {
            if (v.dayOfWeek !== undefined && v.dayOfWeek === dw) {
                hasVrat = true;
                if (state.followed.indexOf(v.id) !== -1) hasFollowed = true;
                vratNames.push(t(v.hi, v.en).substring(0, 10));
            }
            if (v.dates2025) {
                v.dates2025.forEach(function(d) {
                    if (d.date === ds) {
                        hasVrat = true;
                        if (state.followed.indexOf(v.id) !== -1) hasFollowed = true;
                        vratNames.push(t(d.name, d.nameEn).substring(0, 12));
                    }
                });
            }
        });

        // Unique names
        var uniqueNames = [];
        var namesSeen = {};
        vratNames.forEach(function(n) {
            if (!namesSeen[n]) { uniqueNames.push(n); namesSeen[n] = true; }
        });

        var cls = 'cal-cell';
        if (isToday) cls += ' is-today';
        if (hasVrat) cls += ' is-vrat';
        if (hasFollowed) cls += ' is-followed';
        if (isDone) cls += ' is-done';

        html += '<div class="' + cls + '" data-date="' + ds + '" onclick="toggleCompleted(\'' + ds + '\')">' +
            '<span class="c-num">' + day + '</span>' +
            (uniqueNames.length > 0 ? '<span class="c-label">' + uniqueNames[0] + '</span>' : '') +
        '</div>';
    }

    var calDays = $('#calDays');
    if (calDays) calDays.innerHTML = html;

    // Followed list
    var followedList = $('#followedList');
    if (followedList) {
        if (state.followed.length === 0) {
            followedList.innerHTML = '<div class="no-follow">' + t('📭 अभी कोई व्रत फॉलो नहीं किया। Wiki में जाकर व्रत फॉलो करें!', '📭 No vrats followed yet. Go to Wiki to follow vrats!') + '</div>';
        } else {
            followedList.innerHTML = state.followed.map(function(id) {
                var v = null;
                for (var i = 0; i < VRATS.length; i++) {
                    if (VRATS[i].id === id) { v = VRATS[i]; break; }
                }
                if (!v) return '';
                return '<div class="f-item">' +
                    '<div class="f-info">' +
                        '<span class="f-emoji">' + v.emoji + '</span>' +
                        '<div>' +
                            '<div class="f-hindi">' + t(v.hi, v.en) + '</div>' +
                            '<div class="f-eng">' + t(v.en, v.hi) + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<button class="btn-unfollow" onclick="toggleFollow(\'' + v.id + '\', event)">❌ ' + t('हटाएं', 'Remove') + '</button>' +
                '</div>';
            }).join('');
        }
    }
}

window.toggleCompleted = function(ds) {
    if (state.completed[ds]) {
        delete state.completed[ds];
        showToast(t('❌ उपस्थिति हटाई गई', '❌ Attendance removed'));
    } else {
        state.completed[ds] = true;
        showToast(t('✅ व्रत पूरा! बहुत बढ़िया! 🙏', '✅ Fast completed! Great job! 🙏'));
    }
    save();
    renderCalendar();
    renderHome();
};

var calPrev = $('#calPrev');
if (calPrev) {
    calPrev.onclick = function() {
        state.calMonth--;
        if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
        renderCalendar();
    };
}

var calNext = $('#calNext');
if (calNext) {
    calNext.onclick = function() {
        state.calMonth++;
        if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
        renderCalendar();
    };
}

// ============================================
// FACTS
// ============================================

function renderFacts() {
    var facts = FACTS[state.factCat] || [];
    var factsGrid = $('#factsGrid');
    if (factsGrid) {
        factsGrid.innerHTML = facts.map(function(f) {
            return '<div class="fact-card">' +
                '<div class="fc-emoji">' + f.emoji + '</div>' +
                '<div class="fc-title">' + t(f.titleHi, f.titleEn) + '</div>' +
                '<div class="fc-text">' + t(f.textHi, f.textEn) + '</div>' +
            '</div>';
        }).join('');
    }

    // Quote
    var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    var q = QUOTES[dayOfYear % QUOTES.length];
    var dailyQuote = $('#dailyQuote');
    if (dailyQuote) dailyQuote.textContent = t(q.hi, q.en);

    // Category buttons
    $$('#factCats .chip').forEach(function(c) {
        c.textContent = state.lang === 'hi' ? c.dataset.hi : c.dataset.en;
        c.onclick = function() {
            $$('#factCats .chip').forEach(function(x) { x.classList.remove('active'); });
            c.classList.add('active');
            state.factCat = c.dataset.cat;
            renderFacts();
        };
    });
}

// ============================================
// NOTIFICATIONS
// ============================================

function checkNotifications() {
    var today = new Date();
    var todayStr = fmt(today);
    var todayDay = today.getDay();
    var notifs = [];

    state.followed.forEach(function(id) {
        var v = null;
        for (var i = 0; i < VRATS.length; i++) {
            if (VRATS[i].id === id) { v = VRATS[i]; break; }
        }
        if (!v) return;
        if (v.dayOfWeek !== undefined && v.dayOfWeek === todayDay) {
            notifs.push(t('आज ' + v.hi + ' है! 🙏', 'Today is ' + v.en + '! 🙏'));
        }
        if (v.dates2025) {
            v.dates2025.forEach(function(d) {
                if (d.date === todayStr) {
                    notifs.push(t('आज: ' + d.name + '! 🙏', 'Today: ' + d.nameEn + '! 🙏'));
                }
            });
        }
    });

    if (notifs.length > 0) {
        setTimeout(function() { showToast(notifs[0]); }, 1500);
    }

    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted' && notifs.length > 0) {
        var key = 'notif-' + todayStr;
        if (!localStorage.getItem(key)) {
            new Notification(t('🪷 व्रत संसार', '🪷 Vrat Sansar'), { body: notifs[0] });
            localStorage.setItem(key, '1');
        }
    }
}

if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

}); // End DOMContentLoaded