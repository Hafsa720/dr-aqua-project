# 📝 Content Replacement Guide for Non-Technical Users

**Welcome!** This guide helps you easily update project case studies without touching any code. Look for text in **[BRACKETS]** - these are placeholders you should replace with your real information.

## 🎯 How to Update Project Content

### Step 1: Navigate to Case Study Files

1. Go to `src/content/projects/en/case-studies/`
2. Open any project file (e.g., `medconnect.md`)

### Step 2: Replace Bracketed Placeholders

#### 🏢 **Client Information** (Top of file)

```
client: "[YOUR CLIENT NAME HERE - e.g., Emirates Healthcare Group]"
```

**Replace with:** Your actual client name
**Example:** `client: "Emirates Healthcare Group"`

#### 👤 **Testimonial Information**

```
"author": "[CLIENT NAME - e.g., Dr. Sarah Ahmed]",
"position": "[CLIENT TITLE - e.g., Chief Medical Officer]"
```

**Replace with:** Real client contact details
**Example:**

```
"author": "Dr. Sarah Ahmed",
"position": "Chief Medical Officer"
```

### Step 3: Update Project Results

Look for the `results` section and update with your real metrics:

```
results: {
  "userGrowth": "250%",        ← Replace with your actual growth
  "bookingIncrease": "180%",   ← Replace with your actual improvement
  "userSatisfaction": "4.8/5", ← Replace with your actual rating
  "responseTime": "< 2s"       ← Replace with your actual performance
}
```

## 🖼️ Image Guidelines

### Current Placeholder Images

All images are currently using Unsplash placeholders:

- **Hero images**: Professional, relevant to the industry
- **Dashboard images**: Clean, modern interface screenshots
- **Mobile images**: Mobile app or responsive design examples

### How to Replace Images

1. **Option 1 - Keep Unsplash**: Images are already professional placeholders
2. **Option 2 - Use Your Images**: Replace URLs with your actual project screenshots
3. **Option 3 - Update Unsplash**: Change the image ID in the URL for different placeholder

**Example Image URL Structure:**

```
"hero": "https://images.unsplash.com/photo-[ID]?w=1200&h=630&fit=crop&q=80"
```

## 📊 Quick Reference: What Each Project Shows

### 🏥 **MedConnect** (`medconnect.md`)

- **Industry**: Healthcare
- **Best for**: Medical, hospital, telemedicine projects
- **Key features**: Patient management, appointments, telemedicine
- **Placeholder client**: Emirates Healthcare Group

### 💰 **FinFlow** (`finflow.md`)

- **Industry**: FinTech/Banking
- **Best for**: Financial, banking, payment projects
- **Key features**: Digital banking, payments, analytics
- **Placeholder client**: Emirates NBD FinTech

### 🛒 **ShopFlow** (`shopflow.md`)

- **Industry**: E-commerce
- **Best for**: Online stores, marketplaces, retail
- **Key features**: Multi-vendor, search, inventory
- **Placeholder client**: Noon E-commerce

### 🎓 **EduTech Platform** (`edutech-platform.md`)

- **Industry**: Education
- **Best for**: Learning platforms, schools, training
- **Key features**: Online courses, AI tutoring, VR
- **Placeholder client**: ADEK Education Ministry

### 🏙️ **SmartCity Dashboard** (`smartcity-dashboard.md`)

- **Industry**: Government/Smart City
- **Best for**: Municipal, IoT, analytics projects
- **Key features**: IoT monitoring, analytics, emergency response
- **Placeholder client**: Dubai Municipality

### 🚚 **Logistics Optimizer** (`logistics-optimizer.md`)

- **Industry**: Logistics/Supply Chain
- **Best for**: Transportation, warehouse, supply chain
- **Key features**: Route optimization, inventory, tracking
- **Placeholder client**: Emirates Post Group

## ⚡ Quick Text Replacements

### For ALL projects, replace these common placeholders:

1. **Company Names**: Look for bracketed examples like `[YOUR CLIENT NAME HERE - e.g., ...]`
2. **People Names**: Look for `[CLIENT NAME - e.g., ...]`
3. **Job Titles**: Look for `[CLIENT TITLE - e.g., ...]`
4. **Results/Metrics**: Update numbers to match your actual project results

### ❌ **DO NOT Change**:

- File names
- The structure (the `---` lines at the top)
- Property names (the words before the `:`)
- Image URLs (unless you have better images)

### ✅ **SAFE to Change**:

- Any text in quotes
- Numbers and percentages
- Names and titles
- Descriptions and content

## 🔧 Pro Tips

1. **Keep it realistic**: Don't use fake metrics that are too good to be true
2. **Match the industry**: Use healthcare examples for healthcare projects
3. **Consistent naming**: Use the same client name throughout a single project
4. **Professional tone**: Keep the language professional and specific
5. **Real testimonials**: If possible, use actual client quotes

## 🆘 Need Help?

- **Simple text changes**: You can do these yourself safely
- **Technical issues**: Ask your developer
- **New project types**: Ask your developer to create new templates
- **Broken formatting**: Ask your developer to check the file

## ✅ Quick Checklist Before Publishing

- [ ] Replaced all `[BRACKETED PLACEHOLDERS]`
- [ ] Updated client names consistently throughout the file
- [ ] Updated testimonial author and position
- [ ] Verified all metrics are realistic and accurate
- [ ] Checked that descriptions match your actual project
- [ ] Kept all punctuation and quotation marks intact

**Remember**: When in doubt, make small changes and ask for help! It's better to be safe than break the formatting.
