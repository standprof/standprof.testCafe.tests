import { Selector, t } from 'testcafe';

class ourServicesPage {
    
    constructor(){
    }

    async isOpened(): Promise<boolean> {
        return Selector(`h2`).withText('OUR SERVICES').visible;
    }
}

export default new ourServicesPage();