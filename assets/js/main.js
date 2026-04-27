document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-brand]").forEach((el) => {
    el.textContent = BRAND.name;
  });

  renderProducts("[data-products]", PRODUCTS);
  renderProducts("[data-new]", PRODUCTS.slice(0, 4));
  renderProducts("[data-hot]", PRODUCTS.slice(2, 6));
  renderProducts("[data-stock]", PRODUCTS.filter((p) => p.status === "現貨").slice(0, 4));
  renderProductDetail();
});

function renderProductDetail() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const product = PRODUCTS.find((item) => item.id === id) || PRODUCTS[0];
  const images = product.images && product.images.length
    ? product.images
    : ["assets/img/angelala-logo.png"];

  detail.innerHTML = `
    <div class="galleryShell">
      <div class="galleryMain">
        <button class="galleryNav prev" type="button" aria-label="上一張">‹</button>
        <img class="galleryImage" src="${images[0]}" alt="${product.name}">
        <button class="galleryNav next" type="button" aria-label="下一張">›</button>
        <div class="galleryCount"><span data-gallery-index>1</span>/<span>${images.length}</span></div>
      </div>
      <div class="thumbRow">
        ${images.map((src, index) => `
          <button class="thumb${index === 0 ? " is-active" : ""}" type="button" data-thumb="${index}" aria-label="切換到第 ${index + 1} 張商品照片">
            <img src="${src}" alt="${product.name} 圖片 ${index + 1}">
          </button>
        `).join("")}
      </div>
    </div>

    <article class="details productInfo">
      <div class="eyebrow">${product.category} / ${product.status}</div>
      <h1>${product.name}</h1>
      <div class="price detailPrice">${product.price}</div>
      <p class="detailDesc">${product.desc}</p>
      <div class="infoGrid">
        <div class="infoBox"><b>顏色</b><span>${product.colors.join(" / ")}</span></div>
        <div class="infoBox"><b>尺寸</b><span>${product.sizes.join(" / ")}</span></div>
        <div class="infoBox"><b>上架週次</b><span>${product.week}</span></div>
        <div class="infoBox"><b>商品狀態</b><span>${product.status}</span></div>
      </div>
      <a class="btn primary detailBuy" target="_blank" rel="noopener" href="${product.myshipUrl}">前往 7-ELEVEN 賣貨便下單</a>
      <p class="note">實際交易、付款與配送流程由賣貨便平台完成。庫存與出貨狀態請以賣貨便頁面為準。</p>
    </article>
  `;

  const galleryImage = detail.querySelector(".galleryImage");
  const indexEl = detail.querySelector("[data-gallery-index]");
  const thumbs = [...detail.querySelectorAll("[data-thumb]")];
  let current = 0;

  const setImage = (nextIndex) => {
    current = (nextIndex + images.length) % images.length;
    galleryImage.src = images[current];
    indexEl.textContent = String(current + 1);
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle("is-active", index === current);
    });
  };

  detail.querySelector(".galleryNav.prev").addEventListener("click", () => setImage(current - 1));
  detail.querySelector(".galleryNav.next").addEventListener("click", () => setImage(current + 1));
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => setImage(Number(thumb.dataset.thumb)));
  });
}
