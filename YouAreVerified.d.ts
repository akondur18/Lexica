/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type YouAreVerifiedOverridesProps = {
    YouAreVerified?: PrimitiveOverrideProps<ViewProps>;
    VerifiedFinal?: PrimitiveOverrideProps<ViewProps>;
    "You are verified!"?: PrimitiveOverrideProps<TextProps>;
    "Now please create your clone voice below!"?: PrimitiveOverrideProps<TextProps>;
    "Log In"?: PrimitiveOverrideProps<ButtonProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector39912806?: PrimitiveOverrideProps<IconProps>;
    Vector39912807?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type YouAreVerifiedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: YouAreVerifiedOverridesProps | undefined | null;
}>;
export default function YouAreVerified(props: YouAreVerifiedProps): React.ReactElement;
