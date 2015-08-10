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
  var hasItems__soy8 = opt_data.items.length > 0;
  output += '<div class="menu-item-content' + soy.$$escapeHtmlAttribute(hasItems__soy8 ? '' : ' menu-item-leaf') + '">' + Templates.MenuItem.header(opt_data, null, opt_ijData) + '</div>';
  if (hasItems__soy8) {
    output += '<div class="menu-item-submenu"><ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu menu menu-' + soy.$$escapeHtmlAttribute(opt_data.layoutMode) + '">';
    var itemList21 = opt_data.items;
    var itemListLen21 = itemList21.length;
    for (var itemIndex21 = 0; itemIndex21 < itemListLen21; itemIndex21++) {
      var itemData21 = itemList21[itemIndex21];
      output += Templates.MenuItem.body(soy.$$augmentMap(opt_data, {item: itemData21}), null, opt_ijData);
    }
    output += '</ul></div>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Menu.content.soyTemplateName = 'Templates.Menu.content';
}

Templates.Menu.content.params = ["id","items","layoutMode"];
export default Templates.Menu;
/* jshint ignore:end */
