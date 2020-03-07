const config = {
	"env": {
		"test": {
			"presets": [
				[
					"@babel/preset-env",
					{
						"targets": {
							"node": "current"
						}
					}
				]
			]
		}
	}
}

export default config
