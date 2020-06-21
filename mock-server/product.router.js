const router = require("express").Router();
const _ = require("lodash");

const data = {
  products: [
    {
      id: '1',
      title: "Acer Predator Helios 300 Gaming Laptop",
      price: "$1,349.98",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/71bRl4ymGDL._AC_SX425_.jpg",
      desc: `9th Generation Intel Core i7-9750H 6-Core Processor (Upto 4. 5 gramHz) with Windows 10 Home 64 Bit
          NVIDIA GeForce GTX 1660 Ti Graphics with 6 GB of dedicated GDDR6 VRAM
          15. 6" Full HD (1920 x 1080) Widescreen LED-backlit IPS display (144Hz Refresh Rate, 3ms Overdrive Response Time, 300nit Brightness & 72% NTSC)
          16 GB DDR4 2666MHz Memory, 512GB PCIe NVMe SSD (2 x PCIe M. 2 Slots | 1 Slot Open for Easy Upgrades) & 1 - Available Hard Drive Bay
          Backlit Keyboard | LAN: Killer Gaming Network E2500 | Wireless: Killer DoubleShot Pro Wireless-AX 1650 WiFi 6 802. 11ac | 4th Gen All-Metal AeroBlade 3D Fan`,
      comments: [
        {author: 'Jennifer', text: `Parents bought this for my sister and this is perfect for her to start on it's good for light-medium gaming. With school converting to online it's perfect as well. This computer also has good battery life away from the charger while might use with heavy use not so much it's good though. Overall the computer is good for it's current price and an amazing deal.`},
        {author: 'Kimberly Engel', text: 'Absolutely amazing laptop! Runs games with zero lag. I was lucky to get it for $579, and would recommend checking this frequently as it goes super fast at that price.'}
      ]
    },
    {
      id: '2',
      title: "ROG Zephyrus G15 (2020)",
      price: "$1,299.99",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/71EarUTA6eL._AC_SX679_.jpg",
      desc: `NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 with ROG Boost (Base 1140MHz Boost 1335MHz TDP 60W)
          AMD Ryzen 7 4800HS processor (up to 4.2GHz)
          15.6” 144Hz IPS-Type Full HD (1920x1080) display
          16GB 3200MHz DDR4 RAM | 1TB PCIe NVMe M 2 SSD | Backlit Precision Gaming Keyboard | Windows 10 Home
          0.8” thin, 4.85 lbs ultra-portable form-factor
          Gig+ Wi-Fi 6 (802.11ax) | USB Type-C Charging Capable
          ROG Intelligent Cooling system with self-cleaning anti-dust tunnels preserves cooling performance and system stability`,
    },
    {
      id: '3',
      title: "Lenovo Ideapad L340 Gaming Laptop",
      price: "$859.00",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/81XvT%2BahkoL._AC_SX679_.jpg",
      desc: `A new dimension of gaming performance awaits - with 9th-generation Intel Core i5 processors, the IdeaPad L340 gaming has the power you need to outshoot, outrun, and outsmart anyone. Includes 8GB DDR4 RAM and 512GB NVMe SSD
          Take it to the next level - with the latest NVIDIA GeForce Graphics behind you, you can tame the hottest titles with faster, smoother, and more power-efficient gameplay. Plus, the 15.6-Inch Screen delivers a stunning full HD IPS Display with 1920 x 1080 resolution
          A portal to a new sound Dimension - hardwired into every IdeaPad L340 gaming is advanced Dolby Audio technology. Take your mobile gaming experience to another dimension and have a real blast along the way
          Control your own Fate - GAME in 'quick' Mode or work in 'quiet' Mode. It's your call with a simple function setting that lets you shift gears between modes, instantly.
          Final product may vary slightly from image`,
    },
    {
      id: '4',
      title: "ASUS TUF Gaming Laptop, 17.3”",
      price: "$814.99",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/811khTQc-qL._AC_SX569_.jpg",
      desc: `Quad-core AMD Ryzen 5 3550H (2M Cache, up to 3.7GHz)
          AMD Radeon RX560X graphics
          17. 3” FHD (1920x1080) IPS type display
          512GB PCIe NVMe M. 2 SSD | 8GB DDR4 RAM | Windows 10 Home
          Portable design with 1.02” thin profile gaming laptop
          Dual fans with anti-dust technology
          Red-backlit keyboard rated for 20-million keystroke durability`,
    },
    {
      id: '5',
      title: '2019 ASUS TUF 17.3"',
      price: "$969.00",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/61UUq%2BRQTXL._AC_SX466_.jpg",
      desc: `The powerful AMD Ryzen 7 3750H Quad-Core (2. 3GHz base frequency, up to 4. 0GHz burst frequency) APU is quick and versatile, with quad cores and eight threads capable of cutting through day-to-day work.
          17. 3" IPS-Level Full HD Widescreen LED Display (1920 x 1080) Display boasts impressive color and clarity. NVIDIA GeForce GTX 1650 Graphics backed by 4GB GDDR5 dedicated video memory for an ultrafast, advanced GPU to fuel your games.
          8GB DDR4 2400MHz Memory for full-power multitasking; 512GB M. 2 NVMe PCIe SSD for faster performance and better reliability; Pci-e SSDs are great for major gaming applications, multiple servers, daily backups, and more.
          802. 11 Wireless-AC + Bluetooth 4. 2, 1 x USB 3. 1, 1 x USB 2. 0, 1 x HDMI 2. 0
          Windows 10 Home 64-bit; RGB backlit keyboard allows you to enjoy comfortable and accurate typing, even in dim lighting.`,
    },
    {
      id: '6',
      title: "Acer Predator Helios 300",
      price: "$1,199.77",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/61rjV21bzfL._AC_SX355_.jpg",
      desc: `8th Generation Intel Core i7-8750H 6-Core Processor (Up to 4.1GHz) with Windows 10 Home 64 Bit
          NVIDIA GeForce GTX 1060 Overclockable Graphics with 6 GB of dedicated GDDR5 VRAM
          15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display (144Hz Refresh Rate, 300nit Brightness & 72% NTSC )
          16GB DDR4 2666MHz DRAM Memory & 256GB PCIe NVMe SSD | Extra empty accessible slot for 2.5 inch hard drive or SSD.Maximum Power Supply Wattage:180 W
          Gigabit Wi-Fi |Backlit Keyboard | USB 3.1 (Type C) | Dual All-Metal AeroBlade 3D Fan Cooling | Metal Chassis.Battery Capacity:3320 mAh
          Up to 7-hours of battery life`,
    },
  ],
};
router.get("/", (req, res) => {
  if(req.query.q) {
    const result = _.filter(data.products, item => 
      item.title.toLowerCase().includes(req.query.q.toLowerCase()) || item.desc.toLowerCase().includes(req.query.q.toLowerCase()));
    res.json(result);
  } else {
    res.json(data.products);
  }
  
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {id: req.params.id}));
});

router.get("/:id/comments", (req, res) => {
  res.json(_.get(_.find(data.products, {id: req.params.id}), 'comments'));
});


router.post("/:id/comments", (req, res) => {
 const product = _.find(data.products, {id: req.params.id});
 if(product) {
   product.comments = product.comments || [];
   product.comments.push(req.body);
   res.end();
 } else {
   res.status(404).json(new Error('Product not found'));
 }
});

module.exports = router;
