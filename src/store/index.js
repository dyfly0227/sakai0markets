import { defineStore } from "pinia";

const useTradeStore = defineStore("trade", {
  state: () => {
    return {
      coins: {},
      buys: [],
      sells: [],
      deals: [],
    };
  },
  actions: {
    setCoins(data) {
      Object.assign(this.coins, data);
    },
    setBooks(data) {
      console.log(data);
      const buys = data.d.asks
        ? data.d.asks.filter((item) => item.a != "0" && item.q != "")
        : [];
      const sells = data.d.bids
        ? data.d.bids.filter((item) => item.a != "0" && item.q != "")
        : [];
      const deals = data.d.deals
        ? data.d.deals.filter((item) => item.a != "0" && item.q != "")
        : [];
      // 只存取20个数据
      this.buys = buys.concat(this.buys).slice(0, 8);
      this.sells = sells.concat(this.sells).slice(0, 8);
      this.deals = deals.concat(this.deals).slice(0, 10);
    },
    clearBooks() {
      this.buys = [];
      this.sells = [];
      this.deals = [];
    },
  },
});
export default useTradeStore;
