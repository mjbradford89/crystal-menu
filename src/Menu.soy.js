/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Menu.
 */

if (typeof Templates.Menu == 'undefined') { Templates.Menu = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Menu.content = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="dropdown ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '">';
  var hasItems__soy8 = opt_data.items && opt_data.items.length > 0;
  output += '<div class="menu-item-content' + soy.$$escapeHtmlAttribute(hasItems__soy8 ? '' : ' menu-item-leaf') + '" data-onclick="toggle,handleItemClick_">' + Templates.Menu.header(soy.$$augmentMap(opt_data, {hasItems: hasItems__soy8}), null, opt_ijData) + '</div>';
  if (hasItems__soy8) {
    output += '<div class="menu-item-submenu"><ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu menu menu-' + soy.$$escapeHtmlAttribute(opt_data.layoutMode) + '">';
    var itemList22 = opt_data.items;
    var itemListLen22 = itemList22.length;
    for (var itemIndex22 = 0; itemIndex22 < itemListLen22; itemIndex22++) {
      var itemData22 = itemList22[itemIndex22];
      output += Templates.MenuItem.content({id: opt_data.id + '-item-' + itemIndex22, header: itemData22.header, submenu: itemData22.submenu, divider: itemData22.divider, disabled: itemData22.disabled}, null, opt_ijData);
    }
    output += '</ul></div>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Menu.content.soyTemplateName = 'Templates.Menu.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Menu.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header"><a>' + soy.$$escapeHtml(opt_data.header) + '</a>' + ((opt_data.hasItems) ? '<div class="menu-item-submenu-arrow"><span class="caret"></span></div>' : '') + '</div>');
};
if (goog.DEBUG) {
  Templates.Menu.header.soyTemplateName = 'Templates.Menu.header';
}

Templates.Menu.content.params = ["id","items","layoutMode"];
Templates.Menu.header.params = ["id","header","hasItems"];
export default Templates.Menu;
/* jshint ignore:end */
