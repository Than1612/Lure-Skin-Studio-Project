import charcoalSoapImage from "./Product Images/soaps/Charcoal.JPG";
import sheaButterSoapImage from "./Product Images/soaps/Shea Butter.JPG";
import frenchGreenClaySoapImage from "./Product Images/soaps/French Green Clay.JPG";
import pinkClaySoapImage from "./Product Images/soaps/French Pink Clay.JPG";
import redWineSoapImage from "./Product Images/soaps/French Green Clay 1.JPG";
import detanSoapImage from "./Product Images/soaps/Shea Butter 1.JPG";
import dandruffHairOilImage from "./Product Images/hairoils/Anti Dandruff Oil.JPG";
import hairGrowthOilImage from "./Product Images/hairoils/Hair Growth Oil.JPG";
import roseWaterTonerImage from "./Product Images/toner/Damascus Rose Water.JPG";
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
