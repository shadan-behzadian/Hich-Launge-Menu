const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "dinner",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "dinner",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "dinner",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `steak is our favourt. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".conatiner-btn");

// Load all items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

//display menu items dynamically
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    console.log(item);
    return ` <div class='menu-item'>
<div class='item-photo'>
    <img src=${item.img}  class='photo' alt=${item.title}>
</div>

 <div class='item-info'>
     <div class='item-name-price'>
        <h4 class='food-title'>${item.title}</h4>
        <h4 class='food-price'>$${item.price}</h4>
     </div>
        <div class='item-text'>
        <p>${item.desc}</p>
    </div>
 </div >

</div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu)
  sectionCenter.innerHTML = displayMenu;
}
//display buttons to Filter menu items
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map((category) => {
      return `<button class='filter-btn' type='button' data-id=${category}>${category}</button>`;
    })
    .join("");
  console.log(categoryBtn);
  //Remmeber: buttons are added dynamically using JS. They can only be accessed after they are added.
  container.innerHTML = categoryBtn;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id)
      const catagory = e.currentTarget.dataset.id;
      const menuCatagory = menu.filter(function (menuItems) {
        if (catagory === menuItems.category) {
          return menuItems;
        }
      });
      // console.log(menuCatagory);
      if (catagory === "all") {
        return displayMenuItems(menu);
      } else {
        return displayMenuItems(menuCatagory);
      }
    });
  });
}
