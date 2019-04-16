# Text Placeholder

An angular directive that shows a Text Placeholder when the image src is absent or fails to load

- tiny ~88kb
- uses renderer2, will work in serverside rendering
- computes a two lettered text given a name or string
- will generate a placeholder if the image link is broken or empty

## Preview
![Preview](https://raw.githubusercontent.com/itsTeknas/text-placeholder/master/placeholder.png)

## Installation

`npm install --save ngx-text-placeholder`

## Usage 

### import
`import { TextPlaceholderDirective } from 'ngx-text-placeholder';`

``` javascript
@NgModule({
  declarations: [
    ...
    TextPlaceholderDirective
  ],
  ...
})
```

### template usage
``` html
<img [textPlaceholder]="'Sanket Berde'" [size]="45" alt="Angular Logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngs">
```
