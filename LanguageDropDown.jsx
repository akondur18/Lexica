/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { SelectField, View } from "@aws-amplify/ui-react";
export default function LanguageDropDown(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LanguageDropDown")}
      {...rest}
    >
      <SelectField
        width="300px"
        height="unset"
        placeholder="Select"
        position="absolute"
        top="0px"
        left="0px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}
