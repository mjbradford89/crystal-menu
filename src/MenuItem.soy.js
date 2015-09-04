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
Templates.MenuItem.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="menu-item' + soy.$$escapeHtmlAttribute(opt_data.disabled ? ' disabled' : '') + soy.$$escapeHtmlAttribute(opt_data.divider ? ' divider' : '') + '"><div class="menu-content">' + Templates.Menu.content(soy.$$augmentMap(opt_data.submenu, {header: opt_data.header, disabled: opt_data.disabled, id: opt_data.submenu ? opt_data.submenu.id : opt_data.id + '-leaf'}), null, opt_ijData) + '</div></li>');
};
if (goog.DEBUG) {
  Templates.MenuItem.content.soyTemplateName = 'Templates.MenuItem.content';
}

Templates.MenuItem.content.params = ["id","disabled","divider","header","submenu"];
export default Templates.MenuItem;
/* jshint ignore:end */
