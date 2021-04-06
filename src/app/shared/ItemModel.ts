export class ItemsDetails {
  id: number;
  item_name: string;
  price: number;
  is_added_cart: boolean;
  constructor(id: number, item_name: string, price: number, is_added_cart: boolean) {
    this.id = id;
    this.item_name = item_name;
    this.price = price;
    this.is_added_cart = is_added_cart
  }
}
