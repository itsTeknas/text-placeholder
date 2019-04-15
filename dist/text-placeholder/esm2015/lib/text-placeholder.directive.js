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
        console.log(this.element, this.imgSrc, this.textPlaceholder);
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
        child.style['font-family'] = 'verdana';
        console.log(child);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wbGFjZWhvbGRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGV4dC1wbGFjZWhvbGRlci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LXBsYWNlaG9sZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JHLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBMEVuQyxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFFWixXQUFNLEdBQUc7WUFDeEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNU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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsbUJBQW1CO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF6SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFKMEIsVUFBVTtZQUFpQixTQUFTOzs7cUJBc0U1RCxLQUFLOzhCQUdMLEtBQUs7bUJBR0wsS0FBSztzQkE0REwsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUFqSXJCLDBDQTZERTs7SUFFRiwwQ0FDZTs7SUFFZixtREFDd0I7O0lBRXhCLHdDQUNVOzs7OztJQUdSLDJDQUEyQjs7Ozs7SUFDM0IsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RleHRQbGFjZWhvbGRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHRQbGFjZWhvbGRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY29sb3JzID0gW1xuICAgICcjZTUzOTM1JyxcbiAgICAnI2QzMmYyZicsXG4gICAgJyNjNjI4MjgnLFxuICAgICcjYjcxYzFjJyxcbiAgICAnI2Q4MWI2MCcsXG4gICAgJyNjMjE4NWInLFxuICAgICcjYWQxNDU3JyxcbiAgICAnIzg4MGU0ZicsXG4gICAgJyM4ZTI0YWEnLFxuICAgICcjN2IxZmEyJyxcbiAgICAnIzZhMWI5YScsXG4gICAgJyM0YTE0OGMnLFxuICAgICcjNWUzNWIxJyxcbiAgICAnIzUxMmRhOCcsXG4gICAgJyM0NTI3YTAnLFxuICAgICcjMzExYjkyJyxcbiAgICAnIzM5NDlhYicsXG4gICAgJyMzMDNmOWYnLFxuICAgICcjMjgzNTkzJyxcbiAgICAnIzFhMjM3ZScsXG4gICAgJyMxZTg4ZTUnLFxuICAgICcjMTk3NmQyJyxcbiAgICAnIzE1NjVjMCcsXG4gICAgJyMwZDQ3YTEnLFxuICAgICcjMDM5YmU1JyxcbiAgICAnIzAyODhkMScsXG4gICAgJyMwMjc3YmQnLFxuICAgICcjMDE1NzliJyxcbiAgICAnIzAwYWNjMScsXG4gICAgJyMwMDk3YTcnLFxuICAgICcjMDA4MzhmJyxcbiAgICAnIzAwNjA2NCcsXG4gICAgJyMwMDg5N2InLFxuICAgICcjMDA3OTZiJyxcbiAgICAnIzAwNjk1YycsXG4gICAgJyMwMDRkNDAnLFxuICAgICcjNDNhMDQ3JyxcbiAgICAnIzM4OGUzYycsXG4gICAgJyMyZTdkMzInLFxuICAgICcjMWI1ZTIwJyxcbiAgICAnI2ZiOGMwMCcsXG4gICAgJyNmNTdjMDAnLFxuICAgICcjZWY2YzAwJyxcbiAgICAnI2U2NTEwMCcsXG4gICAgJyNmNDUxMWUnLFxuICAgICcjZTY0YTE5JyxcbiAgICAnI2Q4NDMxNScsXG4gICAgJyNiZjM2MGMnLFxuICAgICcjNmQ0YzQxJyxcbiAgICAnIzVkNDAzNycsXG4gICAgJyM0ZTM0MmUnLFxuICAgICcjM2UyNzIzJyxcbiAgICAnIzc1NzU3NScsXG4gICAgJyM2MTYxNjEnLFxuICAgICcjNDI0MjQyJyxcbiAgICAnIzIxMjEyMScsXG4gICAgJyM1NDZlN2EnLFxuICAgICcjNDU1YTY0JyxcbiAgICAnIzM3NDc0ZicsXG4gICAgJyMyNjMyMzgnXG4gIF07XG5cbiAgQElucHV0KClcbiAgaW1nU3JjOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdGV4dFBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l6ZSA9IDQ1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LCB0aGlzLmltZ1NyYywgdGhpcy50ZXh0UGxhY2Vob2xkZXIpO1xuICAgIGlmICh0aGlzLmltZ1NyYykge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5pbWdTcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwbHlQbGFjZWhvbGRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlQbGFjZWhvbGRlcigpIHtcbiAgICAvLyBOYXRpdmVFbGVtZW50LCBkb2N1bWVudCB1c2VkXG4gICAgLy8gY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBuZXdFbGVtLmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVQbGFjZWhvbGRlcih0aGlzLnRleHRQbGFjZWhvbGRlcik7XG4gICAgLy8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbSwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlUGxhY2Vob2xkZXIodGhpcy50ZXh0UGxhY2Vob2xkZXIpO1xuICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBjaGlsZC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICBjaGlsZC5zdHlsZVsnYm9yZGVyLXJhZGl1cyddID0gJzUwJSc7XG4gICAgY2hpbGQuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICBjaGlsZC5zdHlsZVsnbGluZS1oZWlnaHQnXSA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGNoaWxkLnN0eWxlWyd0ZXh0LWFsaWduJ10gPSAnY2VudGVyJztcbiAgICBjaGlsZC5zdHlsZVsnZm9udC1zaXplJ10gPSAodGhpcy5zaXplIC8gMi41KSArICdweCc7XG4gICAgY2hpbGQuc3R5bGVbJ2ZvbnQtZmFtaWx5J10gPSAndmVyZGFuYSc7XG4gICAgY29uc29sZS5sb2coY2hpbGQpO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChwYXJlbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcnRzID0gcGxhY2Vob2xkZXIuc3BsaXQoJyAnKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzFdWzBdKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFydHNbMF0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgLy8gdHdvIGNoYXJhY3RlcnNcbiAgICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzBdWzFdKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2luZ2xlIGNoYXJhY3RlclxuICAgICAgICByZXR1cm4gcGFydHNbMF1bMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jb2xvcnMubGVuZ3RoKSldO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZXJyb3InKVxuICBvbkVycm9yKGV2ZW50KSB7XG4gICAgdGhpcy5hcHBseVBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cblxuIl19