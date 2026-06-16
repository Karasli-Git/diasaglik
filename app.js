document.addEventListener('DOMContentLoaded', function() {
    renderPage();
});

function renderPage() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
    <div class="page-container">
        <!-- NAVBAR -->
        <nav class="navbar">
            <div class="nav-content">
                <div class="logo-section">
                    <span class="logo-text">Diasağlık</span>
                </div>
                <ul class="nav-menu">
                    <li><a href="#urunler">Ürünler</a></li>
                    <li><a href="#bilgiler">Bilgi Merkezi</a></li>
                    <li><a href="#kaynaklar">Kaynaklar</a></li>
                    <li><a href="#hakkimiz">Hakkımızda</a></li>
                    <li><a href="#iletisim">İletişim</a></li>
                </ul>
                <button class="login-btn">Giriş Yap</button>
            </div>
        </nav>

        <!-- HERO SECTION -->
        <section class="hero-section">
            <div class="hero-background"></div>
            
            <div class="hero-content">
                <h1 class="hero-title">Diyabet ve Hipertansiyonu Kontrol Edin</h1>
                <button class="play-video-btn" onclick="alert('Video oynatılacak!')">
                    <span class="play-icon">▶</span>
                    <span class="play-text">VİDEO İZLE</span>
                </button>
            </div>

            <div class="device-showcase">
                <div class="device-mockup">
                    <div class="device-notch"></div>
                    <div class="device-screen">
                        <svg viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                            <rect width="400" height="800" fill="#f8f9fa"/>
                            
                            <!-- Header -->
                            <circle cx="50" cy="50" r="30" fill="#0066cc"/>
                            <text x="100" y="35" font-size="18" font-weight="bold" fill="#2c3e50">Merhaba,</text>
                            <text x="100" y="58" font-size="16" font-weight="bold" fill="#2c3e50">Abdulkadir Bey</text>
                            <circle cx="350" cy="50" r="30" fill="#FFD700"/>
                            
                            <!-- Card 1 -->
                            <rect x="20" y="100" width="360" height="100" fill="white" rx="12" stroke="#e0e0e0" stroke-width="1"/>
                            <circle cx="45" cy="125" r="12" fill="#ff6b6b"/>
                            <text x="70" y="120" font-size="14" fill="#999">Son Şeker Ölçümü</text>
                            <text x="70" y="145" font-size="28" font-weight="bold" fill="#2c3e50">140</text>
                            <text x="70" y="165" font-size="12" fill="#999">mg/dL - Normal</text>
                            <circle cx="350" cy="150" r="20" fill="#0066cc"/>
                            <text x="344" y="158" font-size="18" fill="white" font-weight="bold">+</text>
                            
                            <!-- Card 2 -->
                            <rect x="20" y="220" width="360" height="100" fill="white" rx="12" stroke="#e0e0e0" stroke-width="1"/>
                            <circle cx="45" cy="245" r="12" fill="#ff6b6b"/>
                            <text x="70" y="240" font-size="14" fill="#999">Son Tansiyon Ölçümü</text>
                            <text x="70" y="265" font-size="28" font-weight="bold" fill="#2c3e50">140/65</text>
                            <text x="70" y="285" font-size="12" fill="#999">mmHg - Normal</text>
                            <circle cx="350" cy="270" r="20" fill="#0066cc"/>
                            <text x="344" y="278" font-size="18" fill="white" font-weight="bold">+</text>
                        </svg>
                    </div>
                    <div class="device-home"></div>
                </div>
            </div>
        </section>

        <!-- DESCRIPTION SECTION -->
        <section class="description-section">
            <h2>Uzman Diyabet Eğitimi. Güçlü Öz-Yönetim Araçları. Kişiselleştirilmiş Hedefler.</h2>
            <p>Diasağlık, diyabet kontrolünde uzmanlar tarafından tasarlanmış, NICE-uyumlu, kapsamlı bir platformdur. Uzman tavsiye, yapılandırılmış eğitim, beslenme rehberi ve egzersiz programları sunarak, bluetooth ile bağlı kan şekeri ölçüm cihazları ve kişiselleştirilmiş hedefler seti ile Diasağlık, hastalarının durumlarını kontrol etmesine yardımcı olur.</p>
            <a href="#" class="learn-more-btn">Daha Fazlasını Öğren</a>
        </section>

        <!-- FEATURES SECTION -->
        <section class="features-section">
            <h2>Temel Özellikler</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Veri Takibi</h3>
                    <p>Sağlık verilerinizi günlük olarak takip edin ve grafikleri görüntüleyin</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💊</div>
                    <h3>İlaç Yönetimi</h3>
                    <p>İlaçlarınızı takip edin ve hatırlatmalar alın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🩺</div>
                    <h3>Doktor İletişimi</h3>
                    <p>Verilerinizi doktorunuzla paylaşın</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Mobil Uygulama</h3>
                    <p>Her yerden erişim sağlayın</p>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Diasağlık</h4>
                    <ul>
                        <li><a href="#">Hakkında</a></li>
                        <li><a href="#">Gizlilik</a></li>
                        <li><a href="#">Şartlar</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Ürünler</h4>
                    <ul>
                        <li><a href="#">Diasağlık App</a></li>
                        <li><a href="#">Doktor Paneli</a></li>
                        <li><a href="#">Eğitim</a></li>
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
