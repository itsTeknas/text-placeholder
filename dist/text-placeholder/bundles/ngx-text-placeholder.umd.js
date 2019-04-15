(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-text-placeholder', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-text-placeholder'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Directive, args: [{
                        selector: '[textPlaceholder]'
                    },] }
        ];
        /** @nocollapse */
        TextPlaceholderDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        TextPlaceholderDirective.propDecorators = {
            imgSrc: [{ type: core.Input }],
            textPlaceholder: [{ type: core.Input }],
            size: [{ type: core.Input }],
            onError: [{ type: core.HostListener, args: ['error',] }]
        };
        return TextPlaceholderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextPlaceholderModule = /** @class */ (function () {
        function TextPlaceholderModule() {
        }
        TextPlaceholderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            TextPlaceholderDirective
                        ],
                        imports: [],
                        exports: [
                            TextPlaceholderDirective
                        ]
                    },] }
        ];
        return TextPlaceholderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TextPlaceholderModule = TextPlaceholderModule;
    exports.TextPlaceholderDirective = TextPlaceholderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-text-placeholder.umd.js.map