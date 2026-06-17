# Problem 2 - Currency Swap UI

## Overview

This project is a responsive Currency Swap application built with React and Vite. It allows users to select tokens, enter an amount, view exchange rates, and simulate token swaps using live token price data.

## Features

- Fetches token prices from the provided API
- Displays a list of available tokens
- Filters out tokens without valid prices
- Real-time exchange rate calculation
- Token-to-token swap functionality
- Token icons support
- Input validation
- Loading and error states
- Swap detail preview

  - Exchange rate
  - Estimated received amount
  - Network fee

- Swap success confirmation screen
- Dark / Light mode toggle with theme persistence
- Responsive design for desktop and mobile devices

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Hooks

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SwapToken.jsx
│   ├── TokenList.jsx
│   ├── SwapDetail.jsx
│   └── SwapSuccess.jsx
│
├── hooks/
│   └── useTheme.js
│
├── helper/
│   └── tokenHelper.js
│
├── App.jsx
└── main.jsx
```

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Design Decisions

- Implemented a clean two-column layout:

  - Left: Swap Form
  - Right: Token List

- Added dark/light theme support with local storage persistence.
- Added token icons to improve usability.
- Included a success screen after swap completion for better user feedback.
- Omitted tokens without valid price information as specified in the requirements.

## Assumptions

- Tokens with missing or invalid prices are excluded from swap calculations.
- Swap functionality is simulated and does not perform actual blockchain transactions.
- Exchange rates are calculated using the latest available token prices from the provided API.
