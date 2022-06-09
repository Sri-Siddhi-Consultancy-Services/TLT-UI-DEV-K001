# HTML Basics

- HTML stands for HyperText Markup Langauage

### Element

The opening tag, the closing tag, and the content together comprise the element
`<tagname> Content goes here... </tagname>`

```html
<p name="p-tag" class="my-cats">My cat is very grumpy</p>
```

`class` in tag we call attribute.

### Nesting Elements

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

### Empty elements

Some elements have no content and are called empty elements. Take the <img> element

```html
<img src="images/firefox-icon.png" alt="My test image" />

<br />
```

### Anatomy of an HTML document

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```

### The <!DOCTYPE> Declaration

```
<!DOCTYPE html> <-- HTML5 -->
```

### Headings

```html
<!-- 6 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
<h5>My H5 tag</h5>
<h6>My H6 tag</h6>
```

### HTML Paragraphs

```html
<p>this is paragraph</p>
```

### HTML Images

HTML images are defined with the `<img>` tag.

The source file (src), alternative text (alt), width, and height are provided as attributes:

```html
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142" />
```

### Points remember

- What is an element
- HTML is Not Case Sensitive
- Never Skip the End Tag
- Empty HTML Elements
- How to view HTML source
- How to inspect HTML elements ### Other Tags

```text

Tag Description

<hr>    Horizontal line tag
<br>    Line break tag
<pre>   defines preformatted text
<code> 	Defines a piece of computer code
<samp> 	Defines sample output from a computer program
<kbd> 	Defines keyboard input
<var> 	Defines a variable
```

### Styles & Formatting

```
Tag         Description

 <b>        Defines bold text
 <u>        Defines underline
 <strong>   Defines important text
 <em>       Defines emphasized text
 <i>        Defines a part of text in an alternate voice or or mood
 <small>    Defines smaller text
 <sub>      Defines subscripted text
 <sup>      Defines superscripted text
 <ins>      Defines inserted text
 <del>      Defines deleted text
 <mark>     Defines marked/highlighted text
```

### HTML Links

HTML links are defined with the `<a>` tag

External Links:

```html
<a href="https://www.w3schools.com">This is a W3C Schools link</a>
<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
```

Internal Links:

```html
<a href="#chapter-1"> chapter-1</a> <a href="#chapter-2">chapter-2</a>
```

Dead Links:

```html
<a href="#"> placeholder-1</a> <a href="#">placeholder-2</a>
```

Links with text:

```html
<a href="page2.html">goto page2</a>
```

Links with image:

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;" />
</a>
```

Link with Button:

```html
<button onclick="document.location='page2.html'">goto page 2</button>
```

### List

- Unorder lists

```html
<h4>Fruits</h4>
<ul>
  <li>Mango</li>
  <li>Banana</li>
  <li>Apple</li>
</ul>
```

- Order lists

```html
<h4>Favourate Places</h4>
<ol>
  <li>Vizag</li>
  <li>Pune</li>
  <li>Hyderabad</li>
</ol>
```

### Table

- Tags -`table`, `thead`, `tbody`, `tr`, `td`
- attributes - `col-span`, `row-span`, etc.

```html
<h2>Basic Table</h2>
<table>
  <thead>
    <tr>
      <td>Col1-H</td>
      <td>Col2-H</td>
      <td>Col3-H</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
```

<hr>

```html
<h2>Table with colspan and rowspan</h2>
<p>ses we just want the animal name to span the whole table.</p>

<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

### Form Element

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

```html
<form>. form elements .</form>

<form action="/post-rest-api-link" method="POST">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br /><br />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br /><br />
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday" /><br /><br />
    <input type="submit" value="Submit" />
  </fieldset>
</form>

<!-- form elements -->
    <input>
    <textarea>
    <button>
    <select>
    <option>
    <optgroup>
    <fieldset>
    <label>
    <output>


```

### Input Element

- Text Inputs  
   types: text, password, email, number etc.

```html
<input type="text" id="fname" name="fname" />
<input type="email" id="email" name="email" />
<input type="password" id="pass" name="password" />
<input type="date" id="birthday" name="birthday" />

<input type="submit" value="Submit" />
```

- Checkboxes

```html
<!-- will be used to select one or more values -->
<input type="checkbox" id="apple" name="apple" />
<input type="checkbox" id="mango" name="mango" />
<input type="checkbox" id="orange" name="orange" />
```

- Radio inputs

```html
<!-- will be used to select any one value -->
<p>Please select your favorite Web language:</p>
<input type="radio" id="html" name="fav_language" value="HTML" />
<label for="html">HTML</label><br />
<input type="radio" id="css" name="fav_language" value="CSS" />
<label for="css">CSS</label><br />
<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
<label for="javascript">JavaScript</label>
```

### Semantic Elements

- `<nav>`
- `<main>`
- `<header>`
- `<body>`
- `<footer>`
- `<aside>`
- `<button>`
- `<a>`
- `<ul>`
- `<ol>`
  etc.

### Non-Semantic Elements

- `<div>`
- `<span>`

### Multimedia

Audio:

```html
<h1>Below is an audio player that will play in all modern browsers</h1>

<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>
```

Video:

```html
<h1>Below is a simple video example</h1>

<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

### Iframe

The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one.

```html
<iframe
  width="600px"
  height="600px"
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"
></iframe>
```
