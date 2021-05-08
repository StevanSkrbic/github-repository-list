/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepositoriesData
// ====================================================

export interface RepositoriesData_search_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface RepositoriesData_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface RepositoriesData_search_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * The HTTP URL for this repository
   */
  url: GithubURI;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount: number;
}

export type RepositoriesData_search_edges_node = RepositoriesData_search_edges_node_App | RepositoriesData_search_edges_node_Repository;

export interface RepositoriesData_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: RepositoriesData_search_edges_node | null;
}

export interface RepositoriesData_search {
  __typename: "SearchResultItemConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: RepositoriesData_search_pageInfo;
  /**
   * A list of edges.
   */
  edges: (RepositoriesData_search_edges | null)[] | null;
}

export interface RepositoriesData {
  /**
   * Perform a search across resources.
   */
  search: RepositoriesData_search;
}
