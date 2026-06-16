// Diasağlık - Diyabet ve Hipertansiyon Yönetimi
// Professional Health Management Application

let currentUser = null;
let isLoggedIn = false;
let currentPage = 'landing';

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    if (isLoggedIn && currentUser) {
        showDashboard();
    } else {
        showLandingPage();
    }
}

// ================== LANDING PAGE ==================
function showLandingPage() {
    currentPage = 'landing';
    const app = document.getElementById('app');
    
    app.innerHTML = `
    <div class="landing-container">
        <!-- NAVBAR -->
        <nav class="navbar">
            <div class="nav-content">
                <div class="logo-brand">
                    <span class="brand-name">Diasağlık</span>
                </div>
                <div class="nav-buttons">
                    <button class="nav-link" onclick="showLoginPage()">Giriş Yap</button>
                    <button class="nav-link-primary" onclick="showRegisterPage()">Kayıt Ol</button>
                </div>
            </div>
        </nav>

        <!-- HERO SECTION - mymhealth STYLE -->
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Diyabet ve Hipertansiyonu Kontrol Edin</h1>
                <button class="play-video-btn" onclick="alert('Demo video oynatılacak!')">▶ VİDEO İZLE</button>
            </div>
            <div class="hero-visual">
                <div class="device-mockup">
                    <div class="device-screen">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 800'%3E%3Crect fill='%23f8f9fa' width='400' height='800'/%3E%3Ctext x='20' y='60' font-size='24' font-weight='bold' fill='%232c3e50'%3EMerhaba,%3C/text%3E%3Ctext x='20' y='90' font-size='20' font-weight='bold' fill='%232c3e50'%3EAbdulkadir%3C/text%3E%3Ccircle cx='360' cy='50' r='35' fill='%23FFD700'/%3E%3C/svg%3E" alt="Dashboard">
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES SECTION -->
        <section class="features">
            <div class="section-header">
                <h2>Temel Özellikler</h2>
                <p>Sağlığınızı kontrol altında tutmak için gereken her şey</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🩸</div>
                    <h3>Kan Şekeri Takibi</h3>
                    <p>Günlük ölçümlerinizi kaydedin ve eğilimleri görün</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💓</div>
                    <h3>Kan Basıncı Monitoring</h3>
                    <p>Kan basıncınızı takip edin ve normal aralıklarını koruyun</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚖️</div>
                    <h3>Kilo Yönetimi</h3>
                    <p>Kilo değişikliklerinizi takip edin</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📸</div>
                    <h3>Kamera ile Ölçüm</h3>
                    <p>Kameranızla şeker cihazını tarayın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💊</div>
                    <h3>İlaç Hatırlatıcısı</h3>
                    <p>Otomatik bildirimler alın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Mobil Uyumlu</h3>
                    <p>Her yerden, her zaman erişin</p>
                </div>
            </div>
        </section>

        <!-- HOW IT WORKS -->
        <section class="how-it-works">
            <div class="section-header">
                <h2>Nasıl Çalışır?</h2>
            </div>
            <div class="steps-grid">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <h3>Üye Ol</h3>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <h3>Ölçüm Ekle</h3>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <h3>Takip Et</h3>
                </div>
            </div>
        </section>

        <!-- CTA SECTION -->
        <section class="cta-section">
            <button class="btn-primary btn-lg" onclick="showRegisterPage()">Ücretsiz Hesap Oluştur</button>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <p>&copy; 2024 Diasağlık - Diyabet ve Hipertansiyon Yönetimi</p>
        </footer>
    </div>
    `;
}

// ================== LOGIN PAGE ==================
function showLoginPage() {
    currentPage = 'login';
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="auth-container">
        <div class="auth-left">
            <div class="auth-header">
                <h1>Diasağlık</h1>
                <p class="auth-subtitle">Diyabet ve Hipertansiyon Yönetimi</p>
            </div>
            <div class="auth-info">
                <div class="info-item">
                    <div class="info-icon">📊</div>
                    <h3>Sağlık Verilerinizi Takip Edin</h3>
                    <p>Kan şekeri, kan basıncı ve kilonuzu günlük olarak takip edin</p>
                </div>
                <div class="info-item">
                    <div class="info-icon">📸</div>
                    <h3>Kamera ile Ölçün</h3>
                    <p>Şeker cihazını kamerayla tarayın</p>
                </div>
                <div class="info-item">
                    <div class="info-icon">💊</div>
                    <h3>İlaç Hatırlatıcısı</h3>
                    <p>Otomatik bildirimler alın</p>
                </div>
            </div>
        </div>
        
        <div class="auth-right">
            <div class="auth-form-container">
                <div class="auth-tabs">
                    <button class="tab-btn active" onclick="switchTab('login')">Giriş Yap</button>
                    <button class="tab-btn" onclick="switchTab('register')">Kayıt Ol</button>
                </div>
                
                <div id="login-tab" class="auth-tab active">
                    <form onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label>E-posta</label>
                            <input type="email" placeholder="ornek@email.com" required>
                        </div>
                        <div class="form-group">
                            <label>Şifre</label>
                            <input type="password" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Giriş Yap</button>
                    </form>
                </div>
                
                <div id="register-tab" class="auth-tab">
                    <form onsubmit="handleRegister(event)">
                        <div class="form-group">
                            <label>Ad Soyad</label>
                            <input type="text" placeholder="Adınız" required>
                        </div>
                        <div class="form-group">
                            <label>E-posta</label>
                            <input type="email" placeholder="ornek@email.com" required>
                        </div>
                        <div class="form-group">
                            <label>Yaş</label>
                            <input type="number" placeholder="45" required>
                        </div>
                        <div class="form-group">
                            <label>Şifre</label>
                            <input type="password" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Kayıt Ol</button>
                    </form>
                </div>
            </div>
            <div class="back-link">
                <a href="#" onclick="showLandingPage(); return false;">← Ana Sayfaya Dön</a>
            </div>
        </div>
    </div>
    `;
}

function showRegisterPage() {
    showLoginPage();
    setTimeout(() => switchTab('register'), 0);
}

function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    const tabEl = document.getElementById(tab + '-tab');
    const btnEl = document.querySelector(`[onclick="switchTab('${tab}')"]`);
    
    if (tabEl) tabEl.classList.add('active');
    if (btnEl) btnEl.classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    currentUser = { id: '123', name: 'Abdulkadir Bey', email: 'test@example.com', age: 45 };
    isLoggedIn = true;
    showDashboard();
}

function handleRegister(event) {
    event.preventDefault();
    const name = event.target.querySelector('input[type="text"]').value;
    currentUser = { id: Math.random().toString(36).substr(2, 9), name: name, email: 'test@example.com', age: 45 };
    isLoggedIn = true;
    showDashboard();
}

// ================== DASHBOARD ==================
function showDashboard() {
    currentPage = 'dashboard';
    const app = document.getElementById('app');
    
    app.innerHTML = `
    <div class="app-container">
        <header class="header">
            <div class="header-content">
                <h1>Diasağlık</h1>
                <nav class="nav">
                    <button class="nav-btn active" onclick="goToSection('dashboard')">Ana Sayfa</button>
                    <button class="nav-btn" onclick="goToSection('measurements')">Ölçümler</button>
                    <button class="nav-btn" onclick="goToSection('profile')">Profil</button>
                    <button class="nav-btn" onclick="logout()">Çıkış</button>
                </nav>
            </div>
        </header>
        
        <main class="main-content">
            <div class="welcome-header">
                <div class="welcome-left">
                    <div class="user-avatar">👤</div>
                    <div class="welcome-text">
                        <h2>Merhaba, ${currentUser.name}</h2>
                        <p>Bugün sağlığınız kontrol altında.</p>
                    </div>
                </div>
                <div class="mood-emoji">😊</div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-label">
                        <span class="stat-icon">🩸</span>
                        <span>Son Şeker Ölçümü</span>
                    </div>
                    <div class="stat-value">140</div>
                    <div class="stat-unit">mg/dL</div>
                    <div class="stat-status">Normal</div>
                    <button class="stat-btn">➕</button>
                </div>

                <div class="stat-card">
                    <div class="stat-label">
                        <span class="stat-icon">💓</span>
                        <span>Son Tansiyon Ölçümü</span>
                    </div>
                    <div class="stat-value">140/65</div>
                    <div class="stat-unit">mmHg</div>
                    <div class="stat-status">Normal</div>
                    <button class="stat-btn">➕</button>
                </div>

                <div class="stat-card medication">
                    <div class="stat-label">
                        <span class="stat-icon">💊</span>
                        <span>Günlük İlaçlar</span>
                    </div>
                    <div class="stat-value">0 / 0</div>
                    <div class="stat-unit">Doz Alındı</div>
                    <div class="medication-pills">
                        <span class="pill">💊</span>
                        <span class="pill">💊</span>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-label">
                        <span class="stat-icon">🩺</span>
                        <span>İnsülin Takibi</span>
                    </div>
                    <div class="insulin-section">
                        <div class="insulin-type">
                            <span class="insulin-label">B</span>
                            <span class="insulin-name">Bolus İnsülin</span>
                        </div>
                        <div class="insulin-type">
                            <span class="insulin-label">L</span>
                            <span class="insulin-name">Bazal İnsülin</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `;
}

function goToSection(section) {
    if (section === 'dashboard') {
        showDashboard();
    }
}

function logout() {
    isLoggedIn = false;
    currentUser = null;
    showLandingPage();
}
