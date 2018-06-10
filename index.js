/**
 * FlexBox components library
 * @flow
 */

import type { ElementType } from 'react';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

type InternalPropsType = WithStylesComponentType<typeof styleSheet>;

export type FlexBoxPropsType = {
    +children: ElementType | Array<ElementType>,

    childCell?: boolean,
    className?: string,
    style?: Object,
    onClick?: ?CallbackType<SyntheticEvent<HTMLElement>, void>,
    as?: ElementType,

    inline?: boolean,

    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    flexDirectionRow?: boolean,
    flexDirectionRowReverse?: boolean,
    flexDirectionColumn?: boolean,
    flexDirectionColumnReverse?: boolean,

    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between',
    justifyContentCenter?: boolean,
    justifyContentFlexEnd?: boolean,
    justifyContentFlexStart?: boolean,
    justifyContentSpaceAround?: boolean,
    justifyContentSpaceBetween?: boolean,

    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch',
    alignItemsBaseline?: boolean,
    alignItemsCenter?: boolean,
    alignItemsFlexEnd?: boolean,
    alignItemsFlexStart?: boolean,
    alignItemsStretch?: boolean,

    alignContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch',
    alignContentCenter?: boolean,
    alignContentFlexEnd?: boolean,
    alignContentFlexStart?: boolean,
    alignContentSpaceAround?: boolean,
    alignContentSpaceBetween?: boolean,
    alignContentStretch?: boolean,

    alignSelf?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch',
    alignSelfAuto?: boolean,
    alignSelfBaseline?: boolean,
    alignSelfCenter?: boolean,
    alignSelfFlexEnd?: boolean,
    alignSelfFlexStart?: boolean,
    alignSelfStretch?: boolean,

    flexGrow?: number,
    flexShrink?: number,
    flexBasis?: string,

    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    flexWrapNowrap?: boolean,
    flexWrapWrap?: boolean,
    flexWrapWrapReverse?: boolean,

    // shortcuts
    alignCenter?: boolean,
    alignVCenter?: boolean,
    alignHCenter?: boolean,
    flex00?: boolean,
    flex10?: boolean,
    flex01?: boolean,
    flex11?: boolean,
    flexGrow?: number,
    flexShrink?: number,
    flexBasis?: string
};

const styleSheet = {
    root: css`
        display: flex;
    `,
    inline: css`
        display: inline-flex;
    `,
    flexDirectionRow: css`
        flex-direction: row;
    `,
    flexDirectionColumn: css`
        flex-direction: column;
    `,
    flexDirectionRowReverse: css`
        flex-direction: row-reverse;
    `,
    flexDirectionColumnReverse: css`
        flex-direction: column-reverse;
    `,
    justifyContentCenter: css`
        justify-content: center;
    `,
    justifyContentFlexEnd: css`
        justify-content: flex-end;
    `,
    justifyContentFlexStart: css`
        justify-content: flex-start;
    `,
    justifyContentSpaceAround: css`
        justify-content: space-around;
    `,
    justifyContentSpaceBetween: css`
        justify-content: space-between;
    `,
    alignItemsBaseline: css`
        align-items: baseline;
    `,
    alignItemsCenter: css`
        align-items: center;
    `,
    alignItemsFlexEnd: css`
        align-items: flex-end;
    `,
    alignItemsFlexStart: css`
        align-items: flex-start;
    `,
    alignItemsStretch: css`
        align-items: stretch;
    `,
    alignContentCenter: css`
        align-content: center;
    `,
    alignContentFlexEnd: css`
        align-content: flex-end;
    `,
    alignContentFlexStart: css`
        align-content: flex-start;
    `,
    alignContentSpaceAround: css`
        align-content: space-around;
    `,
    alignContentSpaceBetween: css`
        align-content: space-between;
    `,
    alignContentStretch: css`
        align-content: stretch;
    `,
    alignSelfAuto: css`
        align-self: auto;
    `,
    alignSelfBaseline: css`
        align-self: baseline;
    `,
    alignSelfCenter: css`
        align-self: center;
    `,
    alignSelfFlexEnd: css`
        align-self: flex-end;
    `,
    alignSelfFlexStart: css`
        align-self: flex-start;
    `,
    alignSelfStretch: css`
        align-self: stretch;
    `,
    flexWrapNowrap: css`
        flex-wrap: nowrap;
    `,
    flexWrapWrap: css`
        flex-wrap: wrap;
    `,
    flexWrapWrapReverse: css`
        flex-wrap: wrap-reverse;
    `,
    alignCenter: css`
        justify-content: center;
        align-items: center;
    `,
    alignVCenter: css`
        justify-content: center;
    `,
    alignHCenter: css`
        align-items: center;
    `,
    flex00: css`
        flex: 0 0 auto;
    `,
    flex10: css`
        flex: 1 0 auto;
    `,
    flex01: css`
        flex: 0 1 auto;
    `,
    flex11: css`
        flex: 1 1 auto;
    `
};

const getFlexBoxClasses = (props: FlexBoxPropsType, classes: Object = {}) =>
    classNames(
        {
            [classes.root]: !props.childCell || !props.inline,
            [classes.inline]: props.inline,
            [classes[`flexDirection${String(props.flexDirection)}`]]: !!props.flexDirection,
            [classes.flexDirectionRow]: props.flexDirectionRow,
            [classes.flexDirectionRowReverse]: props.flexDirectionRowReverse,
            [classes.flexDirectionColumn]: props.flexDirectionColumn,
            [classes.flexDirectionColumnReverse]: props.flexDirectionColumnReverse,
            [classes[`justifyContent${String(props.justifyContent)}`]]: !!props.justifyContent,
            [classes.justifyContentCenter]: props.justifyContentCenter,
            [classes.justifyContentFlexEnd]: props.justifyContentFlexEnd,
            [classes.justifyContentFlexStart]: props.justifyContentFlexStart,
            [classes.justifyContentSpaceAround]: props.justifyContentSpaceAround,
            [classes.justifyContentSpaceBetween]: props.justifyContentSpaceBetween,
            [classes[`alignItems${String(props.alignItems)}`]]: !!props.alignItems,
            [classes.alignItemsBaseline]: props.alignItemsBaseline,
            [classes.alignItemsCenter]: props.alignItemsCenter,
            [classes.alignItemsFlexEnd]: props.alignItemsFlexEnd,
            [classes.alignItemsFlexStart]: props.alignItemsFlexStart,
            [classes.alignItemsStretch]: props.alignItemsStretch,
            [classes[`alignContent${String(props.alignContent)}`]]: !!props.alignContent,
            [classes.alignContentCenter]: props.alignContentCenter,
            [classes.alignContentFlexEnd]: props.alignContentFlexEnd,
            [classes.alignContentFlexStart]: props.alignContentFlexStart,
            [classes.alignContentSpaceAround]: props.alignContentSpaceAround,
            [classes.alignContentSpaceBetween]: props.alignContentSpaceBetween,
            [classes.alignContentStretch]: props.alignContentStretch,
            [classes[`alignSelf${String(props.alignSelf)}`]]: !!props.alignSelf,
            [classes.alignSelfAuto]: props.alignSelfAuto,
            [classes.alignSelfBaseline]: props.alignSelfBaseline,
            [classes.alignSelfCenter]: props.alignSelfCenter,
            [classes.alignSelfFlexEnd]: props.alignSelfFlexEnd,
            [classes.alignSelfFlexStart]: props.alignSelfFlexStart,
            [classes.alignSelfStretch]: props.alignSelfStretch,
            [classes[`flexWrap${String(props.flexWrap)}`]]: !!props.flexWrap,
            [classes.flexWrapNowrap]: props.flexWrapNowrap,
            [classes.flexWrapWrap]: props.flexWrapWrap,
            [classes.flexWrapWrapReverse]: props.flexWrapWrapReverse,
            [classes.alignCenter]: props.alignCenter,
            [classes.alignHCenter]: props.alignHCenter,
            [classes.alignVCenter]: props.alignVCenter,
            [classes.flex00]: props.flex00,
            [classes.flex10]: props.flex10,
            [classes.flex01]: props.flex01,
            [classes.flex11]: props.flex11
        },
        props.className
    );

export const FlexBox = (props: FlexBoxPropsType & InternalPropsType) => {
    const { children, style = {}, flexGrow = null, flexBasis = null, flexShrink = null, onClick, as, classes } = props;
    const computed = getFlexBoxClasses(props, classes);
    const flexStyles = {
        ...{ flexGrow },
        ...{ flexBasis },
        ...{ flexShrink }
    };

    const Comp = as || 'div';
    return (
        <Comp className={computed} style={{ ...flexStyles, ...style }} onClick={onClick}>
            {children}
        </Comp>
    );
};
FlexBox.displayName = 'FlexBox';

export default withStyles(styleSheet)(FlexBox);
