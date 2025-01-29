import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-extrabold text-gray-900">
        Hello Anurag
      </Text>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile </Link>
    </View>
  );
}
