'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import EventHandler from 'bower:metal/src/events/EventHandler';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './Menu.soy';
import './MenuItem.js';
import 'bower:steel-dropdown/src/Dropdown';


/**
 * Menu component.
 */
class Menu extends SoyComponent {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);
		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		super.attached();
		this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Closes the Menu.
	 */
	close() {
		dom.removeClasses(this.element, 'open');

		dom.removeClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	/**
	 * Gets the menu-item-submenu element.
	 * @protected
	 */
	getMenuItemSubmenu_() {
		return this.element.querySelector('.' + Menu.MENU_ITEM_SUBMENU + ' .dropdown-menu');
	}

	/**
	 * Handles document click in order to hide menu.
	 * @param {!Event} event
	 * @protected
	 */
	handleDocClick_(event) {
		if (this.element.contains(event.target)) {
			return;
		}
		this.close();
	}

	/**
	 * Handles item click and fires itemSelected event.
	 * @param {!Event} event
	 * @protected
	 */
	handleItemClick_(event) {
		var menuItem = event.handledByComponent;

		if ((menuItem && !menuItem.disabled && !menuItem.submenu) || event.closeParents) {
			event.closeParents = true;
			this.emit('itemSelected', event);
			this.close();
		}
	}

	/**
	 * Opens the menu.
	 */
	open() {
		dom.addClasses(this.element, 'open');

		dom.addClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
	}

	/**
	 * Toggles the menu, closing it when open or opening it when closed.
	 */
	toggle() {
		if (!this.disabled) {
			dom.toggleClasses(this.element, 'open');

			dom.toggleClasses(this.getMenuItemSubmenu_(), Menu.MENU_ITEM_SUBMENU_OPEN);
		}
	}
}

/**
 * Attrbutes definition.
 * @type {!Object}
 * @static
 */
Menu.ATTRS = {
	/**
	 * Boolean controlling weather the menu is disabled or enabled.
	 * @type {!boolean}
	 * @default false
	 */
	disabled: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * A list representing the Menu items.
	 * @type {!Array<!MenuItem>|!Array{!Object}}
	 * @default []
	 */
	items: {
		validator: Array.isArray,
		value: []
	},

	/**
	 * A string representing the layout mode of the menu. Can either be
	 * 'overlay' or 'inline'.
	 * @type {string}
	 * @default 'overlay'
	 */
	layoutMode: {
		validator: core.isString,
		value: 'overlay'
	},

	/**
	 * A string representing the position of the menu. Can either be 'down' or
	 * 'up'.
	 * @type {string}
	 * @default 'overlay'
	 */
	position: {
		validator: core.isString,
		value: 'down'
	}
};

/**
 * Default menu elementClasses.
 * @default menu
 * @type {string}
 * @static
 */
Menu.ELEMENT_CLASSES = 'menu';

/**
 * The CSS class added to submenus.
 * @type {string}
 * @static
 */
Menu.MENU_ITEM_SUBMENU = 'menu-item-submenu';

/**
 * The CSS class added to open submenus.
 * @type {string}
 * @static
 */
Menu.MENU_ITEM_SUBMENU_OPEN = 'menu-item-submenu-open';

ComponentRegistry.register('Menu', Menu);

export default Menu;