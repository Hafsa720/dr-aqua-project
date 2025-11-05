# 🌐 Content Management System

**Complete multilingual content management for Dr.Aqua** - Update website content without touching code!

## 📂 Project Structure

```
src/content/
├── 📁 common/               # 🌐 Common/Shared Content
│   └── 📁 en/               # 🇺🇸 English
│       ├── 📄 contact.json  # 📞 Contact form & options
│       ├── 📄 content.json  # 🔗 Shared content
│       └── 📄 data.json     # 📊 Common data
├── 📁 home/                 # 🏠 Home Page
│   └── 📁 en/
│       └── 📄 content.json  # 🏠 Home page content
├── 📁 services/             # ⚙️ Services Page
│   └── 📁 en/
│       └── 📄 content.json  # ⚙️ Services content
├── 📁 projects/             # 💼 Projects Page
│   └── 📁 en/
│       ├── 📄 content.json  # 💼 Projects page content
│       ├── 📄 data.json     # 🚀 Project portfolio data
│       └── 📁 case-studies/ # 📖 Individual case studies
│           ├── 📄 medconnect.md      # 🏥 Healthcare project
│           ├── 📄 finflow.md         # 💰 FinTech project
│           ├── 📄 shopflow.md        # 🛒 E-commerce project
│           ├── 📄 edutech-platform.md   # 🎓 Education project
│           ├── 📄 smartcity-dashboard.md # 🏙️ Smart city project
│           └── 📄 logistics-optimizer.md # 🚚 Logistics project
├── 📁 team/                 # 👥 Team Page
│   └── 📁 en/
│       ├── 📄 content.json  # 👥 Team page content
│       └── 📄 data.json     # 👨‍💼 Team member profiles
├── 📁 careers/              # 💼 Careers Page
│   └── 📁 en/
│       ├── 📄 content.json  # 💼 Careers page content
│       └── 📄 data.json     # 💼 Job listings & data
├── 📁 legal/                # ⚖️ Legal Documents
│   └── 📁 en/
│       ├── 📄 privacy-policy.md    # 🔒 Privacy policy
│       ├── 📄 terms-of-service.md  # 📋 Terms of service
│       └── 📄 cookie-policy.md     # 🍪 Cookie policy
├── ⚙️ config.ts             # 🔧 System configuration
└── 📚 README.md             # 📖 This guide
```

## ⚡ Quick Start

### 📝 Update Page Content:

1. 📂 Navigate to `src/content/[page]/en/`
2. 🔍 Find the content file (e.g., `content.json`)
3. ✏️ Edit text values only
4. 💾 Save - changes appear instantly!

### 🎯 Replace Placeholder Content:

1. 📖 **Read `CONTENT-REPLACEMENT-GUIDE.md` first!**
2. 🔍 Look for text in `[BRACKETS]` - these need to be replaced
3. ✏️ Replace with your real client names, projects, and results
4. 💾 Save - professional content ready!

### 👥 Update Team Data:

1. 📂 Navigate to `src/content/team/en/`
2. ✏️ Edit `data.json` for team profiles
3. 📂 For testimonials, go to `src/content/common/en/data.json`
4. 💼 For careers, edit `src/content/careers/en/data.json`

### 📖 Update Case Studies:

1. 📂 Navigate to `src/content/projects/en/case-studies/`
2. ✏️ Edit existing `.md` files (medconnect.md, finflow.md, etc.)
3. 📄 Create new `[project-slug].md` files (use same naming as project IDs)
4. 🖼️ Add hero images to `/public/images/projects/`
5. 📊 Update `src/content/projects/en/data.json` for project portfolio
6. ✅ Ensure project IDs in data.json match case study file names

## 📋 Content Types

### 📄 Page Content Files

| Location                   | Content                         | Icon |
| -------------------------- | ------------------------------- | ---- |
| `home/en/content.json`     | 🏠 Hero, services, process, CTA | 🏠   |
| `services/en/content.json` | ⚙️ Services, pricing, features  | ⚙️   |
| `projects/en/content.json` | 💼 Portfolio, filters, stats    | 💼   |
| `team/en/content.json`     | 👥 Team info, values, benefits  | 👥   |
| `careers/en/content.json`  | 💼 Jobs, application process    | 💼   |
| `common/en/contact.json`   | 📞 Contact form, FAQ, hours     | 📞   |
| `common/en/content.json`   | 🔗 Nav, buttons, forms, footer  | 🌐   |

### 📊 Structured Data Files

| Location                | Content                        | Updates               |
| ----------------------- | ------------------------------ | --------------------- |
| `team/en/data.json`     | 👨‍💼 Full team profiles          | Add/edit team members |
| `common/en/data.json`   | ⭐ Common data & testimonials  | Add/edit shared data  |
| `careers/en/data.json`  | 💼 Job descriptions & benefits | Add/edit job postings |
| `projects/en/data.json` | 🚀 Project portfolio           | Add/edit project data |

### 📖 Markdown Content

| Type         | Location               | Purpose                    |
| ------------ | ---------------------- | -------------------------- |
| Legal docs   | `legal/en/*.md`        | ⚖️ Privacy, terms, cookies |
| Case studies | `case-studies/en/*.md` | 📈 Project details         |

## 🔒 Editing Rules

### ✅ **Safe to Edit**

- ✏️ Text values in quotes
- 📝 Descriptions & titles
- 🏷️ Button labels
- 📋 Array list items

### ❌ **Never Change**

- 🔑 Property keys (before `:`)
- 🏗️ File structure
- 📍 Placeholders `{count}`, `{min}`

### 💡 **Quick Example**

```json
{
  "hero": {
    "title": "Edit this text ✅",
    "description": "This too ✅"
  }
}
```

## 🌍 **Multi-Language Support**

### 🚀 Add New Language:

1. 📁 Create `src/content/[lang]/` folder
2. 📋 Copy all files from `en/`
3. 🔄 Translate text values only
4. 👨‍💻 Ask dev to update `config.ts`

### 🔧 **Special Features**

- 📍 Dynamic values: `{count}`, `{min}` auto-replaced
- 📊 Pluralization: Text changes based on numbers
- 📋 Arrays: Easy list management

## 🛠️ **Troubleshooting**

| Issue            | Solution                    |
| ---------------- | --------------------------- |
| 📝 Empty text    | Check JSON syntax           |
| 🔄 Not updating  | Save file + refresh browser |
| 💥 Broken layout | Restore original file       |

### 📞 **Support**

- 📝 Content help: Ask team member
- 🔧 Technical: Contact developers
- ✨ New features: Project manager

---

🎯 **Simple & Safe** - When in doubt, make small changes first!

## 📋 **IMPORTANT: Placeholder Content**

⚠️ **The current content uses placeholder examples!**

- Text in `[BRACKETS]` = Replace with real information
- Client names like "Emirates Healthcare Group" = Example placeholders
- All project results and testimonials = Template examples
- Images from Unsplash = Professional placeholders

**Before going live:** Update all bracketed placeholders with your actual project information!

📖 **See `CONTENT-REPLACEMENT-GUIDE.md` for step-by-step instructions.**
