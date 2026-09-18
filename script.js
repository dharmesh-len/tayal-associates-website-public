(() => {
  const driveCatalogues = {
    wall: [
      { title: "Tayal Wall Panel Vol. 1", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal1-product.jpg", fileId: "1BoL3hvQIzz1MuhAQ6EL6opCE3OVWNCAH" },
      { title: "Tayal Wall Panel Vol. 2", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal2-product.jpg", fileId: "1F6mBOvdRtnBm9ot2E6M1yjlzhki2e7NL" },
      { title: "Tayal Wall Panel Vol. 3", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal3-product.jpg", fileId: "1GSowCE4Vb7uGWEjcKX9tmTt0pBrtgecc" },
      { title: "Tayal Wall Panel Vol. 4", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal4-product.jpg", fileId: "179pZCcV0tbuvQHggGPjuwQzURbojLMjR" },
      { title: "Tayal Wall Panel Vol. 5", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal5-product.jpg", fileId: "1uexRxIcBV3TFSzOkus2YnLaAAadjyE9Z" },
      { title: "Tayal Wall Panel Vol. 6", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal6-product.jpg", fileId: "1IUcHyu7sD4xvsg5ENfAvb0_C1wxGI2mZ" },
      { title: "Tayal Wall Panel Vol. 7", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal7-product.jpg", fileId: "1OZ_YMQE38c2U6A-v9HWO-Crv_FmIffEv" },
      { title: "Tayal Wall Panel Vol. 8", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal8-product.jpg", fileId: "1TuNw7oxWBwI2UFGiXDSBu7jObKursLgv" },
      { title: "Tayal Wall Panel Vol. 9", meta: "Ready-to-install wall panel", image: "assets/catalogues/tayal9.jpg", fileId: "1sbRqwe9pzRkYcMFMQivea491Q8vacV_I" }
    ],
    uv: [
      { title: "UV Sheet Vol. 1", meta: "8 ft x 4 ft UV sheet", image: "assets/catalogues/uv1.jpg", fileId: "1oFNDWxsAdYnJcAnapynL9DXqs4No8Aux" },
      { title: "UV Sheet Vol. 2", meta: "8 ft x 4 ft UV sheet", image: "assets/catalogues/uv2-product.jpg", fileId: "1Iu3BdCyBP-Rn_vwfwn4JJdEPhvCi5XhS" },
      { title: "UV Sheet Vol. 3", meta: "8 ft x 4 ft UV sheet", image: "assets/catalogues/uv3-product.jpg", fileId: "18AQkCVaLbn3BrS9Xhj9Yl1x-O4qRIqVN" },
      { title: "UV Sheet Vol. 4", meta: "8 ft x 4 ft UV sheet", image: "assets/catalogues/uv4-product.jpg", fileId: "1nOFyckQncJz55SpOpGt7Rf1_R60Inxba" },
      { title: "UV Marble Sheets Updated", meta: "Marble finish sheets", fileId: "1yld27Zw57WYMpFwzI7PSAE1EO0pVRj2O", cover: "UV marble" },
      { title: "Futureplast Digital Marble Sheets", meta: "Digital marble catalogue", fileId: "1lxRTKW5JpxgQJgRWZZV0KSxGWMXwZciW", cover: "Marble" },
      { title: "Futureplast Superheavy", meta: "Heavy sheet collection", fileId: "1lb0LJiv4E88fNgjULCFKtBGAG2Rij8lh", cover: "Superheavy" }
    ],
    wpcLouvers: [
      { title: "WPC Louvers New", meta: "Latest upload used; duplicate skipped", fileId: "18-3LUncw7-BGslt-P69-UjT7vEmC6T1p", cover: "WPC louvers" },
      { title: "New WPC Minitrack 17mm Louvers", meta: "Latest upload used; duplicate skipped", fileId: "1ODuIvyxpWbw2_Mgj5U3jBre3sXeBrxpl", cover: "17mm louvers" },
      { title: "Fiola 9.5ft Louvers Vol. 1", meta: "Treelam louver catalogue", fileId: "1Ti2kOA-8p6LlEzoIhDGxxSLYIJSeg-oD", cover: "Fiola 01" },
      { title: "Fiola 9.5ft Louvers Vol. 2", meta: "Treelam louver catalogue", fileId: "1haffkNnMqtwZJmscIJ5-WTCxIyErc0v3", cover: "Fiola 02" },
      { title: "14 Steps New UPVC Louver", meta: "UPVC louver catalogue", fileId: "1rlrJyMDwKQhqCkVbKnz6vv6ajudTbmKZ", cover: "UPVC louver" },
      { title: "Futureplast 10 Inches 5G Fluted", meta: "Fluted panel range", fileId: "1U56FaEnPSZlzK_y8jJ7_FfTAB2GOOe0E", cover: "5G fluted" },
      { title: "Futureplast 10 Inches 8G Fluted", meta: "Fluted panel range", fileId: "1rdVj8E9km7nMHX7Eoj8XgsTzE5ApMnrm", cover: "8G fluted" },
      { title: "Futureplast 2G and Glitter Fluted Panels", meta: "12 inch fluted panels", fileId: "1I-f926tHP52mKawXYLaO_vO26ux8Km1n", cover: "Glitter fluted" },
      { title: "Texture Series Fluted Panels", meta: "12 inch texture series", fileId: "1PN-brU_vuM5nHPgxyBBVFTonSy5vWcQg", cover: "Texture series" },
      { title: "Futureplast Ceiling Panels", meta: "Ceiling panel catalogue", fileId: "1uWB6-eICv2sKcAovkf80lg9_Lf4EvfER", cover: "Ceiling panels" }
    ],
    treelam: [
      { title: "Project X 2025 Treelam", meta: "Project surface catalogue", fileId: "1LorF7ZRNzQPBMcdKN09RUxA2_JHrX_7R", cover: "Project X 2025" },
      { title: "Project X by Treelam 2026", meta: "Project surface catalogue", fileId: "1RQUQtDWVi_1vYC1bufSuPld2GTFLGGx3", cover: "Project X 2026" },
      { title: "Project X", meta: "Project surface catalogue", fileId: "1wCCX7GdTjiOwf55yDNGH4Q9sbAS5SUdu", cover: "Project X" },
      { title: "Class 18 Treelam", meta: "Treelam collection", fileId: "1BeTWrRR8wQYJBxV_TVBn1pnl-SYlpCMO", cover: "Class 18" },
      { title: "Class 20 Treelam", meta: "Treelam collection", fileId: "1JRQ1oMUn4niHTT-8CQa2vIRcxa8aUbYo", cover: "Class 20" },
      { title: "Fleek LITE Vol. 2 9.5ft Treelam", meta: "Treelam collection", fileId: "1Sn1hVk3hHH7E___K6GuZ65jFG8g-s6Zd", cover: "Fleek LITE" },
      { title: "Wallon Vol. 2 Treelam", meta: "Wall panel catalogue", fileId: "1Q6h_FLMWdTSgLtgbhvrvfYEpEHzMfZ6w", cover: "Wallon 02" },
      { title: "HDPC Wall Panel Treelam", meta: "HDPC wall panel catalogue", fileId: "1Vz8rZOLD4AgP6NZ9AXO_4mzzl7x0ayTS", cover: "HDPC wall" },
      { title: "HDPC Solid Panels by Treelam 2026", meta: "HDPC solid panel catalogue", fileId: "1jUj2SnwZlb_k-I9GrLLbCRWsGlZkmqPP", cover: "HDPC solid" },
      { title: "HDPC Wooden", meta: "Wood finish panel catalogue", fileId: "1ZKbJhuPVQPgw-4YD4xb2XzBZ2RM2grjG", cover: "HDPC wooden" },
      { title: "The Wood Project Edition Two by LAMIQ", meta: "Wood finish catalogue", fileId: "1yeB6z1XKS7ybp0HBCQrL1ljITKTfhI_C", cover: "Wood project" }
    ],
    acpExterior: [
      { title: "ACP Catalogue Vol. 4", meta: "ACP sheet catalogue", fileId: "1kW0Vw3M7lx_GVKOCnaUCSCOTKfH0y1BJ", cover: "ACP 04" },
      { title: "Final Alutech ShadeCard 2026", meta: "Shade card catalogue", fileId: "1IgVREihbRRZjMBJ2VCxvW6Sj_6eFhjkq", cover: "Alutech 2026" },
      { title: "Aludecor Timber 2024 E-catalogue", meta: "Timber ACP catalogue", fileId: "16uoOWm3ltPI_CwSLB4CAmWooE_v1X0EY", cover: "Timber" },
      { title: "Aludecor Wabi Sabi E-catalogue", meta: "Aludecor surface catalogue", fileId: "1hY1OG8L5I49NYRHwLPJZrxrWBa_9BYRk", cover: "Wabi Sabi" },
      { title: "Aludecor MSC Special", meta: "Metal shade collection", fileId: "1zm-uoxnzb9wvJbVG_FbOkQZsYyt2Vv6g", cover: "MSC special" },
      { title: "Aludecor Rugged Metal", meta: "Metal finish catalogue", fileId: "1Dq78ip0Ozc1BSUK0VHwSqB9ei6rFErV_", cover: "Rugged metal" },
      { title: "MSC Regular Compressed", meta: "Metal shade catalogue", fileId: "1QKcz3NWyvO89TgqnBlW0IMCKDvTgf2on", cover: "MSC regular" },
      { title: "Earthcoat 2025", meta: "Exterior surface catalogue", fileId: "12aOjTUbEkBrNazPnP0Vsff2_nbVpyech", cover: "Earthcoat" },
      { title: "Sand Rustic E-catalogue", meta: "Rustic surface catalogue", fileId: "1BqgPMfKmdF877t9Fid94iGwfwv47nQyM", cover: "Sand rustic" },
      { title: "Zincho Eversion", meta: "Exterior finish catalogue", fileId: "1yLIzN56YfMW3Z-5tY3adCKeIsWCyGO1P", cover: "Zincho" }
    ],
    tayalWoto: [
      { title: "Tayal Associates Traders ATOM Catalog", meta: "Official Tayal Associates volume", fileId: "19YpZ1HiDyrwPCIrhiazI6iYeOMGPcNwX", cover: "ATOM" },
      { title: "Tayal Associates Traders WOTO Catalog", meta: "Official Tayal Associates volume", fileId: "1XPcXmWOcTUIpk7CfzKs0EbYVF8VBeIhs", cover: "WOTO" },
      { title: "Tayal Associates Traders WOTO Vol. 2 Catalog", meta: "Official Tayal Associates volume", fileId: "1ZH9UvXcY0D0st9JcbJJwGHwQJAfXHl7Y", cover: "WOTO 02" }
    ],
    office: [
      { title: "Tayal Associates Office Portfolio", meta: "Office photographs and showroom reference", fileId: "1bBeAmBaACNxdBUENPIylyMel47g-_g6N", cover: "Office" }
    ],
    priceOther: [
      { title: "Cost Vol. 1", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost1.jpg", fileId: "1yXAdUPaYWTYcUJSNYCCgX9U_ugfAVC3p" },
      { title: "Cost Vol. 2", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost2.jpg", fileId: "1qD37cg-zVmG-BI4aVgCO92MrYrSP1d_S" },
      { title: "Cost Vol. 3", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost3.jpg", fileId: "1rPWUow0BOO7rmgp6iJuHVwVutosE3hbE" },
      { title: "Cost Vol. 4", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost4.jpg", fileId: "1BHvAKW8jWLUt9gazDlUCgt7QH47MJBPS" },
      { title: "Cost Vol. 5", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost5.jpg", fileId: "1FVpQaYkuW7434LZjLhcjtLiHOsiLltRQ" },
      { title: "Other Collection Vol. 1", meta: "Additional catalogue volume", image: "assets/catalogues/other1.jpg", fileId: "1nNqO6WspWiooF04mvNrHVSE4k6xt2vci" },
      { title: "Other Collection Vol. 2", meta: "Additional catalogue volume", image: "assets/catalogues/other2.jpg", fileId: "1tixfwKGUXr2P6mWq8I2USbHu0o_Ni9Fy" },
      { title: "Luxury Collection Vol. 1", meta: "Premium catalogue volume", fileId: "1sNCnMXDUeCbXLvPWKEGVmkubCCdFUQ_O", cover: "Luxury 01" }
    ]
  };

  const renderDriveCatalogues = (targetSelector, items) => {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      const card = document.createElement("a");
      card.className = `drive-card${item.image ? "" : " drive-card--plain"}`;
      card.href = `https://drive.google.com/file/d/${item.fileId}/view`;
      card.target = "_blank";
      card.rel = "noreferrer";
      card.setAttribute("aria-label", `Open ${item.title} in Google Drive`);
      const number = String(index + 1).padStart(2, "0");
      const visual = item.image
        ? `<img src="${item.image}" alt="${item.title} cover" loading="lazy" decoding="async"><span class="drive-card__volume">${number}</span>`
        : `<div class="drive-card__placeholder"><span>PDF</span><strong>${item.cover || item.title}</strong></div><span class="drive-card__volume">${number}</span>`;
      card.innerHTML = `<div class="drive-card__visual">${visual}</div><div class="drive-card__body"><strong>${item.title}</strong><small>${item.meta}</small><span>Open on Drive <i aria-hidden="true">↗</i></span></div>`;
      fragment.append(card);
    });
    target.append(fragment);
  };

  renderDriveCatalogues("#wall-panel-catalogues", driveCatalogues.wall);
  renderDriveCatalogues("#uv-catalogues", driveCatalogues.uv);
  renderDriveCatalogues("#wpc-louvers-catalogues", driveCatalogues.wpcLouvers);
  renderDriveCatalogues("#treelam-catalogues", driveCatalogues.treelam);
  renderDriveCatalogues("#acp-exterior-catalogues", driveCatalogues.acpExterior);
  renderDriveCatalogues("#tayal-woto-catalogues", driveCatalogues.tayalWoto);
  renderDriveCatalogues("#office-catalogues", driveCatalogues.office);
  renderDriveCatalogues("#price-other-catalogues", driveCatalogues.priceOther);

  const videoTarget = document.querySelector("#catalogue-video");
  if (videoTarget) {
    videoTarget.innerHTML = `<article class="catalogue-video-card"><div class="catalogue-video-card__media"><video controls preload="metadata" playsinline aria-label="Tayal Associates product video"><source src="https://drive.google.com/uc?export=download&id=1PSS9OnjXxhtBPzalybqHJU3cq89yv224" type="video/mp4">Your browser cannot play this video.</video></div><div class="catalogue-video-card__body"><div><span>Video 01</span><h4>Product finish showcase</h4></div><a class="text-link" href="https://drive.google.com/file/d/1PSS9OnjXxhtBPzalybqHJU3cq89yv224/view" target="_blank" rel="noreferrer">Open original on Drive <span aria-hidden="true">↗</span></a></div></article>`;
  }

  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  };
  menuButton?.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  const desktopMenuQuery = window.matchMedia("(min-width: 1021px)");
  desktopMenuQuery.addEventListener?.("change", (event) => {
    if (event.matches) setMenu(false);
  });

  const mobileCta = document.querySelector(".mobile-cta");
  const hero = document.querySelector(".hero");
  const setMobileCta = (visible) => {
    if (!mobileCta) return;
    mobileCta.classList.toggle("is-visible", visible);
    mobileCta.setAttribute("aria-hidden", String(!visible));
  };
  if (hero && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(([entry]) => setMobileCta(!entry.isIntersecting), { threshold: 0.08 });
    heroObserver.observe(hero);
  }

  const quantityForm = document.querySelector("#quantity-form");
  const wastageInput = document.querySelector("#wastage");
  const wastageOutput = document.querySelector("#wastage-output");
  const unitToMeters = { m: 1, ft: 0.3048, in: 0.0254, cm: 0.01, mm: 0.001 };
  const unitLabels = { m: "m", ft: "ft", in: "in", cm: "cm", mm: "mm" };
  const updateUnitLabels = () => {
    const surfaceUnit = document.querySelector("#surface-unit")?.value || "ft";
    const productUnit = document.querySelector("#product-unit")?.value || "mm";
    document.querySelectorAll("[data-surface-unit-label]").forEach((label) => { label.textContent = unitLabels[surfaceUnit]; });
    document.querySelectorAll("[data-product-unit-label]").forEach((label) => { label.textContent = unitLabels[productUnit]; });
  };
  document.querySelector("#surface-unit")?.addEventListener("change", updateUnitLabels);
  document.querySelector("#product-unit")?.addEventListener("change", updateUnitLabels);
  updateUnitLabels();
  wastageInput?.addEventListener("input", () => {
    wastageOutput.value = `${wastageInput.value}%`;
    wastageOutput.textContent = `${wastageInput.value}%`;
  });
  quantityForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const surfaceWidth = Number(document.querySelector("#surface-width").value);
    const surfaceHeight = Number(document.querySelector("#surface-height").value);
    const productWidth = Number(document.querySelector("#product-width").value);
    const productHeight = Number(document.querySelector("#product-height").value);
    const surfaceUnit = document.querySelector("#surface-unit")?.value || "ft";
    const productUnit = document.querySelector("#product-unit")?.value || "mm";
    const wastage = Number(wastageInput.value);
    if (![surfaceWidth, surfaceHeight, productWidth, productHeight].every((value) => Number.isFinite(value) && value > 0)) return;
    const surfaceAreaM2 = surfaceWidth * unitToMeters[surfaceUnit] * surfaceHeight * unitToMeters[surfaceUnit];
    const productAreaM2 = productWidth * unitToMeters[productUnit] * productHeight * unitToMeters[productUnit];
    const pieces = Math.ceil(Math.ceil(surfaceAreaM2 / productAreaM2) * (1 + wastage / 100));
    const surfaceAreaSqFt = surfaceAreaM2 / (unitToMeters.ft * unitToMeters.ft);
    document.querySelector("#pieces-result").textContent = String(pieces);
    document.querySelector("#area-result").textContent = `${surfaceAreaM2.toFixed(2)} m² (${surfaceAreaSqFt.toFixed(1)} sq ft) · ${wastage}% allowance included`;
    const result = document.querySelector("#calculator-result");
    result.hidden = false;
    result.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  });

  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  const revealItems = [...document.querySelectorAll(".reveal")];
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px" });
    revealItems.forEach((item) => observer.observe(item));
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
})();
