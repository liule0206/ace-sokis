// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/themes/': require("./Themes"),
		'/about/': require("./About"),
		'/detail/:id': require("./detail")
	},

	alias: {
		// '/:tab': '/'
	}
}


export default createRoutes