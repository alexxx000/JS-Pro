"use strict";
// const goods = [
//   { title: "Shirt", price: 150 },
//   { title: "Socks", price: 50 },
//   { title: "Jacket", price: 350 },
//   { title: "Shoes", price: 250 },
// ];
// const renderGoodsItem = (title = "Someitem", price = 55) => {
//   return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };
// const renderGoodsList = (list) => {
//   let goodsList = list
//     .map((item) => renderGoodsItem(item.title, item.price))
//     .join("");
//   document.querySelector(".goods-list").innerHTML = goodsList;
// };
// renderGoodsList(goods);
class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Shoes", price: 250 },
    ];
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
  GoodsList() {
    let summHtml = this.goods.reduce((accum, item) => (accum += item.price), 0);
    document.querySelector(
      ".goods-summ"
    ).innerHTML = `<i>Стоимость товаров: ${summHtml} $</i>`;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.GoodsList();
