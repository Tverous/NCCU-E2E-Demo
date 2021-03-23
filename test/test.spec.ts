import { it, expect, describe } from '../nccu_folio.ts';

describe('COOLPC - Demo', () => {
    it("GTX 1650", async ({ host, page }) => {
        await page.goto(`${host}`);

        await page.click('button.adClose');

        await page.click('div.diyRow:nth-of-type(15) li.plus');

        await page.click('span:text-matches(".*GT710.*", "i")');

        await page.click('div.groupBox  div.left  > div:not(.noStock) > span');

        await page.click('button.btnCart');

        await page.click('button.btn-next');

        await page.click('input.name');

        await page.fill('input.name', 'Testonly');
    });
})
