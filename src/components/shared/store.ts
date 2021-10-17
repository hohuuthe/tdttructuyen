import create, { GetState, SetState, StateCreator, StoreApi } from "zustand";
import { SupportedClasses } from "~/types";

// https://github.com/pmndrs/zustand/issues/76#issuecomment-670367631
interface Store {
  class: SupportedClasses;
  setClass: (className: SupportedClasses) => void;
}

const isRunningInBrowser = () => typeof window !== "undefined";

const persist =
  <T extends object>(name: string, config: StateCreator<T>) =>
  (set: SetState<T>, get: GetState<T>, api: StoreApi<T>): T => {
    const state = config(
      payload => {
        set(payload);

        if (isRunningInBrowser()) {
          localStorage.setItem(name, JSON.stringify(payload));
        }
      },
      get,
      api,
    );

    return {
      ...state,
      ...(isRunningInBrowser() && JSON.parse(localStorage.getItem(name)!)),
    };
  };

export const useStore = create<Store>(
  persist<Store>("state", (set, get) => ({
    class: "c1",
    setClass: payload => {
      const state = get();

      set({ ...state, class: payload });
    },
  })),
);
