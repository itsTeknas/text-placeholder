import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
export declare class TextPlaceholderDirective implements AfterViewInit {
    private element;
    private renderer;
    private readonly colors;
    imgSrc: string;
    textPlaceholder: string;
    size: number;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    private applyPlaceholder;
    private generatePlaceholder;
    private getRandomColor;
    onError(event: any): void;
}
