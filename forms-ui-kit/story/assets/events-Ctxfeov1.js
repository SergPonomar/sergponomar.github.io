import { i as defineStore, K as reactive, r as ref, k as watch } from "./vendor-BdWLuvDD.js";
import { u as useStoryStore } from "./story-C_AInNAV.js";
import "./GenericMountStory.vue2-D4qQNGzq.js";
const useEventsStore = defineStore("events", () => {
  const storyStore = useStoryStore();
  const events = reactive([]);
  const unseen = ref(0);
  function addEvent(event) {
    events.push(event);
    unseen.value++;
  }
  function reset() {
    events.length = 0;
    unseen.value = 0;
  }
  watch(() => {
    var _a;
    return (_a = storyStore.currentVariant) == null ? void 0 : _a.id;
  }, () => {
    reset();
  });
  return {
    addEvent,
    reset,
    events,
    unseen
  };
});
export {
  useEventsStore
};
