# WaveQ - Landing Page

🌊 עמוד פרסומי/תדמיתי ב-Next.js המציג את פלטפורמת **WaveQ** - מערכת אינטראקטיבית של צ'אט ועריכת אודיו עם אנימציות מתקדמות.

## 🌐 Live Demo

**🚀 האתר החי:** [https://waveq-framer-webpage-8zayvrpms-liormedans-projects.vercel.app](https://waveq-framer-webpage-8zayvrpms-liormedans-projects.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liormedan/WaveQ-Framer-webpage)

## 🚀 התקנה

```bash
# התקנת תלויות
npm install

# הרצת שרת פיתוח
npm run dev

# בניית גרסת production
npm run build

# הרצת גרסת production
npm start
```

פתח [http://localhost:3000](http://localhost:3000) בדפדפן כדי לראות את התוצאה.

## 🛠️ טכנולוגיות

- **Next.js 14** - Framework React עם App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - אנימציות 3D ו-scroll-triggered
- **Lucide React** - אייקונים אינטראקטיביים

## 📁 מבנה הפרויקט

```
/
├── app/
│   ├── layout.tsx          # Layout עם metadata
│   ├── page.tsx            # דף ראשי
│   └── globals.css         # סטיילים גלובליים + 3D effects
├── components/
│   ├── HeroSection.tsx     # Hero עם 3D text effect
│   ├── AboutSection.tsx
│   ├── FeaturesSection.tsx # 3D cards עם tilt effect
│   ├── TechStack.tsx       # 3D cards עם lift effect
│   ├── VisionSection.tsx
│   ├── CTASection.tsx      # 3D button עם glow
│   ├── Footer.tsx
│   ├── Background3D.tsx    # רקע עם gradient mesh
│   └── FloatingParticles.tsx # חלקיקים מרחפים
├── styles/
│   └── 3d-effects.css      # Utility classes ל-3D
└── package.json
```

## 🎨 מאפיינים

- ✅ **RTL מלא** (עברית)
- ✅ **Dark Mode** כברירת מחדל
- ✅ **Responsive Design** - מובייל, טאבלט, דסקטופ
- ✅ **אנימציות Framer Motion** - 3D effects, scroll-triggered animations
- ✅ **עיצוב 3D** - tilt effects, depth shadows, glow effects
- ✅ **רקע דינמי** - gradient mesh עם animated orbs
- ✅ **SEO מובנה** - metadata מלא
- ✅ **Accessibility** - ניגודיות גבוהה, תמיכה במקלדת, reduced motion

## 📦 פריסה

הפרויקט נפרס בהצלחה ב-Vercel! 🎉

**קישור לפריסה:** [https://waveq-framer-webpage-8zayvrpms-liormedans-projects.vercel.app](https://waveq-framer-webpage-8zayvrpms-liormedans-projects.vercel.app)

**Dashboard:** [https://vercel.com/liormedans-projects/waveq-framer-webpage](https://vercel.com/liormedans-projects/waveq-framer-webpage)

### פריסה אוטומטית
- כל push ל-`main` branch יפרס אוטומטית
- כל branch/PR יקבל קישור preview

### פריסה ידנית דרך CLI:

```bash
npm i -g vercel
vercel --yes
```

## 🎨 עיצוב 3D

האתר כולל אפקטים תלת-ממדיים מתקדמים:
- **3D Text Effects** - כותרת עם עומק ותאורה
- **3D Cards** - כרטיסים עם tilt/lift effects
- **Depth Shadows** - צללים מרובים לעומק
- **Glow Effects** - זוהר על כפתורים
- **Floating Particles** - חלקיקים מרחפים
- **Background Layers** - שכבות רקע עם parallax

## 📚 מסמכי תכנון

- `תכנון_עיצוב_3D.md` - תכנון מפורט של אפקטים 3D
- `דרישות_ופעולות_לביצוע.md` - מסמך דרישות מלא
- `framer_audio_chat_demo_page.md` - מפרט מקורי

## 👤 מפתח

**ליאור מדן** - מפתח ממשקים ואנימציות דינמיות

🔗 **GitHub:** [liormedan/WaveQ-Framer-webpage](https://github.com/liormedan/WaveQ-Framer-webpage)

---

© 2024 WaveQ. כל הזכויות שמורות.

