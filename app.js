// Application Data
const appData = {
  currentUser: null,
  weatherData: [
    {"day": "Today", "temp": "28°C", "condition": "Sunny", "humidity": "65%", "rainfall": "0mm", "wind": "12 km/h", "pressure": "1013 hPa", "alerts": [], "advisory": "Good weather for field work"},
    {"day": "Tomorrow", "temp": "30°C", "condition": "Partly Cloudy", "humidity": "60%", "rainfall": "0mm", "wind": "15 km/h", "pressure": "1010 hPa", "alerts": [], "advisory": "Moderate irrigation recommended"},
    {"day": "Day 3", "temp": "26°C", "condition": "Heavy Rain", "humidity": "80%", "rainfall": "25mm", "wind": "8 km/h", "pressure": "1008 hPa", "alerts": ["Heavy Rainfall Alert"], "advisory": "Postpone irrigation - heavy rainfall expected"},
    {"day": "Day 4", "temp": "25°C", "condition": "Cloudy", "humidity": "75%", "rainfall": "2mm", "wind": "10 km/h", "pressure": "1012 hPa", "alerts": [], "advisory": "Check drainage after yesterday's rain"},
    {"day": "Day 5", "temp": "42°C", "condition": "Sunny", "humidity": "58%", "rainfall": "0mm", "wind": "14 km/h", "pressure": "1015 hPa", "alerts": ["Heatwave Alert"], "advisory": "Extreme heat - provide shade and increase irrigation frequency"}
  ],
  soilData: {
    moisture: 65,
    ph: 6.8,
    nitrogen: 45,
    phosphorus: 32,
    potassium: 28,
    organicMatter: 2.5,
    soilType: "Loamy"
  },
  marketPrices: [
    {"crop": "Wheat", "price": "₹2,150/quintal", "change": "+2.5%", "trend": "up"},
    {"crop": "Rice", "price": "₹1,950/quintal", "change": "-1.2%", "trend": "down"},
    {"crop": "Cotton", "price": "₹6,200/quintal", "change": "+5.8%", "trend": "up"},
    {"crop": "Sugarcane", "price": "₹350/quintal", "change": "+0.5%", "trend": "up"},
    {"crop": "Onion", "price": "₹25/kg", "change": "-3.2%", "trend": "down"},
    {"crop": "Potato", "price": "₹18/kg", "change": "+1.8%", "trend": "up"}
  ],
  governmentSchemes: [
    {
      "name": "PM-KISAN",
      "description": "Direct income support to farmers",
      "benefit": "₹6,000 per year in 3 installments",
      "eligibility": "All landholding farmers"
    },
    {
      "name": "Kisan Credit Card",
      "description": "Subsidized agricultural loans",
      "benefit": "4% interest rate with timely repayment",
      "eligibility": "Farmers with valid land records"
    },
    {
      "name": "PM-KUSUM",
      "description": "Solar pump subsidies",
      "benefit": "Up to 60% subsidy on solar installations",
      "eligibility": "Individual farmers and cooperatives"
    },
    {
      "name": "Agricultural Infrastructure Fund",
      "description": "Infrastructure development loans",
      "benefit": "3% interest subvention up to ₹2 crore",
      "eligibility": "Farmers, FPOs, cooperatives"
    }
  ],
  storageOptions: [
    {
      "name": "StarAgri Warehouse",
      "location": "Punjab, Haryana",
      "capacity": "5000 MT",
      "facilities": "Climate controlled, fumigation",
      "rate": "₹2.50/quintal/month",
      "temperature": "15-18°C",
      "humidity": "60-65%"
    },
    {
      "name": "SLCM Storage",
      "location": "Pan-India",
      "capacity": "Variable",
      "facilities": "WDRA certified, quality testing",
      "rate": "₹2.80/quintal/month",
      "temperature": "12-15°C",
      "humidity": "55-60%"
    },
    {
      "name": "Local Cooperative",
      "location": "District level",
      "capacity": "1000-2000 MT",
      "facilities": "Basic storage, local access",
      "rate": "₹2.00/quintal/month",
      "temperature": "Ambient",
      "humidity": "65-70%"
    }
  ],
  marketplaceProducts: [
    {
      "farmer": "Raj Kumar",
      "product": "Organic Wheat",
      "quantity": "500 quintals",
      "price": "₹2,200/quintal",
      "location": "Haryana",
      "quality": "A grade",
      "harvestDate": "March 2025"
    },
    {
      "farmer": "Sunita Devi",
      "product": "Fresh Onions",
      "quantity": "200 quintals",
      "price": "₹24/kg",
      "location": "Maharashtra",
      "quality": "Premium",
      "harvestDate": "February 2025"
    },
    {
      "farmer": "Mohan Singh",
      "product": "Basmati Rice",
      "quantity": "300 quintals",
      "price": "₹4,500/quintal",
      "location": "Punjab",
      "quality": "Export quality",
      "harvestDate": "November 2024"
    }
  ],
  cropData: [
    {
      "crop": "Wheat",
      "area": "10 acres",
      "stage": "Harvesting",
      "expectedYield": "25 quintals/acre",
      "healthStatus": "Excellent",
      "sowingDate": "Nov 15, 2024",
      "harvestDate": "Apr 10, 2025"
    },
    {
      "crop": "Cotton",
      "area": "15 acres",
      "stage": "Flowering",
      "expectedYield": "18 quintals/acre",
      "healthStatus": "Good",
      "sowingDate": "May 20, 2024",
      "harvestDate": "Oct 15, 2024"
    },
    {
      "crop": "Sugarcane",
      "area": "8 acres",
      "stage": "Growing",
      "expectedYield": "400 quintals/acre",
      "healthStatus": "Fair",
      "sowingDate": "Feb 10, 2024",
      "harvestDate": "Jan 20, 2025"
    }
  ],
  pestDetections: [
    {
      "date": "Sep 15, 2025",
      "crop": "Wheat",
      "issue": "Aphid Infestation",
      "confidence": "92%",
      "treatment": "Apply neem-based pesticide",
      "severity": "Medium"
    },
    {
      "date": "Sep 12, 2025", 
      "crop": "Cotton",
      "issue": "Bollworm",
      "confidence": "89%",
      "treatment": "Use pheromone traps and IPM",
      "severity": "High"
    }
  ],
  personalizedRecommendations: [
    {
      "type": "Fertilizer",
      "crop": "Wheat",
      "recommendation": "Apply 50kg Urea per acre during tillering stage",
      "timing": "Next week",
      "reason": "Based on soil test and growth stage"
    },
    {
      "type": "Irrigation",
      "crop": "Cotton",
      "recommendation": "Irrigate 4-5 inches this week",
      "timing": "Within 3 days",
      "reason": "Flowering stage requires adequate water"
    }
  ],
  activeAlerts: [
    {
      "type": "Weather",
      "message": "Heavy rainfall expected in next 48 hours",
      "priority": "High",
      "date": "Sep 18, 2025",
      "action": "Secure harvested crops, check drainage"
    },
    {
      "type": "Pest",
      "message": "Bollworm activity reported in nearby areas",
      "priority": "Medium", 
      "date": "Sep 17, 2025",
      "action": "Monitor cotton fields closely"
    },
    {
      "type": "Market",
      "message": "Wheat prices increasing by 8% this week",
      "priority": "Low",
      "date": "Sep 16, 2025", 
      "action": "Consider selling stored wheat"
    }
  ],
  marketplaceConnections: [
    {
      "type": "Buyer",
      "name": "ABC Food Processing",
      "location": "Delhi",
      "interestedIn": "Wheat, Rice",
      "contact": "buyer1@abc.com"
    },
    {
      "type": "Cooperative", 
      "name": "Punjab Farmer Cooperative",
      "location": "Punjab",
      "services": "Storage, Marketing, Input supply",
      "contact": "coop@punjabfarmers.org"
    },
    {
      "type": "Supplier",
      "name": "AgriTech Supplies",
      "location": "Haryana", 
      "products": "Seeds, Fertilizers, Equipment",
      "contact": "sales@agritech.com"
    }
  ],
  farmerListings: [
    {
      "id": 1,
      "farmer": "Raj Kumar",
      "crop": "Wheat",
      "variety": "HD-2967",
      "quantity": "500 quintals",
      "price": "₹2,200/quintal",
      "location": "Haryana",
      "quality": "A grade",
      "harvestDate": "March 2025",
      "contact": "+91-9876543210",
      "certification": "Organic"
    },
    {
      "id": 2,
      "farmer": "Sunita Devi",
      "crop": "Rice",
      "variety": "Basmati",
      "quantity": "300 quintals",
      "price": "₹4,500/quintal",
      "location": "Punjab",
      "quality": "Export quality",
      "harvestDate": "November 2024",
      "contact": "+91-9876543211",
      "certification": "FSSAI"
    },
    {
      "id": 3,
      "farmer": "Mohan Singh",
      "crop": "Cotton",
      "variety": "BT Cotton",
      "quantity": "200 quintals",
      "price": "₹6,200/quintal",
      "location": "Gujarat",
      "quality": "Premium",
      "harvestDate": "December 2024",
      "contact": "+91-9876543212",
      "certification": "GOTS"
    }
  ],
  communityForum: [
    {
      "id": 1,
      "title": "How to protect wheat from rust disease?",
      "author": "Farmer123",
      "date": "2025-01-15",
      "category": "Disease Control",
      "votes": 15,
      "answers": 3,
      "tags": ["wheat", "rust", "disease"]
    },
    {
      "id": 2,
      "title": "Best irrigation practices for cotton farming",
      "author": "CottonGrower",
      "date": "2025-01-14",
      "category": "Irrigation",
      "votes": 8,
      "answers": 5,
      "tags": ["cotton", "irrigation", "water"]
    },
    {
      "id": 3,
      "title": "Government subsidy for solar pumps",
      "author": "GreenFarmer",
      "date": "2025-01-13",
      "category": "Government Schemes",
      "votes": 12,
      "answers": 2,
      "tags": ["solar", "subsidy", "pumps"]
    }
  ],
  chatbotQueries: [
    {
      "query": "How to protect wheat from rust?",
      "answer": "To protect wheat from rust: 1) Use resistant varieties, 2) Apply fungicides like Propiconazole, 3) Ensure proper spacing for air circulation, 4) Remove infected plant debris, 5) Rotate crops regularly."
    },
    {
      "query": "When to irrigate cotton?",
      "answer": "Cotton irrigation schedule: 1) Critical stages: flowering and boll formation, 2) Water every 7-10 days during active growth, 3) Reduce frequency during maturity, 4) Monitor soil moisture at 6-inch depth."
    },
    {
      "query": "Best fertilizer for rice?",
      "answer": "Rice fertilizer recommendations: 1) NPK ratio 4:2:1, 2) Apply 120kg N, 60kg P2O5, 30kg K2O per hectare, 3) Split application: 50% at transplanting, 25% at tillering, 25% at panicle initiation."
    }
  ],
  priceForecasts: [
    {
      "crop": "Wheat",
      "currentPrice": 2150,
      "forecastPrice": 2300,
      "trend": "up",
      "confidence": 85,
      "factors": ["Low supply", "High demand", "Export orders"]
    },
    {
      "crop": "Rice",
      "currentPrice": 1950,
      "forecastPrice": 1800,
      "trend": "down",
      "confidence": 78,
      "factors": ["Good harvest", "Stock release", "Lower demand"]
    },
    {
      "crop": "Cotton",
      "currentPrice": 6200,
      "forecastPrice": 6500,
      "trend": "up",
      "confidence": 92,
      "factors": ["Textile demand", "Export potential", "Quality premium"]
    }
  ]
};

// Screen Manager
const ScreenManager = {
  showScreen: function(screenId) {
    console.log('Switching to screen:', screenId);
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      console.log('Screen switched to:', screenId);
    } else {
      console.error('Screen not found:', screenId);
    }
  }
};

// Modal Manager
const ModalManager = {
  showModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  },
  
  hideModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  },
  
  hideAllModals: function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.classList.add('hidden');
    });
    document.body.style.overflow = '';
  }
};

// Contact Form Manager
const ContactManager = {
  showContactForm: function() {
    console.log('Opening contact form modal');
    ModalManager.showModal('contactModal');
  },
  
  hideContactForm: function() {
    console.log('Closing contact form modal');
    ModalManager.hideModal('contactModal');
  },
  
  submitContactForm: function(formData) {
    console.log('Submitting contact form:', formData);
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission with loading
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }
    
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
      this.hideContactForm();
      this.showSuccessMessage();
      this.resetContactForm();
    }, 1500);
  },
  
  showSuccessMessage: function() {
    console.log('Showing success message');
    ModalManager.showModal('successModal');
  },
  
  hideSuccessMessage: function() {
    console.log('Hiding success message');
    ModalManager.hideModal('successModal');
  },
  
  resetContactForm: function() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.reset();
    }
  }
};

// Authentication Manager
const AuthManager = {
  register: function(userData) {
    console.log('Registering user:', userData);
    
    // Validate required fields
    if (!userData.userType || !userData.fullName || !userData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate registration
    appData.currentUser = {
      email: userData.email,
      name: userData.fullName,
      userType: userData.userType,
      phone: userData.phone,
      location: userData.location
    };
    
    // Show success message and redirect to dashboard
    alert('Registration successful! Welcome to SmartFarm360.');
    ScreenManager.showScreen('dashboard');
    ModuleManager.showModule('overview');
  },
  
  login: function(email, password) {
    console.log('Logging in user:', email);
    
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    
    // Simulate login
    appData.currentUser = {
      email: email,
      name: 'Demo User',
      userType: 'farmer'
    };
    
    ScreenManager.showScreen('dashboard');
    ModuleManager.showModule('overview');
  },
  
  logout: function() {
    console.log('Logging out user');
    appData.currentUser = null;
    ScreenManager.showScreen('welcome');
  }
};

// Feature Card Navigation
const FeatureCardManager = {
  setupFeatureCards: function() {
    // Add click handlers to feature cards to navigate to dashboard modules
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
      card.addEventListener('click', function() {
        const cardTitle = this.querySelector('h3').textContent;
        console.log('Feature card clicked:', cardTitle);
        
        // First login/register if not authenticated
        if (!appData.currentUser) {
          ScreenManager.showScreen('login');
          return;
        }
        
        // Map feature cards to modules
        let moduleId = 'overview';
        switch (cardTitle) {
          case 'Crop Management':
            moduleId = 'crops';
            break;
          case 'Real-Time Advisory':
            moduleId = 'advisory';
            break;
          case 'Storage Solutions':
            moduleId = 'storage';
            break;
          case 'Financial Support':
            moduleId = 'finance';
            break;
          case 'Direct Marketplace':
            moduleId = 'marketplace';
            break;
          default:
            moduleId = 'overview';
        }
        
        ScreenManager.showScreen('dashboard');
        ModuleManager.showModule(moduleId);
      });
      
      // Add hover effect
      card.style.cursor = 'pointer';
    });
  }
};

// Module Manager (keeping all existing functionality)
const ModuleManager = {
  showModule: function(moduleId) {
    console.log('Loading module:', moduleId);
    
    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-module="${moduleId}"]`);
    if (activeNavItem) {
      activeNavItem.classList.add('active');
    }
    
    // Load module content
    const moduleContent = document.getElementById('module-content');
    
    let content = '';
    switch (moduleId) {
      case 'overview':
        content = this.renderOverview();
        break;
      case 'crops':
        content = this.renderCrops();
        break;
      case 'advisory':
        content = this.renderAdvisory();
        break;
      case 'storage':
        content = this.renderStorage();
        break;
      case 'finance':
        content = this.renderFinance();
        break;
      case 'marketplace':
        content = this.renderMarketplace();
        break;
      case 'pest-detection':
        content = this.renderPestDetection();
        break;
      case 'personalized-advisory':
        content = this.renderPersonalizedAdvisory();
        break;
      case 'soil-health':
        content = this.renderSoilHealth();
        break;
      case 'alerts':
        content = this.renderAlerts();
        break;
      case 'marketplace-integration':
        content = this.renderMarketplaceIntegration();
        break;
      case 'chatbot':
        content = this.renderChatbot();
        break;
      case 'community':
        content = this.renderCommunity();
        break;
      case 'price-forecast':
        content = this.renderPriceForecast();
        break;
      default:
        content = this.renderOverview();
    }
    
    if (moduleContent) {
      moduleContent.innerHTML = content;
    }
  },
  
  renderOverview: function() {
    const highAlerts = appData.activeAlerts.filter(alert => alert.priority === 'High').length;
    const totalCrops = appData.cropData.length;
    const avgYield = Math.round(appData.cropData.reduce((sum, crop) => sum + parseInt(crop.expectedYield), 0) / totalCrops);
    
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">📊 Dashboard Overview</h1>
          <p class="module-description">Your farming operations at a glance</p>
        </div>
        
        <div class="grid grid-4">
          <div class="metric-card">
            <div class="metric-value">${totalCrops}</div>
            <p class="metric-label">Active Crops</p>
          </div>
          
          <div class="metric-card">
            <div class="metric-value">${avgYield}</div>
            <p class="metric-label">Avg Yield (quintals/acre)</p>
          </div>
          
          <div class="metric-card">
            <div class="metric-value">${highAlerts}</div>
            <p class="metric-label">High Priority Alerts</p>
          </div>
          
          <div class="metric-card">
            <div class="metric-value">₹2,150</div>
            <p class="metric-label">Avg Market Price</p>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🌤️ Weather Forecast</h3>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Temperature</th>
                    <th>Condition</th>
                    <th>Rainfall</th>
                  </tr>
                </thead>
                <tbody>
                  ${appData.weatherData.map(weather => `
                    <tr>
                      <td>${weather.day}</td>
                      <td>${weather.temp}</td>
                      <td>${weather.condition}</td>
                      <td>${weather.rainfall}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📈 Market Prices</h3>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  ${appData.marketPrices.slice(0, 4).map(market => `
                    <tr>
                      <td>${market.crop}</td>
                      <td>${market.price}</td>
                      <td style="color: ${market.trend === 'up' ? 'var(--color-success)' : 'var(--color-error)'};">${market.change}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderCrops: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🌾 Crop Management</h1>
          <p class="module-description">Track crop progress, plan seasons, and monitor health</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>Current Crop Status</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Area</th>
                  <th>Stage</th>
                  <th>Expected Yield</th>
                  <th>Health Status</th>
                  <th>Harvest Date</th>
                </tr>
              </thead>
              <tbody>
                ${appData.cropData.map(crop => `
                  <tr>
                    <td>${crop.crop}</td>
                    <td>${crop.area}</td>
                    <td>${crop.stage}</td>
                    <td>${crop.expectedYield}</td>
                    <td><span class="status-badge status-badge--${crop.healthStatus === 'Excellent' ? 'success' : crop.healthStatus === 'Good' ? 'info' : 'warning'}">${crop.healthStatus}</span></td>
                    <td>${crop.harvestDate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="grid grid-3">
          ${appData.cropData.map(crop => `
            <div class="card">
              <div class="card__body">
                <h4>${crop.crop}</h4>
                <p><strong>Area:</strong> ${crop.area}</p>
                <p><strong>Sowing Date:</strong> ${crop.sowingDate}</p>
                <p><strong>Current Stage:</strong> ${crop.stage}</p>
                <p><strong>Health:</strong> <span class="status-badge status-badge--${crop.healthStatus === 'Excellent' ? 'success' : crop.healthStatus === 'Good' ? 'info' : 'warning'}">${crop.healthStatus}</span></p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },
  
  renderAdvisory: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">📡 Real-Time Advisory</h1>
          <p class="module-description">Get weather updates, market prices, and expert agricultural advice</p>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🌤️ 5-Day Weather Forecast</h3>
              <div class="grid" style="gap: 12px;">
                ${appData.weatherData.map(weather => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); ${weather.alerts.length > 0 ? 'border-left: 4px solid var(--color-error);' : ''}">
                    <div>
                      <strong>${weather.day}</strong><br>
                      <small>${weather.condition}</small>
                      ${weather.alerts.length > 0 ? `<br><small style="color: var(--color-error); font-weight: bold;">⚠️ ${weather.alerts[0]}</small>` : ''}
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">${weather.temp}</div>
                      <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Rain: ${weather.rainfall}</div>
                      <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Wind: ${weather.wind}</div>
                    </div>
                  </div>
                  ${weather.advisory ? `
                    <div style="padding: 8px 12px; background: var(--color-bg-3); border-radius: 4px; margin-top: 4px; font-size: 12px; color: var(--color-text);">
                      💡 <strong>Advisory:</strong> ${weather.advisory}
                    </div>
                  ` : ''}
                `).join('')}
              </div>
              <button class="btn btn--primary btn--sm" onclick="WeatherAPI.getLocation().then(loc => WeatherAPI.getForecast(loc.lat, loc.lon))" style="margin-top: 12px;">Refresh Weather</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📊 Market Price Trends</h3>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Current Price</th>
                    <th>24h Change</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  ${appData.marketPrices.map(market => `
                    <tr>
                      <td>${market.crop}</td>
                      <td>${market.price}</td>
                      <td style="color: ${market.trend === 'up' ? 'var(--color-success)' : 'var(--color-error)'};">${market.change}</td>
                      <td>${market.trend === 'up' ? '📈' : '📉'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>💡 Expert Recommendations</h3>
            <div class="grid grid-2">
              <div style="padding: 16px; background: var(--color-bg-3); border-radius: var(--radius-base); border-left: 4px solid var(--color-success);">
                <h4>Irrigation Advisory</h4>
                <p>Based on weather forecast, moderate irrigation recommended for cotton and sugarcane fields in the next 3 days.</p>
              </div>
              
              <div style="padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base); border-left: 4px solid var(--color-warning);">
                <h4>Pest Alert</h4>
                <p>Monitor wheat crops for aphid activity. Apply preventive measures if population exceeds threshold levels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderStorage: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🏪 Storage Solutions</h1>
          <p class="module-description">Find warehouses, track storage capacity, and manage quality</p>
        </div>
        
        <div class="grid grid-3">
          ${appData.storageOptions.map(storage => `
            <div class="card">
              <div class="card__body">
                <h3>${storage.name}</h3>
                <p><strong>Location:</strong> ${storage.location}</p>
                <p><strong>Capacity:</strong> ${storage.capacity}</p>
                <p><strong>Rate:</strong> ${storage.rate}</p>
                <p><strong>Temperature:</strong> ${storage.temperature}</p>
                <p><strong>Humidity:</strong> ${storage.humidity}</p>
                <p><strong>Facilities:</strong> ${storage.facilities}</p>
                <button class="btn btn--primary btn--sm" style="margin-top: 12px;">Book Storage</button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>📊 Storage Utilization</h3>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">1,250</div>
                <p class="metric-label">Total Stored (MT)</p>
              </div>
              
              <div class="metric-card">
                <div class="metric-value">75%</div>
                <p class="metric-label">Capacity Used</p>
              </div>
              
              <div class="metric-card">
                <div class="metric-value">3</div>
                <p class="metric-label">Active Bookings</p>
              </div>
              
              <div class="metric-card">
                <div class="metric-value">₹18,750</div>
                <p class="metric-label">Monthly Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderFinance: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">💰 Financial Support</h1>
          <p class="module-description">Access government schemes, loans, subsidies, and insurance</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>🏛️ Government Schemes</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Scheme Name</th>
                  <th>Description</th>
                  <th>Benefit</th>
                  <th>Eligibility</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${appData.governmentSchemes.map(scheme => `
                  <tr>
                    <td><strong>${scheme.name}</strong></td>
                    <td>${scheme.description}</td>
                    <td>${scheme.benefit}</td>
                    <td>${scheme.eligibility}</td>
                    <td><button class="btn btn--primary btn--sm">Apply</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="grid grid-3">
          <div class="card">
            <div class="card__body">
              <h3>💳 Loan Status</h3>
              <p><strong>Active Loans:</strong> 2</p>
              <p><strong>Total Amount:</strong> ₹5,00,000</p>
              <p><strong>Monthly EMI:</strong> ₹45,000</p>
              <p><strong>Next Payment:</strong> Oct 15, 2025</p>
              <button class="btn btn--outline btn--sm">View Details</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>🛡️ Insurance</h3>
              <p><strong>Crop Insurance:</strong> Active</p>
              <p><strong>Coverage:</strong> ₹10,00,000</p>
              <p><strong>Premium Paid:</strong> ₹25,000</p>
              <p><strong>Validity:</strong> March 2026</p>
              <button class="btn btn--outline btn--sm">Renew Policy</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>💰 Subsidies</h3>
              <p><strong>Received This Year:</strong> ₹75,000</p>
              <p><strong>Pending Applications:</strong> 1</p>
              <p><strong>PM-KISAN Status:</strong> Approved</p>
              <p><strong>Next Installment:</strong> Dec 2025</p>
              <button class="btn btn--outline btn--sm">Track Status</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderMarketplace: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🛒 Direct Marketplace</h1>
          <p class="module-description">Sell directly to buyers, cooperatives, and consumers</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>🌾 Farmer Listings</h3>
            <div style="margin-bottom: 16px;">
              <div style="display: flex; gap: 12px; margin-bottom: 12px;">
                <input type="text" placeholder="Search crops..." style="flex: 1; padding: 8px; border: 1px solid var(--color-border); border-radius: 4px;">
                <select style="padding: 8px; border: 1px solid var(--color-border); border-radius: 4px;">
                  <option>All Locations</option>
                  <option>Haryana</option>
                  <option>Punjab</option>
                  <option>Gujarat</option>
                </select>
                <button class="btn btn--primary btn--sm">Search</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Farmer</th>
                  <th>Crop & Variety</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Location</th>
                  <th>Quality</th>
                  <th>Certification</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${appData.farmerListings.map(listing => `
                  <tr>
                    <td><strong>${listing.farmer}</strong></td>
                    <td>${listing.crop} (${listing.variety})</td>
                    <td>${listing.quantity}</td>
                    <td><strong>${listing.price}</strong></td>
                    <td>${listing.location}</td>
                    <td><span class="status-badge status-badge--success">${listing.quality}</span></td>
                    <td><span class="status-badge status-badge--info">${listing.certification}</span></td>
                    <td>${listing.contact}</td>
                    <td>
                      <button class="btn btn--primary btn--sm" onclick="contactFarmer('${listing.farmer}', '${listing.contact}')">Contact</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>📈 My Listings</h3>
              <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <h4>No Active Listings</h4>
                <p>Start selling your produce by creating your first listing</p>
                <button class="btn btn--primary">Create Listing</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>💼 Recent Orders</h3>
              <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <h4>No Orders Yet</h4>
                <p>Your orders will appear here once you start trading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderPestDetection: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🔍 Pest & Disease Detection</h1>
          <p class="module-description">Upload crop images for AI-powered analysis and treatment suggestions</p>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>📸 Upload Crop Image</h3>
              <div class="file-upload" onclick="document.getElementById('cropImage').click();">
                <div class="file-upload-icon">📷</div>
                <div class="file-upload-text">Click to upload crop image</div>
                <div class="file-upload-hint">Supports JPG, PNG up to 5MB</div>
                <input type="file" id="cropImage" style="display: none;" accept="image/*">
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>⚡ Quick Analysis</h3>
              <p>Upload a clear image of affected plant parts for accurate detection. Our AI model can identify:</p>
              <ul style="margin: 16px 0; padding-left: 20px;">
                <li>Common pests (aphids, bollworms, etc.)</li>
                <li>Fungal diseases</li>
                <li>Nutrient deficiencies</li>
                <li>Bacterial infections</li>
              </ul>
              <button class="btn btn--secondary btn--full-width" onclick="PestDetection.showDemo()">View Demo Analysis</button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>📋 Detection History</h3>
            <div class="alert-list">
              ${appData.pestDetections.map(detection => `
                <div class="detection-result">
                  <div class="detection-header">
                    <h4>${detection.issue} - ${detection.crop}</h4>
                    <span class="confidence-badge">Confidence: ${detection.confidence}</span>
                  </div>
                  <div class="detection-details">
                    <div class="detection-field">
                      <span class="field-label">Date:</span>
                      <span class="field-value">${detection.date}</span>
                    </div>
                    <div class="detection-field">
                      <span class="field-label">Severity:</span>
                      <span class="field-value">
                        <span class="status-badge status-badge--${detection.severity === 'High' ? 'error' : detection.severity === 'Medium' ? 'warning' : 'info'}">${detection.severity}</span>
                      </span>
                    </div>
                    <div class="detection-field">
                      <span class="field-label">Treatment:</span>
                      <span class="field-value">${detection.treatment}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderPersonalizedAdvisory: function() {
    // Generate soil recommendations
    SoilHealth.generateRecommendations();
    
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">📋 Personalized Advisory</h1>
          <p class="module-description">Tailored recommendations for fertilizers, irrigation, and crop rotation</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>🎯 Current Recommendations</h3>
            <div class="alert-list">
              ${(appData.personalizedRecommendations || []).map(rec => `
                <div class="alert-item alert-item--low">
                  <div class="alert-header">
                    <span class="alert-type">${rec.type} - ${rec.crop}</span>
                    <span class="alert-date">Due: ${rec.timing}</span>
                  </div>
                  <div class="alert-message">${rec.recommendation}</div>
                  <div class="alert-action">Reason: ${rec.reason}</div>
                </div>
              `).join('')}
              ${(appData.soilRecommendations || []).map(rec => `
                <div class="alert-item alert-item--${rec.priority.toLowerCase()}">
                  <div class="alert-header">
                    <span class="alert-type">${rec.type}</span>
                    <span class="alert-date">Due: ${rec.timing}</span>
            </div>
                  <div class="alert-message">${rec.message}</div>
                  <div class="alert-action">Priority: ${rec.priority}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🌱 Soil Health Monitoring</h3>
              <div class="grid" style="gap: 16px;">
                <div class="form-group">
                  <label class="form-label">Soil Type</label>
                  <select class="form-control" id="soilType" onchange="updateSoilData()">
                    <option value="Clay" ${appData.soilData.soilType === 'Clay' ? 'selected' : ''}>Clay</option>
                    <option value="Sandy" ${appData.soilData.soilType === 'Sandy' ? 'selected' : ''}>Sandy</option>
                    <option value="Loamy" ${appData.soilData.soilType === 'Loamy' ? 'selected' : ''}>Loamy</option>
                    <option value="Silty" ${appData.soilData.soilType === 'Silty' ? 'selected' : ''}>Silty</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label class="form-label">pH Level</label>
                  <input type="number" class="form-control" id="soilPH" value="${appData.soilData.ph}" min="4" max="9" step="0.1" onchange="updateSoilData()">
                </div>
                
                <div class="form-group">
                  <label class="form-label">Moisture (%)</label>
                  <input type="number" class="form-control" id="soilMoisture" value="${appData.soilData.moisture}" min="0" max="100" step="1" onchange="updateSoilData()">
                </div>
                
                <div class="form-group">
                  <label class="form-label">Nitrogen (kg/acre)</label>
                  <input type="number" class="form-control" id="soilNitrogen" value="${appData.soilData.nitrogen}" min="0" max="100" step="1" onchange="updateSoilData()">
                </div>
                
                <div class="form-group">
                  <label class="form-label">Phosphorus (kg/acre)</label>
                  <input type="number" class="form-control" id="soilPhosphorus" value="${appData.soilData.phosphorus}" min="0" max="100" step="1" onchange="updateSoilData()">
                </div>
                
                <div class="form-group">
                  <label class="form-label">Potassium (kg/acre)</label>
                  <input type="number" class="form-control" id="soilPotassium" value="${appData.soilData.potassium}" min="0" max="100" step="1" onchange="updateSoilData()">
                </div>
                
                <div class="form-group">
                  <label class="form-label">Organic Matter (%)</label>
                  <input type="number" class="form-control" id="soilOrganicMatter" value="${appData.soilData.organicMatter}" min="0" max="10" step="0.1" onchange="updateSoilData()">
                </div>
                
                <button type="button" class="btn btn--primary" onclick="updateSoilData()">Update Soil Data</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>🔄 Crop Rotation Planner</h3>
              <div style="margin-bottom: 16px;">
                <h4>Current Season: Rabi 2024-25</h4>
                <p>Active Crops: Wheat, Mustard</p>
              </div>
              
              <div style="margin-bottom: 16px;">
                <h4>Recommended Next Season:</h4>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li>Cotton (Kharif 2025)</li>
                  <li>Maize (Kharif 2025)</li>
                  <li>Sugarcane (Year-long)</li>
                </ul>
              </div>
              
              <div style="margin-bottom: 16px;">
                <h4>Soil-Based Recommendations:</h4>
                <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">
                  Based on your soil analysis, consider these crops for optimal yield:
                </p>
                <ul style="margin: 8px 0; padding-left: 20px; font-size: var(--font-size-sm);">
                  <li>For ${appData.soilData.soilType} soil: Rice, Wheat, Sugarcane</li>
                  <li>pH ${appData.soilData.ph}: Suitable for most crops</li>
                  <li>Moisture ${appData.soilData.moisture}%: ${appData.soilData.moisture < 50 ? 'Consider irrigation' : 'Good moisture level'}</li>
                </ul>
              </div>
              
              <button class="btn btn--outline btn--full-width" onclick="generateRotationPlan()">Generate Rotation Plan</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderSoilHealth: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🌱 Soil Health Monitoring</h1>
          <p class="module-description">Monitor soil conditions, nutrients, and health metrics in real-time</p>
        </div>
        
        <div class="soil-metrics">
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.moisture}%</div>
            <p class="soil-metric-label">Moisture</p>
          </div>
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.ph}</div>
            <p class="soil-metric-label">pH Level</p>
          </div>
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.nitrogen}</div>
            <p class="soil-metric-label">Nitrogen (kg/acre)</p>
          </div>
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.phosphorus}</div>
            <p class="soil-metric-label">Phosphorus (kg/acre)</p>
          </div>
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.potassium}</div>
            <p class="soil-metric-label">Potassium (kg/acre)</p>
          </div>
          <div class="soil-metric">
            <div class="soil-metric-value">${appData.soilData.organicMatter}%</div>
            <p class="soil-metric-label">Organic Matter</p>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>📊 Soil Analysis Chart</h3>
              <div class="soil-chart">
                <div style="margin-bottom: 16px;">
                  <h4>Nutrient Levels</h4>
                  <div style="margin: 8px 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                      <span>Nitrogen</span>
                      <span>${appData.soilData.nitrogen} kg/acre</span>
                    </div>
                    <div style="background: var(--color-bg-1); height: 8px; border-radius: 4px; overflow: hidden;">
                      <div style="background: var(--color-success); height: 100%; width: ${(appData.soilData.nitrogen / 100) * 100}%;"></div>
                    </div>
                  </div>
                  <div style="margin: 8px 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                      <span>Phosphorus</span>
                      <span>${appData.soilData.phosphorus} kg/acre</span>
                    </div>
                    <div style="background: var(--color-bg-1); height: 8px; border-radius: 4px; overflow: hidden;">
                      <div style="background: var(--color-warning); height: 100%; width: ${(appData.soilData.phosphorus / 100) * 100}%;"></div>
                    </div>
                  </div>
                  <div style="margin: 8px 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                      <span>Potassium</span>
                      <span>${appData.soilData.potassium} kg/acre</span>
                    </div>
                    <div style="background: var(--color-bg-1); height: 8px; border-radius: 4px; overflow: hidden;">
                      <div style="background: var(--color-info); height: 100%; width: ${(appData.soilData.potassium / 100) * 100}%;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>🌡️ Environmental Conditions</h3>
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border-inner);">
                  <span>Soil Type</span>
                  <span style="font-weight: var(--font-weight-semibold);">${appData.soilData.soilType}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border-inner);">
                  <span>Moisture Level</span>
                  <span style="font-weight: var(--font-weight-semibold); color: ${appData.soilData.moisture < 40 ? 'var(--color-error)' : appData.soilData.moisture > 80 ? 'var(--color-warning)' : 'var(--color-success)'};">${appData.soilData.moisture}%</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border-inner);">
                  <span>pH Level</span>
                  <span style="font-weight: var(--font-weight-semibold); color: ${appData.soilData.ph < 6 || appData.soilData.ph > 8 ? 'var(--color-warning)' : 'var(--color-success)'};">${appData.soilData.ph}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                  <span>Organic Matter</span>
                  <span style="font-weight: var(--font-weight-semibold);">${appData.soilData.organicMatter}%</span>
                </div>
              </div>
              
              <div style="margin-top: 16px;">
                <h4>Health Status</h4>
                <div style="padding: 12px; background: var(--color-bg-3); border-radius: var(--radius-base); border-left: 4px solid var(--color-success);">
                  <p style="margin: 0; font-size: var(--font-size-sm);">
                    ${appData.soilData.ph >= 6 && appData.soilData.ph <= 8 && appData.soilData.moisture >= 40 && appData.soilData.moisture <= 80 ? 
                      'Soil health is good. All parameters are within optimal ranges.' : 
                      'Some soil parameters need attention. Check recommendations for improvement.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>📈 Historical Trends</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0; color: var(--color-text-secondary);">Last 30 Days</h4>
                <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-success);">+2.5%</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Moisture Improvement</div>
              </div>
              <div style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0; color: var(--color-text-secondary);">pH Stability</h4>
                <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-info);">Stable</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">No significant changes</div>
              </div>
              <div style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0; color: var(--color-text-secondary);">Nutrient Levels</h4>
                <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-warning);">-5%</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Nitrogen depletion</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>🔧 Sensor Management</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
              <div style="padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0;">Moisture Sensor</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Status: Online</span>
                  <span style="color: var(--color-success);">●</span>
                </div>
                <div style="margin-top: 8px;">
                  <button class="btn btn--outline btn--sm">Calibrate</button>
                </div>
              </div>
              <div style="padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0;">pH Sensor</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Status: Online</span>
                  <span style="color: var(--color-success);">●</span>
                </div>
                <div style="margin-top: 8px;">
                  <button class="btn btn--outline btn--sm">Calibrate</button>
                </div>
              </div>
              <div style="padding: 16px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                <h4 style="margin: 0 0 8px 0;">Nutrient Sensor</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Status: Maintenance</span>
                  <span style="color: var(--color-warning);">●</span>
                </div>
                <div style="margin-top: 8px;">
                  <button class="btn btn--outline btn--sm">Schedule Service</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderAlerts: function() {
    // Generate all alerts
    AlertSystem.generateAllAlerts();
    
    const highPriorityAlerts = appData.activeAlerts.filter(alert => alert.priority === 'High').length;
    const weatherAlerts = appData.activeAlerts.filter(alert => alert.type === 'Weather').length;
    const pestAlerts = appData.activeAlerts.filter(alert => alert.type === 'Pest').length;
    
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🚨 Alert System</h1>
          <p class="module-description">Stay informed with weather alerts, pest outbreaks, and urgent farming actions</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>⚡ Active Alerts</h3>
            <div class="alert-list">
              ${appData.activeAlerts.length > 0 ? appData.activeAlerts.map(alert => `
                <div class="alert-item alert-item--${alert.priority.toLowerCase()}">
                  <div class="alert-header">
                    <span class="alert-type">${alert.type} Alert</span>
                    <span class="alert-date">${alert.date}</span>
                  </div>
                  <div class="alert-message">${alert.message}</div>
                  <div class="alert-action">Action: ${alert.action}</div>
                </div>
              `).join('') : `
                <div style="text-align: center; padding: 32px; color: var(--color-text-secondary);">
                  <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
                  <h4>No Active Alerts</h4>
                  <p>All systems are running smoothly!</p>
            </div>
              `}
            </div>
            <button class="btn btn--primary btn--sm" onclick="AlertSystem.generateAllAlerts(); ModuleManager.showModule('alerts');" style="margin-top: 12px;">Refresh Alerts</button>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🔔 Notification Settings</h3>
              <div class="grid" style="gap: 16px;">
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" checked> Weather Alerts
                </label>
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" checked> Pest Outbreak Alerts
                </label>
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" checked> Market Price Changes
                </label>
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox"> Equipment Maintenance
                </label>
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox"> Crop Calendar Reminders
                </label>
                <label style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" checked> Soil Health Alerts
                </label>
                
                <button type="button" class="btn btn--primary">Save Preferences</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📊 Alert Statistics</h3>
              <div class="grid grid-2">
                <div class="metric-card">
                  <div class="metric-value">${appData.activeAlerts.length}</div>
                  <p class="metric-label">Active Alerts</p>
                </div>
                
                <div class="metric-card">
                  <div class="metric-value">${highPriorityAlerts}</div>
                  <p class="metric-label">High Priority</p>
                </div>
                
                <div class="metric-card">
                  <div class="metric-value">${weatherAlerts}</div>
                  <p class="metric-label">Weather Related</p>
                </div>
                
                <div class="metric-card">
                  <div class="metric-value">${pestAlerts}</div>
                  <p class="metric-label">Pest Related</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderChatbot: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🤖 AI Farming Assistant</h1>
          <p class="module-description">Get instant answers to your farming questions with our AI-powered assistant</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>💬 Chat with AI Assistant</h3>
            <p>Ask me anything about farming, crop management, pest control, irrigation, fertilizers, or government schemes.</p>
            <button class="btn btn--primary" onclick="showChatbot()">Start Chat</button>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🔍 Common Questions</h3>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn btn--outline" onclick="askQuestion('How to protect wheat from rust?')">How to protect wheat from rust?</button>
                <button class="btn btn--outline" onclick="askQuestion('When to irrigate cotton?')">When to irrigate cotton?</button>
                <button class="btn btn--outline" onclick="askQuestion('Best fertilizer for rice?')">Best fertilizer for rice?</button>
                <button class="btn btn--outline" onclick="askQuestion('How to control aphids?')">How to control aphids?</button>
                <button class="btn btn--outline" onclick="askQuestion('Government schemes for farmers?')">Government schemes for farmers?</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📚 Knowledge Base</h3>
              <div style="display: grid; gap: 12px;">
                <div style="padding: 12px; background: var(--color-bg-1); border-radius: 8px;">
                  <h4 style="margin: 0 0 4px 0;">Crop Management</h4>
                  <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Sowing, harvesting, crop rotation, and seasonal planning</p>
                </div>
                <div style="padding: 12px; background: var(--color-bg-2); border-radius: 8px;">
                  <h4 style="margin: 0 0 4px 0;">Pest & Disease Control</h4>
                  <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Identification, treatment, and prevention strategies</p>
                </div>
                <div style="padding: 12px; background: var(--color-bg-3); border-radius: 8px;">
                  <h4 style="margin: 0 0 4px 0;">Soil & Fertilizer</h4>
                  <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Soil testing, nutrient management, and fertilizer application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderCommunity: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🌾 Community Forum</h1>
          <p class="module-description">Connect with fellow farmers, ask questions, and share knowledge</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>💬 Farmer Discussions</h3>
            <p>Join the conversation with thousands of farmers sharing their experiences and knowledge.</p>
            <button class="btn btn--primary" onclick="showForum()">Browse Forum</button>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🔥 Trending Topics</h3>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${appData.communityForum.slice(0, 3).map(post => `
                  <div style="padding: 12px; background: var(--color-bg-1); border-radius: 8px; border-left: 4px solid var(--color-primary);">
                    <h4 style="margin: 0 0 4px 0; font-size: 16px;">${post.title}</h4>
                    <div style="display: flex; gap: 12px; font-size: 12px; color: var(--color-text-secondary);">
                      <span>${post.votes} votes</span>
                      <span>${post.answers} answers</span>
                      <span>${post.date}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📊 Forum Statistics</h3>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                  <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">1,247</div>
                  <div style="font-size: 14px; color: var(--color-text-secondary);">Active Members</div>
                </div>
                <div style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
                  <div style="font-size: 24px; font-weight: bold; color: var(--color-success);">3,456</div>
                  <div style="font-size: 14px; color: var(--color-text-secondary);">Questions Asked</div>
                </div>
                <div style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
                  <div style="font-size: 24px; font-weight: bold; color: var(--color-info);">8,923</div>
                  <div style="font-size: 14px; color: var(--color-text-secondary);">Answers Given</div>
                </div>
                <div style="text-align: center; padding: 16px; background: var(--color-bg-4); border-radius: 8px;">
                  <div style="font-size: 24px; font-weight: bold; color: var(--color-warning);">95%</div>
                  <div style="font-size: 14px; color: var(--color-text-secondary);">Resolved Issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderPriceForecast: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">📈 Crop Price Forecasting</h1>
          <p class="module-description">AI-powered price predictions to help you make better selling decisions</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>📊 Price Forecasts</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Current Price</th>
                  <th>Forecast Price</th>
                  <th>Trend</th>
                  <th>Confidence</th>
                  <th>Key Factors</th>
                </tr>
              </thead>
              <tbody>
                ${appData.priceForecasts.map(forecast => `
                  <tr>
                    <td><strong>${forecast.crop}</strong></td>
                    <td>₹${forecast.currentPrice}/quintal</td>
                    <td>₹${forecast.forecastPrice}/quintal</td>
                    <td>
                      <span style="color: ${forecast.trend === 'up' ? 'var(--color-success)' : 'var(--color-error)'};">
                        ${forecast.trend === 'up' ? '📈 +' : '📉 '}${Math.abs(((forecast.forecastPrice - forecast.currentPrice) / forecast.currentPrice) * 100).toFixed(1)}%
                      </span>
                    </td>
                    <td>
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 60px; height: 8px; background: var(--color-bg-1); border-radius: 4px; overflow: hidden;">
                          <div style="width: ${forecast.confidence}%; height: 100%; background: var(--color-success);"></div>
                        </div>
                        <span>${forecast.confidence}%</span>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        ${forecast.factors.map(factor => `<span style="background: var(--color-bg-1); padding: 2px 6px; border-radius: 12px; font-size: 12px;">${factor}</span>`).join('')}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="grid grid-2">
          <div class="card">
            <div class="card__body">
              <h3>🎯 Selling Recommendations</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="padding: 16px; background: var(--color-bg-3); border-radius: 8px; border-left: 4px solid var(--color-success);">
                  <h4 style="margin: 0 0 8px 0;">Wheat - Sell Now</h4>
                  <p style="margin: 0; font-size: 14px;">Price expected to increase by 7% in next 30 days. Consider selling 50% now and holding rest.</p>
                </div>
                <div style="padding: 16px; background: var(--color-bg-2); border-radius: 8px; border-left: 4px solid var(--color-warning);">
                  <h4 style="margin: 0 0 8px 0;">Rice - Hold</h4>
                  <p style="margin: 0; font-size: 14px;">Price may decrease by 8%. Wait for better market conditions or government procurement.</p>
                </div>
                <div style="padding: 16px; background: var(--color-bg-1); border-radius: 8px; border-left: 4px solid var(--color-info);">
                  <h4 style="margin: 0 0 8px 0;">Cotton - Monitor</h4>
                  <p style="margin: 0; font-size: 14px;">Strong upward trend expected. Consider selling in batches over next 2-3 months.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>📈 Market Analysis</h3>
              <div style="margin-bottom: 16px;">
                <h4>Supply & Demand Factors</h4>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li>Export demand from Middle East</li>
                  <li>Government procurement policies</li>
                  <li>Weather impact on production</li>
                  <li>Global commodity prices</li>
                  <li>Storage and logistics costs</li>
                </ul>
              </div>
              
              <div>
                <h4>Historical Performance</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 8px;">
                  <div style="text-align: center; padding: 12px; background: var(--color-bg-1); border-radius: 8px;">
                    <div style="font-size: 18px; font-weight: bold; color: var(--color-success);">+12%</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Last 3 months</div>
                  </div>
                  <div style="text-align: center; padding: 12px; background: var(--color-bg-2); border-radius: 8px;">
                    <div style="font-size: 18px; font-weight: bold; color: var(--color-info);">+8%</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Last 6 months</div>
                  </div>
                  <div style="text-align: center; padding: 12px; background: var(--color-bg-3); border-radius: 8px;">
                    <div style="font-size: 18px; font-weight: bold; color: var(--color-warning);">+15%</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Last 12 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  
  renderMarketplaceIntegration: function() {
    return `
      <div class="module active">
        <div class="module-header">
          <h1 class="module-title">🔗 Marketplace Integration</h1>
          <p class="module-description">Connect with buyers, suppliers, and cooperatives in your network</p>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>🤝 Your Connections</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Specialization</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${appData.marketplaceConnections.map(connection => `
                  <tr>
                    <td><span class="status-badge status-badge--info">${connection.type}</span></td>
                    <td>${connection.name}</td>
                    <td>${connection.location}</td>
                    <td>${connection.interestedIn || connection.services || connection.products}</td>
                    <td>${connection.contact}</td>
                    <td><button class="btn btn--primary btn--sm" onclick="connectWithPartner('${connection.name}', '${connection.contact}')">Connect</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="grid grid-3">
          <div class="card">
            <div class="card__body">
              <h3>👥 Find Buyers</h3>
              <p>Connect with food processors, exporters, and local buyers interested in your crops.</p>
              <div class="metric-card" style="margin: 16px 0;">
                <div class="metric-value">150+</div>
                <p class="metric-label">Active Buyers</p>
              </div>
              <button class="btn btn--primary btn--full-width" onclick="searchPartners('buyers')">Browse Buyers</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>🏭 Supplier Network</h3>
              <p>Access verified suppliers for seeds, fertilizers, equipment, and agricultural inputs.</p>
              <div class="metric-card" style="margin: 16px 0;">
                <div class="metric-value">85</div>
                <p class="metric-label">Suppliers</p>
              </div>
              <button class="btn btn--primary btn--full-width" onclick="searchPartners('suppliers')">Find Suppliers</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__body">
              <h3>🤝 Cooperatives</h3>
              <p>Join farmer cooperatives for better market access, storage, and collective bargaining power.</p>
              <div class="metric-card" style="margin: 16px 0;">
                <div class="metric-value">25</div>
                <p class="metric-label">Cooperatives</p>
              </div>
              <button class="btn btn--primary btn--full-width" onclick="searchPartners('cooperatives')">Join Cooperative</button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__body">
            <h3>📊 Government Schemes & Support</h3>
            <div class="grid grid-2">
              ${appData.governmentSchemes.map(scheme => `
                <div style="padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 4px solid var(--color-primary);">
                  <h4>${scheme.name}</h4>
                  <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin: 8px 0;">${scheme.description}</p>
                  <p style="font-weight: var(--font-weight-semibold); color: var(--color-success);">${scheme.benefit}</p>
                  <p style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Eligibility: ${scheme.eligibility}</p>
                  <button class="btn btn--outline btn--sm" style="margin-top: 8px;" onclick="applyForScheme('${scheme.name}')">Apply Now</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

// Weather API Integration
const WeatherAPI = {
  apiKey: 'demo_key', // Replace with actual OpenWeatherMap API key
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  
  getCurrentWeather: async function(lat, lon) {
    try {
      // For demo purposes, return mock data
      // In production, uncomment the actual API call:
      /*
      const response = await fetch(`${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
      const data = await response.json();
      return this.formatWeatherData(data);
      */
      
      // Mock data for demo
      return {
        temperature: 28,
        condition: 'Sunny',
        humidity: 65,
        windSpeed: 12,
        pressure: 1013,
        description: 'Clear sky'
      };
    } catch (error) {
      console.error('Weather API Error:', error);
      return null;
    }
  },
  
  getForecast: async function(lat, lon) {
    try {
      // Mock 5-day forecast data
      return [
        {"day": "Today", "temp": "28°C", "condition": "Sunny", "humidity": "65%", "rainfall": "0mm", "wind": "12 km/h", "pressure": "1013 hPa"},
        {"day": "Tomorrow", "temp": "30°C", "condition": "Partly Cloudy", "humidity": "60%", "rainfall": "0mm", "wind": "15 km/h", "pressure": "1010 hPa"},
        {"day": "Day 3", "temp": "26°C", "condition": "Light Rain", "humidity": "80%", "rainfall": "5mm", "wind": "8 km/h", "pressure": "1008 hPa"},
        {"day": "Day 4", "temp": "25°C", "condition": "Cloudy", "humidity": "75%", "rainfall": "2mm", "wind": "10 km/h", "pressure": "1012 hPa"},
        {"day": "Day 5", "temp": "29°C", "condition": "Sunny", "humidity": "58%", "rainfall": "0mm", "wind": "14 km/h", "pressure": "1015 hPa"}
      ];
    } catch (error) {
      console.error('Forecast API Error:', error);
      return appData.weatherData;
    }
  },
  
  formatWeatherData: function(data) {
    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      description: data.weather[0].description
    };
  },
  
  getLocation: function() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            });
          },
          (error) => {
            console.error('Geolocation error:', error);
            // Default to Delhi coordinates
            resolve({ lat: 28.6139, lon: 77.2090 });
          }
        );
      } else {
        // Default to Delhi coordinates
        resolve({ lat: 28.6139, lon: 77.2090 });
      }
    });
  }
};

// Soil Health Monitoring
const SoilHealth = {
  updateSoilData: function(data) {
    appData.soilData = { ...appData.soilData, ...data };
    this.generateRecommendations();
  },
  
  generateRecommendations: function() {
    const soil = appData.soilData;
    const recommendations = [];
    
    // pH recommendations
    if (soil.ph < 6.0) {
      recommendations.push({
        type: 'pH Adjustment',
        message: 'Soil pH is too acidic. Apply lime at 2-3 tons per acre.',
        priority: 'High',
        timing: 'Before next planting season'
      });
    } else if (soil.ph > 7.5) {
      recommendations.push({
        type: 'pH Adjustment',
        message: 'Soil pH is too alkaline. Apply sulfur or gypsum.',
        priority: 'Medium',
        timing: 'Before next planting season'
      });
    }
    
    // Nutrient recommendations
    if (soil.nitrogen < 30) {
      recommendations.push({
        type: 'Fertilizer',
        message: 'Nitrogen deficiency detected. Apply 50kg Urea per acre.',
        priority: 'High',
        timing: 'Within 1 week'
      });
    }
    
    if (soil.phosphorus < 25) {
      recommendations.push({
        type: 'Fertilizer',
        message: 'Phosphorus deficiency. Apply DAP 25kg per acre.',
        priority: 'Medium',
        timing: 'During planting'
      });
    }
    
    if (soil.potassium < 20) {
      recommendations.push({
        type: 'Fertilizer',
        message: 'Potassium deficiency. Apply MOP 30kg per acre.',
        priority: 'Medium',
        timing: 'During planting'
      });
    }
    
    // Moisture recommendations
    if (soil.moisture < 40) {
      recommendations.push({
        type: 'Irrigation',
        message: 'Soil moisture is low. Irrigate immediately.',
        priority: 'High',
        timing: 'Today'
      });
    } else if (soil.moisture > 80) {
      recommendations.push({
        type: 'Drainage',
        message: 'Soil is waterlogged. Improve drainage.',
        priority: 'Medium',
        timing: 'Within 3 days'
      });
    }
    
    appData.soilRecommendations = recommendations;
  }
};

// Pest Detection Helper
const PestDetection = {
  analyzeImage: function(event) {
    const file = event.target.files[0];
    if (file) {
      // Simulate image analysis with more realistic results
      const diseases = [
        { name: 'Aphid Infestation', confidence: 94, severity: 'Medium', treatment: 'Apply neem-based pesticide within 24 hours' },
        { name: 'Bollworm', confidence: 89, severity: 'High', treatment: 'Use pheromone traps and IPM approach' },
        { name: 'Fungal Leaf Spot', confidence: 92, severity: 'Medium', treatment: 'Apply copper-based fungicide' },
        { name: 'Nutrient Deficiency', confidence: 87, severity: 'Low', treatment: 'Apply balanced NPK fertilizer' },
        { name: 'Bacterial Blight', confidence: 91, severity: 'High', treatment: 'Remove affected plants and apply bactericide' }
      ];
      
      const result = diseases[Math.floor(Math.random() * diseases.length)];
      
      // Add to detection history
      const detection = {
        date: new Date().toLocaleDateString(),
        crop: 'Wheat', // This could be determined from image analysis
        issue: result.name,
        confidence: result.confidence + '%',
        treatment: result.treatment,
        severity: result.severity
      };
      
      appData.pestDetections.unshift(detection);
      
      setTimeout(() => {
        alert(`Analysis Complete!\n\nIssue: ${result.name}\nConfidence: ${result.confidence}%\nSeverity: ${result.severity}\nTreatment: ${result.treatment}`);
        // Refresh the pest detection module
        ModuleManager.showModule('pest-detection');
      }, 2000);
    }
  },
  
  showDemo: function() {
    const demoResult = {
      issue: 'Bollworm detected',
      confidence: '89%',
      severity: 'High',
      treatment: 'Use pheromone traps and IPM approach'
    };
    
    alert(`Demo Analysis:\n\nIssue: ${demoResult.issue}\nConfidence: ${demoResult.confidence}\nSeverity: ${demoResult.severity}\nTreatment: ${demoResult.treatment}`);
  }
};

// Notification System
const NotificationSystem = {
  sendSMS: function(phoneNumber, message) {
    // Simulate SMS sending with Fast2SMS API
    console.log(`SMS sent to ${phoneNumber}: ${message}`);
    // In production: fetch('https://www.fast2sms.com/dev/bulk', { method: 'POST', ... })
    return true;
  },
  
  sendEmail: function(email, subject, message) {
    // Simulate email sending with Nodemailer
    console.log(`Email sent to ${email}: ${subject} - ${message}`);
    // In production: use Nodemailer or similar service
    return true;
  },
  
  sendPushNotification: function(title, message) {
    // Simulate push notification
    if (Notification.permission === 'granted') {
      new Notification(title, { body: message, icon: '/icon.png' });
    }
  },
  
  requestNotificationPermission: function() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }
};

// Enhanced Weather Advisory System
const WeatherAdvisory = {
  generateIrrigationAdvisory: function(weatherData, soilData) {
    const advisories = [];
    
    weatherData.forEach(day => {
      const temp = parseInt(day.temp);
      const rainfall = parseInt(day.rainfall);
      const humidity = parseInt(day.humidity);
      
      if (rainfall > 15) {
        advisories.push({
          day: day.day,
          advisory: "Postpone irrigation - heavy rainfall expected",
          priority: "High",
          type: "Irrigation"
        });
      } else if (temp > 35 && humidity < 60) {
        advisories.push({
          day: day.day,
          advisory: "Increase irrigation frequency due to high temperature and low humidity",
          priority: "Medium",
          type: "Irrigation"
        });
      } else if (rainfall === 0 && temp > 30) {
        advisories.push({
          day: day.day,
          advisory: "Moderate irrigation recommended",
          priority: "Low",
          type: "Irrigation"
        });
      }
    });
    
    return advisories;
  },
  
  generateWeatherAlerts: function(weatherData) {
    const alerts = [];
    
    weatherData.forEach(day => {
      const temp = parseInt(day.temp);
      const rainfall = parseInt(day.rainfall);
      const wind = parseInt(day.wind);
      
      if (temp > 40) {
        alerts.push({
          day: day.day,
          type: 'Heatwave',
          message: `Extreme heat warning! Temperature ${day.temp}`,
          priority: 'High',
          action: 'Provide shade and increase irrigation frequency'
        });
      }
      
      if (rainfall > 20) {
        alerts.push({
          day: day.day,
          type: 'Heavy Rainfall',
          message: `Heavy rainfall expected: ${day.rainfall}`,
          priority: 'High',
          action: 'Secure harvested crops and check drainage'
        });
      }
      
      if (wind > 25) {
        alerts.push({
          day: day.day,
          type: 'Strong Winds',
          message: `Strong winds expected: ${day.wind}`,
          priority: 'Medium',
          action: 'Secure farm equipment and structures'
        });
      }
    });
    
    return alerts;
  }
};

// Alert System
const AlertSystem = {
  checkWeatherAlerts: function() {
    const alerts = [];
    const weatherAlerts = WeatherAdvisory.generateWeatherAlerts(appData.weatherData);
    
    weatherAlerts.forEach(alert => {
      alerts.push({
        type: 'Weather',
        message: alert.message,
        priority: alert.priority,
        date: new Date().toLocaleDateString(),
        action: alert.action
      });
    });
    
    return alerts;
  },
  
  checkPestAlerts: function() {
    const alerts = [];
    const recentDetections = appData.pestDetections.slice(0, 3);
    
    recentDetections.forEach(detection => {
      if (detection.severity === 'High') {
        alerts.push({
          type: 'Pest',
          message: `${detection.issue} detected with high severity`,
          priority: 'High',
          date: detection.date,
          action: detection.treatment
        });
      }
    });
    
    return alerts;
  },
  
  checkMarketAlerts: function() {
    const alerts = [];
    
    appData.marketPrices.forEach(crop => {
      const change = parseFloat(crop.change);
      if (change > 5) {
        alerts.push({
          type: 'Market',
          message: `${crop.crop} prices increased by ${crop.change}`,
          priority: 'Low',
          date: new Date().toLocaleDateString(),
          action: 'Consider selling stored produce'
        });
      } else if (change < -3) {
        alerts.push({
          type: 'Market',
          message: `${crop.crop} prices decreased by ${crop.change}`,
          priority: 'Low',
          date: new Date().toLocaleDateString(),
          action: 'Consider waiting for better prices'
        });
      }
    });
    
    return alerts;
  },
  
  generateAllAlerts: function() {
    const weatherAlerts = this.checkWeatherAlerts();
    const pestAlerts = this.checkPestAlerts();
    const marketAlerts = this.checkMarketAlerts();
    
    appData.activeAlerts = [...weatherAlerts, ...pestAlerts, ...marketAlerts];
  }
};

// Global helper functions
function updateSoilData() {
  const soilData = {
    soilType: document.getElementById('soilType').value,
    ph: parseFloat(document.getElementById('soilPH').value),
    moisture: parseInt(document.getElementById('soilMoisture').value),
    nitrogen: parseInt(document.getElementById('soilNitrogen').value),
    phosphorus: parseInt(document.getElementById('soilPhosphorus').value),
    potassium: parseInt(document.getElementById('soilPotassium').value),
    organicMatter: parseFloat(document.getElementById('soilOrganicMatter').value)
  };
  
  SoilHealth.updateSoilData(soilData);
  
  // Show success message
  alert('Soil data updated successfully! Recommendations have been refreshed.');
  
  // Refresh the personalized advisory module
  ModuleManager.showModule('personalized-advisory');
}

function generateRotationPlan() {
  const soil = appData.soilData;
  let recommendations = [];
  
  // Generate crop rotation recommendations based on soil type and conditions
  if (soil.soilType === 'Loamy') {
    recommendations = [
      'Rice → Wheat → Maize',
      'Cotton → Wheat → Pulses',
      'Sugarcane → Wheat → Mustard'
    ];
  } else if (soil.soilType === 'Clay') {
    recommendations = [
      'Rice → Wheat → Barley',
      'Sugarcane → Wheat → Gram',
      'Cotton → Wheat → Mustard'
    ];
  } else if (soil.soilType === 'Sandy') {
    recommendations = [
      'Pearl Millet → Wheat → Groundnut',
      'Maize → Wheat → Sunflower',
      'Cotton → Wheat → Chickpea'
    ];
  } else {
    recommendations = [
      'Rice → Wheat → Maize',
      'Cotton → Wheat → Pulses',
      'Sugarcane → Wheat → Mustard'
    ];
  }
  
  const message = `Recommended Crop Rotation Plans for ${soil.soilType} soil:\n\n${recommendations.map((plan, index) => `${index + 1}. ${plan}`).join('\n')}\n\nThese rotations will help maintain soil fertility and reduce pest pressure.`;
  
  alert(message);
}

// Initialize alerts on page load
function initializeAlerts() {
  AlertSystem.generateAllAlerts();
}

// Chatbot Assistant
const ChatbotAssistant = {
  processQuery: function(query) {
    const lowerQuery = query.toLowerCase();
    
    // Find matching query in database
    const match = appData.chatbotQueries.find(item => 
      item.query.toLowerCase().includes(lowerQuery) || 
      lowerQuery.includes(item.query.toLowerCase())
    );
    
    if (match) {
      return {
        answer: match.answer,
        confidence: 95,
        source: "Knowledge Base"
      };
    }
    
    // Rule-based responses for common queries
    if (lowerQuery.includes('fertilizer') || lowerQuery.includes('fertiliser')) {
      return {
        answer: "For fertilizer recommendations: 1) Test your soil first, 2) Use NPK based on crop needs, 3) Apply at right time, 4) Consider organic options. What crop are you growing?",
        confidence: 80,
        source: "Rule Engine"
      };
    }
    
    if (lowerQuery.includes('irrigation') || lowerQuery.includes('water')) {
      return {
        answer: "Irrigation tips: 1) Water early morning or evening, 2) Check soil moisture before watering, 3) Use drip irrigation for efficiency, 4) Adjust based on weather forecast.",
        confidence: 85,
        source: "Rule Engine"
      };
    }
    
    if (lowerQuery.includes('pest') || lowerQuery.includes('disease')) {
      return {
        answer: "For pest/disease control: 1) Identify the problem correctly, 2) Use integrated pest management, 3) Apply appropriate treatment, 4) Prevent future outbreaks. Upload a photo for specific diagnosis.",
        confidence: 90,
        source: "Rule Engine"
      };
    }
    
    return {
      answer: "I understand you're asking about: " + query + ". Could you be more specific? I can help with crop management, pest control, irrigation, fertilizers, and government schemes.",
      confidence: 60,
      source: "General Assistant"
    };
  },
  
  showChatbot: function() {
    const chatbotHtml = `
      <div id="chatbotModal" class="modal" style="display: flex;">
        <div class="modal-overlay" onclick="ChatbotAssistant.hideChatbot()"></div>
        <div class="modal-content" style="max-width: 500px; height: 600px;">
          <div class="modal-header">
            <h3>🤖 AI Farming Assistant</h3>
            <button class="modal-close" onclick="ChatbotAssistant.hideChatbot()">&times;</button>
          </div>
          <div class="modal-body" style="height: 400px; overflow-y: auto; padding: 16px;">
            <div id="chatMessages" style="margin-bottom: 16px;">
              <div style="background: var(--color-bg-1); padding: 12px; border-radius: 8px; margin-bottom: 8px;">
                <strong>Assistant:</strong> Hello! I'm your AI farming assistant. Ask me anything about crop management, pest control, irrigation, fertilizers, or government schemes.
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="chatInput" placeholder="Ask your farming question..." style="flex: 1; padding: 8px; border: 1px solid var(--color-border); border-radius: 4px;">
              <button onclick="ChatbotAssistant.sendMessage()" class="btn btn--primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHtml);
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        ChatbotAssistant.sendMessage();
      }
    });
  },
  
  hideChatbot: function() {
    const modal = document.getElementById('chatbotModal');
    if (modal) {
      modal.remove();
    }
  },
  
  sendMessage: function() {
    const input = document.getElementById('chatInput');
    const query = input.value.trim();
    if (!query) return;
    
    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user message
    messagesContainer.innerHTML += `
      <div style="background: var(--color-primary); color: white; padding: 12px; border-radius: 8px; margin-bottom: 8px; text-align: right;">
        <strong>You:</strong> ${query}
      </div>
    `;
    
    // Process query and add response
    const response = this.processQuery(query);
    messagesContainer.innerHTML += `
      <div style="background: var(--color-bg-1); padding: 12px; border-radius: 8px; margin-bottom: 8px;">
        <strong>Assistant:</strong> ${response.answer}
        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
          Confidence: ${response.confidence}% | Source: ${response.source}
        </div>
      </div>
    `;
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
};

// Community Forum
const CommunityForum = {
  showForum: function() {
    const forumHtml = `
      <div id="forumModal" class="modal" style="display: flex;">
        <div class="modal-overlay" onclick="CommunityForum.hideForum()"></div>
        <div class="modal-content" style="max-width: 800px; height: 80vh;">
          <div class="modal-header">
            <h3>🌾 Community Forum</h3>
            <button class="modal-close" onclick="CommunityForum.hideForum()">&times;</button>
          </div>
          <div class="modal-body" style="height: 500px; overflow-y: auto;">
            <div style="margin-bottom: 16px;">
              <button class="btn btn--primary" onclick="CommunityForum.createPost()">Ask Question</button>
            </div>
            <div id="forumPosts">
              ${appData.communityForum.map(post => `
                <div style="border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <h4 style="margin: 0; color: var(--color-primary);">${post.title}</h4>
                    <span style="background: var(--color-bg-1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">${post.category}</span>
                  </div>
                  <div style="display: flex; gap: 16px; margin-bottom: 8px; font-size: 14px; color: var(--color-text-secondary);">
                    <span>By ${post.author}</span>
                    <span>${post.date}</span>
                    <span>${post.votes} votes</span>
                    <span>${post.answers} answers</span>
                  </div>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    ${post.tags.map(tag => `<span style="background: var(--color-bg-2); padding: 2px 6px; border-radius: 12px; font-size: 12px;">#${tag}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', forumHtml);
  },
  
  hideForum: function() {
    const modal = document.getElementById('forumModal');
    if (modal) {
      modal.remove();
    }
  },
  
  createPost: function() {
    const title = prompt("Enter your question title:");
    if (title) {
      const newPost = {
        id: appData.communityForum.length + 1,
        title: title,
        author: "You",
        date: new Date().toLocaleDateString(),
        category: "General",
        votes: 0,
        answers: 0,
        tags: []
      };
      appData.communityForum.unshift(newPost);
      alert("Question posted successfully! Other farmers will see and respond to your question.");
    }
  }
};

// Marketplace helper functions
function connectWithPartner(partnerName, contact) {
  alert(`Connecting you with ${partnerName}...\n\nContact: ${contact}\n\nYou can reach out to them directly or we'll send them your details for a potential partnership.`);
}

function searchPartners(type) {
  const partnerTypes = {
    'buyers': 'food processors, exporters, and local buyers',
    'suppliers': 'seeds, fertilizers, equipment, and agricultural inputs suppliers',
    'cooperatives': 'farmer cooperatives and agricultural societies'
  };
  
  alert(`Searching for ${partnerTypes[type]}...\n\nThis feature will show you a list of verified partners in your area. You can filter by location, specialization, and ratings.`);
}

function applyForScheme(schemeName) {
  alert(`Applying for ${schemeName}...\n\nWe'll help you with the application process and required documentation. You'll receive updates on your application status.`);
}

function showChatbot() {
  ChatbotAssistant.showChatbot();
}

function showForum() {
  CommunityForum.showForum();
}

function askQuestion(question) {
  showChatbot();
  setTimeout(() => {
    const input = document.getElementById('chatInput');
    if (input) {
      input.value = question;
      ChatbotAssistant.sendMessage();
    }
  }, 500);
}

function contactFarmer(farmerName, contact) {
  alert(`Contacting ${farmerName}...\n\nPhone: ${contact}\n\nYou can call them directly or we'll send them your contact details for a potential deal.`);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Application initializing...');
  
  // Setup header login/register buttons
  const headerLoginBtn = document.getElementById('headerLoginBtn');
  const headerRegisterBtn = document.getElementById('headerRegisterBtn');
  
  if (headerLoginBtn) {
    headerLoginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Header login button clicked');
      ScreenManager.showScreen('login');
    });
  } else {
    console.warn('Header login button not found');
  }
  
  if (headerRegisterBtn) {
    headerRegisterBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Header register button clicked');
      ScreenManager.showScreen('register');
    });
  } else {
    console.warn('Header register button not found');
  }
  
  // Setup contact form functionality
  const contactUsBtn = document.getElementById('contactUsBtn');
  if (contactUsBtn) {
    contactUsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Contact Us button clicked');
      ContactManager.showContactForm();
    });
  } else {
    console.warn('Contact Us button not found');
  }
  
  // Setup contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Contact form submitted');
      
      const formData = {
        fullName: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
      };
      
      ContactManager.submitContactForm(formData);
    });
  }
  
  // Setup modal close functionality
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  const successClose = document.getElementById('successClose');
  const successOverlay = document.getElementById('successOverlay');
  const successOk = document.getElementById('successOk');
  
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      ContactManager.hideContactForm();
    });
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      ContactManager.hideContactForm();
    });
  }
  
  if (successClose) {
    successClose.addEventListener('click', (e) => {
      e.preventDefault();
      ContactManager.hideSuccessMessage();
    });
  }
  
  if (successOverlay) {
    successOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      ContactManager.hideSuccessMessage();
    });
  }
  
  if (successOk) {
    successOk.addEventListener('click', (e) => {
      e.preventDefault();
      ContactManager.hideSuccessMessage();
    });
  }
  
  // Setup screen navigation links
  const switchToLogin = document.getElementById('switchToLogin');
  const switchToRegister = document.getElementById('switchToRegister');
  
  if (switchToLogin) {
    switchToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Switch to login clicked');
      ScreenManager.showScreen('login');
    });
  }
  
  if (switchToRegister) {
    switchToRegister.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Switch to register clicked');
      ScreenManager.showScreen('register');
    });
  }
  
  // Setup form handlers
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Register form submitted');
      
      const userData = {
        userType: document.getElementById('userType').value,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        password: document.getElementById('password').value
      };
      
      console.log('User data:', userData);
      AuthManager.register(userData);
    });
  }
  
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      AuthManager.login(email, password);
    });
  }
  
  // Setup logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      console.log('Logout button clicked');
      AuthManager.logout();
    });
  }
  
  // Setup navigation (with delay to ensure DOM is ready)
  setTimeout(() => {
    const navItems = document.querySelectorAll('.nav-item');
    console.log('Setting up navigation for', navItems.length, 'items');
    
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const moduleId = this.getAttribute('data-module');
        console.log('Navigation clicked:', moduleId);
        ModuleManager.showModule(moduleId);
      });
    });
    
    // Setup feature cards navigation
    FeatureCardManager.setupFeatureCards();
  }, 100);
  
  // Handle escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      ModalManager.hideAllModals();
    }
  });
  
  // Initialize alerts system
  initializeAlerts();
  
  // Show welcome screen by default
  ScreenManager.showScreen('welcome');
  
  console.log('Application initialized successfully');
});