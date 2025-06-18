import { useState } from 'react';
import UsersList from './components/users-list/UsersList';

const App = () => {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  return (
    <>
      <h1>useState</h1>
      <UsersList
        showActiveOnly={showActiveOnly}
        setShowActiveOnly={setShowActiveOnly}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </>
  );
};

export default App;
