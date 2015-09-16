'use strict';

import async from 'bower:metal/src/async/async';
import dom from 'bower:metal/src/dom/dom';
import Menu from '../src/Menu';

var menu;

describe('Menu', function() {
	afterEach(function() {
		if (menu) {
			menu.dispose();
		}

		var menuElement = document.getElementById('menu');

		if (menuElement) {
			dom.exitDocument(menuElement);
		}
	});

	it('should open the dropdown menu when header is clicked', function(done) {
		dom.enterDocument('<div id="menu"></div>');

		menu = new Menu({
			header: 'menu',
			element: '#menu',
			items: [
				{
					header: 'item1'
				}
			]
		}).render();

		dom.triggerEvent(menu.element.querySelector('#menu-header'), 'click');

		setTimeout(function() {
			assert.ok(dom.hasClass(menu.element, 'open'));
			assert.ok(dom.hasClass(menu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));

			done();
		}, 100);
	});

	it('should close the dropdown menu when document is clicked', function(done) {
		dom.enterDocument('<div id="menu"></div>');

		menu = new Menu({
			header: 'menu',
			element: '#menu',
			items: [
				{
					header: 'item1'
				}
			]
		}).render();

		dom.triggerEvent(menu.element.querySelector('#menu-header'), 'click');

		setTimeout(function() {
			dom.triggerEvent(document, 'click');

			setTimeout(function() {
				assert.ok(!dom.hasClass(menu.element, 'open'));
				assert.ok(!dom.hasClass(menu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));

				done();
			}, 100);
		}, 100);
	});

	it('should fire itemSelected event when item is clicked', function(done) {
		dom.enterDocument('<div id="menu"></div>');

		menu = new Menu({
			header: 'menu',
			element: '#menu',
			items: [
				{
					header: 'item1',
					submenu: {
						id: 'submenu',
						items: [
							{
								header:'item1.1'
							}
						]
					}
				}
			]
		}).render();

		menu.on('itemSelected', function() {
			done();
		});

		dom.triggerEvent(menu.element.querySelector('#menu-header'), 'click');
		dom.triggerEvent(menu.element.querySelector('#submenu .menu-content'), 'click');

		setTimeout(function() {
			assert.fail();
		}, 100);
	});

	it('should open and close submenu when open and close methods are called', function() {
		dom.enterDocument('<div id="menu"></div>');

		menu = new Menu({
			header: 'menu',
			element: '#menu',
			items: [
				{
					header: 'item1',
					submenu: {
						id: 'submenu',
						items: [
							{
								header: 'item1.1'
							}
						]
					}
				}
			]
		}).render();

		var menuItem = menu.components['menu-item-0'];
		var submenu = menuItem.components['submenu'];

		menu.open();
		submenu.open();

		assert.ok(dom.hasClass(menu.element, 'open'));
		assert.ok(dom.hasClass(submenu.element, 'open'));
		assert.ok(dom.hasClass(menu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));
		assert.ok(dom.hasClass(submenu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));

		submenu.close();
		menu.close();

		assert.ok(!dom.hasClass(menu.element, 'open'));
		assert.ok(!dom.hasClass(submenu.element, 'open'));
		assert.ok(!dom.hasClass(menu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));
		assert.ok(!dom.hasClass(submenu.getMenuItemSubmenu_(), 'menu-item-submenu-open'));
	});

	it('timeout', function(done) {
		dom.enterDocument('<div id="menu"></div>');

		menu = new Menu({
			header: 'menu',
			element: '#menu',
			items: [
				{
					disabled: true,
					header: 'item1',
					submenu: {
						disabled: true,
						id: 'submenu',
						items: [
							{
								header:'item1.1'
							}
						]
					}
				}
			]
		}).render();

		var menuItem = menu.components['menu-item-0'];
		var submenu = menuItem.components['submenu'];

		dom.triggerEvent(menu.element.querySelector('#menu-header'), 'click');
		dom.triggerEvent(submenu.element.querySelector('#submenu .menu-item-content'), 'click');

		setTimeout(function() {
			assert(!dom.hasClass(submenu.element, 'open'));

			done();
		});
	});
});
