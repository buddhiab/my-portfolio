# Blueprint Developer Portfolio

A customizable, responsive developer portfolio template built with React (Vite), Tailwind CSS, and shadcn/ui. Designed for easy personalization and free deployment.

## Features

- **Configurable**: All content is driven by a single configuration file.
- **Modern Stack**: React, Vite, Tailwind CSS, shadcn/ui.
- **Responsive**: Mobile-friendly layout with a sticky navbar and mobile menu.
- **Dark Mode**: Default dark theme for a premium look.
- **Accessible**: Built with accessible components from shadcn/ui.

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Personalization

Open `src/portfolio.config.js` and update the object with your personal details:

- **name**: Your full name.
- **titles**: An array of your professional titles.
- **socialLinks**: Links to your social profiles.
- **aboutMe**: A short bio.
- **skills**: Categorized lists of your skills (Languages, Frameworks, Tools).
- **projects**: An array of project objects.

### 3. Development

Run the development server:

```bash
npm run dev
```

## Deployment

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` folder containing your static site.

### Deploy to Netlify (Drag & Drop)

1. Run `npm run build`.
2. Log in to [Netlify](https://www.netlify.com/).
3. Drag and drop the `dist` folder into the "Sites" area.

### Deploy to Vercel (Git Integration)

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect Vite and deploy your site.

## License

MIT
