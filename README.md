# Karriere Kolleg 🌟

Welcome to the **Karriere Kolleg** web project!  
This website is built for students, job starters, teachers, and career coaches.  
It offers information and guidance about careers, education, and orientation.

---

## 🔧 Tech Stack

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- TypeScript
- Accessibility (WCAG)
- SEO Best Practices

---

## 📦 Install & Start

Install all dependencies:

```bash
npm install
```

Start local development server:

```bash
npm run dev
```

---

## 🧪 Build & Preview

Build the project for local testing:

```bash
npm run build
npm run preview
```

Preview on your local network (for example, from a smartphone):

```bash
npm run preview
```

---

## 🌐 Environments

### 🔹 `.env` (local)

```env
PUBLIC_BASE_URL=http://localhost:4321/
```

### 🔹 `.env.cdx` (CDX live deployment)

```env
PUBLIC_BASE_URL=https://karrierekolleg.at/
```

Build for CDX:

### Important TODO: 
When switching to a custom domain (like karrierekolleg.at),  
change all "/karrierekolleg/..." paths in site.webmanifest back to "/..."

```bash
npm run build:cdx
```

---

## 💅 Code Quality

Lint your code:

```bash
npm run lint
```

Fix linting errors automatically:

```bash
npm run lint:fix
```

Run Astro and TypeScript checks:

```bash
npm run check
```

---

## Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com) via the official Astro + Vite plugin.

Tailwind is available globally through the `global.css` file. You can use all utility classes directly in your `.astro` and `.tsx` files.

To customize Tailwind, edit `tailwind.config.mjs`.

---

## 🎨 Prettier

This project uses [Prettier](https://prettier.io) to format code.

### Format with Prettier

```bash
npx prettier --write .
```

### Check with Prettier

```bash
npx prettier --check .
```

---

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed with GitHub Actions:  
🔗 https://ingeniumapps.github.io/karrierekolleg/

### CDX Hosting

To prepare for CDX:

```bash
npm run build:cdx
```

Then upload the `dist/` folder manually via SFTP to your CDX server.

---

## 📄 License

This project is developed by **Ingenium Education**.

---

## 🙌 Team

- [Sabrina Huber](https://github.com/sa-bri-na) (Project lead & development)
