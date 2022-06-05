let customers = [
  {
    id: 0,
    name: "SANDY",
    comment:
      " Aliquam veniam molestiae vero totam quasi unde, accusantium asperiores animi sequi impedit voluptatum atque a incidunt natus accusamus ad nisi vitae amet fugit fuga cumque et in! Obcaecati ut, earum non voluptatem quia consequuntur dignissimos placeat qui mollitia, nostrum, accusamus eveniet quo eligendi atque deleniti. Officia facere esse unde dignissimos distinctio? Hic?",
    picture: "./Pics/customer-0.jpeg",
  },
  {
    id: 1,
    name: "ANN",
    comment:
      "Soluta sequi excepturi numquam cupiditate tempore, et dolores dolor explicabo iusto, officiis culpa quidem fuga ipsam dicta alias. In, voluptatem repudiandae praesentium tempora consequuntur itaque cum iure magnam libero sit non eius quasi, beatae architecto ab necessitatibus. At, voluptate porro.",
    picture: "./Pics/customer-1.jpeg",
  },
  {
    id: 2,
    name: "RICHARD",
    comment:
      "  Atque, veritatis. Dolores adipisci iusto fugit. Porro, et accusantium. Inventore vel laborum ducimus quam quasi recusandae quaerat veniam. ",
    picture: "./Pics/customer-2.jpeg",
  },
  {
    id: 3,
    name: "SAMUEL",
    comment:
      "Cupiditate provident laboriosam explicabo nobis, sed reprehenderit, excepturi eveniet, aperiam qui voluptate iure. Totam voluptatem, error cum porro harum expedita voluptatibus ex eaque, nisi perferendis nam iusto provident itaque exercitationem officiis ipsum, amet sequi vel tempora explicabo qui facilis.",
    picture: "./Pics/customer-3.jpeg",
  },
  {
    id: 4,
    name: "KENDRICK",
    comment:
      "Delectus itaque, nostrum eius tempore quaerat veritatis asperiores sit perspiciatis saepe dolore dignissimos temporibus unde optio et ex beatae vel nihil cupiditate natus eum sint ullam!",
    picture: "./Pics/customer-4.jpeg",
  },
];
let currentCustomer = customers[0].id;
const customerImage = document.querySelector("img");
const customerName = document.querySelector(".card-title");
const customerComment = document.querySelector("#comment");
const nextButton = document.querySelector(".right");
const prevButton = document.querySelector(".left");
document.addEventListener("DOMContentLoaded", loadCustomer);
nextButton.onclick = nextCustomer;
prevButton.onclick = prevCustomer;
function nextCustomer() {
  if (currentCustomer == 4) {
    currentCustomer = customers[0].id;
    loadCustomer();
  } else {
    currentCustomer++;
    loadCustomer();
  }
}

function prevCustomer() {
  if (currentCustomer == 0) {
    currentCustomer = customers[4].id;
    loadCustomer();
  } else {
    currentCustomer--;
    loadCustomer();
  }
}

function loadCustomer() {
  customerImage.src = customers[currentCustomer].picture;
  customerName.textContent = customers[currentCustomer].name;
  customerComment.textContent = customers[currentCustomer].comment;
}
