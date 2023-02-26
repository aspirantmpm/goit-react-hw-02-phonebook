export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} style={{ marginLeft: '150px' }}>
          {item.name} : {item.number}          
        </li>
      ))}
    </ul>
  );
};
