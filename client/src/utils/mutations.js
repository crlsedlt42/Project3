import  { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }`;

  export const ADD_ORDER = gql`
  mutation Mutation($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        image
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
  `;

  export const ADD_USER = gql`
  mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
  `;
