import React, { useEffect, useState } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const ProductList = [
  {
    name: "Add",
    description: "Description 1",
    position: 0,
  },
  {
    name: "Product 1",
    description: "Description 1",
    position: 1,
  },
  {
    name: "Product 2",
    description: "Description 2",
    position: 2,
  },
  {
    name: "Product 3",
    description: "Description 3",
    position: 3,
  },
  {
    name: "Product 4",
    description: "Description 4",
    position: 4,
  },
  {
    name: "Product 5",
    description: "Description 5",
    position: 5,
  },
  {
    name: "Product 6",
    description: "Description 6",
    position: 6,
  },
  {
    name: "Product 7",
    description: "Description 7",
    position: 7,
  },
];

function Products() {
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
  const [items, setItems] = useState(ProductList);

  const addProduct = (number) => {
    items.push({
      name: `Product ${number}`,
      description: `Description ${number}`,
      position: number,
    });
    console.log("Activated");
    console.log(items);
    onChange(items, items.length - 1, items.length);
  };

  const onChange = (sourceId, sourceIndex, targetIndex) => {
    console.log(sourceId);
    if (targetIndex === 0) {
      return;
    } else {
      const nextState = swap(items, sourceIndex, targetIndex);
      setItems(nextState);
    }
  };

  return (
    <ProductsContainer>
      <GridContextProvider onChange={onChange}>
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
      </GridContextProvider>
    </ProductsContainer>
  );
}

export default Products;

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
