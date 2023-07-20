---
sidebar_position: 1
---

# HTML

HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications. It uses a set of tags and attributes to structure the content and define the presentation of elements on a web page. HTML documents consist of nested tags that form a hierarchical structure, allowing developers to define headings, paragraphs, links, images, tables, forms, and more.

## **Key Concepts:**

1. **HTML Tags:** HTML tags are used to define elements on a web page. Tags are enclosed in angle brackets (`< >`) and come in pairs - an opening tag and a closing tag. The content to be marked up is placed between the opening and closing tags. For example, `<p>` defines a paragraph, and `</p>` marks the end of the paragraph.
2. **HTML Attributes:** HTML attributes provide additional information about an element. They are specified within the opening tag of an element and consist of a name and a value. Attributes modify the behavior or appearance of an element. For example, the `href` attribute in the `<a>` tag specifies the URL that the link should navigate to.
3. **HTML Elements:** HTML elements are defined by HTML tags and form the building blocks of a web page. Elements represent the structure and content of a web page, such as headings (`<h1>`, `<h2>`, etc.), paragraphs (`<p>`), images (`<img>`), links (`<a>`), lists (`<ul>`, `<ol>`), tables (`<table>`), and forms (`<form>`, `<input>`, etc.).
4. **HTML Document Structure:** An HTML document follows a specific structure. It starts with a `<!DOCTYPE>` declaration to specify the HTML version. The document is enclosed within an `<html>` tag, which contains two main sections: `<head>` and `<body>`. The `<head>` section contains metadata, such as the page title, linked stylesheets, or scripts. The actual content of the page, including text, images, and interactive elements, is placed within the `<body>` section.
5. **Semantic Elements:** HTML provides semantic elements that have meaning beyond their visual representation. These elements, such as `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, etc., describe the purpose or structure of the content. Semantic elements contribute to accessibility, search engine optimization, and improved code readability.
6. **Styling with CSS:** While HTML focuses on the structure and content of a web page, Cascading Style Sheets (CSS) is used to control the presentation and styling of HTML elements. CSS allows developers to define colors, fonts, layout, spacing, and other visual aspects of a web page. CSS styles can be applied directly inline using the `style` attribute or by linking an external CSS file to the HTML document.
7. **Forms and Input Validation:** HTML provides form elements (`<form>`, `<input>`, `<select>`, `<textarea>`, etc.) for capturing user input. Forms enable users to provide information that can be submitted to a server for processing. HTML5 introduces various input types and attributes for input validation, such as required fields, email validation, pattern matching, and more.
8. **Metadata and Scripting:** HTML allows the inclusion of metadata through elements like `<meta>`, which provide information like character encoding, viewport configuration, and search engine meta tags. HTML also supports client-side scripting using `<script>` tags to embed JavaScript code directly into the HTML document.
9. **Hyperlinks:** HTML allows you to create hyperlinks using the `<a>` (anchor) tag. By specifying the `href` attribute with the URL, you can link to other web pages, sections within the same page, or external resources. You can also use anchor tags to create internal page anchors for easy navigation within long documents.
10. **Images and Multimedia:** HTML provides the `<img>` tag to display images on a web page. You can specify the image source (`src` attribute), alternative text (`alt` attribute), width, height, and other attributes. Additionally, HTML5 introduced multimedia elements like `<audio>` and `<video>` for embedding audio and video content directly into web pages.
11. **Lists:** HTML offers two types of lists: ordered (`<ol>`) and unordered (`<ul>`). You can use the `<li>` (list item) tag to define individual list items within these list types. Lists are commonly used to present items in a sequential or non-sequential format, such as bullet-point lists or numbered lists.
12. **Tables:** HTML provides the `<table>` tag to create structured tables. Tables consist of rows (`<tr>`) and columns (`<td>` or `<th>`). You can use `<th>` for header cells and `<td>` for regular cells. By using attributes like `colspan` and `rowspan`, you can merge cells or create more complex table structures.
13. **Forms and Input Elements:** HTML forms (`<form>`) allow users to input and submit data. You can include various input elements within a form, such as text fields (`<input type="text">`), checkboxes (`<input type="checkbox">`), radio buttons (`<input type="radio">`), select dropdowns (`<select>`), and text areas (`<textarea>`). These elements are used to collect and validate user input.
14. **Semantic HTML5 Elements:** HTML5 introduced a set of semantic elements that provide clearer meaning and structure to web content. These elements include `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, and more. Using semantic elements helps search engines better understand the content and improves accessibility for users of assistive technologies.
15. **Metadata and SEO:** HTML allows you to define metadata for web pages. The `<meta>` tag is commonly used to provide information about the character encoding (`<meta charset>`), viewport settings (`<meta name="viewport">`), description (`<meta name="description">`), keywords, and other metadata. These metadata elements play a role in search engine optimization (SEO) and influence how search engines index and display web pages.
16. **HTML Entities:** HTML entities are special character codes used to display characters that have reserved meanings in HTML. For example, `&lt;` represents `<`, `&gt;` represents `>`, and `&amp;` represents `&`. Entities are particularly useful when displaying special characters that might otherwise be interpreted as HTML tags or entities.

## **HTML Cheat Sheet:**

1. **HTML Structure:**
- Create an HTML document:
        
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Title of the Page</title>
        </head>
        <body>
          <!-- Content of the page goes here -->
        </body>
        </html>
        ```
        
- Add headings:
        
        ```html
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <!-- ... -->
        <h6>Heading 6</h6>
        ```
        
 - Create paragraphs:
        
        ```html
        <p>This is a paragraph.</p>
        ```
        
2. **HTML Elements:**
- Create links:
        
        ```html
        <a href="<https://example.com>">Link Text</a>
        ```
        
- Insert images:
        
        ```html
        <img src="image.jpg" alt="Image Description">
        ```
        
- Create lists:
        
        ```html
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <!-- ... -->
        </ul>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <!-- ... -->
        </ol>
        ```
        
- Create tables:
        
        ```html
        <table>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
          <!-- ... -->
        </table>
        ```
        
- Format text:
        
        ```html
        <strong>Bold Text</strong>
        <em>Italic Text</em>
        <u>Underlined Text</u>
        ```
        
3. **HTML Forms:**
- Create a form:
        
        ```html
        <form action="/submit" method="post">
          <!-- Form fields go here -->
        </form>
        ```
        
- Add text input:
        
        ```html
        <input type="text" name="input_name" placeholder="Enter text">
        ```
        
- Add checkboxes:
        
        ```html
        <input type="checkbox" name="checkbox_name" value="option1"> Option 1<br>
        <input type="checkbox" name="checkbox_name" value="option2"> Option 2<br>
        <!-- ... -->
        ```
        
 - Add radio buttons:
        
        ```html
        <input type="radio" name="radio_name" value="option1"> Option 1<br>
        <input type="radio" name="radio_name" value="option2"> Option 2<br>
        <!-- ... -->
        ```
        
- Add a submit button:
        
        ```html
        <input type="submit" value="Submit">
        ```
        
4. **HTML Styling:**
- Apply inline styles:
        
        ```html
        <p style="color: blue; font-size: 18px;">Styled Text</p>
        ```
        
- Use CSS classes:
        
        ```html
        <style>
          .my-class {
            color: red;
            font-size: 20px;
          }
        </style>
        <p class="my-class">Styled Text</p>
        ```
        
- Link an external CSS file:
        
        ```html
        <link rel="stylesheet" href="styles.css">
        ```
        
5. **HTML Semantic Elements:**
- Use header and footer:
        
        ```html
        <header>
          <!-- Header content goes here -->
        </header>
        <footer>
        <!-- Footer content goes here -->
        </footer>
        ```
        
- Create a navigation menu:
        
        ```html
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <!-- ... -->
          </ul>
        </nav>
        ```
        
- Section and article tags:
        
        ```html
        <section>
          <h2>Section Title</h2>
          <!-- Section content goes here -->
        </section>
        <article>
          <h2>Article Title</h2>
          <!-- Article content goes here -->
        </article>
        ```
        
6. **HTML Metadata:**
- Define character encoding:
        
        ```html
        <meta charset="UTF-8">
        ```
        
- Add viewport meta tag for responsive design:
        
        ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ```
        
- Include external scripts:
        
        ```html
        <script src="script.js"></script>
        ```

        