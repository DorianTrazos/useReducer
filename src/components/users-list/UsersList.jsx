import { USERS } from '../../constants/users';

const UsersList = ({
  showActiveOnly,
  setShowActiveOnly,
  page,
  setPage,
  itemsPerPage,
  setItemsPerPage
}) => {
  const filteredUsers = filterUsers(USERS, showActiveOnly);

  const { currentPageItems, totalPages } = paginateUsers(
    filteredUsers,
    page,
    itemsPerPage
  );

  return (
    <div>
      <div>
        <label>Solo activos</label>
        <input
          type='checkbox'
          checked={showActiveOnly}
          onChange={() =>
            toggleActive(showActiveOnly, setShowActiveOnly, setPage)
          }
        />
      </div>
      <div>
        <label htmlFor='items-per-page'>Usuarios por página</label>
        <select onChange={event => setItemsPerPage(event.target.value)}>
          <option value='2'>2</option>
          <option value='4'>4</option>
          <option value='6'>6</option>
        </select>
      </div>

      <ul>
        {currentPageItems.map(user => (
          <li key={user.userId}>
            <img
              src={user.profileImage}
              alt={user.name}
              width='32'
              style={{
                borderRadius: '50%',
                verticalAlign: 'middle',
                marginRight: '8px'
              }}
            />
            <strong>{user.name}</strong> @{user.username} –{' '}
            {user.active ? '✅' : '❌'}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        Página {page} de {totalPages}
        <br />
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

// 🔹 Función para filtrar por estado
const filterUsers = (users, showActiveOnly) => {
  if (!showActiveOnly) return [...users];

  return users.filter(user => user.active);
};

// 🔹 Función para paginar
const paginateUsers = (users, page, itemsPerPage) => {
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentPageItems = users.slice(startIndex, startIndex + itemsPerPage);
  return { currentPageItems, totalPages };
};

// 🔹 Controlador de filtro activo
const toggleActive = (showActiveOnly, setShowActiveOnly, setPage) => {
  setShowActiveOnly(!showActiveOnly);
  setPage(1);
};

export default UsersList;
