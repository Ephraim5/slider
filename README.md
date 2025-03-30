# Ephraim Devtar 🎚️  
LOGO
![logo](https://github.com/user-attachments/assets/logo)

![Devtar Slider](#) <!-- Add your main screenshot here -->

**Ephraim Slider** is a sleek, customizable, and smooth React Native slider designed for seamless user interaction.  
It supports **gesture-based control**, **dynamic progress tracking**, and a **modern UI** that enhances any mobile app experience.  

---

## ✨ Features  
✅ Fully **customizable** (colors, size, animations)  
✅ Supports **React Native Reanimated** for smooth interactions  
✅ **Gesture-based control** using react-native-gesture-handler  
✅ Lightweight & **high performance**  
✅ Works with **Expo & React Native CLI**  
✅ **Compatible with iOS & Android**  

---

## 📸 Screenshots  

| Light Mode | Dark Mode |
|------------|------------|
| ![Light Mode](#) | ![Dark Mode](#) |

---

## 🚀 Installation  

Install the package via npm or yarn:  

```sh
npm install @devtar/slider --save
# or
yarn add @devtar/slider
```  

Also, install required peer dependencies:  

```sh
npm install react-native-gesture-handler react-native-reanimated react-native-svg
```  

For **Expo projects**, ensure you have `@expo/vector-icons` installed:  

```sh
npm install @expo/vector-icons
```  

---

## 🔧 Usage  

### **Basic Example**  

```jsx
import DevtarSlider from '@devtar/slider';
import React from 'react';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DevtarSlider
        min={0}
        max={100}
        step={1}
        value={50}
        onChange={(val) => console.log(val)}
      />
    </View>
  );
};

export default App;
```  

---
## **Advance Code**
```jsx
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
// You can import supported modules from npm

import DevtarSlider from '@devtar/slider';

export default function App() {
  const [volume,setVolume] = React.useState(40)
 //is best for your initial value to be the same with your volume value
  return (
    <SafeAreaView style={styles.container}>
    <Text style={{color:"white",fontSize:20, margin:10}}>Vol: {volume}</Text>
      <DevtarSlider
        options={{ //for customizing some properties 
          showIcon: true, // for icon to show true 
          showCounter: true, // to show counter 
          iconColor: '#fff',
          counterColor: '#fff',
          backgroundColor: '#000',
          minimumValue:0,
          maximumValue:100,
          paddingSize:9,
          fillBorderRadius:10,
          widthSize:80,
          initialValue:40,
          iconChange:false,
          ephraimMeta:{
            colorOne:"#000",
            colorTwo:"#333",
            gradientPosition:{x1:1,y1:0,x2:0,y2:2},
            enableStroke:true,
            strokeSize:2,
            strokeColor:"#333",
            innerColor:"#fff"
          },
        }}
        onValueChange={setVolume}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#555',
    padding: 8,
    paddingLeft: 125,
  },
});

```
## 🎨 Customization  

## 🚀 Live Demo (Try it on Expo Snack)  
[![Open in Snack](https://img.shields.io/badge/Open%20in%20Snack-4630EB?style=for-the-badge&logo=expo)](https://snack.expo.dev/@ephraim5/devtar-slider)

Ephraim Slider is **highly customizable** with props:  

| Prop         | Type       | Default | Description |
|-------------|-----------|---------|-------------|
| `min`       | `number`  | `0`     | Minimum value of the slider |
| `max`       | `number`  | `100`   | Maximum value of the slider |
| `step`      | `number`  | `1`     | Step value for increments |
| `value`     | `number`  | `0`     | Initial slider value |
| `onChange`  | `function` | `()`    | Callback for value change |
| `trackColor`| `string`  | `#ccc`  | Color of the track |
| `thumbColor`| `string`  | `#000`  | Color of the thumb |

---

## 📌 Requirements  

- **React Native 0.68+**  
- **Expo SDK 49+ (for Expo users)**  
- **Peer Dependencies:**  
  - `react-native-reanimated`  
  - `react-native-gesture-handler`  
  - `react-native-svg`  

---

## 🛠️ Development & Contribution  

Want to improve Ephraim Slider? Feel free to fork, contribute, or report issues!  

1. Clone the repo:  
   ```sh
   git clone https://github.com/devtar/slider.git
   ```  
2. Install dependencies:  
   ```sh
   cd slider
   npm install
   ```  
3. Run the example app (optional):  
   ```sh
   cd example && npm start
   ```  
4. Make changes and create a Pull Request 🚀  

---
## Preview
![main](https://github.com/user-attachments/assets/be473e12-66b1-4522-a42d-8553481fcdbb)

![help view](https://github.com/user-attachments/assets/dc911198-6444-45b3-9218-e5b7c816f639)
![help2](https://github.com/user-attachments/assets/9a342e16-06aa-4c2e-aa01-6ad7b6c32bbf)

## 📜 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it, but you must include attribution.  

---

## 💬 Support & Contact  

For questions, issues, or feature requests, open an [issue](https://github.com/devtar/slider/issues) or contact me at **[ahitubephriam5@gmail.com/ https://gravatar.com/ahitubephriam5]**.  

___
**CONTACT NUMBER:+2349168033116**
---
![Ephraim](https://github.com/user-attachments/assets/6b527bf5-5c44-43c5-ab52-46c7043a4ab4)


### 🚀 Made with ❤️ by **Ephraim Senior Dev**
