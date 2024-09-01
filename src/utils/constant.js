export const BOARD_DATA = [
  {
    id: 1,
    clientName: "홍길동",
    clientNumber: "010-2345-9600",
    receivedDate: "2024-06-03",
    category: { name: "민사", color: "blue" },
  },
  {
    id: 2,
    clientName: "강한나",
    clientNumber: "010-2345-6789",
    receivedDate: "2024-08-13",
    category: { name: "형사", color: "red" },
  },
];

export const CASE_DATA_1 = {
  id: 1,
  clientName: "홍길동",
  category: { name: "민사", color: "blue" },
  taskLog: [
    { type: "요청", description: "초본 요청", createdAt: "2024-07-11" },
    { type: "완료", description: "초본 발급 완료", createdAt: "2024-07-13" },
    { type: "상담", description: "~에 대하여 상담", createdAt: "2024-07-18" },
    { type: "접수", description: "소장 접수", createdAt: "2024-08-18" },
    {
      type: "상담",
      description:
        "접수한 건에 대하여 언제쯤 완료되는지 물어보셔서, 보통 2-3주 정도 걸린다고 답변합",
      createdAt: "2024-08-22",
    },
  ],
};
