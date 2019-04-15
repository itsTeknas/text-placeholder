import { Directive, Input, ElementRef, Renderer2, HostListener, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextPlaceholderDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextPlaceholderModule {
}
TextPlaceholderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TextPlaceholderDirective
                ],
                imports: [],
                exports: [
                    TextPlaceholderDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TextPlaceholderModule, TextPlaceholderDirective };

//# sourceMappingURL=ngx-text-placeholder.js.map