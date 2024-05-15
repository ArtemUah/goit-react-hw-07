import {useId} from 'react';
import css from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function () {
    const inputValue = useSelector(state=>state.filters.name)
    const dispatch = useDispatch();
    const filterId=useId();
return (<div className={css.container}>
    <label htmlFor={filterId}>Find contacts by name</label>
    <input id={filterId} value={inputValue} onChange={(e)=>dispatch(changeFilter(e.target.value))}/>
</div>)
}