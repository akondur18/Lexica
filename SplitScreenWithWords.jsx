/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import ListeningPage from "./ListeningPage";
import { Button, Icon, View } from "@aws-amplify/ui-react";
import Loremipsumodorame from "./Loremipsumodorame";
export default function SplitScreenWithWords(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="371px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SplitScreenWithWords")}
      {...rest}
    >
      <ListeningPage
        width="371px"
        height="812px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(189,216,227,1)"
        {...getOverrideProps(overrides, "Frame 451")}
      ></ListeningPage>
      <View
        width="346px"
        height="316px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="52.34%"
        bottom="8.74%"
        left="2.43%"
        right="4.31%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "Frame 446")}
      >
        <View
          width="374.38px"
          height="360px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="-12.34%"
          bottom="-1.58%"
          left="4.42%"
          right="-12.62%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        ></View>
      </View>
      <Loremipsumodorame
        width="286px"
        height="253px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="56.16%"
        bottom="12.68%"
        left="6.47%"
        right="16.44%"
        padding="0px 0px 0px 0px"
        property1="0"
        {...getOverrideProps(overrides, "Lorem ipsum odor ame...393512021")}
      ></Loremipsumodorame>
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
        top="50%"
        bottom="50%"
        left="0%"
        right="-1.08%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Loremipsumodorame
        width="320.11px"
        height="335.51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43.78%"
        bottom="14.9%"
        left="92.86%"
        right="-79.14%"
        transformOrigin="top left"
        transform="rotate(-179.92deg)"
        padding="0px 0px 0px 0px"
        property1="0"
        {...getOverrideProps(overrides, "Lorem ipsum odor ame...39903225")}
      ></Loremipsumodorame>
      <Button
        width="45px"
        height="45px"
        position="absolute"
        top="calc(50% - 22.5px - 3.5px)"
        left="calc(50% - 22.5px - 1px)"
        size="default"
        isDisabled={false}
        variation="primary"
        children=""
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
