import { AuthContext, AuthType } from "@/lib/providers/authProvider";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

const Profile = () => {
  const { logout } = useContext<AuthType>(AuthContext as any);
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
      <Pressable onPress={logout}>
        <Text className="text-primary-300">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
