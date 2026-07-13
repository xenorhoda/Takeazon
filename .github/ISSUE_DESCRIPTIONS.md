# Angular E-Commerce Component Descriptions

## Issue #1: app-product-card
**Purpose:** Reusable component that displays a single product with essential information.

**Best Practices to Follow:**
- Use `@Input()` to accept product data (id, name, price, image, rating)
- Implement change detection strategy `OnPush` for performance
- Use `trackBy` function when rendering images to avoid unnecessary DOM updates
- Ensure the component is stateless—no internal data mutations
- Use proper TypeScript typing for product data interface
- Implement lazy loading for product images using native lazy loading or Intersection Observer
- Make it accessible: add `alt` text to images, proper ARIA labels
- Emit events via `@Output()` for user actions (add to cart, view details)
- Keep styles scoped to this component—avoid global styles

## Issue #2: app-product-grid
**Purpose:** Container component that displays multiple product cards in a responsive grid layout.

**Best Practices to Follow:**
- Use CSS Grid or Flexbox for responsive layout
- Accept an array of products via `@Input()`
- Implement virtual scrolling if you expect large product lists (use Angular CDK)
- Use `*ngFor` with `trackBy` function to optimize rendering
- Make grid responsive: mobile (1 col), tablet (2-3 cols), desktop (4+ cols)
- Consider pagination or infinite scroll for large datasets
- Pass individual products to `app-product-card` component using proper component composition
- Handle loading states and empty states gracefully
- Use proper semantic HTML (`<section>`, `<article>` tags)

## Issue #3: app-product-details
**Purpose:** Full product details page component showing comprehensive product information.

**Best Practices to Follow:**
- Subscribe to route parameters to load the correct product
- Use async pipe or proper subscription management to prevent memory leaks
- Display: full description, images gallery, all attributes, pricing, stock status
- Implement image gallery with preview/thumbnail functionality
- Show availability status clearly (in stock, low stock, out of stock)
- Use reactive forms best practices if allowing product configuration (size, color)
- Include related/recommended products section
- Make API calls via a dedicated service, not directly in the component
- Unsubscribe from observables in `ngOnDestroy` or use the async pipe
- Ensure proper error handling if product data fails to load

## Issue #4: app-filter-sidebar
**Purpose:** Sidebar component for filtering products by various criteria.

**Best Practices to Follow:**
- Use reactive forms for filter inputs (checkboxes, range sliders, dropdowns)
- Emit filter changes via `@Output()` events as users interact
- Consider debouncing filter updates to avoid excessive API calls
- Use `FormGroup` and `FormArray` for complex filter structures
- Keep track of active filters clearly for users
- Add a "Clear Filters" functionality
- Make filters responsive: hamburger menu on mobile, sidebar on desktop
- Use proper accessibility: labels for all form inputs, keyboard navigation
- Consider URL parameters to persist filter state (bookmarkable searches)
- Separate filter logic from the sidebar component if possible (extract to a service)

## Issue #5: app-cart-list
**Purpose:** Container component displaying all items currently in the shopping cart.

**Best Practices to Follow:**
- Connect to a centralized state management (NgRx, Akita, or signals)
- Display cart items using `app-cart-item` component for each item
- Use `*ngFor` with `trackBy` for efficient list rendering
- Show cart summary: subtotal, tax (if applicable), shipping, total
- Display empty cart message when no items exist
- Allow users to continue shopping or proceed to checkout
- Show quantity summary at the top
- Make mobile-friendly: swipeable items, clear quantity adjustment
- Use proper loading states if cart data is async
- Implement undo functionality after item removal (optional but nice UX)

## Issue #6: app-cart-item
**Purpose:** Reusable component representing a single item in the shopping cart.

**Best Practices to Follow:**
- Accept cart item data via `@Input()` (product details, quantity, price)
- Emit events for quantity changes and item removal via `@Output()`
- Show product image, name, price, and quantity controls
- Implement increment/decrement quantity functionality
- Allow quantity modification with input validation (min: 1)
- Show line item total (quantity × price)
- Include a remove button with confirmation (or use toast notification)
- Make responsive: stack on mobile, inline on desktop
- Use proper error handling for invalid quantities
- Track price changes if product price updates in real-time

## Issue #7: app-checkout-form
**Purpose:** Multi-step form for collecting shipping and payment information.

**Best Practices to Follow:**
- Use reactive forms with `FormBuilder` and validation
- Implement step-by-step checkout: shipping → billing → payment review
- Validate inputs in real-time with visual feedback
- Use custom validators for complex validation (zip codes, card formats)
- Store form state so users can go back without losing data
- Disable submit button until form is valid
- Show progress indicator of checkout steps
- Implement proper error messages for failed validations
- Use TypeScript interfaces for form data structure
- Consider auto-fill integration for address fields
- Never store sensitive payment data in the component—send to backend only
- Show order summary alongside the form for context

## Issue #8: app-order-summary
**Purpose:** Component displaying order totals, breakdown, and pricing information.

**Best Practices to Follow:**
- Accept order data via `@Input()` (items, subtotal, tax, shipping, total)
- Display itemized breakdown with quantities and line totals
- Show discount/coupon applications if applicable
- Calculate and display tax clearly
- Show shipping cost or "Free shipping" message
- Highlight the final total prominently
- Use proper number formatting for currency (locale-aware)
- Make responsive: mobile-optimized layout
- Use CSS for visual hierarchy (important info stands out)
- Consider collapsible sections on mobile to save space
- Display estimated delivery date if available

## Issue #9: app-confirmation
**Purpose:** Modal or page component confirming user actions (delete, checkout, etc.).

**Best Practices to Follow:**
- Use a reusable confirmation dialog/modal component
- Accept content via `@Input()`: title, message, action buttons
- Emit events for confirmation/cancellation via `@Output()`
- Implement focus management for accessibility (trap focus in modal)
- Use semantic HTML for dialogs (`<dialog>` tag or ARIA roles)
- Style with proper contrast and clear call-to-action buttons
- Destructive actions should have secondary confirmation
- Allow dismissal via Escape key
- Use animations for modal entrance/exit (smooth UX)
- Ensure keyboard accessibility (tab through buttons)
- Test with screen readers

## Issue #10: app-input
**Purpose:** Reusable form input component for consistent form styling.

**Best Practices to Follow:**
- Implement `ControlValueAccessor` to work with reactive forms
- Support various input types: text, email, password, number, etc.
- Accept `@Input()` properties: label, placeholder, type, disabled state
- Show validation error messages via `@Input()`
- Use proper ARIA labels and descriptions
- Implement focus management and error state styling
- Validate input on blur and provide real-time feedback
- Use `FormControl` binding for two-way data flow
- Ensure keyboard navigation works properly
- Style for accessibility: sufficient color contrast, visible focus states
- Support required field indicators
- Make responsive and mobile-friendly (larger touch targets)

## Issue #11: app-button
**Purpose:** Reusable button component with consistent styling across the application.

**Best Practices to Follow:**
- Accept `@Input()` properties: text, type (primary/secondary/danger), size, disabled
- Emit click events via `@Output()`
- Support different button states: normal, hover, active, disabled, loading
- Use semantic HTML (`<button>` not `<div>`)
- Implement proper ARIA labels and accessibility attributes
- Show loading state with spinner if button triggers async action
- Prevent multiple clicks while processing (debounce or disable)
- Use proper focus management for keyboard navigation
- Style for sufficient color contrast and visible focus state
- Support various sizes for different contexts
- Add icon support alongside text
- Make responsive: touch-friendly sizes on mobile

## Issue #12: app-navbar
**Purpose:** Navigation bar component at the top of every page.

**Best Practices to Follow:**
- Use semantic HTML (`<nav>` tag)
- Include logo/branding link
- Implement responsive menu: horizontal desktop, hamburger mobile
- Use Angular Router for navigation (no page reloads)
- Show active route highlighting
- Include search functionality (integrate with `app-search-bar`)
- Display user account menu if authenticated
- Show cart icon with item count badge
- Implement sticky navigation on scroll (optional but UX improvement)
- Use proper ARIA labels for navigation items
- Mobile menu should close on navigation
- Ensure keyboard accessibility (Tab navigation, Enter to open menus)
- Optimize performance: avoid re-rendering entire navbar on every change

## Issue #13: app-footer
**Purpose:** Footer component with company info, links, and policies.

**Best Practices to Follow:**
- Use semantic HTML (`<footer>` tag)
- Organize links into logical sections (About, Support, Legal, Social)
- Include copyright information and year
- Add newsletter signup integration if applicable
- Use proper internal links with Angular Router
- Make social media links open in new tabs
- Ensure responsive layout: stack on mobile, multi-column on desktop
- Use proper ARIA labels for all links
- Implement keyboard navigation
- Keep footer consistent across all pages
- Add sitemap link for SEO
- Consider accessibility: sufficient color contrast, readable text
- Don't overload with too many links (avoid clutter)

## Issue #14: app-toast-notification
**Purpose:** Notification component for system messages (success, error, warning, info).

**Best Practices to Follow:**
- Use a service to manage toast notifications (injection)
- Accept notification data: type, message, duration, action
- Support multiple simultaneous toasts (queue/stacking)
- Auto-dismiss after set duration (3-5 seconds default)
- Show appropriate icons for each notification type
- Use color coding: green (success), red (error), yellow (warning), blue (info)
- Allow manual dismissal with close button
- Don't block user interaction (appear in corner, not modal)
- Use animations for smooth entry/exit
- Position consistently (top-right is common)
- Ensure accessible: proper ARIA roles, screen reader announcements
- Avoid showing toasts behind sticky headers
- Consider accessibility: don't rely only on color to convey status

## Issue #15: app-search-bar
**Purpose:** Search input component for finding products.

**Best Practices to Follow:**
- Implement autocomplete suggestions as user types
- Use debouncing to avoid excessive API calls (300-500ms)
- Emit search queries via `@Output()` events
- Show search results in dropdown below input
- Allow clearing search with X button
- Implement keyboard navigation for results (arrow keys, Enter)
- Show loading state while fetching suggestions
- Handle empty search results gracefully
- Use proper accessibility: ARIA labels, screen reader support
- Implement `ControlValueAccessor` for reactive form integration
- Consider search history or popular searches
- Make responsive: full-width on mobile, inline on desktop
- Prevent form submission on Enter if using in a form context

## Issue #16: app-rating-stars
**Purpose:** Display product ratings with stars and allow users to leave ratings.

**Best Practices to Follow:**
- Accept rating value via `@Input()` (1-5 stars)
- Display filled/half-filled/empty stars based on rating
- Show numerical rating alongside stars (e.g., "4.5/5")
- Show review count if available
- If clickable: emit rating selection via `@Output()`
- Implement hover effects on interactive ratings
- Use proper accessibility: ARIA labels explaining star ratings
- Support half-star ratings for precise scoring
- Make size customizable via `@Input()`
- Ensure colors have sufficient contrast
- Test with screen readers for proper announcements
- Consider tooltip on hover to explain what each rating means
