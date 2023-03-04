import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search(props) {
  const { setSearchUser } = props;
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchUser(search);
  };

  return (
    <div className='search-input'>
      <div className='flex-row fgrow'>
        <IoIosSearch size='2em' color='#0079ff' style={{ margin: "0px 8px" }} />
        <input
          type='search'
          placeholder='Search GitHub username...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className='btn-primary align-end' onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}
