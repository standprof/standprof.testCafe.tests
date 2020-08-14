import { Selector } from 'testcafe';
import homePage from '../models/homePage';

fixture `Home page`
    .page `https://www.standprof.co.uk/`;

    test('Client sees title OUR TOP SERVICES', async t => {
        await t.expect((await homePage.isHeaderDisplayed('OUR TOP SERVICES')).visible).eql(true);
    });