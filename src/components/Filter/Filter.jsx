import './Filter.module.css';
import { useContacts } from '../Hooks/hooks';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div>
      <h2>Filter contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
