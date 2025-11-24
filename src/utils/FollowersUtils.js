import axios from 'axios';
import { useFollowers } from '../stores/followers-store';

export const fetchData = async (url) => { 
    const setFollowers = useFollowers((state) => state.setFollowers);
    const { data } = await axios.get(url);
    setFollowers(data.users);
}