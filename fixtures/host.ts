export const init_host_fixture = (baseFolio) => {
	type HostFixture = {
		host: string
	}

	const builder = baseFolio.extend<HostFixture>();
	builder.host.init(async ({ }, run) => {
		await run('https://www.sinya.com.tw/diy')
	})

	return builder.build()
}
