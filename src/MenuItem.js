'use strict';

import core from 'bower:metal/src/core';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import './MenuItem.soy.js';
import './Menu.js';

/**
 * MenuItem component.
 */
class MenuItem extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}

	setSubmenu_(val) {
		if (!val || val instanceof steel.Menu) {
			return;
		}

		val = new steel.Menu(val);

		return val;
	}
}

/**
 * Default menuitem elementClasses.
 * @default menuitem
 * @type {String}
 * @static
 */
MenuItem.ELEMENT_CLASSES = 'menuitem';

/**
 * MenuItem attributes definition.
 * @type {Object}
 * @static
 */
MenuItem.ATTRS = {
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	divider: {
		validator: core.isBoolean,
		value: false
	},

	header: {},

	submenu: {
		setter: 'setSubmenu_',
		validator: function(val) {
			return core.isObject(val);
		},
		value: null
	}
};

ComponentRegistry.register('MenuItem', MenuItem);

export default MenuItem;
