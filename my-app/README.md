# Nuxt 3 Minimal Starter

# Welcome! 

This project use as main dependencies: 

* Vue 3
* Nuxt 3 (Vue 3 Framework for scalability, SEO, Edge Programming env) 
* TailwindCSS (default in next documentation)
* Pinia (sucessor of Vuex)
* Jest (testing)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

# Rename dotenv.example to .env
mv dotenv.example .env

# Populate the API_URL inside dotenv with an empty string
echo "API_URL=" >> .env

Make sure to install the dependencies:
```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
