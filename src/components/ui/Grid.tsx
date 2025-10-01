'use client';

import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'none';
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'none';
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'none';
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'none';
  colsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'none';
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'none';
  rowsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'none';
  rowsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'none';
  rowsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'none';
  rowsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'none';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gapX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gapY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  flow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  autoFlow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  placeItems?: 'start' | 'end' | 'center' | 'stretch';
  placeContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  col?:
    | 'auto'
    | 'span-1'
    | 'span-2'
    | 'span-3'
    | 'span-4'
    | 'span-5'
    | 'span-6'
    | 'span-7'
    | 'span-8'
    | 'span-9'
    | 'span-10'
    | 'span-11'
    | 'span-12'
    | 'span-full';
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto';
  colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto';
  row?:
    | 'auto'
    | 'span-1'
    | 'span-2'
    | 'span-3'
    | 'span-4'
    | 'span-5'
    | 'span-6'
    | 'span-full';
  rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto';
  rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto';
  justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
  order?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 'first'
    | 'last'
    | 'none';
}

/**
 * Responsive Grid Component
 *
 * Features:
 * - Responsive column and row definitions
 * - Flexible gap controls
 * - Grid flow controls
 * - Placement utilities
 * - TypeScript support with auto-completion
 */
const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      cols,
      colsSm,
      colsMd,
      colsLg,
      colsXl,
      rows,
      rowsSm,
      rowsMd,
      rowsLg,
      rowsXl,
      gap,
      gapX,
      gapY,
      flow,
      autoFlow,
      placeItems,
      placeContent,
      children,
      ...props
    },
    ref,
  ) => {
    const getColsClass = (cols: GridProps['cols'], prefix = '') => {
      if (!cols) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      if (cols === 'auto') return `${prefixStr}grid-cols-auto`;
      if (cols === 'none') return `${prefixStr}grid-cols-none`;
      return `${prefixStr}grid-cols-${cols}`;
    };

    const getRowsClass = (rows: GridProps['rows'], prefix = '') => {
      if (!rows) return '';
      const prefixStr = prefix ? `${prefix}:` : '';
      if (rows === 'auto') return `${prefixStr}grid-rows-auto`;
      if (rows === 'none') return `${prefixStr}grid-rows-none`;
      return `${prefixStr}grid-rows-${rows}`;
    };

    const getGapClass = (gap: number | undefined, type = '') => {
      if (gap === undefined) return '';
      return type ? `gap-${type}-${gap}` : `gap-${gap}`;
    };

    const getFlowClass = (flow: GridProps['flow']) => {
      if (!flow) return '';
      const flowMap = {
        row: 'grid-flow-row',
        col: 'grid-flow-col',
        dense: 'grid-flow-dense',
        'row-dense': 'grid-flow-row-dense',
        'col-dense': 'grid-flow-col-dense',
      };
      return flowMap[flow];
    };

    const getPlaceClass = (
      place: string | undefined,
      type: 'items' | 'content',
    ) => {
      if (!place) return '';
      const prefix = type === 'items' ? 'place-items' : 'place-content';
      return `${prefix}-${place}`;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          getColsClass(cols),
          getColsClass(colsSm, 'sm'),
          getColsClass(colsMd, 'md'),
          getColsClass(colsLg, 'lg'),
          getColsClass(colsXl, 'xl'),
          getRowsClass(rows),
          getRowsClass(rowsSm, 'sm'),
          getRowsClass(rowsMd, 'md'),
          getRowsClass(rowsLg, 'lg'),
          getRowsClass(rowsXl, 'xl'),
          getGapClass(gap),
          getGapClass(gapX, 'x'),
          getGapClass(gapY, 'y'),
          getFlowClass(flow || autoFlow),
          getPlaceClass(placeItems, 'items'),
          getPlaceClass(placeContent, 'content'),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

/**
 * Grid Item Component
 *
 * Features:
 * - Column and row spanning
 * - Positioning controls
 * - Self-alignment utilities
 * - Order controls
 */
const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      className,
      col,
      colStart,
      colEnd,
      row,
      rowStart,
      rowEnd,
      justifySelf,
      alignSelf,
      order,
      children,
      ...props
    },
    ref,
  ) => {
    const getColClass = () => {
      if (col === 'auto') return 'col-auto';
      if (col === 'span-full') return 'col-span-full';
      if (col?.startsWith('span-')) {
        const num = col.split('-')[1];
        return `col-span-${num}`;
      }
      return '';
    };

    const getRowClass = () => {
      if (row === 'auto') return 'row-auto';
      if (row === 'span-full') return 'row-span-full';
      if (row?.startsWith('span-')) {
        const num = row.split('-')[1];
        return `row-span-${num}`;
      }
      return '';
    };

    const getStartEndClass = (
      value: number | 'auto' | undefined,
      type: 'col' | 'row',
      position: 'start' | 'end',
    ) => {
      if (!value) return '';
      return value === 'auto'
        ? `${type}-${position}-auto`
        : `${type}-${position}-${value}`;
    };

    const getSelfClass = (
      value: string | undefined,
      type: 'justify' | 'align',
    ) => {
      if (!value) return '';
      return `${type}-self-${value}`;
    };

    const getOrderClass = () => {
      if (!order) return '';
      if (order === 'first') return 'order-first';
      if (order === 'last') return 'order-last';
      if (order === 'none') return 'order-none';
      return `order-${order}`;
    };

    return (
      <div
        ref={ref}
        className={cn(
          getColClass(),
          getStartEndClass(colStart, 'col', 'start'),
          getStartEndClass(colEnd, 'col', 'end'),
          getRowClass(),
          getStartEndClass(rowStart, 'row', 'start'),
          getStartEndClass(rowEnd, 'row', 'end'),
          getSelfClass(justifySelf, 'justify'),
          getSelfClass(alignSelf, 'align'),
          getOrderClass(),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
