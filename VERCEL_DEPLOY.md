# 🚀 הוראות פריסה ל-Vercel

## דרך 1: פריסה דרך הממשק (מומלץ)

1. **היכנס ל-Vercel:**
   - לך ל-[vercel.com](https://vercel.com)
   - התחבר עם חשבון GitHub שלך

2. **ייבא פרויקט:**
   - לחץ על **"Add New..."** → **"Project"**
   - בחר **"Import Git Repository"**
   - בחר את ה-repository: `liormedan/WaveQ-Framer-webpage`

3. **הגדרות פרויקט:**
   - **Project Name:** `waveq-framer-webpage` (או כל שם אחר באותיות קטנות)
   - **Framework Preset:** Next.js (יוזהה אוטומטית)
   - **Root Directory:** `./` (ברירת מחדל)
   - **Build Command:** `next build` (ברירת מחדל)
   - **Output Directory:** `.next` (ברירת מחדל)
   - **Install Command:** `npm install` (ברירת מחדל)

4. **לחץ על "Deploy"**
   - Vercel יבנה את הפרויקט אוטומטית
   - תקבל קישור לאתר הפרוס (למשל: `waveq-framer-webpage.vercel.app`)

---

## דרך 2: פריסה דרך CLI

אם אתה רוצה להשתמש ב-CLI, תצטרך לספק שם פרויקט באותיות קטנות:

```bash
vercel --yes --name waveq-framer-webpage
```

או אם אתה רוצה לעשות את זה אינטראקטיבי:

```bash
vercel
```

ואז:
- התחבר לחשבון Vercel שלך
- בחר שם פרויקט (באותיות קטנות)
- אישר את ההגדרות

---

## ✅ מה קורה אחרי הפריסה?

1. **קישור אוטומטי:** כל push ל-`main` branch יפרס אוטומטית
2. **Preview Deployments:** כל branch/PR יקבל קישור preview
3. **Custom Domain:** תוכל להוסיף domain מותאם אישית בהגדרות

---

## 🔧 הגדרות נוספות (אופציונלי)

אם אתה רוצה להגדיר environment variables או הגדרות נוספות:
- לך ל-**Settings** → **Environment Variables**
- הוסף משתנים לפי הצורך

---

**הפרויקט מוכן לפריסה! 🎉**

