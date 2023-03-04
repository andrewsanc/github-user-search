import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className='search-input'>
      <div className='flex-row fgrow'>
        <IoIosSearch size='2em' color='#0079ff' style={{ margin: "0px 8px" }} />
        <input type='search' placeholder='Search GitHub username...' />
      </div>
      <button className='btn-primary align-end'>Search</button>
    </div>
  );
}
