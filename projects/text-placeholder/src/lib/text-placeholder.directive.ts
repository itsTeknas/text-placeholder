import { Directive, Input, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[textPlaceholder]'
})
export class TextPlaceholderDirective implements AfterViewInit {

  private readonly colors = [
    '#e53935',
    '#ad1457',
    '#880e4f',
    '#8e24aa',
    '#4a148c',
    '#5e35b1',
    '#311b92',
    '#3949ab',
    '#1a237e',
    '#1e88e5',
    '#0d47a1',
    '#039be5',
    '#01579b',
    '#00acc1',
    '#006064',
    '#004d40',
    '#43a047',
    '#1b5e20',
    '#fb8c00',
    '#bf360c',
    '#6d4c41',
    '#3e2723',
    '#757575',
    '#424242',
    '#546e7a',
    '#263238'
  ];

  @Input()
  imgSrc: string;

  @Input()
  textPlaceholder: string;

  @Input()
  size = 45;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    if (this.imgSrc) {
      this.element.nativeElement.src = this.imgSrc;
    } else {
      this.applyPlaceholder();
    }
  }

  private applyPlaceholder() {
    // NativeElement, document used
    // const newElem = document.createElement('p');
    // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
    // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);

    const child = this.renderer.createElement('p');
    child.innerHTML = this.generatePlaceholder(this.textPlaceholder);
    child.style.display = 'inline-block';
    child.style.width = this.size + 'px';
    child.style.height = this.size + 'px';
    child.style['border-radius'] = '50%';
    child.style['background-color'] = this.getRandomColor();
    child.style['line-height'] = this.size + 'px';
    child.style.color = 'white';
    child.style['text-align'] = 'center';
    child.style['font-size'] = (this.size / 2.5) + 'px';
    child.style['font-family'] = 'Arial, Helvetica, sans-serif';
    const parent = this.renderer.parentNode(this.element.nativeElement);
    this.renderer.removeChild(parent, this.element.nativeElement);
    this.renderer.appendChild(parent, child);
  }

  private generatePlaceholder(placeholder: string): string {
    const parts = placeholder.split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    } else {
      if (parts[0].length >= 2) {
        // two characters
        return (parts[0][0] + parts[0][1]).toUpperCase();
      } else {
        // single character
        return parts[0][0];
      }
    }
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * (this.colors.length))];
  }

  @HostListener('error')
  onError(event) {
    this.applyPlaceholder();
  }
}

