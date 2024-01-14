import React from 'react';
// @ts-ignore
import { useDrag, useDrop, DragObjectWithType, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';

interface Item {
    id: string;
    text: string;
}

interface DraggableItemProps {
    id: string;
    text: string;
    index: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, text, index, moveItem }) => {
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'ITEM',
        item: { type: 'ITEM', id, index },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'ITEM',
        hover: (item: DragObjectWithType & { index: number }, monitor: DropTargetMonitor) => {
            if (!dropRef.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const dropRef = React.useRef<HTMLDivElement>(null);
    drag(dropRef);
    preview(drop(dropRef));

    return (
        <div
            ref={dropRef}
            style={{
                width: '200px',
                opacity: isDragging ? 0.5 : 1,
                // border: '1px dashed #000',
                padding: '8px',
                marginBottom: '8px',
                background: "red",
                color: 'white'
            }}
        >
            {text}
        </div>
    );
};

interface DragAndDropListProps {
    items: Item[];
}

const DragAndDropList: React.FC<DragAndDropListProps> = ({ items }) => {
    const [listItems, setListItems] = React.useState(items);

    const moveItem = (dragIndex: number, hoverIndex: number) => {
        const draggedItem = listItems[dragIndex];
        const updatedList = [...listItems];
        updatedList.splice(dragIndex, 1);
        updatedList.splice(hoverIndex, 0, draggedItem);
        setListItems(updatedList);
    };

    return (
        <div>
            {listItems.map((item, index) => (
                <DraggableItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    index={index}
                    moveItem={moveItem}
                />
            ))}
        </div>
    );
};

export default DragAndDropList;
