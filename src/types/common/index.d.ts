declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.css';
declare module '*.scss';
declare module '*.less';

declare interface Window {
  BSGlobal: any;
  BSFetch: any;
}

declare let BSGlobal: Window['BSGlobal'];

declare let BSFetch: Window['BSFetch'];

// 接口声明
interface action {
  type: string
}

interface action_CHANGE_NODE_CHOSEN {
  type: string
  id: number
}

interface action_DRAG_START {
  type: string
  item: TreeNode
}

interface action_DROP_VALUE {
  type: string
  item: TreeNode
}

interface action_DROP_VALUE_TOP {
  type: string
  item: TreeNode
}

interface TreeNode {
  id: number
  value: string
  fatherId: number
  chosen: boolean
  children?: TreeNode[] | undefined
  childrenChosen?: number
}