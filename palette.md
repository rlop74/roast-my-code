# RoastMyCode.live – Official 2025 Color Palette (Clean / No “Cursed” Edition)

Perfect dark-mode palette that feels like GitHub + Linear + Vercel had a chaotic baby.

| Purpose                | Hex       | Tailwind Name      | Tailwind Default Equivalent | Usage Example                                      |
|------------------------|-----------|--------------------|-----------------------------|----------------------------------------------------|
| Background             | `#0A0A0F` | `bg-base`          | —                           | Entire page, layout                                |
| Surface / Cards        | `#111116` | `bg-surface`       | —                           | Code blocks, cards, modals                         |
| Borders / Dim          | `#252530` | `border-dim`       | —                           | Input borders, card borders, dividers              |
| Primary Text           | `#F4F4F8` | `text-primary`     | zinc-100                    | Headlines, usernames, main copy                    |
| Secondary Text         | `#9CA3AF` | `text-secondary`   | zinc-400                    | Timestamps, “2h ago”, metadata                     |
| Upvote / Positive      | `#10B981` | `bg-up` / `text-up`| emerald-500                 | Legendary button, +karma, green numbers            |
| Downvote / Negative    | `#F43F5E` | `bg-down` / `text-down` | rose-500            | Atrocious button, −karma, red numbers              |
| Primary Accent         | `#8B5CF6` | `accent`           | violet-500                  | “Submit Code” button, links, hover states         |
| Gold / Rank #1         | `#FBBF24` | `gold`             | amber-400                   | Crown, Today’s Arsonist highlight                  |
| Live Indicator         | `#EF4444` | `live`             | red-500                     | “LIVE” dot, typing indicator                       |
| Success / Confetti     | `#22D3EE` | `success`          | cyan-400                    | New PB, streak milestones                          |

## Tailwind Config (copy-paste)

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        surface: '#111116',
        'border-dim': '#252530',
        primary: '#F4F4F8',
        secondary: '#9CA3AF',
        up: '#10B981',      // emerald-500
        down: '#F43F5E',    // rose-500
        accent: '#8B5CF6',  // violet-500
        gold: '#FBBF24',    // amber-400
        live: '#EF4444',    // red-500
        success: '#22D3EE', // cyan-400
      },
    },
  },
};
```

# RoastMyCode.live – Light Mode Palette (2025)

Yes, even chaos needs a light mode for the 3 people who use it (and for your professor’s grading screen).

Perfectly paired with the dark mode you already have — same vibe, zero jarring contrast jumps.

| Purpose                | Hex       | Tailwind Name         | Tailwind Default Equivalent | Usage Example                                      |
|------------------------|-----------|-----------------------|-----------------------------|----------------------------------------------------|
| Background             | `#FAFAFA` | `bg-base-light`       | zinc-50                     | Page background                                    |
| Surface / Cards        | `#FFFFFF` | `bg-surface-light`    | white                       | Code blocks, cards, modals                         |
| Borders                | `#E5E7EB` | `border-light`        | gray-200                    | Card borders, inputs                               |
| Primary Text           | `#111112` | `text-primary-light`  | gray-900                    | Headlines, usernames                               |
| Secondary Text         | `#6B7280` | `text-secondary-light`| gray-500                    | Timestamps, metadata                               |
| Upvote / Positive      | `#059669` | `up-light`            | emerald-600                 | Legendary button, +karma                           |
| Downvote / Negative    | `#E11D48` | `down-light`          | rose-600                    | Atrocious button, −karma                           |
| Primary Accent         | `#7C3AED` | `accent-light`        | violet-600                  | Submit button, links                               |
| Gold / Rank #1         | `#D97706` | `gold-light`          | amber-600                   | Crown, Today’s Arsonist                            |
| Live Indicator         | `#DC2626` | `live-light`          | red-600                     | “LIVE” dot                                         |
| Subtle shadow          | `rgba(0,0,0,0.06)` | —                | —                           | Card elevation                                     |

### Full Tailwind config (dark + light in one file)

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' if you want OS preference
  theme: {
    extend: {
      colors: {
        // Dark mode (default)
        base: '#0A0A0F',
        surface: '#111116',
        'border-dim': '#252530',
        primary: '#F4F4F8',
        secondary: '#9CA3AF',

        // Light mode
        'base-light': '#FAFAFA',
        'surface-light': '#FFFFFF',
        'border-light': '#E5E7EB',
        'primary-light': '#111112',
        'secondary-light': '#6B7280',

        // Shared accents (same intensity, just darker in light mode)
        up: { DEFAULT: '#10B981', light: '#059669' },
        down: { DEFAULT: '#F43F5E', light: '#E11D48' },
        accent: { DEFAULT: '#8B5CF6', light: '#7C3AED' },
        gold: { DEFAULT: '#FBBF24', light: '#D97706' },
        live: { DEFAULT: '#EF4444', light: '#DC2626' },
      },
    },
  },
};
```