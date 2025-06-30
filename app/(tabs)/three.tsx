import { useState } from "react";
import { Button, Heading, Separator, Sheet, Text, View } from "tamagui";

export default function TabTwoScreen() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("Sheet component rendered, isOpen:", isOpen);

  return (
    <View bg={"red"} py={12}>
      <View gap={10} px={80}>
        <Button onPress={() => setIsOpen(true)}>Open</Button>
        <Button
          onPress={() => {
            setIsOpen(false);
          }}
        >
          Close
        </Button>
      </View>
      <Sheet
        open={isOpen}
        modal={false}
        snapPoints={["fit"]}
        snapPointsMode="fit"
        position={0}
      >
        <Sheet.Handle />

        <Sheet.Frame>
          <Heading size="$5" text="center">
            This is a test sheet
          </Heading>
          <Separator borderWidth={1} width={"100%"} />
          <View flex={1} bg={"$background"} justify={"center"}>
            <Heading size="$4" text="center">
              This is the content of the sheet
            </Heading>
          </View>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
}
