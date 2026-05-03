export interface Tab {
  id: string;
  label: string;
  filename: string;
}

export interface FileTabsApi {
  tabs: Tab[];
  activeId: string | null;
  openTab: (id: string, label: string, filename: string) => void;
  focusTab: (id: string) => void;
  closeTab: (id: string) => void;
  closeOthers: (id: string) => void;
  closeAll: () => void;
  isLoaded: (id: string) => boolean;
  markLoaded: (id: string) => void;
}
