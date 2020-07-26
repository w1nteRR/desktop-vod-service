import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { setSearchData, setActiveTag } from '../../redux/search/actions'

export const useSearch = () => {

    const dispatch = useDispatch()
    const search = useSelector((state: RootState) => state.search)

    for( let key in search.searchData ) {
        if(!search.searchData[key].length) {
            delete search.searchData[key]
        }
    }

    const handleBox = (type: string, id: number) => {
        for (const [key, value] of Object.entries(search.tags)) {
            key === type && value!.forEach((checkbox) => {
                if(checkbox.id === id) {
                    checkbox.checked = !checkbox.checked
                    
                    const checkedOnly = value.filter(tag => tag.checked)
                    
                    dispatch(setSearchData(key, checkedOnly))
                }                
            })
        }
        dispatch(setActiveTag(search.tags))
    }

    return {
        handleBox
    }
}