import { useQuery, gql } from "@apollo/client";

const GET_TWEETSLIST = gql`
  query Tweets {
    Tweets {
      id
      body
      date
    }
  }
`;

function useGetTweets() {
  const { error, loading, data } = useQuery(GET_TWEETSLIST);
  return {
    error,
    loading,
    data,
  };
}

export default useGetTweets;
