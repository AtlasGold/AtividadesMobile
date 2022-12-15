import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { theme } from "../utils";
import Context from "../context/Context";
import { TextInput } from "react-native-gesture-handler";
import { signIn, signUp } from "../firebase";

export default function SignIn() {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [mode, setMode]: any = useState("SignUp");

  const {
    theme: { colors },
  } = useContext(Context);

  async function handlePress() {
    if (mode === "SignUp") await signUp(email, password);
    if (mode === "SignIn") await signIn(email, password);
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{ color: colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        TITULO FODA
      </Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ marginTop: 2 }}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title={mode === "signUp" ? "Sign Up" : "Login"}
          disabled={!password || !email}
          color={colors.secondary}
          onPress={handlePress}
        />
      </View>
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() =>
          mode === "signUp" ? setMode("signIn") : setMode("signUp")
        }
      >
        <Text>
          {mode === "signUp"
            ? "Alredy have an account? Sign In"
            : "Don't Have account? Sign Up!"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
