const path = require( "path" );
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const MiniCssExtractWebpackPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve( __dirname, "./public/js" ),
		filename: "main.js",
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [ { loader: "babel-loader" } ],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: false,
						}
					}
					],
			},
			{
				test: /\.vue$/,
				use: [ { loader: "vue-loader" } ],
			},
			{
				test: /\.(ttf|otf|eot|woff2?|svg|png|jpe?g|gif|ico|mp4|webm)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						}
					}
				]
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractWebpackPlugin( {
			filename: 'css/[name].css',
		} ),
	]


};
