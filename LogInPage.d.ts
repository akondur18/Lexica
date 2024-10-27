/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, PasswordFieldProps, PhoneNumberFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogInPageOverridesProps = {
    LogInPage?: PrimitiveOverrideProps<ViewProps>;
    "Log In39912729"?: PrimitiveOverrideProps<TextProps>;
    PhoneNumberField?: PrimitiveOverrideProps<PhoneNumberFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Log In39912761"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LogInPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogInPageOverridesProps | undefined | null;
}>;
export default function LogInPage(props: LogInPageProps): React.ReactElement;
