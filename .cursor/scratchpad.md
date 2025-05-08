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
*   **Task 13: Add Navigation Links to Layout**
    *   **13.1: Update Layout with New Page Links:**
        *   Success Criteria: Links to FAQ, About Us, Contact, and Submit Listing pages are present and functional in the site's main navigation (e.g., header or sidebar) and potentially footer.

**Phase 5: UI Migration to RetroUI**

*   **Task 14: Preparation & Setup for RetroUI**
    *   **14.1: Research RetroUI Component Equivalents** (Provisionally complete; will confirm during implementation)
    *   **14.2: Install RetroUI Package:**
        *   Success Criteria: RetroUI library is successfully installed via npm/pnpm/yarn.
    *   **14.3: Configure RetroUI:**
        *   Success Criteria: Review RetroUI documentation for any necessary Tailwind CSS configurations, plugins, or global style imports and apply them.
    *   **14.4: Plan shadcn/ui Removal:**
        *   Success Criteria: Identify all shadcn/ui specific files and configurations (`components.json`, `src/lib/utils.ts` if only shadcn related, component files in `src/components/ui/`) for removal at the end of the migration.
*   **Task 15: Phased Component Replacement with RetroUI**
    *   **15.1: Update Global Layout & Styles (if needed for RetroUI):**
        *   Success Criteria: `src/layouts/Layout.astro` and global styles are updated according to RetroUI best practices or requirements.
    *   **15.2: Replace Button Components:**
        *   Success Criteria: All instances of shadcn/ui `Button` are replaced with RetroUI button equivalents site-wide. Functionality is preserved.
    *   **15.3: Replace Card Components:**
        *   Success Criteria: All instances of shadcn/ui `Card` are replaced with RetroUI card equivalents site-wide. Functionality is preserved.
    *   **15.4: Replace Accordion Component (FAQ):**
        *   Success Criteria: The shadcn/ui `Accordion` in `src/components/FAQAccordion.tsx` is replaced with a RetroUI accordion equivalent. Functionality is preserved.
    *   **15.5: Replace Form Elements (Contact & Submission Forms):**
        *   Success Criteria: shadcn/ui `Input`, `Textarea`, `Label` in `src/components/ContactForm.tsx` and `src/components/NewListingForm.tsx` are replaced with RetroUI equivalents. Functionality is preserved.
*   **Task 16: Cleanup & Final Testing**
    *   **16.1: Remove shadcn/ui Dependencies & Files:**
        *   Success Criteria: shadcn/ui packages are uninstalled, and related configuration files/components are removed from the project.
    *   **16.2: Comprehensive Site Testing:**
        *   Success Criteria: All pages are visually correct, all interactive elements function as expected, and there are no console errors. Site is responsive.

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
*   [x] **Task 13: Add Navigation Links to Layout** (Considered complete as layout will be part of RetroUI migration)
    *   [x] 13.1: Update Layout with New Page Links

## Executor's Feedback or Assistance Requests

*None at the moment.*

## Lessons

*   **Astro/Vite Scoping:** `