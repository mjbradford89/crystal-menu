'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'menu.css',
	bundleFileName: 'menu.js',
	globalName: 'crystal',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'crystal-menu'
});
