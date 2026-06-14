// Diacora Health - Professional Web Application with Real-time DateTime

// Helper function to get current datetime in ISO format for input
function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Mock user data
const mockUser = {
    id: '123',
    name: 'John Smith',
    email: 'john@example.com',
    age: 45,
    gender: 'Male',
    diagnosticYear: 2020,
    phone: '+1 (555) 123-4567',
    glucoseTarget: '80-130',
    bpTarget: '<130/80'
};

// Mock health data
const mockHealthData = {
    glucose: {
        current: 105,
        unit: 'mg/dL',
        target: '80-130',
        status: 'normal',
        trend: 'stable',
        lastRecorded: new Date().toLocaleString()
    },
    bloodPressure: {
        systolic: 128,
        diastolic: 82,
        pulse: 74,
        unit: 'mmHg',
        target: '<130/80',
        status: 'normal',
        trend: 'stable'
    },
    weight: {
        current: 75,
        unit: 'kg',
        bmi: 24.9,
        target: '70-75',
        status: 'normal'
    },
    mood: '😊',
    medications: [
        { name: 'Aspirin 100mg', time: 'Morning', dosage: '1 tablet', adherence: 98 },
        { name: 'Metformin 500mg', time: 'Breakfast', dosage: '1 tablet', adherence: 95 },
        { name: 'Lisinopril 10mg', time: 'Evening', dosage: '1 tablet', adherence: 100 }
    ],
    glucoseHistory: [
        { date: 'Jun 10', value: 105, time: '09:30 AM' },
        { date: 'Jun 9', value: 102, time: '08:45 AM' },
        { date: 'Jun 8', value: 108, time: '09:15 AM' },
        { date: 'Jun 7', value: 104, time: '09:00 AM' },
        { date: 'Jun 6', value: 106, time: '09:30 AM' },
        { date: 'Jun 5', value: 103, time: '08:50 AM' },
        { date: 'Jun 4', value: 107, time: '09:20 AM' }
    ],
    bpHistory: [
        { date: 'Jun 10', systolic: 128, diastolic: 82 },
        { date: 'Jun 9', systolic: 126, diastolic: 80 },
        { date: 'Jun 8', systolic: 130, diastolic: 84 },
        { date: 'Jun 7', systolic: 127, diastolic: 81 },
        { date: 'Jun 6', systolic: 129, diastolic: 83 }
    ],
    exercises: [
        { date: 'Today', type: 'Walking', duration: 30, calories: 150 },
        { date: 'Yesterday', type: 'Swimming', duration: 45, calories: 300 },
        { date: 'Jun 8', type: 'Cycling', duration: 60, calories: 400 }
    ],
    moods: [
        { date: 'Today', mood: '😊', note: 'Good day' },
        { date: 'Yesterday', mood: '😄', note: 'Excellent' },
        { date: 'Jun 8', mood: '😐', note: 'Regular' }
    ]
};

// App state
let appState = {
    isLoggedIn: localStorage.getItem('diacora_user') ? true : false,
    currentPage: localStorage.getItem('diacora_user') ? 'dashboard' : 'landing',
    currentUser: localStorage.getItem('diacora_user') ? 
        JSON.parse(localStorage.getItem('diacora_user')) : mockUser,
    healthData: mockHealthData,
    selectedMood: null,
    showGlucoseModal: false,
    showBPModal: false,
    settingsEditMode: false,
    tempSettings: { ...mockUser }
};

// Navigation handler
function navigateTo(page) {
    appState.currentPage = page;
    appState.showGlucoseModal = false;
    appState.showBPModal = false;
    renderApp();
    window.scrollTo(0, 0);
}

// Initialize app
function initApp() {
    renderApp();
}

// Main render function
function renderApp() {
    const app = document.getElementById('app');
    
    if (!appState.isLoggedIn) {
        app.innerHTML = renderLandingPage();
    } else {
        app.innerHTML = renderDashboard();
    }
    
    attachEventListeners();
}

// ============= HEADER LOGO COMPONENT =============
function getLogoElement() {
    return `
        <img src="/logo.png" alt="Diacora Health" style="height: 32px; width: auto; object-fit: contain;">
    `;
}

// ============= LANDING PAGE =============
function renderLandingPage() {
    return `
        <div class="landing-page">
            <header class="header">
                <div class="header-content">
                    <div class="logo">
                        ${getLogoElement()}
                        <span class="logo-text">Diacora Health</span>
                    </div>
                    <div class="auth-buttons">
                        <button id="loginBtn" class="btn btn-outline">Log In</button>
                        <button id="signupBtn" class="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </header>

            <section class="hero">
                <div class="hero-content">
                    <h1>Caring Today.<br>Shaping Tomorrows.</h1>
                    <p>Diabetes & Hypertension Management at Your Fingertips</p>
                    <p class="hero-subtitle">Your personal health companion for better management</p>
                    <button id="heroCtaBtn" class="btn btn-primary btn-large">Get Started</button>
                </div>
                <div class="hero-visual">
                    <div class="hero-chart">📊</div>
                </div>
            </section>

            <section class="features">
                <h2>Why Choose Diacora Health?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Real-time Tracking</h3>
                        <p>Monitor glucose & blood pressure with precision</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💊</div>
                        <h3>Medication Management</h3>
                        <p>Never miss a dose with smart reminders</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📱</div>
                        <h3>Sync Across Devices</h3>
                        <p>Access your data on iOS, Android, and Web</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎯</div>
                        <h3>Personalized Insights</h3>
                        <p>AI-powered recommendations for better health</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">👥</div>
                        <h3>Share with Doctors</h3>
                        <p>Secure sharing with healthcare providers</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Privacy Protected</h3>
                        <p>Enterprise-grade security for your data</p>
                    </div>
                </div>
            </section>

            <!-- Login Modal -->
            <div id="loginModal" class="modal hidden">
                <div class="modal-content">
                    <button class="modal-close" id="closeLoginModal">&times;</button>
                    <h2>Log In</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="loginEmail" placeholder="you@example.com" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" id="loginPassword" placeholder="En az 6 karakter" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Log In</button>
                    </form>
                    <p class="modal-footer">Don't have an account? <a href="#" id="switchToSignup">Sign Up</a></p>
                </div>
            </div>

            <!-- Signup Modal -->
            <div id="signupModal" class="modal hidden">
                <div class="modal-content">
                    <button class="modal-close" id="closeSignupModal">&times;</button>
                    <h2>Create Your Account</h2>
                    <form id="signupForm">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" id="signupName" placeholder="John Doe" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="signupEmail" placeholder="you@example.com" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" id="signupPassword" placeholder="En az 6 karakter" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                    <p class="modal-footer">Already have an account? <a href="#" id="switchToLogin">Log In</a></p>
                </div>
            </div>
        </div>
    `;
}

// ============= DASHBOARD =============
function renderDashboard() {
    const user = appState.currentUser;
    
    return `
        <div class="dashboard">
            <!-- Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-header">
                    ${getLogoElement()}
                    <span>Diacora</span>
                </div>
                <nav class="sidebar-nav">
                    <a href="#" class="nav-item ${appState.currentPage === 'dashboard' ? 'active' : ''}" 
                       onclick="navigateTo('dashboard'); return false;">
                        📊 Dashboard
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'glucose' ? 'active' : ''}" 
                       onclick="navigateTo('glucose'); return false;">
                        📈 Glucose
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'bloodpressure' ? 'active' : ''}" 
                       onclick="navigateTo('bloodpressure'); return false;">
                        ❤️ Blood Pressure
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'medications' ? 'active' : ''}" 
                       onclick="navigateTo('medications'); return false;">
                        💊 Medications
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'exercise' ? 'active' : ''}" 
                       onclick="navigateTo('exercise'); return false;">
                        🏃 Exercise
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'mood' ? 'active' : ''}" 
                       onclick="navigateTo('mood'); return false;">
                        😊 Mood
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'analytics' ? 'active' : ''}" 
                       onclick="navigateTo('analytics'); return false;">
                        📊 Analytics
                    </a>
                    <a href="#" class="nav-item ${appState.currentPage === 'settings' ? 'active' : ''}" 
                       onclick="navigateTo('settings'); return false;">
                        ⚙️ Settings
                    </a>
                </nav>
            </aside>

            <!-- Main Content -->
            <main class="main-content">
                <!-- Header -->
                <div class="top-bar">
                    <div class="welcome-section">
                        <h1>Welcome, ${user.name}! 👋</h1>
                        <p>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div class="user-section">
                        <div class="user-avatar">${user.name.split(' ').map(n => n[0]).join('')}</div>
                        <button id="logoutBtn" class="btn btn-small btn-outline">Log Out</button>
                    </div>
                </div>

                <!-- Page Content -->
                <div class="page-content">
                    ${renderPage(appState.currentPage)}
                </div>

                <!-- MODALS -->
                ${renderGlucoseModal()}
                ${renderBPModal()}
            </main>
        </div>
    `;
}

// ============= GLUCOSE MODAL =============
function renderGlucoseModal() {
    const currentDateTime = getCurrentDateTime();
    
    return `
        <div id="glucoseModal" class="modal ${appState.showGlucoseModal ? '' : 'hidden'}">
            <div class="modal-content">
                <button class="modal-close" id="closeGlucoseModal">&times;</button>
                <h2>Add New Glucose Entry</h2>
                <form id="glucoseForm">
                    <div class="form-group">
                        <label>Glucose Value (mg/dL)</label>
                        <input type="number" id="glucoseValue" placeholder="100" min="0" max="400" required>
                    </div>
                    <div class="form-group">
                        <label>Date & Time</label>
                        <input type="datetime-local" id="glucoseDateTime" value="${currentDateTime}" required>
                    </div>
                    <div class="form-group">
                        <label>Meal Status</label>
                        <select id="glucoseMealStatus" required>
                            <option value="Öğünden Önce">Before Meal</option>
                            <option value="Öğünden Sonra">After Meal</option>
                            <option value="Aç Karna">Fasting</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Notes (optional)</label>
                        <textarea id="glucoseNotes" placeholder="Any additional notes..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-full">Save Glucose Entry</button>
                </form>
            </div>
        </div>
    `;
}

// ============= BP MODAL =============
function renderBPModal() {
    const currentDateTime = getCurrentDateTime();
    
    return `
        <div id="bpModal" class="modal ${appState.showBPModal ? '' : 'hidden'}">
            <div class="modal-content">
                <button class="modal-close" id="closeBPModal">&times;</button>
                <h2>Add New Blood Pressure Entry</h2>
                <form id="bpForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Systolic (mmHg)</label>
                            <input type="number" id="bpSystolic" placeholder="120" min="0" max="200" required>
                        </div>
                        <div class="form-group">
                            <label>Diastolic (mmHg)</label>
                            <input type="number" id="bpDiastolic" placeholder="80" min="0" max="130" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Pulse (bpm)</label>
                        <input type="number" id="bpPulse" placeholder="70" min="0" max="200">
                    </div>
                    <div class="form-group">
                        <label>Date & Time</label>
                        <input type="datetime-local" id="bpDateTime" value="${currentDateTime}" required>
                    </div>
                    <div class="form-group">
                        <label>Notes (optional)</label>
                        <textarea id="bpNotes" placeholder="Any additional notes..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-full">Save BP Entry</button>
                </form>
            </div>
        </div>
    `;
}

// ============= PAGE RENDERERS =============
function renderPage(page) {
    const health = appState.healthData;
    
    switch(page) {
        case 'dashboard':
            return renderDashboardContent();
        case 'glucose':
            return renderGlucosePage();
        case 'bloodpressure':
            return renderBloodPressurePage();
        case 'medications':
            return renderMedicationsPage();
        case 'exercise':
            return renderExercisePage();
        case 'mood':
            return renderMoodPage();
        case 'analytics':
            return renderAnalyticsPage();
        case 'settings':
            return renderSettingsPage();
        default:
            return renderDashboardContent();
    }
}

function renderDashboardContent() {
    const user = appState.currentUser;
    const health = appState.healthData;
    
    return `
        <div class="dashboard-content">
            <!-- Status Cards -->
            <div class="cards-grid">
                <div class="card card-glucose">
                    <div class="card-header">
                        <h3>Glucose Level</h3>
                        <span class="status-badge status-${health.glucose.status}">${health.glucose.status.toUpperCase()}</span>
                    </div>
                    <div class="card-value">${health.glucose.current} <span class="unit">${health.glucose.unit}</span></div>
                    <div class="card-target">Target: ${health.glucose.target}</div>
                    <div class="card-footer">↗️ Stable trend</div>
                </div>

                <div class="card card-bp">
                    <div class="card-header">
                        <h3>Blood Pressure</h3>
                        <span class="status-badge status-${health.bloodPressure.status}">${health.bloodPressure.status.toUpperCase()}</span>
                    </div>
                    <div class="card-value">${health.bloodPressure.systolic}/<span>${health.bloodPressure.diastolic}</span></div>
                    <div class="card-target">Target: ${health.bloodPressure.target}</div>
                    <div class="card-footer">Pulse: ${health.bloodPressure.pulse} bpm</div>
                </div>

                <div class="card card-weight">
                    <div class="card-header">
                        <h3>Weight</h3>
                        <span class="status-badge status-${health.weight.status}">${health.weight.status.toUpperCase()}</span>
                    </div>
                    <div class="card-value">${health.weight.current} <span class="unit">${health.weight.unit}</span></div>
                    <div class="card-target">BMI: ${health.weight.bmi} (Normal)</div>
                    <div class="card-footer">Target: ${health.weight.target} kg</div>
                </div>
            </div>

            <!-- Mood Tracker -->
            <div class="card card-full">
                <div class="card-header">
                    <h3>How Are You Feeling Today?</h3>
                </div>
                <div class="mood-tracker">
                    <button class="mood-btn ${appState.selectedMood === '😢' ? 'selected' : ''}" data-mood="😢">😢</button>
                    <button class="mood-btn ${appState.selectedMood === '😐' ? 'selected' : ''}" data-mood="😐">😐</button>
                    <button class="mood-btn ${appState.selectedMood === '😊' ? 'selected' : ''}" data-mood="😊">😊</button>
                    <button class="mood-btn ${appState.selectedMood === '😄' ? 'selected' : ''}" data-mood="😄">😄</button>
                    <button class="mood-btn ${appState.selectedMood === '🤩' ? 'selected' : ''}" data-mood="🤩">🤩</button>
                    <button class="mood-btn ${appState.selectedMood === '😴' ? 'selected' : ''}" data-mood="😴">😴</button>
                </div>
                ${appState.selectedMood ? `<div class="mood-display">Your mood: <strong>${appState.selectedMood}</strong></div>` : ''}
                ${appState.selectedMood ? `<button class="btn btn-primary btn-small" id="saveMoodBtn">Save Mood Entry</button>` : ''}
            </div>

            <!-- Recent Measurements -->
            <div class="card card-full">
                <div class="card-header">
                    <h3>Recent Measurements</h3>
                </div>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Glucose (mg/dL)</th>
                            <th>BP (mmHg)</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${health.glucoseHistory.slice(0, 5).map((record, idx) => `
                            <tr>
                                <td>${record.date}</td>
                                <td>${record.value}</td>
                                <td>${health.bpHistory[idx]?.systolic}/${health.bpHistory[idx]?.diastolic}</td>
                                <td><span class="status-badge status-normal">✓ Normal</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Quick Actions -->
            <div class="card card-full">
                <div class="card-header">
                    <h3>Quick Actions</h3>
                </div>
                <div class="quick-actions">
                    <button class="action-btn" onclick="appState.showGlucoseModal=true; renderApp();">📊 Log Glucose</button>
                    <button class="action-btn" onclick="appState.showBPModal=true; renderApp();">❤️ Log BP</button>
                    <button class="action-btn">⚖️ Log Weight</button>
                    <button class="action-btn">🏃 Log Exercise</button>
                </div>
            </div>
        </div>
    `;
}

function renderGlucosePage() {
    const health = appState.healthData;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>📈 Glucose Tracking</h2>
                    <button class="btn btn-primary" onclick="appState.showGlucoseModal=true; renderApp();" style="font-size: 20px; width: 44px; height: 44px; padding: 0;">+</button>
                </div>
            </div>
            
            <div class="cards-grid">
                <div class="card card-large">
                    <div class="card-header">
                        <h3>Current Glucose</h3>
                    </div>
                    <div class="card-value">${health.glucose.current} mg/dL</div>
                    <div class="card-target">Target: ${health.glucose.target}</div>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>7-Day History</h3>
                </div>
                <div class="mini-chart">
                    ${health.glucoseHistory.map(d => `
                        <div class="chart-bar-container">
                            <div class="chart-bar" style="height: ${(d.value / 150) * 100}%"></div>
                            <span class="chart-label">${d.date}</span>
                            <span class="chart-value">${d.value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>All Records</h3>
                </div>
                <table class="data-table">
                    <thead>
                        <tr><th>Date</th><th>Time</th><th>Glucose (mg/dL)</th><th>Meal Status</th></tr>
                    </thead>
                    <tbody>
                        ${health.glucoseHistory.map(r => `
                            <tr>
                                <td>${r.date}</td>
                                <td>${r.time}</td>
                                <td>${r.value}</td>
                                <td>Before Meal</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderBloodPressurePage() {
    const health = appState.healthData;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>❤️ Blood Pressure Tracking</h2>
                    <button class="btn btn-primary" onclick="appState.showBPModal=true; renderApp();" style="font-size: 20px; width: 44px; height: 44px; padding: 0;">+</button>
                </div>
            </div>
            
            <div class="cards-grid">
                <div class="card">
                    <h3>Systolic</h3>
                    <div class="card-value">${health.bloodPressure.systolic}</div>
                    <p class="card-target">Target: <130</p>
                </div>
                <div class="card">
                    <h3>Diastolic</h3>
                    <div class="card-value">${health.bloodPressure.diastolic}</div>
                    <p class="card-target">Target: <80</p>
                </div>
                <div class="card">
                    <h3>Pulse</h3>
                    <div class="card-value">${health.bloodPressure.pulse}</div>
                    <p class="card-target">bpm</p>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Recent Readings</h3>
                </div>
                <table class="data-table">
                    <thead>
                        <tr><th>Date</th><th>Systolic</th><th>Diastolic</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        ${health.bpHistory.map(r => `
                            <tr>
                                <td>${r.date}</td>
                                <td>${r.systolic}</td>
                                <td>${r.diastolic}</td>
                                <td><span class="status-badge status-normal">✓ Normal</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderMedicationsPage() {
    const health = appState.healthData;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <h2>💊 Medications</h2>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Current Medications</h3>
                </div>
                <div class="medications-list">
                    ${health.medications.map(med => `
                        <div class="medication-item">
                            <div class="medication-info">
                                <h4>${med.name}</h4>
                                <p>Dosage: ${med.dosage}</p>
                                <p>Time: ${med.time}</p>
                            </div>
                            <div class="medication-adherence">
                                <div class="adherence-bar">
                                    <div class="adherence-fill" style="width: ${med.adherence}%"></div>
                                </div>
                                <p>${med.adherence}% adherence</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Today's Schedule</h3>
                </div>
                <div class="medication-schedule">
                    <div class="schedule-item completed">
                        <span class="time">08:00 AM</span>
                        <span class="med">Aspirin 100mg</span>
                        <span class="status">✓ Taken</span>
                    </div>
                    <div class="schedule-item completed">
                        <span class="time">08:30 AM</span>
                        <span class="med">Metformin 500mg</span>
                        <span class="status">✓ Taken</span>
                    </div>
                    <div class="schedule-item pending">
                        <span class="time">08:00 PM</span>
                        <span class="med">Lisinopril 10mg</span>
                        <span class="status">⏳ Pending</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderExercisePage() {
    const health = appState.healthData;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <h2>🏃 Exercise & Activity</h2>
            </div>

            <div class="cards-grid">
                <div class="card">
                    <h3>This Week</h3>
                    <div class="card-value">165 min</div>
                    <p>Goal: 150 min ✓</p>
                </div>
                <div class="card">
                    <h3>Calories Burned</h3>
                    <div class="card-value">850</div>
                    <p>This week</p>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Recent Activity</h3>
                </div>
                <div class="exercise-list">
                    ${health.exercises.map(ex => `
                        <div class="exercise-item">
                            <div class="exercise-icon">🏃</div>
                            <div class="exercise-info">
                                <h4>${ex.type}</h4>
                                <p>${ex.date} • ${ex.duration} minutes</p>
                            </div>
                            <div class="exercise-calories">
                                <span>${ex.calories}</span>
                                <p>kcal</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderMoodPage() {
    const health = appState.healthData;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <h2>😊 Mood & Wellness</h2>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>How are you feeling right now?</h3>
                </div>
                <div class="mood-tracker mood-tracker-large">
                    <button class="mood-btn ${appState.selectedMood === '😢' ? 'selected' : ''}" data-mood="😢">😢</button>
                    <button class="mood-btn ${appState.selectedMood === '😐' ? 'selected' : ''}" data-mood="😐">😐</button>
                    <button class="mood-btn ${appState.selectedMood === '😊' ? 'selected' : ''}" data-mood="😊">😊</button>
                    <button class="mood-btn ${appState.selectedMood === '😄' ? 'selected' : ''}" data-mood="😄">😄</button>
                    <button class="mood-btn ${appState.selectedMood === '🤩' ? 'selected' : ''}" data-mood="🤩">🤩</button>
                    <button class="mood-btn ${appState.selectedMood === '😴' ? 'selected' : ''}" data-mood="😴">😴</button>
                </div>
                ${appState.selectedMood ? `<button class="btn btn-primary btn-full" id="saveMoodBtn">Save Mood Entry</button>` : ''}
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Mood History</h3>
                </div>
                <div class="mood-history">
                    ${health.moods.map(m => `
                        <div class="mood-history-item">
                            <span class="mood-emoji">${m.mood}</span>
                            <div class="mood-history-info">
                                <p><strong>${m.date}</strong></p>
                                <p>${m.note}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderAnalyticsPage() {
    return `
        <div class="page-section">
            <div class="page-header">
                <h2>📊 Analytics & Insights</h2>
            </div>

            <div class="cards-grid">
                <div class="card">
                    <h3>Compliance Rate</h3>
                    <div class="card-value">97%</div>
                    <p>Medication adherence</p>
                </div>
                <div class="card">
                    <h3>Avg. Glucose</h3>
                    <div class="card-value">104.5</div>
                    <p>mg/dL (7-day avg)</p>
                </div>
                <div class="card">
                    <h3>Avg. BP</h3>
                    <div class="card-value">128/82</div>
                    <p>mmHg (7-day avg)</p>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Health Trends</h3>
                </div>
                <div class="trends-info">
                    <p>✓ Glucose levels are stable</p>
                    <p>✓ Blood pressure within target</p>
                    <p>✓ Excellent medication compliance</p>
                    <p>✓ Regular exercise routine</p>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Health Score</h3>
                </div>
                <div class="health-score">
                    <div class="score-circle">85/100</div>
                    <p>Excellent! Keep up the good work!</p>
                </div>
            </div>
        </div>
    `;
}

function renderSettingsPage() {
    const user = appState.settingsEditMode ? appState.tempSettings : appState.currentUser;
    
    return `
        <div class="page-section">
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>⚙️ Settings</h2>
                    ${!appState.settingsEditMode ? 
                        `<button class="btn btn-primary" onclick="appState.settingsEditMode=true; appState.tempSettings={...appState.currentUser}; renderApp();">Edit Settings</button>` :
                        `<div style="display: flex; gap: 10px;">
                            <button class="btn btn-primary" onclick="saveSettings();">Save Changes</button>
                            <button class="btn btn-outline" onclick="appState.settingsEditMode=false; renderApp();">Cancel</button>
                        </div>`
                    }
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Profile Information</h3>
                </div>
                <div class="settings-form">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" id="settingName" value="${user.name}" ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="settingEmail" value="${user.email}" ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Age</label>
                            <input type="number" id="settingAge" value="${user.age}" ${appState.settingsEditMode ? '' : 'disabled'}>
                        </div>
                        <div class="form-group">
                            <label>Gender</label>
                            <input type="text" id="settingGender" value="${user.gender}" ${appState.settingsEditMode ? '' : 'disabled'}>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" id="settingPhone" value="${user.phone}" ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Health Preferences</h3>
                </div>
                <div class="${appState.settingsEditMode ? 'settings-form' : 'settings-options'}">
                    <div class="form-group">
                        <label>Glucose Target Range</label>
                        <input type="text" id="settingGlucoseTarget" value="${user.glucoseTarget}" ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                    <div class="form-group">
                        <label>Blood Pressure Target</label>
                        <input type="text" id="settingBPTarget" value="${user.bpTarget}" ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                </div>
            </div>

            <div class="card card-full">
                <div class="card-header">
                    <h3>Notifications</h3>
                </div>
                <div class="settings-options">
                    <div class="setting-toggle">
                        <span>Push Notifications</span>
                        <input type="checkbox" checked ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                    <div class="setting-toggle">
                        <span>Email Reports</span>
                        <input type="checkbox" checked ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                    <div class="setting-toggle">
                        <span>Medication Alerts</span>
                        <input type="checkbox" checked ${appState.settingsEditMode ? '' : 'disabled'}>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============= SAVE SETTINGS FUNCTION =============
function saveSettings() {
    appState.tempSettings.name = document.getElementById('settingName').value;
    appState.tempSettings.email = document.getElementById('settingEmail').value;
    appState.tempSettings.age = parseInt(document.getElementById('settingAge').value);
    appState.tempSettings.gender = document.getElementById('settingGender').value;
    appState.tempSettings.phone = document.getElementById('settingPhone').value;
    appState.tempSettings.glucoseTarget = document.getElementById('settingGlucoseTarget').value;
    appState.tempSettings.bpTarget = document.getElementById('settingBPTarget').value;
    
    appState.currentUser = { ...appState.tempSettings };
    localStorage.setItem('diacora_user', JSON.stringify(appState.currentUser));
    
    appState.settingsEditMode = false;
    alert('✓ Settings saved successfully!');
    renderApp();
}

// ============= EVENT HANDLERS =============
function attachEventListeners() {
    // Landing page events
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const heroCtaBtn = document.getElementById('heroCtaBtn');
    
    if (loginBtn) loginBtn.addEventListener('click', () => openModal('loginModal'));
    if (signupBtn) signupBtn.addEventListener('click', () => openModal('signupModal'));
    if (heroCtaBtn) heroCtaBtn.addEventListener('click', () => openModal('signupModal'));

    // Modal events
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const glucoseForm = document.getElementById('glucoseForm');
    const bpForm = document.getElementById('bpForm');
    
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const closeGlucoseModal = document.getElementById('closeGlucoseModal');
    const closeBPModal = document.getElementById('closeBPModal');
    
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    if (glucoseForm) glucoseForm.addEventListener('submit', handleGlucoseSubmit);
    if (bpForm) bpForm.addEventListener('submit', handleBPSubmit);
    
    if (closeLoginModal) closeLoginModal.addEventListener('click', () => closeModal('loginModal'));
    if (closeSignupModal) closeSignupModal.addEventListener('click', () => closeModal('signupModal'));
    if (closeGlucoseModal) closeGlucoseModal.addEventListener('click', () => { appState.showGlucoseModal = false; renderApp(); });
    if (closeBPModal) closeBPModal.addEventListener('click', () => { appState.showBPModal = false; renderApp(); });
    
    if (switchToSignup) switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('loginModal');
        openModal('signupModal');
    });
    if (switchToLogin) switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('signupModal');
        openModal('loginModal');
    });

    // Dashboard events
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Mood tracker
    const moodBtns = document.querySelectorAll('.mood-btn');
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.selectedMood = btn.dataset.mood;
            renderApp();
        });
    });

    const saveMoodBtn = document.getElementById('saveMoodBtn');
    if (saveMoodBtn) {
        saveMoodBtn.addEventListener('click', () => {
            alert(`✓ Mood "${appState.selectedMood}" saved for ${new Date().toLocaleDateString()}`);
            appState.selectedMood = null;
            renderApp();
        });
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        appState.currentUser = { ...mockUser, email };
        localStorage.setItem('diacora_user', JSON.stringify(appState.currentUser));
        appState.isLoggedIn = true;
        appState.currentPage = 'dashboard';
        renderApp();
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        appState.currentUser = { ...mockUser, name, email };
        localStorage.setItem('diacora_user', JSON.stringify(appState.currentUser));
        appState.isLoggedIn = true;
        appState.currentPage = 'dashboard';
        renderApp();
    }
}

function handleGlucoseSubmit(e) {
    e.preventDefault();
    const value = document.getElementById('glucoseValue').value;
    const mealStatus = document.getElementById('glucoseMealStatus').value;
    const dateTime = document.getElementById('glucoseDateTime').value;
    
    if (value) {
        const date = new Date(dateTime);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        appState.healthData.glucoseHistory.unshift({
            date: dateStr,
            value: parseInt(value),
            time: timeStr
        });
        
        appState.showGlucoseModal = false;
        alert(`✓ Glucose ${value} mg/dL saved (${mealStatus}) at ${timeStr}`);
        renderApp();
    }
}

function handleBPSubmit(e) {
    e.preventDefault();
    const systolic = document.getElementById('bpSystolic').value;
    const diastolic = document.getElementById('bpDiastolic').value;
    const dateTime = document.getElementById('bpDateTime').value;
    
    if (systolic && diastolic) {
        const date = new Date(dateTime);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        appState.healthData.bpHistory.unshift({
            date: dateStr,
            systolic: parseInt(systolic),
            diastolic: parseInt(diastolic)
        });
        
        appState.showBPModal = false;
        alert(`✓ BP ${systolic}/${diastolic} mmHg saved`);
        renderApp();
    }
}

function handleLogout() {
    localStorage.removeItem('diacora_user');
    appState.isLoggedIn = false;
    appState.currentPage = 'landing';
    appState.selectedMood = null;
    appState.settingsEditMode = false;
    renderApp();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
window.addEventListener('load', () => {
    attachEventListeners();
});
