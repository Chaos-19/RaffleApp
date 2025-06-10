import { useSession } from "@/hooks/ctx";
import React from "react";
import { Button, View } from "tamagui";



export default function Home() {

  const { signOut } = useSession();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={()=> signOut()}>LogOut</Button>
    </View>
  );
}
