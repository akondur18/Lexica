/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Rating, Text, TextField, View } from "@aws-amplify/ui-react";
export default function FeedBackPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="370px"
      height="750px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(189,216,227,1)"
      {...getOverrideProps(overrides, "FeedBackPage")}
      {...rest}
    >
      <Rating
        width="unset"
        height="unset"
        position="absolute"
        top="159px"
        left="79px"
        size="large"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 18px - 257px)"
        left="calc(50% - 155px - 0px)"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rate Your Patient Interaction"
        {...getOverrideProps(overrides, "Rate Your Patient Interaction")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        placeholder="Type here"
        position="absolute"
        top="240px"
        left="35px"
        backgroundColor="rgba(233,235,236,1)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        width="136px"
        height="62px"
        position="absolute"
        top="433px"
        left="119px"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Log In"
        {...getOverrideProps(overrides, "Log In")}
      ></Button>
    </View>
  );
}
