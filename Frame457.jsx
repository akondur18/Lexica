/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Pulsatingcircle from "./Pulsatingcircle";
import { View } from "@aws-amplify/ui-react";
export default function Frame457(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="496px"
      height="577px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame457")}
      {...rest}
    >
      <Pulsatingcircle
        width="90px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="243px"
        left="205px"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Pulsating circle")}
      ></Pulsatingcircle>
    </View>
  );
}
