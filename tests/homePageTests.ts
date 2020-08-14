import { Selector } from 'testcafe';
import homePage from '../models/homePage';
import ourServicesPage from '../models/ourServicesPage';

fixture `Home page`
    .page `https://www.standprof.co.uk/`;

    test('Client sees title OUR TOP SERVICES', async t => {
        await t.expect((await homePage.isHeaderDisplayed('OUR TOP SERVICES'))).eql(true);
    });

    test('Client can find a page about services', async t => {
        await homePage.clickOurServices();
        await t.expect(await ourServicesPage.isOpened()).eql(true);
    });