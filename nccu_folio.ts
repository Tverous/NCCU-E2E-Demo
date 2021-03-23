import { folio as baseFolio } from "@playwright/test";
import { init_host_fixture } from './fixtures/host.ts';

let folio = baseFolio;

const init_fixture_array = [
	init_host_fixture,
];

init_fixture_array.forEach(init_fixture => {
	let result_folio = init_fixture(folio);

	if (!result_folio) {
		throw new Error('Failed to init fixture');
	}

	folio = result_folio;
});

export const synoFolio = folio;
export const it = synoFolio.it;
export const describe = synoFolio.describe;
export const expect = synoFolio.expect;
