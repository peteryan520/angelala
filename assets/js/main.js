document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-brand]").forEach(el => {
    el.textContent = BRAND.name;
  });

  renderProducts("[data-products]", PRODUCTS);
  renderProducts("[data-new]", PRODUCTS.slice(0, 4));
  renderProducts("[data-hot]", PRODUCTS.slice(2, 6));
  renderProducts("[data-stock]", PRODUCTS.filter(p => p.status === "現貨").slice(0, 4));

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "p001";
  const p = PRODUCTS.find(x => x.id === id);
  const detail = document.querySelector("[data-product-detail]");

  if (!detail || !p) return;

  const images = p.images && p.images.length ? p.images : ["assets/img/angelala-logo.png"];
  const thumbs = images
    .map(
      (src, index) => `
        <button class="thumb${index === 0 ? " is-active" : ""}" type="button" data-thumb="${index}" aria-label="切換商品圖片 ${index + 1}">
          <img src="${src}" alt="${p.name} 圖片 ${index + 1}">
        </button>`
    )
    .join("");

  detail.innerHTML = `
    <div class="galleryShell">
      <div class="galleryMain">
        <button class="galleryNav prev" type="button" aria-label="上一張">‹</button>
        <img class="galleryImage" src="${images[0]}" alt="${p.name}">
        <button class="galleryNav next" type="button" aria-label="下一張">›</button>
        <div class="galleryCount"><span data-gallery-index>1</span>/<span data-gallery-total>${images.length}</span></div>
      </div>
      <div class="thumbRow">${thumbs}</div>
    </div>
    <div class="details productInfo">
      <div class="eyebrow">${p.category}｜${p.status}</div>
      <h1>${p.name}</h1>
      <div class="price" style="font-size:26px">${p.price}</div>
      <p style="color:var(--muted);line-height:1.9">${p.desc}</p>
      <div class="infoGrid">
        <div class="infoBox"><b>顏色</b><br>${p.colors.join(" / ")}</div>
        <div class="infoBox"><b>尺寸</b><br>${p.sizes.join(" / ")}</div>
        <div class="infoBox"><b>週次</b><br>${p.week}</div>
        <div class="infoBox"><b>狀態</b><br>${p.status}</div>
      </div>
      <a class="btn primary" style="width:100%;font-size:17px" target="_blank" rel="noopener" href="${p.myshipUrl}">前往 7-ELEVEN 賣貨便下單</a>
      <p class="note">實際交易、付款與配送流程由賣貨便平台完成。</p>
    </div>
  `;

  const galleryImage = detail.querySelector(".galleryImage");
  const indexEl = detail.querySelector("[data-gallery-index]");
  const thumbButtons = [...detail.querySelectorAll("[data-thumb]")];
  let current = 0;

  const sync = () => {
    galleryImage.src = images[current];
    indexEl.textContent = String(current + 1);
    thumbButtons.forEach((btn, i) => btn.classList.toggle("is-active", i === current));
  };

  detail.querySelector(".galleryNav.prev").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    sync();
  });

  detail.querySelector(".galleryNav.next").addEventListener("click", () => {
    current = (current + 1) % images.length;
    sync();
  });

  thumbButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      current = Number(btn.getAttribute("data-thumb"));
      sync();
    });
  });
});
