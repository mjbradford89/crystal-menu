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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header"><a>' + soy.$$escapeHtml(opt_data.header) + '</a>' + ((opt_data.hasItems) ? '<div class="menu-item-submenu-arrow"><span class="caret"></span></div>' : '') + '</div>');
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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.item) ? '<li class="menu-item' + soy.$$escapeHtmlAttribute(opt_data.item.disabled ? ' disabled' : '') + soy.$$escapeHtmlAttribute(opt_data.item.divider ? ' divider' : '') + '"><div class="menu-content">' + Templates.Menu.content(soy.$$augmentMap(opt_data.item.submenu, {header: opt_data.item.header, disabled: opt_data.item.disabled}), null, opt_ijData) + '</div></li>' : '');
};
if (goog.DEBUG) {
  Templates.MenuItem.body.soyTemplateName = 'Templates.MenuItem.body';
}

Templates.MenuItem.header.params = ["id","header","hasItems"];
Templates.MenuItem.body.params = ["item"];
export default Templates.MenuItem;
/* jshint ignore:end */
