/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from MenuItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.MenuItem.
 */

if (typeof Templates.MenuItem == 'undefined') { Templates.MenuItem = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.MenuItem.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" data-onclick="' + soy.$$escapeHtmlAttribute(opt_data.disabled ? '' : 'toggle') + '"><a>' + soy.$$escapeHtml(opt_data.header) + '</a>' + ((opt_data.items.length > 0) ? '<div class="menu-item-submenu-arrow"><span class="caret"></span></div>' : '') + '</div>');
};
if (goog.DEBUG) {
  Templates.MenuItem.header.soyTemplateName = 'Templates.MenuItem.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.MenuItem.body = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu menu menu-' + soy.$$escapeHtmlAttribute(opt_data.layoutMode) + '">';
  var itemList35 = opt_data.items;
  var itemListLen35 = itemList35.length;
  for (var itemIndex35 = 0; itemIndex35 < itemListLen35; itemIndex35++) {
    var itemData35 = itemList35[itemIndex35];
    output += '<li class="menu-item' + soy.$$escapeHtmlAttribute(itemData35.disabled ? ' disabled' : '') + soy.$$escapeHtmlAttribute(itemData35.divider ? ' divider' : '') + '"><div class="menu-content">' + Templates.Menu.content(soy.$$augmentMap(itemData35.submenu, {header: itemData35.header, disabled: itemData35.disabled}), null, opt_ijData) + '</div></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.MenuItem.body.soyTemplateName = 'Templates.MenuItem.body';
}

Templates.MenuItem.header.params = ["id","header","items","disabled"];
Templates.MenuItem.body.params = ["id","items","layoutMode"];
export default Templates.MenuItem;
/* jshint ignore:end */
