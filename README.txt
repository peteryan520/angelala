ANGELALA website

Upload to GitHub Pages:
1. Upload the files in this folder as the repository root.
2. Make sure these files and folders are present on GitHub:
   - index.html
   - category.html
   - product.html
   - shopping-info.html
   - faq.html
   - about.html
   - weeks.html
   - 404.html
   - robots.txt
   - sitemap.xml
   - assets/
3. GitHub Pages settings:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root

Important:
- Do not upload only HTML files. The assets folder is required.
- Product data is in assets/js/data.js.
- Product page behavior is in assets/js/main.js.
- Site layout and mobile styles are in assets/css/style.css.

Adding or editing a product:
1. Open assets/js/data.js.
2. Add or edit one item in PRODUCTS.
3. Put the MyShip URL in myshipUrl.
4. Put product photos in assets/img/products/product-id/.
5. Add image paths to the images array.

Example image paths:
assets/img/products/p004/01.png
assets/img/products/p004/02.png
assets/img/products/p004/03.png
