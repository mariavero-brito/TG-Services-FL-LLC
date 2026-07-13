# TG Services FL — Style Guide

## Font

**Primary font:** Poppins (weights 400, 500, 600)

| Element | Weight | Size |
|---|---|---|
| Main hero heading | 600 | 52–64px |
| Page headings | 600 | 36–44px |
| Section headings | 600 | 24–30px |
| Card titles | 500–600 | 16–18px |
| Navigation | 500 | 13–14px |
| Body text | 400 | 15–16px |
| Small labels and captions | 500 | 11–13px |
| Buttons | 600 | 12–14px |

## Main Colors

| Purpose | Color | Hex |
|---|---|---|
| Primary dark green | Deep forest green | `#244D3A` |
| Primary button green | Medium botanical green | `#4F8565` |
| Button hover | Darker botanical green | `#3D6F53` |
| Secondary green | Muted sage green | `#7FA387` |
| Illustration green | Leaf green | `#6F9664` |
| Light sage background | Pale sage | `#E7EFE5` |
| Very light green section | Soft mint white | `#F3F7F1` |
| Page background | Warm off-white | `#FAFBF7` |
| Card background | White | `#FFFFFF` |
| Main text | Dark green-black | `#234334` |
| Body text | Muted charcoal | `#56645C` |
| Secondary text | Soft gray-green | `#7B8981` |
| Borders | Light gray-green | `#DDE6DD` |
| Input background | Very light gray | `#FAFCF9` |

## Background Gradient

Pale green background surrounding page mockups:
- Top-left: `#DFE9DD`
- Center: `#EEF3EA`
- Bottom-right: `#D3E1D0`

Large curved decorative shapes inside page headers:
- Main pale curve: `#E5EEE1`
- Lighter overlapping curve: `#F1F5ED`
- Slightly darker accent curve: `#D7E5D3`

## Navigation

- Background: `#FAFBF7` or `#FFFFFF`
- Logo and brand name: `#244D3A`
- Navigation links: `#345443`
- Active link underline: `#4F8565`
- Navigation button background: `#4F8565`
- Navigation button text: `#FFFFFF`

## Hero Section

- Background: `#FAFBF7`
- Large curved background shape: `#E5EEE1`
- Main heading: `#244D3A`
- Supporting paragraph: `#56645C`
- Primary button: `#4F8565`
- Button hover: `#3D6F53`
- Button text: `#FFFFFF`

## Cards

- Card background: `#FFFFFF`
- Card border: `#DDE6DD`
- Card title: `#244D3A`
- Card body text: `#66736B`
- Icon circle background: `#EDF3E9`
- Icon color: `#4F8565`

Shadow: color `#244D3A`, very low opacity (8–12%), soft blur, no strong dark outline.

## Service and Process Icons

- Main icon color: `#4F8565`
- Dark icon details: `#315D46`
- Light circle behind icons: `#EDF3E9`
- Decorative plant greens:
  - Dark leaves: `#416F4C`
  - Medium leaves: `#6F9664`
  - Light leaves: `#A6BC8C`

## Forms

- Form panel: `#FFFFFF`
- Input background: `#FAFCF9`
- Input border: `#DCE5DD`
- Input focus border: `#6C9577`
- Label text: `#345443`
- Placeholder text: `#A1AAA4`
- Submit button: `#4F8565`
- Submit button hover: `#3D6F53`

## Layout Style

- Maximum page width: ~1200–1280px
- Section spacing: 80–110px vertically
- Card corner radius: 10–14px
- Button radius: 24–30px (pill-style buttons)
- Image radius: 8–12px
- Form field radius: 5–7px
- Navigation height: ~72–84px
- Content alignment: wide margins, generous white space, minimal visual clutter

## Core Palette Quick Reference

```
#244D3A
#4F8565
#7FA387
#E7EFE5
#F3F7F1
#FAFBF7
#FFFFFF
#56645C
#DDE6DD
```

## CSS Custom Properties Used in `style.css`

```css
:root {
    /* Color palette */
    --color-primary-dark: #244D3A;
    --color-button: #4F8565;
    --color-button-hover: #3D6F53;
    --color-secondary-green: #7FA387;
    --color-illustration-green: #6F9664;

    /* Backgrounds */
    --color-bg-page: #FAFBF7;
    --color-bg-section-light: #F3F7F1;
    --color-bg-sage: #E7EFE5;
    --color-bg-card: #FFFFFF;
    --color-bg-input: #FAFCF9;

    /* Text */
    --color-text-main: #234334;
    --color-text-body: #56645C;
    --color-text-secondary: #7B8981;
    --color-text-card-body: #66736B;
    --color-text-placeholder: #A1AAA4;

    /* Border & inputs */
    --color-border: #DDE6DD;
    --color-border-input-focus: #6C9577;

    /* Nav */
    --color-nav-link: #345443;

    /* Icons */
    --color-icon-circle-bg: #EDF3E9;
    --color-icon-dark-detail: #315D46;
    --color-leaf-dark: #416F4C;
    --color-leaf-medium: #6F9664;
    --color-leaf-light: #A6BC8C;
}
```
