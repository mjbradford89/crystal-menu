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
  output += '<div class="menu-item-content' + soy.$$escapeHtmlAttribute(hasItems__soy8 ? '' : ' menu-item-leaf') + '">' + Templates.MenuItem.header(opt_data, null, opt_ijData) + '</div>' + ((hasItems__soy8) ? '<div class="menu-item-submenu">' + Templates.MenuItem.body(opt_data, null, opt_ijData) + '</div>' : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Menu.content.soyTemplateName = 'Templates.Menu.content';
}

Templates.Menu.content.params = ["id","items"];
export default Templates.Menu;
/* jshint ignore:end */
