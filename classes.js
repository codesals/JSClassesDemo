class store {
  constructor(name, product) {
    this.name = name;
    this.product = product;
  }

  welcomeShoppers = () =>
    console.log(
      `Welcome to ${this.name} store! We sell the best ${this.product} in town!`
    );
}

class onlineStore extends store {
  constructor(name, product, platform) {
    super(name, product);
    this.platform = platform;
  }

  welcomeShoppers = () =>
    console.log(
      `Welcome to ${this.name}! We sell the best ${this.product} on the ${this.platform}!`
    );
}

const store1 = new store("Disney", "toys");
store1.welcomeShoppers();

const store2 = new onlineStore("OmNoms", "food", "App Store");
store2.welcomeShoppers();
