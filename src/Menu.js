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
		this.eventHandler_.add(dom.on('#' + this.element.id + ' .menu-item-leaf', 'click', this.handleItemClick_.bind(this)));
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
		dom.toggleClasses(this.element, 'open');

		dom.toggleClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	getMenuItemSubmenu_() {
		return this.element.querySelector('.' + Menu.MENU_ITEM_SUBMENU);
	}

	setItems_(val) {
		var items = [];

		for (var i = 0; i < val.length; i++) {
			if (!(val[i] instanceof steel.MenuItem)) {
				items.push(new steel.MenuItem(val[i]));
			}
			else {
				items.push(val[i]);
			}
		}
		return items;
	}
}

Menu.ATTRS = {
	items:{
		setter: 'setItems_',
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
