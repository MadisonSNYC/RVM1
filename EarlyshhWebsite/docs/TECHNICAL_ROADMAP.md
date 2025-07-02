# Technical Implementation Roadmap

## 🚀 **IMMEDIATE TASKS (Today)**

### 1. **Add Service Files to Xcode Project**
```bash
# Files that need to be added to build target:
- SimpleIOSApp/ViewModels/ (3 files)
- SimpleIOSApp/Core/DependencyContainer.swift
- SimpleIOSApp/Services/ImageLoader.swift
- SimpleIOSApp/Services/MockDataService.swift  
- SimpleIOSApp/Domain/ (3 files)

# Action: Open EarlyshhMEME.xcodeproj and drag these folders into the project navigator
```

### 2. **Complete HomeViewController ViewModel Integration**
```swift
// Replace these patterns:
❌ LocationService.shared.requestPermission()
✅ viewModel.requestLocationPermission()

❌ generateTemporaryMockData()
✅ viewModel.loadPartnerships()

❌ Direct CLLocationManager usage
✅ viewModel.$userLocation binding
```

### 3. **Complete PartnershipDetailViewController Integration**
```swift
// Remove remaining TODO markers:
❌ // TODO: Use ViewModel methods
✅ Actual ViewModel method calls

❌ Temporary QR generation
✅ viewModel.generateQRCode()
```

---

## 🗺️ **ENHANCED MAP IMPLEMENTATION**

### **MapViewController Architecture**
```swift
class MapViewController: UIViewController {
    private let viewModel: MapViewModel
    private let mapView: MKMapView
    private let locationManager: CLLocationManager
    
    // New Features:
    - Partnership annotations with custom pins
    - Clustering for multiple nearby partnerships  
    - Geofencing (500ft activation radius)
    - Search within map area
    - Filter by partnership type
}

class MapViewModel: ObservableObject {
    @Published var partnerships: [Partnership] = []
    @Published var userLocation: CLLocation?
    @Published var selectedPartnership: Partnership?
    @Published var mapRegion: MKCoordinateRegion
    
    // Methods:
    func loadNearbyPartnerships()
    func filterPartnerships(by category: String)
    func selectPartnership(_ partnership: Partnership)
    func getDirections(to partnership: Partnership)
}
```

### **Custom Map Annotations**
```swift
class PartnershipAnnotation: NSObject, MKAnnotation {
    let partnership: Partnership
    var coordinate: CLLocationCoordinate2D
    var title: String?
    var subtitle: String?
    var brandColor: UIColor
    
    // Custom pin with brand colors
    func mapAnnotationView() -> MKAnnotationView
}
```

---

## 👤 **PROFILE IMPLEMENTATION**

### **User Tier System**
```swift
enum UserTier: String, CaseIterable {
    case probation = "Probation"
    case average = "Average" 
    case goodStanding = "Good Standing"
    case premium = "Premium"
    
    var color: UIColor { }
    var benefits: [String] { }
    var requirements: String { }
}

struct ImpactScore {
    let current: Int
    let components: [ScoreComponent]
    let tierProgress: Double
    
    struct ScoreComponent {
        let name: String
        let points: Int
        let maxPoints: Int
    }
}
```

### **ProfileViewController Features**
```swift
class ProfileViewController: UIViewController {
    // UI Components:
    - User avatar and basic info
    - Current tier badge with progress
    - Impact score breakdown chart
    - Partnership statistics cards
    - Recent activity feed
    - Account settings button
    - Instagram connection status
}

class ProfileViewModel: ObservableObject {
    @Published var user: User
    @Published var impactScore: ImpactScore
    @Published var partnershipStats: PartnershipStats
    @Published var recentActivity: [ActivityItem]
    @Published var isInstagramConnected: Bool
}
```

---

## 🔔 **NOTIFICATIONS IMPLEMENTATION**

### **Notification Types**
```swift
enum NotificationType {
    case partnershipNearby(Partnership, distance: CLLocationDistance)
    case partnershipExpiring(Partnership, timeRemaining: TimeInterval)
    case partnershipCompleted(Partnership)
    case tierUpgrade(UserTier)
    case socialSharingReminder(Partnership)
    case qrCodeExpiring(Partnership, timeRemaining: TimeInterval)
}

class NotificationService {
    func scheduleGeofenceNotification(for partnership: Partnership)
    func scheduleExpirationReminder(for partnership: Partnership)
    func handleDeepLink(from notification: UNNotification)
}
```

### **NotificationsViewController**
```swift
class NotificationsViewController: UIViewController {
    private let tableView: UITableView
    private let viewModel: NotificationsViewModel
    
    // Sections:
    - Today's notifications
    - This week
    - Earlier
    - Notification settings
}
```

---

## 📱 **QR CODE SYSTEM**

### **QR Scanner Implementation**  
```swift
class QRScannerViewController: UIViewController {
    private let cameraSession: AVCaptureSession
    private let qrReader: QRCodeReader
    private let viewModel: QRScannerViewModel
    
    // Features:
    - Camera preview with overlay
    - QR code detection and validation
    - Success/failure animations
    - Sound and haptic feedback
}

class QRGeneratorViewController: UIViewController {
    private let qrImageView: UIImageView
    private let timerLabel: UILabel
    private let viewModel: QRGeneratorViewModel
    
    // Features:
    - QR code display with TCB 8112 format
    - 15-minute countdown timer
    - Regeneration capability (max 3 per day)
    - Share QR code functionality
}
```

---

## 🔍 **SEARCH & FILTER SYSTEM**

### **Search Implementation**
```swift
class SearchViewController: UIViewController {
    private let searchBar: UISearchBar
    private let filterBar: FilterBarView
    private let resultsTableView: UITableView
    private let mapToggleButton: UIButton
    
    // Filter Options:
    - Distance radius (0.5mi, 1mi, 2mi, 5mi)
    - Category (Food, Retail, Health, Beauty, etc.)
    - Value range ($1-5, $5-15, $15+)
    - Availability (Active, Coming Soon, Limited Time)
}

class FilterBarView: UIView {
    // Horizontal scroll of filter chips
    private let collectionView: UICollectionView
    private var activeFilters: [Filter] = []
}
```

---

## 📊 **DATA MODELS ENHANCEMENT**

### **User Model Extension**
```swift
struct User {
    let id: String
    let name: String
    let email: String
    let instagramHandle: String?
    let tier: UserTier
    let impactScore: ImpactScore
    let joinDate: Date
    let location: UserLocation?
    
    // New Properties:
    let partnershipStats: PartnershipStats
    let preferences: UserPreferences
    let pushNotificationToken: String?
}

struct PartnershipStats {
    let totalClaimed: Int
    let totalCompleted: Int
    let totalValue: Decimal
    let completionRate: Double
    let averageRating: Double
    let socialShareRate: Double
}
```

### **Partnership Model Enhancement**
```swift
struct Partnership {
    // Existing properties...
    
    // New Properties:
    let geofence: Geofence
    let socialRequirements: SocialRequirements
    let redemptionInstructions: [String]
    let maxRedemptionsPerUser: Int
    let userRedemptionCount: Int
    let averageRating: Double
    let totalRedemptions: Int
}

struct Geofence {
    let center: CLLocationCoordinate2D
    let activationRadius: CLLocationDistance // 500ft
    let notificationRadius: CLLocationDistance // 1000ft
}
```

---

## 🧪 **TESTING STRATEGY**

### **Unit Tests Priority**
```swift
// ViewModels (High Priority)
- HomeViewModelTests
- MapViewModelTests  
- ProfileViewModelTests
- PartnershipDetailViewModelTests

// Services (Medium Priority)
- LocationServiceTests
- QRCodeServiceTests
- ImageLoaderTests
- MockDataServiceTests

// Integration Tests (Low Priority)
- PartnershipFlowIntegrationTests
- LocationGeofencingTests
- NotificationHandlingTests
```

### **UI Tests**
```swift
// Critical User Flows
- Partnership discovery and details view
- QR code generation and scanning
- Map navigation and partnership selection
- Profile and tier progression
- Search and filter functionality
```

---

## 📈 **PERFORMANCE TARGETS**

### **Memory Usage**
- App launch: < 50MB
- Normal usage: < 100MB  
- Map with 50+ annotations: < 150MB

### **Response Times**
- App launch: < 2 seconds
- Partnership list load: < 1 second
- Map annotation clustering: < 500ms
- QR code generation: < 1 second

### **Battery Usage**
- Location tracking: Minimal impact with efficient geofencing
- Camera usage: Only during QR scanning
- Background processing: Limited to essential notifications

---

**Next Action**: Start with adding service files to Xcode project, then proceed with ViewModel integration completion.