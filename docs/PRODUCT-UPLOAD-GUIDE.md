# Product Upload Guide

## Adding Products to Your Virelo Finds Site

### Method 1: Edit products.json (Recommended)

1. Open `data/products.json` in a text editor
2. Add new product entries following this format:

```json
{
  "product_id": "123456789",
  "title": "Product Short Title",
  "description": "Now $XX.XX (was $XX.XX) — XX% OFF! • Feature 1 • Feature 2",
  "original_description": "Full product description from AliExpress",
  "category": "Category Name",
  "image_url": "https://image-url.jpg",
  "video_url": "",
  "origin_price": 29.99,
  "discount_price": 9.99,
  "discount_percent": 66,
  "currency": "USD",
  "sales_180d": 1500,
  "positive_feedback": 94.5,
  "promotion_url": "https://your-affiliate-link.com",
  "direct_commission_rate": "10%",
  "direct_commission": "$0.99",
  "code_name": "SALE2026",
  "code_value": "20%",
  "code_minimum_spend": "$5.00"
}
```

3. Save the file
4. Upload to GitHub (overwrite existing file)

### Method 2: Using the CSV File

1. Open `data/products.csv` in Excel or Google Sheets
2. Add new rows with product data
3. Save as CSV
4. Convert to JSON using an online converter
5. Replace `products.json`

### Method 3: Bulk Upload Script

For bulk uploads, use this Python script:

```python
import json

# Load existing products
with open('products.json', 'r') as f:
    products = json.load(f)

# Add new products
new_products = [
    {
        "product_id": "NEW_ID_HERE",
        "title": "New Product Title",
        "description": "New description",
        ...
    }
]

products.extend(new_products)

# Save
with open('products.json', 'w') as f:
    json.dump(products, f, indent=2)
```

## Finding Trending Products (2026)

### Top Trending Categories:
- **Tech Gadgets:** Wireless mini printers, 4K AI security cameras, multi-device chargers, ultrasonic cleaners, MagSafe chargers, LED ambient lighting, mini projectors, phone cooling fans, GaN power banks
- **Home & Kitchen:** Oil sprayers, drawer organizers, electric cleaning brushes, faucet extenders, mini food choppers, space-saving gadgets
- **Beauty & Care:** LED facial masks, ice rollers, heatless curlers, blackhead removers, lash lift kits, portable hair tools
- **Fitness:** Resistance bands, massage guns, posture correctors, smart water bottles, yoga accessories, ab trainers
- **Pet Products:** Pet grooming vacuums, interactive toys, automatic feeders, cooling mats, travel carriers
- **Travel:** Compression packing cubes, cable organizers, portable garment steamers, neck pillows, anti-theft backpacks, digital luggage scales

### Where to Find Products:
1. **AliExpress Dropshipping Center:** https://dsc.aliexpress.com/
2. **AliExpress Best Sellers:** Sort by "Orders" and filter 4.5+ stars
3. **Sell The Trend:** AI-powered product research
4. **AutoDS:** Product research and automation
5. **FindNiche / ZIK Analytics:** Third-party analytics tools

## Affiliate Link Setup

### Getting Your AliExpress Affiliate Links:
1. Sign up at **AliExpress Portals** (portals.aliexpress.com)
2. Get your tracking ID
3. Generate affiliate links for each product
4. Paste into `promotion_url` field

### Link Format:
```
https://s.click.aliexpress.com/e/_YOUR_TRACKING_ID
```

## SEO Tips for Product Pages

1. **Use keywords in titles:** "Best [Product] 2026", "Top Rated [Category]"
2. **Add meta descriptions:** Include price and discount info
3. **Use structured data:** Product schema for rich snippets
4. **Optimize images:** Use descriptive alt text
5. **Internal linking:** Link related products together

## Updating Products

### Weekly Tasks:
- [ ] Check for expired promo codes
- [ ] Update prices if changed
- [ ] Remove out-of-stock items
- [ ] Add new trending products
- [ ] Check affiliate link validity

### Monthly Tasks:
- [ ] Review category performance
- [ ] Update top sellers list
- [ ] Refresh product descriptions
- [ ] Add seasonal products
- [ ] Analyze traffic and conversions
