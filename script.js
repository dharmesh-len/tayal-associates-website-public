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
      { title: "UV Marble Sheets Updated", meta: "Marble finish sheets", image: "https://drive.google.com/thumbnail?id=1yld27Zw57WYMpFwzI7PSAE1EO0pVRj2O&sz=w900", fileId: "1yld27Zw57WYMpFwzI7PSAE1EO0pVRj2O" },
      { title: "Futureplast Digital Marble Sheets", meta: "Digital marble catalogue", image: "https://drive.google.com/thumbnail?id=1lxRTKW5JpxgQJgRWZZV0KSxGWMXwZciW&sz=w900", fileId: "1lxRTKW5JpxgQJgRWZZV0KSxGWMXwZciW" },
      { title: "Futureplast Superheavy", meta: "Heavy sheet collection", image: "https://drive.google.com/thumbnail?id=1lb0LJiv4E88fNgjULCFKtBGAG2Rij8lh&sz=w900", fileId: "1lb0LJiv4E88fNgjULCFKtBGAG2Rij8lh" }
    ],
    wpcLouvers: [
      { title: "WPC Louvers New", meta: "Latest upload used; duplicate skipped", image: "https://drive.google.com/thumbnail?id=18-3LUncw7-BGslt-P69-UjT7vEmC6T1p&sz=w900", fileId: "18-3LUncw7-BGslt-P69-UjT7vEmC6T1p" },
      { title: "New WPC Minitrack 17mm Louvers", meta: "Latest upload used; duplicate skipped", image: "https://drive.google.com/thumbnail?id=1ODuIvyxpWbw2_Mgj5U3jBre3sXeBrxpl&sz=w900", fileId: "1ODuIvyxpWbw2_Mgj5U3jBre3sXeBrxpl" },
      { title: "Fiola 9.5ft Louvers Vol. 1", meta: "Treelam louver catalogue", image: "https://drive.google.com/thumbnail?id=1Ti2kOA-8p6LlEzoIhDGxxSLYIJSeg-oD&sz=w900", fileId: "1Ti2kOA-8p6LlEzoIhDGxxSLYIJSeg-oD" },
      { title: "Fiola 9.5ft Louvers Vol. 2", meta: "Treelam louver catalogue", image: "https://drive.google.com/thumbnail?id=1haffkNnMqtwZJmscIJ5-WTCxIyErc0v3&sz=w900", fileId: "1haffkNnMqtwZJmscIJ5-WTCxIyErc0v3" },
      { title: "14 Steps New UPVC Louver", meta: "UPVC louver catalogue", image: "https://drive.google.com/thumbnail?id=1rlrJyMDwKQhqCkVbKnz6vv6ajudTbmKZ&sz=w900", fileId: "1rlrJyMDwKQhqCkVbKnz6vv6ajudTbmKZ" },
      { title: "Futureplast 10 Inches 5G Fluted", meta: "Fluted panel range", image: "https://drive.google.com/thumbnail?id=1U56FaEnPSZlzK_y8jJ7_FfTAB2GOOe0E&sz=w900", fileId: "1U56FaEnPSZlzK_y8jJ7_FfTAB2GOOe0E" },
      { title: "Futureplast 10 Inches 8G Fluted", meta: "Fluted panel range", image: "https://drive.google.com/thumbnail?id=1rdVj8E9km7nMHX7Eoj8XgsTzE5ApMnrm&sz=w900", fileId: "1rdVj8E9km7nMHX7Eoj8XgsTzE5ApMnrm" },
      { title: "Futureplast 2G and Glitter Fluted Panels", meta: "12 inch fluted panels", image: "https://drive.google.com/thumbnail?id=1I-f926tHP52mKawXYLaO_vO26ux8Km1n&sz=w900", fileId: "1I-f926tHP52mKawXYLaO_vO26ux8Km1n" },
      { title: "Texture Series Fluted Panels", meta: "12 inch texture series", image: "https://drive.google.com/thumbnail?id=1PN-brU_vuM5nHPgxyBBVFTonSy5vWcQg&sz=w900", fileId: "1PN-brU_vuM5nHPgxyBBVFTonSy5vWcQg" },
      { title: "Futureplast Ceiling Panels", meta: "Ceiling panel catalogue", image: "https://drive.google.com/thumbnail?id=1uWB6-eICv2sKcAovkf80lg9_Lf4EvfER&sz=w900", fileId: "1uWB6-eICv2sKcAovkf80lg9_Lf4EvfER" },
      { title: "Future D.Plast Catalogue", meta: "Future D.Plast current catalogue", image: "https://drive.google.com/thumbnail?id=1K5Sd_Q305sVh3WEySfluKcoNZSBwjmko&sz=w900", fileId: "1K5Sd_Q305sVh3WEySfluKcoNZSBwjmko" }
    ],
    designerPanels: [
      { title: "Finesse 9 ft Sleek Chiseled Panels", meta: "Designer panel catalogue", image: "https://drive.google.com/thumbnail?id=1foGjEuwwixrD4wINLSqFj9AeHcUb_-i9&sz=w900", fileId: "1foGjEuwwixrD4wINLSqFj9AeHcUb_-i9" },
      { title: "Flow 10 inch PS Parametric Louvers", meta: "Parametric louver catalogue", image: "https://drive.google.com/thumbnail?id=1mcCq19vAJ8FfdfUgLoUeDWIoLL-pradw&sz=w900", fileId: "1mcCq19vAJ8FfdfUgLoUeDWIoLL-pradw" },
      { title: "Stretch 10 inch PS Louvers", meta: "Interior louver catalogue", image: "https://drive.google.com/thumbnail?id=1Ogksb_sY47QzC_vUjlqzPhi7euJPxCyA&sz=w900", fileId: "1Ogksb_sY47QzC_vUjlqzPhi7euJPxCyA" },
      { title: "Ceil Up 9.5 ft Soffit Panel", meta: "Soffit panel catalogue", image: "https://drive.google.com/thumbnail?id=1gOU9ierTTheOzLuoOH7AEec70G8vS1PH&sz=w900", fileId: "1gOU9ierTTheOzLuoOH7AEec70G8vS1PH" },
      { title: "Elewood 12 mm HDF Louvers", meta: "HDF louver catalogue", image: "https://drive.google.com/thumbnail?id=1gAYQUnsIFn77bHCTaVBn1oxZiNbmek-M&sz=w900", fileId: "1gAYQUnsIFn77bHCTaVBn1oxZiNbmek-M" },
      { title: "Profiles 9 ft Back Covered HDF Louvers", meta: "HDF louver catalogue", image: "https://drive.google.com/thumbnail?id=1kpuG5uguvtFrQ0vndUDW8ulBWV0ru2cR&sz=w900", fileId: "1kpuG5uguvtFrQ0vndUDW8ulBWV0ru2cR" },
      { title: "Louvers OG E-Catalogue", meta: "Louver collection catalogue", image: "https://drive.google.com/thumbnail?id=13PMbSpFPwgblBEAGV74CPuXxzSOwJZ1P&sz=w900", fileId: "13PMbSpFPwgblBEAGV74CPuXxzSOwJZ1P" },
      { title: "Apex 9.5 ft Louvers", meta: "New Heights louver catalogue", image: "https://drive.google.com/thumbnail?id=151b4z9zDcoFcyR1ZTd8uvyMGd7GbM8u0&sz=w900", fileId: "151b4z9zDcoFcyR1ZTd8uvyMGd7GbM8u0" },
      { title: "Splash 9.5 ft x 6 inch Louvers", meta: "Coloured louver catalogue", image: "https://drive.google.com/thumbnail?id=1_w6icGi7Wto7Z-ZZvkfJB-wETZCDaEaK&sz=w900", fileId: "1_w6icGi7Wto7Z-ZZvkfJB-wETZCDaEaK" },
      { title: "Adonis 8x2 Designer PS Panels", meta: "Designer PS panel catalogue", image: "https://drive.google.com/thumbnail?id=15YE5E9p12kkypmATwBh1I-Maazi_8i7B&sz=w900", fileId: "15YE5E9p12kkypmATwBh1I-Maazi_8i7B" },
      { title: "Sculpt 1 ft Embossed PS Panels", meta: "Embossed PS panel catalogue", image: "https://drive.google.com/thumbnail?id=1HBnw-rINBO0RiNkNnQmZiCEQMsz23Oqb&sz=w900", fileId: "1HBnw-rINBO0RiNkNnQmZiCEQMsz23Oqb" },
      { title: "Edgex 1 ft Engraved Metal Groove Panels", meta: "Jointless interior panel catalogue", image: "https://drive.google.com/thumbnail?id=1CNMiyws9i46nBBrhUmFzIsTtDJg1cbuj&sz=w900", fileId: "1CNMiyws9i46nBBrhUmFzIsTtDJg1cbuj" }
    ],
    treelam: [
      { title: "Project X 2025 Treelam", meta: "Project surface catalogue", image: "https://drive.google.com/thumbnail?id=1LorF7ZRNzQPBMcdKN09RUxA2_JHrX_7R&sz=w900", fileId: "1LorF7ZRNzQPBMcdKN09RUxA2_JHrX_7R" },
      { title: "Project X by Treelam 2026", meta: "Project surface catalogue", image: "https://drive.google.com/thumbnail?id=1RQUQtDWVi_1vYC1bufSuPld2GTFLGGx3&sz=w900", fileId: "1RQUQtDWVi_1vYC1bufSuPld2GTFLGGx3" },
      { title: "Project X", meta: "Project surface catalogue", image: "https://drive.google.com/thumbnail?id=1wCCX7GdTjiOwf55yDNGH4Q9sbAS5SUdu&sz=w900", fileId: "1wCCX7GdTjiOwf55yDNGH4Q9sbAS5SUdu" },
      { title: "Class 18 Treelam", meta: "Treelam collection", image: "https://drive.google.com/thumbnail?id=1BeTWrRR8wQYJBxV_TVBn1pnl-SYlpCMO&sz=w900", fileId: "1BeTWrRR8wQYJBxV_TVBn1pnl-SYlpCMO" },
      { title: "Class 20 Treelam", meta: "Treelam collection", image: "https://drive.google.com/thumbnail?id=1JRQ1oMUn4niHTT-8CQa2vIRcxa8aUbYo&sz=w900", fileId: "1JRQ1oMUn4niHTT-8CQa2vIRcxa8aUbYo" },
      { title: "Fleek LITE Vol. 2 9.5ft Treelam", meta: "Treelam collection", image: "https://drive.google.com/thumbnail?id=1Sn1hVk3hHH7E___K6GuZ65jFG8g-s6Zd&sz=w900", fileId: "1Sn1hVk3hHH7E___K6GuZ65jFG8g-s6Zd" },
      { title: "Wallon Vol. 2 Treelam", meta: "Wall panel catalogue", image: "https://drive.google.com/thumbnail?id=1Q6h_FLMWdTSgLtgbhvrvfYEpEHzMfZ6w&sz=w900", fileId: "1Q6h_FLMWdTSgLtgbhvrvfYEpEHzMfZ6w" },
      { title: "HDPC Wall Panel Treelam", meta: "HDPC wall panel catalogue", image: "https://drive.google.com/thumbnail?id=1Vz8rZOLD4AgP6NZ9AXO_4mzzl7x0ayTS&sz=w900", fileId: "1Vz8rZOLD4AgP6NZ9AXO_4mzzl7x0ayTS" },
      { title: "HDPC Solid Panels by Treelam 2026", meta: "HDPC solid panel catalogue", image: "https://drive.google.com/thumbnail?id=1jUj2SnwZlb_k-I9GrLLbCRWsGlZkmqPP&sz=w900", fileId: "1jUj2SnwZlb_k-I9GrLLbCRWsGlZkmqPP" },
      { title: "HDPC Wooden", meta: "Wood finish panel catalogue", image: "https://drive.google.com/thumbnail?id=1ZKbJhuPVQPgw-4YD4xb2XzBZ2RM2grjG&sz=w900", fileId: "1ZKbJhuPVQPgw-4YD4xb2XzBZ2RM2grjG" },
      { title: "The Wood Project Edition Two by LAMIQ", meta: "Wood finish catalogue", image: "https://drive.google.com/thumbnail?id=1yeB6z1XKS7ybp0HBCQrL1ljITKTfhI_C&sz=w900", fileId: "1yeB6z1XKS7ybp0HBCQrL1ljITKTfhI_C" }
    ],
    acpExterior: [
      { title: "ACP Catalogue Vol. 4", meta: "ACP sheet catalogue", image: "https://drive.google.com/thumbnail?id=1kW0Vw3M7lx_GVKOCnaUCSCOTKfH0y1BJ&sz=w900", fileId: "1kW0Vw3M7lx_GVKOCnaUCSCOTKfH0y1BJ" },
      { title: "Final Alutech ShadeCard 2026", meta: "Shade card catalogue", image: "https://drive.google.com/thumbnail?id=1IgVREihbRRZjMBJ2VCxvW6Sj_6eFhjkq&sz=w900", fileId: "1IgVREihbRRZjMBJ2VCxvW6Sj_6eFhjkq" },
      { title: "Aluclad Composite Exterior Cladding", meta: "Exterior cladding catalogue", image: "https://drive.google.com/thumbnail?id=14zOJ9wWDRyyQi4eOJuKWqVdPKfEjyoV7&sz=w900", fileId: "14zOJ9wWDRyyQi4eOJuKWqVdPKfEjyoV7" },
      { title: "Aludecor Timber 2024 E-catalogue", meta: "Timber ACP catalogue", image: "https://drive.google.com/thumbnail?id=16uoOWm3ltPI_CwSLB4CAmWooE_v1X0EY&sz=w900", fileId: "16uoOWm3ltPI_CwSLB4CAmWooE_v1X0EY" },
      { title: "Aludecor Wabi Sabi E-catalogue", meta: "Aludecor surface catalogue", image: "https://drive.google.com/thumbnail?id=1hY1OG8L5I49NYRHwLPJZrxrWBa_9BYRk&sz=w900", fileId: "1hY1OG8L5I49NYRHwLPJZrxrWBa_9BYRk" },
      { title: "Aludecor MSC Special", meta: "Metal shade collection", image: "https://drive.google.com/thumbnail?id=1zm-uoxnzb9wvJbVG_FbOkQZsYyt2Vv6g&sz=w900", fileId: "1zm-uoxnzb9wvJbVG_FbOkQZsYyt2Vv6g" },
      { title: "Aludecor Rugged Metal", meta: "Metal finish catalogue", image: "https://drive.google.com/thumbnail?id=1Dq78ip0Ozc1BSUK0VHwSqB9ei6rFErV_&sz=w900", fileId: "1Dq78ip0Ozc1BSUK0VHwSqB9ei6rFErV_" },
      { title: "MSC Regular Compressed", meta: "Metal shade catalogue", image: "https://drive.google.com/thumbnail?id=1QKcz3NWyvO89TgqnBlW0IMCKDvTgf2on&sz=w900", fileId: "1QKcz3NWyvO89TgqnBlW0IMCKDvTgf2on" },
      { title: "Earthcoat 2025", meta: "Exterior surface catalogue", image: "https://drive.google.com/thumbnail?id=12aOjTUbEkBrNazPnP0Vsff2_nbVpyech&sz=w900", fileId: "12aOjTUbEkBrNazPnP0Vsff2_nbVpyech" },
      { title: "Sand Rustic E-catalogue", meta: "Rustic surface catalogue", image: "https://drive.google.com/thumbnail?id=1BqgPMfKmdF877t9Fid94iGwfwv47nQyM&sz=w900", fileId: "1BqgPMfKmdF877t9Fid94iGwfwv47nQyM" },
      { title: "Zincho Eversion", meta: "Exterior finish catalogue", image: "https://drive.google.com/thumbnail?id=1yLIzN56YfMW3Z-5tY3adCKeIsWCyGO1P&sz=w900", fileId: "1yLIzN56YfMW3Z-5tY3adCKeIsWCyGO1P" }
    ],
    laminatesAcrylics: [
      { title: "Vivre Forte E Catalogue", meta: "Vivre surface catalogue", image: "https://drive.google.com/thumbnail?id=1T89iwr1oe-ecjzFLl8eCgdz9jojXYukU&sz=w900", fileId: "1T89iwr1oe-ecjzFLl8eCgdz9jojXYukU" },
      { title: "Vivasaa Metal Matt Laminates 2025", meta: "Pre-sanded laminate catalogue", image: "https://drive.google.com/thumbnail?id=1iNRGpMwkSWZeVK7qRHfUmwifGe83wVKr&sz=w900", fileId: "1iNRGpMwkSWZeVK7qRHfUmwifGe83wVKr" },
      { title: "Woodness Design in Every Grain", meta: "Wood finish catalogue", image: "https://drive.google.com/thumbnail?id=1NSaX2VsZl-oIuNr3d4vGMEUi66b3VWL-&sz=w900", fileId: "1NSaX2VsZl-oIuNr3d4vGMEUi66b3VWL-" },
      { title: "Quarry 9.5 ft Sleek Chiseled Marble", meta: "Marble finish catalogue", image: "https://drive.google.com/thumbnail?id=1CAo7mUpR-ih6xVNFV2TtKUICQQGyDBFC&sz=w900", fileId: "1CAo7mUpR-ih6xVNFV2TtKUICQQGyDBFC" },
      { title: "Lamina Single Page PDF", meta: "Lamina quick reference", image: "https://drive.google.com/thumbnail?id=1r4xGHItNoOm8oPu6wPeWN69eJrVrfLYr&sz=w900", fileId: "1r4xGHItNoOm8oPu6wPeWN69eJrVrfLYr" },
      { title: "AcryPedia Encyclopedia of Acrylic Laminates", meta: "Acrylic laminate catalogue", image: "https://drive.google.com/thumbnail?id=1J02AIFHLyXwzCWBexpRg8tLHevuAhNvD&sz=w900", fileId: "1J02AIFHLyXwzCWBexpRg8tLHevuAhNvD" }
    ],
    decorPlast: [
      { title: "Decorplast Brochure", meta: "Decor Plast catalogue", image: "https://drive.google.com/thumbnail?id=1HYjx0OSXbJqu3IrgFe_8IVL2zblUtttg&sz=w900", fileId: "1HYjx0OSXbJqu3IrgFe_8IVL2zblUtttg" },
      { title: "Platinum Decor Plast", meta: "Premium Decor Plast catalogue", image: "https://drive.google.com/thumbnail?id=1Bib9BgqovMvw52CfhEUphohQGSyi3fpu&sz=w900", fileId: "1Bib9BgqovMvw52CfhEUphohQGSyi3fpu" },
      { title: "Decor Plast Album", meta: "Decor Plast album", image: "https://drive.google.com/thumbnail?id=17G2dbj1wehslwOi8JoK6RVQI2Yu2yioz&sz=w900", fileId: "17G2dbj1wehslwOi8JoK6RVQI2Yu2yioz" },
      { title: "Decor Plast Furniture Album", meta: "Furniture finish album", image: "https://drive.google.com/thumbnail?id=1aUC1tia8yifuDTNnXiNNQey2pz-w00_w&sz=w900", fileId: "1aUC1tia8yifuDTNnXiNNQey2pz-w00_w" }
    ],
    tayalWoto: [
      { title: "Tayal Associates Traders ATOM Catalog", meta: "Official Tayal Associates volume", image: "https://drive.google.com/thumbnail?id=19YpZ1HiDyrwPCIrhiazI6iYeOMGPcNwX&sz=w900", fileId: "19YpZ1HiDyrwPCIrhiazI6iYeOMGPcNwX" },
      { title: "Tayal Associates Traders WOTO Catalog", meta: "Official Tayal Associates volume", image: "https://drive.google.com/thumbnail?id=1XPcXmWOcTUIpk7CfzKs0EbYVF8VBeIhs&sz=w900", fileId: "1XPcXmWOcTUIpk7CfzKs0EbYVF8VBeIhs" },
      { title: "Tayal Associates Traders WOTO Vol. 2 Catalog", meta: "Official Tayal Associates volume", image: "https://drive.google.com/thumbnail?id=1ZH9UvXcY0D0st9JcbJJwGHwQJAfXHl7Y&sz=w900", fileId: "1ZH9UvXcY0D0st9JcbJJwGHwQJAfXHl7Y" }
    ],
    office: [
      { title: "Tayal Associates Office Portfolio", meta: "Office photographs and showroom reference", image: "https://drive.google.com/thumbnail?id=1bBeAmBaACNxdBUENPIylyMel47g-_g6N&sz=w900", fileId: "1bBeAmBaACNxdBUENPIylyMel47g-_g6N" }
    ],
    priceOther: [
      { title: "Cost Vol. 1", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost1.jpg", fileId: "1yXAdUPaYWTYcUJSNYCCgX9U_ugfAVC3p" },
      { title: "Cost Vol. 2", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost2.jpg", fileId: "1qD37cg-zVmG-BI4aVgCO92MrYrSP1d_S" },
      { title: "Cost Vol. 3", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost3.jpg", fileId: "1rPWUow0BOO7rmgp6iJuHVwVutosE3hbE" },
      { title: "Cost Vol. 4", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost4.jpg", fileId: "1BHvAKW8jWLUt9gazDlUCgt7QH47MJBPS" },
      { title: "Cost Vol. 5", meta: "Pricing and catalogue reference", image: "assets/catalogues/cost5.jpg", fileId: "1FVpQaYkuW7434LZjLhcjtLiHOsiLltRQ" },
      { title: "Other Collection Vol. 1", meta: "Additional catalogue volume", image: "assets/catalogues/other1.jpg", fileId: "1nNqO6WspWiooF04mvNrHVSE4k6xt2vci" },
      { title: "Other Collection Vol. 2", meta: "Additional catalogue volume", image: "assets/catalogues/other2.jpg", fileId: "1tixfwKGUXr2P6mWq8I2USbHu0o_Ni9Fy" },
      { title: "Luxury Collection Vol. 1", meta: "Premium catalogue volume", image: "https://drive.google.com/thumbnail?id=1sNCnMXDUeCbXLvPWKEGVmkubCCdFUQ_O&sz=w900", fileId: "1sNCnMXDUeCbXLvPWKEGVmkubCCdFUQ_O" }
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
      const cover = card.querySelector("img");
      cover?.addEventListener("error", () => {
        const visualBox = card.querySelector(".drive-card__visual");
        visualBox.innerHTML = `<div class="drive-card__placeholder"><span>Catalogue</span><strong>${item.title}</strong></div><span class="drive-card__volume">${number}</span>`;
      }, { once: true });
      fragment.append(card);
    });
    target.append(fragment);
  };

  renderDriveCatalogues("#wall-panel-catalogues", driveCatalogues.wall);
  renderDriveCatalogues("#uv-catalogues", driveCatalogues.uv);
  renderDriveCatalogues("#wpc-louvers-catalogues", driveCatalogues.wpcLouvers);
  renderDriveCatalogues("#designer-panels-catalogues", driveCatalogues.designerPanels);
  renderDriveCatalogues("#treelam-catalogues", driveCatalogues.treelam);
  renderDriveCatalogues("#acp-exterior-catalogues", driveCatalogues.acpExterior);
  renderDriveCatalogues("#laminates-acrylics-catalogues", driveCatalogues.laminatesAcrylics);
  renderDriveCatalogues("#decor-plast-catalogues", driveCatalogues.decorPlast);
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
  menuButton?.addEventListener("click", () => menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu"));
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
  quantityForm?.querySelectorAll('input[type="number"]').forEach((input) => {
    input.min = "0.001";
    input.step = "any";
  });
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

  document.querySelector("#current-year")?.replaceChildren(String(new Date().getFullYear()));
  if (document.body.dataset.page === "home") {
    const oldCatalogueSections = new Set(["ready-catalogues", "wall-panels", "uv-sheets", "wpc-louvers", "treelam-volumes", "designer-panels", "acp-exterior", "laminates-acrylics", "decor-plast", "tayal-woto", "price-other", "office-portfolio", "product-video"]);
    const oldPageSections = { calculator: "estimator.html", brands: "about.html", services: "about.html", visit: "contact.html" };
    const hash = decodeURIComponent(location.hash.slice(1));
    if (oldCatalogueSections.has(hash)) location.replace(`catalogues.html#${hash === "ready-catalogues" ? "catalogue-collections" : hash}`);
    else if (oldPageSections[hash]) location.replace(oldPageSections[hash]);
  }
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
