

/**
 * Display short search results info
 * Search - Total Books - tooltip (search development is in progress..)
 * @returns component
 */

export const SearchInfo: React.FC<{search: string, totalItems: number}> = (props) => {

   console.log("SEARCH: " + props.search + "    " + props.totalItems);

   return (
      <div>
         <h2 style={{ marginBottom: 0, marginTop: '1rem' }}>Total results: {props.totalItems}</h2>
      </div>
   )

}