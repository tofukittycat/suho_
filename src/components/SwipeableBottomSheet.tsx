import { ReactNode, useRef } from "react";
import { Sheet } from "react-modal-sheet";

import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";

type SwipeableBottomSheetProps = {
  isOpen: boolean;
  snapPoints: number[];
  initialSnap: number;
  children: ReactNode;

  onOpen: () => void;
  onClose: () => void;
};

export default function SwipeableBottomSheet({
  isOpen,
  snapPoints,
  initialSnap,
  children,

  onOpen,
  onClose,
}: SwipeableBottomSheetProps) {
  return (
    <CustomSheet
      rootId="root"
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      onSnap={snapIndex => {
        if (snapIndex === snapPoints.length - 1) {
          onOpen();
        }
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "0 auto",
        minWidth: "375px",
        maxWidth: "430px",
        zIndex: 10,
      }}
    >
      <Sheet.Container>
        <Sheet.Header style={{ height: "30px" }}>
          <Puller />
        </Sheet.Header>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      {/* <Sheet.Backdrop /> */}
    </CustomSheet>
  );
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    /* custom styles */
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
  }
`;

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
