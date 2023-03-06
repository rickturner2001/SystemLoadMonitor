type MemoryData = {
  total: number;
  available: number;
  used: number;
  pct: number;
};

type APIReponse = {
  cpu: number[];
  memory: MemoryData;
};
