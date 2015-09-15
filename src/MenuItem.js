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
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);
	}
}

/**
 * Default menu elementClasses.
 * @default menu
 * @type {string}
 * @static
 */
MenuItem.ELEMENT_CLASSES = 'menuitem';

/**
 * Default menu tag name.
 * @default li
 * @type {string}
 * @static
 */
MenuItem.ELEMENT_TAG_NAME = 'li';

/**
 * Attrbutes definition.
 * @type {!Object}
 * @static
 */
MenuItem.ATTRS = {
	/**
	 * Boolean controlling weather the menu item is disabled or enabled.
	 * @type {!boolean}
	 * @default false
	 */
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * Boolean controlling weather the menu item is a divider.
	 * @type {!boolean}
	 * @default false
	 */
	divider: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * Object representing the submenu of this menu item. controlling weather
	 * the menu item is a divider.
	 * @type {!Object|!Menu}
	 * @default null
	 */
	submenu: {
		validator: function(val) {
			return core.isObject(val);
		},
		value: null
	}
};

ComponentRegistry.register('MenuItem', MenuItem);

export default MenuItem;
