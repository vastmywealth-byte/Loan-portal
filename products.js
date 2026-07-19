/**
 * ============================================================
 * VastMyWealth Loan Portal — products.js
 * ============================================================
 * Single source of truth for loan products. Used by index.html
 * (product grid) and later by apply.html (to know which product
 * was selected). To add a new loan product in future, add one
 * object here — no other file needs to change.
 *
 * icon: a simple inline SVG path (kept minimal, no external icon
 * library dependency) rendered inside the circular icon badge.
 */

const LOAN_PRODUCTS = [
  {
    id: 'personal-loan',
    name: 'Personal Loan',
    icon: '<path d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 22a8 8 0 0116 0"/>'
  },
  {
    id: 'home-loan',
    name: 'Home Loan',
    icon: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>'
  },
  {
    id: 'loan-against-property',
    name: 'Loan Against Property',
    icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>'
  },
  {
    id: 'business-loan',
    name: 'Business Loan',
    icon: '<path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-5h6v5"/>'
  },
  {
    id: 'working-capital',
    name: 'Working Capital',
    icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>'
  },
  {
    id: 'balance-transfer',
    name: 'Balance Transfer',
    icon: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/>'
  },
  {
    id: 'used-car-loan',
    name: 'Used Car Loan',
    icon: '<path d="M5 17h14M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM5 17l1.5-6h11L19 17M6.5 11l1-4h9l1 4"/>'
  },
  {
    id: 'new-car-loan',
    name: 'New Car Loan',
    icon: '<path d="M3 17h2M19 17h2M5 17h14M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM5 17l1.5-6h11L19 17"/>'
  },
  {
    id: 'commercial-vehicle-loan',
    name: 'Commercial Vehicle Loan',
    icon: '<path d="M1 3h13v13H1zM14 8h4l3 4v4h-7V8z"/><circle cx="5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'
  },
  {
    id: 'machinery-loan',
    name: 'Machinery Loan',
    icon: '<path d="M10 2v4M14 2v4M4 8h16v3a4 4 0 01-4 4h-1v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5H8a4 4 0 01-4-4V8z"/>'
  }
];
