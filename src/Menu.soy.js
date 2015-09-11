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
  var output = '';
  var hasItems__soy3 = opt_data.items && opt_data.items.length > 0;
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="menu-' + soy.$$escapeHtmlAttribute(opt_data.layoutMode) + soy.$$escapeHtmlAttribute(hasItems__soy3 ? '' : ' no-menu-items') + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">';
  var param11 = '';
  if (hasItems__soy3) {
    var itemList14 = opt_data.items;
    var itemListLen14 = itemList14.length;
    for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
      var itemData14 = itemList14[itemIndex14];
      param11 += Templates.MenuItem.content(soy.$$augmentMap(itemData14, {id: opt_data.id + '-item-' + itemIndex14, menuId: opt_data.id, layoutMode: opt_data.layoutMode}), null, opt_ijData);
    }
  }
  output += soy.$$escapeHtml(Templates.Dropdown.content({body: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param11), header: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="menu-item-content" data-onclick="' + soy.$$escapeHtmlAttribute(opt_data.id) + ':toggle"><a>' + soy.$$escapeHtml(opt_data.header) + '</a>' + ((hasItems__soy3) ? '<div class="menu-item-submenu-arrow"><span class="caret"></span></div>' : '') + '</div>'), id: opt_data.id + '-dropdown', elementClasses: 'menu-item-submenu', position: opt_data.position}, null, opt_ijData));
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Menu.content.soyTemplateName = 'Templates.Menu.content';
}

Templates.Menu.content.params = ["header","id","items","layoutMode","position"];
export default Templates.Menu;
/* jshint ignore:end */
