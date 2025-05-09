---
# Project Scratchpad: English Friendly Korea

## Background and Motivation

The project aims to build an online directory of English-friendly services and establishments in South Korea for expatriates and tourists. The initial data source is `data/clinics_categorized.csv`. The site will be built using Astro, with Tailwind CSS and shadcn/ui for styling.

**Recent Additions:**
*   Global search functionality.
*   Google Maps integration on listing detail pages.
*   Site-wide styling with shadcn/ui and Tailwind CSS (dark mode default).
*   User request to add content pages (FAQ, About Us, Contact) and a submission form for new listings.

## Key Challenges and Analysis

*   **Data Integration & Management:** Efficiently loading, parsing, and managing the CSV data. Ensuring data integrity and providing a way to update or add new listings. (Ongoing)
*   **Scalability:** Designing the site to handle a growing number of listings and categories without performance degradation. (Ongoing)
*   **User Experience (UX):** Creating an intuitive and easy-to-navigate interface, especially for users who may be unfamiliar with Korea. Clear categorization and search are key. (Ongoing)
*   **Astro Framework Specifics:** Leveraging Astro's features for static site generation, component-based architecture, and island architecture for client-side interactivity where needed. (Ongoing)
*   **Styling & UI Consistency:** Maintaining a consistent and modern look and feel using shadcn/ui and Tailwind CSS. (Ongoing)
*   **Form Handling & Data Validation:** For the "Submit New Listing" form, ensuring data is captured correctly and validated before any processing. (New)
*   **Content Management for Static Pages:** Simple Astro/Markdown pages should suffice for FAQ, About Us, etc. (New)

## High-level Task Breakdown

**Phase 1: Core Functionality (Completed)**
*   **Task 1: Project Setup** (Completed)
*   **Task 2: Data Loading and Processing** (Completed)
*   **Task 3: Homepage Creation** (Completed)
*   **Task 4: Category Pages** (Completed)
*   **Task 5: Listing Detail Pages** (Completed)

**Phase 2: Enhancements (Completed)**
*   **Task 7: Implement Search Functionality** (Completed)
*   **Task 8: Integrate Google Maps** (Completed)

**Phase 3: Styling and UI Migration (Completed)**
*   **Task 6: Basic Styling (Initial)** (Completed - Superseded by Task 10)
*   **Task 9: Site Name Change** (Completed)
*   **Task 10: Migrate to shadcn/ui and Tailwind CSS** (Completed)

**Phase 4: Content and Community Features**
*   **Task 11: Create Static Content Pages**
    *   **11.1: Add FAQ Section to Homepage:**
        *   Success Criteria: An FAQ section with placeholder content is added to the bottom of `src/pages/index.astro`. Styled with UI components where appropriate (e.g., Accordion).
    *   **11.2: Create About Us Page:**
        *   Success Criteria: A new page `/about` exists. It contains placeholder "About Us" content. Styled with shadcn/ui components where appropriate. Navigation link present.
    *   **11.3: Create Contact Page:**
        *   Success Criteria: A new page `/contact` exists. It contains placeholder contact information or a simple contact form (frontend only for now). Styled with shadcn/ui components where appropriate. Navigation link present.
*   **Task 12: Implement "Submit New Listing" Form**
    *   **12.1: Design Data Structure for New Submissions (Updated with relaxed fields)**
        *   Success Criteria: Define the fields required for a new listing submission. Documented in this scratchpad.
        *   **Proposed `NewListingSubmission` Data Structure:**
            *   `businessName`: `string` (Required) - The official name of the business/service.
            *   `businessWebsite?`: `string` (Optional) - The primary website for the business.
            *   `mainCategory`: `string` (Required) - The primary category (e.g., "Clinic", "Restaurant"). *Consider dropdown for form.*
            *   `otherCategories?`: `string` (Optional) - Other relevant categories (free text).
            *   `address?`: `string` (Optional) - Physical address.
            *   `phone?`: `string` (Optional) - Contact phone number.
            *   `description`: `string` (Required) - Description of the business and its English-friendliness (e.g., max 500 chars).
            *   `submitterName?`: `string` (Optional) - Name of the person submitting.
            *   `submitterEmail`: `string` (Required) - Email of the submitter (for follow-up, not public).
            *   `additionalNotes?`: `string` (Optional) - Any other relevant comments.
        *   **Rationale:**
            *   Focuses on essential information a user can provide easily.
            *   Required fields: `businessName`, `mainCategory`, `description`, `submitterEmail`.
            *   Omits complex details (e.g., logo, social media links, coordinates) for initial submission; these can be added by admins later.
    *   **12.2: Create Submission Form Page (Updated with relaxed fields)**
        *   Success Criteria: A new page `/submit-listing` exists with a form for users to input data for a new business. Uses shadcn/ui form components. Navigation link present.
    *   **12.3: Implement Form Submission (Frontend Only):**
        *   Success Criteria: On form submission, data is logged to the console (or displayed on the page) to verify structure. Basic client-side validation implemented.
*   **Task 13: Add Navigation Links to Layout** (Layout will be revisited with new UI style)
    *   **13.1: Update Layout with New Page Links (Will be revisited with new UI style)

**Phase 5: UI Migration to Neo-Brutalism Style**

*   **Task 14 (New): Understand Neo-Brutalism Implementation**
        *   [x] 14.1: Explore `neo-brutalism` Directory Structure
        *   [x] 14.2: Identify Key UI Components & Styling Patterns
        *   [x] 14.3: Analyze Global Styles & Theming
*   **Task 15 (New): Plan Integration and Component Mapping**
    *   [x] 15.1: Map Existing Components to Neo-Brutalism Style
        *   Strategy: Re-style existing components or create new ones (e.g., in `src/components/neo/`) using Tailwind CSS and custom classes (`shadow-brutal`, rotations) derived from the `neo-brutalism` example, rather than a direct library swap.
    *   [ ] 15.2: Plan Styling Integration
        *   Success Criteria: Document steps to integrate neo-brutalism global styles (font, custom CSS like `shadow-brutal`, Tailwind config)
        *   **Integration Steps:**
            *   **Fonts:** Add `Space Grotesk` font to `src/layouts/Layout.astro` (e.g., via Google Fonts link in `<head>` or by installing a Fontsource package).
            *   **Tailwind Configuration (`tailwind.config.js`):**
                *   Merge `fontFamily.sans` to include `Space Grotesk` as the primary sans-serif.
                *   Add/merge `colors` (e.g., `yellow: { 400: '#FFDD00' }`, `pink: { 400: '#FF88CA' }`) from the example `tailwind.config.js` into our existing config.
                *   Add/merge `animation` (for `wiggle`) into our existing config.
            *   **Global CSS (`src/styles/global.css`):**
                *   Remove current shadcn/ui base styles (variables for dark/light mode if they conflict).
                *   Add custom CSS classes from `neo-brutalism/src/styles/App.css` (e.g., `shadow-brutal`, rotate utilities, body font-family if not fully handled by Tailwind config).
                *   Ensure Tailwind base, components, and utilities are imported (`@tailwind base;` etc.).
            *   **HTML lang attribute:** Ensure `<html>` tag has `lang="en"` (already present).
            *   **Dark/Light Mode:** The neo-brutalism example doesn't explicitly show a dark/light toggle or separate themes in the files viewed. Our current site defaults to dark mode via `class="dark"` on `<html>`. We need to decide if the neo-brutalism style should have a dark variant or if we adapt it to a single theme (likely light, given the `bg-white` in `Header.tsx` and typical neo-brutalist examples which often use bright backgrounds with black text/shadows). For now, assume we might remove our forced dark mode and adapt to the primary theme shown in the neo-brutalism example.
*   **Task 16 (New): Phased Implementation of Neo-Brutalism Style**
    *   **16.1: Apply Global Styles & Update Layout:**
        *   Success Criteria: Update `src/layouts/Layout.astro` and `src/styles/global.css` (and potentially `tailwind.config.js`) to reflect the neo-brutalism theme (fonts, colors, base styles).
    *   **16.2: Re-style/Replace Button Components:**
        *   Success Criteria: All button instances site-wide adopt the neo-brutalism style.
    *   **16.3: Re-style/Replace Card Components:**
        *   Success Criteria: All card instances site-wide adopt the neo-brutalism style.
    *   **16.4: Re-style/Replace Accordion Component (FAQ):**
        *   Success Criteria: The FAQ accordion on the homepage adopts the neo-brutalism style.
    *   **16.5: Re-style/Replace Form Elements:**
        *   Success Criteria: Forms in `ContactForm.tsx` and `NewListingForm.tsx` adopt the neo-brutalism style.
*   **Task 17 (New): Cleanup and Final Testing**
    *   **17.1: Remove Old UI Styles/Components:**
        *   Success Criteria: Conflicting or redundant styles and components from the previous shadcn/ui setup are removed.
    *   **17.2: Comprehensive Site Testing:**
        *   Success Criteria: All pages render correctly with the new style, all interactive elements function as expected, and the site is responsive.

## Project Status Board

**Phase 1: Core Functionality**
*   [x] **Task 1: Project Setup**
*   [x] **Task 2: Data Loading and Processing**
*   [x] **Task 3: Homepage Creation**
*   [x] **Task 4: Category Pages**
*   [x] **Task 5: Listing Detail Pages**

**Phase 2: Enhancements**
*   [x] **Task 7: Implement Search Functionality**
*   [x] **Task 8: Integrate Google Maps**

**Phase 3: Styling and UI Migration**
*   [x] **Task 6: Basic Styling (Initial)** (Superseded)
*   [x] **Task 9: Site Name Change**
*   [x] **Task 10: Migrate to shadcn/ui and Tailwind CSS**
    *   [x] 10.1: Add Tailwind CSS to Astro project.
    *   [x] 10.2: Initialize shadcn/ui in the project.
    *   [x] 10.3: Configure `tailwind.config.js` and global CSS for shadcn/ui.
    *   [x] 10.4: Install initial shadcn/ui components (Button, Card).
    *   [x] 10.5: Replace category links on Homepage with shadcn `Button`.
    *   [x] 10.6: Replace featured listings on Homepage with shadcn `Card`.
    *   [x] 10.7: Update Category Pages with shadcn `Card` and `Button`.
    *   [x] 10.8: Update Listing Detail Page with shadcn `Card`.
    *   [x] 10.9: Clean up old/redundant CSS.

**Phase 4: Content and Community Features**
*   [x] **Task 11: Create Static Content Pages**
    *   [x] 11.1: Add FAQ Section to Homepage
    *   [x] 11.2: Create About Us Page
    *   [x] 11.3: Create Contact Page
*   [x] **Task 12: Implement "Submit New Listing" Form**
    *   [x] 12.1: Design Data Structure for New Submissions (Updated with relaxed fields)
    *   [x] 12.2: Create Submission Form Page (Updated with relaxed fields)
    *   [x] 12.3: Implement Form Submission (Frontend Only)
*   [x] **Task 13: Add Navigation Links to Layout** (Layout will be revisited with new UI style)
    *   [x] 13.1: Update Layout with New Page Links (Will be revisited with new UI style)

**Phase 5: UI Migration to Neo-Brutalism Style**
*   [x] **Task 14 (New): Understand Neo-Brutalism Implementation**
    *   [x] 14.1: Explore `neo-brutalism` Directory Structure
    *   [x] 14.2: Identify Key UI Components & Styling Patterns
    *   [x] 14.3: Analyze Global Styles & Theming
*   [ ] **Task 15 (New): Plan Integration and Component Mapping**
    *   [x] 15.1: Map Existing Components to Neo-Brutalism Style
    *   [ ] 15.2: Plan Styling Integration
*   [ ] **Task 16 (New): Phased Implementation of Neo-Brutalism Style**
    *   [ ] 16.1: Apply Global Styles & Update Layout
    *   [ ] 16.2: Re-style/Replace Button Components
    *   [ ] 16.3: Re-style/Replace Card Components
    *   [ ] 16.4: Re-style/Replace Accordion Component (FAQ)
    *   [ ] 16.5: Re-style/Replace Form Elements
*   [ ] **Task 17 (New): Cleanup and Final Testing**
    *   [ ] 17.1: Remove Old UI Styles/Components
    *   [ ] 17.2: Comprehensive Site Testing

## Executor's Feedback or Assistance Requests

*None at the moment.*

## Lessons

*   **Astro/Vite Scoping:** `