import { Selector } from 'testcafe';
import homePage from './models/homePage';

fixture `Send email tests`
    .page `https://www.standprof.co.uk/`;

    test('Can send an email', async t => {
        await homePage.sendEmail('TestCafeUser', `tester1@standprof.co.uk`, 'learning testcafe');
        await t.expect(homePage.contactFormMessage.visible).eql(true)
        await t.expect(homePage.contactFormMessage.innerText).eql('Thank you for your message.');

    });