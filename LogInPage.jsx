/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  PasswordField,
  PhoneNumberField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function LogInPage(props) {
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
      {...getOverrideProps(overrides, "LogInPage")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="32px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 24px - 205px)"
        left="calc(50% - 45px - 0px)"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log In"
        {...getOverrideProps(overrides, "Log In39912729")}
      ></Text>
      <PhoneNumberField
        width="300px"
        height="unset"
        placeholder="Phone Number"
        position="absolute"
        top="227px"
        left="35px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={true}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "PhoneNumberField")}
      ></PhoneNumberField>
      <PasswordField
        width="300px"
        height="unset"
        placeholder="Password"
        position="absolute"
        top="300px"
        left="35px"
        size="default"
        isDisabled={true}
        labelHidden={true}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
      <Button
        width="136px"
        height="62px"
        position="absolute"
        top="418px"
        left="117px"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Log In"
        {...getOverrideProps(overrides, "Log In39912761")}
      ></Button>
    </View>
  );
}
