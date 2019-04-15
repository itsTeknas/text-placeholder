/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
export class TextPlaceholderDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.colors = [
            '#e53935',
            '#d32f2f',
            '#c62828',
            '#b71c1c',
            '#d81b60',
            '#c2185b',
            '#ad1457',
            '#880e4f',
            '#8e24aa',
            '#7b1fa2',
            '#6a1b9a',
            '#4a148c',
            '#5e35b1',
            '#512da8',
            '#4527a0',
            '#311b92',
            '#3949ab',
            '#303f9f',
            '#283593',
            '#1a237e',
            '#1e88e5',
            '#1976d2',
            '#1565c0',
            '#0d47a1',
            '#039be5',
            '#0288d1',
            '#0277bd',
            '#01579b',
            '#00acc1',
            '#0097a7',
            '#00838f',
            '#006064',
            '#00897b',
            '#00796b',
            '#00695c',
            '#004d40',
            '#43a047',
            '#388e3c',
            '#2e7d32',
            '#1b5e20',
            '#fb8c00',
            '#f57c00',
            '#ef6c00',
            '#e65100',
            '#f4511e',
            '#e64a19',
            '#d84315',
            '#bf360c',
            '#6d4c41',
            '#5d4037',
            '#4e342e',
            '#3e2723',
            '#757575',
            '#616161',
            '#424242',
            '#212121',
            '#546e7a',
            '#455a64',
            '#37474f',
            '#263238'
        ];
        this.size = 45;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.imgSrc) {
            this.element.nativeElement.src = this.imgSrc;
        }
        else {
            this.applyPlaceholder();
        }
    }
    /**
     * @private
     * @return {?}
     */
    applyPlaceholder() {
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        /** @type {?} */
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
        /** @type {?} */
        const parent = this.renderer.parentNode(this.element.nativeElement);
        this.renderer.removeChild(parent, this.element.nativeElement);
        this.renderer.appendChild(parent, child);
    }
    /**
     * @private
     * @param {?} placeholder
     * @return {?}
     */
    generatePlaceholder(placeholder) {
        /** @type {?} */
        const parts = placeholder.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        else {
            if (parts[0].length >= 2) {
                // two characters
                return (parts[0][0] + parts[0][1]).toUpperCase();
            }
            else {
                // single character
                return parts[0][0];
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getRandomColor() {
        return this.colors[Math.floor(Math.random() * (this.colors.length))];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onError(event) {
        this.applyPlaceholder();
    }
}
TextPlaceholderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[textPlaceholder]'
            },] }
];
/** @nocollapse */
TextPlaceholderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TextPlaceholderDirective.propDecorators = {
    imgSrc: [{ type: Input }],
    textPlaceholder: [{ type: Input }],
    size: [{ type: Input }],
    onError: [{ type: HostListener, args: ['error',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TextPlaceholderDirective.prototype.colors;
    /** @type {?} */
    TextPlaceholderDirective.prototype.imgSrc;
    /** @type {?} */
    TextPlaceholderDirective.prototype.textPlaceholder;
    /** @type {?} */
    TextPlaceholderDirective.prototype.size;
    /**
     * @type {?}
     * @private
     */
    TextPlaceholderDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TextPlaceholderDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wbGFjZWhvbGRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGV4dC1wbGFjZWhvbGRlci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LXBsYWNlaG9sZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JHLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBMEVuQyxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFFWixXQUFNLEdBQUc7WUFDeEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNU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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF2SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFKMEIsVUFBVTtZQUFpQixTQUFTOzs7cUJBc0U1RCxLQUFLOzhCQUdMLEtBQUs7bUJBR0wsS0FBSztzQkEwREwsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUEvSHJCLDBDQTZERTs7SUFFRiwwQ0FDZTs7SUFFZixtREFDd0I7O0lBRXhCLHdDQUNVOzs7OztJQUdSLDJDQUEyQjs7Ozs7SUFDM0IsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RleHRQbGFjZWhvbGRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHRQbGFjZWhvbGRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY29sb3JzID0gW1xuICAgICcjZTUzOTM1JyxcbiAgICAnI2QzMmYyZicsXG4gICAgJyNjNjI4MjgnLFxuICAgICcjYjcxYzFjJyxcbiAgICAnI2Q4MWI2MCcsXG4gICAgJyNjMjE4NWInLFxuICAgICcjYWQxNDU3JyxcbiAgICAnIzg4MGU0ZicsXG4gICAgJyM4ZTI0YWEnLFxuICAgICcjN2IxZmEyJyxcbiAgICAnIzZhMWI5YScsXG4gICAgJyM0YTE0OGMnLFxuICAgICcjNWUzNWIxJyxcbiAgICAnIzUxMmRhOCcsXG4gICAgJyM0NTI3YTAnLFxuICAgICcjMzExYjkyJyxcbiAgICAnIzM5NDlhYicsXG4gICAgJyMzMDNmOWYnLFxuICAgICcjMjgzNTkzJyxcbiAgICAnIzFhMjM3ZScsXG4gICAgJyMxZTg4ZTUnLFxuICAgICcjMTk3NmQyJyxcbiAgICAnIzE1NjVjMCcsXG4gICAgJyMwZDQ3YTEnLFxuICAgICcjMDM5YmU1JyxcbiAgICAnIzAyODhkMScsXG4gICAgJyMwMjc3YmQnLFxuICAgICcjMDE1NzliJyxcbiAgICAnIzAwYWNjMScsXG4gICAgJyMwMDk3YTcnLFxuICAgICcjMDA4MzhmJyxcbiAgICAnIzAwNjA2NCcsXG4gICAgJyMwMDg5N2InLFxuICAgICcjMDA3OTZiJyxcbiAgICAnIzAwNjk1YycsXG4gICAgJyMwMDRkNDAnLFxuICAgICcjNDNhMDQ3JyxcbiAgICAnIzM4OGUzYycsXG4gICAgJyMyZTdkMzInLFxuICAgICcjMWI1ZTIwJyxcbiAgICAnI2ZiOGMwMCcsXG4gICAgJyNmNTdjMDAnLFxuICAgICcjZWY2YzAwJyxcbiAgICAnI2U2NTEwMCcsXG4gICAgJyNmNDUxMWUnLFxuICAgICcjZTY0YTE5JyxcbiAgICAnI2Q4NDMxNScsXG4gICAgJyNiZjM2MGMnLFxuICAgICcjNmQ0YzQxJyxcbiAgICAnIzVkNDAzNycsXG4gICAgJyM0ZTM0MmUnLFxuICAgICcjM2UyNzIzJyxcbiAgICAnIzc1NzU3NScsXG4gICAgJyM2MTYxNjEnLFxuICAgICcjNDI0MjQyJyxcbiAgICAnIzIxMjEyMScsXG4gICAgJyM1NDZlN2EnLFxuICAgICcjNDU1YTY0JyxcbiAgICAnIzM3NDc0ZicsXG4gICAgJyMyNjMyMzgnXG4gIF07XG5cbiAgQElucHV0KClcbiAgaW1nU3JjOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdGV4dFBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l6ZSA9IDQ1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaW1nU3JjKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLmltZ1NyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBseVBsYWNlaG9sZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVBsYWNlaG9sZGVyKCkge1xuICAgIC8vIE5hdGl2ZUVsZW1lbnQsIGRvY3VtZW50IHVzZWRcbiAgICAvLyBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIG5ld0VsZW0uaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZVBsYWNlaG9sZGVyKHRoaXMudGV4dFBsYWNlaG9sZGVyKTtcbiAgICAvLyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoaWxkLmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVQbGFjZWhvbGRlcih0aGlzLnRleHRQbGFjZWhvbGRlcik7XG4gICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGNoaWxkLnN0eWxlLndpZHRoID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlWydib3JkZXItcmFkaXVzJ10gPSAnNTAlJztcbiAgICBjaGlsZC5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuICAgIGNoaWxkLnN0eWxlWydsaW5lLWhlaWdodCddID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICBjaGlsZC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgY2hpbGQuc3R5bGVbJ3RleHQtYWxpZ24nXSA9ICdjZW50ZXInO1xuICAgIGNoaWxkLnN0eWxlWydmb250LXNpemUnXSA9ICh0aGlzLnNpemUgLyAyLjUpICsgJ3B4JztcbiAgICBjaGlsZC5zdHlsZVsnZm9udC1mYW1pbHknXSA9ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJztcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJ0cyA9IHBsYWNlaG9sZGVyLnNwbGl0KCcgJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiAocGFydHNbMF1bMF0gKyBwYXJ0c1sxXVswXSkudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcnRzWzBdLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIC8vIHR3byBjaGFyYWN0ZXJzXG4gICAgICAgIHJldHVybiAocGFydHNbMF1bMF0gKyBwYXJ0c1swXVsxXSkudG9VcHBlckNhc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNpbmdsZSBjaGFyYWN0ZXJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuY29sb3JzLmxlbmd0aCkpXTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Vycm9yJylcbiAgb25FcnJvcihldmVudCkge1xuICAgIHRoaXMuYXBwbHlQbGFjZWhvbGRlcigpO1xuICB9XG59XG5cbiJdfQ==