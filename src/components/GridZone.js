import React from "react";
import { GridDropZone, GridItem } from "react-grid-dnd";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
function GridZone({ items, addProduct }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 240,
      width: 200,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      margin: "2em",
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <GridDropZone
      id="items"
      boxesPerRow={4}
      rowHeight={300}
      style={{ height: "200vh" }}
    >
      {items.map((item) =>
        item.position === 0 ? (
          <GridItem
            onClick={() => addProduct(items.length)}
            onMouseDown={(e) => {
              e.preventDefault();
              return false;
            }}
            key={item.position}
          >
            <Product>
              <Paper className={classes.paper}>
                <AddCircleOutlineIcon fontSize={"large"} />
              </Paper>
            </Product>
          </GridItem>
        ) : (
          <GridItem key={item.position}>
            <Product>
              <Paper className={classes.paper}>{item.name}</Paper>
            </Product>
          </GridItem>
        )
      )}
    </GridDropZone>
  );
}

export default GridZone;

const ProductsContainer = styled.div`
  margin: auto auto;
  width: 80%;
  padding-top: 5em;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
`;
