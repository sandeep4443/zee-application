const initState = {};
const movieDetailReducer = (state = initState, action) =>
 { 
     switch (action.type) { 
         case 'DETAIL_PAGE':
              return { 
                  data: action.data 
                }; 
                default: return state
             } 
            }
export default movieDetailReducer;