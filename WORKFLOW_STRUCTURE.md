# SUMMIT Designer Workflow - Restructured

## Two-Step Design Process

### Step 1: Create Catalogue
**File:** `create-catalogue.html`
- Form fields:
  - Catalogue Name (required)
  - Cover Image (drag-drop upload)
  - Description (required)
  - Season dropdown
  - Primary Style dropdown
  - Price Range

**After creation:** Designer can then add designs to this catalogue

---

### Step 2: Create Designs in Catalogue
**File:** `create-design.html`
- Form fields:
  - Select Catalogue (dropdown - shows all designer's catalogues)
  - Design Name (required)
  - Design Image (drag-drop upload)
  - Price (required)
  - Description (required)
  - Fabric Type (dropdown)
  - Available Colors (comma-separated)
  - Available Sizes (comma-separated)
  - Stock Quantity (required)

**Features:**
- Designs are created separately from catalogues
- Each design is linked to a specific catalogue
- Can create multiple designs for the same catalogue

---

### Step 3: Edit Designs Separately
**File:** `edit-design.html`
- Edit all design details without affecting catalogue
- Form fields same as create, plus:
  - Status dropdown (Active, Inactive, Out of Stock)
  - Delete button to remove design
  - Image preview of current design
  - Changes save immediately

---

## Navigation Structure

### Dashboard Sidebar (in all create/edit pages)
- **My Catalogues** → Links to profile.html
- **Create Catalogue** → create-catalogue.html
- **Create Design** → create-design.html  
- **My Designs** → profile.html

### Profile Page Enhancements
- Each catalogue card now shows:
  - "+ Add Design" button (links to create-design.html with catalogue pre-selected)
  - "View" button (view catalogue details)
- New button: **"Create New Catalogue"** → create-catalogue.html

### User Flow
```
Home → Profile → Create Catalogue → Create Design → Edit Design
                                  → Add more designs (same catalogue)
```

---

## File Summary

| File | Purpose | Status |
|------|---------|--------|
| `create-catalogue.html` | Create new catalogue only | ✅ Refactored |
| `create-design.html` | Add designs to catalogue | ✅ New |
| `edit-design.html` | Edit existing designs | ✅ New |
| `profile.html` | Designer profile & dashboard | ✅ Updated |
| `styles.css` | All styling (added .btn-danger, .info-box) | ✅ Updated |

---

## CSS Additions

### New Classes
- `.btn-danger` - Delete button styling (red color)
- `.info-box` - Information alert boxes with icon

Both classes are fully styled and ready to use.

---

## Next Steps for Django Integration

1. **create-catalogue.html form** → POST to `/api/catalogues/create/`
   - Returns: `{catalogue_id, name, ...}`

2. **create-design.html form** → POST to `/api/designs/create/`
   - Requires: `catalogue_id` from URL parameter
   - Returns: `{design_id, name, ...}`

3. **edit-design.html form** → POST to `/api/designs/{design_id}/edit/`
   - Requires: `design_id` from URL parameter
   - Returns: Updated design object

4. **Delete design** → DELETE to `/api/designs/{design_id}/delete/`

---

## Important Notes

✅ All forms are template-ready (no hardcoded values except examples)
✅ Image upload areas use drag-drop functionality
✅ Mobile menu toggle working in scripts.js
✅ All pages use Font Awesome 6.4.0 icons
✅ Responsive design maintained across all pages
✅ Footer included on all pages
