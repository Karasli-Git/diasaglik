// Diacora Health - Professional Web Application with Real-time DateTime
// Diasağlık - Profesyonel Web Uygulaması

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

// Mock user data - TÜRKÇE
const mockUser = {
    id: '123',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    age: 45,
    gender: 'Erkek',
    diagnosticYear: 2020,
    phone: '+90 (555) 123-4567',
    glucoseTarget: '80-130',
    bpTarget: '<130/80'
};

// Mock health data - TÜRKÇE
const mockHealthData = {
    glucose: {
        current: 105,
        unit: 'mg/dL',
        target: '80-130',
        status: 'normal',
        trend: 'stable',
        lastRecorded: new Date().toLocaleString('tr-TR')
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
        status: 'normal',
        trend: 'stable'
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Render main content
    const app = document.getElementById('app');
    
    // Header
    let html = `
    <header class="header">
        <div class="header-content">
            <div class="logo-section">
                <img src="/logo.png" alt="Diasağlık" class="logo">
                <div class="logo-text">
                    <h1>Diasağlık</h1>
                    <p>Diyabet ve Hipertansiyon Yönetimi</p>
                </div>
            </div>
            <nav class="nav">
                <button id="home-btn" class="nav-btn active" onclick="showDashboard()">Ana Sayfa</button>
                <button id="measurements-btn" class="nav-btn" onclick="showMeasurements()">Ölçümler</button>
                <button id="profile-btn" class="nav-btn" onclick="showProfile()">Profil</button>
                <button id="logout-btn" class="nav-btn logout" onclick="logout()">Çıkış</button>
            </nav>
        </div>
    </header>
    `;
    
    // Main content container
    html += `<main class="main-content"><div id="content-area"></div></main>`;
    
    // Footer
    html += `
    <footer class="footer">
        <p>&copy; 2024 Diasağlık - Diyabet ve Hipertansiyon Yönetimi Platformu</p>
    </footer>
    `;
    
    app.innerHTML = html;
    
    // Show dashboard
    showDashboard();
}

function showDashboard() {
    updateActiveBtn('home-btn');
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
    <div class="dashboard">
        <h2>Merhaba, ${mockUser.name}!</h2>
        <p class="subtitle">Sağlık Özeti</p>
        
        <div class="cards-grid">
            <div class="card glucose-card">
                <h3>Kan Şekeri</h3>
                <div class="value">${mockHealthData.glucose.current}</div>
                <div class="unit">${mockHealthData.glucose.unit}</div>
                <div class="target">Hedef: ${mockHealthData.glucose.target}</div>
                <div class="status status-${mockHealthData.glucose.status}">
                    ${mockHealthData.glucose.status === 'normal' ? '✓ Normal' : '⚠ Dikkat'}
                </div>
            </div>
            
            <div class="card blood-pressure-card">
                <h3>Kan Basıncı</h3>
                <div class="value">${mockHealthData.bloodPressure.systolic}/${mockHealthData.bloodPressure.diastolic}</div>
                <div class="unit">${mockHealthData.bloodPressure.unit}</div>
                <div class="target">Hedef: ${mockHealthData.bloodPressure.target}</div>
                <div class="status status-${mockHealthData.bloodPressure.status}">
                    ${mockHealthData.bloodPressure.status === 'normal' ? '✓ Normal' : '⚠ Dikkat'}
                </div>
            </div>
            
            <div class="card weight-card">
                <h3>Kilo</h3>
                <div class="value">${mockHealthData.weight.current}</div>
                <div class="unit">${mockHealthData.weight.unit}</div>
                <div class="target">BMI: ${mockHealthData.weight.bmi}</div>
                <div class="status status-${mockHealthData.weight.status}">
                    ${mockHealthData.weight.status === 'normal' ? '✓ Normal' : '⚠ Dikkat'}
                </div>
            </div>
        </div>
        
        <div class="action-buttons">
            <button onclick="showMeasurements()" class="btn btn-primary">Ölçüm Ekle</button>
            <button onclick="showProfile()" class="btn btn-secondary">Profili Düzenle</button>
        </div>
    </div>
    `;
}

function showMeasurements() {
    updateActiveBtn('measurements-btn');
    const contentArea = document.getElementById('content-area');
    
    const now = getCurrentDateTime();
    
    contentArea.innerHTML = `
    <div class="measurements">
        <h2>Sağlık Ölçümleri</h2>
        
        <form class="measurement-form" onsubmit="addMeasurement(event)">
            <div class="form-group">
                <label>Tarih ve Saat</label>
                <input type="datetime-local" id="measurementDate" value="${now}" required>
            </div>
            
            <div class="form-group">
                <label>Kan Şekeri (mg/dL)</label>
                <input type="number" id="glucose" placeholder="Örn: 105" step="0.1">
            </div>
            
            <div class="form-group">
                <label>Sistolik Kan Basıncı (mmHg)</label>
                <input type="number" id="bpSystolic" placeholder="Örn: 128">
            </div>
            
            <div class="form-group">
                <label>Diyastolik Kan Basıncı (mmHg)</label>
                <input type="number" id="bpDiastolic" placeholder="Örn: 82">
            </div>
            
            <div class="form-group">
                <label>Kilo (kg)</label>
                <input type="number" id="weight" placeholder="Örn: 75" step="0.1">
            </div>
            
            <div class="form-group">
                <label>Notlar</label>
                <textarea id="notes" placeholder="Ekstra notlar..."></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Ölçümü Kaydet</button>
        </form>
        
        <div class="measurements-list">
            <h3>Geçmiş Ölçümler</h3>
            <p class="info-text">Ölçüm geçmişi buraya gösterilecektir</p>
        </div>
    </div>
    `;
}

function showProfile() {
    updateActiveBtn('profile-btn');
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
    <div class="profile">
        <h2>Profil Bilgileri</h2>
        
        <form class="profile-form" onsubmit="updateProfile(event)">
            <div class="form-group">
                <label>Ad Soyad</label>
                <input type="text" value="${mockUser.name}" required>
            </div>
            
            <div class="form-group">
                <label>E-posta</label>
                <input type="email" value="${mockUser.email}" required>
            </div>
            
            <div class="form-group">
                <label>Yaş</label>
                <input type="number" value="${mockUser.age}" required>
            </div>
            
            <div class="form-group">
                <label>Cinsiyeti</label>
                <select required>
                    <option value="Erkek" selected>Erkek</option>
                    <option value="Kadın">Kadın</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>Telefon</label>
                <input type="tel" value="${mockUser.phone}" required>
            </div>
            
            <div class="form-group">
                <label>Diyabet Tipi</label>
                <select required>
                    <option value="type1">Tip 1</option>
                    <option value="type2" selected>Tip 2</option>
                </select>
            </div>
            
            <div class="form-group checkbox">
                <input type="checkbox" id="hypertension" checked>
                <label for="hypertension">Hipertansiyonum var</label>
            </div>
            
            <button type="submit" class="btn btn-primary">Değişiklikleri Kaydet</button>
        </form>
    </div>
    `;
}

function updateActiveBtn(btnId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(btnId).classList.add('active');
}

function addMeasurement(event) {
    event.preventDefault();
    alert('Ölçüm kaydedildi!');
    showMeasurements();
}

function updateProfile(event) {
    event.preventDefault();
    alert('Profil güncellendi!');
    showProfile();
}

function logout() {
    alert('Çıkış yapıldı. Hoşça kalın!');
    location.reload();
}
