// script.js - Повністю виправлена версія

// Ініціалізація AOS
AOS.init({
  duration: 800,
  once: true,
  mirror: false,
  throttleDelay: 100
});

// ===== ТАЙПІНГ АНІМАЦІЯ =====
const subtitle = document.getElementById('typing-subtitle');
if (subtitle) {
  const text = "From gears to neural networks";
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      subtitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  if (document.readyState === 'complete') {
    typeWriter();
  } else {
    window.addEventListener('load', typeWriter, { once: true });
  }
}

// ===== HERO PARTICLES =====
(function initHeroParticles() {
  const heroCanvas = document.getElementById('hero-canvas');
  if (!heroCanvas) return;
  
  let heroScene, heroCamera, heroRenderer, particlesMesh;
  let animationFrame;
  let isActive = false;
  
  function createParticles() {
    if (isActive) return;
    
    heroScene = new THREE.Scene();
    heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true });
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i+1] = (Math.random() - 0.5) * 10;
      posArray[i+2] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.02, color: 0x00ffff });
    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    heroScene.add(particlesMesh);
    heroCamera.position.z = 3;
    
    isActive = true;
    
    function animateParticles() {
      if (!isActive) return;
      
      animationFrame = requestAnimationFrame(animateParticles);
      
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.0002;
      }
      
      if (heroRenderer && heroScene && heroCamera) {
        heroRenderer.render(heroScene, heroCamera);
      }
    }
    
    animateParticles();
  }
  
  // Ліниве завантаження
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isActive) {
          createParticles();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(heroSection);
  }
  
  // Resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (heroCamera && heroRenderer && isActive) {
        heroCamera.aspect = window.innerWidth / window.innerHeight;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    }, 200);
  });
})();

// ===== BADGE З ПОВНИМ ФУНКЦІОНАЛОМ =====
(function initBadge() {
  const aboutBtn = document.getElementById('aboutAuthorBtn');
  const badge = document.getElementById('badge');
  const inventorInfo = document.getElementById('inventorInfo');
  
  if (!badge || !aboutBtn) return;
  
  let isDragging = false;
  let offsetX, offsetY;
  let hasMoved = false;
  let startTop = -300;
  let targetTop = 100;
  
  // Довгі стрічки
  let leftRibbonLong, rightRibbonLong;
  
  function createLongRibbons() {
    if (!document.querySelector('.left-ribbon-long')) {
      leftRibbonLong = document.createElement('div');
      leftRibbonLong.className = 'ribbon-long left-ribbon-long';
      rightRibbonLong = document.createElement('div');
      rightRibbonLong.className = 'ribbon-long right-ribbon-long';
      document.body.appendChild(leftRibbonLong);
      document.body.appendChild(rightRibbonLong);
    } else {
      leftRibbonLong = document.querySelector('.left-ribbon-long');
      rightRibbonLong = document.querySelector('.right-ribbon-long');
    }
  }
  
  function updateLongRibbons() {
    if (!badge || badge.style.display !== 'block') return;
    
    const rect = badge.getBoundingClientRect();
    const scrollY = window.scrollY;
    
    // Показуємо стрічки тільки коли бейдж біля верхнього краю
    if (rect.top < 150) {
      badge.classList.add('near-top');
      
      if (leftRibbonLong && rightRibbonLong) {
        leftRibbonLong.style.display = 'block';
        rightRibbonLong.style.display = 'block';
        
        leftRibbonLong.style.left = (rect.left + 30) + 'px';
        leftRibbonLong.style.top = '0px';
        leftRibbonLong.style.height = Math.max(0, rect.top - 20) + 'px';
        
        rightRibbonLong.style.left = (rect.right - 70) + 'px';
        rightRibbonLong.style.top = '0px';
        rightRibbonLong.style.height = Math.max(0, rect.top - 20) + 'px';
      }
    } else {
      badge.classList.remove('near-top');
      if (leftRibbonLong) leftRibbonLong.style.display = 'none';
      if (rightRibbonLong) rightRibbonLong.style.display = 'none';
    }
  }
  
  function hideLongRibbons() {
    badge.classList.remove('near-top');
    if (leftRibbonLong) leftRibbonLong.style.display = 'none';
    if (rightRibbonLong) rightRibbonLong.style.display = 'none';
  }
  
  
  createLongRibbons();
  
  badge.style.display = 'none';
  badge.style.position = 'absolute';
  badge.style.left = '50%';
  badge.style.top = startTop + 'px';
  badge.style.transform = 'translateX(-50%)';
  
  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    badge.style.display = 'block';
    badge.style.left = '50%';
    badge.style.top = startTop + 'px';
    badge.style.transform = 'translateX(-50%)';
    badge.style.opacity = '1';
    
    
    let start = null;
    const duration = 1200;
    
    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      
      const bounce = (x) => {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (x < 1 / d1) {
          return n1 * x * x;
        } else if (x < 2 / d1) {
          return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
          return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
          return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
      };
      
      const y = startTop + (targetTop - startTop) * bounce(progress);
      badge.style.top = y + 'px';
      badge.style.transform = 'translateX(-50%)';
      
      updateLongRibbons();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
    
    if (inventorInfo) {
      inventorInfo.style.display = 'block';
      inventorInfo.style.opacity = '1';
    }
    
    hasMoved = false;
  });
  
  
  badge.addEventListener('mousedown', (e) => {
    e.preventDefault();
    
    const rect = badge.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    isDragging = true;
    hasMoved = false;
    badge.classList.add('dragging');
    badge.style.transition = 'none';
    
    function onMouseMove(e) {
      if (!isDragging) return;
      
      const newLeft = e.clientX - offsetX;
      const newTop = e.clientY - offsetY;
      
      badge.style.left = newLeft + 'px';
      badge.style.top = newTop + 'px';
      badge.style.transform = 'none';
      
      const rect = badge.getBoundingClientRect();
      if (Math.abs(rect.top - targetTop) > 10) {
        hasMoved = true;
      }
      
      updateLongRibbons();
    }
    
    function onMouseUp() {
      if (!isDragging) return;
      
      isDragging = false;
      badge.classList.remove('dragging');
      badge.style.transition = '';
      
      if (hasMoved) {
        
        let start = null;
        const duration = 800;
        
        function animateOut(timestamp) {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          
          const y = parseFloat(badge.style.top) + (progress * 200);
          const opacity = 1 - progress;
          
          badge.style.top = y + 'px';
          badge.style.opacity = opacity;
          badge.style.transform = `translateX(-50%) rotate(${progress * 10}deg) scale(${1 - progress * 0.5})`;
          
          updateLongRibbons();
          
          if (progress < 1) {
            requestAnimationFrame(animateOut);
          } else {
            badge.style.display = 'none';
            badge.style.opacity = '1';
            badge.style.transform = 'translateX(-50%)';
            badge.style.top = startTop + 'px';
            hideLongRibbons();
          }
        }
        
        requestAnimationFrame(animateOut);
      } else {
        // Повертаємо на місце
        badge.style.left = '50%';
        badge.style.top = targetTop + 'px';
        badge.style.transform = 'translateX(-50%)';
        updateLongRibbons();
      }
      
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  });
  
  
  window.addEventListener('scroll', () => {
    if (badge.style.display === 'block') {
      updateLongRibbons();
    }
  });
  
  
  window.addEventListener('resize', () => {
    if (badge.style.display === 'block') {
      updateLongRibbons();
    }
  });
})();

// ===== ENIAC =====
(function initEniac() {
  const launchBtn = document.getElementById('launchEniacBtn');
  const terminal = document.getElementById('eniacTerminal');
  const eniacStartScreen = document.getElementById('eniac-start-screen');
  const eniacInfoScreen = document.getElementById('eniac-info-screen');
  
  if (!launchBtn || !terminal || !eniacStartScreen || !eniacInfoScreen) return;
  
  launchBtn.addEventListener('click', () => {
    const messages = [
      getTranslation('eniac.terminal.initTubes'),
      getTranslation('eniac.terminal.processing'),
      getTranslation('eniac.terminal.trajectory'),
      getTranslation('eniac.terminal.memoryAddr'),
      getTranslation('eniac.terminal.ballisticTables'),
      getTranslation('eniac.terminal.running'),
      getTranslation('eniac.terminal.complete')
    ];
    
    terminal.innerHTML = '';
    launchBtn.disabled = true;
    launchBtn.style.opacity = '0.5';
    
    messages.forEach((msg, index) => {
      setTimeout(() => {
        const messageLine = document.createElement('div');
        messageLine.textContent = msg;
        messageLine.style.opacity = '0';
        messageLine.style.transition = 'opacity 0.3s';
        terminal.appendChild(messageLine);
        
        setTimeout(() => {
          messageLine.style.opacity = '1';
        }, 50);
        
        terminal.scrollTop = terminal.scrollHeight;
        
        if (index === messages.length - 1) {
          setTimeout(() => {
            eniacStartScreen.style.opacity = '0';
            
            setTimeout(() => {
              eniacStartScreen.style.display = 'none';
              eniacInfoScreen.style.display = 'block';
              eniacInfoScreen.classList.add('visible');
            }, 500);
          }, 1000);
        }
      }, index * 400);
    });
  });
})();

// ===== PC MODAL =====
(function initPcModal() {
  const pcInfoBtns = document.querySelectorAll('.pc-info-btn');
  const pcModal = document.getElementById('pc-info-modal');
  const pcModalBody = document.getElementById('pc-modal-body');
  const pcModalClose = document.querySelector('.pc-modal-close');
  
  if (!pcInfoBtns.length || !pcModal || !pcModalBody) return;
  
  const pcInfo = {
    ibm: {
      title: 'IBM PC',
      creator: { name: 'Don Estridge', role: 'Led the IBM PC development team', born: '1937', died: '1985' },
      specs: { price: '$1,565 (1981)', price_now: '$15,000 (2025)', weight: '~21 lbs (9.5 kg)', speed: '4.77 MHz', power: '63.5W' }
    },
    apple: {
      title: 'Apple II',
      creator: { name: 'Steve Wozniak', role: 'Co-founder of Apple', born: '1950', died: 'present' },
      specs: { price: '$1,298 (1977)', price_now: '$10,000 (2025)', weight: '~12 lbs (5.4 kg)', speed: '1 MHz', power: '~30W' }
    }
  };
  
  pcInfoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const pcType = btn.dataset.pc;
      const info = pcInfo[pcType];
      
      if (info) {
        pcModalBody.innerHTML = `
          <h3>${info.title}</h3>
          <div class="pc-modal-section">
            <h4>⚙️ Technical Specifications</h4>
            <ul>
              <li><strong>Price (1981):</strong> ${info.specs.price}</li>
              <li><strong>Price (2025):</strong> ${info.specs.price_now}</li>
              <li><strong>Weight:</strong> ${info.specs.weight}</li>
              <li><strong>Speed:</strong> ${info.specs.speed}</li>
              <li><strong>Power:</strong> ${info.specs.power}</li>
            </ul>
          </div>
          <div class="pc-modal-section">
            <h4>👤 Creator</h4>
            <p><strong>${info.creator.name}</strong></p>
            <p>${info.creator.role}</p>
            <p>📅 ${info.creator.born} - ${info.creator.died}</p>
          </div>
        `;
        
        pcModal.classList.remove('hidden');
      }
    });
  });
  
  if (pcModalClose) {
    pcModalClose.addEventListener('click', () => {
      pcModal.classList.add('hidden');
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === pcModal) {
      pcModal.classList.add('hidden');
    }
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !pcModal.classList.contains('hidden')) {
      pcModal.classList.add('hidden');
    }
  });
})();

// ===== INTERNET DIAL-UP =====
(function initInternet() {
  const connectBtn = document.getElementById('connectBtn');
  const progressBar = document.getElementById('dialupProgress');
  const internetStartScreen = document.getElementById('internet-start-screen');
  const internetInfoScreen = document.getElementById('internet-info-screen');
  
  if (!connectBtn || !progressBar || !internetStartScreen || !internetInfoScreen) return;
  
  connectBtn.addEventListener('click', () => {
    let progress = 0;
    progressBar.style.width = '0%';
    connectBtn.disabled = true;
    connectBtn.style.opacity = '0.5';
    
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = progress + '%';
      
      if (progress >= 100) {
        clearInterval(interval);
        
        setTimeout(() => {
          internetStartScreen.style.opacity = '0';
          
          setTimeout(() => {
            internetStartScreen.style.display = 'none';
            internetInfoScreen.style.display = 'block';
            internetInfoScreen.classList.add('visible');
          }, 500);
        }, 500);
      }
    }, 50);
  });
})();

// ===== MOBILE & CLOUD - ВИПРАВЛЕНО =====
(function initMobile() {
  const mobileLaunchBtn = document.getElementById('launchMobileBtn');
  const mobileStartScreen = document.getElementById('mobile-start-screen');
  const mobileInfoScreen = document.getElementById('mobile-info-screen');
  const mobileLoading = document.getElementById('mobileLoading');
  
  if (!mobileLaunchBtn || !mobileStartScreen || !mobileInfoScreen) return;
  
  mobileLaunchBtn.addEventListener('click', () => {
   
    mobileLoading.style.opacity = '1';
    mobileLaunchBtn.disabled = true;
    mobileLaunchBtn.style.opacity = '0.5';
    
    let dots = 0;
    const loadingInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      mobileLoading.innerHTML = 'Loading' + '.'.repeat(dots);
    }, 300);
    
    
    setTimeout(() => {
      clearInterval(loadingInterval);
      mobileLoading.style.opacity = '0';
      
      
      mobileStartScreen.style.transition = 'opacity 0.5s';
      mobileStartScreen.style.opacity = '0';
      
      setTimeout(() => {
        mobileStartScreen.style.display = 'none';
        mobileInfoScreen.style.display = 'block';
        mobileInfoScreen.classList.add('visible');
      }, 500);
    }, 2000);
  });
})();

// ===== AI ROBOT =====
(function initAiRobot() {
  const activateAiBtn = document.getElementById('activateAiBtn');
  const aiStartScreen = document.getElementById('ai-start-screen');
  const aiInfoScreen = document.getElementById('ai-info-screen');
  const aiLoading = document.getElementById('aiLoading');
  const aiCreatorMoreBtn = document.getElementById('aiCreatorMoreBtn');
  const aiCreatorModal = document.getElementById('ai-creator-modal');
  const aiCreatorModalClose = document.querySelector('.ai-creator-modal-close');
  
  if (!activateAiBtn || !aiStartScreen || !aiInfoScreen) return;
  
  let robotInitialized = false;
  let mouseX = 0;
  let robotGroup = null;
  let scene = null;
  let camera = null;
  let renderer = null;
  let animationFrame = null;
  
  // Функція створення робота
  function createSimpleRobot() {
    const aiRobotCanvas = document.getElementById('ai-robot-canvas');
    if (!aiRobotCanvas) return null;
    
    const container = aiRobotCanvas.parentElement;
    const width = container ? container.clientWidth : 400;
    const height = container ? container.clientHeight : 400;
    
    aiRobotCanvas.width = width;
    aiRobotCanvas.height = height;
    
    scene = new THREE.Scene();
    scene.background = null;
    
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 5);
    camera.lookAt(0, 1.2, 0);
    
    renderer = new THREE.WebGLRenderer({ 
      canvas: aiRobotCanvas, 
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(1);
    
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(2, 3, 4);
    scene.add(mainLight);
    
    robotGroup = new THREE.Group();
    
    // Тіло
    const torsoGeo = new THREE.BoxGeometry(1.2, 1.5, 0.8);
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0x3a6ea5 });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.y = 0.9;
    robotGroup.add(torso);
    
    // Голова
    const headGeo = new THREE.SphereGeometry(0.4, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffaa00 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.9, 0);
    robotGroup.add(head);
    
    // Очі
    const eyeGeo = new THREE.SphereGeometry(0.1, 6);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.15, 1.95, 0.35);
    robotGroup.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.15, 1.95, 0.35);
    robotGroup.add(rightEye);
    
    // Зіниці
    const pupilGeo = new THREE.SphereGeometry(0.05, 4);
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.15, 1.95, 0.45);
    robotGroup.add(leftPupil);
    
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0.15, 1.95, 0.45);
    robotGroup.add(rightPupil);
    
    // Руки
    const armGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x4a7eb5 });
    
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.8, 1.1, 0);
    robotGroup.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.8, 1.1, 0);
    robotGroup.add(rightArm);
    
    // Ноги
    const legGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a6ea5 });
    
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.3, 0.1, 0);
    robotGroup.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.3, 0.1, 0);
    robotGroup.add(rightLeg);
    
    scene.add(robotGroup);
    
    return { scene, camera, renderer, robotGroup };
  }
  
  // Анімація робота
  function animateRobot() {
    if (!robotGroup || !scene || !camera || !renderer) return;
    
    function animate() {
      if (robotGroup) {
        robotGroup.rotation.y += (mouseX - robotGroup.rotation.y) * 0.05;
      }
      
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
  }
  
  // Відстеження миші
  window.addEventListener('mousemove', (e) => {
    if (robotGroup) {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    }
  });
  
  // Активація AI
  activateAiBtn.addEventListener('click', () => {
    aiLoading.style.opacity = '1';
    aiLoading.innerHTML = 'Loading';
    activateAiBtn.disabled = true;
    activateAiBtn.style.opacity = '0.5';
    
    setTimeout(() => {
      aiLoading.innerHTML = '';
      aiLoading.style.opacity = '0';
      
      aiStartScreen.style.transition = 'opacity 0.5s';
      aiStartScreen.style.opacity = '0';
      
      setTimeout(() => {
        aiStartScreen.style.display = 'none';
        aiInfoScreen.style.display = 'block';
        aiInfoScreen.classList.add('visible');
        
        if (!robotInitialized) {
          const result = createSimpleRobot();
          if (result) {
            robotGroup = result.robotGroup;
            scene = result.scene;
            camera = result.camera;
            renderer = result.renderer;
            animateRobot();
            robotInitialized = true;
          }
        }
      }, 500);
    }, 800);
  });
  
  // Модальне вікно для творця
  if (aiCreatorMoreBtn && aiCreatorModal && aiCreatorModalClose) {
    aiCreatorMoreBtn.addEventListener('click', () => {
      aiCreatorModal.classList.remove('hidden');
    });
    
    aiCreatorModalClose.addEventListener('click', () => {
      aiCreatorModal.classList.add('hidden');
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === aiCreatorModal) {
        aiCreatorModal.classList.add('hidden');
      }
    });
  }
})();

// ===== REPLAY =====
const replayBtn = document.getElementById('replayBtn');
if (replayBtn) {
  replayBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      location.reload();
    }, 1000);
  });
}

// ===== START JOURNEY =====
const startJourneyBtn = document.querySelector('.start-journey');
if (startJourneyBtn) {
  startJourneyBtn.addEventListener('click', () => {
    document.getElementById('mechanical').scrollIntoView({ behavior: 'smooth' });
  });
}
