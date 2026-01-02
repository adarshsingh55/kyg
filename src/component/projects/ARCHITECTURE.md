# Projects Page Architecture

## Overview

The Projects page implements a **map-driven, area-based search system** for government projects in India. Users can navigate from India → State → District → Ward/City to find projects.

---

## 📁 File Structure

```
src/
├── pages/
│   └── Projects.jsx                 # Main Projects page
│   └── Projects.module.css          # Page styling
│
└── component/
    └── projects/
        ├── MapPanel.jsx             # Interactive map navigation
        ├── MapPanel.module.css
        ├── FiltersPanel.jsx         # Filter controls
        ├── FiltersPanel.module.css
        ├── ProjectList.jsx          # Grid of project cards
        ├── ProjectList.module.css
        ├── ProjectCard.jsx          # Individual project display
        └── ProjectCard.module.css
```

---

## 🧩 Components

### **Projects.jsx** (Main Container)
- **State Management**: Handles map navigation, filters, and project data
- **Key States**:
  - `selectedLevel`: Current map level (india, state, district, ward)
  - `selectedState/District/Ward`: Current selections
  - `filters`: Active filters (department, status, budget, officer)
  - `projects`: List of projects from API
- **Flow**:
  1. User clicks state on map → `handleStateSelect()`
  2. Fetches projects → `fetchProjects()`
  3. Updates filters → `handleFilterChange()`
  4. Projects display updates

### **MapPanel.jsx**
- **Purpose**: Visual map-based navigation
- **Features**:
  - Drill-down hierarchy: India → State → District → Ward
  - Placeholder GeoJSON structure (ready for Leaflet.js)
  - Interactive buttons for each level
  - Back navigation
  - Project markers display (when ward selected)
- **TODO**: Replace placeholder buttons with actual GeoJSON map via Leaflet

### **FiltersPanel.jsx**
- **Purpose**: Refine projects by various criteria
- **Filters**:
  - **Department**: Public Works, Health, Education, etc.
  - **Status**: Planned, Ongoing, Completed, On Hold
  - **Budget Range**: Min/Max slider (₹0 - ₹10L)
  - **Location**: Shows current selection (read-only)
- **Features**:
  - Collapsible sections
  - Reset all filters button
  - Real-time filtering

### **ProjectList.jsx**
- **Purpose**: Display filtered projects in grid layout
- **States**:
  - Loading spinner
  - Empty state message
  - Grid of ProjectCards
- **Location Label**: Shows "Projects in [Ward/District/State/India]"

### **ProjectCard.jsx**
- **Purpose**: Individual project display
- **Shows**:
  - Project name + status badge
  - Department information
  - Budget allocation & spending (with progress bar)
  - Location (representation)
  - Assigned officers
  - Decision count
- **Interaction**: Click → Navigate to `/projects/:projectId`

---

## 🔄 User Journey

```
1. Page loads → India map shown
2. User clicks Maharashtra state
   → Map zooms to Maharashtra
   → Shows districts as buttons
   → Fetch projects for Maharashtra

3. User clicks Palghar district
   → Map shows wards/cities
   → Filters can be applied
   → Projects list shows filtered results

4. User adjusts Department filter
   → API re-queries with new filter
   → Project list updates

5. User clicks project card
   → Navigate to /projects/:projectId (detail page)
```

---

## 🔗 Backend Integration Points

### API Endpoints Required
```
GET /api/projects?state=Maharashtra
GET /api/projects?district=Palghar
GET /api/projects?ward=54
GET /api/projects?department=Roads&status=ongoing
```

### Expected Response Format
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Road Construction Project",
  "status": "ongoing",
  "budget_allocated": 500000,
  "budget_spent": 250000,
  "department": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Public Works"
  },
  "representation": {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Palghar"
  },
  "officers": [
    { "name": "John Doe" },
    { "name": "Jane Smith" }
  ],
  "decisions_count": 5
}
```

---

## 🗺️ Map Technology (Phase 2)

### Setup Leaflet.js
```bash
npm install leaflet react-leaflet
```

### Import GeoJSON Data
- India states: GeoJSON polygons
- District boundaries: GeoJSON polygons
- Ward/city boundaries: GeoJSON polygons
- Store in `public/geojson/` or fetch from backend

### MapPanel Integration
Replace placeholder buttons with:
```jsx
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet'
```

---

## 🎨 Styling Highlights

- **Color Scheme**: Purple gradient (#667eea to #764ba2)
- **Responsive**: Works on desktop, tablet, mobile
- **Hover Effects**: Cards lift on hover with shadow
- **Progress Bars**: Budget visualization with gradient
- **Status Colors**:
  - Planned: Yellow (#fbbf24)
  - Ongoing: Blue (#60a5fa)
  - Completed: Green (#34d399)
  - On Hold: Red (#f87171)

---

## 🚀 Next Steps (Implementation Order)

### Phase 1: Current State ✅
- [x] Layout structure
- [x] Component scaffolding
- [x] Filter UI
- [x] Project cards
- [ ] Connect to real backend API

### Phase 2: Map Implementation
- [ ] Install Leaflet.js
- [ ] Create GeoJSON data files
- [ ] Replace MapPanel placeholder with real map
- [ ] Add map markers for projects

### Phase 3: Advanced Features
- [ ] Audit visualization overlay
- [ ] Budget misuse indicators
- [ ] Timeline of decisions
- [ ] RTI request integration

### Phase 4: Role-Based UI
- [ ] Citizen view (read-only)
- [ ] Officer view (update projects)
- [ ] Auditor view (audit flags)
- [ ] Admin view (full control)

---

## 📝 Notes

1. **API Base URL**: Update in `Projects.jsx` line ~58
2. **Mock Data**: Currently no projects shown until API connected
3. **Leaflet Setup**: Wait for GeoJSON data before implementing
4. **Routes**: Ensure `/projects/:projectId` route exists for detail page
5. **Authentication**: No auth checks yet (add after backend integration)

---

## 🔧 Configuration

### Environment Variables (if needed)
```
VITE_API_BASE_URL=http://localhost:5000
VITE_GEOJSON_PATH=/geojson
```

### Default Filters
```js
budgetMin: 0
budgetMax: 1000000 // ₹10 lakhs
```

---

## 📞 Support

For issues or modifications:
1. Check component props in JSX files
2. Verify API response format matches expected schema
3. Update filter options in FiltersPanel if needed
4. Add new fields to ProjectCard as backend extends
