const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const amountOfElements = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title} 
Elements: ${amountOfElements}`);
});

const title = document.querySelectorAll("h2");
title.forEach((title) => title.classList.add("title"));

const titleItem = document.querySelectorAll("ul li ul li");
titleItem.forEach((titleItem) => titleItem.classList.add("title-item"));

const listItems = document.querySelectorAll("ul li ul");
listItems.forEach((listItem) => listItem.classList.add("list-items"));
