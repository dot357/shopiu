/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ImageProps } from "./components/hover-image/types";
export { ImageProps } from "./components/hover-image/types";
export namespace Components {
    interface HoverImage {
        "backgroundColor"?: string;
        "main": ImageProps;
        "secondary": ImageProps;
        "size"?: {
    width: number | string;
    height: number | string;
  };
    }
}
declare global {
    interface HTMLHoverImageElement extends Components.HoverImage, HTMLStencilElement {
    }
    var HTMLHoverImageElement: {
        prototype: HTMLHoverImageElement;
        new (): HTMLHoverImageElement;
    };
    interface HTMLElementTagNameMap {
        "hover-image": HTMLHoverImageElement;
    }
}
declare namespace LocalJSX {
    interface HoverImage {
        "backgroundColor"?: string;
        "main"?: ImageProps;
        "secondary"?: ImageProps;
        "size"?: {
    width: number | string;
    height: number | string;
  };
    }
    interface IntrinsicElements {
        "hover-image": HoverImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hover-image": LocalJSX.HoverImage & JSXBase.HTMLAttributes<HTMLHoverImageElement>;
        }
    }
}
