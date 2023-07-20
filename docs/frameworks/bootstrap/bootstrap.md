---
sidebar_position: 1
---

# Bootstrap

Bootstrap is a widely used CSS framework that provides a collection of pre-built components, styles, and utilities to simplify web development. It offers a responsive grid system, CSS classes for styling elements, JavaScript plugins, and a wide range of UI components.

## Important Concepts

**Grid System:**

Bootstrap's grid system allows you to create responsive layouts by dividing the page into a 12-column grid. It provides CSS classes to define the width and placement of elements based on different screen sizes.

```html
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3">
      <!-- Content here -->
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <!-- Content here -->
    </div>
    <!-- ... -->
  </div>
</div>
```

**Typography:**

Bootstrap offers CSS classes for styling typography, including headings, paragraphs, and other text elements.

```html
<h1 class="display-4">Heading</h1>
<p class="lead">Lead text</p>
<p class="text-muted">Muted text</p>
```

**Buttons:**

Bootstrap provides CSS classes to create and style buttons with different sizes, colors, and styles.

```html
<button class="btn btn-primary">Primary Button</button>
<a href="#" class="btn btn-secondary">Secondary Button</a>
<button class="btn btn-danger btn-lg">Large Danger Button</button>
```

**Forms:**

Bootstrap's form classes help in styling and organizing form elements, making them visually appealing and responsive.

```html
<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

**Alerts:**

Bootstrap's alert component allows you to display contextual messages with different styles and colors.

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert.
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert.
</div>
```

**Navbar:**

Bootstrap's navbar component provides a responsive navigation bar that can be easily customized and styled.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="

nav-link" href="#">About</a>
      </li>
      <!-- ... -->
    </ul>
  </div>
</nav>
```

**Cards:**

Bootstrap's card component allows you to create flexible and visually appealing containers for displaying content.

```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card text goes here.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
```

[https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
