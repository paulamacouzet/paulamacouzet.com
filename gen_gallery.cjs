const fs = require('fs');

const files = [
"Gallery1.png",
"Gallery2.png",
"Gallery3.png",
"Gallery4.png",
"Gallery5.png",
"Gallery_Culinary Narratives Custom Buffet Signage.png",
"Gallery_Custom Hand-Painted Wine Bottles_1.png",
"Gallery_Custom Hand-Painted Wine Bottles_2.png",
"Gallery_Custom wedding  Stickers.png",
"Gallery_Custom wedding  Stickers2.png",
"Gallery_CustomStationeryWeddings.png",
"Gallery_Custom_tablenumbers_wedding1.png",
"Gallery_Custom_tablenumbers_wedding2.png",
"Gallery_Custom_tablenumbers_wedding3.png",
"Gallery_Hand-Painted Signage (2).png",
"Gallery_Hand-Painted Signage.png",
"Gallery_Handpainted_dancefloor_weddings_cabo1.png",
"Gallery_Handpainted_dancefloor_weddings_cabo2.png",
"Gallery_Handpainted_dancefloor_weddings_cabo3.png",
"Gallery_Live Watercolor Guest Portraits.png",
"Gallery_Live Watercolor Guest Portraits2.png",
"Gallery_Meaningful Details Weddings_The Stories Before Us1.png",
"Gallery_Meaningful Details Weddings_The Stories Before Us2.png",
"Gallery_Misal_boda_Iglesia_personalizado.png",
"Gallery_Place Cards & Seating Arrangements_1.png",
"Gallery_Place Cards & Seating Arrangements_2.png",
"Gallery_Place Cards & Seating Arrangements_3.png",
"Gallery_Tequila_handpainted_bottle.png",
"Gallery_Tequila_handpainted_bottle_Patron.png",
"Gallery_Welcome Signs_Favors_Stationery.png"
];

let itemsHtml = '';
files.forEach(file => {
  let title = file.replace(/^Gallery_?/, '').replace(/\.png$/, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  if (title.match(/^\d+$/)) title = "Gallery Image " + title;
  itemsHtml += `
          <div class="gallery-item">
            <div class="img-wrapper">
              <img src="/images/${file}" alt="${title}" loading="lazy">
            </div>
            <div class="gallery-caption">${title}</div>
          </div>`;
});

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/images/Logo_weddings.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gallery - Wedding Identity - Paula Macouzet</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body>
    <!-- Desktop Content -->
    <div id="desktop-content">
      <header class="main-header">
        <div class="nav-left">
          <a href="/" class="brand-link">
            <img src="/images/logo_paulamacouzet.png" alt="Paula Macouzet" class="brand-logo">
          </a>
        </div>
        <div class="nav-center">
          <a href="/weddings/" class="center-logo-link">
            <img src="/images/Logo_weddings.png" alt="Wedding Identity Logo" class="center-logo">
          </a>
        </div>
        <div class="nav-right">
          <nav class="nav-links">
            <a href="/weddings/#experience">experience</a>
            <a href="/weddings/gallery/">gallery</a>
            <a href="/weddings/inquire/">inquire</a>
          </nav>
        </div>
      </header>
      
      <main class="gallery-page">
        <div class="gallery-header">
          <h1>Gallery</h1>
          <a href="#view-all" class="view-all-link">View all works &rarr;</a>
        </div>
        
        <div class="gallery-carousel-wrapper">
          <button class="carousel-btn prev-btn">&larr;</button>
          <div class="gallery-carousel" id="gallery-carousel">
${itemsHtml}
          </div>
          <button class="carousel-btn next-btn">&rarr;</button>
        </div>
      </main>

      <footer class="main-footer">
        <div class="footer-content">
          <a href="/">
            <img src="/images/logo_paulamacouzet.png" alt="Paula Macouzet" class="footer-logo">
          </a>
          <p class="footer-text">A visual identity for a wedding that could only be yours.</p>
          <p class="copyright">&copy; 2026 Paula Macouzet. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
    <script>
      const carousel = document.getElementById('gallery-carousel');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      
      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -600, behavior: 'smooth' });
      });
      
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 600, behavior: 'smooth' });
      });
    </script>
  </body>
</html>
`;

fs.writeFileSync('weddings/gallery/index.html', html);
console.log("Gallery updated.");
