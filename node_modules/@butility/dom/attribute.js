// src/core/attribute.ts
function setAttribute(element, attribute, options = {}) {
  const {
    whitelist,
    blacklist,
    validate,
    transformValue,
    addPrefix = "",
    // By default, no prefix is added
    onAttributeSet = () => {
    },
    // Default no-op callback
    onError = (error) => console.error(error),
    // Default error handler logs to console
    log = false
    // Disable logging by default
  } = options;
  let settedAttributes = {};
  try {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError("Provided element is not a valid HTMLElement.");
    }
    if (typeof attribute !== "object") {
      throw new Error("Attribute name must be a non-empty string.");
    }
    const shouldSetAttribute = (key) => {
      if (whitelist && !whitelist.includes(key)) return false;
      if (blacklist && blacklist.includes(key)) return false;
      return true;
    };
    for (const [attributeName, attributeValue] of Object.entries(
      attribute
    )) {
      try {
        const finalAttributeName = addPrefix ? `${addPrefix}${attributeName}` : attributeName;
        if (!shouldSetAttribute(finalAttributeName)) {
          if (log)
            console.log(
              `Skipping attribute: ${finalAttributeName}`
            );
          return;
        }
        if (validate && !validate(finalAttributeName, attributeValue)) {
          throw new Error(
            `Validation failed for attribute: ${finalAttributeName} with value: ${attributeValue}`
          );
        }
        const transformedValue = transformValue ? transformValue(finalAttributeName, attributeValue) : attributeValue;
        if (/^data-/.test(finalAttributeName)) {
          const dataKey = finalAttributeName.slice(5);
          element.dataset[dataKey] = transformedValue;
          if (log)
            console.log(
              `Set data attribute: data-${dataKey} = ${transformedValue}`
            );
        } else {
          element.setAttribute(finalAttributeName, transformedValue);
          if (log)
            console.log(
              `Set attribute: ${finalAttributeName} = ${transformedValue}`
            );
        }
        Object.defineProperty(settedAttributes, finalAttributeName, {
          value: transformedValue,
          writable: true,
          enumerable: true,
          configurable: true
        });
      } catch (error) {
        onError(error);
      }
    }
    onAttributeSet(settedAttributes);
  } catch (error) {
    onError(error);
  }
}
function removeAttribute(element, attributeName) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  if (/^data-/.test(attributeName)) {
    delete element.dataset[attributeName.slice(5)];
  } else if (element.hasAttribute(attributeName)) {
    element.removeAttribute(attributeName);
  } else {
    console.warn(`Attribute "${attributeName}" does not exist on`, element);
  }
}
function getAttribute(element, attributeName, options) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  const result = {};
  let value;
  if (options?.dataPrefix && /^data-/.test(attributeName)) {
    value = element.dataset[attributeName.slice(5)] || null;
  } else {
    value = element.getAttribute(attributeName);
  }
  if (options?.transform) {
    value = options.transform(value);
  }
  result[attributeName] = value !== null ? value : options?.defaultValue || null;
  return result;
}
function getAllAttributes(element) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  const attributes = {};
  Array.from(element.attributes).forEach((attr) => {
    attributes[attr.name] = attr.value;
  });
  Object.keys(element.dataset).forEach((dataKey) => {
    const dataValue = element.dataset[dataKey];
    if (dataValue !== void 0) {
      attributes[`data-${dataKey}`] = dataValue;
    }
  });
  return attributes;
}
function hasAttribute(element, attributeName) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  return /^data-/.test(attributeName) ? attributeName.slice(5) in element.dataset : element.hasAttribute(attributeName);
}
function toggleAttribute(element, attributeName, attributeValue) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  if (hasAttribute(element, attributeName)) {
    removeAttribute(element, attributeName);
  } else {
    setAttribute(element, {
      [attributeName]: attributeValue
    });
  }
}
function removeAllAttributes(element) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  Array.from(element.attributes).forEach((attr) => {
    element.removeAttribute(attr.name);
  });
  Object.keys(element.dataset).forEach((dataKey) => {
    delete element.dataset[dataKey];
  });
}
function attributesToQueryString(element) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  const attributes = Array.from(element.attributes);
  return attributes.map(
    (attr) => `${encodeURIComponent(attr.name)}=${encodeURIComponent(attr.value)}`
  ).join("&");
}
function copyAttributes(element, target) {
  if (!element || !(element instanceof HTMLElement) || !target || !(target instanceof HTMLElement)) {
    throw new Error("Invalid HTMLElement provided.");
  }
  Array.from(element.attributes).forEach((attr) => {
    setAttribute(target, { [attr.name]: attr.value });
  });
}
function findElementByAttribute(Element, attributeName) {
  return Array.from(
    Element.querySelectorAll(`[${attributeName}]`)
  );
}
function toggleAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    if (attributes[attr]) {
      element.setAttribute(attr, "");
    } else {
      element.removeAttribute(attr);
    }
  });
}
function hasAnyAttributes(element) {
  return element.attributes.length > 0;
}
function removeAttributesByName(element, ...attributeNames) {
  attributeNames.forEach((attr) => {
    element.removeAttribute(attr);
  });
}
function getAttributesByPrefix(element, prefix) {
  const result = {};
  Array.from(element.attributes).forEach((attr) => {
    if (attr.name.startsWith(prefix)) {
      result[attr.name] = attr.value;
    }
  });
  return result;
}
function setAttributesFromQueryString(element, queryString, options = {}) {
  const { onError = (error) => console.error(error) } = options;
  try {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError("Provided element is not a valid HTMLElement.");
    }
    if (typeof queryString !== "string" || !queryString.trim()) {
      throw new Error(
        "Invalid queryString provided. It must be a non-empty string."
      );
    }
    const params = new URLSearchParams(queryString);
    try {
      setAttribute(element, params, options);
    } catch (attrError) {
      onError(attrError);
    }
  } catch (error) {
    onError(error);
  }
}
function compareAttributes(el1, el2, options = {}) {
  const diff = {};
  try {
    if (!(el1 instanceof HTMLElement) || !(el2 instanceof HTMLElement)) {
      throw new TypeError("Both el1 and el2 must be valid HTMLElements.");
    }
    const el1Attributes = el1.attributes;
    const el2Attributes = el2.attributes;
    const {
      onTrue = () => {
      },
      // Default no-op callback if not provided
      onFalse = () => {
      },
      // Default no-op callback if not provided
      ignoreAttributes = [],
      customCompare
    } = options;
    const shouldIgnore = (attrName) => ignoreAttributes.includes(attrName);
    Array.from(el1Attributes).forEach((attr) => {
      const el2Value = el2.getAttribute(attr.name);
      if (shouldIgnore(attr.name)) return;
      const isEqual = customCompare ? customCompare(attr.value, el2Value) : attr.value === el2Value;
      if (!isEqual) {
        diff[attr.name] = { el1Value: attr.value, el2Value };
        onFalse(attr.name, attr.value, el2Value);
      } else {
        onTrue(attr.name, attr.value, el2Value);
      }
    });
    Array.from(el2Attributes).forEach((attr) => {
      if (!el1.hasAttribute(attr.name) && !shouldIgnore(attr.name)) {
        diff[attr.name] = { el1Value: null, el2Value: attr.value };
        onFalse(attr.name, null, attr.value);
      }
    });
  } catch (error) {
    console.error(`Error comparing attributes: ${error.message}`);
  }
  return diff;
}
function removeAttributesByPrefix(element, prefixes, options) {
  const { onRemove, protectedAttr } = options;
  try {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError("Provided element is not a valid HTMLElement.");
    }
    const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes];
    if (prefixList.length === 0 || prefixList.some(
      (prefix) => typeof prefix !== "string" || !prefix.trim()
    )) {
      throw new Error(
        "Invalid prefixes provided. Prefixes must be non-empty strings."
      );
    }
    Array.from(element.attributes).forEach((attr) => {
      const attrName = attr.name;
      const shouldRemove = prefixList.some(
        (prefix) => attrName.startsWith(prefix)
      );
      if (shouldRemove) {
        if (typeof onRemove === "function") {
          onRemove(attrName);
        }
        const isRemovable = (attrName2) => {
          if (protectedAttr) {
            return !protectedAttr.includes(attrName2);
          }
        };
        if (isRemovable(attrName) === true) {
          element.removeAttribute(attrName);
        }
      }
    });
  } catch (error) {
    console.error(
      `Error while removing attributes by prefix: ${error.message}`
    );
  }
}

// src/modules/attribute.ts
var Attribute = {
  toQueryString: attributesToQueryString,
  compare: compareAttributes,
  copy: copyAttributes,
  findElement: findElementByAttribute,
  getAll: getAllAttributes,
  get: getAttribute,
  getByPrefix: getAttributesByPrefix,
  hasAny: hasAnyAttributes,
  has: hasAttribute,
  removeAll: removeAllAttributes,
  remove: removeAttribute,
  removeByName: removeAttributesByName,
  removeByPrefix: removeAttributesByPrefix,
  set: setAttribute,
  setFromQueryString: setAttributesFromQueryString,
  toggle: toggleAttribute,
  toggleMany: toggleAttributes
};
var attribute_default = Attribute;
export {
  attributesToQueryString,
  compareAttributes,
  copyAttributes,
  attribute_default as default,
  findElementByAttribute,
  getAllAttributes,
  getAttribute,
  getAttributesByPrefix,
  hasAnyAttributes,
  hasAttribute,
  removeAllAttributes,
  removeAttribute,
  removeAttributesByName,
  removeAttributesByPrefix,
  setAttribute,
  setAttributesFromQueryString,
  toggleAttribute,
  toggleAttributes
};
