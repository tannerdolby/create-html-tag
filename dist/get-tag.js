"use strict";
function element(tag, content = "", selfClosing = false, tagInfo = tag) {
    return `<${tagInfo}>${!selfClosing ? content : ""}${!selfClosing ? `</${tag}>` : ""}`;
}
;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Default: false (or true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements))
 * @return {string} A string representing the constructed HTML element.
 */
function getTag(tag, textContent, attributes, selfClosing = false) {
    const selfClosingTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
    let fields = "";
    tag = tag.toLowerCase();
    selfClosing = selfClosingTags.includes(tag) || selfClosing;
    if (attributes && typeof attributes == "object" && Object.keys(attributes).length > 0) {
        for (const key in attributes) {
            fields += `${key}="${attributes[key]}" `;
        }
        return element(tag, textContent, selfClosing, `${tag} ${fields.slice(0, fields.length - 1)}`);
    }
    return element(tag, textContent, selfClosing);
}
module.exports = getTag;
