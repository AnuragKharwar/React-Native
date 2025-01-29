import { AuthContext, AuthType } from "@/lib/providers/authProvider";
import { Redirect, Slot } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { user, loading } = useContext<AuthType>(AuthContext as any);

  console.log("user from main loyout", user);

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
