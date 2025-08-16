export const useCounterStore = defineStore("Counter", () => {
  /** The initial counter value */
  const counter = ref(0);
  /**
   * Method used to increase the counter value
   */
  const increment = (value: number = 1) => {
    counter.value += value;
  };
  /**
   * Method used to decrease the counter value
   */
  const decrement = (value: number = 1) => {
    counter.value -= value;
  };

  return { counter, increment, decrement };
});
