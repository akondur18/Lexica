/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SplitScreenOverridesProps = {
    SplitScreen?: PrimitiveOverrideProps<ViewProps>;
    "Frame 449"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SplitScreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SplitScreenOverridesProps | undefined | null;
}>;
export default function SplitScreen(props: SplitScreenProps): React.ReactElement;
