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
                    <span class="logo-icon">⚕️</span>
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
                        <img src="/dashboard.png" alt="Diasağlık Dashboard" class="device-image">
                    </div>
                    <div class="device-home"></div>
                </div>
            </div>
        </section>

        <!-- SECTION 1: TEMEL BİLGİ -->
        <section class="info-section white-bg">
            <div class="section-content">
                <h2>Uzman Diyabet Eğitimi. Güçlü Öz-Yönetim Araçları. Kişiselleştirilmiş Hedefler.</h2>
                <p>Diasağlık, diyabet kontrolünde uzmanlar tarafından tasarlanmış, NICE-uyumlu, kapsamlı bir platformdur. Uzman tavsiye, yapılandırılmış eğitim, beslenme rehberi ve egzersiz programları sunarak, bluetooth ile bağlı kan şekeri ölçüm cihazları ve kişiselleştirilmiş hedefler seti ile Diasağlık, hastalarının durumlarını kontrol etmesine yardımcı olur.</p>
                <a href="#" class="btn-learn-more">Daha Fazlasını Öğren</a>
            </div>
        </section>

        <!-- SECTION 2: HASTALAR İÇİN -->
        <section class="patients-section gray-bg">
            <div class="section-content">
                <h2>Hastalar İçin</h2>
                <p>Diasağlık, diyabet yönetiminde komprehensif, kullanıcı dostu ve sezgisel bir uygulama sunar. Diyabet uzmanları tarafından tasarlanmış, Diasağlık kullanıcılarına hiç olmadığı kadar kontrol sağlar. Verilerinizi girerek ve klinik ekibiniz ile daha yakın çalışarak, Diasağlık, özel ve bireyselleştirilmiş bir tedavi planı oluşturmanıza, kontrolünüzü optimize etmenize ve diyabet ile ilişkili komplikasyonlar geliştirme riskini azaltmanıza olanak tanır.</p>
                
                <div class="features-list">
                    <div class="feature-item">
                        <h3>📊 Aktivite Günlüğü</h3>
                        <p>Hastalar ve klinik ekipleri uygulama içi aktiviteleri otomatik olarak takip edebilir</p>
                    </div>
                    <div class="feature-item">
                        <h3>💊 İlaç Takibi</h3>
                        <p>İlaçlarınızı kaydedin, hatırlatmalar alın ve uyum sağlayın</p>
                    </div>
                    <div class="feature-item">
                        <h3>🩺 Sağlık Verisi Entegrasyonu</h3>
                        <p>Bluetooth cihazlarıyla otomatik veri senkronizasyonu</p>
                    </div>
                    <div class="feature-item">
                        <h3>📈 Detaylı Raporlar</h3>
                        <p>Doktorlarınızla paylaşabilecek kapsamlı sağlık raporları</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: DOKTORLAR İÇİN -->
        <section class="doctors-section white-bg">
            <div class="section-content">
                <h2>Doktorlar İçin</h2>
                <p>Klinikçiler, uzaktan bakım, hasta yönetimi, raporlar ve izleme araçlarına erişim sağlayarak hastalarına daha hızlı, kolay, uygun maliyetli ve nihayetinde daha ödüllendirici bir şekilde bakım sunabilirler. Diasağlık, doktorların hasta yönetimini basitleştirerek, hastaların sağlıklarını daha iyi kontrol etmelerine yardımcı olur.</p>
                
                <div class="features-list">
                    <div class="feature-item">
                        <h3>👥 Hasta Yönetimi</h3>
                        <p>Tüm hastalarınızı merkezi bir panelde yönetin</p>
                    </div>
                    <div class="feature-item">
                        <h3>📊 Veri Analizi</h3>
                        <p>Hastaların sağlık verilerini analiz edin ve raporlar oluşturun</p>
                    </div>
                    <div class="feature-item">
                        <h3>💬 İletişim Araçları</h3>
                        <p>Hastalarınızla güvenli şekilde iletişim kurun</p>
                    </div>
                    <div class="feature-item">
                        <h3>⏰ Uzaktan İzleme</h3>
                        <p>Hastaları uzaktan izleyin ve müdahale edin</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: NEDEN DİASAĞLIK -->
        <section class="why-section gray-bg">
            <div class="section-content">
                <h2>Neden Diasağlık?</h2>
                <div class="reasons-grid">
                    <div class="reason-card">
                        <div class="reason-icon">🎓</div>
                        <h3>Uzman Tarafından Tasarlanmış</h3>
                        <p>Diyabet uzmanları tarafından geliştirilen ve doğrulanan platform</p>
                    </div>
                    <div class="reason-card">
                        <div class="reason-icon">✅</div>
                        <h3>Kanıt Temelli</h3>
                        <p>NICE kılavuzlarına uygun, bilimsel araştırmalara dayalı</p>
                    </div>
                    <div class="reason-card">
                        <div class="reason-icon">🔒</div>
                        <h3>Güvenli ve Gizli</h3>
                        <p>En yüksek güvenlik standartlarına uygun veri koruması</p>
                    </div>
                    <div class="reason-card">
                        <div class="reason-icon">📱</div>
                        <h3>Kolay Kullanım</h3>
                        <p>Tüm yaşlar için tasarlanmış basit ve sezgisel arayüz</p>
                    </div>
                    <div class="reason-card">
                        <div class="reason-icon">🌍</div>
                        <h3>Erişilebilir</h3>
                        <p>Her yerden, her zaman erişim sağlayın</p>
                    </div>
                    <div class="reason-card">
                        <div class="reason-icon">💪</div>
                        <h3>Destekleyici</h3>
                        <p>24/7 müşteri destek ve yardım merkezi</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: BAŞLAYIN -->
        <section class="cta-section white-bg">
            <div class="section-content">
                <h2>Bugün Başlayın</h2>
                <p>Diasağlık ile diyabet yönetimini kontrol altına alın. Ücretsiz olarak başlayın, hiçbir kredi kartı gerekmez.</p>
                <button class="btn-primary-large">Ücretsiz Hesap Oluştur</button>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Diasağlık</h4>
                    <ul>
                        <li><a href="#">Hakkında</a></li>
                        <li><a href="#">Gizlilik Politikası</a></li>
                        <li><a href="#">Kullanım Şartları</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Ürünler</h4>
                    <ul>
                        <li><a href="#">Diasağlık Uygulaması</a></li>
                        <li><a href="#">Doktor Paneli</a></li>
                        <li><a href="#">API Belgeleri</a></li>
                        <li><a href="#">Fiyatlandırma</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Kaynaklar</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Eğitim Merkezi</a></li>
                        <li><a href="#">SSS</a></li>
                        <li><a href="#">Destek</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Sosyal Medya</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Diasağlık - Tüm Hakları Saklıdır | <a href="#">Gizlilik</a> | <a href="#">Şartlar</a></p>
            </div>
        </footer>
    </div>
    `;
}
