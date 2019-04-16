# Text Placeholder

An angular directive that shows a Text Placeholder when the image src is absent or fails to load

- uses renderer2, will work in serverside rendering
- computes a two lettered text given a name or string from the image alt property
- will generate a placeholder if the image link is broken or empty

## Preview
![Preview](https://raw.githubusercontent.com/itsTeknas/text-placeholder/master/placeholder.png)

## Installation

`npm install --save ngx-text-placeholder`

## Usage 

### import
`import { TextPlaceholderModule } from 'ngx-text-placeholder';`

``` javascript
@NgModule({
  ...
  imports: [
    TextPlaceholderModule
  ],
  ...
})
```

### template usage
``` html
<img textPlaceholder alt="Angular Logo" src="https://via.placeholder.com/160" [size]="45" (loadError)="this.onLoadError($event)">
```
