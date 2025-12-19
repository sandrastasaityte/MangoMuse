backend/
│
├─ server.js
├─ package.json
├─ public/
│   └─ images/        # put pics1.jpg ... pics62.jpg here
│
├─ src/
│   ├─ Components/
│   │   ├─ Controllers/
│   │   │   ├─ cakeController.js
│   │   │   ├─ reviewController.js
│   │   │   ├─ cartController.js
│   │   │   └─ searchController.js
│   │   │
│   │   └─ routes/
│   │       ├─ cakeRoutes.js
│   │       ├─ reviewRoutes.js
│   │       ├─ cartRoutes.js
│   │       └─ searchRoutes.js
│   │
│   └─ middleware/
│       └─ errorHandler.js
│
└─ data/
    ├─ reviews.json   # optional
    └─ cart.json      # optional


2)Check endpoints (quick test):

GET /api/cakes → list all cakes (supports ?page=1&limit=20)

GET /api/cakes/:id → single cake

GET /api/cakes/featured → featured cakes

GET /api/categories → list categories

GET /api/reviews → list reviews

POST /api/reviews → add review (name, rating, optional comment and image)

GET /api/cart → view cart


3) Features included

Cakes API

GET /api/cakes → paginated list of 62 cakes

GET /api/cakes/:id → single cake by id

GET /api/featured → first 3 featured cakes

Categories & Special Offers

GET /api/categories → list of categories

GET /api/specialOffers → list of promotions

Reviews

GET /api/reviews → list of reviews

POST /api/reviews → add a review (name + rating required)

Cart

GET /api/cart → view cart

POST /api/cart → update cart (send items array)

DELETE /api/cart → clear cart

Search

GET /api/search?q=<query> → search cakes by name or description

Static files

Images placed in public/images are served at /images/<name>.jpg

Optional JSON persistence

Reviews stored in data/reviews.json

Cart stored in data/cart.json

Health check

GET /api/health → check if server is running