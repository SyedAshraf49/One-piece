# One Piece Anime-Themed Professional Portfolio

A stunning One Piece anime-themed professional portfolio website built with React, Vite, and Tailwind CSS.

## 🏴‍☠️ Features

- **Hero Section**: Full-screen landing with compass rose, bounty label, and animated CTAs
- **Wanted Poster**: Unique about section styled as an anime bounty poster
- **Devil Fruit Abilities**: Skill showcase with three devil fruit categories
- **Grand Line**: Project showcase with wax seal cards and corner folds
- **Ship's Log**: Timeline-based experience section with alternating layouts
- **Message in a Bottle**: Contact form with parchment letter styling
- **Smooth Animations**: Framer Motion animations with scroll reveals
- **Responsive Design**: Fully responsive from mobile to desktop
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **No Images**: All visuals created with CSS, SVG, and design patterns

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone or navigate to the project directory
cd "one piece portfolio"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Dependencies

- **react** - UI framework
- **react-dom** - React DOM renderer
- **vite** - Next generation frontend tooling
- **tailwindcss** - Utility-first CSS framework
- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **@fontsource/cinzel** - Cinzel font for headings
- **@fontsource/inter** - Inter font for body text

## 🎨 Design System

### Color Palette
- Navy: `#0a0e1a` (background)
- Sea: `#0d1b2a` (secondary background)
- Gold: `#f4c542` (primary accent)
- Red: `#c0392b` (bounty/secondary)
- Parchment: `#f5e6c8` (cards)

### Fonts
- Headings: Cinzel (serif, bold)
- Body: Inter (sans-serif)

### Animation Principles
- Wave animations between sections
- Scroll-triggered fade-up animations with stagger
- Float/bob effects on hover
- Glow effects on gold elements
- Respects `prefers-reduced-motion` preference

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section
│   ├── About.jsx         # Wanted poster section
│   ├── Skills.jsx        # Devil Fruit Abilities
│   ├── Projects.jsx      # Grand Line
│   ├── Experience.jsx    # Ship's Log timeline
│   ├── Contact.jsx       # Message form
│   └── Footer.jsx        # Footer with links
├── data/
│   └── resumeData.js     # Personal data export
├── App.jsx               # Main component
├── index.css             # Global styles & animations
└── main.jsx              # React entry point
```

## 📝 Customization

### Update Personal Information

Edit `src/data/resumeData.js`:

```javascript
export const resumeData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  // ... etc
};
```

### Modify Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --navy: #0a0e1a;
  --gold: #f4c542;
  /* ... */
}
```

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast 4.5:1 minimum
- ✅ Reduced motion animation support
- ✅ Form validation and feedback

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌊 Sections Overview

### Hero
- Full viewport height with animated compass
- Bounty label with role
- CTA buttons for navigation
- Animated ocean wave dividers

### About
- Wanted poster style card
- Geometric avatar with initials
- Experience and bounty info
- Double border aged aesthetic

### Skills
- Three devil fruit categories
- Animated proficiency bars
- Glow effects
- Staggered animations

### Projects
- Grid layout with wax seals
- Corner fold effects
- Tech stack tags
- Links to live demo and code

### Experience
- Vertical timeline
- Alternating cards (desktop)
- Anchor icons on timeline nodes
- Education section

### Contact
- Parchment letter form
- Rolled edge effects
- Social media links
- Floating bottle background

### Footer
- Navigation links
- Copyright info
- Decorative compass directions

## 🎬 Animation Settings

All animations respect `prefers-reduced-motion` for accessibility. Animations include:
- Wave dividers
- Float effects
- Scroll reveals with stagger
- Hover animations
- Scale transitions

## 💡 Performance Tips

- Lazy load sections using Framer Motion's `once: true`
- Optimized SVG assets
- No external image dependencies
- CSS animations over JS when possible

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

---

**Built with ⚓ and 🎨 - The adventure awaits!**
