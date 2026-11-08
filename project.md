# Bootstrap Color Guide

This project maps the custom palette to Bootstrap theme variables, so the standard Bootstrap classes can be used throughout the app while keeping the brand colors consistent.

## Palette mapping

| Name | Hex | RGB | Bootstrap semantic use |
|---|---:|---:|---|
| Warm Ochre Gold | `#C58536` | `rgb(197, 133, 54)` | `primary` |
| Warm Taupe | `#A38375` | `rgb(163, 131, 117)` | `secondary` |
| Deep Forest Green | `#143F35` | `rgb(20, 63, 53)` | `success` |
| Olive Sage | `#8B9B90` | `rgb(139, 155, 144)` | `info` |
| Warm Off-White Cream | `#F4F1EA` | `rgb(244, 241, 234)` | `light` |
| Espresso Charcoal | `#2B2523` | `rgb(43, 37, 35)` | `dark` |
| Pure White | `#FFFFFF` | `rgb(255, 255, 255)` | base / utilities |
| Light Soft Beige | `#F9F8F6` | `rgb(249, 248, 246)` | background / surfaces |
| Warm Coral / Marmalade 2 | `#E8634B` | `rgb(232, 99, 75)` | `primary` |
| Dark Slate Blue 2 | `#426388` | `rgb(66, 99, 136)` | custom utility |
| Muted Dusty Blue 2 | `#99B3CE` | `rgb(153, 179, 206)` | custom utility |
| Soft Cream Off-White 2 | `#FBF9F7` | `rgb(251, 249, 247)` | custom utility |
| Warm Sand / Light Tan 2 | `#E2D5C3` | `rgb(226, 213, 195)` | custom utility |
| Dark Slate Charcoal 2 | `#293241` | `rgb(41, 50, 65)` | custom utility |
| Surface Pure White 2 | `#FFFFFF` | `rgb(255, 255, 255)` | custom utility |

Alternate provided values are available with an `-alt` suffix: `coral-2-alt` (`#EE6C4D`), `dark-blue-2-alt` (`#3D5A80`), `dusty-blue-2-alt` (`#98C1D9`), and `dark-charcoal-2-alt` (`#1E293B`).

## Bootstrap-ready classes

These colors are available as both semantic Bootstrap variables and custom utility classes.

### Standard Bootstrap classes that now work with the palette

- `btn-primary`
- `btn-outline-primary`
- `btn-secondary`
- `bg-primary`
- `text-primary`
- `border-primary`
- `bg-success`
- `text-success`
- `bg-info`
- `text-info`
- `bg-light`
- `text-dark`
- `bg-dark`
- `text-white`

### Custom utility classes

- `bg-warm-ochre-gold`
- `bg-warm-taupe`
- `bg-deep-forest-green`
- `bg-olive-sage`
- `bg-warm-off-white-cream`
- `bg-light-soft-beige`
- `bg-espresso-charcoal`
- `bg-pure-white`
- `bg-coral-2`
- `bg-coral-2-alt`
- `bg-dark-blue-2`
- `bg-dark-blue-2-alt`
- `bg-dusty-blue-2`
- `bg-dusty-blue-2-alt`
- `bg-cream-2`
- `bg-sand-2`
- `bg-dark-charcoal-2`
- `bg-dark-charcoal-2-alt`
- `bg-white-2`

- `text-warm-ochre-gold`
- `text-warm-taupe`
- `text-deep-forest-green`
- `text-olive-sage`
- `text-warm-off-white-cream`
- `text-light-soft-beige`
- `text-espresso-charcoal`
- `text-pure-white`
- `text-coral-2`
- `text-coral-2-alt`
- `text-dark-blue-2`
- `text-dark-blue-2-alt`
- `text-dusty-blue-2`
- `text-dusty-blue-2-alt`
- `text-cream-2`
- `text-sand-2`
- `text-dark-charcoal-2`
- `text-dark-charcoal-2-alt`
- `text-white-2`

- `border-warm-ochre-gold`
- `border-warm-taupe`
- `border-deep-forest-green`
- `border-olive-sage`
- `border-warm-off-white-cream`
- `border-light-soft-beige`
- `border-espresso-charcoal`
- `border-pure-white`
- `border-coral-2`
- `border-coral-2-alt`
- `border-dark-blue-2`
- `border-dark-blue-2-alt`
- `border-dusty-blue-2`
- `border-dusty-blue-2-alt`
- `border-cream-2`
- `border-sand-2`
- `border-dark-charcoal-2`
- `border-dark-charcoal-2-alt`
- `border-white-2`

## Usage examples

### Buttons

```tsx
<button className="btn btn-primary">SCHEDULE NOW</button>
<button className="btn btn-outline-primary">Learn More</button>
<button className="btn btn-secondary">View Pricing</button>
```

`btn-primary` and `btn-outline-primary` use Warm Coral / Marmalade 2 (`#E8634B`).

### Backgrounds and cards

```tsx
<div className="bg-warm-off-white-cream p-4 rounded">
  Hero card content
</div>

<div className="bg-deep-forest-green text-white p-4 rounded">
  Banner section
</div>

<div className="bg-dark-blue-2 text-white p-4 rounded">
  Footer or hero background
</div>
```

### Text and borders

```tsx
<h2 className="text-espresso-charcoal">Primary heading</h2>
<p className="text-deep-forest-green">Descriptive text</p>
<div className="border border-primary p-3">Border with brand color</div>
```

### Bootstrap components

```tsx
<div className="alert alert-primary">Primary alert</div>
<span className="badge bg-success">Success badge</span>
<div className="card bg-light text-dark">
  <div className="card-body">Content</div>
</div>
```

## Notes

The theme is defined in `src/styles/bootstrap-theme.scss`. Bootstrap semantic variables and generated color, background, and border utilities are mapped to the palette so brand colors can be reused without custom CSS for common components.
