const DATA = {
  all: { sales: 1200, users: 340, revenue: 58000000 },
  sales: { sales: 800, users: 90, revenue: 40000000 },
  marketing: { sales: 200, users: 150, revenue: 10000000 },
  support: { sales: 200, users: 100, revenue: 8000000 },
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchStats(department) {
  await delay(500);
  return DATA[department] || DATA.all;
}
