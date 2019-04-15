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
        console.log(this.element, this.imgSrc, this.textPlaceholder);
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
            return (parts[0][0] + parts[0][1]).toUpperCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wbGFjZWhvbGRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGV4dC1wbGFjZWhvbGRlci8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LXBsYWNlaG9sZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHO0lBNkVFLGtDQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFFWixXQUFNLEdBQUc7WUFDeEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztRQVNGLFNBQUksR0FBRyxFQUFFLENBQUM7SUFLTixDQUFDOzs7O0lBRUwsa0RBQWU7OztJQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRU8sbURBQWdCOzs7O0lBQXhCO1FBQ0UsK0JBQStCO1FBQy9CLCtDQUErQztRQUMvQyxzRUFBc0U7UUFDdEUsMkZBQTJGOzs7Ozs7WUFFckYsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4RCxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDYixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVPLHNEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsV0FBbUI7O1lBQ3ZDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQUVPLGlEQUFjOzs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFHRCwwQ0FBTzs7OztJQURQLFVBQ1EsS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQWxJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBSjBCLFVBQVU7Z0JBQWlCLFNBQVM7Ozt5QkFzRTVELEtBQUs7a0NBR0wsS0FBSzt1QkFHTCxLQUFLOzBCQXFETCxZQUFZLFNBQUMsT0FBTzs7SUFJdkIsK0JBQUM7Q0FBQSxBQW5JRCxJQW1JQztTQWhJWSx3QkFBd0I7Ozs7OztJQUVuQywwQ0E2REU7O0lBRUYsMENBQ2U7O0lBRWYsbURBQ3dCOztJQUV4Qix3Q0FDVTs7Ozs7SUFHUiwyQ0FBMkI7Ozs7O0lBQzNCLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZXh0UGxhY2Vob2xkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBUZXh0UGxhY2Vob2xkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGNvbG9ycyA9IFtcbiAgICAnI2U1MzkzNScsXG4gICAgJyNkMzJmMmYnLFxuICAgICcjYzYyODI4JyxcbiAgICAnI2I3MWMxYycsXG4gICAgJyNkODFiNjAnLFxuICAgICcjYzIxODViJyxcbiAgICAnI2FkMTQ1NycsXG4gICAgJyM4ODBlNGYnLFxuICAgICcjOGUyNGFhJyxcbiAgICAnIzdiMWZhMicsXG4gICAgJyM2YTFiOWEnLFxuICAgICcjNGExNDhjJyxcbiAgICAnIzVlMzViMScsXG4gICAgJyM1MTJkYTgnLFxuICAgICcjNDUyN2EwJyxcbiAgICAnIzMxMWI5MicsXG4gICAgJyMzOTQ5YWInLFxuICAgICcjMzAzZjlmJyxcbiAgICAnIzI4MzU5MycsXG4gICAgJyMxYTIzN2UnLFxuICAgICcjMWU4OGU1JyxcbiAgICAnIzE5NzZkMicsXG4gICAgJyMxNTY1YzAnLFxuICAgICcjMGQ0N2ExJyxcbiAgICAnIzAzOWJlNScsXG4gICAgJyMwMjg4ZDEnLFxuICAgICcjMDI3N2JkJyxcbiAgICAnIzAxNTc5YicsXG4gICAgJyMwMGFjYzEnLFxuICAgICcjMDA5N2E3JyxcbiAgICAnIzAwODM4ZicsXG4gICAgJyMwMDYwNjQnLFxuICAgICcjMDA4OTdiJyxcbiAgICAnIzAwNzk2YicsXG4gICAgJyMwMDY5NWMnLFxuICAgICcjMDA0ZDQwJyxcbiAgICAnIzQzYTA0NycsXG4gICAgJyMzODhlM2MnLFxuICAgICcjMmU3ZDMyJyxcbiAgICAnIzFiNWUyMCcsXG4gICAgJyNmYjhjMDAnLFxuICAgICcjZjU3YzAwJyxcbiAgICAnI2VmNmMwMCcsXG4gICAgJyNlNjUxMDAnLFxuICAgICcjZjQ1MTFlJyxcbiAgICAnI2U2NGExOScsXG4gICAgJyNkODQzMTUnLFxuICAgICcjYmYzNjBjJyxcbiAgICAnIzZkNGM0MScsXG4gICAgJyM1ZDQwMzcnLFxuICAgICcjNGUzNDJlJyxcbiAgICAnIzNlMjcyMycsXG4gICAgJyM3NTc1NzUnLFxuICAgICcjNjE2MTYxJyxcbiAgICAnIzQyNDI0MicsXG4gICAgJyMyMTIxMjEnLFxuICAgICcjNTQ2ZTdhJyxcbiAgICAnIzQ1NWE2NCcsXG4gICAgJyMzNzQ3NGYnLFxuICAgICcjMjYzMjM4J1xuICBdO1xuXG4gIEBJbnB1dCgpXG4gIGltZ1NyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHRleHRQbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNpemUgPSA0NTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCwgdGhpcy5pbWdTcmMsIHRoaXMudGV4dFBsYWNlaG9sZGVyKTtcbiAgICBpZiAodGhpcy5pbWdTcmMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuaW1nU3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGx5UGxhY2Vob2xkZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGxhY2Vob2xkZXIoKSB7XG4gICAgLy8gTmF0aXZlRWxlbWVudCwgZG9jdW1lbnQgdXNlZFxuICAgIC8vIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gbmV3RWxlbS5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlUGxhY2Vob2xkZXIodGhpcy50ZXh0UGxhY2Vob2xkZXIpO1xuICAgIC8vIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsZW0sIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZVBsYWNlaG9sZGVyKHRoaXMudGV4dFBsYWNlaG9sZGVyKTtcbiAgICBjaGlsZC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICBjaGlsZC5zdHlsZVsnYm9yZGVyLXJhZGl1cyddID0gJzUwJSc7XG4gICAgY2hpbGQuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICBjaGlsZC5zdHlsZVsnbGluZS1oZWlnaHQnXSA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgY2hpbGQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGNoaWxkLnN0eWxlWyd0ZXh0LWFsaWduJ10gPSAnY2VudGVyJztcbiAgICBjaGlsZC5zdHlsZVsnZm9udC1zaXplJ10gPSAodGhpcy5zaXplIC8gMi41KSArICdweCc7XG4gICAgY2hpbGQuc3R5bGVbJ2ZvbnQtZmFtaWx5J10gPSAndmVyZGFuYSc7XG4gICAgY29uc29sZS5sb2coY2hpbGQpO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChwYXJlbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcnRzID0gcGxhY2Vob2xkZXIuc3BsaXQoJyAnKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIChwYXJ0c1swXVswXSArIHBhcnRzWzFdWzBdKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHBhcnRzWzBdWzBdICsgcGFydHNbMF1bMV0pLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jb2xvcnMubGVuZ3RoKSldO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZXJyb3InKVxuICBvbkVycm9yKGV2ZW50KSB7XG4gICAgdGhpcy5hcHBseVBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cblxuIl19