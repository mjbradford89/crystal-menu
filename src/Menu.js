'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import EventHandler from 'bower:metal/src/events/EventHandler';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './Menu.soy';
import './MenuItem.js';
import 'bower:steel-dropdown/src/Dropdown';

class Menu extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
		this.eventHandler_ = new EventHandler();
	}

	attached() {
		super.attached();
		this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
	}

	close() {
		dom.removeClasses(this.element, 'open');

		dom.removeClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
	}

	getMenuItemSubmenu_() {
		return this.element.querySelector('.' + Menu.MENU_ITEM_SUBMENU + ' .dropdown-menu');
	}

	handleDocClick_(event) {
		if (this.element.contains(event.target)) {
			return;
		}
		this.close();
	}

	handleItemClick_(event) {
		var menuItem = event.handledByComponent;

		if ((menuItem && !menuItem.disabled && !menuItem.submenu) || event.closeParents) {
			event.closeParents = true;
			this.emit('itemSelected', event);
			this.close();
		}
	}

	open() {
		dom.addClasses(this.element, 'open');

		dom.addClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	toggle() {
		if (!this.disabled) {
			dom.toggleClasses(this.element, 'open');

			dom.toggleClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
		}
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
	},

	position: {
		validator: core.isString,
		value: 'down'
	}
};

Menu.ELEMENT_CLASSES = 'menu';
Menu.MENU_ITEM_SUBMENU = 'menu-item-submenu';
Menu.MENU_ITEM_SUBMENU_OPEN = 'menu-item-submenu-open';

ComponentRegistry.register('Menu', Menu);

export default Menu;
