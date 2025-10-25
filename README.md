# ShopMart 🛒

A modern, responsive shopping cart application built with React that allows users to browse products, add items to their cart, and manage their shopping experience.

## Features

- **Product Browsing**: View a collection of products fetched from the Fake Store API
- **Shopping Cart Management**: 
  - Add items to cart
  - Update item quantities
  - Remove individual items
  - Clear entire cart
- **Persistent Cart**: Cart data is saved to localStorage and persists across browser sessions
- **Cart Summary**: Real-time calculation of subtotal, shipping costs, and order total
- **Free Shipping**: Orders over $50 qualify for free shipping
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback while products are being fetched
- **Error Handling**: Graceful error handling with user-friendly messages
- **Route-based Navigation**: Smooth navigation between Home, Shop, and Cart pages
- **Cart Badge**: Live counter showing total items in cart

## Technologies Used

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite** - Build tool and development server
- **Styled Components** - CSS-in-JS styling
- **CSS Modules** - Scoped component styling
- **Fake Store API** - Product data source
- **React Loading Indicators** - Loading animations

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 20.0.0 or higher)
- npm (version 8.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdirazakf/shopping-cart
cd shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
shopping-cart/
├── src/
│   ├── assets/          # Static assets (SVG icons)
│   ├── components/      # React components
│   │   ├── App.jsx      # Main app component with state management
│   │   ├── NavBar.jsx   # Navigation bar
│   │   ├── Homepage.jsx # Landing page
│   │   ├── Shop.jsx     # Products listing page
│   │   ├── Cart.jsx     # Shopping cart page
│   │   ├── Card.jsx     # Product card component
│   │   └── ErrorPage.jsx# 404 error page
│   ├── styles/          # CSS Module files
│   ├── routes.jsx       # React Router configuration
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How to Use

1. **Browse Products**: Navigate to the Shop page to view available products
2. **Add to Cart**: Click the "Add to Cart" button on any product card
3. **View Cart**: Click the Cart button in the navigation bar to view your cart
4. **Update Quantities**: Use the +/- buttons or type directly in the quantity field
5. **Remove Items**: Click the "Delete" button to remove items from your cart
6. **Clear Cart**: Use the "Clear Cart" button to remove all items at once

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The API provides realistic e-commerce product information including:
- Product titles
- Prices
- Images
- Categories

## Features in Detail

### Cart Persistence
The shopping cart uses browser localStorage to save cart data, ensuring users don't lose their items when they refresh the page or close the browser.

### Smart Shipping Calculation
- Orders under $50: $5.00 shipping fee
- Orders $50 or more: FREE shipping

### Responsive Design
The application is fully responsive with breakpoints for:
- Desktop (>1024px)
- Tablet (769px - 1024px)
- Mobile (481px - 768px)
- Small Mobile (<480px)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication
- Product search and filtering
- Product categories
- Wishlist functionality
- Order history
- Payment integration
- Product reviews and ratings
- Multiple product images
- Size and color variants

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Product data provided by [Fake Store API](https://fakestoreapi.com/)
- Icons from Google Material Symbols
- Loading indicator from react-loading-indicators

