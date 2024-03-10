import React from "react";

/**
 * How do we add a new base element to React's JSX?
 *
 * You'll need to do some detective work: check
 * out JSX.IntrinsicElements.
 *
 * The JSX namespace comes from React - you'll need
 * to check out React's type definitions.
 */

const element = <custom-element>hello world</custom-element>;

<h1></h1>
declare global { 
      namespace React.JSX {
            interface IntrinsicElements {
                  ["custom-element"]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
            }
      }

}
