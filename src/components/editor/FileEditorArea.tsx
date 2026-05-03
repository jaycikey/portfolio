import EmptyFileState from '@/components/layout/EmptyFileState';
import FileLoadingState from './FileLoadingState';
import FileContent, { type ItemType } from './FileContent';
import type { ContactFile, FileItem } from '@/types/data';

interface Props {
  item: FileItem | ContactFile | undefined;
  tabId: string | null;
  isLoaded: boolean;
  onLoaded: (id: string) => void;
  itemType: ItemType;
}

export default function FileEditorArea({
  item,
  tabId,
  isLoaded,
  onLoaded,
  itemType,
}: Props) {
  if (!item || !tabId) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <EmptyFileState />
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <FileLoadingState
          filename={item.filename}
          onComplete={() => onLoaded(tabId)}
        />
      </div>
    );
  }

  return <FileContent item={item} itemType={itemType} />;
}
