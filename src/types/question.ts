export type Question = {
  id: number;
  text: string;         // 問題文
  answer: boolean;      // 正解（true:○, false:×）
  explanation?: string; // 解説
  category?: string;    // カテゴリ（例: 信号 標識 運転マナーなど）
};