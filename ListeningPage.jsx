/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Heading, View } from "@aws-amplify/ui-react";
export default function ListeningPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="371px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(178,204,156,1)"
      {...getOverrideProps(overrides, "ListeningPage")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="386px"
        left="102px"
        level="6"
        children="LISTENING"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </View>
  );
}
