import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: any;
  onPress?: () => void;
}

export const FeaturedCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start "
      style={{
        width: 250,
        height: 400,
        borderRadius: 10,
        position: "relative",
      }}
    >
      <Image
        source={item?.image}
        style={{ width: 250, height: 400, borderRadius: 10 }}
      />

      <Image
        source={images.cardGradient}
        style={{
          width: 250,
          height: 400,
          borderRadius: 10,
          position: "absolute",
          bottom: 0,
        }}
      />

      <View
        className="flex flex-row items-center gap-2 bg-white/90 px-3 py-1.5 "
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          borderRadius: 10,
          paddingHorizontal: 2,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Image source={icons.star} style={{ width: 15, height: 15 }} />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <View
        className="flex flex-col p-4 "
        style={{ position: "absolute", bottom: 5, marginLeft: 5 }}
      >
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text className="text-base font-rubik text-white" numberOfLines={1}>
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            ${item.price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg  relative "
      onPress={onPress}
    >
      <View
        className="flex flex-row gap-2 "
        style={{
          position: "absolute",
          right: 10,
          top: 20,
          zIndex: 50,
          backgroundColor: "#ffffff",
          paddingHorizontal: 3,
          borderRadius: 10,
        }}
      >
        <Image source={icons.star} style={{ width: 15, height: 15 }} />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5 z-50">
          {item.rating}
        </Text>
      </View>

      <Image
        source={item.image}
        className="size-44 w-full rounded-lg"
        resizeMode="cover"
      />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          {item.name}
        </Text>
        <Text className="text-xs font-rubik text-black-100">
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${item.price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
