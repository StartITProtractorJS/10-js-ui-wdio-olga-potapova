export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement();
    }

    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-email').setValue(data.telephone);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }

    continue() {
        const continueButton = this.root.$('input#button-guest');
        expect(continueButton).toBeVisible({message:'Continue button didn\'t appear'});
        continueButton.click();
    }
}