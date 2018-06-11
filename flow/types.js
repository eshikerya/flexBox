// @flow

declare type WithStylesComponentType<T> = {
    +classes: { [id: $Keys<T>]: any }
};

declare type CallbackType<T = void, R = void> = (value: T) => R;
