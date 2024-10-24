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

const soapData = {
  products: [
    {
      product_name: "Charcoal soap",
      MRP: 150,
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
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [charcoalSoapImage], // Unique image for this product
    },
    {
      product_name: "Shea Butter Soap",
      MRP: 150,
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
      loaded_with: [
        "Base oils", 
        "Unrefined Shea butter", 
        "Rose geranium oil"
      ],
      disclaimer: [
        "Patch test before use.",
        "The colour, fragrance, appearance & weight may vary a bit considering the fact that it’s handmade.", 
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [sheaButterSoapImage], // Unique image for this product
    },
    {
      product_name: "French Green Clay with Spirulina Soap",
      MRP: 120,
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
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [frenchGreenClaySoapImage], // Unique image for this product
    },
    {
      product_name: "French Pink Clay with Rose Soap",
      MRP: 120,
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
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [pinkClaySoapImage], // Unique image for this product
    },
    {
      product_name: "Red-wine soap",
      MRP: 100,
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
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [redWineSoapImage], // Unique image for this product
    },
    {
      product_name: "Detan Soap",
      MRP: 200,
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
        "These are not flaws; they are nature of handmade soaps."
      ],
      proImgs: [detanSoapImage], // Unique image for this product
    },
    {
      product_name: "All Clear Dandruff Hair Oil",
      MRP: 430,
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
        "If there’s no reaction, you can continue to use."
      ],
      proImgs: [dandruffHairOilImage], // Unique image for this product
    },
    {
      product_name: "Hair Growth Oil",
      MRP: 550,
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
        "If there’s no reaction, you can continue to use."
      ],
      proImgs: [hairGrowthOilImage], // Unique image for this product
    },
    {
      product_name: "Damascus Rose Water Toner",
      MRP: 325,
      benefits: [
        "Helps to strengthen and regenerate skin cells.",
        "Treats mild acne.",
        "Helps clean pores.",
        "Soothes sun damage."
      ],
      usage_storage: [
        "After cleansing, pat dry your face. Place the bottle a few inches away and spray it over your face.",
        "You can also spray it on a cotton pad and dab it over your face.",
        "Works great to mix powdered face packs & scrubs.",
        "Store in a cool, dry place."
      ],
      loaded_with: [
        "Organic Damascus rose petals"
      ],
      disclaimer: [
        "Patch test before use.",
        "Avoid contact with eyes."
      ],
      proImgs: [roseWaterTonerImage], // Unique image for this product
    },
    {
      product_name: "Peach & Almond Scrub",
      MRP: 440,
      benefits: [
        "Smoother skin.",
        "Unclogged pores.",
        "Better absorption of skincare products.",
        "Reduces acne scars."
      ],
      usage_storage: [
        "Rinse your face with water lightly.",
        "Apply a dime-sized scrub onto skin, scrub using circular motions with your fingertips for about a minute.",
        "Wash away with water and pat dry. For best results, use once every 4 days.",
        "Store in a cool, dry place."
      ],
      loaded_with: [
        "Demineralised water",
        "Stearic acid",
        "Vegetable glycerin",
        "Xanthan gum",
        "Almond granules",
        "Peach oil",
        "GMS SE",
        "Preservative"
      ],
      disclaimer: [
        "Patch test before use.",
        "Avoid using wet hands or wet spatula for longer shelf life."
      ],
      proImgs: [peachAlmondScrubImage], // Unique image for this product
    },
  ],
};

// Example function to filter the products based on type
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

export { soaps, oils, toners, scrubs };
