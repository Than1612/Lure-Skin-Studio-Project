import charcoalSoapImage from "./Product Images/soaps/Charcoal.png";
import sheaButterSoapImage from "./Product Images/soaps/Shea Butter.JPG";
import frenchGreenClaySoapImage from "./Product Images/soaps/French Green Clay.png";
import pinkClaySoapImage from "./Product Images/soaps/French Pink Clay.JPG";
import redWineSoapImage from "./Product Images/soaps/French Green Clay 1.png";
import detanSoapImage from "./Product Images/soaps/Shea Butter 1.JPG";
import dandruffHairOilImage from "./Product Images/hairoils/Anti Dandruff Oil.png";
import hairGrowthOilImage from "./Product Images/hairoils/Hair Growth Oil.png";
import roseWaterTonerImage from "./Product Images/toner/Damascus Rose Water.png";
import peachAlmondScrubImage from "./Product Images/face scrub/Almond Peach Face Scrub.JPG";
import japanesecherryblossom from "./Product Images/shower gel/image0.jpeg";
import greenapplecinnamon from "./Product Images/shower gel/image3.jpeg";
import aloveragel from "./Product Images/alovera gel/image1.jpeg";

const soapData = {
  products: [
    {
      product_name: "Charcoal soap",
      MRP: 150,
      arrivalDate: "2024-10-28",
      description:
      [
        "Our Soap Bars are handmade from scratch, using the cold processed method, one batch at a time - to ensure freshness, consistency, and perfection.",
        "Our recipes are meticulously developed to produce a mild, skin-nourishing soap that offers a magnificent long-lasting lather and leaves your skin feeling clean, soft, and radiantly healthy."
      ],
      benefits: [
        "Removes excess oil secretion.",
        "Reduces acne & pimples.",
        "Reduces the pore size.",
        "Prevents premature ageing.",
        "Provides exfoliation.",
      ],
      usage_storage: [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Shea butter",
        "Activated bamboo charcoal powder",
        "Tea tree oil",
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [charcoalSoapImage],
    },
    {
      product_name: "Shea Butter Soap",
      MRP: 150,
      arrivalDate: "2024-10-28",
      description:
      [
        "Our Soap Bars are handmade from scratch, using the cold processed method, one batch at a time - to ensure freshness, consistency, and perfection.",
        "Our recipes are meticulously developed to produce a mild, skin-nourishing soap that offers a magnificent long-lasting lather and leaves your skin feeling clean, soft, and radiantly healthy."
      ],
      benefits: [
        "Fantastic moisturiser.",
        "Collagen production is boosted (anti-ageing).",
        "Promotes cell regeneration.",
        "Vitamin A, E & F present to keep skin healthy.",
      ],
      usage_storage: [
        "Ideal for dry & combination skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: ["Base oils", "Unrefined Shea butter", "Rose geranium oil"],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [sheaButterSoapImage],
    },
    {
      product_name: "French Green Clay with Spirulina Soap",
      MRP: 120,
      arrivalDate: "2024-10-28",
      description:
      [
        "Our Soap Bars are handmade from scratch, using the cold processed method, one batch at a time - to ensure freshness, consistency, and perfection.",
        "Our recipes are meticulously developed to produce a mild, skin-nourishing soap that offers a magnificent long-lasting lather and leaves your skin feeling clean, soft, and radiantly healthy."
      ],
      benefits: [
        "Drawing out impurities from the pores.",
        "Exfoliating dead skin cells.",
        "Toning & firming the skin.",
        "Releases the feeling of tiredness.",
      ],
      usage_storage: [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "French green clay",
        "Spirulina powder",
        "Peppermint oil",
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [frenchGreenClaySoapImage],
    },
    {
      product_name: "French Pink Clay with Rose Soap",
      MRP: 120,
      arrivalDate: "2024-10-28",
      description:
      [
        "Our Soap Bars are handmade from scratch, using the cold processed method, one batch at a time - to ensure freshness, consistency, and perfection.",
        "Our recipes are meticulously developed to produce a mild, skin-nourishing soap that offers a magnificent long-lasting lather and leaves your skin feeling clean, soft, and radiantly healthy."
      ],
      benefits: [
        "Cleanse & detoxify skin.",
        "Treat acne.",
        "Restore & replenish skin with moisture while drawing out impurities.",
      ],
      usage_storage: [
        "Ideal for acne & oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Wild Rose oil",
        "French pink clay",
        "Organic rose petals",
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [pinkClaySoapImage],
    },
    {
      product_name: "Red-wine soap",
      MRP: 100,
      arrivalDate: "2024-10-28",
      description:
      [
        "The beautiful smell of this soap will melt away the troubles of these day while you relax in a hot bath.", 
        "The essential oils help purify the skin and have a gentler effect than many commercial soaps.",
        "The glycerin will help moisturise and soften your skin.",
        "Treat yourself right by getting some of this lovely soap today!"
      ],
      benefits: [
        "Red wine helps to fight aging by restoring collagen and elastic fibres.",
        "Red wine gives boost to sagging skin, reducing fine lines and wrinkles.",
        "Sulphate free, paraben free.",
      ],
      usage_storage: [
        "Ideal for acne, all skin types.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Coconut oil",
        "Castor oil",
        "Sodium hydroxide",
        "Glycerine",
        "Red wine extract",
        "Distilled water",
        "Solvents (CAPB) and red color (FDA approved)",
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [redWineSoapImage],
    },
    {
      product_name: "Detan Soap",
      MRP: 200,
      arrivalDate: "2024-10-28",
      description:
      [
        "The beautiful smell of this soap will melt away the troubles of these day while you relax in a hot bath.", 
        "The essential oils help purify the skin and have a gentler effect than many commercial soaps.",
        "The glycerin will help moisturise and soften your skin.",
        "Treat yourself right by getting some of this lovely soap today!"
      ],
      benefits: [
        "Deep cleanses and removes impurities.",
        "Improves skin radiance.",
        "Reduces tanning.",
      ],
      usage_storage: [
        "Ideal for normal to oily skin.",
        "Rub the soap gently on your wet skin to lather.",
        "Store in a ventilated soap box to drain away the water completely.",
      ],
      loaded_with: [
        "Base oils",
        "Lemongrass oil",
        "Potato powder",
        "Tomato purée",
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [detanSoapImage],
    },
    {
      product_name: "All Clear Dandruff Hair Oil",
      MRP: 430,
      arrivalDate: "2024-10-28",
      description:
      [
        "It helps fight the dandruff-related issues with natural ingredients like rosemary, neem, and tea tree oil.", 
        "The unique blend of these key ingredients helps treat your hair and scalp skin so you get strong and healthy hair."
      ],
      benefits: [
        "Relieves scalp itchiness.",
        "Controls flaky dandruff and fungal infection of scalp.",
        "Prevents split ends and adds shine & lustre to hair.",
        "Delays premature greying.",
      ],
      usage_storage: [
        "Apply the oil directly on the scalp using the applicator.",
        "Give a good massage and leave it for at least 30 mins or overnight for best results.",
        "Use weekly twice or can be used regularly.",
      ],
      loaded_with: [
        "Coconut oil",
        "Castor oil",
        "Amla",
        "Henna leaves",
        "Curry leaves",
        "Fenugreek",
        "Hibiscus flower",
        "Aloevera",
        "Bhringraj",
        "Neem leaves",
        "Rosemary oil",
        "Tea tree oil.",
      ],
      disclaimer: [
        "Apply and wait for 24hrs.",
        "If there’s no reaction, you can continue to use.",
      ],
      proImgs: [dandruffHairOilImage],
    },
    {
      product_name: "Hair Growth Oil",
      MRP: 550,
      arrivalDate: "2024-10-28",
      description:
      [
        "Ayurvedic formalisation is what makes this hair growth oil so special.", 
        "With the finest of organic & natural blends of herbs infused in the oil works great for strengthening the hair and reducing the hair fall.", 
        "A nice massage with this aromatic oil relives stress and reduces hair loss over a period of time."
      ],
      benefits: [
        "Strengthens hair roots.",
        "Hydrates the hair and prevents frizz.",
        "Helps in regeneration of new hair follicles.",
        "Nourishes the hair.",
      ],
      usage_storage: [
        "Apply the oil directly on the scalp using the applicator.",
        "Give a good massage and leave it for at least 30 mins or overnight for best results.",
        "Use weekly twice or can be used regularly.",
      ],
      loaded_with: [
        "Coconut oil",
        "Dried skunk vine",
        "Cumin seeds",
        "False daisy",
        "Fenugreek",
        "Nigella seeds",
        "Perani",
        "True indigo",
        "Vetiver",
        "White turmeric.",
      ],
      disclaimer: [
        "Apply and wait for 24hrs.",
        "If there’s no reaction, you can continue to use.",
      ],
      proImgs: [hairGrowthOilImage],
    },
    {
      product_name: "Rose Water Toner",
      MRP: 500,
      arrivalDate: "2024-10-28",
      description:
      [
        "Damascus rose is one of the best known and renowned hydrosols because it is suitable for all skin types.",
        "Like most hydrosols, it has astringent properties. It also helps comfort reactive and redness-prone skin."
      ],
      benefits: [
        "Hydrating, revitalising and moisturising.",
        "Has anti-inflammatory properties.",
        "Controls excess oil & shrinks pores.",
      ],
      usage_storage: [
        "Use as a toner to balance the skin.",
        "Spray it over the skin or dampen a cotton pad.",
        "Best for daily use.",
      ],
      loaded_with: ["Damascus rose flower extracts", "Purified water"],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [roseWaterTonerImage],
    },
    {
      product_name: "Almond Peach Face Scrub",
      MRP: 400,
      arrivalDate: "2024-10-28",
      description:
      [
        "Our Glow Getter Face Scrub is a rich, moisturizing exfoliant that gently removes dead skin cells – without breaking your skin’s protective barrier.", 
        "Suitable for all skin types, this natural, anti-inflammatory formula hydrates and polishes your skin, and replenishes your moisture levels, leaving you lush, glowing, and smooth."
      ],
      benefits: [
        "Exfoliates dead skin cells.",
        "Removes impurities.",
        "Refreshes and revitalises skin.",
      ],
      usage_storage: [
        "Apply on wet face, gently massage in circular motions.",
        "Leave it on for 10 mins, then rinse off.",
      ],
      loaded_with: ["Almond powder", "Peach extracts", "Sugar"],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.",
        "These are not flaws; they are nature of handmade soaps.",
      ],
      proImgs: [peachAlmondScrubImage],
    },
    {
      product_name: "Japanese cherry blossom shower gel",
      MRP:460,
      description:
      [
        "A great shower routine starts with a super-luxe moisturizing body wash or bubbly shower gel.",
        "A great body soap refreshes, cleans and gets you ready to take on your day."
      ],
      benefits:
      [
        "Gentle and non-drying",
        "It's the perfect daily cleanser to leave skin feeling fresh and clean!"
      ],
      usage_storage:
      [
        "Pump the gel on your wet palms/loofah.",
        "Lather the gel and gently scrub yourself all over. Rinse well.",
        "Store in a cool place and away from sunlight."
      ],
      loaded_with:
      [
        "Sodium cocyl isethionate(SCI)",
        "coco amido propyl betaine (capb)",
        "egms",
        "aqua glycerin",
        "decyl glucoside",
        "polyquats"
      ],
      disclaimer:
      [
        "Patch test before use.", 
        "Incase of any irritation stop usage."
      ],
      proImgs: [japanesecherryblossom], 
    },
    {
      product_name: "Green apple cinnamon shower gel",
      MRP:480,
      description:
      [
        "A great shower routine starts with a super-luxe moisturizing body wash or bubbly shower gel.",
        "A great body soap refreshes, cleans and gets you ready to take on your day."
      ],
      benefits:
      [
        "Gentle and non-drying",
        "It's the perfect daily cleanser to leave skin feeling fresh and clean!"
      ],
      usage_storage:
      [
        "Pump the gel on your wet palms/loofah.",
        "Lather the gel and gently scrub yourself all over. Rinse well.",
        "Store in a cool place and away from sunlight."
      ],
      loaded_with:
      [
        "Olive Oil", 
        "Coconut Oil", 
        "Jojoba Oil", 
        "Castor Oil", 
        "Hemp Oil",
        "Palm Oil", 
        "KOH", 
        "Water", 
        "Preservatives"
      ],
      disclaimer:
      [
        "Patch test before use.", 
        "Incase of any irritation stop usage."
      ],
      proImgs: [greenapplecinnamon], 
    },
    {
      product_name: "Aloevera gel",
      MRP: 270,
      description:
      [
        "Aloe Vera gel is a natural wonder gel offering a plethora of benefits – soothes sunburns,  moisturises the skin, boosts healing of wounds, fights skin-aging, reduces infection and acne and lightens blemishes on the face.",
        "The gel offers benefits to scalp and hair too – it promotes hair growth, controls dandruff and acts as a conditioner to the hair and scalp."
      ],
      benefits:
      [
        "Soothes sunburn",
        "Boots healing of wounds",
        "Deeply hydrates the skin",
        "Lightens blemishes",
        "Acts as a conditioner for hair and scalp"
      ],
      usage_storage:
      [
        "Apply it as a moisturiser for the day or sleeping mask for the night.",
        "Can be used as hair styling gel.", 
        "Makes a good leave on hair conditioner.",
        "Best when refrigerated or in air tight dry condition."
      ],
      loaded_with:
      [
        "Aloe gel",
        "Xantum gum"
      ],
      disclaimer:
      [
        "Patch test before use.", 
        "Stop using incase of any irritation."
      ],
      proImgs:[aloveragel],
    }
  ],
};

const soaps = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("soap")
);
const oils = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("oil")
);
const toners = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("toner")
);
const scrubs = soapData.products.filter((product) =>
  product.product_name.toLowerCase().includes("scrub")
);
const shower_gel=soapData.products.filter((product) =>
product.product_name.toLowerCase().includes("shower gel")
);
const aloevera_gel=soapData.products.filter((product) =>
product.product_name.toLowerCase().includes("aloevera gel")
);

export { soaps, oils, toners, scrubs, shower_gel, aloevera_gel };
