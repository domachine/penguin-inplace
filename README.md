# penguin-inplace

## Installation

	$ npm i -S penguin-inplace

Then edit your `package.json` file to include the component.

```json
{
  "penguin": {
    "components": {
      "Inplace": "penguin-inplace"
    }
  }
}
```

## Usage

```html
<div data-component='Inplace' data-props='{"field":"simple-span-label"}'>
  <strong>My default content</strong>
</div>
```

This component uses [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable) to make the target element editable and decodes all HTML by using `innerText` to set the content. The static part simply renders the `innerHTML` of the element.

### Props

  * `field` - Specifies the field to modify in the state