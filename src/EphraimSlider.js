import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Svg, {
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height } = Dimensions.get('window');
const SLIDER_HEIGHT = 400;
const SLIDER_WIDTH = 90;
const THUMB_RADIUS = 22;
const TRACK_WIDTH = 20;

const DevtarSlider = ({ options, onValueChange }) => {
  const [showIcon, setShowIcon] = useState(true);
  const [showCounter, setShowCounter] = useState(true);
  const [iconChange, setIconChange] = useState(true);
  const [iconColor, setIconColor] = useState('#666');
  const [backgroundColor, setBackgroundColor] = useState('#666');
  const [paddingSize, setPaddingSize] = useState(9);
  const [fillBorderRadius, setFillBorderRaduis] = useState(10);
  const [widthSize, setWidthSize] = useState(80);
  const [counterColor, setCounterColor] = useState('#666');
  const [moveIcon, setMoveIcon] = useState(false);
  const [minimumValue, setMinimumValue] = useState(0);
  const [maximumValue, setMaximumValue] = useState(100);
  const [initialValue, setInitialValue] = useState(50);
  const sliderValue = useSharedValue(initialValue);
  const [displayValue, setDisplayValue] = useState(initialValue);
  const MIN_VALUE = minimumValue;
  const MAX_VALUE = maximumValue;
  const [ephraimMeta, setEphraimMeta] = useState({
    gradientPosition: { x1: 1, y1: 0, x2: 0, y2: 3 },
    colorOne: '#000',
    colorTwo: '#444',
    innerColor: '#e0e0e0',
    enableStroke: true,
    strokeFill: '#666',
    strokeSize: 1,
  });

  useEffect(() => {
    if (options) {
      setShowIcon(options.showIcon ?? true);
      setPaddingSize(options.paddingSize ?? paddingSize);
      setFillBorderRaduis(options.fillBorderRadius ?? fillBorderRadius);
      setWidthSize(options.widthSize ?? widthSize);
      setMinimumValue(options.minimumValue ?? minimumValue);
      setIconChange(options.iconChange ?? iconChange);
      setMaximumValue(options.maximumValue ?? maximumValue);
      setInitialValue(options.initialValue ?? initialValue);
      setShowCounter(options.showCounter ?? true);
      setIconColor(options.iconColor ?? iconColor);
      setCounterColor(options.counterColor ?? counterColor);
      setBackgroundColor(options.backgroundColor ?? backgroundColor);
      setMoveIcon(options.moveIcon ?? false);

      setEphraimMeta((prev) => ({
        gradientPosition: {
          x1: options.ephraimMeta?.gradientPosition?.x1 ?? 1,
          y1: options.ephraimMeta?.gradientPosition?.y1 ?? 0,
          x2: options.ephraimMeta?.gradientPosition?.x2 ?? 0,
          y2: options.ephraimMeta?.gradientPosition?.y2 ?? 3,
        },
        colorOne: options.ephraimMeta?.colorOne ?? '#000',
        colorTwo: options.ephraimMeta?.colorTwo ?? '#444',
        innerColor: options.ephraimMeta?.innerColor ?? '#e0e0e0',
        enableStroke: options.ephraimMeta?.enableStroke ?? true,
        strokeFill: options.ephraimMeta?.strokeFill ?? '#666',
        strokeSize: options.ephraimMeta?.strokeSize ?? 1,
      }));
    }
  }, [options]);

  // Handle dragging movement
  const panGesture = Gesture.Pan().onChange((event) => {
    let newValue = sliderValue.value - (event.changeY / SLIDER_HEIGHT) * 100;
    newValue = Math.max(0, Math.min(100, newValue));
    sliderValue.value = newValue;
    setDisplayValue(
      Math.round((newValue / 100) * (MAX_VALUE - MIN_VALUE) + MIN_VALUE)
    );
    if (onValueChange) {
      onValueChange(displayValue);
    }
  });

  // Thumb movement
  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          (1 - sliderValue.value / 100) * (SLIDER_HEIGHT - THUMB_RADIUS * 2),
      },
    ],
  }));

  // Animated icon movement if moveIcon is enabled
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: moveIcon ? sliderValue.value : 0 }],
  }));

  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        { padding: paddingSize },
        { width: widthSize },
        { borderRadius: fillBorderRadius },
      ]}>
      {showCounter && (
        <Text style={[styles.valueText, { color: counterColor }]}>
          {displayValue}
        </Text>
      )}

      <GestureDetector gesture={panGesture}>
        <View style={styles.sliderWrapper}>
          <Svg
            height={SLIDER_HEIGHT}
            width={SLIDER_WIDTH}
            style={styles.sliderBackground}>
            <Defs>
              <LinearGradient
                id="grad"
                x1={ephraimMeta.gradientPosition.x1.toString()}
                y1={ephraimMeta.gradientPosition.y1.toString()}
                x2={ephraimMeta.gradientPosition.x2.toString()}
                y2={ephraimMeta.gradientPosition.y2.toString()}>
                <Stop offset="0%" stopColor={ephraimMeta.colorOne} />
                <Stop offset="100%" stopColor={ephraimMeta.colorTwo} />
              </LinearGradient>
            </Defs>

            {/* Background Track */}
            <Rect
              x={(SLIDER_WIDTH - TRACK_WIDTH) / 2}
              y="0"
              width={TRACK_WIDTH}
              height={SLIDER_HEIGHT}
              rx={10}
              fill={ephraimMeta.innerColor}
              stroke={ephraimMeta.strokeFill}
              strokeWidth={
                ephraimMeta.enableStroke ? ephraimMeta.strokeSize : 0
              }
            />

            {/* Fill Color */}
            <Rect
              x={(SLIDER_WIDTH - TRACK_WIDTH) / 2}
              y={
                (1 - sliderValue.value / 100) *
                (SLIDER_HEIGHT - THUMB_RADIUS * 2)
              }
              width={TRACK_WIDTH}
              height={(sliderValue.value / 100) * SLIDER_HEIGHT}
              rx={10}
              fill="url(#grad)"
            />
          </Svg>

          {/* Movable Thumb */}
          <Animated.View style={[styles.thumbContainer, thumbStyle]}>
            <Circle
              cx={SLIDER_WIDTH / 2}
              cy={THUMB_RADIUS}
              r={THUMB_RADIUS}
              fill="white"
              stroke="#ff7e5f"
              strokeWidth={4}
            />
          </Animated.View>
        </View>
      </GestureDetector>

      {/* Volume Icon - Moves only if moveIcon is true */}
      {showIcon && (
        displayValue !== 0  ?
        <Animated.View style={iconStyle}>
          <FontAwesome
            name="volume-up"
            size={35}
            color={iconColor}
            style={styles.volumeIcon}
          />
        </Animated.View>
        :
        <Animated.View style={iconStyle}>
         {iconChange ?
          <Ionicons
            name="volume-mute-sharp"
            size={35}
            color={iconColor}
            style={styles.volumeIcon}
          />
          :
          <FontAwesome
            name="volume-up"
            size={35}
            color={iconColor}
            style={styles.volumeIcon}
          />}
        </Animated.View>
       

      ) 
        
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sliderWrapper: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  sliderBackground: {
    borderRadius: 20,
  },
  thumbContainer: {
    position: 'absolute',
    left: (SLIDER_WIDTH - THUMB_RADIUS * 2) / 2,
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
  },
  volumeIcon: {
    marginTop: 20,
  },
});

export default DevtarSlider;
