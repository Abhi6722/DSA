---
sidebar_position: 1
---

# CSS

CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML. It provides a way to style and layout HTML elements, controlling their appearance, positioning, and behavior. With CSS, you can define colors, fonts, margins, padding, borders, animations, and much more. CSS follows a cascading principle, where styles can be applied and overridden based on specificity and order of declaration.

## **Theory:**

**CSS Selectors:**
CSS selectors are used to target and style specific HTML elements. Selectors define the elements or groups of elements that the CSS rules will apply to.

```css
h1 {
  color: blue;
}

.my-class {
  font-size: 16px;
}

#my-id {
  background-color: yellow;
}

input[type="text"] {
  border: 1px solid gray;
}
```

**CSS Box Model:**
The CSS box model describes how elements are rendered and how their dimensions are calculated.

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}

```

**CSS Layout:**
CSS layout refers to how elements are positioned and displayed on a web page.

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.float-left {
  float: left;
}
```

**CSS Flexbox:**
Flexbox is a CSS layout module that provides a flexible way to distribute space among elements in a container and align them in a responsive manner.

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.item {
  flex-grow: 1;
  flex-basis: 0;
}
```

**CSS Media Queries:**
Media queries allow you to apply different styles based on specific conditions, such as screen size or device orientation.

```css
@media (max-width: 768px) {
  /* Styles for screens up to 768px wide */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for screens between 768px and 1024px wide */
}
```

**CSS Animations and Transitions:**
CSS animations and transitions allow you to add dynamic effects to elements.

```css
@keyframes slide-in {
  0% { opacity: 0; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(0); }
}

.my-element {
  animation: slide-in 1s ease-in-out;
}

.my-element {
  transition: background-color 0.3s ease-in-out;
}
```

**CSS Typography:**

CSS allows you to style text and control typography on your web page. You can define properties like font family, font size, font weight, text alignment, line height, and text decoration.

```css
.text {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  text-decoration: underline;
}
```

**CSS Colors:**

CSS provides various ways to specify colors. You can use color names, hexadecimal values, RGB values, or HSL values to define colors for elements.

```css
.heading {
  color: red;
}

.background {
  background-color: #f1f1f1;
}

.text {
  color: rgb(255, 0, 0);
}

.link {
  color: hsl(240, 100%, 50%);
}
```

**CSS Display:**

The `display` property in CSS controls how an element is rendered and how it interacts with other elements in the layout. It offers different display values like `block`, `inline`, `inline-block`, `none`, etc.

```css
.block-element {
  display: block;
}

.inline-element {
  display: inline;
}

.inline-block-element {
  display: inline-block;
}

.hidden-element {
  display: none;
}
```

**CSS Positioning:**

CSS provides different positioning properties to control the positioning of elements on a web page. These properties include `position`, `top`, `right`, `bottom`, and `left`. By using them, you can position elements relative to the document flow or other elements.

```css
.relative-position {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute-position {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed-position {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**CSS Transforms:**
CSS transforms allow you to apply 2D or 3D transformations to elements. Transforms can change the position, rotation, scale, and skew of elements, providing a way to create visually appealing effects.

```css
.rotate {
  transform: rotate(45deg);
}

.scale {
  transform: scale(1.5);
}

.translate {
  transform: translateX(100px) translateY(50px);
}

.skew {
  transform: skewX(20deg);
}
```

