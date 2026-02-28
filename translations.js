// Language Translations
const translations = {
  uk: {
    // Hero Section
    hero: {
      title: "Еволюція комп'ютерів",
      subtitle: "Від шестерень до нейронних мереж",
      startBtn: "Почати подорож"
    },
    
    // Mechanical Era
    mechanical: {
      title: "Механічна епоха (1822-1940)",
      aboutBtn: "Про автора",
      badge: {
        title: "АНАЛІТИЧНА МАШИНА",
        name: "Чарльз Бебідж (1791-1871)",
        description: "Англійський математик, винахідник і енциклопедист, відомий як \"батько обчислень\" за розроблення перших механічних калькуляторів - Різницевої машини та Аналітичної машини.",
        year: "1837",
        location: "Лондон, Великобританія"
      }
    },
    
    // ENIAC Section
    eniac: {
      title: "ENIAC (1945)",
      creators: "Дж. Преспер Еккерт і Джон Маухлі",
      description: "Перший універсальний електронний цифровий комп'ютер • 17 468 вакуумних ламп • 30 тон",
      launchBtn: "Запустити ENIAC",
      watchVideoBtn: "Переглянути документальний фільм про ENIAC",
      terminal: {
        initTubes: "> Ініціалізація вакуумних ламп...",
        processing: "> ENIAC обробляє... 17468 активних ламп",
        trajectory: "> Розрахунок траєкторії...",
        memoryAddr: "> Адреса пам'яті: 0x0001",
        ballisticTables: "> Таблиці балістики завантажені",
        running: "> ENIAC працює на 100 кГц",
        complete: "> Обробка завершена!",
        success: "> ✅ ENIAC успішно запущений. Перша програма: 1945"
      },
      infoScreen: {
        title: "Перший електронний комп'ютер",
        description: "ENIAC (Electronic Numerical Integrator and Computer) був першим програмованим електронним універсальним цифровим комп'ютером. Він був машиною Тьюринга та міг розв'язувати великий клас числових задач за допомогою переконфігурування.",
        weight: "Вага",
        weightVal: "30 тон",
        tubes: "Вакуумні лампи",
        tubesVal: "17 468",
        power: "Потужність",
        powerVal: "150 кВ",
        speed: "Швидкість",
        speedVal: "100 кГц",
        creatorsTitle: "Творці",
        eckertName: "Дж. Преспер Еккерт",
        eckertYears: "1919-1995",
        eckertRole: "Співвинахідник, Головний інженер",
        maucherName: "Джон Маухлі",
        maucherYears: "1907-1980",
        maucherRole: "Співвинахідник, Головний консультант"
      }
    },
    
    // PC Revolution
    pc: {
      title: "Революція ПК (1970-1980)",
      ibmTitle: "IBM PC",
      ibmYear: "1981",
      ibmDesc: "Перший персональний комп'ютер IBM, який встановив стандарт індустрії",
      ibmMoreBtn: "Детальніше",
      ibmCreator: "Дон Естрідж",
      ibmCreatorDesc: "\"Батько IBM PC\"",
      ibmVideo: "Переглянути відео",
      appleTitle: "Apple II",
      appleYear: "1977",
      appleDesc: "Один із перших висококатегорійних персональних комп'ютерів масового виробництва",
      appleMoreBtn: "Детальніше",
      appleCreator: "Стів Возняк",
      appleCreatorDesc: "Співзасновник Apple",
      appleVideo: "Переглянути відео",
      ibmModal: {
        title: "IBM PC - 1981",
        content: "IBM PC став найважливішим прориву у світі персональних комп'ютерів. Він запровадив відкриту архітектуру, що дозволило іншим компаніям створювати сумісне обладнання. Цей комп'ютер встановив стандарти для персональних комп'ютерів на багато років вперед."
      },
      appleModal: {
        title: "Apple II - 1977",
        content: "Apple II було революційній комп'ютер для своєї епохи. Це була одна з перших висококатегорійних персональних комп'ютерів масового виробництва. Її можна було купити у магазинах, і вона була досить доступна для використання дома та в малих офісах."
      }
    },
    
    // Internet Era
    internet: {
      title: "Епоха та Інтернету (1990-те)",
      connectBtn: "Підключитися до Інтернету",
      storyTitle: "Історія завдяки Сітці",
      inventorName: "Тім Бернерс-Лі",
      inventorTitle: "Винахідник Всесвітної павутини",
      inventorYears: "1955 - присутній",
      storyContent: "У 1989 році, працюючи в CERN, Тім Бернерс-Лі запропонував систему управління інформацією за допомогою \"гіпертексту\" - способу зв'язування документів між різними комп'ютерами. Його бачення полягало в створенні універсального інформаційного простору, де кожна людина могла б ділитися і отримувати доступ до знань.",
      storyMore: "Перший веб-сайт був побудований в CERN і почав працювати 6 серпня 1991 року. Він пояснював, що таке Всесвітна павутина і як створювати власні веб-сторінки.",
      wikiTitle: "🌐 Перший веб-сайт",
      wikiContent: "info.cern.ch - Все ще онлайн сьогодні!",
      ideaTitle: "💡 Ідея",
      ideaContent: "Бернерс-Лі був розчарований втратою інформації в CERN. Вченим з усього світу потрібен був кращий спосіб ділитис даними. Його рішення об'єднувало:",
      html: "HTML (HyperText Markup Language)",
      http: "HTTP (HyperText Transfer Protocol)",
      url: "URLs (Uniform Resource Locators)",
      browser: "Перший веб-браузер",
      impactTitle: "🚀 Як це змінило світ",
      impactContent: "Мережа виросла експоненціально:",
      stat1991: "1991:",
      stat1991Val: "1 веб-сайт",
      stat1994: "1994:",
      stat1994Val: "~3000 веб-сайтів",
      stat2000: "2000:",
      stat2000Val: "17 мільйонів веб-сайтів",
      statToday: "Сьогодні:",
      statTodayVal: "1.8+ мільярдів веб-сайтів",
      videoBtn: "Переглянути: Народження вебу"
    },
    
    // Mobile & Cloud
    mobile: {
      title: "Мобільні і хмарні технології (2000-2010)",
      enterBtn: "Вступити в мобільну епоху",
      iphoneTitle: "iPhone",
      iphoneYear: "2007",
      storyTitle: "Пристрій, що змінив все",
      storyContent: "9 січня 2007 року Стів Джобс представив iPhone, описавши його як \"iPod, телефон та інтернет-комунікатор\". Це змінило мобільну індустрію за допомогою м'яко-сенсорного екрана та відсутності фізичної клавіатури.",
      storyMore: "Магазин додатків (App Store) запустився в 2008 році, створивши абсолютно нову економіку та змінивши те, як ми використовуємо смартфони.",
      cloudTitle: "☁️ Хмарні обчислення",
      cloudContent: "Хмара дозволила смартфонам стати справді потужними:",
      icloud: "iCloud (2011) - Синхронізація між пристроями",
      gdrive: "Google Drive - Хмарне сховище",
      dropbox: "Dropbox - Спільне використання файлів",
      aws: "AWS - Живить інтернет",
      statsTitle: "📊 Статистика мобільної революції",
      stat2007: "2007:",
      stat2007Val: "Перший iPhone",
      stat2008: "2008:",
      stat2008Val: "App Store (500 додатків)",
      stat2010: "2010:",
      stat2010Val: "iPad",
      stat2020: "2020:",
      stat2020Val: "5.2 мільярди мобільних користувачів",
      visionaryTitle: "👤 Провісник",
      jobsName: "Стів Джобс",
      jobsLife: "1955-2011",
      jobsRole: "Співзасновник Apple",
      jobsQuote: "\"Люди, які досить божевільні, щоб думати, що вони можуть змінити світ - це люди, які це роблять.\"",
      videoBtn: "Переглянути: Презентація iPhone 2007"
    },
    
    // AI Era
    ai: {
      title: "Штучний інтелект (2010-Тепер)",
      activateBtn: "Активувати AI",
      riseTitle: "Під'їзд штучного інтелекту",
      riseDesc: "Штучний інтелект спрямований на створення машин, які можуть думати, навчатися та адаптуватися як люди. Концепція бере початок в древні часи, але сучасний AI почався у 1950-х роках з питанням Алана Тьюрінга: \"Чи можуть машини думати?\"",
      purposeTitle: "🎯 Мета і завдання",
      purpose1: "Автоматизація повторюваних завдань",
      purpose2: "Обробка великих обсягів даних",
      purpose3: "Прогнозування та прийняття рішень",
      purpose4: "Розуміння людської мови",
      purpose5: "Розпізнавання закономірностей та зображень",
      purpose6: "Розв'язання складних проблем",
      creatorTitle: "👤 Провісник",
      hintonName: "Джефрі Хінтон",
      hintonDesc: "\"Хрещений батько глибокого навчання\"",
      hintonMore: "Детальніше",
      robotName: "AI Робот",
      robotDesc: "Інтелектуальна машина",
      videoBtn: "Переглянути: Історія AI",
      hintonModal: {
        title: "Джефрі Хінтон",
        born: "Народжений:",
        birthDate: "6 грудня 1947 (67 років)",
        nationality: "Національність:",
        nationalityVal: "Британо-канадець",
        knownFor: "Відомий як:",
        knownForVal: "Зворотне поширення, машини Больцмана, глибоке навчання",
        awards: "Нагороди:",
        awardsVal: "Премія Тьюринга (2018), Нобелівська премія з фізики (2024)",
        quote: "Цитата:",
        quoteVal: "\"Глибоке навчання зможе виконувати все, що люди можуть робити, і можливо більше.\""
      }
    },
    
    // Final Section
    final: {
      message: "Майбутнє пишеться прямо зараз",
      replayBtn: "Повторити досвід"
    },
    
    // Language Switcher
    languageSwitcher: "EN / УКР"
  },
  
  en: {
    // Hero Section
    hero: {
      title: "The Evolution of Computers",
      subtitle: "From gears to neural networks",
      startBtn: "Start the Journey"
    },
    
    // Mechanical Era
    mechanical: {
      title: "Mechanical Era (1822-1940)",
      aboutBtn: "About the Author",
      badge: {
        title: "ANALYTICAL ENGINE",
        name: "Charles Babbage (1791-1871)",
        description: "English mathematician, inventor, and polymath known as the \"father of computing\" for designing the first mechanical calculators, the Difference Engine and the Analytical Engine.",
        year: "1837",
        location: "London, UK"
      }
    },
    
    // ENIAC Section
    eniac: {
      title: "ENIAC (1945)",
      creators: "J. Presper Eckert & John Mauchly",
      description: "First general-purpose electronic digital computer • 17,468 vacuum tubes • 30 tons",
      launchBtn: "Launch ENIAC",
      watchVideoBtn: "Watch ENIAC Documentary",
      terminal: {
        initTubes: "> Initializing vacuum tubes...",
        processing: "> ENIAC processing... 17,468 tubes active",
        trajectory: "> Calculating trajectory...",
        memoryAddr: "> Memory address: 0x0001",
        ballisticTables: "> Ballistic tables loaded",
        running: "> ENIAC running at 100 kHz",
        complete: "> Processing complete!",
        success: "> ✅ ENIAC launched successfully! First program: 1945"
      },
      infoScreen: {
        title: "The First Electronic Computer",
        description: "ENIAC (Electronic Numerical Integrator and Computer) was the first programmable, electronic, general-purpose digital computer. It was Turing-complete and could solve a large class of numerical problems through reprogramming.",
        weight: "Weight",
        weightVal: "30 tons",
        tubes: "Vacuum Tubes",
        tubesVal: "17,468",
        power: "Power",
        powerVal: "150 kW",
        speed: "Speed",
        speedVal: "100 kHz",
        creatorsTitle: "Creators",
        eckertName: "J. Presper Eckert",
        eckertYears: "1919-1995",
        eckertRole: "Co-inventor, Chief Engineer",
        maucherName: "John Mauchly",
        maucherYears: "1907-1980",
        maucherRole: "Co-inventor, Principal Consultant"
      }
    },
    
    // PC Revolution
    pc: {
      title: "PC Revolution (1970s-1980s)",
      ibmTitle: "IBM PC",
      ibmYear: "1981",
      ibmDesc: "The first IBM personal computer that set the industry standard",
      ibmMoreBtn: "More Info",
      ibmCreator: "Don Estridge",
      ibmCreatorDesc: "\"Father of IBM PC\"",
      ibmVideo: "Watch Video",
      appleTitle: "Apple II",
      appleYear: "1977",
      appleDesc: "One of the first highly successful mass-produced personal computers",
      appleMoreBtn: "More Info",
      appleCreator: "Steve Wozniak",
      appleCreatorDesc: "Apple Co-founder",
      appleVideo: "Watch Video",
      ibmModal: {
        title: "IBM PC - 1981",
        content: "The IBM PC was a breakthrough in personal computing. It introduced an open architecture that allowed other companies to create compatible hardware. This computer set the standards for personal computers for many years to come."
      },
      appleModal: {
        title: "Apple II - 1977",
        content: "The Apple II was a revolutionary computer for its time. It was one of the first highly successful mass-produced personal computers. It could be purchased in stores and was affordable enough for home and small office use."
      }
    },
    
    // Internet Era
    internet: {
      title: "Internet Era (1990s)",
      connectBtn: "Connect to Internet",
      storyTitle: "The Story Behind the Web",
      inventorName: "Tim Berners-Lee",
      inventorTitle: "Inventor of the World Wide Web",
      inventorYears: "1955 - present",
      storyContent: "In 1989, while working at CERN, Tim Berners-Lee proposed a system to manage information using \"hypertext\" - a way to link documents across different computers. His vision was to create a universal information space where anyone could share and access knowledge.",
      storyMore: "The first website was built at CERN and went live on August 6, 1991. It explained what the World Wide Web was and how to create your own web pages.",
      wikiTitle: "🌐 First Website",
      wikiContent: "info.cern.ch - Still online today!",
      ideaTitle: "💡 The Idea",
      ideaContent: "Berners-Lee was frustrated with information loss at CERN. Scientists from around the world needed a better way to share data. His solution combined:",
      html: "HTML (HyperText Markup Language)",
      http: "HTTP (HyperText Transfer Protocol)",
      url: "URLs (Uniform Resource Locators)",
      browser: "The first web browser",
      impactTitle: "🚀 How It Changed the World",
      impactContent: "The Web grew exponentially:",
      stat1991: "1991:",
      stat1991Val: "1 website",
      stat1994: "1994:",
      stat1994Val: "~3,000 websites",
      stat2000: "2000:",
      stat2000Val: "17 million websites",
      statToday: "Today:",
      statTodayVal: "1.8+ billion websites",
      videoBtn: "Watch: The Web's Birth"
    },
    
    // Mobile & Cloud
    mobile: {
      title: "Mobile & Cloud (2000s-2010s)",
      enterBtn: "Enter Mobile Era",
      iphoneTitle: "iPhone",
      iphoneYear: "2007",
      storyTitle: "The Device That Changed Everything",
      storyContent: "On January 9, 2007, Steve Jobs introduced the iPhone, describing it as \"an iPod, a phone, and an internet communicator.\" It revolutionized the mobile industry with its multi-touch interface and lack of physical keyboard.",
      storyMore: "The App Store launched in 2008, creating an entirely new economy and changing how we use smartphones forever.",
      cloudTitle: "☁️ Cloud Computing",
      cloudContent: "The cloud allowed smartphones to become truly powerful:",
      icloud: "iCloud (2011) - Sync across devices",
      gdrive: "Google Drive - Cloud storage",
      dropbox: "Dropbox - File sharing",
      aws: "AWS - Powering the internet",
      statsTitle: "📊 Mobile Revolution Stats",
      stat2007: "2007:",
      stat2007Val: "First iPhone",
      stat2008: "2008:",
      stat2008Val: "App Store (500 apps)",
      stat2010: "2010:",
      stat2010Val: "iPad",
      stat2020: "2020:",
      stat2020Val: "5.2B mobile users",
      visionaryTitle: "👤 Visionary",
      jobsName: "Steve Jobs",
      jobsLife: "1955-2011",
      jobsRole: "Co-founder of Apple",
      jobsQuote: "\"The people who are crazy enough to think they can change the world are the ones who do.\"",
      videoBtn: "Watch: iPhone Launch 2007"
    },
    
    // AI Era
    ai: {
      title: "Artificial Intelligence (2010s-Now)",
      activateBtn: "Activate AI",
      riseTitle: "The Rise of Artificial Intelligence",
      riseDesc: "Artificial Intelligence aims to create machines that can think, learn, and adapt like humans. The concept dates back to ancient times, but modern AI began in the 1950s with Alan Turing's question: \"Can machines think?\"",
      purposeTitle: "🎯 Purpose & Goals",
      purpose1: "Automate repetitive tasks",
      purpose2: "Process vast amounts of data",
      purpose3: "Make predictions and decisions",
      purpose4: "Understand human language",
      purpose5: "Recognize patterns and images",
      purpose6: "Solve complex problems",
      creatorTitle: "👤 The Visionary",
      hintonName: "Geoffrey Hinton",
      hintonDesc: "\"Godfather of Deep Learning\"",
      hintonMore: "More Info",
      robotName: "AI Robot",
      robotDesc: "Intelligent Machine",
      videoBtn: "Watch: The History of AI",
      hintonModal: {
        title: "Geoffrey Hinton",
        born: "Born:",
        birthDate: "December 6, 1947 (age 77)",
        nationality: "Nationality:",
        nationalityVal: "British-Canadian",
        knownFor: "Known for:",
        knownForVal: "Backpropagation, Boltzmann machines, Deep learning",
        awards: "Awards:",
        awardsVal: "Turing Award (2018), Nobel Prize in Physics (2024)",
        quote: "Quote:",
        quoteVal: "\"Deep learning is going to be able to do everything that humans can do, and maybe more.\""
      }
    },
    
    // Final Section
    final: {
      message: "The Future is Being Written Now",
      replayBtn: "Replay Experience"
    },
    
    // Language Switcher
    languageSwitcher: "EN / УКР"
  }
};

// Get current language from localStorage or default to Ukrainian
function getCurrentLanguage() {
  return localStorage.getItem('siteLanguage') || 'uk';
}

// Set current language
function setLanguage(lang) {
  localStorage.setItem('siteLanguage', lang);
}

// Get translation for a key path (e.g., "hero.title")
function getTranslation(path) {
  const lang = getCurrentLanguage();
  const keys = path.split('.');
  let value = translations[lang];
  
  for (let key of keys) {
    value = value[key];
    if (!value) return path; // Return path if translation not found
  }
  
  return value;
}
