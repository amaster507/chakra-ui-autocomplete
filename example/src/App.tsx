import React from 'react'
import { ThemeProvider, CSSReset, Text, Flex, Heading, Avatar } from '@chakra-ui/core'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import theme from './theme'


export interface Item {
  label: string;
  value: string;
}
const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
];

export default function App() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const customRender = <T extends Item>(selected: T) => {
    return (
      <Flex flexDir="row" alignItems="center">
        <Avatar mr={2} size="sm" name={selected.label} />
        <Text>{selected.label}</Text>
      </Flex>
    )
  }



  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Flex flexWrap="wrap" px={6} pt={12} height="100vh" bg="rgba(247,250,252)" justify="center" borderRight="1px solid #ddd" >

        <Flex minW="25rem" w="25rem" flexDirection="column">
          <Heading mb={3} as="h1" size="md">Basic Example with Style Props</Heading>

          <CUIAutoComplete
            tagStyleProps={{
              rounded: 'full'
            }}
            label="Choose preferred work locations"
            placeholder="Type a Country"
            onCreateItem={handleCreateItem}
            items={pickerItems}
            selectedItems={selectedItems}
            onSelectedItemsChange={(changes) =>
              handleSelectedItemsChange(changes.selectedItems)
            }
          />


          <Flex mt={6} />
          <Heading mb={3} as="h1" size="md">Basic Example with Custom Renderer</Heading>
          <CUIAutoComplete
            tagStyleProps={{
              rounded: 'full'
            }}
            label="Choose preferred work locations"
            placeholder="Type a Country"
            onCreateItem={handleCreateItem}
            items={pickerItems}
            itemRenderer={customRender}
            selectedItems={selectedItems}
            onSelectedItemsChange={(changes) =>
              handleSelectedItemsChange(changes.selectedItems)
            }
          />

        </Flex>


      </Flex>
    </ThemeProvider >
  );
}