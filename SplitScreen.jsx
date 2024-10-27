/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function SplitScreen(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(189,216,227,1)"
      {...getOverrideProps(overrides, "SplitScreen")}
      {...rest}
    >
      <View
        width="343px"
        height="360px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="25px"
        left="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 449")}
      ></View>
      <Icon
        width="375px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 375,
          height: 1.7260299500776455e-7,
        }}
        paths={[
          {
            d: "M0 0L375 0L375 -1L0 -1L0 0Z",
            stroke: "rgba(137,148,159,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="406px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
