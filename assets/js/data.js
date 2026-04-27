const PRODUCTS = [
  {
    id: "p001",
    name: "方領澎袖短版上衣",
    category: "上身 Top",
    price: "NT$980",
    status: "現貨",
    week: "0427",
    colors: ["杏色", "黑色", "粉色"],
    sizes: ["S", "M"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "柔軟挺版的方領短上衣，搭配高腰下著能拉長比例。"
  },
  {
    id: "p002",
    name: "高腰直筒長褲",
    category: "下著 Bottom",
    price: "NT$1,280",
    status: "預購",
    week: "0427",
    colors: ["米白", "深灰"],
    sizes: ["S", "M", "L"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "直筒修身版型，適合日常通勤與休閒穿搭。"
  },
  {
    id: "p003",
    name: "細肩帶傘擺洋裝",
    category: "洋裝 Dress",
    price: "NT$1,580",
    status: "現貨",
    week: "0420",
    colors: ["白色", "可可色"],
    sizes: ["F"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "輕盈傘擺設計，單穿或外搭都好看。"
  },
  {
    id: "p004",
    name: "落肩薄外套",
    category: "外套 Outer",
    price: "NT$1,680",
    status: "現貨",
    week: "0420",
    colors: ["卡其", "黑色"],
    sizes: ["F"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "輕薄好攜帶，適合冷氣房與早晚溫差。",
    images: [
      "assets/img/products/p004/01.png",
      "assets/img/products/p004/02.png",
      "assets/img/products/p004/03.png",
      "assets/img/products/p004/04.png",
      "assets/img/products/p004/05.png",
      "assets/img/products/p004/06.png",
      "assets/img/products/p004/07.png"
    ]
  },
  {
    id: "p005",
    name: "交叉細帶 Bra Top",
    category: "內搭 Bra Top",
    price: "NT$680",
    status: "現貨",
    week: "0413",
    colors: ["白色", "黑色", "杏色"],
    sizes: ["F"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "可單穿也可內搭，支撐度與舒適度兼具。"
  },
  {
    id: "p006",
    name: "方頭低跟鞋",
    category: "鞋子 Shoes",
    price: "NT$1,880",
    status: "預購",
    week: "0413",
    colors: ["黑色"],
    sizes: ["36", "37", "38", "39"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "方頭設計穩定好走，日常與約會都實穿。"
  },
  {
    id: "p007",
    name: "珍珠髮夾組",
    category: "配件 Accessories",
    price: "NT$520",
    status: "現貨",
    week: "0406",
    colors: ["珍珠白"],
    sizes: ["F"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "細緻光澤的小配件，能讓整體穿搭更完整。"
  },
  {
    id: "p008",
    name: "抓皺無袖上衣",
    category: "上身 Top",
    price: "NT$1,180",
    status: "現貨",
    week: "0406",
    colors: ["米白", "灰杏"],
    sizes: ["F"],
    myshipUrl: "https://myship.7-11.com.tw/",
    desc: "柔軟親膚，單穿或內搭都合適。"
  }
];

const BRAND = {
  name: "ANGELALA",
  ig: "https://instagram.com/angelala",
  email: "hello@angelala.com",
  line: "#"
};

function card(product) {
  const firstImage = product.images && product.images[0];
  const image = firstImage ? `<img src="${firstImage}" alt="${product.name}">` : "";

  return `
    <article class="card">
      <a href="product.html?id=${product.id}" class="productImg">
        ${image}
        <span>${product.status}</span>
      </a>
      <div class="productBody">
        <h3>${product.name}</h3>
        <div class="price">${product.price}</div>
        <div class="actions">
          <a class="btn ghost" href="product.html?id=${product.id}">查看商品</a>
          <a class="btn primary" target="_blank" rel="noopener" href="${product.myshipUrl}">賣貨便下單</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(selector, items = PRODUCTS) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.map(card).join("");
}
