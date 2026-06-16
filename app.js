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
                    <img src="/logo.png" alt="Diasağlık" class="nav-logo">
                    <span class="brand-name">Diasağlık</span>
                </div>
                <div class="nav-buttons">
                    <button class="nav-link" onclick="showLoginPage()">Giriş Yap</button>
                    <button class="nav-link-primary" onclick="showRegisterPage()">Kayıt Ol</button>
                </div>
            </div>
        </nav>

        <!-- HERO SECTION - PROFESSIONAL DESIGN -->
        <section class="hero-professional">
            <div class="hero-left">
                <h1 class="hero-title">Diyabet ve Hipertansiyonu Kontrol Edin</h1>
                <p class="hero-description">Sağlığınızı günlük olarak takip edin, verilerinizi analiz edin ve doktorunuzla paylaşın</p>
                <button class="btn-hero" onclick="showRegisterPage()">Ücretsiz Başla</button>
                <p class="hero-trust">Kredi kartı gerekmez • 30 saniye sürer</p>
            </div>
            <div class="hero-right">
                <div class="gradient-card">
                    <div class="chart-visual">
                        <div class="chart-bar blue"></div>
                        <div class="chart-bar green"></div>
                        <div class="chart-bar red"></div>
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
                    <p>Günlük kan şekeri ölçümlerinizi kaydedin ve eğilimleri görün</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💓</div>
                    <h3>Kan Basıncı Monitoring</h3>
                    <p>Kan basıncınızı takip edin ve normal aralıklarını koruyun</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚖️</div>
                    <h3>Kilo Yönetimi</h3>
                    <p>Kilo değişikliklerinizi takip edin ve sağlıklı hedefinize ulaşın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h3>Detaylı Grafikler</h3>
                    <p>Verilerinizi görsel grafiklerle analiz edin ve ilerleyişi görün</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💊</div>
                    <h3>İlaç Hatırlatıcıları</h3>
                    <p>İlaçlarınızı zamanında almayı unutmayın, otomatik bildirimler alın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Mobil Uyumlu</h3>
                    <p>Her yerden, her zaman erişin - telefon, tablet, bilgisayar</p>
                </div>
            </div>
        </section>

        <!-- HOW IT WORKS SECTION -->
        <section class="how-it-works">
            <div class="section-header">
                <h2>Nasıl Çalışır?</h2>
                <p>3 adımda başlayın</p>
            </div>
            <div class="steps-grid">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <h3>Üye Ol</h3>
                    <p>E-posta ve şifresiyle ücretsiz hesap oluşturun</p>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <h3>Verilerinizi Girin</h3>
                    <p>Sağlık ölçümlerinizi kaydedin - 30 saniye gibi az zaman sürer</p>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <h3>Takip Edin</h3>
                    <p>Raporlarınızı görün ve hedeflerinize doğru ilerleyin</p>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS SECTION -->
        <section class="testimonials">
            <div class="section-header">
                <h2>Kullanıcı Yorumları</h2>
                <p>Diasağlık'ı kullananlar neler söylüyor</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Diasağlık benim hayatımı değiştirdi. Sağlığımı daha iyi kontrol edebiliyorum ve doktorum verilerime çok memnun."</p>
                    <div class="testimonial-author">
                        <strong>Ahmet Yılmaz</strong>
                        <span>İstanbul</span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Kolay kullanımı, güzel arayüzü ve hızlı raporları çok sevdim. Kan şekerim çok daha stabil oldu."</p>
                    <div class="testimonial-author">
                        <strong>Fatma Kaya</strong>
                        <span>Ankara</span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Mobil uygulaması süper. İşte, evde, yolda her yerden kullanabiliyorum. Çok rahat."</p>
                    <div class="testimonial-author">
                        <strong>Mehmet Sözer</strong>
                        <span>Smyrna</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA SECTION -->
        <section class="cta-section">
            <div class="cta-content">
                <h2>Sağlığınızı Kontrol Edin</h2>
                <p>Diasağlık ile diyabet ve hipertansiyon yönetimi hiç bu kadar kolay olmamıştı</p>
                <button class="btn-primary btn-lg" onclick="showRegisterPage()">Ücretsiz Hesap Oluştur</button>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Diasağlık</h4>
                    <p>Diyabet ve Hipertansiyon Yönetimi Platformu</p>
                </div>
                <div class="footer-section">
                    <h4>Bağlantılar</h4>
                    <ul>
                        <li><a href="#">Hakkında</a></li>
                        <li><a href="#">Gizlilik</a></li>
                        <li><a href="#">Şartlar</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Sosyal Medya</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Diasağlık - Tüm Hakları Saklıdır</p>
            </div>
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
                <img src="/logo.png" alt="Diasağlık" class="auth-logo">
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
                    <div class="info-icon">📈</div>
                    <h3>İlerlemenizi Görün</h3>
                    <p>Detaylı grafikler ve raporlarla ilerleyişinizi takip edin</p>
                </div>
                <div class="info-item">
                    <div class="info-icon">💊</div>
                    <h3>İlaç Hatırlatıcısı</h3>
                    <p>Verilen ilaçlar için otomatik hatırlatıcılar alın</p>
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
                            <label for="login-email">E-posta Adresi</label>
                            <input type="email" id="login-email" placeholder="ornek@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="login-password">Şifre</label>
                            <input type="password" id="login-password" placeholder="••••••••" required>
                        </div>
                        <div class="form-options">
                            <label class="checkbox">
                                <input type="checkbox">
                                <span>Beni Hatırla</span>
                            </label>
                            <a href="#" class="forgot-password">Şifremi Unuttum?</a>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Giriş Yap</button>
                    </form>
                </div>
                
                <div id="register-tab" class="auth-tab">
                    <form onsubmit="handleRegister(event)">
                        <div class="form-group">
                            <label for="register-name">Ad Soyad</label>
                            <input type="text" id="register-name" placeholder="Adınız Soyadınız" required>
                        </div>
                        <div class="form-group">
                            <label for="register-email">E-posta Adresi</label>
                            <input type="email" id="register-email" placeholder="ornek@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="register-age">Yaş</label>
                            <input type="number" id="register-age" placeholder="45" min="1" max="120" required>
                        </div>
                        <div class="form-group">
                            <label for="register-password">Şifre</label>
                            <input type="password" id="register-password" placeholder="••••••••" required>
                        </div>
                        <div class="form-group">
                            <label for="register-confirm">Şifreyi Onayla</label>
                            <input type="password" id="register-confirm" placeholder="••••••••" required>
                        </div>
                        <div class="form-check">
                            <label class="checkbox">
                                <input type="checkbox" required>
                                <span>Kullanım Koşullarını Kabul Ediyorum</span>
                            </label>
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
    const email = document.getElementById('login-email').value;
    
    currentUser = {
        id: '123',
        name: 'Ahmet Yılmaz',
        email: email,
        age: 45
    };
    isLoggedIn = true;
    showDashboard();
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const age = document.getElementById('register-age').value;
    
    currentUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        age: age
    };
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
                <div class="logo-section">
                    <img src="/logo.png" alt="Diasağlık" class="logo">
                    <h1>Diasağlık</h1>
                </div>
                <nav class="nav">
                    <button class="nav-btn active" onclick="goToSection('dashboard')">Ana Sayfa</button>
                    <button class="nav-btn" onclick="goToSection('measurements')">Ölçümler</button>
                    <button class="nav-btn" onclick="goToSection('profile')">Profil</button>
                    <button class="nav-btn" onclick="logout()">Çıkış</button>
                </nav>
            </div>
        </header>
        
        <main class="main-content" id="main-content">
            ${getDashboardContent()}
        </main>
        
        <footer class="footer">
            <p>&copy; 2024 Diasağlık - Diyabet ve Hipertansiyon Yönetimi</p>
        </footer>
    </div>
    `;
}

function getDashboardContent() {
    return `
    <div class="dashboard">
        <div class="welcome-section">
            <h2>Merhaba, ${currentUser.name}! 👋</h2>
            <p class="subtitle">Bugünkü Sağlık Özeti</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card glucose">
                <div class="stat-header">
                    <span class="stat-icon">🩸</span>
                    <span class="stat-title">Kan Şekeri</span>
                </div>
                <div class="stat-value">105</div>
                <div class="stat-unit">mg/dL</div>
                <div class="stat-status good">✓ Normal</div>
                <div class="stat-trend">Hedef: 80-130</div>
            </div>
            
            <div class="stat-card blood-pressure">
                <div class="stat-header">
                    <span class="stat-icon">💓</span>
                    <span class="stat-title">Kan Basıncı</span>
                </div>
                <div class="stat-value">128/82</div>
                <div class="stat-unit">mmHg</div>
                <div class="stat-status good">✓ Normal</div>
                <div class="stat-trend">Hedef: <130/80</div>
            </div>
            
            <div class="stat-card weight">
                <div class="stat-header">
                    <span class="stat-icon">⚖️</span>
                    <span class="stat-title">Kilo</span>
                </div>
                <div class="stat-value">75</div>
                <div class="stat-unit">kg (BMI: 24.9)</div>
                <div class="stat-status good">✓ Normal</div>
                <div class="stat-trend">Sağlıklı Aralık</div>
            </div>
            
            <div class="stat-card mood">
                <div class="stat-header">
                    <span class="stat-icon">😊</span>
                    <span class="stat-title">Ruh Hali</span>
                </div>
                <div class="stat-value">İyi</div>
                <div class="stat-unit">Bugün</div>
                <div class="stat-status good">✓ Pozitif</div>
                <div class="stat-trend">Son 7 gün: İyi</div>
            </div>
        </div>
        
        <div class="action-section">
            <h3>Hızlı İşlemler</h3>
            <div class="action-buttons">
                <button class="action-btn" onclick="goToSection('measurements')">
                    <span class="action-icon">➕</span>
                    <span>Ölçüm Ekle</span>
                </button>
                <button class="action-btn" onclick="goToSection('profile')">
                    <span class="action-icon">✏️</span>
                    <span>Profili Düzenle</span>
                </button>
                <button class="action-btn">
                    <span class="action-icon">📋</span>
                    <span>Raporlar</span>
                </button>
                <button class="action-btn">
                    <span class="action-icon">💊</span>
                    <span>İlaçlar</span>
                </button>
            </div>
        </div>
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
