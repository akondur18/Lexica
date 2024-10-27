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
import { View } from "@aws-amplify/ui-react";
export default function Pulsatingcircle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Filled Circle": {
          width: "154px",
          height: "157px",
          backgroundColor: "rgba(189,206,176,0.6)",
        },
        Pulsatingcircle: { width: "154px", height: "157px" },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Filled Circle": {
          width: "199px",
          height: "200px",
          backgroundColor: "rgba(189,206,176,0.5)",
        },
        Pulsatingcircle: { width: "199px", height: "200px" },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Filled Circle": {
          width: "154px",
          height: "157px",
          backgroundColor: "rgba(189,206,176,0.6)",
        },
        Pulsatingcircle: { width: "154px", height: "157px" },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "Filled Circle": {}, Pulsatingcircle: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Filled Circle": {
          width: "154px",
          height: "157px",
          backgroundColor: "rgba(189,206,176,0.6)",
        },
        Pulsatingcircle: { width: "154px", height: "157px" },
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="90px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pulsatingcircle")}
      {...rest}
    >
      <View
        width="90px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="90px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(189,206,176,1)"
        {...getOverrideProps(overrides, "Filled Circle")}
      ></View>
    </View>
  );
}
