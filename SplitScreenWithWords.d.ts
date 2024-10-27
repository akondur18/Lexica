/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ListeningPageProps } from "./ListeningPage";
import { ButtonProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
import { LoremipsumodorameProps } from "./Loremipsumodorame";
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
export declare type SplitScreenWithWordsOverridesProps = {
    SplitScreenWithWords?: PrimitiveOverrideProps<ViewProps>;
    "Frame 451"?: ListeningPageProps;
    "Frame 446"?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum odor ame...393512021"?: LoremipsumodorameProps;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Lorem ipsum odor ame...39903225"?: LoremipsumodorameProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SplitScreenWithWordsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SplitScreenWithWordsOverridesProps | undefined | null;
}>;
export default function SplitScreenWithWords(props: SplitScreenWithWordsProps): React.ReactElement;
