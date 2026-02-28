// Language Handler - Initialize and manage language switching
document.addEventListener('DOMContentLoaded', function() {
  // Get all language switcher buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  
  // Initialize language on page load
  function initializeLanguage() {
    const currentLang = getCurrentLanguage();
    updateLanguageUI(currentLang);
    updatePageContent(currentLang);
  }
  
  // Update language button UI
  function updateLanguageUI(lang) {
    langBtns.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  // Update all page content
  function updatePageContent(lang) {
    // Hero Section
    const mainTitle = document.querySelector('.main-title');
    const subtitle = document.getElementById('typing-subtitle');
    const startBtn = document.querySelector('.start-journey');
    
    if (mainTitle) mainTitle.textContent = getTranslation('hero.title');
    if (subtitle) {
      subtitle.innerHTML = ''; // Clear typing animation
      const text = getTranslation('hero.subtitle');
      let i = 0;
      
      // Зупиняємо попередню анімацію якщо була
      if (window.typingTimeout) {
        clearTimeout(window.typingTimeout);
      }
      
      function typeWriter() {
        if (i < text.length) {
          subtitle.innerHTML += text.charAt(i);
          i++;
          window.typingTimeout = setTimeout(typeWriter, 100);
        }
      }
      typeWriter();
    }
    if (startBtn) startBtn.textContent = getTranslation('hero.startBtn');
    
    // Mechanical Section
    const mechanicalH2 = document.querySelector('#mechanical h2');
    const aboutAuthorBtn = document.getElementById('aboutAuthorBtn');
    
    if (mechanicalH2) mechanicalH2.textContent = getTranslation('mechanical.title');
    if (aboutAuthorBtn) aboutAuthorBtn.textContent = getTranslation('mechanical.aboutBtn');
    
    // Badge Content
    updateBadgeContent(lang);
    
    // ENIAC Section
    updateEniacContent(lang);
    
    // PC Revolution
    updatePCContent(lang);
    
    // Internet Section
    updateInternetContent(lang);
    
    // Mobile & Cloud
    updateMobileContent(lang);
    
    // AI Era
    updateAIContent(lang);
    
    // Final Section
    const timelineRecap = document.querySelector('.timeline-recap');
    const finalMessage = document.querySelector('.final-message');
    const replayBtn = document.getElementById('replayBtn');
    
    if (timelineRecap) timelineRecap.textContent = '1822 · 1945 · 1981 · 2007 · 2025';
    if (finalMessage) finalMessage.textContent = getTranslation('final.message');
    if (replayBtn) replayBtn.textContent = getTranslation('final.replayBtn');
  }
  
  // Update Badge
  function updateBadgeContent(lang) {
    const badgeTitle = document.querySelector('.badge-title');
    const badgeText = document.querySelector('.badge-text');
    const badgeDescription = document.querySelector('.badge-description');
    const badgeYear = document.querySelector('.badge-year');
    const badgeLocation = document.querySelector('.badge-location');
    
    if (badgeTitle) badgeTitle.textContent = getTranslation('mechanical.badge.title');
    if (badgeText) badgeText.textContent = getTranslation('mechanical.badge.name');
    if (badgeDescription) badgeDescription.textContent = getTranslation('mechanical.badge.description');
    if (badgeYear) badgeYear.textContent = getTranslation('mechanical.badge.year');
    if (badgeLocation) {
      const locationText = getTranslation('mechanical.badge.location');
      badgeLocation.innerHTML = `📍${locationText}`;
    }
  }
  
  // Update ENIAC Content
  function updateEniacContent(lang) {
    const eniacH2 = document.querySelector('#eniac h2');
    const creatorInfo = document.querySelector('.start-info');
    const launchBtn = document.getElementById('launchEniacBtn');
    const videoBtn = document.querySelector('.video-link-button');
    
    if (eniacH2) eniacH2.textContent = getTranslation('eniac.title');
    if (creatorInfo) {
      creatorInfo.innerHTML = `
        <h3>${getTranslation('eniac.creators')}</h3>
        <p>${getTranslation('eniac.description')}</p>
      `;
    }
    if (launchBtn) launchBtn.textContent = getTranslation('eniac.launchBtn');
    if (videoBtn) {
      videoBtn.innerHTML = `
        <span class="video-icon">▶</span>
        <span class="video-text">${getTranslation('eniac.watchVideoBtn')}</span>
      `;
    }
    
    // Update terminal messages
    const eniacTerminal = document.getElementById('eniacTerminal');
    if (eniacTerminal) {
      // Store translation keys for terminal messages
      eniacTerminal.dataset.lang = lang;
    }
    
    // Update info screen creators
    const creatorsSection = document.querySelector('.eniac-creators');
    if (creatorsSection) {
      const creatorCards = creatorsSection.querySelectorAll('.creator-card');
      if (creatorCards.length >= 2) {
        creatorCards[0].innerHTML = `
          <img src="https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/181-master_0.jpg?h=754009f3" alt="J. Presper Eckert" class="creator-img">
          <h4 class="creator-name">${getTranslation('eniac.infoScreen.eckertName')}</h4>
          <p class="creator-years">${getTranslation('eniac.infoScreen.eckertYears')}</p>
          <p class="creator-role">${getTranslation('eniac.infoScreen.eckertRole')}</p>
        `;
        creatorCards[1].innerHTML = `
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JEnv3ku2znU3AOp_aODelLrQIS0ouatXXA&s" alt="John Mauchly" class="creator-img">
          <h4 class="creator-name">${getTranslation('eniac.infoScreen.maucherName')}</h4>
          <p class="creator-years">${getTranslation('eniac.infoScreen.maucherYears')}</p>
          <p class="creator-role">${getTranslation('eniac.infoScreen.maucherRole')}</p>
        `;
      }
    }
    
    const descriptionTitle = document.querySelector('.description-title');
    const descriptionText = document.querySelector('.description-text');
    if (descriptionTitle) descriptionTitle.textContent = getTranslation('eniac.infoScreen.title');
    if (descriptionText) descriptionText.textContent = getTranslation('eniac.infoScreen.description');
    
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length >= 4) {
      statItems[0].innerHTML = `<span class="stat-label">${getTranslation('eniac.infoScreen.weight')}:</span><span class="stat-value">${getTranslation('eniac.infoScreen.weightVal')}</span>`;
      statItems[1].innerHTML = `<span class="stat-label">${getTranslation('eniac.infoScreen.tubes')}:</span><span class="stat-value">${getTranslation('eniac.infoScreen.tubesVal')}</span>`;
      statItems[2].innerHTML = `<span class="stat-label">${getTranslation('eniac.infoScreen.power')}:</span><span class="stat-value">${getTranslation('eniac.infoScreen.powerVal')}</span>`;
      statItems[3].innerHTML = `<span class="stat-label">${getTranslation('eniac.infoScreen.speed')}:</span><span class="stat-value">${getTranslation('eniac.infoScreen.speedVal')}</span>`;
    }
  }
  
  // Update PC Content
  function updatePCContent(lang) {
    const pcH2 = document.querySelector('#pc-revolution h2');
    if (pcH2) pcH2.textContent = getTranslation('pc.title');
    
    // IBM
    const ibmTitle = document.querySelector('.pc-half.left-half .pc-computer-title');
    const ibmDesc = document.querySelector('.pc-half.left-half .pc-short-desc');
    const ibmInfoBtn = document.querySelector('.pc-half.left-half .pc-info-btn');
    const ibmCreatorName = document.querySelector('.pc-half.left-half .creator-mini-info h4');
    const ibmCreatorDesc = document.querySelector('.pc-half.left-half .creator-mini-info p');
    const ibmVideoBtn = document.querySelector('.pc-half.left-half .pc-video-btn');
    
    if (ibmTitle) ibmTitle.textContent = getTranslation('pc.ibmTitle');
    if (ibmDesc) ibmDesc.textContent = getTranslation('pc.ibmDesc');
    if (ibmInfoBtn) ibmInfoBtn.innerHTML = `<span>${getTranslation('pc.ibmMoreBtn')}</span>`;
    if (ibmCreatorName) ibmCreatorName.textContent = getTranslation('pc.ibmCreator');
    if (ibmCreatorDesc) ibmCreatorDesc.textContent = getTranslation('pc.ibmCreatorDesc');
    if (ibmVideoBtn) ibmVideoBtn.innerHTML = `<span class="video-icon">▶</span><span>${getTranslation('pc.ibmVideo')}</span>`;
    
    // Apple
    const appleTitle = document.querySelector('.pc-half.right-half .pc-computer-title');
    const appleDesc = document.querySelector('.pc-half.right-half .pc-short-desc');
    const appleInfoBtn = document.querySelector('.pc-half.right-half .pc-info-btn');
    const appleCreatorName = document.querySelector('.pc-half.right-half .creator-mini-info h4');
    const appleCreatorDesc = document.querySelector('.pc-half.right-half .creator-mini-info p');
    const appleVideoBtn = document.querySelector('.pc-half.right-half .pc-video-btn');
    
    if (appleTitle) appleTitle.textContent = getTranslation('pc.appleTitle');
    if (appleDesc) appleDesc.textContent = getTranslation('pc.appleDesc');
    if (appleInfoBtn) appleInfoBtn.innerHTML = `<span>${getTranslation('pc.appleMoreBtn')}</span>`;
    if (appleCreatorName) appleCreatorName.textContent = getTranslation('pc.appleCreator');
    if (appleCreatorDesc) appleCreatorDesc.textContent = getTranslation('pc.appleCreatorDesc');
    if (appleVideoBtn) appleVideoBtn.innerHTML = `<span class="video-icon">▶</span><span>${getTranslation('pc.appleVideo')}</span>`;
  }
  
  // Update Internet Content
  function updateInternetContent(lang) {
    const internetH2 = document.querySelector('#internet h2');
    const connectBtn = document.getElementById('connectBtn');
    
    if (internetH2) internetH2.textContent = getTranslation('internet.title');
    if (connectBtn) connectBtn.textContent = getTranslation('internet.connectBtn');
    
    // Update info screen
    const inventorName = document.querySelector('.inventor-name');
    const inventorTitle = document.querySelector('.inventor-title');
    const inventorYears = document.querySelector('.inventor-years');
    const inventionStory = document.querySelector('.invention-story');
    const inventionStoryH4 = document.querySelector('.invention-story h4');
    const storyP1 = document.querySelector('.invention-story p:nth-of-type(1)');
    const storyP2 = document.querySelector('.invention-story p:nth-of-type(2)');
    
    if (inventorName) inventorName.textContent = getTranslation('internet.inventorName');
    if (inventorTitle) inventorTitle.textContent = getTranslation('internet.inventorTitle');
    if (inventorYears) inventorYears.textContent = getTranslation('internet.inventorYears');
    if (inventionStoryH4) inventionStoryH4.textContent = getTranslation('internet.storyTitle');
    if (storyP1) storyP1.textContent = getTranslation('internet.storyContent');
    if (storyP2) storyP2.textContent = getTranslation('internet.storyMore');
    
    // Web facts
    const webFacts = document.querySelector('.web-facts');
    if (webFacts) {
      webFacts.innerHTML = `
        <h4>${getTranslation('internet.wikiTitle')}</h4>
        <p><strong>info.cern.ch</strong> - ${getTranslation('internet.wikiContent')}</p>
        
        <h4>${getTranslation('internet.ideaTitle')}</h4>
        <p>${getTranslation('internet.ideaContent')}</p>
        <ul>
          <li>${getTranslation('internet.html')}</li>
          <li>${getTranslation('internet.http')}</li>
          <li>${getTranslation('internet.url')}</li>
          <li>${getTranslation('internet.browser')}</li>
        </ul>
      `;
    }
    
    // Web impact
    const webImpact = document.querySelector('.web-impact');
    if (webImpact) {
      webImpact.innerHTML = `
        <h4>${getTranslation('internet.impactTitle')}</h4>
        <p>${getTranslation('internet.impactContent')}</p>
        <div class="stats-grid">
          <div class="stat">
            <span class="stat-number">${getTranslation('internet.stat1991')}</span>
            <span class="stat-desc">${getTranslation('internet.stat1991Val')}</span>
          </div>
          <div class="stat">
            <span class="stat-number">${getTranslation('internet.stat1994')}</span>
            <span class="stat-desc">${getTranslation('internet.stat1994Val')}</span>
          </div>
          <div class="stat">
            <span class="stat-number">${getTranslation('internet.stat2000')}</span>
            <span class="stat-desc">${getTranslation('internet.stat2000Val')}</span>
          </div>
          <div class="stat">
            <span class="stat-number">${getTranslation('internet.statToday')}</span>
            <span class="stat-desc">${getTranslation('internet.statTodayVal')}</span>
          </div>
        </div>
      `;
    }
    
    const internetVideoBtn = document.querySelector('.internet-video-btn');
    if (internetVideoBtn) internetVideoBtn.innerHTML = `<span class="video-icon">▶</span><span>${getTranslation('internet.videoBtn')}</span>`;
  }
  
  // Update Mobile Content
  function updateMobileContent(lang) {
    const mobileH2 = document.querySelector('#mobile-cloud h2');
    const launchMobileBtn = document.getElementById('launchMobileBtn');
    
    if (mobileH2) mobileH2.textContent = getTranslation('mobile.title');
    if (launchMobileBtn) launchMobileBtn.textContent = getTranslation('mobile.enterBtn');
    
    const iphoneTitle = document.querySelector('.iphone-title');
    const iphoneYear = document.querySelector('.iphone-year');
    const iphoneStoryH4 = document.querySelector('.iphone-story h4');
    const iphoneStoryP1 = document.querySelector('.iphone-story p:nth-of-type(1)');
    const iphoneStoryP2 = document.querySelector('.iphone-story p:nth-of-type(2)');
    
    if (iphoneTitle) iphoneTitle.textContent = getTranslation('mobile.iphoneTitle');
    if (iphoneYear) iphoneYear.textContent = getTranslation('mobile.iphoneYear');
    if (iphoneStoryH4) iphoneStoryH4.textContent = getTranslation('mobile.storyTitle');
    if (iphoneStoryP1) iphoneStoryP1.textContent = getTranslation('mobile.storyContent');
    if (iphoneStoryP2) iphoneStoryP2.textContent = getTranslation('mobile.storyMore');
    
    const cloudFacts = document.querySelector('.cloud-facts');
    if (cloudFacts) {
      cloudFacts.innerHTML = `
        <h4>${getTranslation('mobile.cloudTitle')}</h4>
        <p>${getTranslation('mobile.cloudContent')}</p>
        <ul>
          <li>${getTranslation('mobile.icloud')}</li>
          <li>${getTranslation('mobile.gdrive')}</li>
          <li>${getTranslation('mobile.dropbox')}</li>
          <li>${getTranslation('mobile.aws')}</li>
        </ul>
      `;
    }
    
    const mobileStats = document.querySelector('.mobile-stats');
    if (mobileStats) {
      mobileStats.innerHTML = `
        <h4>${getTranslation('mobile.statsTitle')}</h4>
        <div class="stats-mobile-grid">
          <div class="stat-mobile">
            <span class="stat-number">${getTranslation('mobile.stat2007')}</span>
            <span class="stat-desc">${getTranslation('mobile.stat2007Val')}</span>
          </div>
          <div class="stat-mobile">
            <span class="stat-number">${getTranslation('mobile.stat2008')}</span>
            <span class="stat-desc">${getTranslation('mobile.stat2008Val')}</span>
          </div>
          <div class="stat-mobile">
            <span class="stat-number">${getTranslation('mobile.stat2010')}</span>
            <span class="stat-desc">${getTranslation('mobile.stat2010Val')}</span>
          </div>
          <div class="stat-mobile">
            <span class="stat-number">${getTranslation('mobile.stat2020')}</span>
            <span class="stat-desc">${getTranslation('mobile.stat2020Val')}</span>
          </div>
        </div>
      `;
    }
    
    const creatorCloudCard = document.querySelector('.creator-cloud-card');
    if (creatorCloudCard) {
      creatorCloudCard.innerHTML = `
        <h4>${getTranslation('mobile.visionaryTitle')}</h4>
        <div class="creator-cloud-info">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpav1iIAD5EfBHc-QxBecROMSg5a8jouIN5Q&s" alt="Steve Jobs" class="creator-cloud-img">
          <div class="creator-cloud-details">
            <h5>${getTranslation('mobile.jobsName')}</h5>
            <p>${getTranslation('mobile.jobsLife')}</p>
            <p>${getTranslation('mobile.jobsRole')}</p>
            <p>"${getTranslation('mobile.jobsQuote')}"</p>
          </div>
        </div>
      `;
    }
    
    const mobileVideoBtn = document.querySelector('.mobile-video-btn');
    if (mobileVideoBtn) mobileVideoBtn.innerHTML = `<span class="video-icon">▶</span><span>${getTranslation('mobile.videoBtn')}</span>`;
  }
  
  // Update AI Content
  function updateAIContent(lang) {
    const aiH2 = document.querySelector('#ai-era h2');
    const activateBtn = document.getElementById('activateAiBtn');
    
    if (aiH2) aiH2.textContent = getTranslation('ai.title');
    if (activateBtn) activateBtn.textContent = getTranslation('ai.activateBtn');
    
    const aiInfoCard = document.querySelector('.ai-info-card');
    if (aiInfoCard) {
      aiInfoCard.innerHTML = `
        <h3 class="ai-title">${getTranslation('ai.riseTitle')}</h3>
        <p class="ai-description">${getTranslation('ai.riseDesc')}</p>
      `;
    }
    
    const aiPurposeCard = document.querySelector('.ai-purpose-card');
    if (aiPurposeCard) {
      aiPurposeCard.innerHTML = `
        <h4>${getTranslation('ai.purposeTitle')}</h4>
        <ul class="ai-purpose-list">
          <li>${getTranslation('ai.purpose1')}</li>
          <li>${getTranslation('ai.purpose2')}</li>
          <li>${getTranslation('ai.purpose3')}</li>
          <li>${getTranslation('ai.purpose4')}</li>
          <li>${getTranslation('ai.purpose5')}</li>
          <li>${getTranslation('ai.purpose6')}</li>
        </ul>
      `;
    }
    
    const aiCreatorCard = document.querySelector('.ai-creator-card');
    if (aiCreatorCard) {
      aiCreatorCard.innerHTML = `
        <h4>${getTranslation('ai.creatorTitle')}</h4>
        <div class="ai-creator-info">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh49dwZFCJg81ptr5L5PyqLuY7SOzliu33A&s" alt="Geoffrey Hinton" class="ai-creator-img">
          <div class="ai-creator-details">
            <h5>${getTranslation('ai.hintonName')}</h5>
            <p>${getTranslation('ai.hintonDesc')}</p>
            <p>1947 - present</p>
            <button class="ai-creator-more" id="aiCreatorMoreBtn">${getTranslation('ai.hintonMore')} <span>→</span></button>
          </div>
        </div>
      `;
      
      // Re-attach modal button listener
      const moreBtn = aiCreatorCard.querySelector('#aiCreatorMoreBtn');
      if (moreBtn) {
        // Видаляємо старі слухачі подій
        const newMoreBtn = moreBtn.cloneNode(true);
        moreBtn.parentNode.replaceChild(newMoreBtn, moreBtn);
        
        newMoreBtn.addEventListener('click', () => {
          const modal = document.getElementById('ai-creator-modal');
          if (modal) modal.classList.remove('hidden');
        });
      }
    }
    
    const aiModal = document.querySelector('.ai-creator-modal-body');
    if (aiModal) {
      aiModal.innerHTML = `
        <h3>${getTranslation('ai.hintonModal.title')}</h3>
        <div class="ai-creator-modal-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh49dwZFCJg81ptr5L5PyqLuY7SOzliu33A&s" alt="Geoffrey Hinton">
        </div>
        <div class="ai-creator-modal-info">
          <p><strong>${getTranslation('ai.hintonModal.born')}</strong> ${getTranslation('ai.hintonModal.birthDate')}</p>
          <p><strong>${getTranslation('ai.hintonModal.nationality')}</strong> ${getTranslation('ai.hintonModal.nationalityVal')}</p>
          <p><strong>${getTranslation('ai.hintonModal.knownFor')}</strong> ${getTranslation('ai.hintonModal.knownForVal')}</p>
          <p><strong>${getTranslation('ai.hintonModal.awards')}</strong> ${getTranslation('ai.hintonModal.awardsVal')}</p>
          <p><strong>${getTranslation('ai.hintonModal.quote')}</strong> "${getTranslation('ai.hintonModal.quoteVal')}"</p>
        </div>
      `;
    }
    
    const robotName = document.querySelector('.robot-name');
    if (robotName) {
      robotName.innerHTML = `
        <h3>${getTranslation('ai.robotName')}</h3>
        <p>${getTranslation('ai.robotDesc')}</p>
      `;
    }
    
    const aiVideoBtn = document.querySelector('.ai-video-btn');
    if (aiVideoBtn) aiVideoBtn.innerHTML = `<span class="video-icon">▶</span><span>${getTranslation('ai.videoBtn')}</span>`;
  }
  
  // Add click listeners to language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      setLanguage(lang);
      updateLanguageUI(lang);
      updatePageContent(lang);
    });
  });
  
  // Initialize on page load
  initializeLanguage();
});
