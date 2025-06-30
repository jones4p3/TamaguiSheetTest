# TamaguiSheetTest

- View with flex={1}
<pre>
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
</pre>
Results in a strange behaviour of the Sheet-Component

- View without flex={1}
<pre>
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
</pre>
Results in a normal behaviour but the Sheet is not at the bottom.
