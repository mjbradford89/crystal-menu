'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'menu.css',
	bundleFileName: 'menu.js',
	globalName: 'steel',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'steel-menu'
});
