# TamaguiSheetTest

## View with flex={1}
Results in a **strange behavior** of the Sheet component:
```typescript
<View bg={"red"} py={12} flex={1}>
  <View gap={10} px={80}> Buttons.. 
  </View>
      <Sheet
        open={isOpen}
        modal={false}
        snapPoints={["fit"]}
        snapPointsMode="fit"
        position={0}
      >
        ...
      </Sheet>
    </View>
```

## View without flex={1}
Results in normal behavior, but the Sheet is not at the bottom
```typescript
<View bg={"red"} py={12}>
  <View gap={10} px={80}> Buttons.. 
  </View>
      <Sheet
        open={isOpen}
        modal={false}
        snapPoints={["fit"]}
        snapPointsMode="fit"
        position={0}
      >
        ...
      </Sheet>
    </View>
```
