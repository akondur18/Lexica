/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, RatingProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FeedBackPageOverridesProps = {
    FeedBackPage?: PrimitiveOverrideProps<ViewProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "Rate Your Patient Interaction"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Log In"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FeedBackPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedBackPageOverridesProps | undefined | null;
}>;
export default function FeedBackPage(props: FeedBackPageProps): React.ReactElement;
