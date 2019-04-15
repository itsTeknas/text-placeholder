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
            return (parts[0][0] + parts[0][1]).toUpperCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wbGFjZWhvbGRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGV4dC1wbGFjZWhvbGRlci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LXBsYWNlaG9sZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JHLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBMEVuQyxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFFWixXQUFNLEdBQUc7WUFDeEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNU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UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWxJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7OztZQUowQixVQUFVO1lBQWlCLFNBQVM7OztxQkFzRTVELEtBQUs7OEJBR0wsS0FBSzttQkFHTCxLQUFLO3NCQXFETCxZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQTFIckIsMENBNkRFOztJQUVGLDBDQUNlOztJQUVmLG1EQUN3Qjs7SUFFeEIsd0NBQ1U7Ozs7O0lBR1IsMkNBQTJCOzs7OztJQUMzQiw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dFBsYWNlaG9sZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFBsYWNlaG9sZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvcnMgPSBbXG4gICAgJyNlNTM5MzUnLFxuICAgICcjZDMyZjJmJyxcbiAgICAnI2M2MjgyOCcsXG4gICAgJyNiNzFjMWMnLFxuICAgICcjZDgxYjYwJyxcbiAgICAnI2MyMTg1YicsXG4gICAgJyNhZDE0NTcnLFxuICAgICcjODgwZTRmJyxcbiAgICAnIzhlMjRhYScsXG4gICAgJyM3YjFmYTInLFxuICAgICcjNmExYjlhJyxcbiAgICAnIzRhMTQ4YycsXG4gICAgJyM1ZTM1YjEnLFxuICAgICcjNTEyZGE4JyxcbiAgICAnIzQ1MjdhMCcsXG4gICAgJyMzMTFiOTInLFxuICAgICcjMzk0OWFiJyxcbiAgICAnIzMwM2Y5ZicsXG4gICAgJyMyODM1OTMnLFxuICAgICcjMWEyMzdlJyxcbiAgICAnIzFlODhlNScsXG4gICAgJyMxOTc2ZDInLFxuICAgICcjMTU2NWMwJyxcbiAgICAnIzBkNDdhMScsXG4gICAgJyMwMzliZTUnLFxuICAgICcjMDI4OGQxJyxcbiAgICAnIzAyNzdiZCcsXG4gICAgJyMwMTU3OWInLFxuICAgICcjMDBhY2MxJyxcbiAgICAnIzAwOTdhNycsXG4gICAgJyMwMDgzOGYnLFxuICAgICcjMDA2MDY0JyxcbiAgICAnIzAwODk3YicsXG4gICAgJyMwMDc5NmInLFxuICAgICcjMDA2OTVjJyxcbiAgICAnIzAwNGQ0MCcsXG4gICAgJyM0M2EwNDcnLFxuICAgICcjMzg4ZTNjJyxcbiAgICAnIzJlN2QzMicsXG4gICAgJyMxYjVlMjAnLFxuICAgICcjZmI4YzAwJyxcbiAgICAnI2Y1N2MwMCcsXG4gICAgJyNlZjZjMDAnLFxuICAgICcjZTY1MTAwJyxcbiAgICAnI2Y0NTExZScsXG4gICAgJyNlNjRhMTknLFxuICAgICcjZDg0MzE1JyxcbiAgICAnI2JmMzYwYycsXG4gICAgJyM2ZDRjNDEnLFxuICAgICcjNWQ0MDM3JyxcbiAgICAnIzRlMzQyZScsXG4gICAgJyMzZTI3MjMnLFxuICAgICcjNzU3NTc1JyxcbiAgICAnIzYxNjE2MScsXG4gICAgJyM0MjQyNDInLFxuICAgICcjMjEyMTIxJyxcbiAgICAnIzU0NmU3YScsXG4gICAgJyM0NTVhNjQnLFxuICAgICcjMzc0NzRmJyxcbiAgICAnIzI2MzIzOCdcbiAgXTtcblxuICBASW5wdXQoKVxuICBpbWdTcmM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0ZXh0UGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXplID0gNDU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIHRoaXMuaW1nU3JjLCB0aGlzLnRleHRQbGFjZWhvbGRlcik7XG4gICAgaWYgKHRoaXMuaW1nU3JjKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLmltZ1NyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBseVBsYWNlaG9sZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVBsYWNlaG9sZGVyKCkge1xuICAgIC8vIE5hdGl2ZUVsZW1lbnQsIGRvY3VtZW50IHVzZWRcbiAgICAvLyBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIG5ld0VsZW0uaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZVBsYWNlaG9sZGVyKHRoaXMudGV4dFBsYWNlaG9sZGVyKTtcbiAgICAvLyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoaWxkLmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVQbGFjZWhvbGRlcih0aGlzLnRleHRQbGFjZWhvbGRlcik7XG4gICAgY2hpbGQuc3R5bGUud2lkdGggPSB0aGlzLnNpemUgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9ICc1MCUnO1xuICAgIGNoaWxkLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgY2hpbGQuc3R5bGVbJ2xpbmUtaGVpZ2h0J10gPSB0aGlzLnNpemUgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBjaGlsZC5zdHlsZVsndGV4dC1hbGlnbiddID0gJ2NlbnRlcic7XG4gICAgY2hpbGQuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gKHRoaXMuc2l6ZSAvIDIuNSkgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlWydmb250LWZhbWlseSddID0gJ3ZlcmRhbmEnO1xuICAgIGNvbnNvbGUubG9nKGNoaWxkKTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJ0cyA9IHBsYWNlaG9sZGVyLnNwbGl0KCcgJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiAocGFydHNbMF1bMF0gKyBwYXJ0c1sxXVswXSkudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzBdWzFdKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuY29sb3JzLmxlbmd0aCkpXTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Vycm9yJylcbiAgb25FcnJvcihldmVudCkge1xuICAgIHRoaXMuYXBwbHlQbGFjZWhvbGRlcigpO1xuICB9XG59XG5cbiJdfQ==