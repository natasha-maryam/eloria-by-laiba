# ELOЯIA by Laiba website package

This package contains two independent applications:

- `eloria-store`: the public customer storefront.
- `eloria-admin`: the separate store-management dashboard.

## Current demo scope

The storefront includes a responsive homepage, product catalog, product details,
size selection, shopping bag, WhatsApp ordering, custom-stitching journey and a
checkout interface. The admin includes overview metrics, product management,
visibility controls, product-image upload interfaces, orders, storefront-content
editing and prepared customer/analytics/settings sections.

The catalog and orders use dummy data. Admin changes are intentionally demo-local
until a production backend and image storage service are selected. The checkout
is also a demo interface until the preferred payment provider, WhatsApp business
number, delivery rules and legal policies are supplied.

## Run locally

Both projects require Node.js 22 or newer. Run these commands inside each folder:

```bash
pnpm install
pnpm dev
```

## Before public launch

1. Replace temporary catalog photography with the brand's original high-resolution images.
2. Add the actual WhatsApp business number.
3. Connect both applications to one production API/database and image storage.
4. Connect the selected payment gateway and courier workflow.
5. Add confirmed delivery, returns, privacy and terms copy.
6. Restrict the admin application to approved administrators.
