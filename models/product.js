const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: {
    type: String,
    requried: true,
    unique: true
  },
  price: {
    type: Number,
    requried: true
  },
  description: {
    type: String,
    requried: true
  },
  image: {
    type: String,
    requried: true
  },
  category: {
    type: String,
    requried: true
  },
  bestseller: {
    type: Boolean,
    required: true
  },
  onSale: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;

// const fakeDB = [
//     {
//       title: "Ipad MINI",
//       price: 499.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/ipad_mini.png",
//       category: "Tablet",
//       bestseller: false,
//       onSale: false,
//       stock: 3
//     },
//     {
//       title: "Microsoft Surface Laptop 3",
//       price: 1299.99,
//       description:
//         "Touch-Screen – Intel Core i5 - 8GB Memory - 256GB Solid State Drive (Latest Model) – Cobalt Blue with Alcantara",
//       image: "/img/product/MicrosoftSurfaceLaptop3.jpg",
//       category: "Laptop",
//       bestseller: true,
//       onSale: false,
//       stock: 4
//     },
//     {
//       title: "HP ENVY 13",
//       price: 499.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/HPENVY13-ah0001na.jpg",
//       category: "Laptop",
//       bestseller: false,
//       onSale: false,
//       stock: 7
//     },
//     {
//       title: "Apple MacBook Air",
//       price: 1799.99,
//       description:
//         "13-inch, Latest Model, 8GB RAM, 256GB Storage, 1.6GHz Intel Core i5",
//       image: "/img/product/AppleMacBookAir.jpg",
//       category: "Laptop",
//       bestseller: true,
//       onSale: false,
//       stock: 3
//     },
//     {
//       title: "New Apple MacBook Pro ",
//       price: 3429.99,
//       description:
//         "Ninth-generation 6-core Intel Core i7 processor Stunning 16-inch Retina display with True Tone technology Touch Bar and Touch ID.",
//       image: "/img/product/AppleMacBookAir.jpg",
//       category: "Laptop",
//       bestseller: false,
//       onSale: false,
//       stock: 78
//     },
//     {
//       title: "Apple TV 4K (32GB)",
//       price: 170.99,
//       description:
//         "K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality.",
//       image: "/img/product/AppleTV4K.jpg",
//       category: "Television",
//       bestseller: false,
//       onSale: false,
//       stock: 53
//     },
//     {
//       title: "Philips 32-INch HD LED TV",
//       price: 599.99,
//       description:
//         "Included in delivery: Philips 32PHT4503/05 TV Ultra-slim 32 inch LED TV (HD, Pixel Plus HD, 200 PPI, DTS 2.0+Digital Out, HDMI, USB) black (2018/2019 model); remote control, batteries, power cord, quick start guide, legal and safety brochure, table top stand",
//       image: "/img/product/Philips32PHT4503.jpg",
//       category: "Television",
//       bestseller: false,
//       onSale: false,
//       stock: 53
//     },
//     {
//       title: "Lenovo Chromebook C330",
//       price: 499.99,
//       description:
//         "HIGH PERFORMANCE LAPTOP: The Chromebook C330 is equipped with a MediaTek MT8173C Processor, Chrome OS, 4 GB LPDDR3, 64 GB eMMC and so much more.",
//       image: "/img/product/LenovoChrombookC330.jpg",
//       category: "Laptop",
//       bestseller: true,
//       onSale: false,
//       stock: 23
//     },
//     {
//       title: "Samsung Galaxy Tab A8",
//       price: 792.99,
//       description:
//         "Dual camera - take share-owrthy shots with the rear camera or make video calls with the front camera. Bluetooth version - bluetooth v4.2.",
//       image: "/img/product/SabsungGalaxyTabA8.jpg",
//       category: "Tablet",
//       bestseller: true,
//       onSale: false,
//       stock: 42
//     },
//     {
//       title: "Asus VivoBook S15 ",
//       price: 942.99,
//       description:
//         "Ergonomic chiclet backlit keyboard with fingerprint sensor activated via Windows Hello. Exclusive Ergolift design for improved typing position.",
//       image: "/img/product/AsusVivoBookS15.jpg",
//       category: "Laptop",
//       bestseller: false,
//       onSale: false,
//       stock: 52
//     },
//     {
//       title: "ROG Strix III G Gaming Laptop",
//       price: 499.99,
//       description:
//         "ROG Intelligent Cooling thermal system with dual 12V fans, triple radiators, anti-dust technology, and adjustable fan modes.",
//       image: "/img/product/ROGStrixIIIGGamingLaptop.jpg",
//       category: "Laptop",
//       bestseller: true,
//       onSale: true,
//       stock: 14
//     },
//     {
//       title: "NEWYES 8.5 Inches Colorful Doodle Board ",
//       price: 18.02,
//       description:
//         "This NEWYES writing tablet is only sold by Homes-tech. You will get fake products if you purchase from other shops. Please be careful before place order!!!★Adopting advanced pressure-sensitive technology, LCD writing surface will create lines of different thickness based on how hard you push.",
//       image: "/img/product/NEWYES8.5InchesColorfulDoodleBoard.jpg",
//       category: "Tablet",
//       bestseller: false,
//       onSale: false,
//       stock: 16
//     },
//     {
//       title: "AILIHEN I35 Kids Headphones",
//       price: 19.63,
//       description:
//         "AILIHEN Comfortable Kids Headphones: A must gift headphones with an adorable design and pillow soft headband for ultra comfort. What’s more, memory-protein cushioned earmuffs also help you minimize tiredness.",
//       image: "/img/product/AILIHENI35KidsHeadphones.jpg",
//       category: "Headphone",
//       bestseller: false,
//       onSale: false,
//       stock: 26
//     },
//     {
//       title: "Neewer Studio Monitor Headphones",
//       price: 499.99,
//       description:
//         "IMPRESSIVE SOUND QUALITY: Precise closed cavity structure; Newest designed 45mm large-aperture driver with rare earth magnets and copper-clad aluminum wire voice coils to provide wider dynamic range and make sure safe and stable output even meet instant high power; Circumaural design contours around the ears for excellent sound isolation in loud environments.",
//       image: "/img/product/710Og08oG1L._SL1500_.jpg",
//       category: "Headphone",
//       bestseller: false,
//       onSale: false,
//       stock: 36
//     },
//     {
//       title: "COWIN E7 Active Noise Cancelling Headphones",
//       price: 79.99,
//       description:
//         "Active Noise Cancelling technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.",
//       image: "/img/product/COWINE7ActiveNoiseCancellingHeadphones.jpg",
//       category: "Headphone",
//       bestseller: true,
//       onSale: true,
//       stock: 25
//     },
//     {
//       title: "Wired Earbuds C300",
//       price: 58.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/WiredEarbudsC300.jpg",
//       category: "Headphone",
//       bestseller: true,
//       onSale: true,
//       stock: 47
//     },
//     {
//       title: "Kellogg's Special K Fruit Crisps",
//       price: 4.49,
//       description:
//         "A light snack at only 100-Calorie Strawberry flavour Helps with weight management.",
//       image: "/img/product/91KI5feNglL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: true,
//       stock: 14
//     },

//     {
//       title: "Mott's Fruitsations Veggie Gluten Free Berry",
//       price: 7.5,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/71pRLEUCI7L._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: true,
//       stock: 46
//     },
//     {
//       title: "Kellogg's Rice Krispies Square Bars",
//       price: 7.98,
//       description:
//         "Source of 2 essential nutrients Trans Fat Free One JUMBO Box.",
//       image: "/img/product/817ZEhSGwLL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: false,
//       stock: 25
//     },
//     {
//       title: "Welchs Mixed Fruit Snacks, 90 ct.",
//       price: 18.7,
//       description:
//         "Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin C.",
//       image: "/img/product/61z5wz94O7L._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: true,
//       onSale: true,
//       stock: 36
//     },
//     {
//       title: "Ritz Crackers Cheese Sandwich, 304 Grams",
//       price: 2.99,
//       description: "Buttery, Flaky Goodness, Cheesy Sandwiches.",
//       image: "/img/product/81pt0jH8RQL._AC_UL640_QL65_ML3_.jpg",
//       category: "Grocery",
//       tseller: true,
//       onSale: true,
//       stock: 234
//     },
//     {
//       title: "BROOKSIDE Dark Chocolate",
//       price: 4.99,
//       description:
//         "One 595g bag of BROOKSIDE Dark Chocolate, Acai & Blueberry flavour. Perfect for sharing. And Soft fruit flavoured centres covered in dark chocolate. Treat yoursel, afted pairing, only from BROOKSIDE..",
//       image: "/img/product/71gzovNQTgL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: false,
//       stock: 23
//     },
//     {
//       title:
//         "Reese Puffs Treats Peanut Butter & Cocoa Flavour Cereal Bars, 5 Count",
//       price: 2.39,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",

//       egory: "Grocery",
//       subcategory: "Snack",
//       bestseller: false,
//       onSale: false,
//       stock: 12
//     },
//     {
//       title: "Peace Tea Razzleberry 695mL Cans, 12 Pack",
//       price: 10.99,
//       description:
//         "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
//       image: "/img/product/81fn0MdnapL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: false,
//       stock: 23
//     },
//     {
//       title: "Peace Tea Peach Party 695mL Cans, 12 Pack",
//       price: 10.99,
//       description:
//         "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
//       image: "/img/product/81jK3zkUEhL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: false,
//       stock: 12
//     },
//     {
//       title: "A&W Root Beer, 355 mL cans",
//       price: 4.99,
//       description:
//         "Convenient pack of 12 to be enjoyed with meals or on the goBring home the authentic, delicious, creamy taste of A&W Root Beer",
//       image: "/img/product/8136MxgMUWL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: false,
//       stock: 64
//     },
//     {
//       title: "Nestea Lemon, 341mL cans, Pack of 12",
//       price: 6.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/810cQsDuhBL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: false,
//       onSale: false,
//       stock: 42
//     },
//     {
//       title: "Coca-Cola Coke Classic, 335mL cans, Pack of 12",
//       price: 6.99,
//       description:
//         "Bring home the authentic, delicious & refreshing taste of Coca-Cola For crisp, cold taste, enjoy chilled Made with no artificial flavors or preservatives so you get a full flavor in each sip",
//       image: "/img/product/81C2ydhp-2L._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: false,
//       stock: 653
//     },
//     {
//       title: "Red Bull Energy Drink Sugar Free, 4 Pack of 250ml Cans",
//       price: 6.99,
//       description:
//         "Red Bull Sugarfree formula contains high quality ingredients, including caffeine, taurine, and B-group vitamins.",
//       image: "/img/product/516+yiJloLL._AC_SX360_SY240_QL70_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: false,
//       stock: 12
//     },
//     {
//       title: "Neewer Studio 2",
//       price: 499.99,
//       description:
//         "IMPRESSIVE SOUND QUALITY: Precise closed cavity structure; Newest designed 45mm large-aperture driver with rare earth magnets and copper-clad aluminum wire voice coils to provide wider dynamic range and make sure safe and stable output even meet instant high power; Circumaural design contours around the ears for excellent sound isolation in loud environments.",
//       image: "/img/product/710Og08oG1L._SL1500_.jpg",
//       category: "Headphone",
//       bestseller: false,
//       onSale: false,
//       stock: 14
//     },
//     {
//       title: "COWIN E8 Active Noise Cancelling Headphones",
//       price: 79.99,
//       description:
//         "Active Noise Cancelling technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.",
//       image: "/img/product/COWINE7ActiveNoiseCancellingHeadphones.jpg",
//       category: "Headphone",
//       bestseller: true,
//       onSale: false,
//       stock: 52
//     },
//     {
//       title: "Wired Earbuds C400",
//       price: 58.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/WiredEarbudsC300.jpg",
//       category: "Headphone",
//       bestseller: true,
//       onSale: false,
//       stock: 14
//     },
//     {
//       title: "Kellogg's Special F Fruit Crisps",
//       price: 4.49,
//       description:
//         "A light snack at only 100-Calorie Strawberry flavour Helps with weight management.",
//       image: "/img/product/91KI5feNglL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: false,
//       stock: 11
//     },

//     {
//       title: "Mott's Fruitsations Veggie Gluten Free Banana",
//       price: 7.5,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/71pRLEUCI7L._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: true,
//       stock: 12
//     },
//     {
//       title: "Kellogg's Rice Krispies Triangle Bars",
//       price: 7.98,
//       description:
//         "Source of 2 essential nutrients Trans Fat Free One JUMBO Box.",
//       image: "/img/product/817ZEhSGwLL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: false,
//       stock: 14
//     },
//     {
//       title: "Welchs Mixed Fruit Snacks, 100 ct.",
//       price: 18.7,
//       description:
//         "Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin C.",
//       image: "/img/product/61z5wz94O7L._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: true,
//       onSale: true,
//       stock: 63
//     },
//     {
//       title: "Ritz Crackers Cheese Sandwich, 354 Grams",
//       price: 2.99,
//       description: "Buttery, Flaky Goodness, Cheesy Sandwiches.",
//       image: "/img/product/81pt0jH8RQL._AC_UL640_QL65_ML3_.jpg",
//       category: "Grocery",
//       tseller: true,
//       onSale: true,
//       stock: 12
//     },
//     {
//       title: "BROOKSIDE Dark Chocolate",
//       price: 4.99,
//       description:
//         "One 595g bag of BROOKSIDE Dark Chocolate, Acai & Blueberry flavour. Perfect for sharing. And Soft fruit flavoured centres covered in dark chocolate. Treat yoursel, afted pairing, only from BROOKSIDE..",
//       image: "/img/product/71gzovNQTgL._AC_UL640_QL65_ML3_.jpg",
//       category: "Snack",
//       bestseller: false,
//       onSale: true,
//       stock: 23
//     },
//     {
//       title:
//         "Reese Puffs Treats Peanut Butter & Cocoa Flavour Cereal Bars, 5 Count",
//       price: 2.39,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",

//       egory: "Grocery",
//       subcategory: "Snack",
//       bestseller: false,
//       onSale: true,
//       stock: 12
//     },
//     {
//       title: "Peace Tea Razzleberry 695mL Cans, 12 Pack",
//       price: 10.99,
//       description:
//         "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
//       image: "/img/product/81fn0MdnapL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: true,
//       stock: 13
//     },
//     {
//       title: "Peace Tea Peach Party 695mL Cans, 12 Pack",
//       price: 10.99,
//       description:
//         "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
//       image: "/img/product/81jK3zkUEhL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: true,
//       stock: 55
//     },
//     {
//       title: "A&W Root Beer, 355 mL cans",
//       price: 4.99,
//       description:
//         "Convenient pack of 12 to be enjoyed with meals or on the goBring home the authentic, delicious, creamy taste of A&W Root Beer",
//       image: "/img/product/8136MxgMUWL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: true,
//       stock: 63
//     },
//     {
//       title: "Nestea Lemon, 342mL cans, Pack of 12",
//       price: 6.99,
//       description:
//         "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
//       image: "/img/product/810cQsDuhBL._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: false,
//       onSale: true,
//       stock: 75
//     },
//     {
//       title: "Coca-Cola Coke Classic, 333mL cans, Pack of 12",
//       price: 6.99,
//       description:
//         "Bring home the authentic, delicious & refreshing taste of Coca-Cola For crisp, cold taste, enjoy chilled Made with no artificial flavors or preservatives so you get a full flavor in each sip",
//       image: "/img/product/81C2ydhp-2L._AC_UL640_QL65_ML3_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: true,
//       stock: 88
//     },
//     {
//       title: "Red Bull Energy Drink Sugar Free, 4 Pack of 250ml Cans4",
//       price: 6.99,
//       description:
//         "Red Bull Sugarfree formula contains high quality ingredients, including caffeine, taurine, and B-group vitamins.",
//       image: "/img/product/516+yiJloLL._AC_SX360_SY240_QL70_.jpg",
//       category: "Drink",
//       bestseller: true,
//       onSale: true,
//       stock: 25
//     },
//     {
//       title: 'Hisense 40" Smart TV (40H5509) [Canada Version]3',
//       price: 636.99,
//       description:
//         "Red Bull Sugarfree formula contains high quality ingredients, including caffeine, taurine, and B-group vitamins.",
//       image: "/img/product/81Y0Ir2QcsL._SL1500_.jpg",
//       category: "Television",
//       bestseller: true,
//       onSale: true,
//       stock: 47
//     },
//     {
//       title: 'VIZIO D-Series™ 24” Class (23.5" Diag.) Smart TV2',
//       price: 254.99,
//       description:
//         "SmartCast 3; 0: Finding great content and streaming high quality video is incredibly easy with SmartCast Home; Browse favorites like Netflix and Hulu right on the TV using the included remote or SmartCast Mobile app on your phone or tablet",
//       image: "/img/product/610hoL56MYL._SL1000_.jpg",
//       category: "Television",
//       bestseller: true,
//       onSale: true,
//       stock: 11
//     },
//     {
//       title: 'Hisense 50" 4k Smart TV (50H7709) [Canada Version]4',
//       price: 359.99,
//       description:
//         "Better picture quality: watch your favorite movies and TV shows in striking 4K resolution Immersive and detailed sound: DTS studio sound creates virtual surround sound for a crisp and immersive audio experience Better contrast: full Array backlighting adds a higher contrast range and color accuracy",
//       image: "/img/product/818kcYSwo1L._SL1500_.jpg",
//       category: "Television",
//       bestseller: true,
//       onSale: true,
//       stock: 6
//     },
//     {
//       title:
//         'Samsung 49" M5300 1080P Full HD LED Smart TV (2018) (UN49M5300AFXZC) [Canadian Version]3',
//       price: 399.99,
//       description:
//         "FHD Resolution for enhanced detail on a small screen SmartCast 3; 0: Finding great content and streaming high quality video is incredibly easy with SmartCast Home",

//       egory: "Electronics",
//       subcategory: "Television",
//       bestseller: true,
//       onSale: true,
//       stock: 12
//     },
//     {
//       title:
//         'All-New Fire HD 10 Tablet (10.1" 1080p full HD display, 32 GB) – Black2',
//       price: 199.99,
//       description:
//         '10.1" 1080p full HD display; 32 or 64 GB of internal storage (add up to 512 GB with microSD) Now 30% faster thanks to the new 2.0 GHz octa-core processor and 2 GB of RAM',

//       egory: "Electronics",
//       subcategory: "Tablet",
//       bestseller: false,
//       onSale: false,
//       stock: 2
//     },
//     {
//       title: "RCA 7 Inch 1GB RAM 16G Tablet MTK 2",
//       price: 54.99,
//       description:
//         "Fast High Performance MTK Quad Core Processor; 1GB RAM; 16GB Storage (MicroSD Expandable up to 128GB); Front and Rear Cameras; Battery Life up to 6 Hours",
//       image: "/img/product/71awK6Utf8L._SL1500_.jpg",
//       category: "Tablet",
//       bestseller: false,
//       onSale: false,
//       stock: 12
//     },
//     {
//       title: "Vankyo MatrixPad Z10 Tablet1",
//       price: 199.99,
//       description:
//         "【High Performance Android Tablet】VANKYO MatrixPad Z10 tablet is a 10 inch Wi-Fi Android tablet with GPS capability.It is powered by a 64-bit Quad-core high-performance processor with 3GB RAM 32GB storage, delivering quick app launches, smooth games and videos, providing a superior experience of entertainment, browse, games and shopping for everyone in the family.",
//       image: "/img/product/7199m+yETeL._SL1500_.jpg",
//       category: "Tablet",
//       bestseller: false,
//       onSale: false,
//       stock: 24
//     }
//   ];
