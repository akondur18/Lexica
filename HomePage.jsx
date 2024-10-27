/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getOverrideProps } from "./utils";
import { Button, Flex, SelectField, Text, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const navigate = useNavigate()
  const { overrides, ...rest } = props;
  const handleButtonClick = () => {
    navigate("/split-screen-words"); // Navigate to the SplitScreenWithWords page
  };
  return (
    <Flex
      gap="10px"
      direction="row"
      width="370px"
      height="750px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <View
        width="370px"
        height="750px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(189,216,227,1)"
        {...getOverrideProps(overrides, "HomePage38935719")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="149px"
          left="23px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 439")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="36px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="54px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Choose a language"
            {...getOverrideProps(overrides, "Choose a language")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="156px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="645px"
          left="110px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 437")}
        >
          <Button
            width="unset"
            height="62px"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="primary"
            onClick={handleButtonClick}
            children="Enter"
            {...getOverrideProps(overrides, "Log In")}
          ></Button>
        </Flex>
        <SelectField
          width="300px"
          height="unset"
          placeholder="Select"
          position="absolute"
          top="257px"
          left="43px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="mandarin">Mandarin</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="arabic">Arabic</option>
          <option value="hindi">Hindi</option>
          <option value="portuguese">Portuguese</option>
        </SelectField>
      </View>
    </Flex>
  );
}
