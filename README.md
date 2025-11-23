# Gaza: Voices of Resilience

An interactive documentary chronicling the humanitarian crisis in Gaza through powerful stories, statistics, and testimonials. This web experience combines compelling narratives with scroll-driven animations to create an immersive journey through the voices of resilience.

## 🌟 Features

- **Interactive Hero Section** - Engaging parallax scrolling with dynamic text animations
- **Animated Statistics** - Real-time counter animations displaying the human cost
- **Timeline** - Chronological visualization of key events with scroll-triggered animations
- **Testimonials** - Personal stories from those affected by the crisis
- **Gallery** - Visual storytelling through powerful imagery
- **Call to Action** - Opportunities to support and engage with the cause
- **Responsive Design** - Optimized for all device sizes
- **GSAP Animations** - Smooth, professional scroll-triggered animations throughout

## 🛠️ Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible component library
- **GSAP** - Professional-grade animation library with ScrollTrigger
- **React Router** - Client-side routing
- **Lucide React** - Modern icon system

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🚀 Deployment

### Via Lovable

1. Open your [Lovable Project](https://lovable.dev/projects/c8131cc2-18ee-4fc7-bdfd-a6dac61a528c)
2. Click the **Publish** button in the top right
3. Follow the deployment steps

### Manual Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist` directory, ready to deploy to any static hosting service.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section with parallax
│   ├── Statistics.tsx  # Animated statistics
│   ├── Timeline.tsx    # Event timeline
│   ├── Testimonials.tsx # User testimonials
│   ├── Gallery.tsx     # Image gallery
│   └── CallToAction.tsx # CTA section
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles & design tokens
```

## 🎨 Design System

The project uses a semantic design system defined in:
- `src/index.css` - CSS custom properties for colors, gradients, shadows
- `tailwind.config.ts` - Tailwind theme extensions

All components use semantic tokens (e.g., `primary`, `secondary`, `muted`) for consistent theming.

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style

- Components use TypeScript with strict typing
- Functional components with hooks
- Tailwind CSS for styling (no custom CSS classes)
- GSAP for animations with proper cleanup
- Semantic HTML for accessibility

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the Gaza Voices initiative to raise awareness about the humanitarian situation in Gaza.

## 🤝 Contributing

This is a humanitarian documentation project. If you'd like to contribute or have suggestions, please reach out through the project's official channels.

## 📞 Support

For technical issues or questions about the project:
- Visit [Lovable Documentation](https://docs.lovable.dev/)
- Join the [Lovable Discord Community](https://discord.com/channels/1119885301872070706/1280461670979993613)

## 🙏 Acknowledgments

This project honors the resilience and strength of the Palestinian people, particularly those in Gaza who continue to endure unimaginable hardship while maintaining their dignity and hope for a better future.

---

*"They tried to bury us. They didn't know we were seeds." - Palestinian Proverb*
