const products = {
  fakeDB: [
    {
      id: 01,
      title: "Ipad MINI",
      price: 499.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/ipad_mini.png",
      category: "Electronics",
      subcategory: "Tablet",
      bastseller: false,
      onSale: false
    },
    {
      id: 02,
      title: "Microsoft Surface Laptop 3",
      price: 1299.99,
      description:
        "Touch-Screen – Intel Core i5 - 8GB Memory - 256GB Solid State Drive (Latest Model) – Cobalt Blue with Alcantara",
      image: "/img/product/MicrosoftSurfaceLaptop3.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: true,
      onSale: false
    },
    {
      id: 03,
      title: "HP ENVY 13",
      price: 499.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/HPENVY13-ah0001na.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: false,
      onSale: false
    },
    {
      id: 04,
      title: "Apple MacBook Air",
      price: 1799.99,
      description:
        "13-inch, Latest Model, 8GB RAM, 256GB Storage, 1.6GHz Intel Core i5",
      image: "/img/product/AppleMacBookAir.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: true,
      onSale: false
    },
    {
      id: 05,
      title: "New Apple MacBook Pro ",
      price: 3429.99,
      description:
        "Ninth-generation 6-core Intel Core i7 processor Stunning 16-inch Retina display with True Tone technology Touch Bar and Touch ID.",
      image: "/img/product/AppleMacBookAir.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: false,
      onSale: false
    },
    {
      id: 06,
      title: "Apple TV 4K (32GB)",
      price: 170.99,
      description:
        "K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality.",
      image: "/img/product/AppleTV4K.jpg",
      category: "Electronics",
      subcategory: "Television",
      bastseller: false,
      onSale: false
    },
    {
      id: 07,
      title: "Philips 32-INch HD LED TV",
      price: 599.99,
      description:
        "Included in delivery: Philips 32PHT4503/05 TV Ultra-slim 32 inch LED TV (HD, Pixel Plus HD, 200 PPI, DTS 2.0+Digital Out, HDMI, USB) black (2018/2019 model); remote control, batteries, power cord, quick start guide, legal and safety brochure, table top stand",
      image: "/img/product/Philips32PHT4503.jpg",
      category: "Electronics",
      subcategory: "Television",
      bastseller: false,
      onSale: false
    },
    {
      id: 08,
      title: "Lenovo Chromebook C330",
      price: 499.99,
      description:
        "HIGH PERFORMANCE LAPTOP: The Chromebook C330 is equipped with a MediaTek MT8173C Processor, Chrome OS, 4 GB LPDDR3, 64 GB eMMC and so much more.",
      image: "/img/product/LenovoChrombookC330.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: true,
      onSale: false
    },
    {
      id: 09,
      title: "Samsung Galaxy Tab A8",
      price: 792.99,
      description:
        "Dual camera - take share-owrthy shots with the rear camera or make video calls with the front camera. Bluetooth version - bluetooth v4.2.",
      image: "/img/product/SabsungGalaxyTabA8.jpg",
      category: "Electronics",
      subcategory: "Tablet",
      bastseller: true,
      onSale: false
    },
    {
      id: 10,
      title: "Asus VivoBook S15 ",
      price: 942.99,
      description:
        "Ergonomic chiclet backlit keyboard with fingerprint sensor activated via Windows Hello. Exclusive Ergolift design for improved typing position.",
      image: "/img/product/AsusVivoBookS15.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: false,
      onSale: false
    },
    {
      id: 11,
      title: "ROG Strix III G Gaming Laptop",
      price: 499.99,
      description:
        "ROG Intelligent Cooling thermal system with dual 12V fans, triple radiators, anti-dust technology, and adjustable fan modes.",
      image: "/img/product/ROGStrixIIIGGamingLaptop.jpg",
      category: "Electronics",
      subcategory: "Laptop",
      bastseller: true,
      onSale: true
    },
    {
      id: 12,
      title: "NEWYES 8.5 Inches Colorful Doodle Board ",
      price: 18.02,
      description:
        "This NEWYES writing tablet is only sold by Homes-tech. You will get fake products if you purchase from other shops. Please be careful before place order!!!★Adopting advanced pressure-sensitive technology, LCD writing surface will create lines of different thickness based on how hard you push.",
      image: "/img/product/NEWYES8.5InchesColorfulDoodleBoard.jpg",
      category: "Electronics",
      subcategory: "Tablet",
      bastseller: false,
      onSale: false
    },
    {
      id: 13,
      title: "AILIHEN I35 Kids Headphones",
      price: 19.63,
      description:
        "AILIHEN Comfortable Kids Headphones: A must gift headphones with an adorable design and pillow soft headband for ultra comfort. What’s more, memory-protein cushioned earmuffs also help you minimize tiredness.",
      image: "/img/product/AILIHENI35KidsHeadphones.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: false,
      onSale: false
    },
    {
      id: 14,
      title: "Neewer Studio Monitor Headphones",
      price: 499.99,
      description:
        "IMPRESSIVE SOUND QUALITY: Precise closed cavity structure; Newest designed 45mm large-aperture driver with rare earth magnets and copper-clad aluminum wire voice coils to provide wider dynamic range and make sure safe and stable output even meet instant high power; Circumaural design contours around the ears for excellent sound isolation in loud environments.",
      image: "/img/product/710Og08oG1L._SL1500_.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: false,
      onSale: false
    },
    {
      id: 15,
      title: "COWIN E7 Active Noise Cancelling Headphones",
      price: 79.99,
      description:
        "Active Noise Cancelling technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.",
      image: "/img/product/COWINE7ActiveNoiseCancellingHeadphones.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: true,
      onSale: true
    },
    {
      id: 16,
      title: "Wired Earbuds C300",
      price: 58.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/WiredEarbudsC300.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: true,
      onSale: true
    },
    {
      id: 17,
      title: "Kellogg's Special K Fruit Crisps",
      price: 4.49,
      description:
        "A light snack at only 100-Calorie Strawberry flavour Helps with weight management.",
      image: "/img/product/91KI5feNglL._AC_UL640_QL65_ML3_.jpg",
      category: "Electronics",
      subcategory: "Snack",
      bastseller: false,
      onSale: true
    },

    {
      id: 19,
      title: "Mott's Fruitsations Veggie Gluten Free Berry",
      price: 7.5,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/71pRLEUCI7L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: true
    },
    {
      id: 20,
      title: "Kellogg's Rice Krispies Square Bars",
      price: 7.98,
      description:
        "Source of 2 essential nutrients Trans Fat Free One JUMBO Box.",
      image: "/img/product/817ZEhSGwLL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: false
    },
    {
      id: 21,
      title: "Welchs Mixed Fruit Snacks, 90 ct.",
      price: 18.7,
      description:
        "Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin C.",
      image: "/img/product/61z5wz94O7L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: true,
      onSale: true
    },
    {
      id: 22,
      title: "Ritz Crackers Cheese Sandwich, 304 Grams",
      price: 2.99,
      description: "Buttery, Flaky Goodness, Cheesy Sandwiches.",
      image: "/img/product/81pt0jH8RQL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: true,
      onSale: true
    },
    {
      id: 23,
      title: "BROOKSIDE Dark Chocolate",
      price: 4.99,
      description:
        "One 595g bag of BROOKSIDE Dark Chocolate, Acai & Blueberry flavour. Perfect for sharing. And Soft fruit flavoured centres covered in dark chocolate. Treat yoursel, afted pairing, only from BROOKSIDE..",
      image: "/img/product/71gzovNQTgL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: false
    },
    {
      id: 24,
      title:
        "Reese Puffs Treats Peanut Butter & Cocoa Flavour Cereal Bars, 5 Count",
      price: 2.39,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/81xgdpjbx3L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: false
    },
    {
      id: 25,
      title: "Peace Tea Razzleberry 695mL Cans, 12 Pack",
      price: 10.99,
      description:
        "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
      image: "/img/product/81fn0MdnapL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: false
    },
    {
      id: 26,
      title: "Peace Tea Peach Party 695mL Cans, 12 Pack",
      price: 10.99,
      description:
        "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
      image: "/img/product/81jK3zkUEhL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: false
    },
    {
      id: 27,
      title: "A&W Root Beer, 355 mL cans",
      price: 4.99,
      description:
        "Convenient pack of 12 to be enjoyed with meals or on the goBring home the authentic, delicious, creamy taste of A&W Root Beer",
      image: "/img/product/8136MxgMUWL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: false
    },
    {
      id: 28,
      title: "Nestea Lemon, 341mL cans, Pack of 12",
      price: 6.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/810cQsDuhBL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: false,
      onSale: false
    },
    {
      id: 29,
      title: "Coca-Cola Coke Classic, 335mL cans, Pack of 12",
      price: 6.99,
      description:
        "Bring home the authentic, delicious & refreshing taste of Coca-Cola For crisp, cold taste, enjoy chilled Made with no artificial flavors or preservatives so you get a full flavor in each sip",
      image: "/img/product/81C2ydhp-2L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: false
    },
    {
      id: 30,
      title: "Red Bull Energy Drink Sugar Free, 4 Pack of 250ml Cans",
      price: 6.99,
      description:
        "Red Bull Sugarfree formula contains high quality ingredients, including caffeine, taurine, and B-group vitamins.",
      image: "/img/product/516+yiJloLL._AC_SX360_SY240_QL70_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: false
    },
    {
      id: 31,
      title: "Neewer Studio 2",
      price: 499.99,
      description:
        "IMPRESSIVE SOUND QUALITY: Precise closed cavity structure; Newest designed 45mm large-aperture driver with rare earth magnets and copper-clad aluminum wire voice coils to provide wider dynamic range and make sure safe and stable output even meet instant high power; Circumaural design contours around the ears for excellent sound isolation in loud environments.",
      image: "/img/product/710Og08oG1L._SL1500_.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: false,
      onSale: false
    },
    {
      id: 32,
      title: "COWIN E8 Active Noise Cancelling Headphones",
      price: 79.99,
      description:
        "Active Noise Cancelling technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.",
      image: "/img/product/COWINE7ActiveNoiseCancellingHeadphones.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: true,
      onSale: false
    },
    {
      id: 33,
      title: "Wired Earbuds C400",
      price: 58.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/WiredEarbudsC300.jpg",
      category: "Electronics",
      subcategory: "Headphone",
      bastseller: true,
      onSale: false
    },
    {
      id: 34,
      title: "Kellogg's Special F Fruit Crisps",
      price: 4.49,
      description:
        "A light snack at only 100-Calorie Strawberry flavour Helps with weight management.",
      image: "/img/product/91KI5feNglL._AC_UL640_QL65_ML3_.jpg",
      category: "Electronics",
      subcategory: "Snack",
      bastseller: false,
      onSale: false
    },

    {
      id: 35,
      title: "Mott's Fruitsations Veggie Gluten Free Banana",
      price: 7.5,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/71pRLEUCI7L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: true
    },
    {
      id: 36,
      title: "Kellogg's Rice Krispies Triangle Bars",
      price: 7.98,
      description:
        "Source of 2 essential nutrients Trans Fat Free One JUMBO Box.",
      image: "/img/product/817ZEhSGwLL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: false
    },
    {
      id: 37,
      title: "Welchs Mixed Fruit Snacks, 100 ct.",
      price: 18.7,
      description:
        "Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin CBullet Feature 4Fruit Gummy Snacks Candy .9-Ounce Bag 100-Percent Vitamin C.",
      image: "/img/product/61z5wz94O7L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: true,
      onSale: true
    },
    {
      id: 38,
      title: "Ritz Crackers Cheese Sandwich, 354 Grams",
      price: 2.99,
      description: "Buttery, Flaky Goodness, Cheesy Sandwiches.",
      image: "/img/product/81pt0jH8RQL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: true,
      onSale: true
    },
    {
      id: 39,
      title: "BROOKSIDE Dark Chocolate",
      price: 4.99,
      description:
        "One 595g bag of BROOKSIDE Dark Chocolate, Acai & Blueberry flavour. Perfect for sharing. And Soft fruit flavoured centres covered in dark chocolate. Treat yoursel, afted pairing, only from BROOKSIDE..",
      image: "/img/product/71gzovNQTgL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: true
    },
    {
      id: 40,
      title:
        "Reese Puffs Treats Peanut Butter & Cocoa Flavour Cereal Bars, 5 Count",
      price: 2.39,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/81xgdpjbx3L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Snack",
      bastseller: false,
      onSale: true
    },
    {
      id: 41,
      title: "Peace Tea Razzleberry 695mL Cans, 12 Pack",
      price: 10.99,
      description:
        "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
      image: "/img/product/81fn0MdnapL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: true
    },
    {
      id: 42,
      title: "Peace Tea Peach Party 695mL Cans, 12 Pack",
      price: 10.99,
      description:
        "Convenient pack of 12 so you have plenty to enjoy. Perfect size to be enjoyed with meals, snacks or on the go.",
      image: "/img/product/81jK3zkUEhL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: true
    },
    {
      id: 43,
      title: "A&W Root Beer, 355 mL cans",
      price: 4.99,
      description:
        "Convenient pack of 12 to be enjoyed with meals or on the goBring home the authentic, delicious, creamy taste of A&W Root Beer",
      image: "/img/product/8136MxgMUWL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: true
    },
    {
      id: 44,
      title: "Nestea Lemon, 341mL cans, Pack of 12",
      price: 6.99,
      description:
        "An iPad is a tablet PC designed by Apple Inc. The iPad features a 9.7-inch touch screen that users can interact with directly through finger strokes. This portable device can be used for browsing the Web, listening to music, watching movies, reading e-books and playing games, among other things.",
      image: "/img/product/810cQsDuhBL._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: false,
      onSale: true
    },
    {
      id: 45,
      title: "Coca-Cola Coke Classic, 335mL cans, Pack of 12",
      price: 6.99,
      description:
        "Bring home the authentic, delicious & refreshing taste of Coca-Cola For crisp, cold taste, enjoy chilled Made with no artificial flavors or preservatives so you get a full flavor in each sip",
      image: "/img/product/81C2ydhp-2L._AC_UL640_QL65_ML3_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: true
    },
    {
      id: 46,
      title: "Red Bull Energy Drink Sugar Free, 4 Pack of 250ml Cans",
      price: 6.99,
      description:
        "Red Bull Sugarfree formula contains high quality ingredients, including caffeine, taurine, and B-group vitamins.",
      image: "/img/product/516+yiJloLL._AC_SX360_SY240_QL70_.jpg",
      category: "Grocery",
      subcategory: "Drink",
      bastseller: true,
      onSale: true
    }
  ],
  getAllProducts() {
    return this.fakeDB;
  }
};

module.exports = products;
