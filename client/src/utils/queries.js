import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query Query($category: ID) {
    products(category: $category) {
      _id
      quantity
      image
      price
      description
      name
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
query Query($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
query Query {
    products {
      _id
      name
      description
      image
      quantity
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
 {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
 {
    user {
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          image
          quantity
          price
        }
      }
    }
  }
`;