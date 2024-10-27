/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, SwitchField } from "@aws-amplify/ui-react";
export default function Toggle1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { SwitchField: {}, Toggle1: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        SwitchField: { label: "Stop Speaking", defaultChecked: "false" },
        Toggle1: {},
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Toggle1")}
      {...rest}
    >
      <SwitchField
        width="unset"
        height="unset"
        label="Start Speaking"
        shrink="0"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField")}
      ></SwitchField>
    </Flex>
  );
}
