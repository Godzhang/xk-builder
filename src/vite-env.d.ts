/// <reference types="vite/client" />

import { ComJson } from "./pages/builder/mainPart";

declare global {
  interface Window {
    nowCom: string;
    // 临时定义
    renderCom: ComJson;
    comList: ComJson[];
    setComList: Function;
    // 临时定义 end
  }
}
