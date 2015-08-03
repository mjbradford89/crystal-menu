'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './Menu.soy';

class Menu extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

Menu.ELEMENT_CLASSES = 'menu';

ComponentRegistry.register('Menu', Menu);

export default Menu;
