export const getDomOffset = (el: Element | null) => {
  if (!el) return { left: 0, top: 0 };
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX, // 距离页面左上角的横坐标
    top: rect.top + window.scrollY, // 距离页面左上角的纵坐标
  };
};
