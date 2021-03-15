export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
        //this.root = root //is done like this by declaration above 
    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addButton = this.root.$('button[onclick*="cart.add"]');
        expect(addButton).toBeVisible(); //toBeVisible запускает 3секундное ожидание элемента
        addButton.click();
    };

    addToWishList() {
        
    }

    compareThisProduct() {

    }
}