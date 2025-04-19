# Butility DOM Utils

Welcome to the Utility package! This library provides a comprehensive set of tools for manipulating HTML elements, managing attributes and classes, handling events, and traversing the DOM. With features designed to streamline web development, this package is essential for modern web applications.

## Features

- **Attribute Management**: Easily get, set, remove, and toggle HTML attributes.
- **Class Management**: Add, remove, and toggle CSS classes with various conditions and options.
- **Element Creation and Manipulation**: Create and modify HTML elements dynamically.
- **Event Handling**: Simplify event delegation and data management for DOM events.
- **DOM Traversal**: Efficiently find and manipulate elements in the DOM tree.


## Installation

To install the package, you can use npm or CDN:

```sh
npm install @butility/dom
```

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/dom@latest/dom.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/dom.js" type="module"></script>
<!-- To use HTML utils -->
<script src="https://unpkg.com/@butility/dom@latest/html.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/html.js" type="module"></script>
<!-- To use Element utils -->
<script src="https://unpkg.com/@butility/dom@latest/element.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/element.js" type="module"></script>
<!-- To use Event utils -->
<script src="https://unpkg.com/@butility/dom@latest/event.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/event.js" type="module"></script>
<!-- To use Class utils -->
<script src="https://unpkg.com/@butility/dom@latest/class.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/class.js" type="module"></script>
<!-- To use Attribute utils -->
<script src="https://unpkg.com/@butility/dom@latest/attribute.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/dom@latest/attribute.js" type="module"></script>
```
## Examples

```javascript
// Function based html creation
import { body, head, div, button, title, meta, a, ul, li, img, h1, p} from "@butility/dom/html";

head(
    title("my dom package"),
    meta({name: "", content: ""}),
)
// This will append all the children to the body
body(
    div({ class: "content-wrapper" },
        h1("Welcome!"),
        p("This is an example paragraph."),
        button({ class: "btn-primary", onclick: "console.log(\"i am clicked\")" }, "Click Me"),
        a({ href: "https://github.com/butility" }, "Butility"),
        ul(
            li("Item 1"),
            li("Item 2")
        ),
        img({ src: "image.png", alt: "Example image" })
    )
)
```

```javascript

import ClassUtils from "@butility/dom/class";
import Element from "@butility/dom/element";
import Attribute from "@butility/dom/attribute";

ClassUtils.toggleClassOnConnectionStatus(button, "online", "offline");
ClassUtils.toggleClassOnCopy(button, "copied");
ClassUtils.toggleClassOnOrientationChange(button, "orientation"); // output class name `orientation-portrait or landscape
ClassUtils.toggleClassOnDeviceMotion(button, "moved"); // like when device is tilted
ClassUtils.addUniqueClass(button, "unique-class")
ClassUtils.toggleClassOnGeolocationChange(button, "location-changed", {
    enableThrottling: true,
    throttleInterval: 6000, // 6 sec
    onClassToggle: () => {} // Change UI 
});

Element.setHTML(script, "console.log(\"hi\")", true); // setHTML to script
Attribute.setAttribute(button, {
    class: "button-class",
    set: "custom data-set"
}, { addPrefix: true })
```

## Documentation

For `@butility/dom` documentation refer to the [docs folder](https://github.com/butility/dom/tree/main/docs).

## Changelog

You can find [changelog here](https://github.com/butility/dom/tree/main/docs/changelog.md)

## License

This project is licensed under the [MIT License](LICENSE.md).