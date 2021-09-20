import { gql } from '@apollo/client';

export const GET_FARMS = gql`
  query Query {
    getFarms {
      chain {
        chainId
        displayName
        nativeTokenName
        explorerPath
        iconPath
      }
      displayName
      description
      sitePath
      masterchefAddress
      tokenAddress
      launchDate
      farmRating {
        stars
        upVotes
        downVotes
      }
    }
  }
`;
