export const initialState={
    basket: [],
};


  
const reducer = (state,action) =>{
    // console.log("action",action);
    // console.log("state",state);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket,action.pets],
            };
        case "REMOVE_FROM_BASKET":
            const target=action.pet;
            const index = state.basket.findIndex(
            (basketItem) => {return(
                basketItem.id === target.id
            )}
            );
            //console.log("indexo=",index);
            let newBasket = [...state.basket];
            if(index >=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `cant remove product (id: ${action.id}) as it is not in the cart`
                )
            }
            return{
                ...state,
                basket:newBasket
            }
        case "SHOW_MORE":
            const targeto = action.peto;
            console.log(targeto);
            
            return{
                ...state,
                reader:[targeto]
            }
            
        default:
            return state;
    }
};

export default reducer;