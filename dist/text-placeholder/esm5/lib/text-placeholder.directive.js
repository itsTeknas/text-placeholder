/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
var TextPlaceholderDirective = /** @class */ (function () {
    function TextPlaceholderDirective(element, renderer) {
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
    TextPlaceholderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.imgSrc) {
            this.element.nativeElement.src = this.imgSrc;
        }
        else {
            this.applyPlaceholder();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TextPlaceholderDirective.prototype.applyPlaceholder = /**
     * @private
     * @return {?}
     */
    function () {
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        /** @type {?} */
        var child = this.renderer.createElement('p');
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
        var parent = this.renderer.parentNode(this.element.nativeElement);
        this.renderer.removeChild(parent, this.element.nativeElement);
        this.renderer.appendChild(parent, child);
    };
    /**
     * @private
     * @param {?} placeholder
     * @return {?}
     */
    TextPlaceholderDirective.prototype.generatePlaceholder = /**
     * @private
     * @param {?} placeholder
     * @return {?}
     */
    function (placeholder) {
        /** @type {?} */
        var parts = placeholder.split(' ');
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
    };
    /**
     * @private
     * @return {?}
     */
    TextPlaceholderDirective.prototype.getRandomColor = /**
     * @private
     * @return {?}
     */
    function () {
        return this.colors[Math.floor(Math.random() * (this.colors.length))];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextPlaceholderDirective.prototype.onError = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.applyPlaceholder();
    };
    TextPlaceholderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[textPlaceholder]'
                },] }
    ];
    /** @nocollapse */
    TextPlaceholderDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TextPlaceholderDirective.propDecorators = {
        imgSrc: [{ type: Input }],
        textPlaceholder: [{ type: Input }],
        size: [{ type: Input }],
        onError: [{ type: HostListener, args: ['error',] }]
    };
    return TextPlaceholderDirective;
}());
export { TextPlaceholderDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wbGFjZWhvbGRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGV4dC1wbGFjZWhvbGRlci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LXBsYWNlaG9sZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHO0lBNkVFLGtDQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFFWixXQUFNLEdBQUc7WUFDeEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1Qs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LEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpREFBYzs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBR0QsMENBQU87Ozs7SUFEUCxVQUNRLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkF2SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dCQUowQixVQUFVO2dCQUFpQixTQUFTOzs7eUJBc0U1RCxLQUFLO2tDQUdMLEtBQUs7dUJBR0wsS0FBSzswQkEwREwsWUFBWSxTQUFDLE9BQU87O0lBSXZCLCtCQUFDO0NBQUEsQUF4SUQsSUF3SUM7U0FySVksd0JBQXdCOzs7Ozs7SUFFbkMsMENBNkRFOztJQUVGLDBDQUNlOztJQUVmLG1EQUN3Qjs7SUFFeEIsd0NBQ1U7Ozs7O0lBR1IsMkNBQTJCOzs7OztJQUMzQiw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dFBsYWNlaG9sZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFBsYWNlaG9sZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvcnMgPSBbXG4gICAgJyNlNTM5MzUnLFxuICAgICcjZDMyZjJmJyxcbiAgICAnI2M2MjgyOCcsXG4gICAgJyNiNzFjMWMnLFxuICAgICcjZDgxYjYwJyxcbiAgICAnI2MyMTg1YicsXG4gICAgJyNhZDE0NTcnLFxuICAgICcjODgwZTRmJyxcbiAgICAnIzhlMjRhYScsXG4gICAgJyM3YjFmYTInLFxuICAgICcjNmExYjlhJyxcbiAgICAnIzRhMTQ4YycsXG4gICAgJyM1ZTM1YjEnLFxuICAgICcjNTEyZGE4JyxcbiAgICAnIzQ1MjdhMCcsXG4gICAgJyMzMTFiOTInLFxuICAgICcjMzk0OWFiJyxcbiAgICAnIzMwM2Y5ZicsXG4gICAgJyMyODM1OTMnLFxuICAgICcjMWEyMzdlJyxcbiAgICAnIzFlODhlNScsXG4gICAgJyMxOTc2ZDInLFxuICAgICcjMTU2NWMwJyxcbiAgICAnIzBkNDdhMScsXG4gICAgJyMwMzliZTUnLFxuICAgICcjMDI4OGQxJyxcbiAgICAnIzAyNzdiZCcsXG4gICAgJyMwMTU3OWInLFxuICAgICcjMDBhY2MxJyxcbiAgICAnIzAwOTdhNycsXG4gICAgJyMwMDgzOGYnLFxuICAgICcjMDA2MDY0JyxcbiAgICAnIzAwODk3YicsXG4gICAgJyMwMDc5NmInLFxuICAgICcjMDA2OTVjJyxcbiAgICAnIzAwNGQ0MCcsXG4gICAgJyM0M2EwNDcnLFxuICAgICcjMzg4ZTNjJyxcbiAgICAnIzJlN2QzMicsXG4gICAgJyMxYjVlMjAnLFxuICAgICcjZmI4YzAwJyxcbiAgICAnI2Y1N2MwMCcsXG4gICAgJyNlZjZjMDAnLFxuICAgICcjZTY1MTAwJyxcbiAgICAnI2Y0NTExZScsXG4gICAgJyNlNjRhMTknLFxuICAgICcjZDg0MzE1JyxcbiAgICAnI2JmMzYwYycsXG4gICAgJyM2ZDRjNDEnLFxuICAgICcjNWQ0MDM3JyxcbiAgICAnIzRlMzQyZScsXG4gICAgJyMzZTI3MjMnLFxuICAgICcjNzU3NTc1JyxcbiAgICAnIzYxNjE2MScsXG4gICAgJyM0MjQyNDInLFxuICAgICcjMjEyMTIxJyxcbiAgICAnIzU0NmU3YScsXG4gICAgJyM0NTVhNjQnLFxuICAgICcjMzc0NzRmJyxcbiAgICAnIzI2MzIzOCdcbiAgXTtcblxuICBASW5wdXQoKVxuICBpbWdTcmM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0ZXh0UGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXplID0gNDU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbWdTcmMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuaW1nU3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGx5UGxhY2Vob2xkZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGxhY2Vob2xkZXIoKSB7XG4gICAgLy8gTmF0aXZlRWxlbWVudCwgZG9jdW1lbnQgdXNlZFxuICAgIC8vIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gbmV3RWxlbS5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlUGxhY2Vob2xkZXIodGhpcy50ZXh0UGxhY2Vob2xkZXIpO1xuICAgIC8vIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsZW0sIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZVBsYWNlaG9sZGVyKHRoaXMudGV4dFBsYWNlaG9sZGVyKTtcbiAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgY2hpbGQuc3R5bGUud2lkdGggPSB0aGlzLnNpemUgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9ICc1MCUnO1xuICAgIGNoaWxkLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgY2hpbGQuc3R5bGVbJ2xpbmUtaGVpZ2h0J10gPSB0aGlzLnNpemUgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBjaGlsZC5zdHlsZVsndGV4dC1hbGlnbiddID0gJ2NlbnRlcic7XG4gICAgY2hpbGQuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gKHRoaXMuc2l6ZSAvIDIuNSkgKyAncHgnO1xuICAgIGNoaWxkLnN0eWxlWydmb250LWZhbWlseSddID0gJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChwYXJlbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcnRzID0gcGxhY2Vob2xkZXIuc3BsaXQoJyAnKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzFdWzBdKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFydHNbMF0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgLy8gdHdvIGNoYXJhY3RlcnNcbiAgICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzBdWzFdKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2luZ2xlIGNoYXJhY3RlclxuICAgICAgICByZXR1cm4gcGFydHNbMF1bMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jb2xvcnMubGVuZ3RoKSldO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZXJyb3InKVxuICBvbkVycm9yKGV2ZW50KSB7XG4gICAgdGhpcy5hcHBseVBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cblxuIl19