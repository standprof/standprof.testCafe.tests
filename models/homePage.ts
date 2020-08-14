import { Selector, t } from 'testcafe';

class homePage {
    constructor(){
    }

    get contactFormMessage() {
        return Selector(`#contactFormResponseContainer`);
    }
    async sendEmail(name: string, emailAddress: string, details: string) {
        await t
        .typeText(`[type = 'text']`, name)
        .typeText(`[type = 'email']`, emailAddress)
        .typeText(`[name='Details']`, details)
        .click(`.contact-form-submit-btn`)
    }

    async isHeaderDisplayed(text: string): Promise<boolean> {
        return Selector(`h2`).withText(text).visible;
    }
}

export default new homePage();