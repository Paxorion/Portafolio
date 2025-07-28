# 🚀 Max Navarro - Interactive AI Portfolio

A modern and interactive portfolio that combines elegant design with cutting-edge technology, including immersive 3D experiences and motion tracking.

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism** - Glass and transparency effects
- **Smooth animations** - Fluid transitions with Framer Motion
- **Responsive Design** - Optimized for all devices
- **Dark theme** - Elegant and modern interface

### 🤖 Interactive Experiences
- **3D Robot with Tracking** - 3D model that follows mouse cursor
- **Spline Scenes** - Immersive 3D experiences
- **Particle effects** - Dynamic background animations
- **Spotlight effects** - Interactive lighting effects

### 📱 Portfolio Sections
- **Landing Page** - Welcome page with interactive 3D robot
- **About** - Personal and professional information
- **Skills** - Technical skills with animations
- **Projects** - Featured projects
- **Contact** - Contact form with ProfileCard

## 🛠️ Technologies

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing for greater robustness
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D & Interactivity
- **Spline** - 3D design tool
- **@splinetool/react-spline** - 3D scene integration
- **Mouse Tracking** - Cursor tracking for interactions

### UI Components
- **shadcn/ui** - Reusable interface components
- **Lucide React** - Modern iconography
- **React Hooks** - State and effects management

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation steps

1. **Clone the repository**
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Run in development**
```bash
pnpm dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # Base UI components
│   │   ├── spline-scene.tsx    # 3D component
│   │   ├── button.tsx          # Buttons
│   │   └── ...                 # Other components
│   ├── landing-page.tsx        # Welcome page
│   ├── portfolio.tsx           # Main portfolio
│   ├── hero.tsx               # Hero section
│   ├── about.tsx              # About section
│   ├── skills.tsx             # Skills section
│   ├── projects.tsx           # Projects section
│   ├── contact.tsx            # Contact section
│   └── ProfileCard.tsx        # Profile card
├── public/               # Static files
│   └── images/          # Project images
├── styles/              # Additional styles
└── lib/                 # Utilities and configurations
```

## 🎯 Key Features

### 🤖 Interactive 3D Robot
- **Mouse tracking** - Robot follows cursor
- **Smooth animations** - Linear interpolation for natural movements
- **Responsive** - Optimized for mobile and desktop
- **Performance** - Optimized with `requestAnimationFrame`

### 🎨 Visual Effects
- **Floating particles** - Background animations
- **Light effects** - Dynamic ambient lighting
- **Grid patterns** - Subtle background patterns
- **Corner accents** - Corner details

### 📱 User Experience
- **Fluid navigation** - Transitions between sections
- **Loading states** - Elegant loading states
- **Error handling** - Robust error handling
- **Accessibility** - Enhanced accessibility

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for specific configurations:

```env
# Spline Scene URLs (optional)
NEXT_PUBLIC_SPLINE_SCENE_URL=https://prod.spline.design/...
```

### Customization
- **Colors**: Modify `tailwind.config.ts`
- **3D Scenes**: Update URLs in `spline-scene.tsx`
- **Content**: Edit components in `components/`

## 📦 Available Scripts

```bash
pnpm dev          # Local development
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Code linting
pnpm type-check   # Type checking
```

## 🌟 Upcoming Improvements

- [ ] **Light/dark mode** - Theme toggle
- [ ] **More 3D scenes** - Additional experiences
- [ ] **Integrated blog** - Articles section
- [ ] **CMS** - Content management
- [ ] **PWA** - Progressive Web App
- [ ] **Analytics** - User metrics

## 📄 License

This project is under the MIT License. See `LICENSE` for more details.

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Max Navarro** - [LinkedIn](https://linkedin.com/in/maxnavarro) - [Email](mailto:maxnavar@gmail.com)

---

⭐ If you like this project, give it a star on GitHub! 