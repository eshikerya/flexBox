// @flow

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

declare type WithStylesComponentType<T> = {
    +classes: { [id: $Keys<T>]: any }
};

declare type CallbackType<T = void, R = void> = (value: T) => R;
declare type StylesType = StyleObj;
