# Dr. Aqua Content Replacement Guide 📝

This guide explains how to easily update the website content with your own company information.

## 🎯 Quick Start: What to Change

### 1. Project Portfolio (`src/content/data/projects.json`)

**Replace these with your actual projects:**

```json
{
  "title": "Your Project Name",
  "client": "Your Client Name",
  "budget": "AED 50,000",
  "description": "Brief description of what you built",
  "image": "https://images.unsplash.com/photo-[YOUR-IMAGE-ID]?w=800&h=600&fit=crop&q=80"
}
```

**Easy Image Sources:**

- **Unsplash**: Free high-quality photos
- **Pexels**: Free stock photos
- **Your own photos**: Upload to a CDN or use relative paths

**Image Categories by Industry:**

- Healthcare: Search "medical technology", "hospital", "healthcare app"
- E-commerce: Search "online shopping", "fashion", "mobile shopping"
- Education: Search "online learning", "education technology", "students"
- Finance: Search "fintech", "banking app", "financial dashboard"

### 2. Team Members (`src/content/data/team-members.json`)

**Replace with your actual team:**

```json
{
  "name": "Your Name",
  "role": "Your Position",
  "bio": "2-3 sentences about your background and expertise",
  "image": "https://images.unsplash.com/photo-[PERSON-ID]?w=400&h=400&fit=crop&q=80",
  "expertise": ["Skill 1", "Skill 2", "Skill 3"],
  "experience": "X+ years",
  "email": "yourname@yourcompany.com"
}
```

**Professional Photo Tips:**

- Use Unsplash search: "professional headshot", "business portrait"
- Keep aspect ratio 1:1 (square)
- High resolution (400x400 minimum)

### 3. Job Openings (`src/content/data/jobs.json`)

**Update with your open positions:**

```json
{
  "title": "Your Job Title",
  "salary": {
    "min": 80000,
    "max": 120000,
    "currency": "AED"
  },
  "location": "Your Location",
  "description": "What this role involves",
  "requirements": {
    "essential": ["Must have skill 1", "Must have skill 2"],
    "preferred": ["Nice to have skill 1", "Nice to have skill 2"]
  }
}
```

## 🖼️ Image Quick Reference

### Unsplash URLs Format:

```
https://images.unsplash.com/photo-[PHOTO-ID]?w=[WIDTH]&h=[HEIGHT]&fit=crop&q=80
```

### Common Sizes:

- **Project images**: `w=800&h=600`
- **Team photos**: `w=400&h=400`
- **Testimonial avatars**: `w=100&h=100`

### Best Unsplash Search Terms:

- **Tech/Software**: "software development", "coding", "tech team", "app development"
- **Business**: "business meeting", "office", "professional team", "startup"
- **Industry Specific**: "healthcare technology", "fintech", "e-commerce", "education tech"

## 📱 Finding the Right Photos

### For Projects:

1. Go to [unsplash.com](https://unsplash.com)
2. Search for your industry (e.g., "healthcare app", "e-commerce website")
3. Copy the photo ID from URL
4. Use format: `https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop&q=80`

### For Team Members:

1. Search "professional headshot" or "business portrait"
2. Choose diverse, professional-looking people
3. Copy photo ID and use format: `https://images.unsplash.com/photo-[ID]?w=400&h=400&fit=crop&q=80`

## ⚡ Quick Content Updates

### Company Information:

- **Company name**: Search for "Dr. Aqua" in files and replace
- **Contact info**: Update in `src/constant/config.ts`
- **Social links**: Update in team member profiles and config

### Text Content:

- **Mission/Vision**: Update in home page content files
- **Service descriptions**: Modify in `src/content/en/services.json`
- **About content**: Update in `src/content/en/home.json`

## 🎨 Branding Updates

### Colors:

- Primary colors are defined in `src/styles/globals.css`
- Search for "oklch" color values to update brand colors

### Logo:

- Replace files in `public/` directory
- Update references in navigation components

## ✅ Content Checklist

**Before Launch:**

- [ ] All team member photos updated
- [ ] All project images reflect your work
- [ ] Client testimonials are from real clients
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Job postings reflect actual openings
- [ ] Company description matches your business
- [ ] All placeholder text removed

## 🔧 Technical Notes

- **File locations**: Content is organized by section in `src/content/` with multilingual support (en/ar folders)
- **Structure**: Each section has separate `content.json` and `data.json` files
- **Multilingual**: Currently supports English (en) and Arabic (ar)
- **Format**: JSON files (be careful with syntax)
- **Images**: Use HTTPS URLs for external images
- **Performance**: Optimized images load faster (use query parameters like `?w=800&q=80`)

## 💡 Pro Tips

1. **Consistency**: Keep image styles similar (same filters, lighting)
2. **Quality**: Use high-resolution images (800px+ for projects)
3. **Relevance**: Match images to your actual work/industry
4. **Performance**: Compress images and use appropriate sizes
5. **Accessibility**: Add meaningful alt text for all images

---

**Need help?** This guide covers the basics. For complex changes, consult with your developer or refer to the technical documentation in `CLAUDE.md`.
