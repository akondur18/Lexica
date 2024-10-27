/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type VerificationOverridesProps = {
    Verification?: PrimitiveOverrideProps<ViewProps>;
    "Verify Your Details"?: PrimitiveOverrideProps<TextProps>;
    "Enter First Name"?: PrimitiveOverrideProps<TextProps>;
    InputGroup398811651?: PrimitiveOverrideProps<FlexProps>;
    Input398811652?: PrimitiveOverrideProps<FlexProps>;
    placeholder398811653?: PrimitiveOverrideProps<TextProps>;
    "Enter Last Name"?: PrimitiveOverrideProps<TextProps>;
    InputGroup398811658?: PrimitiveOverrideProps<FlexProps>;
    Input398811659?: PrimitiveOverrideProps<FlexProps>;
    placeholder398811660?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    Enter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VerificationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VerificationOverridesProps | undefined | null;
}>;
export default function Verification(props: VerificationProps): React.ReactElement;
