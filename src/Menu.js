'use strict';

import core from 'bower:metal/src/core';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import dom from 'bower:metal/src/dom/dom';
import Dropdown from 'bower:steel-dropdown/src/Dropdown';
import './Menu.soy';
import './MenuItem.js';

class Menu extends Dropdown {
	constructor(opt_config) {
		super(opt_config);
	}

	attached() {
		super.attached();
	}

	handleItemClick_(event) {
		this.emit('itemSelected', event);
	}

	close() {
		super.close();

		dom.removeClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	open() {
		super.open();

		dom.addClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	toggle() {
		if (!this.disabled) {
			dom.toggleClasses(this.element, 'open');

			dom.toggleClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
		}
	}

	getMenuItemSubmenu_() {
		return this.element.querySelector('.' + Menu.MENU_ITEM_SUBMENU);
	}
}

Menu.ATTRS = {
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	items:{
		validator: Array.isArray,
		value: []
	},

	layoutMode: {
		validator: core.isString,
		value: 'overlay'
	}
};

Menu.ELEMENT_CLASSES = 'menu';
Menu.MENU_ITEM_SUBMENU = 'menu-item-submenu';
Menu.MENU_ITEM_SUBMENU_OPEN = 'menu-item-submenu-open';

ComponentRegistry.register('Menu', Menu);

export default Menu;
