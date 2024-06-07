import { ReactNode, useRef } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

type SwipeableBottomSheetProps = {
  isOpen: boolean;
  children?: ReactNode;
};

export default function SwipeableBottomSheet({ isOpen, children }: SwipeableBottomSheetProps) {
  // const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <BottomSheet open={isOpen} className="bg-blue-300">
      {children}
      {/* <button
        onClick={() => {
          // Full typing for the arguments available in snapTo, yay!!
          sheetRef.current?.snapTo(({ maxHeight }) => maxHeight);
        }}
      >
        {children}
      </button> */}
    </BottomSheet>
  );
}
