# STARTERCONF Documentation

This document tracks the `!STARTERCONF` comments found in the codebase. These are configuration notes and reminders for customizing the starter template.

## Current STARTERCONF Locations

### 1. Environment Configuration

**File:** `.env.example:1`

```bash
# !STARTERCONF Duplicate this to .env.local
```

**Purpose:** Reminds users to create their local environment file

**File:** `.env.example:5`

```bash
# !STARTERCONF Change to true if you want to log data
NEXT_PUBLIC_SHOW_LOGGER="false"
```

**Purpose:** Explains the logger configuration option

### 2. Styles Configuration

**File:** `src/styles/colors.css:1`

```css
/* //!STARTERCONF Remove this file after copying your desired color, this is a large file you should remove it. */
```

**Purpose:** Instructs users to remove the large color palette file after selecting their preferred colors

### 3. Test Configuration

**File:** `src/__tests__/pages/HomePage.test.tsx:1`

```javascript
// !STARTERCONF You should delete this page
```

**Purpose:** Indicates this is a template test file that should be removed

## Recommended Actions

When customizing this template for production use:

1. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Configure the logger setting based on your needs
   - Remove the STARTERCONF comments after configuration

2. **Color Palette**
   - Review `src/styles/colors.css` and copy your desired color schemes
   - Remove the large colors.css file to reduce bundle size
   - Keep only the colors you actually use in your project

3. **Testing**
   - Remove or replace the template test file `src/__tests__/pages/HomePage.test.tsx`
   - Create your own test cases specific to your application

4. **General Cleanup**
   - Search for all `!STARTERCONF` comments: `grep -r "STARTERCONF" src/`
   - Address each comment and remove it after taking the recommended action

## Git History Note

These STARTERCONF comments appear to be part of the original template structure and were not added in recent commits. They serve as configuration reminders for users adapting the starter template for their specific needs.
