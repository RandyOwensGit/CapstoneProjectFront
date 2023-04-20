

/**
 * Display short search results info
 * Search - Total Books - tooltip (search development is in progress..)
 * @returns component
 */

export const SearchInfo: React.FC<{search: string, totalItems: number}> = (props) => {

   return (
      <div>
         <h2 style={{ marginBottom: 0, marginTop: '50px' }}>Search results for: {props.search}</h2>
         <h2 style={{ marginBottom: 0, marginTop: 0 }}>Total results: {props.totalItems}</h2>
      </div>
   )

}