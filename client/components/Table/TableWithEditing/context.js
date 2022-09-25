import { createContext, useState } from "react";

export const TableWithEditingContext = createContext();

const Provider = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <TableWithEditingContext.Provider value={{ dialogOpen: { state: dialogOpen, setter: setDialogOpen } }}>
      {props.children}
    </TableWithEditingContext.Provider>
  );
}

export default Provider;